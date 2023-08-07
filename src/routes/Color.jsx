import React, { useState } from 'react';
import { colorPhotos, colorPhotoGalleryThumbnails } from '../data/color-photo-gallery';
import { createUseStyles } from 'react-jss';
import PhotoGallery from '../common/layout/PhotoGallery';
import Panorama from "../common/layout/Panorama";
import { SunapeeGoldenSunset } from '../common/PhotoIndex';
import { clearSelected, setPhoto } from '../store/gallery/photoSlice';
import { useDispatch, useSelector } from 'react-redux';
import PhotoModal from '../common/component/PhotoModal';

const useStyles = createUseStyles({
    container: {
        marginTop: '4rem',
        padding: '10px'
    },
    modalImg: {
        maxWidth: '100%',
        maxHeight: '700px'
        // maxHeight: 'auto'
    },


    modalContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        maxWidth: '66.66667%', // Two-thirds of the modal width
        height: 'auto',
        maxHeight: '75%'
      },
})

function Color() {
    const classes = useStyles();
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const { selected } = useSelector(state => state.photo);

    const handleClick = (img) => {
        setShowModal(!showModal);
        const selected = colorPhotos.find(({ id }) =>  id === img.id);
        dispatch(setPhoto(selected));
    }

    const handleClose = () => {
        setShowModal(!showModal)
        dispatch(clearSelected());
    }

    return (
        <>
            <div className={classes.container}>
                <Panorama image={SunapeeGoldenSunset} altText="New Hapshire Lake Sunapee sunset over mountains" />
                <PhotoGallery images={colorPhotoGalleryThumbnails} onClick={handleClick} />
            </div>
            { showModal && (
                <PhotoModal
                    open={showModal}
                    onClose={handleClose}
                    imageUrl={selected.src}
                />
            )}
        </>
    );
}

export default Color;