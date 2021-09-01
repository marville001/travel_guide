import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import mapStyles from "../mapStyle";
import useStyles from './styles.js';

export default ({setCoordinates, setBounds, coordinates, places, setChildClicked}) => {
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
                onChildClick={(child)=>setChildClicked(child)}
            >
                {places?.map((place,i)=>(
                    <div 
                    className={classes.markerContainer}
                    lat={Number(place.latitude)}
                    lng={Number(place.longitude)}
                    key={i}
                    >
                        {!matches?(
                            <LocationOnOutlinedIcon color="primary" fontSize="large" />
                        ): (
                            <Paper elevation={3} className={classes.paper}>
                                <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                                    {place.name}
                                </Typography>
                                <img 
                                    src={place.photo? place.photo.images.large.url: "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"} 
                                    alt={place.name}
                                    className={classes.pointer}
                                />
                                <Rating size="small" value={Number(place.rating)} readOnly />
                            </Paper>
                        )}
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    )
}
