import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';


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

class Provider extends React.Component{

}


ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root') as HTMLElement
);


