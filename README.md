# Stock Management & ERP Analytics Client (`Stock_App_Client`)

A modern inventory, sales, purchases, supplier (`Firms`), and brand management web application built with **React 18, Vite, Redux Toolkit (`redux-persist`), Material UI (`@mui/material` & `@mui/x-data-grid`), Tailwind CSS, Tremor Charts, and Formik + Yup**.

## Who It's For
- Small-to-medium retail and wholesale operations needing a responsive web dashboard to track product inventory levels, supplier purchases, customer sales, brand catalogs, and real-time revenue/profit KPIs.

## Tech Stack
- **Build Tool & Bundler:** Vite (`^4.4`)
- **Frontend Framework:** React 18 (`react`, `react-dom`, `react-router-dom` v6)
- **State Management:** Redux Toolkit (`@reduxjs/toolkit`, `react-redux`, `redux-persist`)
- **UI & Data Tables:** Material UI (`@mui/material`, `@mui/x-data-grid`), Tailwind CSS
- **Data Visualization:** Tremor (`@tremor/react`), Chart.js (`chart.js`, `react-chartjs-2`)
- **Forms & Validation:** Formik (`formik`), Yup (`yup`)
- **HTTP Client & Notifications:** Axios (`axios`), React Toastify (`react-toastify`)

## Project Structure
```text
stock_frontend/
├── src/
│   ├── app/
│   │   └── store.jsx           # Redux Toolkit store & redux-persist configuration
│   ├── components/
│   │   ├── BrandCard.jsx       # Brand catalog card component
│   │   ├── BrandModal.jsx      # Create/edit brand modal
│   │   ├── Charts.jsx          # Sales & purchases time-series charts
│   │   ├── FirmCard.jsx        # Supplier/firm directory card
│   │   ├── FirmModal.jsx       # Create/edit supplier modal
│   │   ├── KpiCards.jsx        # Revenue, profit, and purchase KPI summary cards
│   │   ├── MenuListItems.jsx   # Sidebar navigation drawer items
│   │   ├── ProductModal.jsx    # Create/edit product inventory modal
│   │   ├── ProductTable.jsx    # MUI DataGrid product inventory table
│   │   ├── PurchaseModal.jsx   # Record supplier purchase transaction modal
│   │   ├── PurchaseTable.jsx   # MUI DataGrid purchase history table
│   │   ├── RegisterForm.jsx    # Formik + Yup user registration form
│   │   ├── SaleModal.jsx       # Record customer sale transaction modal
│   │   └── SaleTable.jsx       # MUI DataGrid sales history table
│   ├── features/
│   │   ├── authSlice.jsx       # Authentication Redux slice
│   │   └── stockSlice.jsx      # Inventory, sales, purchases, firms & brands slice
│   ├── hooks/
│   │   ├── useAuthCall.jsx     # Auth API actions hook
│   │   ├── useAxios.jsx        # Authenticated Axios instance hook
│   │   └── useStockCall.jsx    # CRUD operations hook for inventory entities
│   ├── pages/
│   │   ├── Brands.jsx          # Brands management view
│   │   ├── Dashboard.jsx       # Main authenticated layout shell
│   │   ├── Firms.jsx           # Suppliers/firms management view
│   │   ├── Home.jsx            # Executive KPI & charts overview
│   │   ├── Login.jsx           # Authentication login view
│   │   ├── Products.jsx        # Product catalog & stock view
│   │   ├── Purchases.jsx       # Purchase ledger view
│   │   ├── Register.jsx        # User registration view
│   │   └── Sales.jsx           # Sales ledger view
│   ├── router/
│   │   ├── AppRouter.jsx       # Application route definitions
│   │   └── PrivateRouter.jsx   # Protected route guard
│   ├── utils/
│   │   └── kpiMetrics.js       # Pure financial aggregation helpers for KPIs
│   ├── App.jsx
│   └── main.jsx
├── test/
│   └── kpiMetrics.test.js      # Automated unit tests (Node.js test runner)
├── .env.example                # Environment variable template
├── LICENSE                     # MIT License
└── ROADMAP.md                  # Planned 25+ hour development roadmap
```

## Getting Started

### Prerequisites
- Node.js (v18+ or v20+ recommended)
- npm or yarn

### Installation & Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/Umutplvn/Stock_App_Client.git
   cd Stock_App_Client
   ```
2. Copy the environment variable template:
   ```bash
   cp .env.example .env
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the Vite development server:
   ```bash
   npm run dev
   ```

### Running Tests & Production Build
```bash
npm test
npm run build
```

## Planned Work & Roadmap
See [ROADMAP.md](./ROADMAP.md) for the full 25+ hour engineering roadmap, including:
- Date-range analytics filtering, low-stock threshold alerts, and category profit margin breakdowns
- DataGrid CSV/JSON export and bulk inventory operations
- RTK Query / `createAsyncThunk` refactoring with optimistic UI updates
- Incremental TypeScript migration and expanded test coverage

## License
Distributed under the **MIT License**. See [LICENSE](./LICENSE) for details.
