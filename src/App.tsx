// App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routing from './Components/Routing/Routing';
import { store } from './store';
import Dashboard from './Pages/Dashboard/Dashboard';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
      <Dashboard /> {/*Visualizzo sempre la navbar */}
        <Routing />
      </Router>
    </Provider>
  );
};

export default App;
