import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Card.css';
function Fetch() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        //axios.get('https://9a5kfghgyl.execute-api.eu-central-1.amazonaws.com/PoC/db_crawling?')
        axios.get('https://kg3afcrwig.execute-api.eu-central-1.amazonaws.com/PoC/db_crawling?')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    })
    return (
        <div className="results">
            {posts.map((post) => (
                <div className="card">
                  <img src={'https://dream-team-instagram-images.s3.eu-central-1.amazonaws.com/' + post.image_s3} className={post.image_s3 == "null" ? 'hidden' : 'card_image'} />
                    <div className="info">
                        <h2 className={post.id_utente == "null" ? 'hidden' : 'card_username'}>Utente: {post.id_utente}</h2>
                        <p className={post.testo_post == "null" ? 'hidden' : 'card_post'}>Post social:{post.testo_post}</p>
                        <p className={post.location == "null" ? 'hidden' : 'card_location'}>Location: {post.location}</p>
                        <p className={post.latitudine == "null" ? 'hidden' : 'card_latitude'}>Latitudine: {post.latitudine}</p>
                        <p className={post.longitudine == "null" ? 'hidden' : 'card_longitude'}>Longitudine: {post.longitudine}</p>
                        <p className={post.phone == "null" ? 'hidden' : 'card_phone'}>Numero di telefono: {post.phone}</p>
                    </div>
                    <div className="result">
                        <p className={post.sentiment == "null" ? 'hidden' : 'card_comprehend'}>Comprehend: {post.sentiment}</p>
                        <p className={post.tag_rekognition == "null" ? 'hidden' : 'card_rekognition'}>Rekognition: {post.tag_rekognition}</p>
                        <p className={post.emotion_rekognition == "null" ? 'hidden' : 'card_rekognition'}>Emotion Rekognition: {post.emotion_rekognition}</p>
                        <p className={post.category == "null" ? 'hidden' : 'card_category'}>Categoria: {post.category}</p>
                    </div>
                    <div className="social">
                        <a className={post.web_site == "null" ? 'hidden' : 'card_website'} href={post.web_site} target="_blank">Vai al sito</a>
                    </div>
                </div>
            ))}
        </div>)
}
export default Fetch;
