import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { AuthProvider} from '../context/AuthContext'

import React from "react";
import App from "next/app";
import Head from "next/head";
import withData from "../lib/apollo";
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
    <AuthProvider>
  <content className="wrapper" id="main">
    <Header/>
    <Component {...pageProps} />
    <Footer/>

  </content>
  </AuthProvider>
  
  )
  }
}

export default MyApp
