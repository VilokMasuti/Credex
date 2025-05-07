import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { MessageSquare, X, Send } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../components/ui/collapsible';

// Sample responses for common questions
const PREDEFINED_RESPONSES: Record<string, string> = {
  'hello': 'Hello! How can I help you with SoftSell today?',
  'hi': 'Hi there! How can I assist you with your software licenses?',
  'how do i sell my license': 'Selling your license is simple! Just upload your license details, get an instant valuation, and accept the offer to receive payment within 48 hours.',
  'how does it work': 'Our process is easy: 1) Upload your license details 2) Receive an instant AI-powered valuation 3) Accept the offer and get paid within 48 hours!',
  'is this secure': 'Absolutely! We use end-to-end encryption and comply with all software licensing agreements and data protection regulations.',
  'payment methods': 'We offer various payment methods including direct bank transfer, PayPal, and cryptocurrency options.',
  'how much can i get': 'You can typically recover 40-70% of your original license cost, depending on the software type, remaining duration, and market demand.',
  'what software do you accept': 'We accept most major software licenses including Microsoft, Adobe, Autodesk, Oracle, SAP, and many others. Upload yours for a specific valuation!',
};

// Message interface
interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatWidget = () => {
  // State management
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi there! I'm SoftSell's virtual assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Handle sending a message
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Generate response with slight delay for realism
    setTimeout(() => {
      const botResponse = generateResponse(inputValue.toLowerCase());
      const botMessage: Message = {
        text: botResponse,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  // Handle key press (Enter to send)
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Generate response based on input
  const generateResponse = (input: string): string => {
    // Check for matches in predefined responses
    for (const [key, value] of Object.entries(PREDEFINED_RESPONSES)) {
      if (input.includes(key)) {
        return value;
      }
    }

    // Default response if no match found
    return "I'm not sure I understand. Could you rephrase your question about selling software licenses?";
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        {/* Chat button */}
        <div className="flex justify-end">
          <CollapsibleTrigger asChild>
            <Button
              size="lg"
              className={`rounded-full shadow-lg flex items-center transition-all duration-300 ${
                isOpen ? 'bg-gray-700 hover:bg-gray-800' : 'bg-softsell-600 hover:bg-softsell-700'
              }`}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <>
                  <MessageSquare className="h-5 w-5 mr-2" />
                  <span>Chat with us</span>
                </>
              )}
            </Button>
          </CollapsibleTrigger>
        </div>

        {/* Chat panel */}
        <CollapsibleContent>
          <div className="mt-3 bg-white rounded-lg shadow-xl border border-gray-200 w-full sm:w-96 overflow-hidden animate-fade-in">
            {/* Chat header */}
            <div className="bg-softsell-600 p-4 text-white">
              <div className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                <h3 className="font-medium">SoftSell Support</h3>
              </div>
            </div>

            {/* Messages container */}
            <div className="p-4 h-80 overflow-y-auto bg-gray-50">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-3 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`px-4 py-2 rounded-lg max-w-[80%] ${
                      message.isUser
                        ? 'bg-softsell-600 text-white'
                        : 'bg-white border border-gray-200 text-gray-800'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div className="p-3 border-t border-gray-200 flex items-center">
              <Input
                type="text"
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-grow"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                size="sm"
                className="ml-2 bg-softsell-600 hover:bg-softsell-700"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default ChatWidget;
