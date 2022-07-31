import React from 'react'
import charDetailed from '../interfaces'
import { Grid, Paper } from "@mui/material"

export default function charCard(props: charDetailed) {
    return (
        <div>
            <Paper elevation={3}>
                <h1>
                    {props.name}
                </h1>
                <em>{props.constellation}</em>
            </Paper>



        </div>
    )
}
