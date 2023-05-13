import React from 'react'
import "./ColoredDotsLoader.scss";

export default function ColoredDotsLoader() {
    return (
        <div className="container">
            <div className="loader">
                <div className="loader--dot"></div>
                <div className="loader--dot"></div>
                <div className="loader--dot"></div>
                <div className="loader--dot"></div>
                <div className="loader--dot"></div>
                <div className="loader--dot"></div>
                <div className="loader--text"></div>
            </div>
        </div>
    )
}
