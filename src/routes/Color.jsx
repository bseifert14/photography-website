import React, { useState } from 'react';
import colorPhotoGallery from '../data/color-photo-gallery';
import { createUseStyles } from 'react-jss';
import PhotoGallery from '../common/layout/PhotoGallery';
import Panorama from "../common/layout/Panorama";
import { SunapeeGoldenSunset } from '../common/PhotoIndex';
import Modal from '../common/component/Modal';
import { setPhoto } from '../store/gallery/photoSlice';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = createUseStyles({
    container: {
        marginTop: '4rem',
        padding: '10px'
    }
})

function Color() {
    const classes = useStyles();
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const { selected } = useSelector(state => state.photo);

    const handleClick = (img) => {
        setShowModal(!showModal);
        dispatch(setPhoto(img))
    }

    return (
        <>
            <div className={classes.container}>
                <Panorama image={SunapeeGoldenSunset} altText="New Hapshire Lake Sunapee sunset over mountains" />
                <PhotoGallery images={colorPhotoGallery} onClick={handleClick} />
            </div>
            <Modal
                data={selected}
                open={showModal}
                onClose={() => setShowModal(!showModal)}
                size="xlg"
            />
        </>
    );
}

export default Color;