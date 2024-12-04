// Importer les données JSON
import friends from './data/friends.json';

// Référence au conteneur des amis
const friendsContainer = document.getElementById("friends-container");
const searchInput = document.getElementById("search-friends");

// Fonction pour afficher les amis
function renderFriends() {
  friendsContainer.innerHTML = "";
  friends.forEach(friend => {
    const friendElement = document.createElement("div");
    friendElement.className = "friend";
    friendElement.draggable = true;
    friendElement.innerHTML = `
      <p>${friend.name}</p>
      <a href="messages.html?friend=${friend.id}" class="message-link">Envoyer un message</a>
    `;
    friendsContainer.appendChild(friendElement);
  });
}

// Fonction pour filtrer les amis
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  friendsContainer.innerHTML = "";
  friends
    .filter(friend => friend.name.toLowerCase().includes(searchTerm))
    .forEach(friend => {
      const friendElement = document.createElement("div");
      friendElement.className = "friend";
      friendElement.innerHTML = `
        <p>${friend.name}</p>
        <a href="messages.html?friend=${friend.id}" class="message-link">Envoyer un message</a>
      `;
      friendsContainer.appendChild(friendElement);
    });
});

// Initialisation
renderFriends();
