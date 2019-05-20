import React, { Component } from "react";
import Slider from "react-slick";
import Search from '@material-ui/icons/Search';

export default class Responsive extends Component {

  state = {
    classContain: "my",
    overlay: "myoverlay",
    preX: 0,
    text:"mytext"
  }

  closestEdge(x, y, w, h) {
    
    if (this.state.preX > x) {
      this.setState(
        { classContain: "container", overlay: "overlay",})
  
    } else {
      this.setState(
        { classContain: "container2", overlay: "overlay2",  })
  
    }
    // console.log(x,y,w,h)
    // var topEdgeDist =this.distMetric(x,y,0,h);
    // var bottomEdgeDist = this.distMetric(x,y,0,h);
    // var leftEdgeDist = this.distMetric(x,y,w,0);
    // var rightEdgeDist = this.distMetric(x,y,w/2,h);
    this.setState({ preX: x })
    // var min = Math.min(leftEdgeDist,rightEdgeDist,topEdgeDist,bottomEdgeDist);
    // switch (min) {
    //     case leftEdgeDist:
    //         return "left";
    //     case rightEdgeDist:
    //         return "right";
    //     case topEdgeDist:
    //         return "top";
    //     case bottomEdgeDist:
    //         return "bottom";
    //         default:
    //         break;
    // }
  }

  //   distMetric(x,y,x2,y2) {
  //     var xDiff = x - x2;
  //     var yDiff = y - y2;
  //   const  direction = Math.round( ( ( ( Math.atan2(yDiff, xDiff) * (180 / Math.PI) ) + 180 ) / 90 ) + 3 ) % 4;
  //     return (direction);
  // }

  mouseOnMy = (e) => {

    var x = e.pageX - e.target.offsetLeft;
    var y = e.pageY - e.target.offsetTop;
    var edge = this.closestEdge(x, y, e.target.clientWidth, e.target.clientHeight);
    //  if(edge=== "right"){
    //    this.setState(
    //      {classContain:"container2",overlay:"overlay2"})
    //   }else {
    //     this.setState(
    //       {classContain:"container",overlay:"overlay"})
    //  }
  }
  mousegone=()=>{
    this.setState({
      text:"mytext"
    })
  }

  render() {
    const { allType } = this.props
    var settings = {
      className: "Slideradd",
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className="mytabs" style={styles.root}>
        <Slider  {...settings}>
          {allType.map((value, key) => {
            return (
              <div onMouseLeave={this.mousegone} className={this.state.classContain} key={key} onMouseEnter={((e) => this.mouseOnMy(e))}>
                
                <img src={value.image} alt="Avatar" className="image" />
                <div className={this.state.overlay}>
                <div className="text">
                    <p className="poin">{value.type}</p>
                    {value.name}
                  </div>
                  <div className="mypan">
                    <Search style={{ display: "block", color: "black", position: "relative", left: "14px", top: "2px" }} />
                  </div>
                </div>
             
              </div>
            )
          })}
        </Slider>
      </div>
    );
  }
}
const styles = {
  root: {
    width: "auto",
    height: "auto",
    marginLeft: "0px"

  },
  imgStyle: {
    height: "250px",
    display: "inlineBlock",
    position: "relative",
  },
  imgdiv: {
    margin: 0,
  },
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="forword"
      // style={{
      //   ...style, display: "block", position: "absolute",
      //   left: "95%",

      // }}
      onClick={onClick}
    >
      <img className="forwordimg" src="./arrow_forward_white_24x24.png" alt="some issue" /> 
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
  <div  className="myback">
    <div
      className="backword"
      // style={{
      //   ...style, display: "block", width: "10px", height: "10px", position: "absolute", zIndex: "100",
      //   left: "5%", top: "50%",
        // ':&after':{
        //   content: "",
        //   position: "absolute",
        //   bottom: "-12px",
        //  left: 0,
        //   width: 0,
        //   height: 0,
        //   borderLeft: "25px solid transparent",
        //   borderRight: "25px solid transarent",
        //   borderTop:" 12px solid #F8CF07" ,

        // } 
      // }}
      onClick={onClick}
    >
      <img className="forwordimg" src="./arrow_back_white_24x24.png" alt="some issue" /> 
    
    </div></div>
  );
}
// #octagon:before {
//   content: "";
//   width: 100px;
//   height: 0;
//   position: absolute;
//   top: 0;
//   left: 0;
//   border-bottom: 29px solid red;
//   border-left: 29px solid #eee;
//   border-right: 29px solid #eee;
// }
// #octagon:after {

//   <div class="direction-reveal">

//   <a href="#" class="direction-reveal__card">
//     <img src="images/image.jpg" alt="Image" class="img-fluid">

//     <div class="direction-reveal__overlay direction-reveal__anim--in">
//       <h3 class="direction-reveal__title">Title</h3>
//       <p class="direction-reveal__text">Description text.</p>
//     </div>
//   </a>

//   ...

// </div>