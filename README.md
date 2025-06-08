# 🧪 Rick & Morty Characters - Character Browser App

[Check it out](https://caiko.github.io/rick-and-morty-characters/) <-----------

## 📚 Overview

**Rick & Morty Characters** is a **React-based web application** that lets users **search, browse, and expand character profiles** from the [Rick and Morty API](https://rickandmortyapi.com). This app delivers a table view of characters, expandable rows for deeper insights, and pagination. If you are a fan you can easily dive into details like **origin, species, and episode appearances** — all wrapped in a responsive and scrollable UI.

---

## 🚀 Features

- 🔍 **Search Bar** – Live name-based filtering of characters.
- 📃 **Expandable Table Rows** – Click to reveal character images and episode data.
- 📺 **Episode Fetching** – Auto-fetches episode titles and codes for each character.
- 📜 **Pagination** –  Browse across multiple pages.
- 🎨 **Tailwind Styling** – Responsive UI.

---

## 💻 Technologies Used

- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Rick and Morty API**
- **Fetch API**
- **Vite / React Scripts**

---

## 📸 Project Preview

![image](https://github.com/user-attachments/assets/18ca61e8-5d4f-4b35-8e4c-44a41be0397d)
![image](https://github.com/user-attachments/assets/40b9f393-e52b-45ad-8d03-f17a6eb7d1b6)


---

## 📂 Project Structure

```
rick-and-morty-explorer/
├── Components/
│   ├── FullTable.tsx              # Main component with table, pagination, search
│   ├── TableComponents/
│   │   ├── CharacterTable.tsx     # Renders table rows
│   │   ├── CharacterRow.tsx       # Individual row + expand logic
│   │   ├── ExpandedRow.tsx        # Detailed character and episodes view
│   │   ├── PageButton.tsx         # Pagination buttons
│   │   └── SearchBar.tsx          # Search input
├── service/
│   ├── fetchCharacters.ts         # Fetches character data from API
│   ├── fetchEpisodes.ts           # Batch fetches episodes
├── types/
│   └── FetchTypes.ts              # Type definitions for API responses
├── App.tsx                        # Root component
├── main.tsx                       # Entry point
├── index.css                      # Tailwind base
├── vite.config.ts                 # Vite configuration
└── README.md                      # Project documentation
```

---


