import React, { useState, useRef, useEffect } from 'react'
import './ChatBubble.css'

interface Message {
  id: string
  text: string
  sender: 'user' | 'assistant'
  timestamp: Date
}

const ChatBubble: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Welcome to Goulding & Co Strategic Advisory! 👋 I\'m here to help you discover how we can make your Cambodia business venture successful. \n\nWould you like to know about:\n• Our market entry services\n• Why Cambodia is ideal for investment\n• Our 90-day results guarantee\n• How to schedule a free consultation\n\nOr feel free to ask any specific question!',
      sender: 'assistant',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const landingPageContext = `
    You are a professional assistant for Goulding & Co Strategic Advisory, a premier business consulting firm specializing in Cambodia market entry and operations.
    
    IMPORTANT INSTRUCTIONS:
    - Be professional, accurate, and helpful
    - Only provide information explicitly mentioned in this context
    - If unsure about something, suggest contacting us directly
    - Never make up information or statistics
    - Always be honest about what you know and don't know
    
    COMPANY OVERVIEW:
    Goulding & Co Strategic Advisory is Cambodia's leading consulting firm for international businesses. We have:
    - 10 years of continuous presence in Cambodia
    - 200+ successfully completed projects
    - 95% client success rate
    - 100% client retention rate
    - Operations across 15+ industry sectors
    
    OUR CORE SERVICES:
    
    1. Strategic Market Entry
       - Navigate Cambodia's regulatory landscape
       - Establish legal entities and obtain licenses
       - Identify optimal market entry strategies
       - Connect with key stakeholders and partners
    
    2. Operational Excellence
       - Optimize business processes for Cambodia context
       - Implement efficient supply chain solutions
       - Develop local workforce capabilities
       - Ensure regulatory compliance
    
    3. Partnership Development
       - Connect with verified local partners
       - Facilitate joint ventures and alliances
       - Navigate cultural business practices
       - Build government relationships
    
    4. Innovation Strategy
       - Digital transformation for Cambodia market
       - Technology implementation guidance
       - Fintech and e-commerce solutions
       - Mobile-first strategies (75% mobile penetration)
    
    INDUSTRY EXPERTISE:
    - Manufacturing & Export: Helped establish 12+ operations, $50M+ export value
    - Agriculture & Food Processing: 300% productivity improvements achieved
    - Technology & Fintech: 8 fintech licenses obtained for clients
    - Retail & Consumer Goods: 25+ store locations opened
    - Real Estate & Construction
    - Tourism & Hospitality
    - Healthcare & Pharmaceuticals
    - Education & Training
    
    WHY CAMBODIA:
    - 7.1% GDP growth rate (fastest in ASEAN)
    - Population: 16+ million (young, tech-savvy)
    - GDP: $28 billion (rapidly expanding)
    - Strategic location in ASEAN
    - Favorable investment policies
    - Growing middle class
    - English-speaking workforce
    
    OUR GUARANTEE:
    We guarantee measurable results within 90 days or your investment back. This reflects our 100% success rate with every client we've served in Cambodia.
    
    CONTACT INFORMATION:
    - Email: contact@gouldingco.com
    - Phone: +855 23 123 456
    - WhatsApp: +855 12 345 678
    - Telegram Channel: @gouldingcocambodia
    - LinkedIn: linkedin.com/company/goulding-co-strategic-advisory
    - Office: Phnom Penh, Cambodia (specific address available upon request)
    - Website: www.gouldingco.com
    
    HOW TO GET STARTED:
    1. Schedule a free consultation call
    2. We'll assess your needs and opportunities
    3. Receive a customized Cambodia entry strategy
    4. Begin implementation with our expert guidance
    
    When someone asks about contacting us, always provide multiple options and emphasize our free initial consultation. Encourage them to join our Telegram channel for latest Cambodia business insights.
  `

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      // Check if API key is configured
      if (!import.meta.env.VITE_OPENAI_API_KEY || import.meta.env.VITE_OPENAI_API_KEY === 'your_openai_api_key_here') {
        const contactMessage: Message = {
          id: Date.now().toString(),
          text: 'I\'m currently in demo mode. To speak with our team directly:\n\n📧 Email: contact@gouldingco.com\n📱 WhatsApp: +855 12 345 678\n💬 Telegram: @gouldingcocambodia\n📞 Phone: +855 23 123 456\n\nOr visit our Contact page to schedule a free consultation!',
          sender: 'assistant',
          timestamp: new Date()
        }
        setMessages(prev => [...prev, contactMessage])
        setIsLoading(false)
        return
      }

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: landingPageContext },
            ...messages.map(msg => ({
              role: msg.sender === 'user' ? 'user' : 'assistant',
              content: msg.text
            })),
            { role: 'user', content: inputValue }
          ],
          temperature: 0.3,
          max_tokens: 200
        })
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      const assistantMessage: Message = {
        id: Date.now().toString(),
        text: data.choices[0].message.content,
        sender: 'assistant',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage: Message = {
        id: Date.now().toString(),
        text: 'I apologize, but I\'m having trouble connecting right now. Please try again later or contact us directly.',
        sender: 'assistant',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Chat Bubble Button */}
      <button
        className={`chat-bubble-button ${isOpen ? 'chat-bubble-button--active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat"
      >
        {!isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      {/* Chat Window */}
      <div className={`chat-window ${isOpen ? 'chat-window--open' : ''}`}>
        <div className="chat-header">
          <div className="chat-header__info">
            <h3>Goulding & Co Assistant</h3>
            <p>Ask about our services in Cambodia</p>
          </div>
          <button
            className="chat-header__close"
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`chat-message chat-message--${message.sender}`}
            >
              <div className="chat-message__bubble">
                {message.text}
              </div>
              <div className="chat-message__time">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="chat-message chat-message--assistant">
              <div className="chat-message__bubble chat-message__bubble--loading">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="chat-input__field"
            disabled={isLoading}
          />
          <button
            onClick={sendMessage}
            className="chat-input__send"
            disabled={!inputValue.trim() || isLoading}
            aria-label="Send message"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default ChatBubble