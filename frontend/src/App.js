import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { SnackBarProvider } from './context/useSnackbarContext';
import { AuthProvider } from './context/useAuthContext';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <SnackBarProvider>
        <AuthProvider>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            {/* <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/profile" component={ProfileSetting} /> */}
            <Route path="*">
              <Redirect to="/login" />
            </Route>
          </Switch>
        </AuthProvider>
      </SnackBarProvider>
    </BrowserRouter>
  );
}

export default App;
