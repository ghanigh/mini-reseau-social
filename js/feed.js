// Exemple de données JSON simulant un retour d'API
const posts = [
  {
    id: 1,
    author: "Alice Dupont",
    content: "Un superbe coucher de soleil aujourd'hui ! 🌅",
    image: "assets/images/soleil.webp",  // chemin vers l'image du coucher de soleil
    reactions: { like: 10, dislike: 2, love: 15 },
    comments: [
      { author: "Jean", content: "Magnifique ! 😍" },
      { author: "Marie", content: "Quel endroit ? 🤔" }
    ]
  },
  {
    id: 2,
    author: "Paul Lambert",
    content: "Mon nouveau projet artistique. Qu'en pensez-vous ? 🎨",
    image: null,
    reactions: { like: 25, dislike: 1, love: 8 },
    comments: []
  }
];

// Référence à la section des posts
const postsContainer = document.getElementById("posts-container");

// Fonction pour afficher les posts
function renderPosts() {
postsContainer.innerHTML = "";
posts.forEach(post => {
  const postElement = document.createElement("div");
  postElement.className = "post";

  postElement.innerHTML = `
    <h3>${post.author}</h3>
    <p>${post.content}</p>
    ${post.image ? `<img src="${post.image}" alt="Image du post" />` : ""}
    <div class="reactions">
      <button onclick="react(${post.id}, 'like')">👍 ${post.reactions.like}</button>
      <button onclick="react(${post.id}, 'dislike')">👎 ${post.reactions.dislike}</button>
      <button onclick="react(${post.id}, 'love')">❤️ ${post.reactions.love}</button>
    </div>
    <div class="comments">
      <h4>Commentaires</h4>
      <ul>
        ${post.comments.map(comment => `<li><strong>${comment.author}:</strong> ${comment.content}</li>`).join("")}
      </ul>
      <form onsubmit="addComment(event, ${post.id})">
        <input type="text" placeholder="Ajouter un commentaire..." required />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  `;
  postsContainer.appendChild(postElement);
});
}

// Fonction pour gérer les réactions
function react(postId, type) {
const post = posts.find(p => p.id === postId);
post.reactions[type]++;
renderPosts(); // Mettre à jour l'affichage
}

// Fonction pour ajouter un commentaire
function addComment(event, postId) {
event.preventDefault();
const post = posts.find(p => p.id === postId);
const input = event.target.querySelector("input");
post.comments.push({ author: "Vous", content: input.value });
input.value = "";
renderPosts();
}

// Initialisation
renderPosts();
