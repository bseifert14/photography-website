import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    image: {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '4px',
        '&:hover': {
            cursor: 'pointer',
            boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)'
        }
    }
});

export default function Photo({ altText, image, customClass }) {
    const classes = useStyles();

    return (
        <img 
            src={image}
            alt={altText}
            className={customClass || classes.image}
        />
    );
}