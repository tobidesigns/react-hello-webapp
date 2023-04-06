import React from "react";


const Card = () => {
    return (
        <div className="card" style={{width: "18rem"}}>
          <img className="card-img-top" src="https://placehold.jp/400x200.png"/>
          <div className="card-body">
        <h5 className="card-title">{"card-title"}</h5>
        <p className="card-text">{"gender"}</p>
        <p className="card-text">{"hair-color"}</p>
        <p className="card-text">{"eye-color"}</p>
        <div className="d-flex justify-content-between">
        <a href="#" className="btn btn-primary">Go somewhere</a>
        <a href="#" className="btn btn-primary">{"heart"}</a>
        </div>
        
      </div>
    </div>
    );
}

export default Card