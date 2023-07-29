import { createUseStyles } from "react-jss";
import PropTypes from 'prop-types';
import Photo from "../component/Photo";


const useStyles = createUseStyles({
    twoAcrossContainer: {
        display: '-ms-flexbox', /* IE10 */
        display: 'flex',
        '-ms-flex-wrap': 'wrap', /* IE10 */
        gap: '1rem',
        paddingBottom: '1rem',
        // justifyContent: 'space-between'
    },
    item: {
        maxWidth: '50%'
    }
});

export default function TwoAcross({ firstImage, firstAltText, secondImage, secondAltText }) {
    const classes = useStyles();

    return (
        <div className={classes.twoAcrossContainer}>
            <div className={classes.item}>
                <Photo
                    image={firstImage}
                    altText={firstAltText}
                />
            </div>
            <div className={classes.item}>
                <Photo
                    image={secondImage}
                    altText={secondAltText}
                />
            </div>
        </div>
    );
}