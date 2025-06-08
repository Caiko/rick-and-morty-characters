# 🧪 Rick and Morty Characters - Character Browser App

[Check it out](https://caiko.github.io/rick-and-morty-characters/) <-----------

## 📚 Overview

**Rick and Morty Characters** is a **React-based web application** that lets users **search, browse, and expand character profiles** from the [Rick and Morty API](https://rickandmortyapi.com). This app delivers a table view of characters, expandable rows for deeper insights, and pagination. If you are a fan you can easily dive into details like **origin, species, and episode appearances**.

---

## 🚀 Features

-  **Live Search** – Instantly filter characters by name.
-  **Dynamic Filters** – Filter by species, gender, and status.
-  **Expandable Character Rows** – View full details and episode lists.
-  **Episode Integration** – GraphQL-powered episode data fetching.
-  **TanStack/React Query Integration** – Smooth and cached API handling.
-  **Pagination** – Load more characters across pages.
-  **Tailwind Styling** – Clean, responsive design.
-  **GraphQL API** – Modern and efficient data fetching.

---

## 💻 Technologies Used

- **React 19**
- **TypeScript**
- **GraphQL (Rick and Morty API)**
- **React Query (TanStack)**
- **Tailwind CSS**
- **Vite**
- **React Icons**

---

## 📸 Project Preview

![image](https://github.com/user-attachments/assets/b61c72d8-19e6-414e-86eb-143c2fc810b0)
![image](https://github.com/user-attachments/assets/016b4eba-fe77-47e2-9cd5-0f4623c6aa7f)



---

## 📂 Project Structure

```
src/
├── components/
│   ├── TableComponents/
│   │   ├── CharacterTable.tsx
│   │   ├── ExpandedRow.tsx
│   │   ├── FilterSelect.tsx
│   │   ├── PageButton.tsx
│   │   └── SearchBar.tsx
│   └── FullTable.tsx
├── hooks/
│   ├── useCharacters.ts
│   └── useEpisodes.ts
├── service/
│   ├── fetchCharacters.ts
│   └── fetchEpisodes.ts
├── types/
│   └── FetchTypes.ts
├── App.tsx
├── index.css
├── main.tsx
└── vite-env.d.ts
```

---


