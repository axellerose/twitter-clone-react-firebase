import React, { useState } from 'react'
import { Avatar, Button } from '@material-ui/core'
import '../styles/TweetBox.css'
import db from '../firebase'

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('')
    const [tweetImage, setTweetImage] = useState('')

    const sendTweet = (e) => {
        console.log('added')
        e.preventDefault()

        db.collection("posts").add({
            displayName: 'alex dev',
            username: 'imalex_dev',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://www.i-cliqq.com/images/users/29.jpg'
        })

        setTweetImage("")
        setTweetMessage("")
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar
                        src="https://www.i-cliqq.com/images/users/29.jpg"
                    />
                    <input
                        type="text"
                        placeholder="What's happening?"
                        value={tweetMessage}
                        onChange={(e) => setTweetMessage(e.target.value)}
                    />
                </div>
                <input
                    className="tweetBox__imageInput"
                    type="text"
                    placeholder="Enter image url .. "
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                />
                <Button
                    onClick={sendTweet}
                    type="submit"
                    className="tweetBox__tweetButton"
                >
                    Tweet
                </Button>
            </form>
        </div>
    )
}

export default TweetBox
