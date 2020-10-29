import React from 'react'
import './ChatHeader.css'
function ChatHeader() {
    return (
        <div className='chatHeader'>
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">#</span>
                    Youtube
                </h3>
            </div>
            <div className="chatHeder__right">
            </div>
        </div>
    )
}

export default ChatHeader
