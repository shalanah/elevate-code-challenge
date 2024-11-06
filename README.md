# Elevate Code Challenge

Hi all! 👋

Welcome to my code challenge!

When working on a code challenge, I focus on optimizing fun and learning.

I hope you enjoy this project as much as I did creating it!

## Description

#### Files

- [Prompt (pdf)](./Practical%20Coding%20Assessment%20-%20Front%20End.pdf)

- [Mock design (figma)](https://www.figma.com/design/qFSk8W8TOyPBoH5g9ih0wQ/Elevate-Brainstorming?node-id=0-1&t=azpTq42LRuUgFMvU-1)

#### Video + Screenshots

TODO

#### Features

- Grab data from an API
  - In a hook using react-query
  - Next: Separate into multiple calls
  - Next: Add retry logic on error
- Display users `(/)`
  - We get all the info in one call about the user. Might as well show more details before clicking into.
    - Image
    - Name
    - Streak
    - Sessions
    - Mini graph
    - Skeleton view while loading
- Display one user `(/:id)`
  - Shows in a modal
  - Added simple routing
  - Image
  - Name
  - Streak
  - Sessions
  - Graph with info and animations
  - Very basic skeleton view while loading

## Running

- Update `.env` file with the correct values
- `nvm use`
- `pnpm install`
- `pnpm dev`

## Tech used

- React, TS, VIte
- Tailwind CSS, Styled-components, React Icons, Radix UI
  - I'm new to Tailwind this year. I selected it to get more practice but fell back to styled-components for the sake of time
- React Query, React Router
  - I considered Next.js but wanted to try out React Query again
