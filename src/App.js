import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Counter from "./Components/Counter";
import CounterReducer from "./Components/Counter/counterReducer";
import CounterRedux from "./Components/Counter/counterRedux";
import store from "./Redux/store";
import Mask from "./Components/Mask";

const styles = {
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box'
  }
}

const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [size, setSize] = React.useState('s');

  return (
    <div style={styles.container}>
      <Router>
        <Provider store={store}>
          <Switch>
            <Route path='/' exact>
              <Counter />
            </Route>
            <Route path='/reducer' exact>
              <CounterReducer />
            </Route>
            <Route path='/redux' exact>
              <CounterRedux />
            </Route>
          </Switch>
          <button
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? 'Cerrar' : 'Abrir'}
          </button>
          <button
            onClick={() => setSize(size === 's' ? 'l' : 's')}
          >
            {size === 's' ? 'Grande' : 'Chico'}
          </button>
        </Provider>
        <Mask
          isOpen={isOpen}
          size={size}
          children={
            <h1>Prueba</h1>
          }
        />
      </Router>
    </div>
  )
}

export default App;
