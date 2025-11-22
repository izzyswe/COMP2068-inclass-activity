# COMP2068-inclass-activity

#  My Travel Journal In-class Activity (VITE + REACT )
### (All CSS Styling is Included, Follows BEM Methodology)

## PURPOSE & PREREQUISITE
Objective is help you understand and familiarize yourself in the react ecosystem, 


### By The End You Will Learn How:
- Components are built
- Props work/What it solves
- React Hooks such as useState is used
- Make your own React Travel Journal Application!

#### WHAT YOU WILL NEED:
- NPM Package Manager 
- Git 
- Visual Studio Code
	- Extensions Include:
			- ESLint
			- ES7 React
			- Prettier - Code formatter
			- VSCode React Refactor
			- Auto Rename Tag
You have 2 ways, manually or install the empty template

# MANUAL SETUP
## Step 1 - Create a Vite Project
**To Create a Vite Project, Use the following NPM command**
`npm create vite@latest`
*(for breakdown, we are saying "npm" = from the NPM library, "create vite" = create a vite project, "@latest" = Using the latest production version currently out)*

## Step 2 - Follow the Wizard
A CLI wizard will appear:
<pre>
> npx
> "create-vite"
│
◆  Project name:
│  vite-project
└ <| Project Name |>
</pre>
- Type: my-travel-journal, then Enter
(ITS IMPORTANT ALL SHOULD BE LOWERCASE)

**It will ask to select a framework**
<pre>
◆  Select a framework:
│  ○ Vanilla
│  ○ Vue
│  ● React
│  ○ Preact
│  ○ Lit
│  ○ Svelte
│  ○ Solid
│  ○ Qwik
│  ○ Angular
│  ○ Marko
│  ○ Others
</pre>
- You will use the arrow key to go to React and click Enter

**It will ask to select variant**
<pre>
◆  Select a variant:
│  ● TypeScript
│  ○ TypeScript + React Compiler
│  ○ TypeScript + SWC
│  ○ JavaScript
│  ○ JavaScript + React Compiler
│  ○ JavaScript + SWC
│  ○ React Router v7 ↗
│  ○ TanStack Router ↗
│  ○ RedwoodSDK ↗
│  ○ RSC ↗
│  ○ Vike ↗
└
</pre>
- Use your arrow key to go to Javascript and click Enter

**It will ask if we want to use rolldown-vite**
<pre>
◆  Use rolldown-vite (Experimental)?:
│  ○ Yes
│  ● No
└
</pre>
Use the arrow key and select No

**(OPTIONAL) Will ask if you want it to npm install for you and run it**
<pre>
◆  Install with npm and start now?
│  ● Yes / ○ No
└
</pre>
If you pick yes, Use Ctrl + c to exit/stop running
if you pick No, the following will appear instructing you what to do
<pre>
◇  Scaffolding project in /Users/xyz.isx/Documents/test...
│
└  Done. Now run:

  cd <| Project Name |>
  npm install
  npm run dev
</pre>
The File Structure will look as the following:
<pre>
public
  └ vite.svg
src
  assets
  │ └ react.svg
  │ App.css
  │ App.jsx
  │ index.css
  └ main.jsx
  .gitignore
  eslint.config.js
  index.html
  package.json
  README.md
  vite.config.js
</pre>