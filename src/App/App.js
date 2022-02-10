import React from 'react';
import './App.css'
import Card from './Components/Card/Card';
import results from './db_crawling.json';

function App() {
  return (
    <div className="card-class">
    {(Object.entries(results) || []).map(([key, value]) => {
          return (
              <Card
                  images3={value.image_s3}
                  username={value.id_utente}
                  post={value.testo_post}
                  location={value.location}
                  longitude={value.longitudine}
                  latitude={value.latitudine}
                  comprehend={value.sentiment}
                  rekognition={value.tag_rekognition}
                  phone={value.phone}
                  website={value.web_site}
                  category={value.category}
              />
          );
      })}
    </div>
  )
};

export default App;
