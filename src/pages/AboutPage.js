import React, { Component ,Fragment} from 'react';
import AboutDescription from '../components/AboutDescription/AboutDescription';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';

class AboutPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="About"/>
                <PageTop pagetitle="About me"/>
                <AboutDescription/>
                <Footer/>

            </Fragment>
        );
    }
}

export default AboutPage;