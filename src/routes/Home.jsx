import { createUseStyles } from "react-jss";
import HomePageContent from "../common/HomePageContent";
import { HorseshoeBend } from '../common/PhotoIndex';

const useStyles = createUseStyles({
    mainImage: {
        maxWidth: '100%',
        height: 'auto'
    }
});

export default function Home() {
    const classes = useStyles();
    return (
        <>              
            <img 
                src={HorseshoeBend}
                alt="Horseshoe National Park"
                className={classes.mainImage}
            />
            <HomePageContent />
        </>
    );
  }