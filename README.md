# 🌍 Countries Explorer

A **modern, responsive web app** that lets users explore countries around the world. Users can **search by country name**, **filter by region**, **sort by population**, and toggle **dark/light mode**. Built with **React**, it consumes the **REST Countries API** for live data.  

This app satisfies the **Week 3 Assignment requirements** and includes **extra features for polish and usability**.

---

## 📝 Features

### Mandatory Features (Assignment Requirements)
- Load real country data from **REST Countries API**
- **Search** countries by name (requires at least 2 characters)
- **Filter** countries by region:
  - Africa
  - Americas
  - Asia
  - Europe
  - Oceania
  - All
- Proper handling of **loading states** and **errors**
- Displays country information:
  - Flag
  - Name
  - Region
  - Population
- Correct **state management** (`countries`, `loading`, `error`, `search`, `region`)
- Uses **`useEffect`** to fetch data based on **search** and **region**
- Keys used properly in lists to prevent React warnings
- Prevents app crashes on missing fields

### Bonus Features
- **Sort by population (high → low)**
- **No results found** UI
- **Dark/Light mode toggle**
- **Clear filters button**
- Modern UI design with **rounded cards, gradients, hover effects, and responsive grid**

---

## 🛠️ Technologies

- **React** (Functional Components + Hooks)  
- **REST Countries API** ([https://restcountries.com](https://restcountries.com))  
- **CSS** (Modern styling with dark/light mode, gradients, and responsive design)

---

## 🔗 API Endpoints Used

- **All countries**: `https://restcountries.com/v3.1/all`  
- **Search by name**: `https://restcountries.com/v3.1/name/{name}`  
- **Filter by region**: `https://restcountries.com/v3.1/region/{region}`  

---

## 🚀 How to Run

1. **Clone the repository**
```bash
git clone <your-repo-link>
cd countries-explorer
```
2. **Install dependencies**
```bash
npm install
```
3. **Start the development server**
```bash
npm run dev
```
4. **Open your browser at http://localhost:5173
 (or the URL shown in terminal)**

---

## 📸 Screenshots



---
