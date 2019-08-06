import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import './Nav.css';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
 .navbar{
   background-color: #222;
 }

 a, .navbar-brand, .navbar-nav .nav-link{
  color: #bbb;
  text-decoration: none;
  &:hover{
      color: white;
  }
}

`;
class NavigationBar extends React.Component{
    render(){
        return(
        <Styles>
          <Navbar expand="lg">
            <Navbar.Brand href="/">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" defaultActiveKey="/home" as="ul">
                  <Nav.Item>
                    <Nav.Link><Link to = "/">Active</Link></Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link><Link to ="/Link">Link</Link></Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link><Link to="/Link">Link</Link></Nav.Link>
                  </Nav.Item>
                </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Styles>

        );
    }
}

export default NavigationBar;