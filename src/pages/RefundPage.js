import React, { Component ,Fragment} from 'react';
import RefundSection from '../components/RefundDescription/RefundSection';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';

class RefundPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (

        <Fragment>

            <TopNavigation title="Refund"/>
            <PageTop pagetitle="Refund Policy"/>
            <RefundSection/>
            <Footer/>
        
        </Fragment>

        );
    }
}

export default RefundPage;