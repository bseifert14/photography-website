// import classNames from 'classnames'
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    galleryContainer: {
        display: '-ms-flexbox', /* IE10 */
        display: 'flex',
        '-ms-flex-wrap': 'wrap', /* IE10 */
        flexWrap: 'wrap',
        gap: '2rem',
        listStyle: 'none',
        padding: 0,
        '&:after': {
            content: "",
            flexGrow: 999
        }
    },
    item: {
        // flexGrow: 1,
        flex: '1 1 auto',
        width: '300px',
        // maxHeight: '400px',
        cursor: 'pointer',
        position: 'relative',
    },
    horizontal: {
        flex: '1 1 auto',
        width: '700px',
        cursor: 'pointer',
        position: 'relative',
    },
    vertical: {
        flex: '1 1 auto',
        width: '400px',
        cursor: 'pointer',
        position: 'relative',
    },
    image: {
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        verticalAlign: 'bottom',
        borderRadius: '3px'
    }
});

export default function Gallery({ content }) {
    const classes = useStyles();
    // const itemClass = (style) = classNames(item, {
    //     'horizontal': style === 'horizontal',
    //     'vertical': style === 'vertical'
    // })
    // function getImageClass(style) {
    //     return classes[style];
    // }

    return (
        <ul className={classes.galleryContainer}>
            { content.map(image => {
                return (
                    <li className={classes[image.style]}>
                        <img 
                            className={classes.image}
                            src={image.src}
                            alt={image.altText}
                        />
                    </li>
                )
                
            })}
        </ul>
        
    )
}