import Box from '@mui/material/Box';
import React from 'react'
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


export default function ThankYou(props) {
    return (
        <div>
            <Box
                sx={{
                    '& .MuiTextField-root': { m: 1, minWidth: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <h2 className='text-sucess'>Data added Successfully</h2>

          
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <strong>First Name</strong>
                            </TableCell>
                            <TableCell> {props.userDetails.firstName}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <strong>Middle Name</strong>
                            </TableCell>
                            <TableCell> {props.userDetails.middleName}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <strong>Last Name</strong>
                            </TableCell>
                            <TableCell> {props.userDetails.lastName}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <strong>Mobile No</strong>
                            </TableCell>
                            <TableCell> {props.userDetails.mobileNo}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <strong>Email</strong>
                            </TableCell>
                            <TableCell> {props.userDetails.email}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <strong>Date of Birth</strong>
                            </TableCell>
                            <TableCell> {props.userDetails.dob.toLocaleString()}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <strong>Age</strong>
                            </TableCell>
                            <TableCell> {props.userDetails.age}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <strong>Blood Group</strong>
                            </TableCell>
                            <TableCell> {props.userDetails.bloodGroup}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <strong>Height</strong>
                            </TableCell>
                            <TableCell> {props.userDetails.height}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <strong>Weight</strong>
                            </TableCell>
                            <TableCell> {props.userDetails.weight}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <strong>Gender</strong>
                            </TableCell>
                            <TableCell> {props.userDetails.gender}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <strong>Marital Status</strong>
                            </TableCell>
                            <TableCell> {props.userDetails.maritalStatus}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <strong>Address Line</strong>
                            </TableCell>
                            <TableCell> {props.addressDetails.addressLine1}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <strong>Address Line2</strong>
                            </TableCell>
                            <TableCell> {props.addressDetails.addressLine2}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <strong>City</strong>
                            </TableCell>
                            <TableCell> {props.addressDetails.city}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <strong>State</strong>
                            </TableCell>
                            <TableCell> {props.addressDetails.state}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <strong>Country</strong>
                            </TableCell>
                            <TableCell> {props.addressDetails.country}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <strong>Pincode</strong>
                            </TableCell>
                            <TableCell> {props.addressDetails.pincode}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Box>
            
            <Button type='button' sx={{ mr: 1 }} onClick={props.handleBack}>
                Back
            </Button>

        </div>
    );
}