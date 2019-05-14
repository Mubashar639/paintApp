import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'
import anime from 'animejs';
//imports images
import image1 from '../../images/home01-slide01-obj3.png'
import image2 from '../../images/home01-slide01-obj2.png'
import image3 from '../../images/home01-slide01-obj1.png'
import image4 from '../../images/home01-slide01-obj4.png'
import image5 from '../../images/home01-slide02-obj1.png'

// React icons
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';


export default class SliderComponent extends Component {
	componentDidMount() {
		this.anime();
	}

	componentDidUpdate() {
		this.anime();
	}
	anime = () => {
		anime({
			targets: '.text2',
			translateY: '-1rem',
			opacity:1,
			// rotate: '2turn',
			duration: 3000,
			delay: 2000
		});
		anime({
			targets: '.text1',
			translateX: '0rem',
			rotate: '1turn',
			duration: 3000,
			delay:1000
		});
	};
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
							<h2 className='text1'>PROFESSIONALS</h2>
							<h2 className='text2'>HYDDIMAN SERVICES</h2>
							<button className='btn'>FINDOUT MORE >></button>
						</div>
					</div>
					<div className='slide2'>
						<div className="slide2textDiv">
							<h2 className='text1'>PROFESSIONALS</h2>
							<h2 className='text2'>HYDDIMAN SERVICES</h2>
							<button className='btn'>FINDOUT MORE >></button>
						</div>
					</div>
					<div className='slide3'>
						<div className="slide3textDiv">
							<img src={image5} alt="" className="image5" />
							<h2 className='text2'>HYDDIMAN SERVICES</h2>
							<button className='btn'>FINDOUT MORE >></button>
						</div>

					</div>
				</Slider>
			</div>
		);
	}
}