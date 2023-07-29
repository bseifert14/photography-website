import React from 'react';
import { createUseStyles } from "react-jss";
import PropTypes from 'prop-types';
import Photo from "../component/Photo";


const useStyles = createUseStyles({
    galleryContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '1rem'
      },
      galleryPhoto: {
        width: '33%', /* Adjust this to your desired photo width */
        // height: '200px', /* Adjust this to your desired photo height */
        objectFit: 'cover', /* Maintain aspect ratio and crop if necessary */
        // marginBottom: '10px', /* Add some space between photos */
        borderRadius: '4px',
        '&:hover': {
            cursor: 'pointer',
            boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)'
        }
      }
});

const PhotoGallery = ({ photos }) => {
    const classes = useStyles();
    return (
        <div className={classes.galleryContainer} >
            {photos.map((photo, index) => (
                <img
                key={index}
                className={classes.galleryPhoto}
                src={photo.src}
                alt={photo.title}
                />
            ))}
        </div>
    );
}

export default PhotoGallery;