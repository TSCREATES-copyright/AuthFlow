<div align="center">

<br />

```
█████╗ ██╗   ██╗████████╗██╗  ██╗███████╗██╗      ██████╗ ██╗    ██╗
██╔══██╗██║   ██║╚══██╔══╝██║  ██║██╔════╝██║     ██╔═══██╗██║    ██║
███████║██║   ██║   ██║   ███████║█████╗  ██║     ██║   ██║██║ █╗ ██║
██╔══██║██║   ██║   ██║   ██╔══██║██╔══╝  ██║     ██║   ██║██║███╗██║
██║  ██║╚██████╔╝   ██║   ██║  ██║███████╗███████╗╚██████╔╝╚███╔███╔╝
╚═╝  ╚═╝ ╚═════╝    ╚═╝   ╚═╝  ╚═╝╚══════╝╚══════╝ ╚═════╝  ╚══╝╚══╝
```

<br />

**AuthFlow — Reusable Frontend Authentication Infrastructure for React**

<br />

[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge)](./LICENSE)
[![Zero Backend](https://img.shields.io/badge/Backend-Zero%20Required-F97316?style=for-the-badge&logo=databricks&logoColor=white)]()
[![Local First](https://img.shields.io/badge/Storage-Local%20First-A855F7?style=for-the-badge&logo=databricks&logoColor=white)]()
[![Author](https://img.shields.io/badge/Author-%C2%AETSCREATES-E11D48?style=for-the-badge)]()

<br />

> **Stop rebuilding authentication from scratch on every project.**
> AuthFlow is a drop-in, local-first auth infrastructure layer for React — complete with session persistence, global state, input validation, and a full toast notification system. No backend. No APIs. No excuses.

<br />

---

</div>

<br />

## 📖 Table of Contents

- [🧠 What Is AuthFlow?](#-what-is-authflow)
- [💥 Why This Exists](#-why-this-exists)
- [🎯 Who It's For](#-who-its-for)
- [✨ Core Features](#-core-features)
- [🧱 System Architecture](#-system-architecture)
- [🔄 How It Works](#-how-it-works)
- [📂 Project Structure](#-project-structure)
- [📸 Interface Preview](#-interface-preview)
- [⚡ Quick Start](#-quick-start)
- [📊 Example Flow (End-to-End)](#-example-flow-end-to-end)
- [🧩 Tech Stack](#-tech-stack)
- [🔁 Why AuthFlow Is Reusable](#-why-authflow-is-reusable)
- [⚙️ Configuration & Customization](#️-configuration--customization)
- [🔌 Integration Pattern](#-integration-pattern)
- [🆚 Before vs After AuthFlow](#-before-vs-after-authflow)
- [🚫 Why Not Firebase or Auth0?](#-why-not-firebase-or-auth0)
- [🧪 Common Use Cases](#-common-use-cases)
- [⚠️ Known Constraints](#️-known-constraints)
- [🗺️ Roadmap](#️-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👤 Author](#-author)

<br />

---

<br />

## 🧠 What Is AuthFlow?

AuthFlow is **not** a login form.

It is a **complete, modular, frontend authentication infrastructure system** — engineered to be dropped into any React application and work immediately, with no backend, no third-party services, and no additional configuration.

Every project needs authentication. Most developers build it from scratch — every single time. AuthFlow eliminates that cycle permanently.

<br />

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   AuthFlow = Auth Logic  +  Session Persistence  +  Global State   │
│              + Input Validation  +  UX Feedback  +  Reusable UI    │
│                                                                     │
│   All local. All modular. All yours.                                │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

<br />

**What you get out of the box:**

| Module | What It Does |
|---|---|
| 🔐 `authService` | Login, signup, logout, session creation |
| 💾 `storageService` | localStorage abstraction — read, write, clear |
| ✅ `validationService` | Email, password, and username rules |
| 🔑 `crypto` | Password hashing and verification (simulation) |
| 🌐 `AuthContext` | Global auth state — user, isAuthenticated, loading |
| 🪝 `useAuth()` | Clean hook access — no direct context coupling |
| 🔔 Toast System | Custom notification engine — success, error, info |
| 🎨 UI Components | AuthContainer, LoginForm, SignupForm, Input, Button, Card |

<br />

---

<br />

## 💥 Why This Exists

Every frontend developer has lived through this:

<br />

**Project 1** — You build a login form. Wire up state. Add validation. Handle errors. Add feedback messages. Persist the session. Get it working. Ship it.

**Project 2** — You start fresh. Build the login form again. Wire up state again. Add validation again. Handle errors again. Slightly differently than before.

**Project 3** — You copy-paste from Project 1. Things are inconsistent. Naming is wrong. Structure doesn't match. You refactor. You waste time. Again.

<br />

This is the **authentication rebuild loop** — and it costs developers hours on every new project.

<br />

AuthFlow exists to break that cycle.

<br />

```
THE PROBLEM                       THE SOLUTION
─────────────────────────         ──────────────────────────────
❌ Rebuilding auth from scratch   ✅ Drop-in reusable auth system
❌ Inconsistent form validation   ✅ Centralized validationService
❌ No UX feedback (alerts, hacks) ✅ Full toast notification engine
❌ Session lost on page reload    ✅ localStorage-backed persistence
❌ Backend dependency for MVP     ✅ Fully local-first, zero backend
❌ Scattered state management     ✅ Single AuthContext source of truth
❌ Tight component coupling       ✅ Layered service-based architecture
```

<br />

---

<br />

## 🎯 Who It's For

AuthFlow is purpose-built for:

<br />

**🧑‍💻 Frontend Developers**
Who need a structured, production-grade auth layer without building one from scratch on every project.

**⚡ React + Vite Developers**
Who want a modern, TypeScript-first auth system that fits naturally into their existing stack.

**🚀 Indie Hackers & Solo SaaS Builders**
Who need to ship an MVP fast — with real auth behavior — before wiring up a backend.

**🔧 Internal Tool Builders**
Creating dashboards, admin panels, or internal platforms where simple auth is required but full backend auth is overkill.

**🧪 Rapid Prototypers**
Who want to demo a working, authenticated experience without setting up servers, databases, or third-party services.

**📦 Component Library Authors**
Who want to ship reusable auth UI alongside their component system.

<br />

---

<br />

## ✨ Core Features

<br />

### 🔐 Complete Authentication Loop

> **What it does:** Handles the full auth lifecycle — signup → login → session → restore → logout — as a single, coherent system.

> **Outcome:** You never touch raw localStorage auth logic again. One system. Consistent behavior. Every project.

<br />

### 💾 Local-First Session Persistence

> **What it does:** Stores authenticated users and active sessions in `localStorage` using `storageService` — a typed abstraction with error safety built in.

> **Outcome:** Sessions survive page reloads without a single API call. Users stay logged in across browser sessions, instantly.

<br />

### 🌐 Global Auth State Engine (AuthContext)

> **What it does:** Provides a single source of truth for `user`, `isAuthenticated`, and `loading` state — shared across every component in the application tree.

> **Outcome:** Any component can know who's logged in, whether they're authenticated, and what's loading — without prop drilling or state duplication.

<br />

### ✅ Input Validation Layer (validationService)

> **What it does:** Runs email format checks, password length and complexity rules, and optional username validation — completely decoupled from the UI.

> **Outcome:** Forms are clean. Validation is consistent. Rules change in one place and apply everywhere.

<br />

### 🔑 Password Hashing Simulation (crypto utility)

> **What it does:** Simulates password hashing (`hashPassword`) and verification (`verifyPassword`) at the utility layer — isolated from all other logic.

> **Outcome:** When you're ready to upgrade to real hashing (bcrypt, Argon2), you swap one file. Nothing else changes.

<br />

### 🔔 Custom Toast Notification System

> **What it does:** A fully custom, zero-dependency notification engine — with `success`, `error`, and `info` types, auto-dismiss timers, vertical stacking, and entry/exit animations.

> **Outcome:** Every auth action has a polished UX response. No browser `alert()`. No hacky inline message states. Just clean, animated feedback that disappears on its own.

<br />

### 🪝 Clean Hook API (useAuth)

> **What it does:** Exposes `login()`, `signup()`, `logout()`, `user`, and `isAuthenticated` through a single hook — abstracting all context coupling from components.

> **Outcome:** Components are portable. The hook is the only interface they need. Switching contexts, testing, or migrating to a real backend requires zero component changes.

<br />

### 🎨 Reusable UI Component System

> **What it does:** Ships with `AuthContainer`, `LoginForm`, `SignupForm`, `Input`, `Button`, and `Card` — all controlled, typed, and state-aware.

> **Outcome:** The UI works immediately and matches the system. No rebuilding forms. No mismatch between components and state logic.

<br />

### ⚡ Zero External Auth Dependencies

> **What it does:** AuthFlow uses only React, Vite, and TypeScript. No Firebase SDK, no Auth0 library, no Clerk, no Supabase client.

> **Outcome:** Your bundle stays lean. Your system stays under your control. No third-party outage breaks your app. No pricing tier limits your usage.

<br />

### 🔄 Deterministic, Synchronous Auth Logic

> **What it does:** All auth operations are synchronous and pure — no async race conditions, no network waterfalls, no retry logic needed.

> **Outcome:** Auth behavior is completely predictable. What you test is what you ship. What you ship is what runs.

<br />

---

<br />

## 🧱 System Architecture

AuthFlow is built on a strict **5-layer architecture** with unidirectional data flow. Every layer has one responsibility and one only.

<br />

```
┌──────────────────────────────────────────────────────────────────┐
│                        UI LAYER                                  │
│         AuthContainer · LoginForm · SignupForm                   │
│         Button · Input · Card · ToastItem                        │
│         (Renders UI, captures input, triggers actions)           │
└────────────────────────────┬─────────────────────────────────────┘
                             │
                             ▼
┌──────────────────────────────────────────────────────────────────┐
│                       HOOKS LAYER                                │
│              useAuth() · useToast() · useSession()               │
│        (Clean API to components, abstracts context usage)        │
└────────────────────────────┬─────────────────────────────────────┘
                             │
                             ▼
┌──────────────────────────────────────────────────────────────────┐
│                      CONTEXT LAYER                               │
│         AuthContext (user, isAuthenticated, loading)             │
│         ToastContext (toasts[], showToast, removeToast)          │
│         (Global state engine, single source of truth)            │
└────────────────────────────┬─────────────────────────────────────┘
                             │
                             ▼
┌──────────────────────────────────────────────────────────────────┐
│                      SERVICE LAYER                               │
│     authService · storageService · validationService · crypto    │
│         (Core business logic, fully isolated, swappable)         │
└────────────────────────────┬─────────────────────────────────────┘
                             │
                             ▼
┌──────────────────────────────────────────────────────────────────┐
│                      STORAGE LAYER                               │
│                    Browser localStorage                          │
│           app_users_v1  ·  app_session_v1                        │
│              (Persistent, typed, error-safe)                     │
└──────────────────────────────────────────────────────────────────┘
```

<br />

**Core Principle:** Data flows down. Actions flow up. Services handle logic. Storage persists state. The UI never touches storage directly.

<br />

---

<br />

## 🔄 How It Works

<br />

### 🆕 Signup Flow

```
SignupForm (user enters email + password)
      │
      ▼
useAuth().signup()
      │
      ▼
AuthContext.signup()
      │
      ▼
authService.signup()
      │
      ├──▶ validationService (check email, password, username rules)
      │
      ├──▶ storageService.getUsers() (check for duplicate email)
      │
      ├──▶ crypto.hashPassword() (hash the password)
      │
      ├──▶ storageService.saveUsers() (persist new user)
      │
      └──▶ storageService.saveSession() (create active session)
      │
      ▼
AuthContext.setUser() → isAuthenticated = true
      │
      ▼
UI re-renders → Dashboard shown
      │
      ▼
Toast: "Account created successfully ✓"
```

<br />

### 🔐 Login Flow

```
LoginForm (user enters email + password)
      │
      ▼
useAuth().login()
      │
      ▼
AuthContext.login()
      │
      ▼
authService.login()
      │
      ├──▶ storageService.getUsers() (load all registered users)
      │
      ├──▶ Find user by email (exact match)
      │
      └──▶ crypto.verifyPassword() (compare hashes)
      │
      ▼
storageService.saveSession() (persist active session)
      │
      ▼
AuthContext.setUser() → isAuthenticated = true
      │
      ▼
UI re-renders → Dashboard shown
      │
      ▼
Toast: "Welcome back ✓"
```

<br />

### 🔁 Session Restore Flow (Cold Start)

```
App loads in browser
      │
      ▼
AuthContext useEffect fires
      │
      ▼
authService.getCurrentUser()
      │
      ├──▶ storageService.getSession() (load stored session)
      │
      └──▶ storageService.getUsers() (resolve user by session.userId)
      │
      ▼
User found? → setUser(user) → isAuthenticated = true → Dashboard
      │
User not found? → setUser(null) → isAuthenticated = false → Login
```

<br />

### 🚪 Logout Flow

```
User clicks Logout on Dashboard
      │
      ▼
useAuth().logout()
      │
      ▼
AuthContext.logout()
      │
      ▼
authService.logout()
      │
      ▼
storageService.clearSession()
      │
      ▼
AuthContext.setUser(null) → isAuthenticated = false
      │
      ▼
UI re-renders → Login screen shown
      │
      ▼
Toast: "You've been logged out"
```

<br />

---

<br />

## 📂 Project Structure

```
authflow/
│
├── src/
│   │
│   ├── auth/
│   │   ├── components/
│   │   │   ├── AuthContainer.tsx       # Shell layout — wraps all auth UI
│   │   │   ├── LoginForm.tsx           # Login form — email + password
│   │   │   └── SignupForm.tsx          # Signup form — email + username + password
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext.tsx         # Global auth state engine
│   │   │
│   │   ├── hooks/
│   │   │   ├── useAuth.ts              # Primary auth hook (login, signup, logout)
│   │   │   └── useSession.ts           # Session bootstrap hook (optional)
│   │   │
│   │   └── services/
│   │       ├── authService.ts          # Core auth logic (signup, login, session)
│   │       ├── storageService.ts       # localStorage abstraction layer
│   │       ├── validationService.ts    # Input validation rules
│   │       └── crypto.ts              # Password hash + verify utilities
│   │
│   ├── ui/
│   │   ├── components/
│   │   │   ├── Button.tsx              # Reusable button — primary, loading, disabled
│   │   │   ├── Input.tsx               # Controlled input — error states, disabled
│   │   │   └── Card.tsx               # Container card — shadow + padding system
│   │   │
│   │   └── toast/
│   │       ├── ToastContext.tsx         # Toast state context
│   │       ├── ToastProvider.tsx        # Global toast provider wrapper
│   │       ├── ToastItem.tsx           # Individual toast component + animation
│   │       └── useToast.ts             # Hook: showToast(), removeToast()
│   │
│   ├── utils/
│   │   ├── crypto.ts                   # Hash and verify utility functions
│   │   └── helpers.ts                  # generateId and other pure helpers
│   │
│   ├── App.tsx                         # Root — auth state → loading/auth/dashboard
│   ├── main.tsx                        # Entry point + provider composition
│   └── vite-env.d.ts
│
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

<br />

---

<br />

## 📸 Interface Preview

<br />

> Screenshots coming soon. Below is the exact screen hierarchy and flow:

<br />

```
┌──────────────────────────────────────────────────────────────┐
│                   [ Loading Screen ]                         │
│                                                              │
│                  Checking session...                         │
│                  ● ● ●                                       │
└──────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────────┐
│                   [ Login Screen ]                           │
│                                                              │
│                      AuthFlow                                │
│                                                              │
│              Email ________________________                  │
│              Password _____________________                  │
│                                                              │
│                   [ Log In → ]                               │
│                                                              │
│            Don't have an account? Sign up                    │
│                                              ┌─────────────┐ │
│                                              │ ✓ Welcome   │ │
│                                              │   back!     │ │
│                                              └─────────────┘ │
└──────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────────┐
│                   [ Sign Up Screen ]                         │
│                                                              │
│                      AuthFlow                                │
│                                                              │
│              Email ________________________                  │
│              Username (optional) __________                  │
│              Password _____________________                  │
│                                                              │
│                [ Create Account → ]                          │
│                                                              │
│             Already have an account? Log in                  │
│                                              ┌─────────────┐ │
│                                              │ ✓ Account   │ │
│                                              │   created!  │ │
│                                              └─────────────┘ │
└──────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────────┐
│                  [ Dashboard Screen ]                        │
│                                                              │
│   AuthFlow App                                               │
│   ─────────────────────────────────────────                  │
│   Welcome back, user@example.com                             │
│                                                              │
│                     [ Logout ]                               │
│                                                              │
│   ─────────────────────────────────────────                  │
│   (your app content goes here)                               │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

<br />

**Toast Notification Stack (top-right, all screens):**

```
                                           ┌──────────────────────┐
                                           │ ✅ Account created!   │
                                           └──────────────────────┘
                                           ┌──────────────────────┐
                                           │ ❌ Email already used │
                                           └──────────────────────┘
                                           ┌──────────────────────┐
                                           │ ℹ️  You've been logged │
                                           │    out                │
                                           └──────────────────────┘
```

<br />

---

<br />

## ⚡ Quick Start

Get AuthFlow running in under 60 seconds.

<br />

### Prerequisites

- Node.js `18+`
- npm or yarn
- React `18+` project (or use AuthFlow standalone)

<br />

### 1. Clone the Repository

```bash
git clone https://github.com/TSCREATES-copyright/AuthFlow.git
cd authflow
```

<br />

### 2. Install Dependencies

```bash
npm install
```

<br />

### 3. Start the Development Server

```bash
npm run dev
```

<br />

### 4. Open in Browser

```
http://localhost:5173
```

<br />

AuthFlow boots instantly. The session check runs on load — if no session exists, the Login screen renders. Create an account via the Signup form and the full auth loop activates immediately.

<br />

---

<br />

## 📊 Example Flow (End-to-End)

This is what happens under the hood from the first keystroke to a fully authenticated session.

<br />

### Step 1 — User Signs Up

**Input:**
```json
{
  "email": "dev@example.com",
  "username": "devuser",
  "password": "SecurePass123"
}
```

<br />

### Step 2 — Validation Runs

```typescript
// validationService.ts

validateEmail("dev@example.com")   // ✅ valid format
validatePassword("SecurePass123")  // ✅ meets length + complexity rules
validateUsername("devuser")        // ✅ within allowed characters
```

<br />

### Step 3 — User Stored in localStorage

```json
// app_users_v1
[
  {
    "id": "usr_a3f9c1b2",
    "email": "dev@example.com",
    "username": "devuser",
    "passwordHash": "a8f3c...hashed",
    "createdAt": "2025-01-01T10:00:00.000Z"
  }
]
```

<br />

### Step 4 — Session Created

```json
// app_session_v1
{
  "userId": "usr_a3f9c1b2",
  "token": "ses_9x7k2m4n",
  "createdAt": "2025-01-01T10:00:05.000Z"
}
```

<br />

### Step 5 — AuthContext Updates

```typescript
// AuthContext state after signup
{
  user: {
    id: "usr_a3f9c1b2",
    email: "dev@example.com",
    username: "devuser"
  },
  isAuthenticated: true,
  loading: false
}
```

<br />

### Step 6 — UI Re-Renders

```
Auth screen → Dashboard (no page reload, state-driven transition)
```

<br />

### Step 7 — Toast Fires

```
✅ "Account created successfully" → auto-dismisses after 3 seconds
```

<br />

### Step 8 — User Logs Out & Back In

```typescript
// Login verification
authService.login("dev@example.com", "SecurePass123")
// → storageService.getUsers() → find by email
// → crypto.verifyPassword(input, storedHash) → ✅ match
// → storageService.saveSession() → new session token
// → AuthContext.setUser() → isAuthenticated = true
// → Toast: "Welcome back ✓"
```

<br />

### Step 9 — Error Handling

```typescript
// Wrong password attempt
authService.login("dev@example.com", "WrongPass")
// → crypto.verifyPassword() → ❌ mismatch
// → throw AuthError: "Invalid credentials"
// → AuthContext catches → sets error state
// → Toast: "Invalid email or password" (error type)
// → Form remains active, no data cleared
```

<br />

### Step 10 — Page Reload: Session Restored

```typescript
// App.tsx mounts → AuthContext useEffect
authService.getCurrentUser()
// → storageService.getSession() → { userId: "usr_a3f9c1b2", ... }
// → storageService.getUsers() → find by userId
// → User resolved → setUser(user)
// → isAuthenticated = true → Dashboard renders immediately
```

<br />

---

<br />

## 🧩 Tech Stack

AuthFlow is intentionally minimal. Every dependency earns its place.

<br />

| Technology | Version | Purpose |
|---|---|---|
| **React** | 18+ | UI rendering + context system |
| **TypeScript** | 5.0+ | Type safety across all layers |
| **Vite** | 5.0+ | Build tooling + dev server |
| **localStorage** | Browser API | Session + user persistence |
| **CSS Modules / Inline** | — | Component-scoped styling |

<br />

**Zero external auth libraries. Zero UI component libraries. Zero state management packages.**

<br />

The entire system — auth logic, state management, notification engine, and UI — is built from first principles using only React primitives and browser APIs.

<br />

---

<br />

## 🔁 Why AuthFlow Is Reusable

This is the most important design decision in the entire system.

<br />

AuthFlow was engineered from day one to be **extracted and dropped into any React application** with minimal friction.

<br />

### What Makes It Portable

**1. Service isolation**
Every service (`authService`, `storageService`, `validationService`) is a standalone module with no hard dependencies on application-specific code. Copy them anywhere. They work.

**2. Swappable storage layer**
`storageService` is an abstraction over `localStorage`. To migrate to `IndexedDB`, `sessionStorage`, or an API, you replace one file. The rest of the system is unaffected.

**3. Swappable auth layer**
`authService` is decoupled from the storage mechanism. When you're ready to upgrade to a real backend, you replace the service implementation. Hooks, context, and UI components change nothing.

**4. Hook-based component interface**
Components only talk to `useAuth()`. They have no knowledge of how the auth system is implemented. Swapping the underlying system is invisible to the UI layer.

**5. Self-contained toast system**
`ToastProvider` is independently portable. Add it to any React app and it works on its own.

<br />

### Reuse Pattern

```
New Project
     │
     ├── /src/auth/           ← copy this directory
     ├── /src/ui/toast/       ← copy this directory
     └── /src/ui/components/  ← copy these primitives
     │
     ▼
Wrap your app in AuthProvider + ToastProvider
     │
     ▼
useAuth() everywhere you need it
     │
     ▼
Done.
```

<br />

---

<br />

## ⚙️ Configuration & Customization

<br />

### Storage Keys

Customize the `localStorage` keys to avoid collisions in multi-app environments:

```typescript
// src/auth/services/storageService.ts

const STORAGE_KEYS = {
  USERS: 'app_users_v1',       // ← rename to your app prefix
  SESSION: 'app_session_v1',   // ← rename to your app prefix
} as const;
```

<br />

### Validation Rules

Adjust password and username requirements in one place:

```typescript
// src/auth/services/validationService.ts

const RULES = {
  password: {
    minLength: 8,          // ← change minimum password length
    requireUppercase: true,
    requireNumber: true,
  },
  username: {
    minLength: 3,
    maxLength: 20,
    allowedPattern: /^[a-zA-Z0-9_]+$/,
  },
  email: {
    // Standard RFC email format — modify if needed
  }
};
```

<br />

### Toast Configuration

Adjust toast duration, position, and animation behavior:

```typescript
// src/ui/toast/ToastProvider.tsx

const TOAST_CONFIG = {
  duration: 3000,        // ← auto-dismiss delay (ms)
  maxVisible: 5,         // ← max simultaneous toasts
  position: 'top-right', // ← adjust to your layout
};
```

<br />

### AuthContext Initial State

```typescript
// src/auth/context/AuthContext.tsx

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: true, // true until session check completes
};
```

<br />

---

<br />

## 🔌 Integration Pattern

Integrating AuthFlow into an existing React application takes under 5 minutes.

<br />

### Step 1 — Copy the Auth Modules

```bash
cp -r authflow/src/auth     your-app/src/auth
cp -r authflow/src/ui/toast your-app/src/ui/toast
cp -r authflow/src/ui/components your-app/src/ui/components
cp -r authflow/src/utils    your-app/src/utils
```

<br />

### Step 2 — Wrap Your App with Providers

```tsx
// your-app/src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './auth/context/AuthContext';
import { ToastProvider } from './ui/toast/ToastProvider';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ToastProvider>
  </React.StrictMode>
);
```

<br />

### Step 3 — Gate Your Routes on Auth State

```tsx
// your-app/src/App.tsx

import { useAuth } from './auth/hooks/useAuth';
import { AuthContainer } from './auth/components/AuthContainer';
import { Dashboard } from './pages/Dashboard';

function App() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <div className="loading">Initializing...</div>;

  return isAuthenticated ? <Dashboard /> : <AuthContainer />;
}

export default App;
```

<br />

### Step 4 — Use Auth Anywhere in Your App

```tsx
// your-app/src/pages/Dashboard.tsx

import { useAuth } from '../auth/hooks/useAuth';

export function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Welcome, {user?.email}</h1>
      <button onClick={logout}>Log Out</button>
    </div>
  );
}
```

<br />

### Step 5 — Trigger Toast Notifications

```tsx
// Anywhere in your component tree

import { useToast } from '../ui/toast/useToast';

export function SomeComponent() {
  const { showToast } = useToast();

  const handleAction = () => {
    showToast({ type: 'success', message: 'Action completed!' });
  };

  return <button onClick={handleAction}>Do Something</button>;
}
```

<br />

---

<br />

## 🆚 Before vs After AuthFlow

<br />

### Before — Without AuthFlow

```
New project.

Week 1:
  ↳ Build a login form
  ↳ Wire up state manually
  ↳ Handle form validation inline
  ↳ Store session in localStorage (ad hoc)
  ↳ Add error messages (inline, inconsistent)
  ↳ No feedback system — use alert() or custom state hacks
  ↳ Auth state scattered across components

Week 2 (next project):
  ↳ Do it all again
  ↳ Copy-paste from last project (broken, inconsistent)
  ↳ Validation rules are different
  ↳ Session logic is slightly wrong
  ↳ Toast system? Too much work. Skip it.

Month 3:
  ↳ 3 apps. 3 different auth implementations.
  ↳ None of them consistent.
  ↳ All of them fragile.
```

<br />

### After — With AuthFlow

```
New project.

Hour 1:
  ↳ Copy /auth, /ui/toast, /ui/components
  ↳ Wrap app in AuthProvider + ToastProvider
  ↳ Call useAuth() where needed

Hour 1.5:
  ↳ Login works
  ↳ Signup works
  ↳ Session persists
  ↳ Toasts fire
  ↳ Validation runs
  ↳ Auth state is global

Rest of the day:
  ↳ Build your actual product
```

<br />

---

<br />

## 🚫 Why Not Firebase or Auth0?

Valid question. Here's the honest answer.

<br />

| Concern | Firebase / Auth0 | AuthFlow |
|---|---|---|
| **Setup time** | 30–60 min (SDK, project, config, env vars) | < 5 minutes |
| **Backend required** | Yes — cloud project, database, rules | No — runs entirely in browser |
| **Cost** | Free tiers with limits; can scale to $$$  | Free. Yours. Forever. |
| **Vendor lock-in** | High — data lives in their system | None — data lives in your browser |
| **Offline support** | Limited or none | Full — localStorage works offline |
| **Bundle size** | Firebase Auth SDK: ~100kb+ gzipped | Near zero — no SDK |
| **Customization** | Constrained by SDK and service rules | Complete — you own every line |
| **Upgrade path** | You are the upgrade path | Swap `authService` when ready |
| **Right for MVP?** | Often overkill | Built exactly for this |

<br />

**Use Firebase or Auth0 when:**
- You need multi-device session sync
- You need real security (production user data)
- You need OAuth providers (Google, GitHub)
- You have a deployed backend

**Use AuthFlow when:**
- You're building an MVP, prototype, or internal tool
- You need auth working in under an hour
- You don't want backend dependency for a frontend-first product
- You want a reusable system that travels with you across projects

<br />

---

<br />

## 🧪 Common Use Cases

<br />

**Rapid MVP Prototyping**
Build a working authenticated experience in under an hour. Demonstrate the full user journey — signup, login, session, dashboard — to stakeholders or early users, with no backend required.

<br />

**Internal Dashboard Tools**
Company internal tools often need simple auth but don't justify a full backend auth stack. AuthFlow provides the lock without the overhead.

<br />

**Design System Showcasing**
Ship a design system with a working auth flow baked in. Designers and product managers can interact with a real authenticated state, not a static mockup.

<br />

**Frontend-Only SaaS Demo**
Present a SaaS product concept — complete with login, personalized dashboard, and session — before a single line of backend code is written.

<br />

**Learning Projects**
Teach or learn modern React architecture — hooks, context, service layers, modular design — through a real, working, non-trivial system.

<br />

**Offline-First Applications**
Build apps that work with no network connection. AuthFlow's localStorage-first model means auth works regardless of connectivity.

<br />

**Hackathon Starter**
Start every hackathon with auth already implemented. Use the saved hours to build your actual differentiator.

<br />

---

<br />

## ⚠️ Known Constraints

AuthFlow is honest about what it is and what it is not.

<br />

```
┌─────────────────────────────────────────────────────────────────┐
│  AuthFlow is a DEVELOPMENT and PROTOTYPING authentication system │
│  It is NOT intended for production use with real user data       │
└─────────────────────────────────────────────────────────────────┘
```

<br />

**Security Limitations**

- `localStorage` is accessible via JavaScript — XSS attacks can read it
- Password hashing is simulated — not a real cryptographic implementation
- No HTTPS enforcement, no CSRF protection, no session expiry
- No rate limiting on login attempts

**Scope Limitations**

- Single-device only — no cross-device session sync
- No cloud persistence — data is browser-local
- No OAuth providers — no Google, GitHub, or social login
- No email verification — signups are immediate and unverified
- No password reset — forgot password flow is not included
- No JWT — sessions are custom tokens without standard claims

<br />

**AuthFlow is the right tool for:**
Prototypes, MVPs, internal tools, demos, hackathons, and learning projects.

**AuthFlow is not the right tool for:**
Production applications handling real user credentials, sensitive data, or financial information.

<br />

---

<br />

## 🗺️ Roadmap

AuthFlow is designed to evolve. Here's the planned direction:

<br />

### Phase 7 — Role-Based Access Control
- User roles (admin, user, guest)
- Permission layer per route and component
- `usePermission()` hook for declarative access checks
- `<AuthGuard role="admin">` component wrapper

<br />

### Phase 8 — Backend Adapter Layer
- `authService` swappable adapter pattern
- Drop-in REST API auth mode
- JWT support (issue, verify, refresh)
- Environment-based switching (local vs remote)

<br />

### Phase 9 — Theme System Integration
- Light/dark mode toggle baked into auth UI
- CSS custom property theming layer
- Branded color scheme support
- Component-level theme overrides

<br />

### Phase 10 — Multi-Session Support
- Multiple concurrent user profiles
- Session switching without logout
- Per-session storage namespacing
- User switcher UI component

<br />

### Phase 11 — Advanced Auth Features
- Password reset simulation (local token flow)
- Email verification simulation (code-based)
- Session expiry + automatic logout
- Remember me (persistent vs session-scoped)

<br />

### Phase 12 — Developer Tooling
- AuthFlow CLI for scaffolding into existing projects
- Storybook integration for component preview
- Vitest test suite for all service modules
- Comprehensive JSDoc across all exported APIs

<br />

---

<br />

## 🤝 Contributing

Contributions are welcome. AuthFlow is designed to remain lean, modular, and dependency-free — please keep that philosophy in mind.

<br />

### Getting Started

```bash
# Fork the repo, then:
git clone https://github.com/YOUR_USERNAME/AuthFlow.git
cd authflow
npm install
npm run dev
```

<br />

### Contribution Guidelines

- **Keep it modular.** Every change should respect the 5-layer architecture. No business logic in the UI. No storage calls outside `storageService`.
- **Keep it dependency-free.** Do not introduce external libraries without a clear, documented reason.
- **Keep it typed.** TypeScript is non-negotiable. All new code must be fully typed.
- **Keep it predictable.** Auth logic should remain synchronous and deterministic wherever possible.

<br />

### Opening a Pull Request

1. Fork the repository
2. Create a branch: `git checkout -b feature/your-feature-name`
3. Make your changes with clear, purposeful commits
4. Ensure the project builds: `npm run build`
5. Open a pull request with a clear description of what changed and why

<br />

### Reporting Issues

Found a bug? Missing a feature? Open an issue with:
- What you expected to happen
- What actually happened
- Steps to reproduce

<br />

---

<br />

## 📄 License

```
MIT License

Copyright (c) 2025 ®TSCREATES

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

<br />

---

<br />

## 👤 Author

<br />

<div align="center">

<br />

**®TSCREATES**

*Frontend Infrastructure Engineer · React Systems Architect · Developer Tooling*

<br />

[![GitHub](https://img.shields.io/badge/GitHub-%C2%AETSCREATES-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/TSCREATES-copyright)
[![X / Twitter](https://img.shields.io/badge/X-%C2%AETSCREATES-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/TSCREATES)

<br />

*Built with intention. Designed for reuse.*

<br />

</div>

---

<br />

<div align="center">

<br />

**AuthFlow** — Stop rebuilding auth. Start shipping products.

<br />

[![⭐ Star this repo](https://img.shields.io/badge/⭐%20Star%20This%20Repo-FFDD00?style=for-the-badge)](https://github.com/TSCREATES-copyright/AuthFlow)
[![🔁 Reuse It](https://img.shields.io/badge/🔁%20Reuse%20It-22C55E?style=for-the-badge)]()
[![📤 Share It](https://img.shields.io/badge/📤%20Share%20It-3B82F6?style=for-the-badge)]()

<br />

*Made by **®TSCREATES***

<br />

</div># AuthFlow
