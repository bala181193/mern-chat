import React, { useState } from "react";
import { Box, FormControlLabel, Switch, Stack, Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export default function SwitchButton() {
    const [checked, setChecked] = useState<boolean | undefined>(false);
    const [value, setValue] = useState<number | null>(null)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked)
    }
    const ratingChange = (
        e: React.ChangeEvent<{}>,
        newValue: number | null
    ) => {
        setValue(newValue)
    }
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        flexGrow: 1,
    }));
    return (
        <>
            <Box>
                <FormControlLabel label={'darkMmode'}
                    control={<Switch
                        checked={checked}
                        onChange={handleChange}
                        size="small"
                        color="success"
                    />}
                />
            </Box>
            <Stack>
                <Rating value={value}
                    icon={<FavoriteIcon fontSize={'inherit'} color="error" />}
                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    onChange={ratingChange} precision={0.5} size="large" />
            </Stack>
            <Stack spacing={{ xs: 1, sm: 2 }} direction="row" width={"250px"} useFlexGap flexWrap="wrap">
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Long content</Item>
            </Stack>
        </>
    )

}