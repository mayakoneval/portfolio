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
import ProjectSection from "./projectSection";
import { ParallaxProvider } from "react-scroll-parallax";

const Layout = ({ children }) => {
  return (
    <ParallaxProvider>
      <div>
        <ProjectSection 
        bgColor="white" 
        title="This is a Project Name" 
        description="Test here is a description for this project. I did this this way because I wanted it to be this way and not another way and thats okay for that thing to happen the way that it does" 
        imageUrl="https://i.ytimg.com/vi/cEJy2q27hVk/maxresdefault.jpg"/>
        <ProjectSection 
        bgColor="black" 
        title="This is a Another Project Name" 
        alignRight={true} 
        description="Test here is a description for this project. I did this this way because I wanted it to be this way and not another way and thats okay for that thing to happen the way that it does" 
        imageUrl="https://i.ytimg.com/vi/cEJy2q27hVk/maxresdefault.jpg"/>
        <ProjectSection 
        bgColor="#ec2431" 
        title="This is a Third Project Name" 
        description="Test here is a description for this project. I did this this way because I wanted it to be this way and not another way and thats okay for that thing to happen the way that it does"  
        imageUrl="https://i.ytimg.com/vi/cEJy2q27hVk/maxresdefault.jpg"/>
      </div>
    </ParallaxProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
