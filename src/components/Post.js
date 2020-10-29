import { Avatar } from '@material-ui/core'
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUser as VerifiedUserIcon } from '@material-ui/icons'
import React from 'react'
import '../styles/Post.css'

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://yt3.ggpht.com/a-/AOh14GhW5PGekHsCJbmorGwxB9iLUPfkQJSdmAiiYw=s68-c-k-c0x00ffffff-no-rj-mo" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Alex Ger{" "}
                            <span className="post__headerSpecial">  
                                <VerifiedUserIcon className="post__badge"/>
                                @alexdev
                            </span>
                            
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>
                <img 
                    src="https://media.giphy.com/media/tHOFseFA5GnK1mFU4L/source.gif" 
                    alt=""
                />
                <div className="post__footer">
                    <ChatBubbleOutline fontSize="small" />
                    <Repeat fontSize="small" />
                    <FavoriteBorder fontSize="small" />
                    <Publish fontSize="small" />
                </div>
            </div>
        </div>
    )
}

export default Post
