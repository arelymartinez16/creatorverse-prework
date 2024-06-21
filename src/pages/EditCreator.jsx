import { useParams } from "react-router-dom";
import { supabase } from "../client";
import { useEffect, useState } from "react";

const EditCreator = () => {
    const { id } = useParams();
    const creatorId = id.toString()
    const [creator, setCreator] = useState(null)
    const [socialLinks, setSocialLinks] = useState({ youtube: "", instagram: "", twitter: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCreator((prev) => {
            return {
                ...prev, [name]:value
            }
        })
    }

    const handleSocialChange = (e) => {
        const { name, value } = e.target;
        setSocialLinks((prev) => ({
            ...prev, [name]: value,
        }));
    }

    const fetchCreator = async () => {
        const { data } = await supabase
            .from("creators")
            .select()
            .order("created_at", { ascending: true })
        
        const foundCreator = data.find(item => item.id.toString() === creatorId);
        // console.log(foundCreator)
        setCreator(foundCreator)

        if (foundCreator) {
            setSocialLinks({
                youtube: foundCreator.url.find(u => u.includes("youtube"))?.replace("https://www.youtube.com/@", "") || "",
                instagram: foundCreator.url.find(u => u.includes("instagram"))?.replace("https://www.instagram.com/", "") || "",
                twitter: foundCreator.url.find(u => u.includes("x.com"))?.replace("https://www.x.com/", "") || "",
            });
        }
    }

    const edit = async (e) => {
        e.preventDefault();

        const urls = [];
        if (socialLinks.youtube) {
            urls.push(`https://www.youtube.com/@${socialLinks.youtube}`);
        }
        if (socialLinks.instagram) {
            urls.push(`https://www.instagram.com/${socialLinks.instagram}`);
        }
        if (socialLinks.twitter) {
            urls.push(`https://www.x.com/${socialLinks.twitter}`);
        }

        await supabase
            .from("creators")
            .update({name: creator.name, url: urls, imageURL: creator.imageURL, description: creator.description})
            .eq("id", id)

        window.location = "/";
    }

    const deleteCreator = async (e) => {
        e.preventDefault()

        await supabase
            .from("creators")
            .delete()
            .eq("id", id)
        
            window.location = "/"
    }

    useEffect(() => {
        fetchCreator()
    }, [])

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            {creator && <div className="container">
                <form>
                    <label>Name</label>
                    <input value={creator.name || ""} type="text" name="name" placeholder="Name" required onChange={handleChange} />
                    <label>Image</label>
                    <input value={creator.imageURL || ""} type="text" name="imageURL" placeholder="Image URL (Optional)" onChange={handleChange} />
                    <label>Description</label>
                    <textarea value={creator.description || ""} name="description" placeholder="Description" required onChange={handleChange}></textarea>
                    <h3>Social Media Links</h3>
                    <p>Provide at least one of the creator's social media links.</p>
                    <label>YouTube</label>
                    <input value={socialLinks.youtube || ""} type="text" name="youtube" placeholder="YouTube's Handle without the @" onChange={handleSocialChange} />
                    <label>Instagram</label>
                    <input value={socialLinks.instagram} type="text" name="instagram" placeholder="Instagram's Handle without the @" onChange={handleSocialChange} />
                    <label>Twitter</label>
                    <input value={socialLinks.twitter} type="text" name="twitter" placeholder="Twitter's Handle without the @" onChange={handleSocialChange} />
                    <br />
                    <button type="submit" onClick={edit}>Submit</button>
                    <button className="delete-button" onClick={deleteCreator}>Delete</button>
                </form>
            </div>}
        </>
    )
}

export default EditCreator;