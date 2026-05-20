/**
 * Myanmar Seafarer Hub - Main Logic
 */

// Global Variables
let cart = [];
const phoneNumber = "959792105373"; // ဖုန်းတိုက်ရိုက်ဆက်ရန် သို့မဟုတ် SMS ပို့ရန်
const fbUsername = "100008684378251"; // Messenger အတွက် Username

document.addEventListener("DOMContentLoaded", () => {
  // Sidebar & Menu Elements
  const menuToggle = document.getElementById("menu-toggle");
  const closeSidebar = document.getElementById("close-sidebar");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const mobileCatToggle = document.getElementById("mobile-cat-toggle");

  // --- Sidebar Logic ---
  const openSidebarFunc = () => {
    if (sidebar && overlay) {
      sidebar.classList.add("active");
      overlay.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  };

  const closeSidebarFunc = () => {
    if (sidebar && overlay) {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  };

  if (menuToggle) menuToggle.addEventListener("click", openSidebarFunc);
  if (closeSidebar) closeSidebar.addEventListener("click", closeSidebarFunc);
  if (overlay) overlay.addEventListener("click", closeSidebarFunc);
  if (mobileCatToggle)
    mobileCatToggle.addEventListener("click", openSidebarFunc);

  // --- Category Filtering (Docs Page) ---
  const categoryLinks = document.querySelectorAll(".categories-list li a");
  const contentCards = document.querySelectorAll(".content-card");

  categoryLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        categoryLinks.forEach((l) =>
          l.parentElement.classList.remove("active"),
        );
        link.parentElement.classList.add("active");

        const filter = href.replace("#", "");
        contentCards.forEach((card) => {
          const cardCategory = card.getAttribute("data-category");
          if (filter === "all" || filter === cardCategory) {
            card.style.display = "block";
            setTimeout(() => {
              card.style.opacity = "1";
            }, 10);
          } else {
            card.style.display = "none";
          }
        });
        closeSidebarFunc();
      }
    });
  });

  // Footer Year
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Initial UI Update
  updateCartUI();
});

/* ==========================================
   SHOP & CART LOGIC
   ========================================== */

function addToCart(name, price, img) {
  const itemImg = img || "https://via.placeholder.com/150";
  cart.push({
    name: name,
    price: price,
    img: itemImg,
    id: Date.now() + Math.random(),
  });
  updateCartUI();

  const trigger = document.getElementById("cart-trigger");
  if (trigger) {
    trigger.style.transform = "scale(1.2)";
    setTimeout(() => (trigger.style.transform = "scale(1)"), 200);
  }
}

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  updateCartUI();
}

/**
 * ခြင်းတောင်းထဲက စာရင်းကို စာသားအဖြစ် ပြောင်းပေးခြင်း
 */
function getOrderSummary() {
  let summary = "Myanmar Seafarer Hub - Order\n\n";
  let totalVal = 0;
  cart.forEach((item, index) => {
    summary += `${index + 1}. ${item.name} (${item.price.toLocaleString()} Ks)\n`;
    totalVal += item.price;
  });
  summary += `\nစုစုပေါင်းကျသင့်ငွေ: ${totalVal.toLocaleString()} Ks`;
  return { text: summary, total: totalVal };
}

function updateCartUI() {
  const list = document.getElementById("cartItems");
  const count = document.getElementById("cartCount");
  const total = document.getElementById("totalAmount");

  if (!list || !count || !total) return;
  count.innerText = cart.length;

  if (cart.length === 0) {
    list.innerHTML = `<p style="text-align: center; color: #888; margin-top: 60px; font-size: 0.9rem;">ခြင်းတောင်းထဲတွင် ပစ္စည်းမရှိသေးပါ။</p>`;
    total.innerText = "0 Ks";
    return;
  }

  let html = "";
  const orderData = getOrderSummary();

  cart.forEach((item) => {
    html += `
          <div class="cart-item" style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px;">
            <img src="${item.img}" style="width: 50px; height: 50px; border-radius: 8px; object-fit: cover;">
            <div class="cart-item-info" style="flex-grow: 1;">
              <div style="font-size: 0.85rem; font-weight: 600; color: #fff;">${item.name}</div>
              <div style="color: #ffc107; font-size: 0.8rem;">${item.price.toLocaleString()} Ks</div>
            </div>
            <i class="fas fa-trash-alt remove-item" style="color: #ff4444; cursor: pointer; padding: 5px;" onclick="removeFromCart(${item.id})"></i>
          </div>`;
  });

  list.innerHTML = html;
  total.innerText = orderData.total.toLocaleString() + " Ks";

  // SMS Link Update
  const smsLink = document.getElementById("smsLink");
  if (smsLink) {
    smsLink.href = `sms:+${phoneNumber}?body=${encodeURIComponent(orderData.text)}`;
  }
}

/**
 * Messenger ခလုတ်နှိပ်လျှင် အလုပ်လုပ်မည့် Function
 */
function copyAndGoMessenger() {
  if (cart.length === 0) {
    alert("ခြင်းတောင်းထဲမှာ ပစ္စည်းမရှိသေးပါဘူး ခင်ဗျာ။");
    return;
  }

  const orderData = getOrderSummary();
  const fullText =
    orderData.text +
    "\n\n(Messenger ထဲရောက်လျှင် ဤစာကို Paste လုပ်၍ ပို့ပေးပါ)";

  // ၁။ Clipboard သို့ ကူးထည့်ခြင်း
  navigator.clipboard
    .writeText(fullText)
    .then(() => {
      alert(
        "အော်ဒါစာရင်းကို Copy ကူးပြီးပါပြီ။ Messenger ထဲတွင် Paste လုပ်၍ ပို့ပေးပါ။",
      );

      // ၂။ Messenger ကို ဖွင့်ခြင်း
      window.location.href = `https://messenger.com/t/${fbUsername}`;
    })
    .catch((err) => {
      console.error("Copy error:", err);
      window.location.href = `https://messenger.com/t/${fbUsername}`;
    });
}

function toggleCart() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("overlayCart");
  if (drawer) drawer.classList.toggle("open");
  if (overlay) overlay.classList.toggle("show");
}

function filterCat(cat, btn) {
  const allBtns = document.querySelectorAll(".cat-btn");
  allBtns.forEach((b) => b.classList.remove("active"));
  if (btn) btn.classList.add("active");

  const items = document.querySelectorAll(".product-card");
  items.forEach((item) => {
    item.style.display =
      cat === "all" || item.getAttribute("data-category") === cat
        ? "flex"
        : "none";
  });
}

function searchProducts() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const items = document.querySelectorAll(".product-card");
  items.forEach((item) => {
    const name = item.querySelector(".product-name").innerText.toLowerCase();
    item.style.display = name.includes(input) ? "flex" : "none";
  });
}
