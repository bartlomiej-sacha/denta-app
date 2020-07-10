import React, { Fragment } from 'react';



import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import { Login, Panel } from 'pages'

import { useTranslation } from 'react-i18next'

import GlobalStyles from './index.css.js';


import 'react-toastify/dist/ReactToastify.css';

import { useQuery } from 'react-query';

import API from 'data/fetch'
//dzieki jsconfig.json mozna tak sobie importowac



import { LoadingIndicator, Wrapper } from 'components'

import { ReactQueryConfigProvider } from 'react-query'



toast.configure();

function App() {


  /*  const { i18n } = useTranslation();
 
  */

  /* const { data: doctors } = useQuery(['doctors'], API.doctors.fetchDoctors)


  console.log(doctors);

  const Item = ({ item }) => (
    //kazdy item to obiekt ktory posiada wlasciwosc trigger ktory posiada element jsx  czyli odwolujemy sie do property itema a to property to jsx
    <div>
      <h1>{item.first_name}</h1>
      <h1>{item.last_name}</h1>
    </div>

  ) */
  const false2 = false;

  return (
    //cos jak div ktory wszystko wrappuje ale nie renderujemy dodatkowego diva
    <Fragment>


      <GlobalStyles />

      {/* {doctors.map(item => (
        <Item
          key={item.id}
          item={item}


        />
      ))} */}







      <Router>
        <Login buttons={[
          { content: 'Log in', to: '/panel' },
          { content: 'Register', to: '/register' }
        ]} />

        <Wrapper>
          <Switch>
            <Route exact path="/"></Route>
            {false2 ? < Route path="/panel">
              <Panel />
            </Route> : null}
          </Switch>
        </Wrapper>

      </Router>
    </Fragment >

  );
}



const queryConfig = {

  shared: {
    suspense: true

  }

}


const theme = createMuiTheme({
  palette: {

    primary: {

      main: '#67C9C3',
      contrastText: '#fff',
    },
    secondary: {

      main: '#11cb5f',
    },
  },
});








function RootApp() {



  return (
    <ReactQueryConfigProvider config={queryConfig}>
      < ThemeProvider theme={theme} >
        <React.Suspense fallback={<LoadingIndicator />}>
          <App />
        </React.Suspense>
      </ThemeProvider >


    </ReactQueryConfigProvider>
  )
}

export default RootApp;

