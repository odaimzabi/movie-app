import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {ThemeProvider} from '@chakra-ui/core'
import MoviesView from './components/MoviesView';
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import Recommended from './components/Recommended'
import Details from './components/Details'
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom'
import {ApolloClient,InMemoryCache,gql,ApolloProvider } from '@apollo/client';
function App() {
  const client=new ApolloClient({
    uri:"http://localhost:8000/graphql",
    cache:new InMemoryCache()
})
  return (

    <ApolloProvider client={client}>
    <ThemeProvider>
      
    <div className="App">
        
        <Router>
          <Switch>
            <Route path="/" exact component={MoviesView}></Route>
            <Route path="/login"  component={LoginPage}></Route>
            <Route path="/signup"  component={SignupPage}></Route>
            <Route path="/recommended"  component={Recommended}></Route>
            <Route path="/details" component={Details}></Route>
          </Switch>
        </Router>
    </div>
    </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
