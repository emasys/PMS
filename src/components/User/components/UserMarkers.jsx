import * as React from 'react';

const UserMarkers = () => (
  <div className="container">
    <div className="row mt-4 mb-4">
      <div className="col-3 location-card">
        <div className="location-card-header">
          <h2>header</h2>
        </div>
        <div className="divider" />
        <div className="location-card-body">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
            fugiat quia aliquam facere vero, fugit repudiandae illo id
            architecto qui! Doloribus consectetur nisi quibusdam asperiores
            necessitatibus, animi adipisci officiis recusandae.
          </p>
        </div>
        <div className="location-card-footer text-center">
          <hr className="mb-1" />
          <a href="#!">Edit </a>
          or
          <a href="#!"> Delete </a>
          this location.
        </div>
      </div>
    </div>
  </div>
);

export default UserMarkers;
