import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Ranking from './components/Ranking';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Hard-code category id */}
        <ul>
          <li>
            <Link to="/all">All categories</Link>
          </li>
          <li>
            <Link to="/category/2502">PC</Link>
          </li>
          <li>
            <Link to="/category/10002">Books</Link>
          </li>
        </ul>

        {/* General ranking routing */}
        <Route path="/all" component={Ranking} />
        <Route
          path="/category/:id"
          render={({ match }) => <Ranking categoryId={match.params.id} />}
        />
      </div>
    );
  }
}

export default App;
