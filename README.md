# React + TypeScript Starter Guide

A hands-on guide to using TypeScript in a React project — from setup to typing components, props, hooks, and events. Built with Vite.

## Why this repo?

React works with plain JavaScript out of the box, but TypeScript catches bugs early, improves autocomplete, and makes refactors safer. This repo walks through the patterns you'll actually use, with working examples — including a small chai-ordering app to demonstrate typed props, state, and events in practice.

## Getting Started

git clone <your-repo-url>
cd <repo-name>
npm install
npm run dev

## What's covered

- Setting up TypeScript in a React + Vite project
- Typing component props (`interface` vs `type`)
- Typing state (`useState<T>`)
- Typing event handlers (`React.ChangeEvent`, `React.FormEvent`, etc.)
- Typing custom hooks
- Shared types in a central `types.ts` file
- Common mistakes and how to avoid them

## Components

- **Card.tsx** — generic reusable card wrapper
- **ChaiCard.tsx** — displays a single chai item
- **ChaiList.tsx** — renders a list of `ChaiCard` components
- **Counter.tsx** — simple typed counter using `useState<number>`
- **OrderForm.tsx** — typed form for placing a chai order, demonstrates event typing and controlled inputs

## Project Structure

src/
├── components/
│ ├── Card.tsx
│ ├── ChaiCard.tsx
│ ├── ChaiList.tsx
│ ├── Counter.tsx
│ └── OrderForm.tsx
├── hooks/
├── App.tsx
├── main.tsx
├── types.ts
├── App.css
└── index.css
index.html
vite.config.ts
tsconfig.json
package.json

## Scripts

npm run dev # start dev server
npm run build # production build
npm run preview # preview production build

## Requirements

- Node.js 18+
- npm
