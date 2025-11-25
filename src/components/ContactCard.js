import { LuStar } from "react-icons/lu";
import { useState } from "react";

function ContactCard({ contact, toggleFavorite }) {
    // const [isFavorite, setIsFavorite] = useState(contact.favorite)
    return (
        <div className="flex justify-between w-[15rem] h-[5rem] bg-teal-950 px-[1rem] py-[10px] text-white rounded-xl">
            <div className="card">
                <h3>{contact.name}</h3>
                <p>{contact.phone}</p>
            </div>
            <LuStar
                className={`${contact.favorite && "text-yellow-500"}`}
                onClick={() => toggleFavorite(contact.id)}
            />
        </div>
    );
}

export default ContactCard;
