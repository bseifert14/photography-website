import React, { useState } from 'react';
import { Modal } from '@mui/material';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

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
    textArea: {
        position: 'absolute',
        right: '0',
        bottom: '0',
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.6)',
        height: '0',
        overflow: 'hidden',
        transition: 'height 0.4s ease'
    },
    showText: {
        height: '25%',
    }
});

const PhotoModal = ({ open, onClose, imageUrl }) => {
  const classes = useStyles();
  const [showText, setShowText] = useState(false);

  const textAreaStyle = classNames(classes.textArea, {
    [classes.showText]: showText
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
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula mi in turpis varius aliquet. Nulla
                    facilisi.
                </p>
            </div>
        </div>
    </Modal>
    );
};

export default PhotoModal;
