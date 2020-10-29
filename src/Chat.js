import React from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message';
function Chat() {
    return (
        <div className='chat'>
            <ChatHeader/>

            <div className="chat__messages">
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
            </div>

            <div className="chat__input">
                <AddCircleIcon/>
                <form >
                    <input placeholder='Message #Youtube'/>
                    <button type="submit" className='chat__inputButton'>send</button>
                </form>

                <div className="chat__inputIcons">
                    <CardGiftcardIcon/>
                    <GifIcon/>
                    <EmojiEmotionsIcon/>
                </div>
            </div>
        </div>
    )
}

export default Chat
