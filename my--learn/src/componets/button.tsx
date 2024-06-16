import React from "react";
import { Button, ButtonGroup, Stack } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import IconButton from "@mui/material/IconButton";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
const MuiButton = () => {
    const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

    const handleFormat = (
        event: React.MouseEvent<HTMLElement>,
        newFormats: string[],
    ) => {
        setFormats(newFormats);
    };
    return (
        <>
            <Stack spacing={2} direction={"row"}>
                <Button variant="text">text</Button>
                <Button variant="contained">contained</Button>
                <Button variant="outlined">outlined</Button>
            </Stack>
            <Stack spacing={2} direction={"row"} mt={5}>
                <Button variant="contained" color="primary">text</Button>
                <Button variant="contained" color="error">contained</Button>
                <Button variant="contained" color="success" >outlined</Button>

            </Stack>
            <Stack spacing={2} direction={"row"} mt={5}>
                <ButtonGroup size="small" variant="contained" color="success" orientation="vertical">
                    <Button variant="contained" >text</Button>
                    <Button variant="contained" >contained</Button>
                    <Button variant="contained" >outlined</Button>
                </ButtonGroup>
            </Stack>
            <Stack spacing={2} direction={"row"} mt={5}>
                <Button variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
                <Button variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>
                <IconButton color="success" size="small">
                    <SendIcon />
                </IconButton>
            </Stack>
            <Stack>
                <ToggleButtonGroup
                    value={formats}
                    onChange={handleFormat}
                    aria-label="text formatting"
                >
                    <ToggleButton value="bold" aria-label="bold">
                        <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton value="italic" aria-label="italic">
                        <FormatItalicIcon />
                    </ToggleButton>
                    <ToggleButton value="underlined" aria-label="underlined">
                        <FormatUnderlinedIcon />
                    </ToggleButton>
                    <ToggleButton value="color" aria-label="color" disabled>
                        <FormatColorFillIcon />
                        <ArrowDropDownIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </>


    )
}

export default MuiButton