import React, { useState, useEffect } from 'react';
import './App.css'
//import Card from './Components/Card/Card';
import Fetch from './Fetch';


function App() {
  return (
    <div className="card-class">
      <Fetch />
    </div>
  )
};

export default App;


/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

import axios from 'axios';
import React, { useState, useEffect } from 'react';
function Fetch() {
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
        <div>
            <ul>
                {posts.map((post) => (
                    <li key={post.id_post}>{post.id_utente}</li>
                ))}
            </ul>
        </div>)
}
export default Fetch;*/

/*import './App.css'
import Card from './Components/Card/Card';
//import results from './db_crawling.json';

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
                    <li key={value.id_post}>{value.testo_post}</li>

                ))}
        </div>
      )
};
export default App;*/

/*let results=[]

/*function getMoviesFromApiAsync() {
  fetch("https://kg3afcrwig.execute-api.eu-central-1.amazonaws.com/PoC/db_crawling?")
    .then(response => {
      console.log(response);
      response.json();
    })
    .then(responseJson => {
      this.setState({ data: responseJson });
    })
    return "ciao";
}*/

/*const fetchAndLog = async () => {
    const response = await fetch('https://kg3afcrwig.execute-api.eu-central-1.amazonaws.com/PoC/db_crawling?');
    //const json = await response.json();
    // just log ‘json’
    //console.log(json);
}

fetchAndLog();*/

/*async function getMoviesFromApi() {
  try {
    let response = await fetch('https://kg3afcrwig.execute-api.eu-central-1.amazonaws.com/PoC/db_crawling?');
    let responseJson = await response.json();
    return responseJson.movies;
   } catch(error) {
    console.error(error);
  }
}

getMoviesFromApi();
*/
/*fetch('https://kg3afcrwig.execute-api.eu-central-1.amazonaws.com/PoC/db_crawling?').then(response => {
          console.log(response);
          return response.json();
        }).then(data => {
          // Work with JSON data here
          //console.log(JSON.stringify(data));
          for (let i=0; i<data.length; i++)
            results.concat(data[i])
        }).catch(err => {
          // Do something for an error here
          console.log("Error Reading data " + err);
        });
*/

/*var myInit = {
  method: 'GET',
  headers: {
    "Access-Control-Allow-Origin" : "*",
    "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
  },
  mode : 'cors',
  cache : 'default'

};

let req = new Request('https://kg3afcrwig.execute-api.eu-central-1.amazonaws.com/PoC/db_crawling?', myInit);

fetch(req)
  .then(function(response){
    //console.log(response);
    //response.json();
    return response.json();
  })
  .then(function(data){
    console.log(data.id_post);
  })*/


/*function App() {
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
};*/

//export default getMoviesFromApiAsync;
//export default App;
