import React from 'react';
import Gallery from 'react-photo-gallery';
import img1 from './smallImages/img (1).jpg';
import img2 from './smallImages/img (2).jpg';
import img3 from './smallImages/img (3).jpg';
import img4 from './smallImages/img (4).jpg';
import img5 from './smallImages/img (5).jpg';
import img6 from './smallImages/img (6).jpg';
import img7 from './smallImages/img (7).jpg';
import img8 from './smallImages/img (8).jpg';
import img9 from './smallImages/img (9).jpg';

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
        height: 2,
        alt: ''
    },
    {
        src: img7,
        width: 1,
        height: 1,
        alt: ''
    },
    {
        src: img8,
        width: 1,
        height: 1,
        alt: ''
    },
    {
        src: img9,
        width: 1,
        height: 1,
        alt: ''
    }
];

const Travels = () => (
    <div className='yellow georgia fw4 mh1 ph1'>
        <p className='f3-ns f4'>Photos from my last South America travel</p>
        <p className='f4-ns f5'>I spent there over 6 months. I fall in love with Colombia and I want to go back there soon</p>
        <Gallery photos={photos}/> 
        <p className='f4-ns f5'>It was a difficult decision but I do not regret anything</p>
        <p className='f4-ns f5'>I met great people, try a lot of new flovors (give me more empanadas!), was in beautiful places like Galapagos Islands</p>
        <p className='f4-ns f5'>I was at the End of the World - Ushuaia and on the Carribean coast - Tayrona Park</p>
        <p className='f4-ns f5'>I was at the Pacific coast (Lima) and Atlantic coast (Buenos Aires)</p>
        <p className='f4-ns f5'>I sailed on the Amazon and hiking in amazing mountains Torres del Paine</p>
    </div>
  );

export default Travels;