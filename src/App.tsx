import * as React from 'react';
import './App.css';
import {Store, Unsubscribe} from 'redux';
import {addAge} from './index';






class App extends React.Component <{store:Store<{age:number;}>}>{
    private _unsubscribe:Unsubscribe;

    componentDidMount() {
        const store = this.props.store;
        this._unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });


    }

    componentWillUnmount() {
        this._unsubscribe();
    }


    public render() {
        const store = this.props.store;
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
