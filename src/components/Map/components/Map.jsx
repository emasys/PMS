/* eslint-disable no-return-assign */
// @flow

import * as React from 'react';
import MapGL, { Marker, Popup } from 'react-map-gl';
import Pin from './Pin';
import CityInfo from './CityInfo';
import mock from '../../../mock.json';

type State = {
  viewport: {
    latitude: number,
    longitude: number,
    zoom: number,
    bearing: number,
    pitch: number,
    height: number,
    width: number,
  },
};

const TOKEN = process.env.REACT_APP_MAPTOKEN;
export default class Map extends React.Component<*, State> {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 6.465422,
        longitude: 3.406448,
        zoom: 8,
        bearing: 0,
        pitch: 0,
        height: 600,
        width: '100vw',
      },
    };
  }

  renderMarker = (city, index) => (
    <Marker
      key={`marker-${index}`}
      longitude={city.longitude}
      latitude={city.latitude}
    >
      <Pin
        size={20}
        onClick={(): Function => this.setState({ popupInfo: city })}
      />
    </Marker>
  );

  renderPopup() {
    const { popupInfo } = this.state;
    console.log(popupInfo);
    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          // eslint-disable-next-line flowtype/require-return-type
          onClose={() => this.setState({ popupInfo: null })}
        >
          <CityInfo info={popupInfo} />
        </Popup>
      )
    );
  }

  render() {
    const { viewport } = this.state;
    return (
      <div className="map-wrapper">
        <MapGL
          {...viewport}
          mapStyle="mapbox://styles/mapbox/dark-v9"
          mapboxApiAccessToken={TOKEN}
          // eslint-disable-next-line no-shadow
          onViewportChange={(viewport): Function => this.setState({ viewport })}
        >
          {mock.map(this.renderMarker)}
          {this.renderPopup()}
        </MapGL>
      </div>
    );
  }
}
