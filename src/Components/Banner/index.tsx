import bannerImg from '../../Assets/bannermain.png';
import './styles.css'
import React from 'react';

const Banner = () => {
    return (
        <section className="main_banner">
            <div className="main_banner-text">
                <h2 className="main_banner-text-title">Hound Express</h2>
                <p className="main_banner-text-lema">Expertos en logística y comercio internacional en México y el mundo </p>
            </div>
            <div className="main_banner-img">
                <img className="banner_img" src={bannerImg} alt="Imagenes de logistica" />
            </div>      
        </section>
    );
}
export default Banner;