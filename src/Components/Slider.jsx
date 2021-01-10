import React from "react";
import {Carousel, CarouselItem} from "react-bootstrap";
import ferr from "../images/ferrari-7cb6aed.jpg";
import lambo from "../images/anypics.ru-16879.jpg";
import porshe from "../images/1-1532527008897@2x.jpg"

const cars = [ferr, lambo, porshe];

const Slider = () => {
    return (
        <Carousel>
            {cars.map((i) => {
                return (
                    <CarouselItem style={{'height': '600'}} key={i}>
                        <img className="d-block w-100" src={i} alt="Ups"/>
                        <Carousel.Caption>
                            <h3>sale 1200000000$</h3>
                            <p>luxury cars</p>
                        </Carousel.Caption>
                    </CarouselItem>
                )
            })}
        </Carousel>
    )
}

export default Slider;