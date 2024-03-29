import React from "react";

import Footer from './components/Footer';
import Head from 'next/head';
import Homepage from './Components/Homepage';

import '/Users/sarahdonoghue/Documents/Projects/wellness-events-app/assets/scss/style.scss';

const App = () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <Homepage />
    <Footer />
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCaDmjzK3X8zwcX6rBrkXhfbI3uoLGh7q4&amp;libraries=places"></script>
  </div>
)

export default App;