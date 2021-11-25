import React, {Component} from 'react';
import {Carousel, CarouselItem} from "react-bootstrap";
import image1 from '../assets/6-grudnya-den-zbrojnyh-syl-ukrayiny-zsu.jpg';
import image2 from '../assets/a3a602261d8ebf44.jpg';
import image3 from '../assets/kosynskyj-holovnyj-majster-serzhant-shevronh.jpg';

class CarouselBox extends Component {
  render() {
    return (
      <Carousel >
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={image1}
          />
          <Carousel.Caption>
            <h3>ASU picture 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aliquam aliquid, at, beatae cupiditate
              debitis dignissimos doloremque eaque hic, minima nesciunt perferendis praesentium reiciendis sed sequi
              similique unde voluptatibus?</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            // width='100%'
            className='d-block w-100'
            src={image2}
          />
          <Carousel.Caption>
            <h3>ASU picture 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aliquam aliquid, at, beatae cupiditate
              debitis dignissimos doloremque eaque hic, minima nesciunt perferendis praesentium reiciendis sed sequi
              similique unde voluptatibus?</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={image3}
          />
          <Carousel.Caption>
            <h3>ASU picture 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aliquam aliquid, at, beatae cupiditate
              debitis dignissimos doloremque eaque hic, minima nesciunt perferendis praesentium reiciendis sed sequi
              similique unde voluptatibus?</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselBox;
