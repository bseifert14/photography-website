import { createUseStyles } from "react-jss";
import Photo from "../component/Photo";

const useStyles = createUseStyles({
    panoramaContainer: {
        marginBottom: '10px'
    }
});

export default function Panorama({ altText, image }) {
    const classes = useStyles();

    return (
        <div className={classes.panoramaContainer}>
            <Photo altText={altText} image={image} />
        </div>
    );
}