import React, { useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";

type Skill = {
    id: number
    label: string
}
const skills = ['HTML', 'CSS', 'JS', 'TS', 'REACT']

const skillOption = skills.map((skill, index) => ({
    id: index + 1,
    label: skill,
}))

export default function AutoComplete() {
    const [value, setValue] = useState<string | null>('')
    const [skillValue, setSkillValue] = useState<Skill | null>(null)

    const handleChange = (e: any, newValue: string | null) => {
        setValue(newValue)
    }
    return (
        <>
            <Stack spacing={2} width={'250px'}>
                <Autocomplete
                    options={skills}
                    renderInput={(params) => <TextField {...params} label='skills' />}
                    onChange={handleChange}
                    freeSolo
                />
                <Autocomplete
                    options={skillOption}
                    value={skillValue}
                    renderInput={(params) => <TextField {...params} label='skills' />}
                    onChange={(event: any, newValue: Skill | null) => setSkillValue(newValue)}

                />
            </Stack>
        </>
    )

}