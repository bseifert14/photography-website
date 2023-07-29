import React, { useState, useEffect } from 'react';
import colorPhotoGallery from '../data/color-photo-gallery';
import { createUseStyles } from 'react-jss';
import PhotoGallery from '../common/PhotoGallery';

const useStyles = createUseStyles({
    container: {
        marginTop: '4rem',
        padding: '10px'
    }
})

function Color() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <PhotoGallery images={colorPhotoGallery} />
        </div>
    );
}

export default Color;
// const useStyles = createUseStyles({
//     container: {
//         maringTop: '4rem'
//     },
//     gallery: {
//         display: 'grid',
//         gridTemplateColumns: 'repeat(3, 1fr)',  // 3 columns with equal width
//         gap: '10px'
//     },
//     imageBox: {
//         width: '100%',
//         height: 500, // Set height to 500px
//         overflow: 'hidden',
//         position: 'relative',
//         display: 'flex',
//         alignItems: 'center', // Center vertically
//         justifyContent: 'center' // Center horizontally
//     },
//     image: {
//         maxWidth: '100%',
//         maxHeight: '100%',
//         objectFit: 'contain',
//         objectPosition: 'center center'
//     }
// });

// function Color() {
//     const classes = useStyles();

//     return (
//         <div className={classes.container}>
//             <div className={classes.gallery}>
//                 {colorPhotoGallery.map((img, index) => (
//                     <div key={index} className={classes.imageBox}>
//                         <img src={img.src} alt={img.alt || 'Gallery Image'} className={classes.image} />
//                     </div>
//                 ))}
//             </div>
//         </div>
        
//     );
// }

// export default Color;














// import { createUseStyles } from "react-jss";
// import ThreeAcross from '../common/layout/ThreeAcross';
// import Panorama from "../common/layout/Panorama";
// import { 
//     BadlandsBighorn, BadlandsNightHike, CadyHillPines, PercyCow,  SunapeeGoldenSunset
// } from '../common/PhotoIndex';
// import TwoAcross from "../common/layout/TwoAcross";
// import PhotoGallery from "../common/layout/PhotoGallery";
// import FullPageGallery from "../common/layout/FullPageGallery";
// // import Gallery from "../common/layout/Gallery";
// // import LightGallery from 'lightgallery/react';
// // import Gallery from "react-photo-gallery";


// const useStyles = createUseStyles({
//         shopContainer: {
//             marginTop: '4rem',
//             padding: '2rem 2rem'
//         },
//         screenLayout: {
//             display: 'flex',
//             flexDirection: 'row'
//         },
//         gallery: {
//             display: 'flex',
//             flexWrap: 'wrap',
//             justifyContent: 'space-between',
//             alignItems: 'stretch',
//             margin: ['1rem', 0]
//         },
//         item: {
//             width: 'calc(33.33% - 10px)',
//             marginBottom: '20px'
//         },
//         image: {
//             display: 'block',
//             width: '100%',
//             height: 'auto',
//             // objectFit: 'cover',
//             borderRadius: '9px',
//             '&:hover': {
//                 borderRadius: 0,
//                 cursor: 'pointer'
//             }
//         }
// });

// const GALLERY_CONTENT = [{
//     src: BadlandsBighorn,
//     // altText: 'Bighorn sheep at Badlands National Park sunset',
//     // size: '1400-800',
//     width: 4,
//     height: 3,
//     // style: 'horizontal'
// }, {
//     src: BadlandsNightHike,
//     width: 2,
//     height: 3
//     // altText: 'Milkyway night hike in Badlands National Park',
//     // style: 'vertical'
// }, 
// // {
// //     src: BadlandsNightHike,
// //     altText: 'Milkyway night hike in Badlands National Park',
// //     style: 'vertical'
// // }, {
// //     src: BadlandsNightHike,
// //     altText: 'Milkyway night hike in Badlands National Park',
// //     style: 'vertical'
// // }, {
// //     src: BadlandsNightHike,
// //     altText: 'Milkyway night hike in Badlands National Park',
// //     style: 'vertical'
// // }, {
// //     src: BadlandsNightHike,
// //     altText: 'Milkyway night hike in Badlands National Park',
// //     style: 'vertical'
// // }
// ];

