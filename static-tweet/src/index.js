import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'
import './index.css'


// Add the { tweet } prop destructured
function Tweet({tweet}) {
    return <div className="tweet">
        <Avatar hash={tweet.gravatar}/>
        <Author name={tweet.author.name} handle={tweet.author.handle}/>
        <Message text={tweet.message}/>
        <div className="tweet-info">
            <Time time={tweet.timestamp}/> • <Device device={tweet.platform}/>
        </div>
        <div className="buttons">
            <ReplyBtn/>
            <RetweetBtn count={tweet.retweets}/>
            <LikeBtn count={tweet.likes}/>
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

const Time = ({time}) => {
    const timeString = moment(time).fromNow()
    return <span className="time">{timeString}</span>
}

const Device = ({device}) => <span className="device">Twitter for {device}</span>

const ReplyBtn = () => <i className="fa fa-reply reply-button" />

const RetweetBtn = ({count}) => {
    return (
            <span className="retweet-btn">
                {getRetweetCount(count)}
                <i className="fa fa-retweet"/>
            </span>
    )
}

const LikeBtn = ({count}) => {
    return (
        <span className="like-btn">
            {count > 0 && <span className="like-count">{count}</span>}
            <i className="fa fa-heart like-button" />
        </span>
    )
}

const MoreOptionsBtn = () => <i className="fa fa-ellipsis-h more-options-button" />

// Logic

function getRetweetCount(count) {
    if (count > 0) {
        return <span className="retweet-count">{count}</span>
    } else {
        return null
    }
}

const testTweet = {
    message: 'Something about cats.',
    gravatar: 'f82bdf2f2ddf1e2f0998671c24991435',
    author: {
        handle: 'catperson',
        name: 'Cat Person',
    },
    likes: 2,
    retweets: 3,
    timestamp: '2022-12-31 18:43:21',
    platform: 'iPhone'
}

ReactDOM.render(<Tweet tweet={testTweet}/>, document.querySelector("#root"))