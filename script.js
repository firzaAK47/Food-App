
/* RECIPE DATA*/
// All 12 recipes stored as an array of objects
const recipes = [
  {
    id: 1, name: 'Butter Chicken', cuisine: 'Indian', emoji: '🍛', bg: 'bg-orange',
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&q=80',
    price: 249, time: '45 min', serves: 4, difficulty: 'Medium', rating: 4.8, reviews: 1240, badge: 'Popular',
    desc: 'Creamy tomato-based curry with tender chicken, slow-simmered in rich cashew-spiced gravy.',
    ingredients: ['Chicken','Tomato','Cream','Butter','Garam Masala','Ginger','Garlic','Kasuri Methi','Onion'],
    calories: 420, protein: '32g', carbs: '14g', fat: '28g',
  },
  {
    id: 2, name: 'Margherita Pizza', cuisine: 'Italian', emoji: '🍕', bg: 'bg-green',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80',
    price: 319, time: '30 min', serves: 2, difficulty: 'Easy', rating: 4.7, reviews: 980, badge: "Chef's Pick",
    desc: 'Classic Neapolitan pizza with San Marzano tomatoes, fresh mozzarella and fragrant basil.',
    ingredients: ['Pizza Dough','San Marzano Tomatoes','Fresh Mozzarella','Basil','Olive Oil','Sea Salt'],
    calories: 285, protein: '12g', carbs: '38g', fat: '10g',
  },
  {
    id: 3, name: 'Ramen Bowl', cuisine: 'Japanese', emoji: '🍜', bg: 'bg-purple',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80',
    price: 289, time: '3 hr', serves: 2, difficulty: 'Hard', rating: 4.9, reviews: 2100, badge: 'Top Rated',
    desc: 'Rich tonkotsu broth, springy noodles, chashu pork, soft egg and nori.',
    ingredients: ['Ramen Noodles','Pork Belly','Soy Sauce','Mirin','Soft Egg','Nori','Spring Onion','Sesame Oil'],
    calories: 510, protein: '28g', carbs: '55g', fat: '22g',
  },
  {
    id: 4, name: 'Tacos al Pastor', cuisine: 'Mexican', emoji: '🌮', bg: 'bg-pink',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&q=80',
    price: 199, time: '1 hr', serves: 4, difficulty: 'Medium', rating: 4.6, reviews: 760, badge: '',
    desc: 'Marinated pork in corn tortillas with pineapple, onion and fresh cilantro.',
    ingredients: ['Pork Shoulder','Ancho Chiles','Pineapple','Corn Tortillas','Cilantro','White Onion','Lime'],
    calories: 380, protein: '24g', carbs: '32g', fat: '16g',
  },
  {
    id: 5, name: 'Kung Pao Chicken', cuisine: 'Chinese', emoji: '🥡', bg: 'bg-blue',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&q=80',
    price: 229, time: '25 min', serves: 3, difficulty: 'Easy', rating: 4.5, reviews: 890, badge: '',
    desc: 'Spicy stir-fried chicken with peanuts, dried chilies and Sichuan peppercorns.',
    ingredients: ['Chicken','Peanuts','Dried Chili','Sichuan Pepper','Soy Sauce','Vinegar','Sugar','Garlic'],
    calories: 340, protein: '29g', carbs: '18g', fat: '18g',
  },
  {
    id: 6, name: 'Tiramisu', cuisine: 'Desserts', emoji: '🍰', bg: 'bg-rose',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80',
    price: 179, time: '4 hr', serves: 6, difficulty: 'Medium', rating: 4.9, reviews: 3200, badge: 'Bestseller',
    desc: 'Espresso-soaked savoiardi layers with velvety mascarpone cream and cocoa.',
    ingredients: ['Mascarpone','Savoiardi','Espresso','Eggs','Sugar','Dark Rum','Cocoa Powder'],
    calories: 390, protein: '8g', carbs: '40g', fat: '22g',
  },
  {
    id: 7, name: 'Avocado Salad', cuisine: 'Healthy', emoji: '🥑', bg: 'bg-teal',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
    price: 159, time: '15 min', serves: 2, difficulty: 'Easy', rating: 4.4, reviews: 520, badge: 'Vegan',
    desc: 'Fresh avocado, cherry tomatoes and cucumber in a zesty lime dressing.',
    ingredients: ['Avocado','Cherry Tomato','Cucumber','Red Onion','Lime Juice','Olive Oil','Coriander'],
    calories: 220, protein: '4g', carbs: '14g', fat: '18g',
  },
  {
    id: 8, name: 'Biryani', cuisine: 'Indian', emoji: '🫘', bg: 'bg-yellow',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80',
    price: 279, time: '1.5 hr', serves: 4, difficulty: 'Hard', rating: 4.9, reviews: 4100, badge: 'Legendary',
    desc: 'Fragrant basmati rice slow-cooked with chicken, whole spices and saffron milk.',
    ingredients: ['Basmati Rice','Chicken','Yogurt','Saffron','Whole Spices','Fried Onion','Ghee','Mint'],
    calories: 560, protein: '35g', carbs: '65g', fat: '20g',
  },
  {
    id: 9, name: 'Pad Thai', cuisine: 'Chinese', emoji: '🍝', bg: 'bg-orange',
    image: 'https://images.unsplash.com/photo-1637806931098-af30b519be53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFkJTIwdGhhaXxlbnwwfHwwfHx8MA%3D%3D',
    price: 219, time: '20 min', serves: 2, difficulty: 'Medium', rating: 4.7, reviews: 1480, badge: '',
    desc: 'Stir-fried rice noodles with shrimp, tofu, peanuts and a tangy tamarind sauce.',
    ingredients: ['Rice Noodles','Shrimp','Tofu','Bean Sprouts','Peanuts','Tamarind','Fish Sauce','Egg'],
    calories: 420, protein: '22g', carbs: '58g', fat: '14g',
  },
  {
    id: 10, name: 'Sushi Platter', cuisine: 'Japanese', emoji: '🍣', bg: 'bg-purple',
    image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600&q=80',
    price: 499, time: '1 hr', serves: 2, difficulty: 'Hard', rating: 4.8, reviews: 1900, badge: 'Premium',
    desc: 'Assorted nigiri and maki rolls — salmon, tuna, avocado — with wasabi and soy sauce.',
    ingredients: ['Sushi Rice','Salmon','Tuna','Avocado','Nori','Wasabi','Pickled Ginger','Rice Vinegar'],
    calories: 310, protein: '18g', carbs: '52g', fat: '6g',
  },
  {
    id: 11, name: 'Enchiladas', cuisine: 'Mexican', emoji: '🫔', bg: 'bg-pink',
    image: 'https://images.unsplash.com/photo-1534352956036-cd81e27dd615?w=600&q=80',
    price: 239, time: '50 min', serves: 4, difficulty: 'Medium', rating: 4.5, reviews: 640, badge: '',
    desc: 'Spiced chicken in corn tortillas, bathed in red chili sauce and melted cheese.',
    ingredients: ['Corn Tortillas','Chicken','Red Chili Sauce','Cheddar','Onion','Sour Cream','Cilantro'],
    calories: 460, protein: '28g', carbs: '42g', fat: '20g',
  },
  {
    id: 12, name: 'Chocolate Lava Cake', cuisine: 'Desserts', emoji: '🎂', bg: 'bg-rose',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&q=80',
    price: 149, time: '25 min', serves: 2, difficulty: 'Easy', rating: 4.9, reviews: 2800, badge: 'Must Try',
    desc: 'Warm gooey dark chocolate cake with a molten centre and vanilla ice cream.',
    ingredients: ['Dark Chocolate','Butter','Eggs','Sugar','Flour','Vanilla Extract','Cocoa Powder'],
    calories: 480, protein: '7g', carbs: '50g', fat: '30g',
  },
];
// Loader
document.addEventListener('DOMContentLoaded', function () {

  filterRecipes();
  document.querySelector('[data-page="home"]').classList.add('active');

  // Hide the loader after everything is ready
  window.addEventListener('load', function () {
    setTimeout(function () {
      document.getElementById('loader').classList.add('hidden');
    }, 4000); 
  });

});

