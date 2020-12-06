import React from 'react';
import PropTypes from 'prop-types';

 const Icon = (props) => {
   const {clickHandle} = props
   const classes = props.className ? "material-icons " + props.className : "material-icons"
   
   return (
     <span className={classes} onClick={clickHandle}>
        {props.name}
    </span>
   )
 }
//почему-то ругаеится ts 
// Icon.propTypes = {
//     name: PropTypes.string,
//     className: PropTypes.string
// };

export default Icon