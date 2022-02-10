import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import Card from './Components/Card/Card';

function App() {
      const [posts, setPosts] = useState([])
      useEffect(() => {
          axios.get('https://kg3afcrwig.execute-api.eu-central-1.amazonaws.com/PoC/db_crawling%27')
              .then(res => {
                  console.log(res)
                  setPosts(res.data)
              })
              .catch(err => {
                  console.log(err)
              })
      })
      return (
          <div className="card-class">
                  {posts.map((value) => (
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
                  ))}
          </div>
        )
  };
  export default App;
