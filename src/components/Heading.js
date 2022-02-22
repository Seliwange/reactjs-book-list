import React from 'react';
import {Link} from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand
} from 'reactstrap';

export const Heading = ({pageTitle, link, linkName}) => {
  return (
    <Navbar className="mb-3 container" color="dark" dark>
        <NavbarBrand href="/">{pageTitle}</NavbarBrand>
        <Nav navbar>
            <NavItem>
                <Link className="btn btn-outline-light" to={link}>{linkName}</Link>
            </NavItem>
        </Nav>
    </Navbar>
  );
}
