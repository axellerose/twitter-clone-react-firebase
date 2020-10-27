import React from 'react'
import { Avatar, Button } from '@material-ui/core'
import '../styles/TweetBox.css'

function TweetBox() {
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
                    />
                </div>
                <input
                    className="tweetBox__imageInput" 
                    type="text" 
                    placeholder="Enter image url .. " 
                />
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
