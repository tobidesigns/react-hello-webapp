import React, {useContext} from "react";
import { Context } from "../store/appContext";


const Card = () => {
  const {store, actions} = useContext(Context)
    return (


        // <div className="card" style={{width: "18rem"}}>
        //       <img className="card-img-top" src="https://placehold.jp/400x200.png"/>
        //   <div className="card-body">
        //       <h5 className="card-title"><b>Character Name: </b><br/>{store.starWarCharacters[0].name}</h5>
        //       <p className="card-text"><b>Height:</b> {store.starWarCharacters[0].height}cm</p>
        //       <p className="card-text"><b>Hair Color: </b> {store.starWarCharacters[0].hair_color}</p>
        //       <p className="card-text"><b>Eye Color: </b> {store.starWarCharacters[0].eye_color}</p>
        //       <div className="d-flex justify-content-between">
        //         <a href="#" className="btn btn-primary">Go somewhere</a>
        //         <a href="#" className="btn btn-primary">{"heart"}</a>
        //       </div>
        //   </div>
        // </div>
    );
}

export default Card