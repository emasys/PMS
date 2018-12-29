/* eslint-disable no-return-assign */
// @flow

import * as React from 'react';
import MapGL from 'react-map-gl';

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
        width: 400,
      },
    };
  }

  componentDidMount() {
    this.setState({
      viewport: {
        latitude: 6.465422,
        longitude: 3.406448,
        zoom: 8,
        height: this.mapWidgetElement.clientHeight,
        width: this.mapWidgetElement.clientWidth,
      },
    });
  }

  render() {
    const { viewport } = this.state;
    return (
      <div
        className="map-wrapper"
        // eslint-disable-next-line flowtype/require-return-type
        ref={mapWidgetElement => (this.mapWidgetElement = mapWidgetElement)}
      >
        <MapGL
          {...viewport}
          mapStyle="mapbox://styles/mapbox/dark-v9"
          mapboxApiAccessToken={TOKEN}
          // eslint-disable-next-line no-shadow
          onViewportChange={(viewport): Function => this.setState({ viewport })}
        />
      </div>
    );
  }
}
