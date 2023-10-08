```javascript
// Importing socket.io client
import io from 'socket.io-client';

// Establishing WebSocket connection
const socket = io('http://localhost:3000');

// DOM element for chat box
const chatBox = document.getElementById('chat_box');

// Function to send chat message
function sendMessage(message) {
  socket.emit('chat_message', message);
}

// Listening for incoming chat messages
socket.on('chat_message', function(message) {
  const messageElement = document.createElement('p');
  messageElement.textContent = message;
  chatBox.appendChild(messageElement);
});

// Exporting sendMessage function for use in other files
export { sendMessage };
```