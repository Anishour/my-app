import React, { Component, Fragment } from 'react';
import {Route,Switch} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ServicesPage from '../pages/ServicesPage';
import CoursesPage from '../pages/CoursesPage';
import PortfolioPage from '../pages/PortfolioPage';
import ContactPage from '../pages/ContactPage';
import AboutPage from '../pages/AboutPage';
import RefundPage from '../pages/RefundPage';
import TermsPage from '../pages/TermsPage';
import PrivacyPage from '../pages/PrivacyPage';
import ProjectsPage from '../pages/ProjectsPage';
import CourseDetailsPage from '../pages/CourseDetailsPage';



class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/service" component={ServicesPage}/>
                    <Route exact path="/course" component={CoursesPage}/>
                    <Route exact path="/portfolio" component={PortfolioPage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route exact path="/refund" component={RefundPage}/>
                    <Route exact path="/terms" component={TermsPage}/>
                    <Route exact path="/Privacy" component={PrivacyPage}/>
                    <Route exact path="/project" component={ProjectsPage}/>
                    <Route exact path="/CourseDetails" component={CourseDetailsPage}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;