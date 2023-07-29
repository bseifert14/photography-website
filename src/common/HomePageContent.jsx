import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { CBBarn, HorseShoe } from '../common/PhotoIndex';


const useStyles = createUseStyles({
    content: {
        width: '100%',
        padding: '10px'
    },
    optionContainer: {
        display: 'flex',
        maxWidth: '100%',
        justifyContent: 'space-around',
        padding: '50px 0'
    },
    shopOption: {
        width: '45%',
    },
    shopLink: {
        textDecoration: 'none',
        color: 'black',
    },
    optionText: {
        textAlign: 'center',
        fontSize: '30px'
    },
    shopImage: {
        maxWidth: '100%',
        maxHeight: '100%',
        display: 'block',
        boxShadow: '0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)',
        '&:hover': {
            cursor: 'pointer',
            boxShadow: '0 10px 20px 0 rgba(0,0,0,0.16), 0 10px 30px 0 rgba(0,0,0,0.12)',
        },
        '&:active': {
            boxShadow: '0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)'
        }
    }
});
export default function HomePageContent() {
    const classes = useStyles();

    return (
        <div className={classes.content}>
                <div className={classes.optionContainer}>
                    <div className={classes.shopOption}>
                        <Link to={`negative`} className={classes.shopLink}>
                            <div className={classes.optionText}>Shop B+W</div>
                            <img 
                                src={CBBarn}
                                alt="Horseshoe National Park"
                                className={classes.shopImage}
                            />
                        </Link>
                    </div>
                    <div className={classes.shopOption}>
                        <Link to={`color`} className={classes.shopLink}>
                            <div className={classes.optionText}>Shop Color</div>
                            <img 
                                src={HorseShoe}
                                alt="Horseshoe National Park"
                                className={classes.shopImage}
                            />
                        </Link>
                    </div>
                </div>
            </div>
    );
}