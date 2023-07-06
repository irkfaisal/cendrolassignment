import React from 'react'
import './Dialog.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Dailog = ({ setOpen, handleClose, open, value, joke, select, setJoke, fetchJoke }) => {

    //styling
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: {
            xs: "300px", sm: "400px", md: "600px", lg: "600px", xl: "600px"
        },
        height: {
            xs: "auto", sm: "400px", md: "400px", lg: "400px", xl: "400px"
        },
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 1,
        background: "#0f2027",
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    };

    return (
        <>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} className='' id='cardModal'>
                        <div>
                            <span style={{ position: "absolute", right: "0", cursor: "pointer", color: "Green" }}><CloseIcon onClick={() => setOpen(false)} /></span>
                            <h1 style={{ color: "#fff" }}>{value?.item}</h1>
                        </div>
                        <div className='' id='insideDiv'>
                            <Typography>{`"${joke?.value}"`}</Typography>
                            <Button variant="contained" color="primary"
                                onClick={() => { fetchJoke() }}
                            >Next Joke</Button>
                        </div>
                    </Box>
                </Modal>
            </div>
        </>
    )
}

export default Dailog