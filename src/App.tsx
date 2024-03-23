import React from 'react';
import logo from './logo.svg';
import './App.css';
import {APIProvider, Map } from '@vis.gl/react-google-maps';
import {Polygon} from './components';

function App() {
  const position = {lat: -37.869300842285156, lng: 144.7637176513672};
  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string;
  // const paths = [{lat: -37.81621, lng: 144.96405}];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <APIProvider apiKey={googleMapsApiKey}>
            <Map
            style={{width: '100vw', height: '100vh'}}
            defaultCenter={position}
            defaultZoom={13}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
            />
            {/* <Polygon strokeWeight={1.5} paths={paths}/> */}
          </APIProvider>
      </header>
    </div>
  );
}

export default App;
