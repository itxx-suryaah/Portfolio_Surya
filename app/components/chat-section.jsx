'use client';

import { Send, Sparkles } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState, useTransition, useRef, useEffect } from 'react';
import { getAiChatResponse } from '@/app/chat/actions';

type ChatMessage = {
  role: 'user' | 'model' | 'system';
  content;
};

export function ChatSection() {
    const [messages, setMessages] = useState<ChatMessage[]>([
        { role: 'system', content: 'Hello! I am Sparky, your AI assistant. Feel free to ask me anything about this portfolio.' }
    ]);
    const [input, setInput] = useState('');
    const [isPending, startTransition] = useTransition();
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = (e.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isPending) return;

        const userMessage = { role: 'user', content };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        const currentInput = input;
        setInput('');

        startTransition(async () => {
            const historyForApi = newMessages.filter(m => m.role !== 'system') as {role: 'user' | 'model', content}[];
            const aiResponse = await getAiChatResponse(historyForApi, currentInput);
            setMessages(prev => [...prev, { role: 'model', content }]);
        });
    };

    const renderMessage = (msg, index) => {
        const isModelOrSystem = msg.role === 'model' || msg.role === 'system';

        if (isModelOrSystem) {
             return (
                 <div key={index} className="flex items-start gap-3">
                    
                        <AvatarImage src="https://placehold.co/40x40.png" data-ai-hint="robot" alt="AI Avatar" />
                        AI</AvatarFallback>
                    </Avatar>
                    <div className="p-3 rounded-lg bg-card max-w-xs">
                        <p className="text-sm">{msg.content}</p>
                    </div>
                </div>
            );
        }

        return (
            <div key={index} className="flex items-start gap-3 justify-end">
                <div className="p-3 rounded-lg bg-primary text-primary-foreground max-w-xs">
                    <p className="text-sm">{msg.content}</p>
                </div>
                
                    <AvatarImage src="https://placehold.co/40x40.png" data-ai-hint="person" alt="Visitor" />
                    V</AvatarFallback>
                </Avatar>
            </div>
        );
    };

    return (
        <section id="chat" className="py-20 md-32 bg-card/10">
            <div className="container mx-auto px-4 sm-6 lg-8">
                <div className="text-center mb-16">
                    <h2 className="font-headline text-4xl md-5xl font-bold">Live Chat</h2>
                    <p className="text-lg max-w-3xl mx-auto text-foreground/80 mt-4">
                        Have a question? Want to say hi? Send me a message!
                    </p>
                </div>

                <Card className="max-w-3xl mx-auto shadow-lg border-border/50">
                    
                        Chat with Sparky</CardTitle>
                    </CardHeader>
                    
                        <div className="flex flex-col h-[450px]">
                            <ScrollArea className="flex-grow p-4 border rounded-lg bg-muted/50">
                                <div className="space-y-4">
                                    {messages.map(renderMessage)}
                                    {isPending && (
                                        <div className="flex items-start gap-3">
                                            
                                                <AvatarImage src="https://placehold.co/40x40.png" data-ai-hint="robot" alt="AI Avatar" />
                                                AI</AvatarFallback>
                                            </Avatar>
                                            <div className="p-3 rounded-lg bg-card max-w-xs flex items-center gap-2">
                                                <Sparkles className="h-4 w-4 animate-spin" />
                                                <p className="text-sm text-muted-foreground">Thinking...</p>
                                            </div>
                                        </div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>
                            </ScrollArea>
                            <form onSubmit={handleSendMessage} className="flex items-center gap-2 mt-4">
                                <Input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type your message..."
                                    className="bg-card border-border/50 h-12"
                                    disabled={isPending}
                                />
                                <Button type="submit" size="icon" className="h-12 w-12" disabled={isPending}>
                                    <Send className="h-5 w-5" />
                                </Button>
                            </form>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
