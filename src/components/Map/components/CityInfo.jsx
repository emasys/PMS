// @flow
import * as React from 'react';
import { formatNumber } from '../../../util';

type Props = {
  info: {
    area: string,
    lga: string,
    male: number,
    female: number,
    latitude: number,
    longitude: number,
    state: string,
    added_by: string,
    created_at: string,
    updated_at: string,
  },
};
export default ({ info }: Props): React.Node => (
  <div>
    <div className="row">
      <div className="col-12 pop-up-wrapper">
        <p>
          <i className="fas fa-map-marker" />
          {' '}
          {info.lga}
        </p>
        <div className="population-wrapper">
          <p className="population-header">
            Residents:
            {' '}
            {formatNumber(info.male + info.female)}
          </p>
          <p className="male">
            <i className="fas fa-male text-blue" />
            {' '}
            {formatNumber(info.male)}
          </p>
          <p className="female">
            <i className="fas fa-female text-pink" />
            {' '}
            {formatNumber(info.female)}
          </p>
        </div>
      </div>
    </div>
  </div>
);
