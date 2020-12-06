import React from 'react';
import PropTypes from 'prop-types';

 const Icon = (props) => {
   const classes = props.className ? "material-icons " + props.className : "material-icons"
   
   return (
     <span className={classes}>
        {props.name}
    </span>
   )
 }

Icon.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string
};

export default Icon