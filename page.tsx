import ChatInterface from '@/components/chat/chat-interface';

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen bg-background text-foreground md:p-4">
      <ChatInterface />
    </main>
  );
}
