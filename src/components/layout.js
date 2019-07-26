/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"
import foamImage from '../images/thumbnails/foam.jpg';
import kerfImage from '../images/thumbnails/4.021_kerf_single.jpg';
import auxImage from '../images/thumbnails/DKL_8439.jpg';
import driftImage from '../images/thumbnails/drift.jpg';
import inflateImage from '../images/thumbnails/inflate.jpg';
import ceramicsImage from '../images/thumbnails/ceramics.jpg';
import Thumbnail from "./thumbnail";
import Gallery from "react-photo-gallery";

const photos = [
  {
    src: foamImage,
    width: 1,
    height: 2.5
  },
  {
    src: kerfImage,
    width: 1,
    height: 1.5
  },
  {
    src: driftImage,
    width: 1.3,
    height: 1
  },
  {
    src: auxImage,
    width: 1, 
    height: 1.5
  },
  {
    src: inflateImage,
    width: 1,
    height: 1
  },
  {
    src: ceramicsImage,
    width: 1, 
    height: 2.2
  },
];


const Layout = () => {
  return (
    <React.Fragment>
      <div style={{alignItems: "center", width: "100%", height: "100vh"}}>
        <Header />
        {// need to vertical align the below div
        }
        <div style={{margin: "auto", paddingBottom: "30px", maxWidth: "62vw", minWidth: "700px", maxHeight: "80vh"}}>
          <div style={{
            display: "flex",
            flexFlow: "row wrap"
          }}>
              <Thumbnail height={280} imageUrl={foamImage} title={"foam"} id="foam"/>
              <Thumbnail height={280} imageUrl={kerfImage} title={"kerf"} id="kerf"/>
              <Thumbnail height={280} imageUrl={driftImage} title={"drift"} id="drift"/>
              <Thumbnail height={320} width={225} imageUrl={auxImage} title={"auxetic"} id="auxetics"/>
              <Thumbnail height={320} width={291} imageUrl={inflateImage} title={"inflate"} id="inflate"/>
              <Thumbnail height={320} imageUrl={ceramicsImage} title={"ceramic"} id="ceramic"/>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Layout