/*   APP STATE */
// These three variables remember what the user is doing
let activeCategory = 'all';   
let favorites = new Set();   
let cart = {};                


/*  NAVIGATION */
function goTo(page) {
  // Hide all pages, show only the requested one
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');

  // Highlight the correct nav link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (page === 'favorites') renderFavorites();
}

function scrollToRecipes() {
  document.getElementById('recipesSection').scrollIntoView({ behavior: 'smooth' });
}


/*  TOAST NOTIFICATION */
function showToast(msg) {
  const toast = document.getElementById('notification');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('show'), 2800);
}


/*  RECIPE CARDS */
// Builds one recipe card HTML and adds it into a container
function buildCard(recipe, container) {
  const isFav   = favorites.has(recipe.id);
  const cartQty = cart[recipe.id]?.qty || 0;
  const stars   = '★'.repeat(Math.round(recipe.rating)) + '☆'.repeat(5 - Math.round(recipe.rating));

  const card = document.createElement('div');
  card.className = 'recipe-card';
  card.innerHTML = `
    <div class="card-image">
      <img src="${recipe.image}" alt="${recipe.name}" loading="lazy" />
      ${recipe.badge ? `<span class="card-tag">${recipe.badge}</span>` : ''}
      <button class="fav-btn ${isFav ? 'is-fav' : ''}" onclick="toggleFav(event, ${recipe.id})">
        ${isFav ? '❤️' : '🤍'}
      </button>
    </div>
    <div class="card-body">
      <p class="card-cuisine">${recipe.cuisine}</p>
      <h3 class="card-name">${recipe.name}</h3>
      <p class="card-desc">${recipe.desc.substring(0, 90)}…</p>
      <div class="card-meta">
        <span>⏱ ${recipe.time}</span>
        <span>👥 ${recipe.serves}</span>
        <span>📊 ${recipe.difficulty}</span>
      </div>
      <div class="stars">${stars} <span>${recipe.rating} (${recipe.reviews.toLocaleString()})</span></div>
      <div class="card-footer">
        <span class="card-price">₹${recipe.price}</span>
        <div class="card-actions">
          <button class="btn-outline-sm" onclick="openModal(${recipe.id})">View</button>
          <button class="btn-gold-sm"    onclick="addToCart(event, ${recipe.id})">
            ${cartQty > 0 ? `🛒 (${cartQty})` : '+ Cart'}
          </button>
        </div>
      </div>
    </div>
  `;
  container.appendChild(card);
}


