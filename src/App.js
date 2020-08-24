import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { toast } from 'react-toastify'
import { setLoginStatus } from 'data/actions/actions'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Panel from './pages/Panel/Panel'
import LoggedOut from './pages/LoggedOut/LoggedOut'
import Register from './pages/Register/Register'
import GlobalStyles from './index.css.js';
import { LoadingIndicator, PrivateRoute, } from 'components'
import { ReactQueryConfigProvider } from 'react-query'

toast.configure();

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/">  <Login buttons={[
            { content: 'Log in', to: '/panel' },
            { content: 'Register', to: '/register' }
          ]} /></Route>

          <Route exact path="/loggedOutHome" component={LoggedOut} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute path="/panel" component={Panel} />
        </Switch>
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
  overrides: {
    MuiToggleButton: {
      root: {
        color: '#67C9C3',
        border: '1px solid rgba(103, 201, 195, 0.5)',
        borderRadius: '5px',
        padding: '10px 50px',

        "&$selected": {       // this is to refer to the prop provided by M-UI
          backgroundColor: "#67C9C3", // updated backgroundColor
          color: "white",

          "&:hover": {
            backgroundColor: "#67C9C3", // updated backgroundColor
            color: "white",
          },
        },
      },
    },
  },
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

