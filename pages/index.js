import React from "react";
// try import * from components
import Footer from './components/Footer';
import Head from 'next/head';
import Homepage from './Components/Homepage';

import '/Users/sarahdonoghue/Documents/Projects/wellness-events-app/assets/scss/style.scss';

const App = () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      {/* <script  type="text/javascript" src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyABNyDuLYeflwYvxCwU9CqTu1z3OH1ZYOQ&libraries=places`}></script> */}

    </Head>
    <Homepage />
    <Footer />
  </div>
)

export default App;