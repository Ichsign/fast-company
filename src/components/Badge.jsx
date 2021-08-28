import React from "react";

const Badge = ({ color, name }) => {
    return (
        <span style={{'margin': '2px'}} className={`badge bg-${color}`}>{name}</span>
    );
}

export default Badge;
