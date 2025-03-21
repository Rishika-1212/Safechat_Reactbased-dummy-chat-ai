
import { useState, useEffect } from "react";
import FloatingBot from "@/components/FloatingBot";
import ChatInterface from "@/components/ChatInterface";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  const [isActive, setIsActive] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    // Load saved state from storage
    const savedState = localStorage.getItem("securebotState");
    if (savedState) {
      setIsActive(JSON.parse(savedState));
    }
  }, []);

  const handleBotClick = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="min-h-screen">
      <FloatingBot
        isActive={isActive}
        onClick={handleBotClick}
      />
      {isActive && isChatOpen && <ChatInterface onClose={() => setIsChatOpen(false)} />}
      <Toaster />
    </div>
  );
};

export default Index;
