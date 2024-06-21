import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';
import { LuPencil } from "react-icons/lu";
import { IoIosInformationCircleOutline } from "react-icons/io";

const Card = (props) => {
    const { id, name, imageURL, description, youtube, twitter, instagram, url } = props;

    const findSocialMediaLink = (platform) => {
        return url.find((u) => u.includes(platform));
    };

    const youtubeLink = findSocialMediaLink('youtube');
    const instagramLink = findSocialMediaLink('instagram');
    const twitterLink = findSocialMediaLink('x.com');

    return (
        <article className="card" style={{backgroundImage: imageURL.length > 0 ? `url(${imageURL})` : "", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundPositionY: "20%", height: "340px", width: "40%", textAlign: "center"}}>
            {/* <Link reloadDocument to={`/post/${id.toString()}`}> */}
                <div className="card-header">
                    <header>
                        <h3 style={{color: "rgb(255, 255, 255)", fontSize: "30px", textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)"}}>{name}</h3>
                        {/* {imageURL.length > 0 && <img src={imageURL} alt={`Picture of ${name}`}/>} */}
                        <Link reloadDocument to={`/edit/${id}`}><LuPencil /></Link>
                        <Link reloadDocument to={`/post/${id}`}><IoIosInformationCircleOutline /></Link>
                    </header>
                    <footer>
                        {/* for youtube url */}
                        {youtubeLink && (
                            <a href={`${youtubeLink}`} target="_blank" rel="noopener noreferrer">
                                <FaYoutube />
                            </a>
                        )}
                        {/* for instagram url */}
                        {instagramLink && (
                            <a href={`${instagramLink}`} target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                        )}
                        {/* for twitter url */}
                        {twitterLink && (
                            <a href={`${twitterLink}`} target="_blank" rel="noopener noreferrer">
                                <FaTwitter />
                            </a>
                        )}
                    </footer>
                </div>
                {/* <div className="card-options"></div>
                <div className="card-description"> */}
                <p className="description-p">{description}</p>
                {/* </div>                 */}
            {/* </Link> */}
        </article>
    )
}

export default Card;