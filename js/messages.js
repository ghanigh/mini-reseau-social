// Exemple de données JSON simulant des conversations
const conversations = [
    {
      id: 1,
      friend: "Alice Dupont",
      messages: [
        { sender: "Alice", content: "Salut !", timestamp: "2024-12-03 10:00" },
        { sender: "Vous", content: "Salut Alice, comment ça va ?", timestamp: "2024-12-03 10:05" }
      ]
    },
    {
      id: 2,
      friend: "Paul Lambert",
      messages: [
        { sender: "Paul", content: "Prêt pour ce soir ?", timestamp: "2024-12-02 18:00" }
      ]
    }
  ];
  
  // Références DOM
  const conversationList = document.getElementById("conversation-list");
  const messageDetails = document.getElementById("message-details");
  const messageHistory = document.getElementById("message-history");
  const sendMessageForm = document.getElementById("send-message-form");
  const newMessageInput = document.getElementById("new-message");
  
  // Fonction pour afficher les conversations
  function renderConversations() {
    conversationList.innerHTML = "";
    conversations.forEach(conv => {
      const listItem = document.createElement("li");
      listItem.textContent = `${conv.friend} - Dernier message : ${conv.messages[conv.messages.length - 1].content}`;
      listItem.addEventListener("click", () => showConversation(conv.id));
      conversationList.appendChild(listItem);
    });
  }
  
  // Fonction pour afficher les messages d'une conversation
  function showConversation(conversationId) {
    const conversation = conversations.find(conv => conv.id === conversationId);
    messageHistory.innerHTML = conversation.messages
      .map(msg => `<p><strong>${msg.sender}:</strong> ${msg.content} <span>${msg.timestamp}</span></p>`)
      .join("");
    messageDetails.classList.remove("hidden");
  }
  
  // Fonction pour envoyer un message
  sendMessageForm.addEventListener("submit", event => {
    event.preventDefault();
    const newMessage = newMessageInput.value;
    if (newMessage.trim() !== "") {
      const activeConversation = conversations.find(conv => conv.id === 1);
      activeConversation.messages.push({ sender: "Vous", content: newMessage, timestamp: new Date().toLocaleString() });
      newMessageInput.value = "";
      showConversation(activeConversation.id);
    }
  });
  
  // Initialisation
  renderConversations();
  