import React, { useState, useEffect } from 'react';
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
        maxHeight: '90vh'
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
        width: '100%',
        bottom: '0',
        right: '0',
        height: '0',
        maxHeight: '0',
        backgroundColor: 'rgba(255,255,255,0.6)',
        // transition: 'width 10s', // Transition for smooth opening
        padding: '10px',
        overflow: 'hidden', // Hide the text content when width is 0
        transition: 'max-height 5s ease, transform 5s ease', // Smooth transition for maxHeight and transform
        transformOrigin: 'top', // Set the transform origin to the top
    },
    showText: {
        height: '150px', // Expand the height to reveal the text area
        maxHeight: '150px', // Expand the height to reveal the text area
        transform: 'scaleY(1)', // Scale the Y-axis to show the text content
      },
});

const PhotoModal = ({ open, onClose, imageUrl }) => {
  const classes = useStyles();
  const [showText, setShowText] = useState(false);

  // Reset the showText state when the modal opens or closes
  useEffect(() => {
    setShowText(false);
  }, [open]);

  const handleToggleText = () => {
    setShowText(!showText);
  };

    return (
    <Modal
        open={open}
        onClose={onClose}
        className={classes.modal}
        BackdropProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 0.8)' } }}
    >
        <div className={classes.modalContent}>
            <img src={imageUrl} alt="Photo" className={classes.image} />
            { !showText && (
                <button className={classes.button} onClick={handleToggleText}>
                    Buy Photo
                </button>
            )}
            { showText && (
                // <div className={classes.textArea}>
                <div className={classNames(classes.textArea, { [classes.showText]: showText })}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula mi in turpis varius aliquet. Nulla
                        facilisi.
                    </p>
                </div>
            )}
        </div>
    </Modal>
    );
};

export default PhotoModal;
