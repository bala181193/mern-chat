
import React, { useState } from 'react'
import { InputAdornment, Stack, TextField } from '@mui/material'
export default function Text() {
    const [value, setValue] = useState()
    return (
        <>
            <Stack direction={'row'} spacing={4}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="standard-basic" label="Standard" variant="standard" />

                <Stack direction={'row'} spacing={2}>
                    <TextField
                        id="filled-number"
                        label="Number"
                        type="number"
                        // InputLabelProps={{
                        //     shrink: true,
                        // }}
                        color='primary'
                        variant="outlined"
                    />
                </Stack>
            </Stack>
            <Stack direction={'row'} spacing={4}>
                <TextField
                    id="filled-number"
                    label="Amount"
                    type="text"
                    InputProps={{
                        startAdornment: <InputAdornment position='start'>$</InputAdornment>
                    }}
                    color='primary'
                    variant="outlined"
                />
                <TextField
                    id="filled-number"
                    label="weight"
                    type="text"
                    error={value}
                    InputProps={{
                        endAdornment: <InputAdornment position='start'>kg</InputAdornment>
                    }}
                    color='primary'
                    variant="outlined"
                />
            </Stack>

        </>
    )
}