// ================================
// 🚀 Part 1: Variables & Conditionals
// ================================
function checkAge() {
    let age = document.getElementById("ageInput").value;
    let result = "";
  
    if (age >= 18) {
      result = "✅ You are an adult!";
    } else if (age > 0) {
      result = "👶 You are a minor.";
    } else {
      result = "⚠️ Please enter a valid age.";
    }
  
    document.getElementById("ageResult").textContent = result;
  }
  
  // ================================
  // ❤️ Part 2: Functions (Reusable Logic)
  // ================================
  function calculateTotal() {
    let price = Number(document.getElementById("itemPrice").value);
    let qty = Number(document.getElementById("itemQty").value);
  
    // Reusable function to calculate total
    function getTotal(p, q) {
      return p * q;
    }
  
    let total = getTotal(price, qty);
    document.getElementById("totalResult").textContent = 
      `💰 Total = ${total}`;
  }
  
  // Another function: format a string
  function formatString(str) {
    return str.trim().toUpperCase();
  }
  
  // ================================
  // 🔁 Part 3: Loops
  // ================================
  function showCountdown() {
    let output = "";
    for (let i = 5; i >= 1; i--) {
      output += i + " ";
    }
    document.getElementById("countdownResult").textContent = output;
  }
  
  function showColors() {
    let colors = ["Red", "Green", "Blue", "Yellow"];
    let list = document.getElementById("colorList");
    list.innerHTML = ""; // clear old list
  
    // Use forEach loop
    colors.forEach(color => {
      let li = document.createElement("li");
      li.textContent = color;
      list.appendChild(li);
    });
  }
  
  // ================================
  // 🌐 Part 4: DOM Manipulation
  // ================================
  function changeHeading() {
    document.querySelector("h1").textContent = "🔥 Heading Changed!";
  }
  
  function toggleTheme() {
    document.body.classList.toggle("dark-mode");
  }
  
  function addNewItem() {
    let list = document.getElementById("dynamicList");
    let newItem = document.createElement("li");
    newItem.textContent = "New Item " + (list.children.length + 1);
    list.appendChild(newItem);
  }
  