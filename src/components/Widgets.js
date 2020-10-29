import React from 'react'
import "../styles/Widgets.css"
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from 'react-twitter-embed'
import { Search } from '@material-ui/icons'

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <Search className="widgets__searchIcon"/>
                <input type="text" placeholder="Search Twitter" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's new</h2>
                <TwitterTweetEmbed tweetId={"1321823228873068546"} />
                <TwitterTimelineEmbed 
                    sourceType="profile"
                    screenName="korsakvoskres"
                    options={{height: 400}}
                />
                <TwitterShareButton
                    url={"https://apple.com"}
                    options={{text: "Testing twitter clone", via: "iamalex_dev"}}
                /> 
            </div>
        </div>
    )
}

export default Widgets
