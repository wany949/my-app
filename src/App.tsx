import axios from "axios";
import { useState } from "react";
import "./App.css";
import charDetailed from "./interfaces";
import CharCard from "./components/CharCard";
import Search from "./components/Search";

function App() {
  const [charName, setCharName] = useState("")
  const [charInfo, setCharInfo] = useState<charDetailed | undefined>(undefined)
  const GENSHIN_URL = "https://api.genshin.dev/"

  return (
    <div>
      <h1>Genshin Impact</h1>
      <label>Which Character are you looking for? </label> <br />
      <input type="text" id="char-name" name="char-name" onChange={e => { setCharName(e.target.value) }} />
      <button onClick={searchChar}>Search</button>

      <p>You have searched for {charName}</p>

      <CharCard {...charInfo} />
    </div>
  )

  function searchChar() {
    axios.get(GENSHIN_URL + "characters/" + charName).then((response => {
      setCharInfo(JSON.parse(JSON.stringify(response.data)))
    }))
  }



}


export default App;