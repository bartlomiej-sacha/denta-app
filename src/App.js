import React, { Fragment } from 'react';
import { connect } from 'react-redux'


import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { toast } from 'react-toastify'
import { setLoginStatus } from 'data/actions/actions'

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from 'react-router-dom'

import { Login, Panel, LoggedOut, Register, } from 'pages'

/* import { useTranslation } from 'react-i18next' */

import GlobalStyles from './index.css.js';




/* import { useQuery } from 'react-query'; */

/* import API from 'data/fetch' */
//dzieki jsconfig.json mozna tak sobie importowac



import { LoadingIndicator, Wrapper, PrivateRoute, } from 'components'

import { ReactQueryConfigProvider } from 'react-query'




toast.configure();

function App({ isLoggedIn,
  setLoginStatus }) {

  /* 
    const response = API.fetch.fetchProfile(localStorage.token);
     */
  /* 
    useEffect(() => {
      async function fetchUser() {
        // You can await here
  
        const response = await API.fetch.fetchProfile(localStorage.token);
        console.log(response.response);
        if (response.response) {
          setLoginStatus(true);
        }
  
        if (response.error) {
          console.log(response.error);
          setLoginStatus(false)
        }
  
  
  
      }
      fetchUser();
  
      console.log("isloggedin in app.js after fetchprofile " + isLoggedIn);
  
    }); */



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

    <Fragment>


      <GlobalStyles />

      {/* {doctors.map(item => (
        <Item
          key={item.id}
          item={item}


        />
      ))} */}







      <Router>
        <Wrapper>
          <React.Suspense fallback={"loading()"}>
            <Switch>

              <Route exact path="/">  <Login buttons={[
                { content: 'Log in', to: '/panel' },
                { content: 'Register', to: '/register' }
              ]} /></Route>


              <Route exact path="/loggedOutHome" component={LoggedOut} />
              <Route exact path="/register" component={Register} />
              <PrivateRoute path="/panel" component={Panel} />



            </Switch>
          </React.Suspense>
        </Wrapper>


      </Router>
    </Fragment >

  );
}



let AppConnected = connect(state => ({
  isLoggedIn: state.state.isLoggedIn
}), { setLoginStatus })(App);

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
          <AppConnected />
        </React.Suspense>
      </ThemeProvider >


    </ReactQueryConfigProvider>
  )
}

export default RootApp;

