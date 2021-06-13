import React, { Component, Fragment } from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'
import whiteLogo from '../../asset/image/navlogo.svg';
import blueLogo from '../../asset/image/navlogoScroll.svg';
import {NavLink} from 'react-router-dom';


class TopNavigation extends Component {

    constructor(props){
        super();

        this.state={
            navBarTitle:"navTitle",
            navBarLogo:[whiteLogo],
            navVariant:"dark",
            navBarBackground:"navBackground",
            navBarItems:"navItems",
            pageTitle:props.title

        }
    }

    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navVariant:'light',navBarTitle:"navTitleScroll", navBarLogo:[blueLogo], navBarBackground:"navBackgroundScroll", navBarItems:"navItemsScroll"})
        }
        else if(window.scrollY<100){
            this.setState({navVariant:'dark',navBarTitle:"navTitle", navBarLogo:[whiteLogo], navBarBackground:"navBackground", navBarItems:"navItems"})
        }
    }

    componentDidMount(){
        window.addEventListener('scroll',this.onScroll)
    }

    render() {
        return (
            <Fragment>
            <title>{this.state.pageTitle}</title>
                <Navbar fixed="top" className={this.state.navBarBackground} collapseOnSelect expand="lg" variant={this.state.navVariant}>
  <Navbar.Brand><NavLink className={this.state.navBarTitle} to="/"><img src={this.state.navBarLogo}/> Mahfuzur Rahman</NavLink></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
      <Nav.Link> <NavLink exact activeStyle={{ color:'#00a8ee' }} className={this.state.navBarItems} to="/">HOME</NavLink></Nav.Link>
      <Nav.Link> <NavLink exact activeStyle={{ color:'#00a8ee' }} className={this.state.navBarItems} to="/service">SERVICES</NavLink></Nav.Link>
      <Nav.Link> <NavLink exact activeStyle={{ color:'#00a8ee' }} className={this.state.navBarItems} to="/course">COURCES</NavLink></Nav.Link>
      <Nav.Link> <NavLink exact activeStyle={{ color:'#00a8ee' }} className={this.state.navBarItems} to="/portfolio">PORTFOLIO</NavLink></Nav.Link>
      <Nav.Link> <NavLink exact activeStyle={{ color:'#00a8ee' }} className={this.state.navBarItems} to="/contact">CONTACT</NavLink></Nav.Link>
      <Nav.Link> <NavLink exact activeStyle={{ color:'#00a8ee' }} className={this.state.navBarItems} to="/about">ABOUT</NavLink></Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;