import { createUseStyles } from "react-jss";
import HomePageContent from "../common/HomePageContent";
import HorseShoe from '../assets/HorseShoe.jpg';

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
                src={HorseShoe}
                alt="Horseshoe National Park"
                className={classes.mainImage}
            />
            <HomePageContent />
        </>
    );
  }