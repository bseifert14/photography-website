import React from 'react';
import colorPhotoGallery from '../data/color-photo-gallery';
import { createUseStyles } from 'react-jss';
import PhotoGallery from '../common/layout/PhotoGallery';
import Panorama from "../common/layout/Panorama";
import { SunapeeGoldenSunset } from '../common/PhotoIndex';

const useStyles = createUseStyles({
    container: {
        marginTop: '4rem',
        padding: '10px'
    }
})

function Color() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Panorama image={SunapeeGoldenSunset} altText="New Hampshire Lake Sunapee sunset over mountains" />
            <PhotoGallery images={colorPhotoGallery} />
        </div>
    );
}

export default Color;