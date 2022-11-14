import { useState } from "react"

export interface IMessage {
    _id: string | number
    text: string
    createdAt: Date | number
    user: {_id: string | number, name?: string, avatar?: string }
    image?: string
    video?: string
    audio?: string
    system?: boolean
    sent?: boolean
    received?: boolean
    pending?: boolean
    quickReplies?: QuickReplies
  }
  interface Reply {
    title: string
    value: string
    messageId?: any
  }
  
  interface QuickReplies {
    type: 'radio' | 'checkbox'
    values: Reply[]
    keepIt?: boolean
  }

  const generateRandomMessages = (amount = 20) => {
    const messages: IMessage[] = []
    const user = () => {
        const id = Math.floor(Math.random() * 10);
        return ({
            _id: id,
            name: 'Random User ' + id,
            avatar: 'https://placeimg.com/140/140/any',
        })
    }
    for (let i = 0; i < amount; i++) {
        const message:IMessage = {
            _id: i,
            text: 'This is message ' + ( i + 1),
            createdAt: new Date(Date.now()-(i*3600000)),
            user: user(),
        }
        messages.push(message);
    }
    return messages;
  }

export const useRoomMessages = (id?: string) => {
    return useState(generateRandomMessages())    
}