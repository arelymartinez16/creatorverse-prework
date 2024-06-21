import { supabase } from "../client";
import { useState } from "react";

const AddCreator = () => {
    const [info, setInfo] = useState({ name: "", description: "", imageURL: "" })
    const [socialLinks, setSocialLinks] = useState({ youtube: "", instagram: "", twitter: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo((prev) => {
            return {
                ...prev, [name]:value,
            }
        })
    }

    const handleSocialChange = (e) => {
        const { name, value } = e.target;
        setSocialLinks((prev) => ({
            ...prev, [name]: value,
        }));
    }

    const createCreator = async (e) => {
        e.preventDefault();

        // Collect social media links into an array
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

        const { error } = await supabase
            .from("creators")
            .insert({name: info.name, url: urls, description: info.description, imageURL: info.imageURL})
            .select()

        if (error) {
            console.error(error);
        }

        window.location = "/";
    }

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <div className="container">
                <form>
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" required onChange={handleChange} />
                    <label>Image</label>
                    <input type="text" name="imageURL" placeholder="Image URL (Optional)" onChange={handleChange} />
                    <label>Description</label>
                    <textarea name="description" placeholder="Description" required onChange={handleChange}></textarea>
                    <h3>Social Media Links</h3>
                    <p>Provide at least one of the creator's social media handles.</p>
                    <label>YouTube</label>
                    <input type="text" name="youtube" placeholder="YouTube's Handle without the @" onChange={handleSocialChange} />
                    <label>Instagram</label>
                    <input type="text" name="instagram" placeholder="Instagram's Handle without the @" onChange={handleSocialChange} />
                    <label>Twitter</label>
                    <input type="text" name="twitter" placeholder="Twitter's Handle without the @" onChange={handleSocialChange} />
                    <br />
                    <button type="submit" onClick={createCreator}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default AddCreator;