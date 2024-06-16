import React from "react";
import { Box, ThemeProvider, Grid, CardMedia } from '@mui/material';

const GridContainer = () => {
    const itemData = [
        // {
        //     "title": "Get 2x returns on your money.",
        //     "img": "/images/banners/banner-20.jpg",
        // },
        // {
        //     "title": "Get 2x returns on your money.",
        //     "img": "/images/banners/banner-2.jpg",
        // },
        // {
        //     "title": "Get 2x returns on your money.",
        //     "img": "/images/banners/banner-27.jpg",
        // },
        // {
        //     "title": "Get 2x returns on your money.",
        //     "img": "/images/banners/banner-4.jpg",
        // },
        // {
        //     "title": "Get 2x returns on your money.",
        //     "img": "/images/banners/banner-20.jpg",
        // },
        // {
        //     "title": "Get 2x returns on your money.",
        //     "img": "/images/banners/banner-2.jpg",
        // },
        // {
        //     "title": "Get 2x returns on your money.",
        //     "img": "/images/banners/banner-27.jpg",
        // },
        // {
        //     "title": "Get 2x returns on your money.",
        //     "img": "/images/banners/banner-4.jpg",
        // },
        // {
        //     "title": "Get 2x returns on your money.",
        //     "img": "/images/banners/banner-20.jpg",
        // },


        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
        },
        {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
        },
        {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
        },
        {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
        },
        {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
        },
        {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
        },
        {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
        }

    ]
    return (
        <>
            <Grid container my={2} rowSpacing={2} columnSpacing={2}>
                {itemData.map((item) => (
                    <Grid item xs={6} sm={4} md={4} p={2}>
                        <Box bgcolor={'primary.light'}
                            sx={{
                                width: "100%",
                                height: 200,
                                backgroundImage: `url(${item.img})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',

                            }}>
                            {/* <CardMedia
                                component='img'
                                className='MuiCardMedia-media'
                                src={`${item.img}`}
                                style={{
                                    width: "100%",
                                    height: 300,                                    
                                    // paddingLeft: 0,
                                    objectFit: 'fill',
                                }}
                            /> */}
                        </Box>
                    </Grid>
                ))}


                {/* <Grid item xs={6} sm={4} md={4} p={2}>
                    <Box
                        sx={{
                            width: "100%",
                            height: 100

                        }}
                        bgcolor={'primary.light'}>item2</Box>
                </Grid>
                <Grid item xs={6} sm={4} md={4} p={2}>
                    <Box
                        sx={{
                            width: "100%",
                            height: 100

                        }}
                        bgcolor={'primary.light'}>item3</Box>
                </Grid>
                <Grid item xs={6} sm={4} md={4} p={2}>
                    <Box
                        sx={{
                            width: "100%",
                            height: 100

                        }}
                        bgcolor={'primary.light'}>item4</Box>
                </Grid> */}
            </Grid>
        </>
    )
}
export default GridContainer