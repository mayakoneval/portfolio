import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Thumbnail = ({ imageUrl, title, id, height, width, rotate }) => {
    return (
        <div className="thumbnail_container">
        <div style={{position: "relative", top: `80%`, left: "20px"}}>
            <div style={{position: "absolute", color: "#F0353B" }} className="thumbnail_title" >{title}</div>
        </div>
        <div className="thumbnail">
            <Link to={`/${title}/`}>
                <img alt={title} src={imageUrl} style={{
                    //width: "calc(100% * 0.7)",
                    height: height, // `${height}px`,
                    width: width, //  `${width}px`,
                    margin: "5px",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}/>
            </Link>
        </div>
        </div>
)};

Thumbnail.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
  rotate: PropTypes.bool,
  height: PropTypes.number,
}

export default Thumbnail;
