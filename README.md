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

##### Users - responsive

##### Users - loading

##### Users - error

##### Users - loaded

##### User details - loading

##### User details - error

##### User details - loaded

#### Features

- Grab data from an API
  - In a hook using react-query
- Display users `(/)`
  - Responsive grid
  - All the info is in one call, might as well show more details before clicking into.
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

#### Things I would add / improve

- Separate react-query into multiple calls - so it could be more performant when coming to a single user page
- Add retry logic on error on calls that fail
- More fun hover animation of user item
- Add filtering + sorting
- Add grid + list view
- Add storybook + tests
- A round of accessibility improvements
- A round or two of code cleanup

## Running

- Update `.env` file with the correct values
- `nvm use`
- `pnpm install`
- `pnpm dev`

## Tech used

- React, TS, VIte
- Tailwind CSS, Styled-components, React Icons, Radix UI
- React Query, React Router
