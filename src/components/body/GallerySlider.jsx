import React, {Component} from 'react';

class GallerySlider extends Component {
    constructor() {
        super();

        this.state = {
            images: ["public/image3.png",
                "public/image4.png",
                "public/image6.png",
                "public/image1.png",
                "public/image4.png",
                "public/image7.png",
                "public/image8.png",
                "public/image9.png",
                "public/image4.png",
                "public/image6.png",
                "public/image1.png",
                "public/image4.png",
                "public/image7.png",
                "public/image8.png",
                "public/image9.png"
            ],

            currentImageIndex: 7,
            canGoNext: true,
            canGoPrev: true
        };

        this.onDecrease = this.onDecrease.bind(this);
        this.onIncrease = this.onIncrease.bind(this);

    }

    onIncrease() {
        if (this.state.images.length - 3 === this.state.currentImageIndex) {
        } else {
            this.setState(prevState => ({
                currentImageIndex: prevState.currentImageIndex + 1
            }));
            this.state.canGoPrev=true;
        }

    }

    onDecrease() {
        if (this.state.currentImageIndex === 0) {
        } else {
            this.setState(prevState => ({
                currentImageIndex: prevState.currentImageIndex - 1
            }));
            this.state.canGoNext=true;
        }

    }



    render() {
        return (

            <div id="GallerySlider">
                <div className="my-slider">
                    <div className="container">
                        <div className="buttonLeft">
                            <button className="left" onClick={() => this.onDecrease()} disabled={!this.state.canGoPrev}>
                                «
                            </button>
                        </div>
                        <div className="pictures">
                            <img src={this.state.images[this.state.currentImageIndex]} title=""/>
                            <img src={this.state.images[this.state.currentImageIndex + 1]} title=""/>
                            <img src={this.state.images[this.state.currentImageIndex + 2]} title=""/>

                        </div>

                        <div className="buttonRight">
                            <button className="right" onClick={() => this.onIncrease()} disabled={!this.state.canGoNext}>
                                »
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}

export default GallerySlider;
