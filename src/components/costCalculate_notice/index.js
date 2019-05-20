import React from "react";
import "./style.css";
// import "font-awesome/css/font-awesome.css"
class CastNoice extends React.Component {
    constructor() {
        super()
        this.state={
            select:0,
        }
    }

 

    render() {


        return (
           <div className = "costcalculator" >
              <span className="notice">
              <i style={{color:"#F8CF07",margin:"0px 8px 2px 0px"}} class="fas fa-exclamation-circle"></i>
              The  <strong> Cost Calculator </strong> is just used for Preview Purpose Only. 
              It is not part of the theme and NOT included in the final purchase files.
               You must purchase this plugin separately.
              </span>
             </div >
        )
    }
}
export default CastNoice;