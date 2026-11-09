# Stock Management & ERP Analytics Client (`Stock_App_Client`) — Engineering Roadmap (25+ Hours Planned Work)

This document outlines the planned engineering backlog and upcoming feature development for **Stock_App_Client**.

## 1. Advanced Inventory Analytics & Forecasting Dashboard (~7 hours)
- [ ] Add date-range filtering (7d, 30d, 90d, YTD, Custom) to `Charts.jsx` and `KpiCards.jsx`.
- [ ] Implement low-stock threshold alerts and automated reorder recommendations on the Dashboard and Products views.
- [ ] Add category-level profit margin breakdown and top-performing brand/supplier analytics cards.

## 2. DataGrid Export, Bulk Operations & Barcode Search (~6 hours)
- [ ] Add CSV and JSON export utilities for `ProductTable`, `PurchaseTable`, and `SaleTable`.
- [ ] Implement multi-row batch actions (bulk category assignment, bulk deletion with confirmation modal).
- [ ] Add instant SKU/barcode search and multi-column filter presets persisted in URL query parameters.

## 3. Optimistic UI Updates & Offline Queueing (~5 hours)
- [ ] Refactor `useStockCall.jsx` and `stockSlice.jsx` to use Redux Toolkit `createAsyncThunk` / RTK Query with optimistic UI updates and automatic cache invalidation.
- [ ] Remove legacy `useStockCall_old.jsx` and standardize error boundary handling across all CRUD modals (`BrandModal`, `FirmModal`, `ProductModal`, `PurchaseModal`, `SaleModal`).

## 4. TypeScript Migration & Automated Test Suite (~7 hours)
- [ ] Incrementally migrate Redux slices (`authSlice`, `stockSlice`), custom hooks (`useAxios`, `useStockCall`), and data table components from JSX to strict TypeScript (`.tsx`).
- [ ] Expand automated unit and integration tests covering KPI financial aggregations, Formik/Yup validation schemas, and Redux state transitions.
