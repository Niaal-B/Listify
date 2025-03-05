import React, { useState, useEffect } from "react";

const quotes = [
  "Believe in yourself and all that you are! 💪",
  "Small steps every day lead to big changes. 🚀",
  "Don't watch the clock; do what it does. Keep going! ⏳",
  "Dream big and dare to fail. 🌟",
  "You are capable of amazing things. 💡",
  "Your only limit is your mind. 🔥",
];

const MotivationalQuote: React.FC<{ triggerUpdate: number }> = ({ triggerUpdate }) => {
  const [quote, setQuote] = useState<string>("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, [triggerUpdate]); // Runs when triggerUpdate changes (task added/removed)

  return (
    <div className="motivational-quote">
      <p>🌟 {quote} 🌟</p>
    </div>
  );
};

export default MotivationalQuote;
