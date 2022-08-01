import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import charDetailed from "./interfaces";
import CharCard from "./components/CharCard";
import listOfChars from "./components/CharList";
import { Grid, IconButton, Autocomplete, TextField, Box } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

function App() {
  const [charName, setCharName] = useState<String | null>("")
  const [charInfo, setCharInfo] = useState<charDetailed | undefined>(undefined)
  const [charImg, setCharImg] = useState("")
  const GENSHIN_URL = "https://api.genshin.dev/"

  return (
    <React.Fragment>

      <Grid container sx={{ display: 'flex', flexDirection: 'row', marginY: 'auto', minHeight: '100vh' }}>
        <Grid item md={4} sx={{ margin: '0 auto auto 0', height: '100%', textAlign: 'center' }}>
          <h1>Genshin Impact</h1>

          <Box sx={{ display: 'flex', flexDirection: 'row' }}>

            <Autocomplete
              onInputChange={(event, value) => {
                setCharName(value)
                console.log(value)
              }}
              freeSolo
              clearOnBlur={false}
              id="search"
              options={listOfChars}
              sx={{ width: 300, marginLeft: 'auto' }}
              renderInput={(params) => <TextField {...params} label="Select Character" />}
            />
            <IconButton onClick={searchChar} sx={{ marginRight: 'auto' }}>
              <SearchIcon></SearchIcon>
            </IconButton>
          </Box>

        </Grid>

        <Grid item md={8} sx={{ margin: 'auto', height: '100%' }}>
          {charInfo === undefined || charInfo === null ? (
            <CharCard image="" name="Please Select a Valid Character" />
          ) : (
            <CharCard {...charInfo} image={charImg} />
          )}

        </Grid>

      </Grid>

    </React.Fragment>
  )

  function searchChar() {
    if (charName != null) {
      const temp = charName.replace(/\s+/g, '-').toLowerCase();
      axios.get(GENSHIN_URL + "characters/" + temp).then((response => {
        setCharInfo(JSON.parse(JSON.stringify(response.data)))
        console.log(JSON.parse(JSON.stringify(response.data)))
      })).catch(() => {
        setCharInfo(undefined)
      })
      setCharImg(GENSHIN_URL + "characters/" + temp.toLowerCase() + "/card")
    }
  }


}


export default App;