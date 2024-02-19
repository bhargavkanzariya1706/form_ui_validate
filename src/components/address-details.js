import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import React from 'react'
import { useForm } from "react-hook-form";
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';


export default function AddressDetails(props) {

    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmitClick = (addressData) => {
        props.setAddressDetails(addressData);
        props.handleNext();
    }

    return (
        <form onSubmit={handleSubmit(onSubmitClick)}>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    required
                    id="outlined-required"
                    label="Address Line 1"
                    size="small"
                    name={'addressLine1'}
                    defaultValue={props.addressDetails.addressLine1}
                    error={errors?.addressLine1?.message !== undefined}
                    helperText={errors.addressLine1?.message}
                    {...register("addressLine1", { required: "AddressLine1 is required." })}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Address Line 2"
                    size="small"
                    name='addressLine2'
                    defaultValue={props.addressDetails.addressLine2}
                    error={errors?.addressLine2?.message !== undefined}
                    helperText={errors.addressLine2?.message}
                    {...register("addressLine2", { required: "AddressLine2 is required." })}
                />

                <TextField
                    select
                    required
                    id="outlined-required"
                    label="City"
                    size="small"
                    name='city'
                    defaultValue={props.addressDetails.city}
                    error={errors?.city?.message !== undefined}
                    helperText={errors.city?.message}
                    {...register("city", { required: "City is required." })}
                >
                    <MenuItem value={''}>Select</MenuItem>
                    <MenuItem value={'Ahmedabad'}>Ahmedabad</MenuItem>
                    <MenuItem value={'Surat'}>Surat</MenuItem>
                    <MenuItem value={'Baroda'}>Baroda</MenuItem>
                </TextField>
                <TextField
                    select
                    required
                    id="outlined-required"
                    label="State"
                    size="small"
                    name='state'
                    defaultValue={props.addressDetails.state}
                    error={errors?.state?.message !== undefined}
                    helperText={errors.state?.message}
                    {...register("state", { required: "State is required." })}
                >
                    <MenuItem value={''}>Select</MenuItem>
                    <MenuItem value={'Gujarat'}>Gujarat</MenuItem>
                </TextField>
                <TextField
                    select
                    required
                    id="outlined-required"
                    label="Country"
                    size="small"
                    name='country'
                    defaultValue={props.addressDetails.country}
                    error={errors?.country?.message !== undefined}
                    helperText={errors.country?.message}
                    {...register("country", { required: "Country is required." })}
                >
                    <MenuItem value={''}>Select</MenuItem>
                    <MenuItem value={'India'}>India</MenuItem>
                </TextField>
                <TextField
                    required
                    id="outlined-required"
                    label="Pin Code"
                    size="small"
                    name='pincode'
                    defaultValue={props.addressDetails.pincode}
                    error={errors?.pincode?.message !== undefined}
                    helperText={errors.pincode?.message}
                    {...register("pincode", { required: "PinCode is required." })}
                />
            </Box>
            <Button type='button' sx={{ mr: 1 }} onClick={props.handleBack}>
                Back
            </Button>
            <Button type='submit' sx={{ mr: 1 }}>
                Next
            </Button>
        </form>
    );
}