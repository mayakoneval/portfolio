import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const descriptionContent = (description, bgColor, alignRight) =>
    <div style={{
        textAlign: "left",
        position: "relative",
        alignItems: "center",
        display: "flex",
        color: bgColor === "white" ? "black" : "white",
        width: "40%"
    }}>
        <div style={{
            position: "absolute",
            right: 0,
            padding: "40px",
            // //transform: "translateY(30px)",
            // //transform: `translateY(${scrollYProgress*200}px)`,
            // translateY: yTransform,
            marginLeft: alignRight ? '' : '-150px',
            marginRight: alignRight ? '-150px' : '',
        }}>
            {description}
        </div>
    </div>;

const ProjectSection = ({ imageUrl, title, description, alignRight, bgColor }) => {

    return (
    <div style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        backgroundColor: bgColor,
    }}>
        {/* <div 
            style={{color: bgColor === "white" ? "black" : "white"}}
        >{title}</div> */}
        <div style={{
            // center in the page
            alignItems: "center",
            display: "flex",
            verticalAlign: "center",
            marginLeft: alignRight ? "auto":"40px",
            marginRight: alignRight ? "40px":"0px",

        }}>
            {alignRight && descriptionContent(description, bgColor, alignRight)}
            <Link to="/title" style={{
                textDecoration: "none",
                display: "block"
            }}>
                <img alt={title} src={imageUrl} style={{
                    //width: "calc(100% * 0.7)",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    margin: "0px",
                }}/>
            </Link>
            {!alignRight && descriptionContent(description, bgColor, alignRight)}
        </div>
    </div>
)};

ProjectSection.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  alignRight: PropTypes.bool,
  bgColor: PropTypes.string.isRequired,
}

export default ProjectSection;
