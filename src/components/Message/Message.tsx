import React from "react"
import './message.scss'

interface MessageProps {
    text: string
}

const Message: React.FC<MessageProps> = ({ text }) => {
    return <div className='message'>{text}</div>
}

export default Message
