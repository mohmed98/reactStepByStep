import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>
    }
    return <h1>Hello, stranger.</h1>
}
const user = {
    firstName: 'Abbas',
    lastName: 'Dawo'
}
const element = <h1>Hello, {formatName(user)}</h1>;
ReactDOM.render(
    element,
    document.getElementById('root')
);