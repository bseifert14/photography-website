import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    gridContainer: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gridTemplateRows: '1fr 1fr',
        gap: '10px',
        height: '100%'
    },
    gridItem: {
    // border: '1px solid black',
    padding: '5px',
        '&:nth-child(1)': {
            gridColumn: '1', /* First column */
            gridRow: '1',    /* First row */
        },
        '&:nth-child(2)': {
            gridColumn: '1', /* First column */
            gridRow: '2',    /* Second row */
        },
        '&:nth-child(3)': {
            gridColumn: '2', /* Second column */
            gridRow: '1 / span 2',    /* Both rows */
        }
    },
    optionTitle: {
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'flex-start',
        // columnGap: '25px'
    },
    optionType: {
        display: 'flex',
        justifyContent: 'flex-start',
        columnGap: '25px'
    },
    sizeButton: {
        border: 'solid 1px lightgray',
        background: 'none',
        borderRadius: '2px',
        padding: '5px',
        minWidth: '75px',
        textAlign: 'left'
    },
    labelText: {
        fontWeight: 'bold',
        fontSize: 14
    },
    size: {
        fontSize: 10
    }
});

const PhotoModalStore = () => {
  const classes = useStyles();

    return (
        <div className={classes.gridContainer}>
            <div className={classes.gridItem}>
                <div className={classes.optionTitle}>
                    Select Size
                </div>
                <section className={classes.optionType}>
                    <button className={classes.sizeButton}>
                        <div className={classes.size}>8x12</div>
                        <div className={classes.labelText}>Small $25</div>
                        <div>$25</div>
                    </button>
                    <button className={classes.sizeButton}>
                        <div>Medium</div>
                        <div className={classes.size}>16x24</div>
                        <div>$50</div>
                    </button>
                    <button className={classes.sizeButton}>
                        <div>Large</div>
                        <div className={classes.size}>24x36</div>
                        <div>$75</div>
                    </button>
                </section>
            </div>
            <div className={classes.gridItem}>
                <div className={classes.optionTitle}>
                    Frame Option
                </div>
                <section className={classes.optionType}>
                    <button className={classes.sizeButton}>
                        <div>Frame</div>
                    </button>
                    <button className={classes.sizeButton}>
                        <div>No Frame</div>
                    </button>
                </section>
            </div>
            <div className={classes.gridItem}>
                Seifert
            </div>
        </div>
    );
};

export default PhotoModalStore;
