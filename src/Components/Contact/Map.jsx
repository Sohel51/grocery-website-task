import React from 'react';
import GoogleMapReact from 'google-map-react';

const MapSection = () => {
  const center = {
    lat: 37.7749,
    lng: -122.4194
  };
  const zoom = 12;

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Location</h2>
        <div style={{ height: '400px', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBEu8tXYc1K9RqCMmOiW69XhRREw3N1z74' }}
            defaultCenter={center}
            defaultZoom={zoom}
          >
            <div
              lat={center.lat}
              lng={center.lng}
              className="bg-red-500 w-8 h-8 rounded-full"
            />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
