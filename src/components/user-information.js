import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import React from 'react'
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';


export default function UserInformations(props) {

    const { control, register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmitClick = (userData) => {
        console.log(userData);
        props.setUserDetails(userData);
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
                    defaultValue={props.userDetails.firstName}
                    required
                    id="outlined-required"
                    label="First Name"
                    size="small"
                    name={'firstName'}
                    error={errors?.firstName?.message !== undefined}
                    helperText={errors.firstName?.message}
                    {...register("firstName", { required: "First name is required." })}
                />
                <TextField
                    required
                    defaultValue={props.userDetails.middleName}
                    id="outlined-required"
                    label="Middle Name"
                    size="small"
                    name='middleName'
                    error={errors?.middleName?.message !== undefined}
                    helperText={errors.middleName?.message}
                    {...register("middleName", { required: "Middle name is required." })}
                />
                <TextField
                    required
                    id="outlined-required"
                    defaultValue={props.userDetails.lastName}
                    label="Last Name"
                    size="small"
                    name='lastName'
                    error={errors?.lastName?.message !== undefined}
                    helperText={errors.lastName?.message}
                    {...register("lastName", { required: "Last name is required." })}
                />
                <TextField
                    required
                    id="outlined-required"
                    defaultValue={props.userDetails.mobileNo}
                    label="Mobile No"
                    size="small"
                    name='mobileNo'
                    error={errors?.mobileNo?.message !== undefined}
                    helperText={errors.mobileNo?.message}
                    {...register("mobileNo", { required: "Mobile No is required." })}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    size="small"
                    defaultValue={props.userDetails.email}
                    name='email'
                    error={errors?.email?.message !== undefined}
                    helperText={errors.email?.message}
                    {...register("email", {
                        required: "Email is required.", pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email"
                        }
                    })}
                />
                <Controller
                    name='dob'
                    defaultValue={props.userDetails.dob}

                    error={errors?.dob?.message !== undefined}
                    helperText={errors.dob?.message ? "Date of Birth is required." : ""}
                    control={control}
                    required
                    render={({ field }) => (
                        <DatePicker
                            label="Date of Birth"
                            slotProps={{ textField: { size: 'small' } }}
                            placeholderText='Select date'
                            onChange={(date) => field.onChange(date)}
                            defaultValue={props.userDetails.dob}
                        />
                    )}
                />
                <TextField
                    required
                    id="outlined-required"
                    defaultValue={props.userDetails.age}
                    label="Age"
                    size="small"
                    name='age'
                    type='number'
                    error={errors?.age?.message !== undefined}
                    helperText={errors.age?.message}
                    {...register("age", { required: "Age is required." })}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Blood Group"
                    defaultValue={props.userDetails.bloodGroup}
                    size="small"
                    name='bloodGroup'
                    error={errors?.bloodGroup?.message !== undefined}
                    helperText={errors.abloodGroupge?.message}
                    {...register("bloodGroup", { required: "Blood Group is required." })}
                />
                <TextField
                    id="outlined-required"
                    label="Height"
                    size="small"
                    defaultValue={props.userDetails.height}
                    name='height'
                    type='number'
                    error={errors?.height?.message !== undefined}
                    helperText={errors.height?.message}
                    {...register("height", { required: "Height is required." })}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Weight"
                    defaultValue={props.userDetails.weight}
                    size="small"
                    name='weight'
                    type='number'
                    error={errors?.weight?.message !== undefined}
                    helperText={errors.weight?.message}
                    {...register("weight", { required: "Weight is required." })}

                />
                <Box sx={{ ml: 1 }}>
                    <Controller
                        name='gender'
                        defaultValue={props.userDetails.gender}
                        control={control}
                        error={errors?.gender?.message !== undefined}
                        helperText={errors.gender?.message}
                        render={({ field }) => (
                            <FormControl>
                                <FormLabel id="gender-label">Gender</FormLabel>
                                <RadioGroup
                                    defaultValue={props.userDetails.gender}
                                    row
                                    name='gender'
                                    onChange={(event, value) => field.onChange(value)}
                                    aria-labelledby="gender-label">
                                    <FormControlLabel value="Female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="Male" control={<Radio />} label="Male" />
                                </RadioGroup>
                            </FormControl>
                        )}
                    />
                </Box>
                <Box sx={{ ml: 1 }}>
                    <Controller
                        name='maritalStatus'
                        control={control}
                        defaultValue={props.userDetails.maritalStatus}
                        error={errors?.maritalStatus?.message !== undefined}
                        helperText={errors.maritalStatus?.message}
                        render={({ field }) => (
                            <FormControl>
                                <FormLabel id="marital-status-label">Marital Status</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="marital-status-label"
                                    name="maritalStatus"
                                    onChange={(event, value) => field.onChange(value)}
                                    defaultValue={props.userDetails.maritalStatus}>
                                    <FormControlLabel value="Single" control={<Radio />} label="Single" />
                                    <FormControlLabel value="Married" control={<Radio />} label="Married" />
                                    <FormControlLabel value="Divorced" control={<Radio />} label="Divorced" />
                                    <FormControlLabel value="Widowed" control={<Radio />} label="Widowed" />
                                </RadioGroup>
                            </FormControl>
                        )}
                    />
                </Box>
            </Box>
            <Button type='submit' sx={{ mr: 1 }}>
                Next
            </Button>
        </form>

    );
}