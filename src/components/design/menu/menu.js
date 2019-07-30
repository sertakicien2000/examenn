import React, { Component } from 'react';
import './menu.css'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";

export default class Menu extends Component {
    state = {
        modal1: false,
        modal2: false,
        modal3: false,
        modal4: false,
        modal5: false,
        collapseID: "",
        redirect: false
    }
    toggleCollapse = collapseID => () => this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

    toggle = nr => () => {
        let modalNumber = "modal" + nr; this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }
    render() {
        let imgUrl = './images.jpeg'
        return (
            <div>
                <MDBNavbar color="#d05c62" dark expand="md" id="navbar">
                    <MDBNavbarBrand>
                        <div id="contentlogo"><img src="logo.png" alt="logo" id="logo" /></div>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
                        <MDBNavbarNav left>

                            <MDBNavItem >
                                <MDBNavLink to="/" className="nav-header">Accueil</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/Atelier" className="nav-header">Ateliers</MDBNavLink>
                            </MDBNavItem>

                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBNavLink to="/login" className="nav-header" rounded onClick={this.toggle(1)}>Connexion</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
                <div className="card card-image" id="header" style={{
                    backgroundImage: 'url(' + imgUrl + ')',
                    backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat',
                }}>
                    <div className="text-white text-center  py-5 px-4">
                        <div className="py-5">
                            <h2 id="h2accueil"><strong>Cuisinier</strong> </h2>
                            <h3 id="tso"> <p className="mb-4 pb-2 px-md-5 mx-md-5">Choisissez bien le choose de bien nouvelle atelier de cuisine .<span id="spanheader">Un  app fabricien cuisine est un outil utilisé dans la cuisine pour la préparation de plats</span>
                                <br /><br />C’est la raison pour laquelle nous souhaitons booster cette activité en grâce à une
                  application web.
                                </p>
                                <p>Pour cibler les enfants de +12ans.</p><span>Merci a vous qui visitent le site de <br />
cuisiner afin de manger correctement.</span>
</h3>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}