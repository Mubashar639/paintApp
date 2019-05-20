import React from 'react';
import Catalog from "./Catagory"
class Home2 extends React.Component{

  render(){
    return(
      <div className="containHome2">
      <div className="home2">
        <h2>Our Works</h2>
        <p className="del">We let our quality work and commitment to customer satisfaction be our slogan.</p>
        <Catalog />


        </div>
     
    </div>
  );
  }
}


export default Home2;