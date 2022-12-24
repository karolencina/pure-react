import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Tweet() {
    return <div className="tweet">Tweet</div>
}

function Avatar() {
    return(
    <img
        src="https://www.gravatar.com/avatar/f82bdf2f2ddf1e2f0998671c24991435"
        className="avatar"
        alt="avatar"
    />
)
}

ReactDOM.render(<Tweet/>, document.querySelector("#root"))