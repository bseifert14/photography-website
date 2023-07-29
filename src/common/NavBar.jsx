import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import LogoBlack from '../assets/Logo-Black.jpg';


const useStyles = createUseStyles({
    nav: {
        top: 0,
        position: 'fixed',
        width: '100%',
        zIndex: 1,
        backgroundColor: 'white'
    },
    navBar: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '8px 16px',
        height: '60px',
        width: '100%',
        boxShadow: '0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)'
    },
    navLogo: {
        height: '50px'
    },
    navItems: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: '100%'
    },
    navLink: {
        textDecoration: 'none',
        color: 'black',
        padding: '10px',
        borderRadius: '2px',
        '&:hover': {
            backgroundColor: '#D9D9D9'
        },
        '&:active': {
            backgroundColor: '#C0C0C0'
        }
    }
});
export default function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.nav}>
            <div className={classes.navBar}>
                <img src={LogoBlack} className={classes.navLogo} />
                <div className={classes.navItems}>
                    <Link to={`/`} className={classes.navLink}>Home</Link>
                    <Link to={`about`} className={classes.navLink}>About</Link>
                    <Link to={`contact`} className={classes.navLink}>Contact</Link>
                </div>
            </div>
        </div>
    );
}