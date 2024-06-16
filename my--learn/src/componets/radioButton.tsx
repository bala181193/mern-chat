
import React, { useState } from 'react'
import {
    Box,
    FormControlLabel,
    FormLabel,
    FormControl,
    Radio,
    RadioGroup,
    FormHelperText,
    Checkbox,
    FormGroup
} from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark'
export default function RadioButtonFeild() {
    const [value, setvalue] = useState<string>('')
    const [check, setcheck] = useState<boolean>(false)
    const [skill, setSkill] = useState<string[]>([])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setvalue(e.target.value)
    }
    const checkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setcheck(e.target.checked)
    }
    const skillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const index = skill.indexOf(e.target.value)
        if (index === -1) {
            setSkill([...skill, e.target.value])
        } else {
            setSkill(skill.filter((item) => item !== e.target.value))

        }
    }
    console.log("...aa", check)
    return (
        <>
            <Box width={"250px"}>
                <FormControl error>
                    <FormLabel id='job-exp-grp-label' >
                        year of Exp
                    </FormLabel>
                    <RadioGroup
                        name='job-exp-grp'
                        aria-label='job-exp-grp-label'
                        onChange={handleChange}
                        value={value}
                        row
                    >
                        <FormControlLabel control={<Radio color='secondary' size='medium' />} label='0-1' value='0-1' />
                        <FormControlLabel control={<Radio />} label='1-2' value='1-2' />
                        <FormControlLabel control={<Radio />} label='2-3' value='2-3' />
                    </RadioGroup>
                    <FormHelperText>invalid text</FormHelperText>
                </FormControl>
            </Box>
            <Box>
                <FormControlLabel checked={check} control={<Checkbox onChange={checkChange} />} label="Label" />
            </Box>
            <Box>
                <Checkbox icon={<BookmarkIcon />}
                    checkedIcon={<BookmarkIcon />}
                    checked={check}
                    onChange={checkChange}
                />
            </Box>
            <Box>
                <FormGroup>
                    <FormControlLabel control={<Checkbox
                        checked={skill.includes("HTML")}
                        onChange={skillChange} />}
                        label="HTML"
                        value={"HTML"}

                    />
                    <FormControlLabel
                        control={<Checkbox
                            checked={skill.includes("CSS")}
                            onChange={skillChange} />}
                        label="CSS"
                        value={"CSS"}

                    />
                    <FormControlLabel control={<Checkbox
                        checked={skill.includes("Js")}
                        onChange={skillChange} />}
                        label="Js"
                        value={"Js"}

                    />
                </FormGroup>
            </Box>
        </>
    )
}