// const photoGall = [
//     {
//         src: BadlandsBighorn,
//         title: 'test'
//     },{
//         src: BadlandsNightHike,
//         title: 'Milkyway night hike in Badlands National Park',
//     }, {
//         src: CadyHillPines,
//         title: 'Milkyway night hike in Badlands National Park',
//     }, {
//         src: BadlandsNightHike,
//         title: 'Milkyway night hike in Badlands National Park',
//     }
// ];


// const fullPhotos = [{
//         src: SunapeeGoldenSunset,
//         title: 'teest'
//     }, {
//         src: BadlandsNightHike,
//         title: 'Milkyway night hike in Badlands National Park',
//     }, {
//         src: CadyHillPines,
//         title: 'Milkyway night hike in Badlands National Park',
//     }, {
//         src: BadlandsNightHike,
//         title: 'Milkyway night hike in Badlands National Park',
//     }, {
//         src: BadlandsBighorn,
//         title: 'test'
//     }, {
//         src: BadlandsBighorn,
//         title: 'test'
//     }, {
//         src: BadlandsBighorn,
//         title: 'test'
//     }, {
//         src: BadlandsBighorn,
//         title: 'test'
// }]

// export default function Color() {
//     const classes = useStyles();

//     return (
//         <div className={classes.shopContainer}>
//             <Panorama image={SunapeeGoldenSunset} altText="New Hampshire Lake Sunapee sunset over mountains" />
//             <FullPageGallery photos={fullPhotos} />
            
//             {/* <Panorama image={SunapeeGoldenSunset} altText="New Hampshire Lake Sunapee sunset over mountains" />
//             <TwoAcross
//                 firstImage={BadlandsBighorn}
//                 firstAltText="BadlandsBighorn Alt Text"
//                 secondImage={BadlandsBighorn}
//                 secondAltText="BadlandsBighorn Alt Text Dos"
//             />
//             <PhotoGallery photos={photoGall}/>
//             <ThreeAcross
//                 firstImage={BadlandsNightHike}
//                 firstAltText="BadlandsBighorn Alt Text"
//                 secondImage={CadyHillPines}
//                 secondAltText="Mountain Biker in Vermont Pine Forest"
//                 thirdImage={BadlandsNightHike}
//                 thirdAltText="BadlandsBighorn Alt Text Dos"
//             />
//             <ThreeAcross
//                 firstImage={BadlandsNightHike}
//                 firstAltText="BadlandsBighorn Alt Text"
//                 secondImage={BadlandsNightHike}
//                 secondAltText="Mountain Biker in Vermont Pine Forest"
//                 thirdImage={BadlandsNightHike}
//                 thirdAltText="BadlandsBighorn Alt Text Dos"
//             />
//             <ThreeAcross
//                 firstImage={BadlandsBighorn}
//                 firstAltText="BadlandsBighorn Alt Text"
//                 secondImage={BadlandsBighorn}
//                 secondAltText="BadlandsBighorn Alt Text Dos"
//                 thirdImage={BadlandsBighorn}
//                 thirdAltText="BadlandsBighorn Alt Text Dos"
//             /> */}

            
//             {/* <div className={classes.gallery}>
//                 { GALLERY_CONTENT.map((image) => (
//                     <div className={classes.item}>
//                         <img key={image.src} src={image.src} alt={image.altText}  className={classes.image}/>
//                     </div>
//                 ))}
//             </div> */}


//             {/* <LightGallery>
//                 {GALLERY_CONTENT.map(image => (
//                     <img 
//                         src={image.src}
//                         alt={image.altText}
//                     />
//                 ))}
//             </LightGallery>

//             <Gallery content={GALLERY_CONTENT} /> */}
//             {/* <div className={classes.screenLayout}>
//                 <ThreeAcross 
//                     firstImage={BadlandsBighorn}
//                     firstAltText="Bighorn sheep at Badlands National Park sunset"
//                     secondImage={BadlandsNightHike}
//                     secondAltText="Milkyway night hike in Badlands National Park"
//                 />
//                 <ThreeAcross 
//                     firstImage={BadlandsBighorn}
//                     firstAltText="Bighorn sheep at Badlands National Park sunset"
//                     secondImage={BadlandsNightHike}
//                     secondAltText="Milkyway night hike in Badlands National Park"
//                 />
//                 <ThreeAcross 
//                     firstImage={BadlandsBighorn}
//                     firstAltText="Bighorn sheep at Badlands National Park sunset"
//                     secondImage={PercyCow}
//                     secondAltText="Milkyway night hike in Badlands National Park"
//                 />
//             </div> */}
//         </div>
//     );
// }