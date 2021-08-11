import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import mapStyles from "../mapStyle";
import useStyles from './styles.js';

export default ({setCoordinates, setBounds, coordinates}) => {
    const matches = useMediaQuery('(min-width:600px)');
    const classes = useStyles();


    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key:'AIzaSyCGBulc9eXW2deFLeO-bOUcPzMWZ9o9Slg'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={''}
                onChange={(e)=>{
                    setCoordinates({lat: e.center.lat, lng: e.center.lng})
                    setBounds({ne:e.marginBounds.ne,sw:e.marginBounds.sw})
                }}
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    )
}
