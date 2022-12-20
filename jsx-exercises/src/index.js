import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function MyThing() {
    return (
        <div className="book">
            <div className="title">1Q84</div>
            <div className="author">Haruki Murakami</div>
            <ul className="stats">
                <li className="rating">4</li>
                <li className="isbn">123456789</li>
            </ul>
        </div>
    )
}

function Greeting() {
    let username = null;
    return (
        <div>
            {username ? "Hi " + username : "Not logged in"}
        </div>
    )
}

function Data() {
    return (
        <>
        <td>Name</td>
        <td>Location</td>
        <td>Age</td>
        </>
    )
}

function Table() {
    return (
        <table>
            <tbody>
            <tr>
                <Data/>
            </tr>
            </tbody>
        </table>
    )
}


ReactDOM.render(<Table/>, document.querySelector('#root'))
