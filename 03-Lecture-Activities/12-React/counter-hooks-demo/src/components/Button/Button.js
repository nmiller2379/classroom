import React from "react";

export default function Button({ message, id, onClick }) {
    return (<button id={id} onClick={onClick}>{message}</button>)
}