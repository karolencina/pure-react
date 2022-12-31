import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Tweet() {
    return <div className="tweet">
        <Avatar/>
        <Author name="Karo Lencina" handle="karolencina"/>
        <Message/>
        <div className="tweet-info">
            <Time/> • <Device/>
        </div>
        <div className="buttons">
            <ReplyBtn/>
            <RetweetBtn/>
            <LikeBtn/>
            <MoreOptionsBtn/>
        </div>
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

function Author(props) {
    return (
        <span className="author">
            <span className="name">{props.name}</span>
            <span className="handle">@{props.handle}</span>
        </span>
    )
}

function Message() {
    return <div className="message">This is the content of a Tweet message.</div>
}

const Time = () => <span className="time">3h ago</span>
const Device = () => <span className="device">Twitter for iPhone</span>
const ReplyBtn = () => <i className="fa fa-reply reply-button" />
const RetweetBtn = () => <i className="fa fa-retweet retweet-button"/>
const LikeBtn = () => <i className="fa fa-heart like-button" />
const MoreOptionsBtn = () => <i className="fa fa-ellipsis-h more-options-button" />

ReactDOM.render(<Tweet/>, document.querySelector("#root"))