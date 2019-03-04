import React from 'react';
import Gallery from 'react-photo-gallery';
import img1 from './smallImages/img (1).jpg';
import img2 from './smallImages/img (10).jpg';
import img3 from './smallImages/img (3).jpg';
import img4 from './smallImages/img (4).jpg';
import img5 from './smallImages/img (5).jpg';
import img6 from './smallImages/img (6).jpg';
import img11 from './smallImages/img (15).jpg';
import img12 from './smallImages/img (12).jpg';
import img13 from './smallImages/img (13).jpg';

const photos = [
    {
        src: img1,
        width: 1,
        height: 1,
        alt: ''
    },
    {
        src: img2,
        width: 1,
        height: 2,
        alt: ''
    },
    {
        src: img3,
        width: 1,
        height: 1,
        alt: ''
    },
    {
        src: img4,
        width: 1,
        height: 1,
        alt: ''
    },
    {
        src: img5,
        width: 1,
        height: 1,
        alt: ''
    },
    {
        src: img6,
        width: 1,
        height: 3,
        alt: ''
    },
    {
        src: img11,
        width: 1,
        height: 1,
        alt: ''
    },
    {
        src: img12,
        width: 1,
        height: 1,
        alt: ''
    },
    {
        src: img13,
        width: 1,
        height: 1,
        alt: ''
    }
];

const Travels = () => (
    <div className='yellow fw4 mh1 ph1'>
      <p className='f3-ns f4'>Photos from my last South America travel</p>
      <Gallery photos={photos}/>
    </div>
  );

export default Travels;