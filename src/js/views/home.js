import React, {useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "./Card.jsx";


export const Home = () => {
  
  const {store, actions} = useContext(Context)
  console.log(Context);
  const charNames =  store.starWarCharacters.map(el => el.hair_color)
  console.log(charNames)

  return(
    <div className="container pb-5">
      <h1>Character</h1>
      <div className="row">
      <div className="col-sm">
        <Card />
      </div>
      </div>
    </div>
    )
  };
