import React, { Component, Fragment } from 'react';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails';

class TermsPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
            
                <TopNavigation title="Projects Details" />
                <PageTop pagetitle="Projects Details"/>
                <ProjectDetails/>
                <Footer/>
                
            </Fragment>
        );
    }
}

export default TermsPage;