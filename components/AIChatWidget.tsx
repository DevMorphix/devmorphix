import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, Loader2, Bot, User } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Welcome to DevMorphix Digital. How can I assist you in crafting your next digital masterpiece?', timestamp: new Date() }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: inputText, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(userMsg.text);
    
    const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 p-4 bg-aura-gold text-aura-dark rounded-full shadow-[0_0_30px_rgba(191,161,129,0.2)] hover:shadow-[0_0_40px_rgba(191,161,129,0.4)] transition-all duration-300 group border border-aura-light/10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} className="fill-current" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-28 right-6 md:right-8 w-[90vw] md:w-[400px] h-[600px] max-h-[70vh] bg-aura-surface/95 backdrop-blur-xl border border-aura-gold/20 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-5 bg-gradient-to-r from-aura-dark to-aura-surface border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-aura-gold/10 rounded-lg border border-aura-gold/20">
                  <Sparkles className="text-aura-gold w-4 h-4" />
                </div>
                <div>
                  <span className="text-aura-light font-serif tracking-wide block text-lg">Concierge</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] text-aura-sand/70 uppercase tracking-widest">Online</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-aura-light/50 hover:text-aura-light">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6 no-scrollbar bg-aura-dark">
              {messages.map((msg, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={idx} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    {/* Avatar */}
                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center border ${
                      msg.role === 'user' 
                        ? 'bg-aura-surface border-white/10 text-aura-light' 
                        : 'bg-aura-gold/10 border-aura-gold/20 text-aura-gold'
                    }`}>
                      {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                    </div>

                    {/* Bubble */}
                    <div className={`p-4 text-sm leading-relaxed rounded-2xl ${
                      msg.role === 'user' 
                        ? 'bg-aura-light text-aura-dark rounded-tr-none' 
                        : 'bg-aura-glass text-aura-light/90 border border-white/5 rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                 <div className="flex justify-start gap-3">
                   <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center bg-aura-gold/10 border border-aura-gold/20 text-aura-gold">
                     <Bot size={14} />
                   </div>
                   <div className="bg-aura-glass p-4 rounded-2xl rounded-tl-none border border-white/5 flex items-center gap-2">
                     <Loader2 className="w-4 h-4 text-aura-gold animate-spin" />
                     <span className="text-xs text-aura-sand/50">Processing...</span>
                   </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-aura-dark border-t border-white/5">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about our services..."
                  className="w-full bg-aura-glass border border-white/10 rounded-xl px-4 py-4 pr-12 text-sm text-aura-light focus:outline-none focus:border-aura-gold/40 focus:bg-aura-glass transition-all placeholder:text-white/20"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !inputText.trim()}
                  className="absolute right-2 p-2 bg-aura-gold text-aura-dark rounded-lg hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={16} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatWidget;