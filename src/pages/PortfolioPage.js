import React, { Component, Fragment } from 'react';
import AllProjects from '../components/AllProjects/AllProjects';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';

class CoursesPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                
                <TopNavigation title="Portfolio"/>
                <PageTop pagetitle="Portfolio"/>
                <AllProjects/>
                <Footer/>

            </Fragment>
        );
    }
}

export default CoursesPage;