import { LuStar } from "react-icons/lu";
import { useState } from "react";

function ContactCard({ contact, toggleFavorite }) {
    // const [isFavorite, setIsFavorite] = useState(contact.favorite)
    return (
        <div className="card-content">
            <div className="card">
                <h3>{contact.name}</h3>
                <p>{contact.phone}</p>
            </div>
            <LuStar
                className={`star ${contact.favorite && "yellow-star"}`}
                onClick={() => toggleFavorite(contact.id)}
            />
        </div>
    );
}

export default ContactCard;
