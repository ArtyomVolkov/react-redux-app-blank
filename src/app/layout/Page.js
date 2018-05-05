import React, { Component, Fragment } from 'react';
// Components
import Header from './header/Header';
import Footer from './footer/Footer';
import Main from './main/Main';

class Page extends Component {
  render () {
    return (
      <Fragment>
        <Header/>
        <Main/>
        <Footer/>
      </Fragment>
    );
  }
}

export default Page;
