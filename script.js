const chatMessages = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", sendMessage);
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const userMessage = chatInput.value.trim();
  if (!userMessage) return;

  appendMessage("user", userMessage);
  chatInput.value = "";

  setTimeout(() => {
    const aiResponse = generateAIResponse(userMessage);
    appendMessage("ai", aiResponse);
  }, 800);
}

function appendMessage(sender, message) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", sender);
  msgDiv.textContent = message;
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function generateAIResponse(msg) {
  msg = msg.toLowerCase();

  // Greeting
  const greetings = ["hello", "hi", "hey", "good morning", "good afternoon"];
  if (greetings.some(g => msg.includes(g))) {
    const responses = [
      "Hello! I'm your AI assistant. How can I help you build your website today?",
      "Hi there! Ready to create an amazing website?",
      "Hey! I can guide you through templates and customization options."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  // Help 
  if (msg.includes("help") || msg.includes("assist")) {
    const responses = [
      "I can help you choose templates, customize your site, or give tips to improve your website!",
      "Need guidance? Ask me about templates, colors, layouts, or features!",
      "I'm here to assist! Tell me what you want to do and I'll guide you."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  // Templates
  if (msg.includes("template") || msg.includes("templates")) {
    return "We have the following templates: Business, Portfolio, and Landing Page. Which one would you like to try?";
  }

  if (msg.includes("price") || msg.includes("cost") || msg.includes("plan")) {
    return "Our platform is free to try! Premium plans unlock advanced templates and customization options.";
  }

  // Features
  if (msg.includes("feature") || msg.includes("function")) {
    return "You can choose templates, customize colors, layouts, add AI-assisted sections, and preview your website instantly!";
  }

  // Contact
  if (msg.includes("contact") || msg.includes("support")) {
    return "You can reach us via email at support@aiwebbuilder.com or ask me here for quick guidance.";
  }

  if (msg.includes("home") || msg.includes("about") || msg.includes("contact")) {
    return "You can use the navigation menu at the top to visit Home, Templates, About, or Contact sections.";
  }

  const fallbackResponses = [
    "I'm here to help! Could you please rephrase your question?",
    "Hmm, I didn't get that. Try asking me about templates, customization, or features.",
    "I'm not sure I understand. Ask me about building your website or template options!"
  ];
  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
}