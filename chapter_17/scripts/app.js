// *** *** *** *** *** *** Section-17: Real-time Chatroom Project *** *** *** *** *** ***

// DOM queries
const chatList = document.querySelector(".chat-list");
const newChatForm = document.querySelector(".new-chat");
const newNameForm = document.querySelector(".new-name");
const updateMessage = document.querySelector(".update-mssg");
const rooms = document.querySelector(".chat-rooms");

// Add A New Chat
newChatForm.addEventListener("submit", event => {
  event.preventDefault();
  const message = newChatForm.message.value.trim();
  chatroom
    .addChat(message)
    .then(() => newChatForm.reset)
    .catch(error => console.log(error));
});

// Update Username
newNameForm.addEventListener("submit", event => {
  event.preventDefault();
  // Update Name Via Chatroom
  const newName = newNameForm.name.value.trim();
  chatroom.updateName(newName);
  // Reset The Form
  newNameForm.reset();
  // Show Then Hide The Update Message
  updateMessage.innerHTML = `Your name was updated to ${newName}`;
  setTimeout(() => (updateMessage.innerText = ""), 3000);
});

//Update The Chatroom
rooms.addEventListener("click", event => {
  if (event.target.tagName === "BUTTON") {
    chatUI.clear();
    chatroom.updateRoom(event.target.getAttribute("id"));
    chatroom.getChats(chat => chatUI.render(chat));
  }
});

// Check Local Storage For A Username
const username = localStorage.username ? localStorage.username : "anonymous";

// Class Instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom("gaming", username);

// Get Chats & Render
chatroom.getChats(data => chatUI.render(data));
