import { Box, Modal as MaterialModal } from '@mui/material';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        boxShadow: 24,
        p: 4
    }, 
    sm: {
        minWidth: '30%'
    },
    md: {
        minWidth: '50%'
    },
    lg: {
        minWidth: '70%'
    },
    xlg: {
        minWidth: '85%'
    }
})

const Modal = ({ open, onClose, data, size = 'sm', children }) => {
    const classes = useStyles();

    const modalStyle = classNames(classes.modal, {
        [classes.sm]: size === 'sm',
        [classes.md]: size === 'md',
        [classes.lg]: size === 'lg',
        [classes.xlg]: size === 'xlg'
    })

    return (
        <MaterialModal
            open={open}
            onClose={onClose}
            disableAutoFocus={true}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box>
                <div className={modalStyle}>
                    {children}
                </div>
            </Box>
            
        </MaterialModal>
    );
}

export default Modal;