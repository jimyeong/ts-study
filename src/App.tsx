import * as React from 'react';
import './App.css';
import { Unsubscribe} from 'redux';
import {addAge} from './index';
import * as PropTypes from 'prop-types';






class App extends React.Component<{},{}>{
    public static contextType = {
        store: PropTypes.object
    }

    private _unsubscribe:Unsubscribe;

    componentDidMount() {
        const store = this.context.store;
        this._unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });


    }

    componentWillUnmount() {
        this._unsubscribe();
    }


    public render() {
        const store = this.context.store;
        const state = store.getState();
    return (
      <div className="App">
          {state.age}
          <button onClick={() => {
              store.dispatch(addAge())
          }}>
              한해가 지났다
          </button>
      </div>
    );
  }
}

export default App;
