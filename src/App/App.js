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
                   <li key={value.id_post}>{value.testo_post}</li>
                  ))}
          </div>
        )
  };
  export default App;
