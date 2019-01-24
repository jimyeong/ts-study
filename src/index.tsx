import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import {createStore,Store} from 'redux';
import PropTypes from 'prop-types';


import './index.css';

const ADD_AGE = 'ADD_AGE';

export function addAge(){
    return {
        type:ADD_AGE
    }
}

function ageApp(state:{age:number;} = {age:35},action:{type:"ADD_AGE"}){
    if(action.type === ADD_AGE){
        return{
            type: state.age+1
        }
    }
    return state
}

const store = createStore<{age:number;}>(ageApp);

class Provider extends React.Component<{store: Store<{age: number}>}>{
    static childContextTypes={
        store:PropTypes.object
    };
    getChildContext(){
        return{
            state:this.props.store
        }
    }
    render(){
        return this.props.children as JSX.Element;
    }
};


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);


