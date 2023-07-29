// import { createUseStyles } from "react-jss";
// import PropTypes from 'prop-types';


// const useStyles = createUseStyles({
//     threeAcrossContainer: {
//         display: '-ms-flexbox', /* IE10 */
//         display: 'flex',
//         '-ms-flex-wrap': 'wrap', /* IE10 */
//         flexWrap: 'wrap',
//         gap: '2rem',
//     },
//     container: {
//         '-ms-flex': '25%',/* IE10 */
//         flex: '25%',
//         maxWidth: '25%'
//     },
//     img: {
//         marginTop: '16px',
//         verticalAlign: 'middle',
//         width: '100%',
//         maxHeight: '100%',
//         height: 'auto'
//     }
// });

// export default function ThreeAcross({ firstImage, firstAltText, secondImage, secondAltText }) {
//     const classes = useStyles();

//     return (
//         <div className={classes.threeAcrossContainer}>
//             <div className={classes.container}>

//                 <img 
//                     src={firstImage}
//                     alt={firstAltText}
//                     className={classes.img}
//                 />
//                 <img 
//                     src={secondImage}
//                     alt={secondAltText}
//                     className={classes.img}
//                 /> 
//             </div>
//             {/* <div className={classes.container}>
//                 <img 
//                     src={secondImage}
//                     alt={secondAltText}
//                     className={classes.img}
//                 /> 
//                 <img 
//                     src={firstImage}
//                     alt={firstAltText}
//                     className={classes.img}
//                 />
//             </div>  
//             <div className={classes.container}>
//                 <img 
//                     src={firstImage}
//                     alt={firstAltText}
//                     className={classes.img}
//                 />
//                 <img 
//                     src={secondImage}
//                     alt={secondAltText}
//                     className={classes.img}
//                 /> 
//             </div>       */}
//         </div>
        
//     );
// }

// // ThreeAcross.defaultProps=  {
// //     direction: 'regular'
// // }

import { createUseStyles } from "react-jss";
import PropTypes from 'prop-types';
import Photo from "../component/Photo";


const useStyles = createUseStyles({
    threeAcrossContainer: {
        // display: '-ms-flexbox', /* IE10 */
        // display: 'flex',
        // '-ms-flex-wrap': 'wrap', /* IE10 */
        // gap: '1rem',
        // paddingBottom: '1rem'
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    item: {
        // maxWidth: '33%',
        width: '33%',
        // height: '500px'
    }
});

export default function ThreeAcross({ firstImage, firstAltText, secondImage, secondAltText, thirdImage, thirdAltText }) {
    const classes = useStyles();

    return (
        <div className={classes.threeAcrossContainer}>
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
            <div className={classes.item}>
                <Photo
                    image={thirdImage}
                    altText={thirdAltText}
                />
            </div>
        </div>
    );
}