/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Header from "../components/header";
import "../components/layout.css";
const fs = require("fs");

const getPhotos = () => {
    let total;
    fs.readdir('../images/4.022auxetics', function(err, files) {
        // files.forEach(file, index, () => {
        // total += <img alt={index} href={'../images/4.022auxetics'+files} />;
        // })
    })
    return total;
}

const Layout = () => {
  return (
    <React.Fragment>
      <div style={{alignItems: "center", width: "100%", height: "100vh"}}>
        <Header />
        {// need to vertical align the below div
        }
        <div style={{margin: "auto", paddingBottom: "30px", maxWidth: `${36.6+45+9}vh`, minWidth: `${36.6+45+9}vh`, marginTop: "20px"}}>
          <div style={{
            display: "flex",
            flexFlow: "row wrap"
          }}>
              {getPhotos()}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Layout
