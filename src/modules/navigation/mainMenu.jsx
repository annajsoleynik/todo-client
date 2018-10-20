import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class MainMenu extends Component {
  render() {
    return (
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink to="/about" activeClassName="active" className="nav-link">
            About
          </NavLink>
        </NavItem>

          <NavItem>
            <NavLink to="/todos" activeClassName="active" className="nav-link">
              Todos
            </NavLink>
          </NavItem>
      </Nav>
    );
  }
}
const mapStateToProps = state => ({
  // userAuthorizedInfo: state.user.userAuthorizedInfo
});

export default withRouter(connect(mapStateToProps)(MainMenu));
