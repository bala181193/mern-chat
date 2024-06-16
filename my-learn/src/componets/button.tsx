import React from "react";
import { Button, Stack } from "@mui/material";
const MuiButton = () => {
    return (
        <Stack spacing={2} direction={"row"}>
            <Button variant="text">text</Button>
            <Button variant="contained">contained</Button>
            <Button variant="outlined">outlined</Button>
        </Stack>

    )
}

export default MuiButton