import React from 'react'
import charDetailed from '../interfaces'
import { Box, Rating } from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function charCard(char: charDetailed) {
    const colour = switchColour(char.vision)
    return (
        <React.Fragment>

            <Card sx={{ display: 'flex', flexDirection: 'row', border: 5, borderColor: colour, marginRight: '10px' }}>
                <Box sx={{ display: 'flex' }}>
                    {char.name === undefined || char.image === "" ? (
                        ""
                    ) : (
                        <CardMedia
                            component='img'
                            height="700rem"
                            src={char.image}>

                        </CardMedia>
                    )}

                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent>
                        <Typography variant='h3'>
                            {char.name}
                        </Typography>
                        <Typography component='div'>
                            {char.rarity === 5 || char.rarity === 4 ? (
                                <Rating name="read-only" value={char.rarity} readOnly />
                            ) : (
                                ""
                            )}
                        </Typography>

                        <Typography variant='subtitle1' color='text.secondary' component='div'>
                            {char.affiliation} <br />
                            {char.nation}
                        </Typography>

                        <Typography variant='body1' component='div'>
                            <hr style={{ width: '50vw', margin: '0px' }} />
                            <br />
                            <br />
                            {char.description}
                        </Typography>

                    </CardContent>
                </Box>

            </Card>

        </React.Fragment >

    )

    function switchColour(vision: string | undefined) {
        switch (vision) {
            case 'Anemo':
                return '#acfce6'
            case 'Hydro':
                return '#89c3f0'
            case 'Electro':
                return '#cda9fc'
            case 'Pyro':
                return '#ff6363'
            case 'Geo':
                return '#fac878'
            case 'Cryo':
                return '#7cbbeb'
        }
    }


}
