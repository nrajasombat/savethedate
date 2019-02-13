import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import img1 from './images/engagement1.png';
import img2 from './images/engagement2.png';
import img3 from './images/engagment3.jpg';
import img4 from './images/engagment4.png';
import img5 from './images/engagement5.jpg';
import img6 from './images/engagement6.jpg';
import img7 from './images/engagement7.jpg';
import img8 from './images/engagement8.jpg';
import img9 from './images/engagement9.jpg';
import img10 from './images/engagement10.jpg';
import img11 from './images/engagement11.jpg';
import goldbg from './images/background/gold.png';
import goldchevron from './images/background/GoldChevron.png';
import trianglebg from './images/background/triangleGold.png';
import pinkgoldbg from './images/background/pinkGold.png';
import pinkdiamondbg from './images/background/pinkdiamond.png';

const photos = [
  {
    src: img1,
    width: 4,
    height: 3,
  },
  {
    src: img7,
    width: 1.5,
    height: 2,
  },
  {
    src: goldbg,
    width: 1,
    height: 1,
  },
  {
    src: img3,
    width: 4,
    height: 3,
  },
  {
    src: goldchevron,
    width: 1.5,
    height: 2,
  },
  {
    src: img4,
    width: 3,
    height: 4,
  },
  {
    src: trianglebg,
    width: 4,
    height: 3,
  },
  {
    src: img5,
    width: 3,
    height: 4,
  },
  {
    src: img6,
    width: 4,
    height: 3,
  },
  {
    src: img8,
    width: 3,
    height: 4,
  },
  {
    src: pinkgoldbg,
    width: 1.5,
    height: 2,
  },
  {
    src: img2,
    width: 4,
    height: 3,
  },

  {
    src: img11,
    width: 1.5,
    height: 2,
  },
  {
    src: img9,
    width: 4,
    height: 3,
  },
  {
    src: pinkdiamondbg,
    width: 3,
    height: 4,
  },
  {
    src: img10,
    width: 4,
    height: 3,
  },
];

class Pics extends Component {
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
      <div className="container">
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox
          images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    );
  }
}

export default Pics;
