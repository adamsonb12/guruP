import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import Login from './landing/Login';
const Header = () => <h2>header</h2>;
const Schedule = () => <h2>Schedule</h2>;

const App = () => {
  return (
    <div style={{width: '100%', height: '100%'}}>
      <BrowserRouter>
        <div>
          <Route path="/" component={Login} />
          <Route path="/schedule" component={Schedule} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
