import React from 'react'
import propTypes from "prop-types";

const Card = ({ img }) => {
    return (
        <div className="card">
            <img
                src={img}
                className="card-img-top"
                alt="..." />
        </div>
    )
}

Card.propTypes = {
    img: propTypes.string,
}

export default Card