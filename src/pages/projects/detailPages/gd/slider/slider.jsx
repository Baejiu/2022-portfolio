import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { Component } from 'react';
import Slider from 'react-slick';
import styles from './slider.module.css';

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <button
      style={{
        ...style,
        width: '40px',
        height: '40px',
        border: '2px solid #202020',
        borderRadius: '4px',
        position: 'absolute',
        right: '0px',
        bottom: '0px',
        backgroundColor: '#ffffff',
      }}
      onClick={onClick}
    >
      &gt;
    </button>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <button
      style={{
        ...style,
        width: '40px',
        height: '40px',
        border: '2px solid #202020',
        borderRadius: '4px',
        position: 'absolute',
        left: '0px',
        bottom: '0px',
        backgroundColor: '#ffffff',
      }}
      onClick={onClick}
    >
      &lt;
    </button>
  );
}

export default function SimpleSlider({ list }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: '60px',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          arrows: false,
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
  };
  return (
    <div className={styles.slick}>
      <Slider {...settings} className={styles.slider}>
        {list &&
          list.map((item, index) => {
            return (
              <div className={styles.item} key={index}>
                <img src={item} alt="" className={styles.img} />
              </div>
            );
          })}
      </Slider>
    </div>
  );
}
