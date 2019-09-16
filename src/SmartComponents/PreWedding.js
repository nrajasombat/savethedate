import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import img1 from '../images/gallery/1.png';
import img2 from '../images/gallery/2.png';
import img3 from '../images/gallery/3.png';
import img4 from '../images/gallery/4.png';
import img5 from '../images/gallery/5.png';
import img6 from '../images/gallery/6.png';
import img7 from '../images/gallery/7.png';
import img8 from '../images/gallery/8.png';
import img9 from '../images/gallery/9.png';
import img10 from '../images/gallery/10.png';
import img11 from '../images/gallery/11.png';
import img12 from '../images/gallery/12.png';
import img13 from '../images/gallery/13.png';
import img14 from '../images/gallery/14.png';
import img15 from '../images/gallery/15.png';
import img16 from '../images/gallery/16.png';
import img17 from '../images/gallery/17.png';
import img18 from '../images/gallery/18.png';
import img19 from '../images/gallery/19.png';
import img20 from '../images/gallery/20.png';
import img21 from '../images/gallery/21.png';
import img22 from '../images/gallery/22.png';
import img23 from '../images/gallery/23.png';
import img24 from '../images/gallery/24.png';
import img25 from '../images/gallery/25.png';
import img26 from '../images/gallery/26.png';
import img27 from '../images/gallery/27.png';
import img28 from '../images/gallery/28.png';
import img29 from '../images/gallery/29.png';
import img30 from '../images/gallery/30.png';
import img31 from '../images/gallery/31.png';
import img32 from '../images/gallery/32.png';
import img33 from '../images/gallery/33.png';
import img34 from '../images/gallery/34.png';
import img35 from '../images/gallery/35.png';
import img36 from '../images/gallery/36.png';
import img37 from '../images/gallery/37.png';
import img38 from '../images/gallery/38.png';
import img39 from '../images/gallery/39.png';
import img40 from '../images/gallery/40.png';
import img41 from '../images/gallery/41.png';
import img42 from '../images/gallery/42.png';
import img43 from '../images/gallery/43.png';
import img44 from '../images/gallery/44.png';
import img45 from '../images/gallery/45.png';
import img46 from '../images/gallery/46.png';
import img48 from '../images/gallery/48.png';
import img49 from '../images/gallery/49.png';
import img51 from '../images/gallery/51.png';
import img53 from '../images/gallery/53.png';
import img55 from '../images/gallery/55.png';
import img56 from '../images/gallery/56.png';
import img58 from '../images/gallery/58.png';
import img59 from '../images/gallery/59.png';
import img60 from '../images/gallery/60.png';
import img61 from '../images/gallery/61.png';
import img62 from '../images/gallery/62.png';
import img65 from '../images/gallery/65.png';
import img66 from '../images/gallery/66.png';
import img67 from '../images/gallery/67.png';
import img68 from '../images/gallery/68.png';
import img69 from '../images/gallery/69.png';
import img70 from '../images/gallery/70.png';
import img71 from '../images/gallery/71.png';
import './Pics.scss';
import Footer from '../components/Footer';

const photos = [
  {
    src: img1,
    width: 4,
    height: 3,
  },
  {
    src: img6,
    width: 2,
    height: 3,
  },
  {
    src: img11,
    width: 4,
    height: 3,
  },

  {
    src: img21,
    width: 4,
    height: 3,
  },
  {
    src: img31,
    width: 5,
    height: 3,
  },

  {
    src: img41,
    width: 4,
    height: 3,
  },
  {
    src: img51,
    width: 4,
    height: 3,
  },
  {
    src: img61,
    width: 5,
    height: 3,
  },
  {
    src: img71,
    width: 3,
    height: 3,
  },

  {
    src: img2,
    width: 4,
    height: 3,
  },

  {
    src: img62,
    width: 5,
    height: 3,
  },
  {
    src: img22,
    width: 4,
    height: 3,
  },
  {
    src: img32,
    width: 5,
    height: 3,
  },

  {
    src: img42,
    width: 4,
    height: 3,
  },
  {
    src: img7,
    width: 2,
    height: 3,
  },
  {
    src: img12,
    width: 4,
    height: 3,
  },
  {
    src: img3,
    width: 2,
    height: 3,
  },
  {
    src: img13,
    width: 4,
    height: 3,
  },
  {
    src: img23,
    width: 4,
    height: 3,
  },
  {
    src: img33,
    width: 4,
    height: 3,
  },
  {
    src: img43,
    width: 4,
    height: 3,
  },
  {
    src: img53,
    width: 4,
    height: 3,
  },
  {
    src: img4,
    width: 2,
    height: 3,
  },
  {
    src: img24,
    width: 4,
    height: 3,
  },
  {
    src: img14,
    width: 2,
    height: 3,
  },

  {
    src: img19,
    width: 4,
    height: 3,
  },
  {
    src: img44,
    width: 2,
    height: 3,
  },
  {
    src: img5,
    width: 2,
    height: 3,
  },
  {
    src: img15,
    width: 4,
    height: 3,
  },
  {
    src: img25,
    width: 4,
    height: 3,
  },
  {
    src: img35,
    width: 4,
    height: 3,
  },
  {
    src: img45,
    width: 2,
    height: 3,
  },
  {
    src: img55,
    width: 2,
    height: 3,
  },
  {
    src: img65,
    width: 4,
    height: 3,
  },
  {
    src: img16,
    width: 4,
    height: 3,
  },
  {
    src: img26,
    width: 4,
    height: 3,
  },
  {
    src: img17,
    width: 4,
    height: 3,
  },
  {
    src: img46,
    width: 2,
    height: 3,
  },
  {
    src: img56,
    width: 2,
    height: 3,
  },
  {
    src: img66,
    width: 4,
    height: 3,
  },
  {
    src: img36,
    width: 2,
    height: 3,
  },
  {
    src: img27,
    width: 4,
    height: 3,
  },
  {
    src: img37,
    width: 4,
    height: 3,
  },

  {
    src: img67,
    width: 4,
    height: 3,
  },
  {
    src: img9,
    width: 2,
    height: 3,
  },
  {
    src: img18,
    width: 4,
    height: 3,
  },
  {
    src: img28,
    width: 4,
    height: 3,
  },
  {
    src: img38,
    width: 4,
    height: 3,
  },
  {
    src: img48,
    width: 4,
    height: 3,
  },
  {
    src: img58,
    width: 4,
    height: 3,
  },
  {
    src: img68,
    width: 4,
    height: 3,
  },
  {
    src: img10,
    width: 4,
    height: 3,
  },
  {
    src: img34,
    width: 4,
    height: 3,
  },
  {
    src: img29,
    width: 4,
    height: 3,
  },
  {
    src: img39,
    width: 4,
    height: 3,
  },
  {
    src: img49,
    width: 4,
    height: 3,
  },
  {
    src: img59,
    width: 4,
    height: 3,
  },
  {
    src: img69,
    width: 4,
    height: 3,
  },
  {
    src: img8,
    width: 2,
    height: 3,
  },
  {
    src: img20,
    width: 4,
    height: 3,
  },
  {
    src: img30,
    width: 4,
    height: 3,
  },
  {
    src: img40,
    width: 4,
    height: 3,
  },

  {
    src: img60,
    width: 4,
    height: 3,
  },
  {
    src: img70,
    width: 4,
    height: 3,
  },
];

class PreWedding extends Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <div className="pic">
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox
          images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />

        <Footer />
      </div>
    );
  }
}

export default PreWedding;
