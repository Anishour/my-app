import React, { Component, Fragment } from 'react';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Services from '../components/Services/Services';
import ContactSection from '../components/ContactSection/ContactSection';
import Footer from '../components/Footer/Footer';


class ServicesPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
            <TopNavigation title="Service"/>
            <PageTop pagetitle="My Services"/>
            <Services/>
            <ContactSection/>
            <Footer/>

                
            </Fragment>
        );
    }
}

export default ServicesPage;