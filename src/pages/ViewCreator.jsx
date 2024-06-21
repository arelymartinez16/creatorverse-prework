import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../client";
import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

const ViewCreator = () => {
    const { id } = useParams()
    const stringId = id.toString()
    const [creator, setCreator] = useState(null)
    
    const fetchCreator = async () => {
        const { data } = await supabase
            .from("creators")
            .select()
            .order("created_at", { ascending: true })
        
        const foundCreator = data.find(item => item.id.toString() === stringId)
        setCreator(foundCreator)
    }
    
    // probably use useEffect here to call the function
    useEffect(() => {
        fetchCreator()
    }, [])

    return (
        <>
            <br />
            <br />
            <div className="parent-container">
                <div className="creator-info">
                    {creator && creator.name && <h2>{creator.name}</h2>}
                    {creator && creator.imageURL && creator.imageURL.length > 0 && <img src={`${creator.imageURL}`} alt={`Picture of ${creator.name}`} />}
                    {creator && creator.description && <p>{creator.description}</p>}
                    {creator && creator.url && creator.url.map((u, index) => (
                        <a key={index} href={u} target="_blank" rel="noopener noreferrer">{u}<br /></a>
                    ))}
                    <br />
                    <Link style={{width: "100%"}} type="button" reloadDocument to={`/edit/${id}`}>Edit</Link>
                    {/* {youtube && (
                        <a href={`https://www.youtube.com/${youtube}`} target="_blank" rel="noopener noreferrer">
                            <FaYoutube />
                        </a>
                    )}
                    {/* for instagram url */}
                    {/* {instagram && (
                                <a href={`https://www.instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer">
                                    <FaInstagram />
                                </a>
                    )} */}
                    {/* for twitter url */}
                    {/* {twitter && (
                        <a href={`https://www.x.com/${twitter}`} target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                    )} */} 
                </div>
            </div>
        </>
    )
}

export default ViewCreator;