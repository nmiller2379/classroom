import React from "react";

export default function Button({ id, onClick, message }) {
    return (
        <button id={id} onClick={onClick}>{message}</button>
    )
}