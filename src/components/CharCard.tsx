import React from 'react'
import charDetailed from '../interfaces'
import { Grid, Paper, Container, Box } from "@mui/material"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import Icon from '@mui/material/Icon';
import { yellow } from '@mui/material/colors';

export default function charCard(char: charDetailed) {
    const createStars = (n: number) => {
        let stars = []
        for (let i = 0; i < n; i++) {
            stars.push(<StarIcon sx={{ color: yellow[500] }}></StarIcon>)
        }
        return stars
    }
    return (
        <React.Fragment>
            <Card sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box sx={{ display: 'flex' }}>
                    <CardMedia
                        component='img'
                        height="500rem"
                        src={char.image}>

                    </CardMedia>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent>
                        <Typography variant='h3'>
                            {char.name}
                        </Typography>
                        <Typography>
                            {char.rarity === 5 || char.rarity === 4 ? (
                                createStars(char.rarity)
                            ) : (
                                <p></p>
                            )}
                        </Typography>

                        <Typography variant='subtitle1' color='text.secondary'>
                            {char.affiliation} <br />
                            {char.nation}
                        </Typography>
                        <Typography variant='body1'>
                            <hr />
                            <br />
                            <br />
                            {char.description}
                        </Typography>

                    </CardContent>
                </Box>

            </Card>

        </React.Fragment >

    )


}
