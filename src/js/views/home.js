import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "./Card.jsx";

export const Home = () => (
	<>
<div className="container pb-5">
<h1>Character</h1>
  <div className="row">
    <div className="col-sm">
	<Card />
    </div>
    <div className="col-sm">
	<Card />
    </div>
    <div className="col-sm">
	<Card />
    </div>
  </div>
</div>

<div className="container pt-5">
<h1>Planets</h1>
  <div className="row">
    <div className="col-sm">
	<Card />
    </div>
    <div className="col-sm">
	<Card />
    </div>
    <div className="col-sm">
	<Card />
    </div>
  </div>
</div>
		
	</>
);
