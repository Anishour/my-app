import React, { Component, Fragment } from 'react';
import AllCourses from '../components/AllCourses/AllCourses';
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
                
                <TopNavigation title="Courses"/>
                <PageTop pagetitle="All courses"/>
                <AllCourses/>
                <Footer/>

            </Fragment>
        );
    }
}

export default CoursesPage;