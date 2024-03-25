import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '10%',
    autoplay: true, // Adicione esta linha
    autoplaySpeed: 3000, // Defina o intervalo desejado em milissegundos
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '10%',
        },
      },
    ],
  };  

  return (
    <Slider {...settings} className={styles.slickdots}>
      <div>
        <img src="/img1.png" alt="Imagem 1" className={styles.carouselImage} />
      </div>

      <div>
        <img src="/img2.png" alt="Imagem 2" className={styles.carouselImage} />
      </div>

      <div>
        <img src="/img3.png" alt="Imagem 3" className={styles.carouselImage} />
      </div>

      <div>
        <img src="/img4.png" alt="Imagem 4" className={styles.carouselImage} />
      </div>

      <div>
        <img src="/img5.png" alt="Imagem 5" className={styles.carouselImage} />
      </div>

      <div>
        <img src="/img6.png" alt="Imagem 6" className={styles.carouselImage} />
      </div>
    </Slider>
  );
};

export default Carousel;