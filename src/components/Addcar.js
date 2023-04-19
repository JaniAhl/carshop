import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function Addcar(props) {

    const [open, setOpen] = React.useState(false)
    const [car, setCar] = React.useState({
        brand: '', model: '', color: '', fuel: '', year: '', price: ''
    });

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleInputChange = (event) => {
        setCar({...car, [event.target.name]: event.target.value})
    }

    const addCar = () => {
        props.saveCar(car);
        handleClose();
    }

    return(
        <div>
            <Button style={{margin: 10}} color='primary' variant='outlined' onClick={handleClickOpen}>
                Add car
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                <DialogTitle id='form-dialog-title'>New Car</DialogTitle>
                    <DialogContent>
                        <TextField
                        autoFocus
                        margin= 'dense'
                        name= 'brand'
                        value= {car.brand}
                        onChange={event => handleInputChange(event)}
                        label= 'Brand'
                        fullWidth
                        />
                        <TextField
                        margin= 'dense'
                        name= 'model'
                        value= {car.model}
                        onChange={event => handleInputChange(event)}
                        label= 'Model'
                        fullWidth
                        />
                        <TextField
                        margin= 'dense'
                        name= 'color'
                        value= {car.color}
                        onChange={event => handleInputChange(event)}
                        label= 'Color'
                        fullWidth
                        />
                        <TextField
                        margin= 'dense'
                        name= 'fuel'
                        value= {car.fuel}
                        onChange={event => handleInputChange(event)}
                        label= 'Fuel'
                        fullWidth
                        />
                        <TextField
                        margin= 'dense'
                        name= 'year'
                        value= {car.year}
                        onChange={event => handleInputChange(event)}
                        label= 'Year'
                        fullWidth
                        />
                        <TextField
                        margin= 'dense'
                        name= 'price'
                        value= {car.price}
                        onChange={event => handleInputChange(event)}
                        label= 'Price'
                        fullWidth
                        />
                    </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color='primary'>
                        Cancel
                    </Button>
                    <Button onClick={addCar} color='primary'>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}