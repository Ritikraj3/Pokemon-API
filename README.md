
# 🎯 PokeSpot - The Ultimate Pokémon Explorer 🧭

**PokeSpot** is a modern, interactive Pokédex web app built with **React.js**, powered by the **PokéAPI**, and bundled using **Parcel**. It displays the original 151 Pokémon with live search, filtering by type, real-time loading shimmer, and dynamic error handling — all wrapped in a sleek, responsive UI.

---

## 🏷️ Badges

![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![Parcel](https://img.shields.io/badge/Parcel-Bundler-yellow?logo=parcel)
![PokéAPI](https://img.shields.io/badge/Powered_by-PokéAPI-red?logo=pokemon)
![Responsive](https://img.shields.io/badge/Responsive-Design-brightgreen)

---

## 🔥 Live Demo

_Coming soon..._

---

## 📌 Features

### 🔎 1. Live Search by Name  
Type the name of any Pokémon and the results update in real time.

### 🧪 2. Filter by Type  
Select an elemental type (like Water, Fire, Electric, etc.) to instantly filter Pokémon.

### 🌀 3. Combined Filters  
Supports **both** name search and type filter together — powerful and intuitive!

### 💡 4. Pokémon Count  
Displays:  
`"Showing 24 of 150 Pokémon"`  
Helps users know filters are working.

### 🌟 5. No Results Message  
If no Pokémon match the current filters, shows:  
`"No Pokémon found!"`

### ✨ 6. Shimmer Loading Effect  
While the Pokémon data is being fetched, a beautiful shimmer placeholder enhances the user experience instead of a blank or spinning loader.

### ❌ 7. Error Handling  
If the API fails to fetch data, a user-friendly error message is displayed like:  
`"Failed to load Pokémon. Try again later."`

### 📱 8. Responsive UI  
The app layout adjusts beautifully across devices (desktop, tablet, mobile).

---

## 🚀 Tech Stack

| Tech            | Role                            |
|----------------|----------------------------------|
| React.js        | Building UI components           |
| Parcel          | Bundler for blazing fast dev/build |
| PokéAPI         | Real-time Pokémon data           |
| CSS             | Styling and responsiveness       |
| React Router    | Page navigation & routing        |

---

## 🧩 Project Structure

```
PokeSpot/
├── Components/
│   ├── Home.jsx               # Main screen with Search + Filter + List
│   ├── PokemonList.jsx        # Fetches, filters, and displays Pokémon
│   ├── PokemonCard.jsx        # Individual Pokémon UI card
│   ├── PokemonListShimmer.jsx # Shimmer effect during data load
│   ├── Searchbar.jsx          # Input field to search Pokémon
│   ├── SelectMenu.jsx         # Dropdown to filter by type
│   └── Error.jsx              # Optional: Error fallback UI
├── App.jsx                    # Main application component with router layout
├── main.jsx                   # Entry point with RouterProvider
├── index.html                 # HTML template
├── style.css                  # Global styles
└── README.md                  # This file
```

---

## 📂 Component Highlights

### 🧠 `PokemonList.jsx`

- Fetches all 151 Pokémon
- Makes 151 parallel API calls using `Promise.all`
- Filters Pokémon using:
  - `filters.name` (substring match)
  - `filters.type` (type name match inside `.types`)
- Shows shimmer while loading
- Displays error message if any fetch fails

### 📦 `PokemonListShimmer.jsx`

Displays card placeholders with shimmer effect mimicking the Pokémon card layout.

### 💬 `Searchbar.jsx` + `SelectMenu.jsx`

Controlled components that update the `filters` state in the parent (`Home.jsx`) to filter results in real time.

---

## 🛠️ Parcel Setup Notes

- **Zero Config**: Parcel handles React, JSX, CSS, and assets with no config files.
- **Hot Module Reloading**: Instant reload on file change.
- **Faster builds**: Ideal for rapid frontend development.

---

## 📸 Screenshots

> _Include screenshots or GIF previews here for better visual impression._

---

## ✅ Future Enhancements

- [ ] Add pagination for faster loading
- [ ] Display more stats (HP, attack, abilities)
- [ ] Toggle between grid and list view
- [ ] Theme toggle (light/dark)
- [ ] Add favorites feature (with localStorage)

---

## 🙋‍♂️ Author

**Ritik Raj**  
Frontend Developer • Code Explorer  
📫 [ritikraj5776@email.com](mailto:ritikraj5776@email.com)  
🔗 [GitHub](https://github.com/Ritikraj3)



## ❤️ Acknowledgements

- [PokéAPI](https://pokeapi.co/) — for providing open-source Pokémon data
- [React](https://reactjs.org/)
- You — for exploring this project!