import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'
import './Slide3text2.css'
import './Text1-animation.css'
//imports images
import image1 from '../../images/home01-slide01-obj3.png'
import image2 from '../../images/home01-slide01-obj2.png'
import image3 from '../../images/home01-slide01-obj1.png'
import image4 from '../../images/home01-slide01-obj4.png'
import image5 from '../../images/home01-slide02-obj1.png'

// React icons
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';


export default class SliderComponent extends Component {
	next = () => {
		this.slider.slickNext();
	}
	previous = () => {
		this.slider.slickPrev();
	}


	render() {
		const settings = {
			// autoplay:true,
			dots: true,
			fade: true,
			useTransform: true,
			infinite: true,
			speed: 3300,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			useCSS: true,
			beforeChange: this.onBeforeChange,
			afterChange: this.onAfterChange
		};
		return (
			<div className='container'>
				<div onClick={this.previous} className="left-arrow"><FaAngleLeft className="leftIcon" /></div>
				<div onClick={this.next} className="right-arrow"><FaAngleRight className="rightIcon" /></div>
				<Slider ref={c => (this.slider = c)} {...settings} className="sliderContainer" >
					<div className='slide1'>
						<img src={image1} alt="" className="image1" />
						<img src={image2} alt="" className="image2" />
						<img src={image3} alt="" className="image3" />
						<div className="textDiv">
							<img src={image4} alt="" className="image4" />
							<div className='Slid1text1'>
								<div className="p">P</div>
								<div className="r">R</div>
								<div className="o1">O</div>
								<div className="f">F</div>
								<div className="e">E</div>
								<div className="s1">S</div>
								<div className="s2">S</div>
								<div className="i">I</div>
								<div className="o2">O</div>
								<div className="n">N</div>
								<div className="a">A</div>
								<div className="l">L</div>
								<div className="s3">S</div>
							</div>
							<h2 className='text2'>HYDDIMAN SERVICES</h2>
							<button className='btn'>FINDOUT MORE >></button>
						</div>
					</div>
					<div className='slide2'>
						<div className="slide2textDiv">
							{/* <h2 className='Slid2text1'>
								PROFESSIONALS
							</h2> */}
							<div className='Slid1text1'>
								<div className="p">P</div>
								<div className="r">R</div>
								<div className="o1">O</div>
								<div className="f">F</div>
								<div className="e">E</div>
								<div className="s1">S</div>
								<div className="s2">S</div>
								<div className="i">I</div>
								<div className="o2">O</div>
								<div className="n">N</div>
								<div className="a">A</div>
								<div className="l">L</div>
								<div className="s3">S</div>
							</div>
							<h2 className='text2'>HYDDIMAN SERVICES</h2>
							<button className='btn'>FINDOUT MORE >></button>
						</div>
					</div>
					<div className='slide3'>
						<div className="slide3textDiv">
							<img src={image5} alt="" className="image5" />
							<div className='slide3text2'>
								<div className="W">W</div>
								<div className="E">E</div>
								<div className="C">C</div>
								<div className="A1">A</div>
								<div className="N1">N</div>
								<div className="D">D</div>
								<div className="O">O</div>
								<div className="A2">A</div>
								<div className="N2">N</div>
								<div className="Y">Y</div>
								<div className="T">T</div>
								<div className="H">H</div>
								<div className="I">I</div>
								<div className="N3">N</div>
								<div className="G">G</div>
								<div className="LAST">!</div>
							</div>
							<button className='btn'>FINDOUT MORE >></button>
						</div>
					</div>
				</Slider>
			</div>
		);
	}
}