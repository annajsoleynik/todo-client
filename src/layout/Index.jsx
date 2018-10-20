import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import Header from './Header';
import Footer from './Footer';
import Routes from './Routes';


class App extends Component {

  state = {};

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Header />

        <Container fluid>
          <Row>
            <Col>
              <Routes />
            </Col>
          </Row>
        </Container>

        <Footer />

      </div>
    );
  }
}

const mapStateToProps = state => ({
  // userAuthorizedInfo: state.user.userAuthorizedInfo,
});

const mapDispatchToProps = dispatch => ({
  // userGetAuthUserInfo: userId => dispatch(userGetAuthUserInfo(userId))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
