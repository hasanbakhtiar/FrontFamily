import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
import '../node_modules/bootstrap/scss/bootstrap.scss';

const root = document.getElementById('root');

var template =(
    <div>
        <ul>
        <div className="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
            <li>
                <a href="#">Test Link</a>
            </li>
            <li>
                <a href="#">Test Link</a>
            </li>
            <li>
                <a href="#">Test Link</a>
            </li>
            <li>
                <a href="#">Test Link</a>
            </li>
            <li>
                <a href="#">Test Link</a>
            </li>
        </ul>
      
    </div>
);


ReactDOM.render(template,root);