import React, { useRef, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    photoGalleryContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gridAutoFlow: 'row',
        gridGap: '10px'
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

const FullPageGallery = ({ photos }) => {
    const classes = useStyles();
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const observer = new ResizeObserver(() => {
            adjustPhotos();
        });

        if (container) {
            observer.observe(container);
        }

        return () => {
            if (container) {
                observer.unobserve(container);
            }
        };
    }, []);

    const adjustPhotos = () => {
        const container = containerRef.current;
        const containerWidth = container.offsetWidth;

        // Logic to adjust the photos and reposition them
        // based on the width of the container
    
        // Determine the number of photos per row based on their width
        let photosPerRow = 3;
        if (containerWidth < 900) {
          photosPerRow = 2;
        }
        if (containerWidth < 600) {
          photosPerRow = 1;
        }
    
        // Calculate the width for each photo
        const photoWidth = containerWidth / photosPerRow;
    
        // Apply appropriate styles to adjust the size and position of the photos
        const photos = container.querySelectorAll('img');

        for (let i = 0; i < photos.length; i++) {
          const photo = photos[i];
          photo.style.width = `${photoWidth}px`;
        }
      };

    return (
        <div className={classes.photoGalleryContainer} ref={containerRef}>
            {photos.map((photo, index) => (
                <img
                    id="photo"
                    key={index}
                    className={classes.galleryPhoto}
                    src={photo.src}
                    alt={photo.title}
                />
            ))}
        </div>
    );
}

export default FullPageGallery;