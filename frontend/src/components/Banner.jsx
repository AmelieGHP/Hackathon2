import React from 'react';
import BannerImage from '@assets/black-mount-background-image.jpg';

const Banner = () => {
    return (
        <div className='bannerImage'>
            <img src={BannerImage} alt="Banner Image" />
        </div>
    );
};

export default Banner;