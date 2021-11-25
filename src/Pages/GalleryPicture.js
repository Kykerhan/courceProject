import React, {Component} from 'react';
import image1 from '../assets/kosynskyj-holovnyj-majster-serzhant-shevronh.jpg'
import image2 from '../assets/territorial-defense-ukraine.jpg'
import image3 from '../assets/1544889291-1325.jpg'
import image4 from '../assets/630_360_1544083317-825.jpg'
import image5 from '../assets/3c5a2f97-f101-4c1d-a75f-ef56b4d76565.jpg'
import image6 from '../assets/6-grudnya-den-zbrojnyh-syl-ukrayiny-zsu.jpg'
import image7 from '../assets/a3a602261d8ebf44.jpg'
import image8 from '../assets/60b664c5bee0fc0019d5aa65.jpg'
import image9 from '../assets/57304728_303.jpg'

class GalleryPicture extends Component {
  render() {
    function gallery() {
      let arr = [image1, image2, image3, image4, image5, image6, image7, image8, image9]
      for (let i = 0; i < arr.length; i++) {
        <img src={`$image{i}`} height={'500px'} width={'500px'} className="img-thumbnail" alt="..."/>
      }
    }
    return(
      <div align={'center'} style={{
        paddingTop: '20px',
        paddingBottom: "90px"
      }}>
        <img src={image1} height={'500px'} width={'500px'} className="img-thumbnail" alt="..."/>
        <img src={image8} height={'500px'} width={'500px'} className="img-thumbnail" alt="..."/>
        <img src={image3} height={'500px'} width={'500px'} className="img-thumbnail" alt="..."/>
        <img src={image4} height={'500px'} width={'500px'} className="img-thumbnail" alt="..."/>
        <img src={image5} height={'500px'} width={'500px'} className="img-thumbnail" alt="..."/>
        <img src={image6} height={'500px'} width={'500px'} className="img-thumbnail" alt="..."/>
        <img src={image2} height={'500px'} width={'500px'} className="img-thumbnail" alt="..."/>
        <img src={image9} height={'500px'} width={'500px'} className="img-thumbnail" alt="..."/>
        <img src={image7} height={'500px'} width={'500px'} className="img-thumbnail" alt="..."/>
      </div>
    );
  }
}

export default GalleryPicture;
