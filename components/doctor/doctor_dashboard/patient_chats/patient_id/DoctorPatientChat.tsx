import { useState } from 'react'
import ChatContainer from './ChatContainer'
import ChatInput from './ChatInput'

interface Message {
  id: string
  content: string
  timestamp: string
  isDoctor: boolean
}

const UserDoctorChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello Doctor! I have cancer.',
      timestamp: '10:00 AM',
      isDoctor: true,
    },
  ])

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      isDoctor: false,
    }
    setMessages((prev) => [...prev, newMessage])
  }

  return (
    <div className="flex flex-1 flex-col bg-white shadow-xl">
      <div className="bg-blue-600 p-4 text-white">
        <h1 className="text-xl font-semibold">John Doe</h1>
        <p className="text-sm opacity-80">Online</p>
      </div>
      <ChatContainer messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  )
}

export default UserDoctorChat
