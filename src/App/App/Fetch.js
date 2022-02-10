import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Card.css';
function Fetch() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
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
        <div>
            {posts.map((post) => (
                <div className="card">
                    <img src={'https://dream-team-instagram-images.s3.eu-central-1.amazonaws.com/' + post.image_s3} className={post.image_s3 == null ? 'hidden' : 'card_image'} />
                    <div className="info">
                        <h2 className={post.location == null ? 'hidden' : 'card_username'}>Utente: {post.id_utente}</h2>
                        <p className={post.testo_post == null ? 'hidden' : 'card_post'}><span>Post social: </span>{post.testo_post}</p>
                        <p className={post.location == null ? 'hidden' : 'card_location'}><span>Location:</span> {post.location}</p>
                        <p className={post.longitude == null ? 'hidden' : 'card_longitude'}><span>Longitudine:</span> {post.longitude}</p>
                        <p className={post.latitude == null ? 'hidden' : 'card_latitude'}><span>Latitudine:</span> {post.latitude}</p>
                        <p className={post.phone == null ? 'hidden' : 'card_phone'}><span>Numero di telefono:</span> {post.phone}</p>
                    </div>
                    <div className="result">
                        <p className={post.sentiment == null ? 'hidden' : 'card_comprehend'}><span>Comprehend: </span> {post.sentiment}</p>
                        <p className={post.tag_rekognition == null ? 'hidden' : 'card_rekognition'}><span>Rekognition:</span> {post.tag_rekognition}</p>
                        <p className={post.category == null ? 'hidden' : 'card_category'}><span>Categoria:</span> {post.category}</p>
                    </div>
                    <div className="social">
                        <form className={post.web_site == null ? 'hidden' : 'card_website'} action={post.web_site}>
                            <input type="submit" value="Vai al sito" />
                        </form>
                    </div>
                </div>
            ))}
        </div>)
}
export default Fetch;
