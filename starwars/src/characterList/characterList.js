import React, {useState, useEffect} from "react"
import axios from "axios"
import CharacterCard from "../characterComponent/character"


export default function CharacterData () {
    const [charData, setCharData] = useState([])


    useEffect(() => {
     axios.get('https://swapi.co/api/people/')
     .then(response => {
         console.log(response.data);
         setCharData(response.data.results); 
     })
     .catch(error => {
         console.log("error in data", error); 
     })
    },[])

    return (
        <div>
         {charData.map(character => {
             return (
          <CharacterCard name = {character.name} mass = {character.mass} height = {character.height} birth_year = {character.birth_year}/>
             )
         })}
        </div>
    )
}