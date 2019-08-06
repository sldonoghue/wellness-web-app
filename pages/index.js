import React from "react";
// try import * from components
import Head from 'next/head';
import Homepage from './Components/Homepage';

import '/Users/sarahdonoghue/Documents/Projects/wellness-events-app/assets/scss/style.scss';

const App = () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <div>
      <Homepage />
    </div>
  </div>
)

export default App;