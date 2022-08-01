import axios from "axios";
import { useState } from "react";
import "./App.css";
import charDetailed from "./interfaces";
import CharCard from "./components/CharCard";
import Search from "./components/Search";
import { Grid, Paper, Container } from "@mui/material"

function App() {
  const [charName, setCharName] = useState("")
  const [charInfo, setCharInfo] = useState<charDetailed | undefined>(undefined)
  const [charImg, setCharImg] = useState("")
  const GENSHIN_URL = "https://api.genshin.dev/"

  return (
    <div>
      <h1>Genshin Impact</h1>
      <label>Which Character are you looking for? </label> <br />
      <input type="text" id="char-name" name="char-name" onChange={e => { setCharName(e.target.value) }} />
      <button onClick={searchChar}>Search</button>

      <p>You have searched for {charName}</p>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
      >
        <Grid item md={6}>
          <Search />
        </Grid>
        <Grid item md={6}>
          <CharCard {...charInfo} image={charImg} />
        </Grid>

      </Grid>

    </div>
  )

  function searchChar() {
    const temp = charName.replace(/\s+/g, '-').toLowerCase();
    axios.get(GENSHIN_URL + "characters/" + temp).then((response => {
      setCharInfo(JSON.parse(JSON.stringify(response.data)))
      console.log(JSON.parse(JSON.stringify(response.data)))
    }))
    setCharImg(GENSHIN_URL + "characters/" + temp.toLowerCase() + "/card")
  }
}


export default App;