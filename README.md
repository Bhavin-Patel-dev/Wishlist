## 📖 Introduction

**Wishlist** is a lightweight, front-end-only web application that lets users maintain their personal bucket list. Whether it's places you want to visit, skills you want to learn, or milestones you want to achieve - Wishlist gives you a clean and distraction-free space to capture and track them all.

No backend, no database, no sign-up. Just open the app, start adding, and your wishes are safely stored in your browser's local storage so they persist across sessions.

---

## ✨ Key Features

- **➕ Add Wishes** - Quickly add items to your wishlist using the input field and the "Add" button.

- **🗑️ Remove Wishes** - Delete any wish item that you've accomplished or no longer need.

- **💾 Persistent Storage** - Wishlist items are saved in the browser's `localStorage`, so they survive page refreshes and browser restarts.

- **⚡ Zero Dependencies** - No frameworks, no libraries, no build tools. Pure vanilla HTML, CSS, and JavaScript.

- **🚀 Instant Load** - Extremely lightweight with near-instant loading times.

---

## ⚙️ Functionality

| Feature         | Description                                                |
| --------------- | ---------------------------------------------------------- |
| Add a wish      | Type in the input box and click **Add** or press **Enter** |
| View wishes     | All added wishes are displayed in a list below the form    |
| Delete a wish   | Click the delete/remove button next to any wish            |
| Persistent data | Data is automatically saved and loaded from `localStorage` |

---

## 🔧 How It Works

1. **User Input** - The user types a wish into the input field on the main page.

2. **Add to List** - On clicking the "Add" button, the JavaScript reads the input value, and creates a new wish card/item in the DOM.

3. **Render to UI** - The new item is appended to the `.todos-container` div, instantly visible to the user.

4. **Save to localStorage** - The updated wish array is serialized and saved to `localStorage` so the data persists beyond the session.

5. **Load on Startup** - On page load, the app reads any saved wishes from `localStorage` and renders them to the screen automatically.

6. **Delete** - Each rendered item has a remove control; clicking it removes the item from the array, updates `localStorage`, and removes the element from the DOM.

```
User types wish
      ↓
Clicks "Add" button
      ↓
JS validates input → creates DOM element
      ↓
Appends to .todos-container
      ↓
Saves updated list to localStorage
      ↓
On next visit → loads from localStorage → renders to UI
```

---

## 🛠️ Tech Stack

| Technology            | Role                                              |
| --------------------- | ------------------------------------------------- |
| **HTML5**             | Application structure and semantic markup         |
| **CSS3**              | Styling and layout                                |
| **JavaScript (ES6+)** | Application logic, DOM manipulation, localStorage |

> **No frameworks. No bundlers. No external dependencies.**
> This project uses native browser APIs only, making it highly portable and easy to understand.

---

## 📁 Project Structure

```
Wishlist/
│
├── index.html       # Main HTML file - app structure and entry point
├── style.css        # All styling - layout, colors, responsiveness
├── index.js         # Core JavaScript logic - DOM manipulation & localStorage
└── README.md        # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

All you need is a modern web browser (Chrome, Firefox, Safari, Edge). No Node.js, npm, or any other tooling required.

### Run Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/Bhavin-Patel-dev/Wishlist.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd Wishlist
   ```

3. **Open in your browser**

   Simply double-click `index.html`, or open it directly from your browser:

   ```
   File → Open File → index.html
   ```

   Or, for a better development experience, use a local server extension like **Live Server** (VS Code).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. **Fork** the repository
2. **Create** your feature branch: `git checkout -b feature/my-feature`
3. **Commit** your changes: `git commit -m "Add my feature"`
4. **Push** to the branch: `git push origin feature/my-feature`
5. **Open** a Pull Request

---

## 💡 Future Enhancements

Some ideas for taking this project further:

- [ ] **Edit** existing wish items inline
- [ ] **Reorder** wishes via drag-and-drop
- [ ] **Categories/Tags** for organizing different types of wishes
- [ ] **Dark mode** toggle
- [ ] **Export** wishlist as a text or PDF file
- [ ] **Share** wishlist via a unique URL

---

> _"A wish written down is a goal in the making."_ ✨
