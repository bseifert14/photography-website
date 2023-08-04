import React from 'react';
import { createUseStyles } from 'react-jss';
import Photo from '../component/Photo';

const useStyles = createUseStyles({
    gallery: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px',
        '@media (max-width: 1240px)': {
          gridTemplateColumns: 'repeat(2, 1fr)',
        },
        '@media (max-width: 830px)': {
          gridTemplateColumns: '1fr',
        },
      },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
});

function PhotoGallery({ images, onClick }) {
  const classes = useStyles();

  return (
    <div className={classes.gallery}>
        {images.map((img, index) => (
            <div key={index} className={classes.imageContainer}  onClick={() => onClick(img)} >
                <Photo image={img.src} altText={img.alt || 'Gallery Image'} />
            </div>
        ))}
    </div>
  );
}

export default PhotoGallery;
