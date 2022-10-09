import Image from 'next/image'
import Document, { Html, Head, Main, NextScript} from 'next/document'
import layout from '../components/layout.module.css'
import { useState, useEffect } from 'react';
import Link from 'next/link'

import photo1 from '../public/photo1.jpg';
import photo2 from '../public/photo2.jpg';
import photo3 from '../public/photo3.jpg';
import photo4 from '../public/photo4.jpg';
import photo5 from '../public/photo5.jpg';
import photo6 from '../public/photo6.jpg';
import photo7 from '../public/photo7.jpg';
import photo8 from '../public/photo8.jpg';
import photo9 from '../public/photo9.jpg';
import photo10 from '../public/photo10.jpg';
import photo11 from '../public/photo11.jpg';
import photo12 from '../public/photo12.jpg';
import photo13 from '../public/photo13.jpg';
import photo14 from '../public/photo14.jpg';
import photo15 from '../public/photo15.jpg';
import photo16 from '../public/photo16.jpg';
import photo17 from '../public/photo17.jpg';
import photo18 from '../public/photo18.jpg';
import photo19 from '../public/photo19.jpg';
import photo20 from '../public/photo20.jpg';
import photo21 from '../public/photo21.jpg';
import photo22 from '../public/photo22.jpg';
import photo27 from '../public/photo27.jpg';
import photo28 from '../public/photo28.jpg';
import photo30 from '../public/photo30.jpg';

let images = [photo12, photo12, photo12, photo12, photo18, photo18, photo18, photo5, photo5, photo5, photo9, photo9, photo9, photo20, photo20, photo20, photo8, photo8, photo8]

function createImage(index, img) {
   
   if (index < imgArr.length) {
      img = imgArr[index];
      index++;
      console.clear();
      console.log(imgArr[index]);
   } else {
      index = 0;
   }

   setTimeout(createImage, 3000);
   return img 
}

function Header({title}) {
   const [currentImage, setCurrentImage] = useState(0);
   var counter = 0;
      
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(images[Math.floor(Math.random() * images.length)]);
        }, 9)
        
        return () => clearInterval(intervalId);
    }, [])
   
   return<Image 
         src={currentImage}
         height={700}
         width={500}
         />
}

export default () => (
           <div className={layout.main}>
            <h1 className={layout.grid}>BigSky</h1>
            <Header/>
               <p className={layout.grid}>cairo, virtual machines, rust</p>
               <p></p>
               <p className={layout.linl}>
                  <Link href="https://github.com/bigsky77">dev&nbsp;&nbsp;</Link>
                  <Link href="https://twitter.com/BigSky_7">social&nbsp;&nbsp;</Link>             
                  <Link href="mailto:simon@bigsky.gg">contact</Link>
              </p> 
           </div>
)

