import React, { useState } from 'react';
import { Modal } from '@mui/material';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import PhotoModalStore from './PhotoModalStore';

const useStyles = createUseStyles({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalContent: {
        position: 'relative',
        maxWidth: '80%',
        maxHeight: '90vh',
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 'auto',
        display: 'block',
        maxHeight: '90vh'
    },
    button: {
        textDecoration: 'none',
        border: 'none',
        borderRadius: '1px',
        color: 'black',
        padding: '10px',
        position: 'absolute',
        bottom: '8px',
        right: '8px',
        zIndex: 1,
        background: 'rgba(255,255,255,0.6)',
        '&:hover': {
            backgroundColor: '#D9D9D9',
            cursor: 'pointer'
        },
        '&:active': {
            backgroundColor: '#C0C0C0'
        }
    },
    miniStoreContainer: {
        position: 'absolute',
        right: '0',
        bottom: '0',
        width: '100%',
        // backgroundColor: 'rgba(255,255,255,0.9)',
        backgroundColor: 'white',
        height: '0',
        overflow: 'hidden',
        transition: 'height 0.4s ease'
    },
    showContainer: {
        height: '25%',
    }
});

const PhotoModal = ({ open, onClose, imageUrl }) => {
  const classes = useStyles();
  const [showText, setShowText] = useState(false);

  const textAreaStyle = classNames(classes.miniStoreContainer, {
    [classes.showContainer]: showText
  });

  const handleToggleText = () => {
    setShowText(!showText);
  };

    return (
    <Modal
        open={open}
        onClose={onClose}
        className={classes.modal}
        disableAutoFocus={true}
        BackdropProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 0.7)' } }}
    >
        <div className={classes.modalContent}>
            <img src={imageUrl} alt="Photo" className={classes.image} />

            { !showText && (
                <button className={classes.button} onClick={handleToggleText}>
                    Buy Photo
                </button>
            )}

            <div className={textAreaStyle}>
                <PhotoModalStore />
            </div>
        </div>
    </Modal>
    );
};

export default PhotoModal;
