import React, { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import RoomIcon from '@mui/icons-material/Room';
import Star from '@mui/icons-material/Star';
import './App.css';

function App() {
  const [place, setPlace] = useState({
    longitude: -74.005994,
    latitude: 40.712749,
    zoom: 13
  })
  
  const [showPopup, setShowPopup] = useState(true);
  
  return (
    <div className="App">
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        initialViewState={place}
        onChange = {(nextPlace) => setPlace(nextPlace)}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={-74.013382} latitude={40.712742} anchor="bottom" >
         <RoomIcon className="zoom-icon" />
        </Marker>

      {showPopup && (
      <Popup longitude={-74.013382} latitude={40.712742}
        anchor="left"
        onClose={() => setShowPopup(false)}>
        <div className='card'>
          <label>Place</label>
          <h4 className='Place'>World Trade Center</h4>
          <label>Review</label>
          <p className='desc'>Great View! Tallest building in the USA</p>
          <label>Rating</label>
          <div className='stars'>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
          </div>
          <span className='username'>Created by <b>Andy</b></span>
          <span className='date'>1 hour ago</span>
        </div>
      </Popup>)}
      
      </Map>
    </div>
  );
}

export default App;