/*  SEARCH & FILTER */
function filterRecipes() {
  const grid   = document.getElementById('recipeGrid');
  const search = document.getElementById('searchInput').value.toLowerCase();
  grid.innerHTML = '';

  const visible = recipes.filter(r => {
    const matchCat    = activeCategory === 'all' || r.cuisine === activeCategory;
    const matchSearch = !search || r.name.toLowerCase().includes(search)
      || r.cuisine.toLowerCase().includes(search)
      || r.ingredients.some(i => i.toLowerCase().includes(search));
    return matchCat && matchSearch;
  });

  document.getElementById('recipeCount').textContent =
    `Showing ${visible.length} recipe${visible.length !== 1 ? 's' : ''}`;

  if (visible.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <span>🔍</span>
        <h2>No Recipes Found</h2>
        <p>Try a different search or category.</p>
      </div>`;
    return;
  }

  visible.forEach(r => buildCard(r, grid));
}

function setCategory(name, btn) {
  activeCategory = name;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  filterRecipes();
}


/* FAVORITES  */
function toggleFav(event, id) {
  event.stopPropagation(); // stops the card's click from firing too
  favorites.has(id) ? favorites.delete(id) : favorites.add(id);
  document.getElementById('favCount').textContent = favorites.size;
  showToast(favorites.has(id) ? '❤️ Saved to favorites!' : '💔 Removed from favorites');
  filterRecipes();
}

function renderFavorites() {
  const grid  = document.getElementById('favGrid');
  const empty = document.getElementById('favEmpty');
  grid.innerHTML = '';

  const saved = recipes.filter(r => favorites.has(r.id));

  if (saved.length === 0) {
    grid.style.display  = 'none';
    empty.style.display = 'block';
  } else {
    grid.style.display  = 'grid';
    empty.style.display = 'none';
    saved.forEach(r => buildCard(r, grid));
  }
}


/*  CART  */
function addToCart(event, id) {
  if (event) event.stopPropagation();
  const recipe = recipes.find(r => r.id === id);
  if (!cart[id]) cart[id] = { recipe, qty: 0 };
  cart[id].qty++;
  updateCartBadge();
  showToast(`🛒 ${recipe.name} added to cart!`);
}

function changeQty(id, delta) {
  if (!cart[id]) return;
  cart[id].qty += delta;
  if (cart[id].qty <= 0) delete cart[id];
  updateCartBadge();
  renderCartList();
}

function removeFromCart(id) {
  delete cart[id];
  updateCartBadge();
  renderCartList();
  showToast('🗑️ Item removed');
}

function updateCartBadge() {
  const total = Object.values(cart).reduce((sum, i) => sum + i.qty, 0);
  document.getElementById('cartBadge').textContent = total;
  filterRecipes(); // refreshes "+ Cart" button labels
}

function renderCartList() {
  const list   = document.getElementById('cartList');
  const bottom = document.getElementById('cartBottom');
  const items  = Object.values(cart);

  if (items.length === 0) {
    list.innerHTML = `<div class="cart-empty"><span class="big">🛒</span><p>Your cart is empty.</p></div>`;
    bottom.style.display = 'none';
    return;
  }

  bottom.style.display = 'block';
  list.innerHTML = '';
  let total = 0;

  items.forEach(({ recipe, qty }) => {
    total += recipe.price * qty;
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <div class="cart-item-icon">
        <img src="${recipe.image}" alt="${recipe.name}" />
      </div>
      <div class="cart-item-info">
        <p class="cart-item-name">${recipe.name}</p>
        <p class="cart-item-cuisine">${recipe.cuisine}</p>
        <div class="qty-row">
          <button class="qty-btn" onclick="changeQty(${recipe.id}, -1)">−</button>
          <span class="qty-num">${qty}</span>
          <button class="qty-btn" onclick="changeQty(${recipe.id}, 1)">+</button>
        </div>
      </div>
      <div class="cart-item-right">
        <span class="cart-item-price">₹${(recipe.price * qty).toLocaleString()}</span>
        <button class="remove-btn" onclick="removeFromCart(${recipe.id})">🗑️</button>
      </div>
    `;
    list.appendChild(row);
  });

  document.getElementById('cartTotal').textContent = '₹' + total.toLocaleString();
}

