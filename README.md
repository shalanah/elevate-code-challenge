# Elevate Code Challenge

Hi all! 👋

Welcome to my code challenge!

I hope you enjoy this project as much as I did creating it!

## Description

#### Files

- [Prompt (pdf)](./Practical%20Coding%20Assessment%20-%20Front%20End.pdf)
- [Mock design (figma)](https://www.figma.com/design/qFSk8W8TOyPBoH5g9ih0wQ/Elevate-Brainstorming?node-id=0-1&t=azpTq42LRuUgFMvU-1)

#### Video + Screenshots

##### Happy Path

https://github.com/user-attachments/assets/59813b11-7b37-4eb5-82ac-f7ae43adc4a6

##### Users - responsive

https://github.com/user-attachments/assets/f98486a8-37dc-47e0-afde-dd06617d18bd

##### Users - loading
<img width="898" alt="users-skeleton" src="https://github.com/user-attachments/assets/2ea5c767-ece8-475f-8924-e680212f602d">

##### Users - error
<img width="897" alt="users-error" src="https://github.com/user-attachments/assets/3878b168-1de7-4325-acbc-bdd300b0f905">

##### Users - loaded
<img width="896" alt="users-loaded" src="https://github.com/user-attachments/assets/4cfbacbd-8825-4ef4-b8a3-32eda9b51f42">

##### User details - loading
<img width="1057" alt="user-loading" src="https://github.com/user-attachments/assets/28c31172-085e-4a6b-9abf-05e50d1536bb">

##### User details - error
<img width="838" alt="user-error" src="https://github.com/user-attachments/assets/0e1cdd1b-5d6a-40f1-b98f-88df2accaf4d">

##### User details - loaded
<img width="823" alt="user-loaded" src="https://github.com/user-attachments/assets/ddfa5faa-e9f2-4c1d-9530-076455bc9480">


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
- Double check everything on mobile phone
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
