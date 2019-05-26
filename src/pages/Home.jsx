import React, {Component} from 'react';

import './Home.scss';
import AdditionalMenu from "../components/header/additionalMenu/AdditionalMenu";
import MainMenu from "../components/header/mainMenu/MainMenu";
import MainInform from "../components/body/mainInform/MainInform";
import Form from "../components/body/form/Form"
import GallerySlider from "../components/body/sliderGallery/gallerySlider/GallerySlider";
import GalleryHeader from "../components/body/sliderGallery/galleryHeader/GalleryHeader";
import MainInform_2 from "../components/body/mainInform_2/mainInform_2";
import Footer from "../components/footer/Footer";


class Home extends Component {

    render() {
        return (
            <div className="wrapper">

                <div className="header">
                    <AdditionalMenu/>
                    <MainMenu/>
                </div>
                <div className="content">
                    <div className="form-content">
                        <MainInform/>
                        <Form/>
                    </div>
                    <MainInform_2/>

                    <GalleryHeader/>
                    <GallerySlider/>
                </div>
                <Footer/>

            </div>

        )
    }
}

export default Home;

