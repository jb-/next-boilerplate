import {Component} from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Meta from '../components/meta';

export default class Index extends Component  {
  componentDidMount() {
    if (typeof window !== undefined) {
      //const AOS = require('aos');
      //example of loading frontend-module
    }
  }

  render() {
    return (
      <div>
        <Meta />
        <Header/>
        <Footer/>
      </div>
    );
  }
};