import React, { Component } from 'react';
import './navbar.css'




const FirstArrow = (props) => {
    const clickme=()=>{
        props.onclickme(props.item)
    }
  
    return (

        <div onClick={clickme} className = "relative1" >
        <span className = "textStyle1" > { props.children } </span> <div >

        <div className = "arrow_First" >

        </div> </div > <div className = "arrow_Second" >

        </div> </div >
    )
}



const Arrows = (props) => {
    const clickme=()=>{
        props.onclickme(props.item)
    }

    return ( < div onClick={clickme} className = "relative2" >
        <span className = "textStyle2" > { props.children } </span> <div className = "arrow" >
        </div>

        <div className = "arrow1" >

        </div> </div >
    )
}


class Navbar extends Component {
    constructor() {
        super()
        this.state={
            select:0,
        }

    }
    clickme=(item)=>{
        this.props.handleChange(undefined,item)
    }

    render() {


        return (
        //    <div className = "Firstheader"style = {{}} >
        //     <div>
        //     <div className = "heading" >
        //     <h1 > Our Works </h1> </div >
        //     <div className = "paraGraph">< p > We
        //     let our quality work and commitment to customer satisfaction be our slogan. </p></div >
                <div style = {
                    { display: "flex", flexWrap: "wrap", position: "relative", paddingLeft: "5%" }
                } >
                <FirstArrow onclickme={this.clickme} item={0}> ALL WORKS </FirstArrow>
                 <Arrows onclickme={this.clickme} item={1}>    ELECTRICAL </Arrows> 
                 <Arrows onclickme={this.clickme} item={2} >   PAINTING      </Arrows> 
                 <Arrows onclickme={this.clickme} item={3} >   PLUMBING      </Arrows>
                  <Arrows onclickme={this.clickme} item={4} >   REPAIR      </Arrows> 
                {/* </div>
                </div> */}
             </div >
        )
    }
}
export default Navbar;