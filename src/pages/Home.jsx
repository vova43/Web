import React, {Component} from 'react';

// import './Home.scss';
import '../css/_grid.scss'
import '../css/Form.scss';
import '../css/MainInform.scss';
import '../css/MainInform_2.scss';
import '../css/GalleryHeader.scss';
import '../css/GallerySlider.scss';
// import '../css/MainMenu.scss';
// import '../css/AdditionalMenu.scss';
import '../css/Header.scss';
import '../css/Footer.scss';
import MainMenu from "../components/header/MainMenu";
import AdditionalMenu from "../components/header/AdditionalMenu";
import MainInform from "../components/body/MainInform";
import Form from "../components/body/Form";
import GallerySlider from "../components/body/GallerySlider";
import Footer from "../components/footer/Footer";
import GalleryHeader from "../components/body/GalleryHeader";
import MainInform_2 from "../components/body/mainInform_2";
// import MainInform_2 from "../components/body/mainInform_2";

// import AdditionalMenu from "../components/header/AdditionalMenu.jsx";
// import MainMenu from "../components/header/MainMenu.jsx";
// import MainInform from "../components/body/MainInform.jsx";
// import Form from "../components/body/Form.jsx"
// import GallerySlider from "../components/body/GallerySlider.jsx";
// import GalleryHeader from "../components/body/GalleryHeader.jsx";
// import MainInform_2 from "../components/body/mainInform_2.jsx";
// import Footer from "../components/footer/Footer.jsx";


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

