import React from "react";
import Badge from "./Badge";

const User = ({ id, name, profession, completedMeetings, qualities, rate, deleteEvent }) => {

    const handleButtonClick = () => {
        deleteEvent(id);
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{qualities.map((quality) => (
                <Badge
                    key={quality._id}
                    color={quality.color}
                    name={quality.name}
                />
            ))}</td>
            <td>{profession?.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate}</td>
            <td>
                <button className='row__delete' onClick={handleButtonClick}>Delete</button>
            </td>
        </tr>
    )
}

export default User;
