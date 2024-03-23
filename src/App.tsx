import React from 'react';
import logo from './logo.svg';
import './App.css';
import {APIProvider, Map } from '@vis.gl/react-google-maps';
import {Polygon} from './components';

function App() {
  const position = {lat: -37.81829, lng: 144.96063};
  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string;
  const paths = [
    {lat: -37.81621, lng: 144.96405},
    {lat: -37.81809, lng: 144.96493},
    {lat: -37.81922, lng: 144.96105},
    {lat: -37.81829, lng: 144.96063},
    {lat: -37.81791, lng: 144.96196},
    {lat: -37.81696, lng: 144.96149},
    {lat: -37.81621, lng: 144.96405},
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <APIProvider apiKey={googleMapsApiKey}>
            <Map
              style={{width: '100vw', height: '100vh'}}
              defaultCenter={position}
              defaultZoom={16}
              gestureHandling={'greedy'}
              disableDefaultUI={true}
            >
              { <Polygon strokeWeight={1.5} paths={paths}/> }
            </Map>
          </APIProvider>
      </header>
    </div>
  );
}

export default App;
