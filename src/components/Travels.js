import React from 'react';
import Gallery from 'react-photo-gallery';
import img1 from './smallImages/img (1).jpg';
import img2 from './images/img (10).JPG';
import img3 from './images/img (3).JPG';
import img4 from './images/img (4).JPG';
import img5 from './images/img (5).JPG';
import img6 from './images/img (6).JPG';
import img11 from './images/img (15).jpg';
import img12 from './images/img (12).jpg';
import img13 from './images/img (13).JPG';

const photos = [
    {
        src: img1,
        width: 1,
        height: 1
    },
    {
        src: img2,
        width: 1,
        height: 2
    },
    {
        src: img3,
        width: 1,
        height: 1
    },
    {
        src: img4,
        width: 1,
        height: 1
    },
    {
        src: img5,
        width: 1,
        height: 1
    },
    {
        src: img6,
        width: 1,
        height: 3
    },
    {
        src: img11,
        width: 1,
        height: 1
    },
    {
        src: img12,
        width: 1,
        height: 1
    },
    {
        src: img13,
        width: 1,
        height: 1
    }
];

const Travels = () => (
    <div className='yellow fw4 mh1 ph1'>
      <p className='f3-ns f4'>Photos from my last South America travel</p>
      <Gallery photos={photos}/>
    </div>
  );

export default Travels;