import React, { Component } from 'react';
import './navbar.css'




const FirstArrow = () => {
    return (

        <div className="relative1">
            <div>
                
                <div class="arrow_First">
                </div>
            </div>
            <div className="arrow_Second">

            </div>
        </div>
    )
}



const Arrows = () => {
    return (
        <div className="relative2">
        
            <div className="arrow">
            </div>
            
            <div className="arrow1">

            </div>
        </div>
    )
}


class Navbar extends Component {
    constructor() {
        super()


    }

    render() {


        return (


            <div style={{
                backgroundColor: 'rgb(49, 55, 67)',
                width: '98vw',
                height: '15vw',


            }} >


                <div style={{ display: "flex", flexWrap: "wrap", position: "relative" }}>
                    <FirstArrow></FirstArrow>
                    <Arrows ></Arrows>
                    <Arrows />
                    <Arrows />
                    <Arrows />
                </div>
            </div>
        )
    }
}
export default Navbar;