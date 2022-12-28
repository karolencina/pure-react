import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Tweet() {
    return <div className="tweet">
        <Avatar></Avatar>
        <Author></Author>
        <Message></Message>
    </div>
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

function Author() {
    return (
        <span className="author">
            <span className="name">Karo Lencina</span>
            <span className="handle">@karolencina</span>
        </span>
    )
}

function Message() {
    return <div className="message">This is the content of a Tweet message.</div>
}

ReactDOM.render(<Tweet/>, document.querySelector("#root"))