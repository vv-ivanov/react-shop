import React from 'react';
import PropTypes from 'prop-types';

 const Icon = (props) => (
    <span className={"material-icons " + props.className}>
        {props.name}
    </span>
)

Icon.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string
};

export default Icon