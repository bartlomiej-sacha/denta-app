import React, { Fragment } from 'react';


import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Login from 'pages/Login'

import { useTranslation } from 'react-i18next'

import GlobalStyles from './index.css.js';

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { useQuery } from 'react-query';

import API from 'data/fetch'
//dzieki jsconfig.json mozna tak sobie importowac
/* import { Navigation, Wrapper, LoadingIndicator, Button } from 'components' */


import { LoadingIndicator } from 'components'
/* import Budget from 'pages/Budget'
 */
import { ReactQueryConfigProvider } from 'react-query'



toast.configure();
//odbieramy w propsach budget ze store'a oraz fetchbudget tzn akcje 
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

      <Login />





      {/*  <Router>
        <Navigation items={[
          { content: 'Homepage', to: '/' },
          { content: 'Budget', to: '/budget' }
        ]}
          RightElement={(
            <div>
              <Button variant="regular" onClick={() => i18n.changeLanguage('pl')}>pl</Button>
              <Button variant="regular" onClick={() => i18n.changeLanguage('en')}>en</Button>


            </div>
          )}
        ></Navigation>

        <Wrapper>
          <Switch>
            <Route exact path="/">HomePage</Route>
            <Route path="/budget">

              <Budget />
            </Route>
          </Switch>
        </Wrapper>

      </Router> */}
    </Fragment>

  );
}

//pierwszy mowi, ze przekazujemy do naszego komponentu dane z reduxowego statu w tym przypadku budget drugi argument to obiekt z naszymi akcjami (funkcjami)


const queryConfig = {

  shared: {
    suspense: true

  }

}


const theme = createMuiTheme({
  palette: {

    primary: {
      // Purple and green play nicely together.
      main: '#67C9C3',
      contrastText: '#fff',
    },
    secondary: {
      // This is green.A700 as hex.
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

