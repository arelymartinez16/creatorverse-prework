import Card from "../components/Card";
import { Link } from "react-router-dom";

const ShowCreators = (props) => {
    const { creators } = props

    // const findSocialMediaLink = (platform) => {
    //     return creators.url.find((u) => u.includes(platform));
    // };

    // const youtubeLink = findSocialMediaLink('youtube');
    // const instagramLink = findSocialMediaLink('instagram');
    // const twitterLink = findSocialMediaLink('twitter');

    return (
        <>
            <br />
            <br />
            <br />
            <div className="show-creators">
                {/* <Link reloadDocument to={`/add`}>Add a creator</Link> */}
                {creators.length === 0 ? (
                    <p>No content creators found.</p>
                ) : (
                    <div className="creator-list">
                        {creators.map((creator) => (
                            <Card
                                key={creator.id}
                                id={creator.id}
                                name={creator.name}
                                imageURL={creator.imageURL}
                                description={creator.description}
                                url={creator.url}
                                // youtube={youtubeLink}
                                // twitter={twitterLink}
                                // instagram={instagramLink} 
                            />
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default ShowCreators;