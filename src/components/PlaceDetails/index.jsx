import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';

export default ({place}) => {
    // const classes = useStyles();
    return (
        <div>
            <h4>{place.name}</h4>
        </div>
    )
}
