import React, { Component } from 'react';
import './card.css'
import Card from '@material-ui/core/Card';

class CardImages extends Component {
    constructor() {
        super()

        this.state = {
            images: [
                {
                    img: "https://renovation.thememove.com/data/images/service01.jpg",
                    link: "reovationn"
                },

                {
                    img: "https://renovation.thememove.com/data/images/service02.jpg",
                    link: "Electrical"
                },
                {
                    img: "https://renovation.thememove.com/data/images/service03.jpg",
                    link: "Painting"
                },
                {
                    img: "https://renovation.thememove.com/data/images/service04.jpg",
                    link: "Plumbing"
                },
                {
                    img: "https://renovation.thememove.com/data/images/service05.jpg",
                    link: "Heating"
                },
                {
                    img: "https://renovation.thememove.com/data/images/service06.jpg",
                    link: "Roofing"
                }
            ]
        }

    }

    render() {


        return (


            <div className="card" >

                {this.state.images.map((item) => {
                    return (
                        <Card className="cards" >

                            <img className="image" src={item.img} />
                            <div className="hexaElement">
                                <span className="hexaBody"></span>
                                <div class="hexagon">
                                </div>
                            </div>
                            <a className="Linktext" href="#" >{item.link}</a>
                        </Card>
                    )
                })}

<div>

</div>
            </div>
        )
    }
}
export default CardImages;