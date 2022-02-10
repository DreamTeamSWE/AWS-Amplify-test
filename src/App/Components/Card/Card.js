import React from 'react';
import './css/Card.css';

function Card(props) {
  const image = ('https://dream-team-instagram-images.s3.eu-central-1.amazonaws.com/' + props.images3)
  return (
      <div className="card">
        <img src={image} className={image == null ? 'hidden' : 'card_image'} />
        <div className="info">
          <h2 className={props.username == null ? 'hidden' : 'card_username'}>Utente: {props.username}</h2>
          <p className={props.post == null ? 'hidden' : 'card_post'}><span>Post social: </span>{props.post}</p>
          <p className={props.location == null ? 'hidden' : 'card_location'}><span>Location:</span> {props.location}</p>
          <p className={props.longitude == null ? 'hidden' : 'card_longitude'}><span>Longitudine:</span> {props.longitude}</p>
          <p className={props.latitude == null ? 'hidden' : 'card_latitude'}><span>Latitudine:</span> {props.latitude}</p>
          <p className={props.phone == null ? 'hidden' : 'card_phone'}><span>Numero di telefono:</span> {props.phone}</p>
        </div>
        <div className="result">
          <p className={props.comprehend == null ? 'hidden' : 'card_comprehend'}><span>Comprehend: </span> {props.comprehend}</p>
          <p className={props.rekognition == null ? 'hidden' : 'card_rekognition'}><span>Rekognition:</span> {props.rekognition}</p>
          <p className={props.category == null ? 'hidden' : 'card_category'}><span>Categoria:</span> {props.category}</p>
        </div>
        <div className="social">
          <form className={props.website == null ? 'hidden' : 'card_website'} action={props.website} target="_blank">
            <input type="submit" value="Vai al sito" />
          </form>
        </div>
      </div>
  );
}

export default Card;
