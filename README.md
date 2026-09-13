# Dev Stack Builder

A responsive React + TypeScript web app that lets developers explore popular technologies and build their ideal development stack by adding/removing tools.

## 🛠️ Technologies Used

- React.js
- TypeScript
- Vite
- Tailwind CSS
- React-Toastify
- JSON (local data)

##  Features

1. **Technology Explorer** – Browse some technologies with icons, ratings, difficulty, and category chips.
2. **Your Stack Sidebar** – Add or remove technologies, see live count, and clear the whole stack with one click.
3. **Toast Notifications** – Get instant feedback for add, duplicate add, remove, and remove-all actions.

##  React Questions & Answers

**1. What is JSX, and why is it used in React?**  
JSX is a syntax extension that lets you write HTML-like code inside JavaScript. React uses it to describe the UI in a readable way and then compiles it to `React.createElement` calls.

**2. What is the difference between props and state?**  
Props are read-only data passed from a parent to a child. State is data managed inside a component that can change over time and triggers re-renders when updated.

**3. What does the `useState` hook do, and where did you use it in this project?**  
`useState` lets a component remember a value between renders. In this project I used it for `technologies`, `stack`, `loading`, and the mobile menu open/close state.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**  
`useEffect` runs side effects after render. I used it to fetch the local JSON data when the component mounts, so the technology list loads once and updates the UI.

**5. Why does every item in a `.map()` list need a unique `key` prop?**  
The `key` helps React identify which items changed, were added, or removed. Without it, React may re-render the wrong elements and cause bugs.

**6. What is conditional rendering? Show one place you used it.**  
Conditional rendering means showing different UI based on a condition. I used it in the `YourStack` component: if `stack.length === 0`, it shows “Your stack is empty.”, otherwise it shows the selected items.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**  
Data is passed down via props. A child sends data back by calling a function prop provided by the parent — for example, `TechCard` calls `onAdd(tech)` to add an item to the stack in `App`.
