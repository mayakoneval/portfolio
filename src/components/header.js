import PropTypes from "prop-types"
import React from "react"

const Header = () => {
  // TODO: edit the description, animate on load
  return (
    <React.Fragment>
      <div 
      style={{
        width: "100vw", 
        borderBottom: "1px black",
        borderBottomStyle: "solid",
        display: "flex",
        paddingLeft: "24px",
        paddingRight: "24px",
        paddingTop: "10px",
        paddingBottom: "10px"
      }}
      >
        <div style={{flex: "1"}}>Maya Koneval</div>
        <div style={{
          display: "flex",
          paddingRight: "24px"
          }}>
          Resume
        </div>
        <div style={{display: "flex"}}>
          About
        </div>
      </div>
    </React.Fragment>
)};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
