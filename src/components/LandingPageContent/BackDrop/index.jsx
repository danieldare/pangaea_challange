import { bool } from 'prop-types';
import React from 'react';

export default function BackDrop({ sideDrawerVisibility }) {
    return <div className={` ${sideDrawerVisibility ? 'backdrop' : ''}`} />;
}

BackDrop.propTypes = {
    sideDrawerVisibility: bool.isRequired
};
