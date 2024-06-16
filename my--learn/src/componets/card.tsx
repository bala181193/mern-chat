import React from 'react'
import { Card, CardMedia, CardContent, Typography, Button, Box, CardActionArea, CardActions, Stack } from "@mui/material";

export default function CardExample() {
    return (
        <>
            <Stack width={'300px'}>
                <Box >
                    <Card>
                        <CardMedia
                            component='img'
                            height='140'
                            image='https://blog.hubspot.com/hs-fs/hubfs/Google%20Drive%20Integration/22%20Website%20Restaurant%20Design%20Examples%20We%20Love-Jan-28-2022-02-13-56-68-PM.jpeg?width=595&height=400&name=22%20Website%20Restaurant%20Design%20Examples%20We%20Love-Jan-28-2022-02-13-56-68-PM.jpeg'
                        />
                        <CardContent>
                            <Typography gutterBottom variant='h5' component={'div'}>
                                Reat
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sit quibusdam cum, dignissimos eligendi neque velit, voluptatibus odio porro nihil minus, consequuntur saepe at. Asperiores labore accusantium quam ipsum tempora?
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size='small'>Share</Button>
                            <Button size='small'>Learn more</Button>
                        </CardActions>
                    </Card>
                </Box>
            </Stack>
        </>
    )
}