function openCart() {
  renderCartList();
  document.getElementById('cartPanel').classList.add('open');
  document.getElementById('cartBackdrop').classList.add('open');
}

function closeCart() {
  document.getElementById('cartPanel').classList.remove('open');
  document.getElementById('cartBackdrop').classList.remove('open');
}

function checkout() {
  if (!Object.keys(cart).length) return;
  cart = {};
  updateCartBadge();
  renderCartList();
  closeCart();
  showToast('🎉 Order placed! Thank you.');
}


/* RECIPE MODAL */
function openModal(id) {
  const r      = recipes.find(r => r.id === id);
  const isFav  = favorites.has(id);
  const cartQty = cart[id]?.qty || 0;
  const stars   = '★'.repeat(Math.round(r.rating));
  const tags    = r.ingredients.map(i => `<span class="ingredient-tag">${i}</span>`).join('');

  document.getElementById('modalContent').innerHTML = `
    <div class="modal-img-wrap">
      <img src="${r.image}" alt="${r.name}" />
      <span class="modal-emoji-badge">${r.emoji}</span>
    </div>
    <p class="modal-cuisine">${r.cuisine}</p>
    <h2 class="modal-title">${r.name}</h2>
    <div class="stars" style="margin-bottom:16px">${stars} <span>${r.rating} · ${r.reviews.toLocaleString()} reviews</span></div>
    <p class="modal-desc">${r.desc}</p>

    <div class="modal-stats">
      <div class="modal-stat"><span class="num">${r.calories}</span><span class="lbl">Calories</span></div>
      <div class="modal-stat"><span class="num">${r.protein}</span><span class="lbl">Protein</span></div>
      <div class="modal-stat"><span class="num">${r.carbs}</span><span class="lbl">Carbs</span></div>
      <div class="modal-stat"><span class="num">${r.fat}</span><span class="lbl">Fat</span></div>
    </div>
    <div class="modal-stats">
      <div class="modal-stat"><span class="num">${r.time}</span><span class="lbl">Cook Time</span></div>
      <div class="modal-stat"><span class="num">${r.serves}</span><span class="lbl">Servings</span></div>
      <div class="modal-stat" style="grid-column:span 2"><span class="num">${r.difficulty}</span><span class="lbl">Difficulty</span></div>
    </div>

    <div class="modal-ingredients">
      <h3>🧂 Ingredients</h3>
      <div class="ingredient-tags">${tags}</div>
    </div>

    <div class="modal-footer">
      <span class="modal-price">₹${r.price}</span>
      <button class="btn-outline-sm" id="modalFavBtn"
        onclick="toggleFav(event,${id}); document.getElementById('modalFavBtn').textContent = favorites.has(${id}) ? '❤️ Saved' : '🤍 Save'">
        ${isFav ? '❤️ Saved' : '🤍 Save'}
      </button>
      <button class="btn-gold" onclick="addToCart(null,${id}); showToast('Added to cart!')">
        ${cartQty > 0 ? `🛒 Add More (${cartQty})` : '🛒 Add to Cart'}
      </button>
    </div>
  `;

  document.getElementById('modalBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e.target === document.getElementById('modalBackdrop')) closeModalNow();
}

function closeModalNow() {
  document.getElementById('modalBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}


/*  CONTACT FORM */
function clearErr(id) {
  document.getElementById(id).classList.remove('has-error');
  document.getElementById(id + 'Err').classList.remove('show');
}

function markErr(id, msg) {
  document.getElementById(id).classList.add('has-error');
  const err = document.getElementById(id + 'Err');
  if (msg) err.textContent = msg;
  err.classList.add('show');
}

function submitForm() {
  const firstName = document.getElementById('firstName').value.trim();
  const lastName  = document.getElementById('lastName').value.trim();
  const email     = document.getElementById('email').value.trim();
  const subject   = document.getElementById('subject').value;
  const message   = document.getElementById('message').value.trim();
  let valid = true;

  if (!firstName) {
    markErr('firstName');
   valid = false;
}

if (!lastName) {
  markErr('lastName');
    valid = false;
}

if (!email || !/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
    markErr('email', 'Valid email required.');
    valid = false;
}

if (!subject) {
    markErr('subject', 'Please pick a subject.');
    valid = false;
}

if (message.length < 20) {
    markErr('message', 'Write at least 20 characters.');
    valid = false;
}

if (!valid) return;

  document.getElementById('formFields').style.display = 'none';
  document.getElementById('formSuccess').classList.add('show');
  showToast('✅ Message sent!');
}


/* NEWSLETTER */
function subscribe() {
  const input = document.getElementById('newsletterEmail');
  if (!/^[^@]+@[^@]+\.[^@]+$/.test(input.value.trim())) {
    showToast('⚠️ Please enter a valid email!');
    return;
  }
  showToast('🎉 Subscribed! Welcome aboard.');
  input.value = '';
}

 /* MOBILE MENU */

function openMobileMenu() {
  document.getElementById('mobileMenu').classList.add('open');
}

function closeMobileMenu() {
 document.getElementById('mobileMenu').classList.remove('open');
}

/* INIT */
document.addEventListener('DOMContentLoaded', () => {
  filterRecipes();
document.querySelector('[data-page="home"]').classList.add('active');
});