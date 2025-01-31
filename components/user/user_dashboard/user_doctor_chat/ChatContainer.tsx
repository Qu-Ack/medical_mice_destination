import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

interface ChatMessageProps {
  content: string
  timestamp: string
  isDoctor: boolean
  delivered?: boolean
}

const ChatMessage = ({
  content,
  timestamp,
  isDoctor,
  delivered = true,
}: ChatMessageProps) => {
  return (
    <div
      className={cn('flex w-full', isDoctor ? 'justify-start' : 'justify-end')}
    >
      <div
        className={cn(
          'mb-2 max-w-[70%] rounded-lg px-4 py-2',

          isDoctor ? 'bg-white' : 'bg-blue-600 text-white'
        )}
      >
        <p className="break-words">{content}</p>

        <div className="mt-1 flex items-center justify-end gap-1">
          <span
            className={cn(
              'text-xs',
              isDoctor ? 'text-gray-800' : 'text-white/70'
            )}
          >
            {timestamp}
          </span>

          {!isDoctor && (
            <Check
              className={cn(
                'h-4 w-4',
                delivered ? 'text-white/70' : 'text-white/40'
              )}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export interface Message {
  id: string

  content: string

  timestamp: string

  isDoctor: boolean
}

interface ChatContainerProps {
  messages: Message[]
}

const ChatContainer = ({ messages }: ChatContainerProps) => {
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="flex-1 overflow-y-auto bg-blue-50 p-4">
      {messages.map((message) => (
        <ChatMessage
          key={message.id}
          content={message.content}
          timestamp={message.timestamp}
          isDoctor={message.isDoctor}
        />
      ))}

      <div ref={bottomRef} />
    </div>
  )
}

export default ChatContainer
