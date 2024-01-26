import React from "react";
import ReactDOM from "react-dom/client"
import './sajan.scss'
import Header from "./Header";
import Products from "./Products";
import { BrowserRouter } from "react-router-dom";
import Sajan from "./Sajan";
import Aarambha from "./Aarambha";
import Jan25 from "./Jan25";
import A from "./A";
import C from "./C";

var qq={background: 'green', color: 'white'}

 function Services(props)
 {
  return (<div>
  <h1>THis Services{props.ab} </h1>
  <p>details {props.cd}</p>
  </div>)
 }
 function Footer()
 {
  return <h1 style={qq}>THis Footer</h1>
 }
ReactDOM.createRoot(document.getElementById('root')).render(
<>
<BrowserRouter>
<C/>
<A/>
<Jan25/>
<Sajan/>
<Aarambha/>
<Header/> 
<Products/>
<section>
<Services ab="Sajan" cd="Kafle"/> 
<Services ab="Sagar" cd="Kafle1"/> 
<Services ab="Aarambha" cd="Kafle2"/> 
</section>
<Footer/>
</BrowserRouter>
</>
)