import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
export default Fetch;
