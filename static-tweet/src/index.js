import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


// Add the { tweet } prop destructured
function Tweet({tweet}) {
    return <div className="tweet">
        <Avatar hash={tweet.gravatar}/>
        <Author name={tweet.author.name} handle={tweet.author.handle}/>
        <Message text={tweet.message}/>
        <div className="tweet-info">
            <Time time={tweet.timestamp}/> • <Device/>
        </div>
        <div className="buttons">
            <ReplyBtn/>
            <RetweetBtn/>
            <LikeBtn/>
            <MoreOptionsBtn/>
        </div>
    </div>
}

function Avatar({hash}) {
    const url = `https://www.gravatar.com/avatar/${hash}`
    return(
    <img
        src={url}
        className="avatar"
        alt="avatar"
    />
)
}

function Author({name, handle}) {
    return (
        <span className="author">
            <span className="name">{name}</span>
            <span className="handle">@{handle}</span>
        </span>
    )
}

function Message({text}) {
    return <div className="message">{text}</div>
}

const Time = ({time}) => <span className="time">{time}</span>
const Device = ({}) => <span className="device">Twitter for iPhone</span>
const ReplyBtn = () => <i className="fa fa-reply reply-button" />
const RetweetBtn = () => <i className="fa fa-retweet retweet-button"/>
const LikeBtn = () => <i className="fa fa-heart like-button" />
const MoreOptionsBtn = () => <i className="fa fa-ellipsis-h more-options-button" />

const testTweet = {
    message: 'Something about cats.',
    gravatar: 'f82bdf2f2ddf1e2f0998671c24991435',
    author: {
        handle: 'catperson',
        name: 'Cat Person',
    },
    likes: 2,
    retweets: 0,
    timestamp: '2022-12-31 18:43:21',
}

ReactDOM.render(<Tweet tweet={testTweet}/>, document.querySelector("#root"))