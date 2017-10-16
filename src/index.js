import React from 'react';
import ReactDOM from 'react-dom';

var user = {};
user.name = "Anthony";
user.luckyNumber = luckyNumber();


ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);

function luckyNumber(){
    return Math.floor(Math.random()*1000) + 1
}

function greeting(userObject){
    const elements = (
        <div className="container">
            <h1>Welcome {userObject.name}</h1>
            <h2 className = "text-muted">Your lucky number is: {userObject.luckyNumber}</h2>
        </div>
    );
    return elements
}

