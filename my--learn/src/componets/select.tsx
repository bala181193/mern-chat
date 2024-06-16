
import React, { useState } from 'react'
import { Box, InputAdornment, Stack, TextField, MenuItem } from '@mui/material'
export default function SelectBoxField() {
    const [country, setcountry] = useState<string[]>([])
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setcountry(typeof e.target.value === "string" ? e.target.value.split(',') : e.target.value)
    }
    return (
        <>
            <Box width={"250px"}>
                <TextField label={"slect Country"} select value={country}
                    onChange={handleChange}
                    fullWidth
                    SelectProps={{
                        multiple: true
                    }}
                >
                    <MenuItem value="IN"> INDIA</MenuItem>
                    <MenuItem value="US"> USA</MenuItem>
                    <MenuItem value="UK"> UK</MenuItem>
                </TextField>
            </Box>
        </>
    )
}