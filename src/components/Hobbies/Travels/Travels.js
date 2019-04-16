import React from 'react';
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
        alt: 'Volcan Misti, Arequipa, Peru'
    },
    {
        src: img2,
        width: 1,
        height: 2,
        alt: 'Glacier Perito Moreno Route, Argentina'
    },
    {
        src: img3,
        width: 1,
        height: 1,
        alt: 'Colca Canion, Peru'
    },
    {
        src: img4,
        width: 1,
        height: 1,
        alt: 'Chiloe Island, Chile'
    },
    {
        src: img5,
        width: 1,
        height: 1,
        alt: 'Glacier Perito Moreno, Argentina'
    },
    {
        src: img6,
        width: 1,
        height: 2,
        alt: 'Santiago, Chile'
    },
    {
        src: img7,
        width: 1,
        height: 1,
        alt: 'Volcan Villarica, Chile'
    },
    {
        src: img8,
        width: 1,
        height: 1,
        alt: 'Laguna Colorada, Bolivia'
    },
    {
        src: img9,
        width: 1,
        height: 1,
        alt: 'Tyrona Park, Colombia'
    }
];

const Travels = () => (
    <div className='white fw4 mh1 ph1'>
        <p className='f3-ns f4'>Photos from my last South America trip</p>
        <p className='f4-ns f5'>I spent there over 6 months. I fall in love with Colombia and I want to go back there soon</p>
        <div className='flex flex-wrap justify-center'>
            {photos.map(p => {
                return (
                <div key={p.alt} className="ma1 w-30-l w-40-m w-100 br2 bg-center b--black-10 shadow-1 pa2">
                    <img src={p.src} alt={p.alt}/>
                    <span className="db f6 pv2">{p.alt}</span>
                </div>  
                )})}
        </div>
        <p className='f4-ns f5'>It was a difficult decision but I do not regret anything</p>
        <p className='f4-ns f5'>I met great people, try a lot of new flovors (give me more empanadas!), was in beautiful places like Galapagos Islands</p>
        <p className='f4-ns f5'>I was at the End of the World - Ushuaia and on the Carribean coast - Tayrona Park</p>
        <p className='f4-ns f5'>I was at the Pacific coast (Lima) and Atlantic coast (Buenos Aires)</p>
        <p className='f4-ns f5'>I sailed on the Amazon and hiking in amazing mountains Torres del Paine</p>
        <p className='f4-ns f5'>This was a great school of life</p>
    </div>
  );

export default Travels;