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

## Step 3 - Remove Unnecessary Files
- remove the following files;
	- react.svg
	- index.css (Typically index.css is used for global styling but we are not worried about that)
	- vite.svg

Go to App.css and Erase the content inside as we have CSS that we will use
Go to Main.jsx and delete the following line `import './index.css'` as we will only need App.css

## Step 4 - Add The Following Folders/Files/Code
- Copy CSS -> Link
- Paste the copied CSS into App.css
- Add a Folder inside src/, Name is components (This is where all of our components will live)
- inside components/, You will add the following files
		- Header.jsx
		- Entry.jsx

## Step 5 - Delete The Following code from the App.jsx
      `<div>
        <a href="https://vite.dev/" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev/" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>`

## Step 6 - In the entry.jsx copy the code below:
    `export default function Entry(props){
    return(
        <div className="card">
            <div className="card__img">
                <img src={props.img} alt={props.title} />
            </div>
            <div className="card__content">
                <div className="card__content-location">
                    <img src="../assets/location-icon.svg"/>
                    <p>{props.country}</p>
                    <a href={props.mapUrl}>View on Google Maps</a>
                </div>
                <div className="card__content-info">
                    <h1>{props.title}</h1>
                    <h2>{props.date}</h2>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
    }`

## Step 7 - Add the following code to your App.jsx:
import './App.css'
import Header from "./components/Header"
import Entry from "./components/Entry"

    function App() {

    return (
        <>
        <Header />
        <Entry />
        </>
     )
    }

export default App

## Step 8 - Download the pictures that are in the Src -> assets -> places:

- Create a folder named "places" inside your assets folder
- Download the images that are provided in the repo above, or choose your own
- Put all of them in the "places" folder you have just created
- Images should be named only using *Lower Case* letters

## Step 9 - Modify the Entry.jsx file - Copy the code below:
    `export default function Entry(props){
        return(
            <div className="card">
                <div className="card__img">
                    <img src={props.img} alt={props.titleImg} />
                </div>
                <div className="card__content">
                    <div className="card__content-location">
                        <img src="../assets/location-icon.svg"/>
                        <p>{props.country}</p>
                        <a href={props.mapUrl}>View on Google Maps</a>
                    </div>
                    <div className="card__content-info">
                        <h1>{props.title}</h1>
                        <h2>{props.date}</h2>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        );
    }`

## Step 10 - Import the components and create the Entries:

## Import the images, make sure to name the import statements using capital letters: 
```javascript
import Cancun from "./assets/places/cancun.png"
import La from "./assets/places/la.png"
import Paris from "./assets/places/paris.png"
import Toronto from "./assets/places/toronto.png"
```
# Now, inside the App function you will add the Entries as follows:
```jsx
function App() {

    return (
        <>
        <Header />
        <Entry
            img={Cancun} 
            titleImg="cancun picture"
            country="Mexico"
            mapUrl="https://shorturl.at/2tr7F"
            title="Mexico - Cancun"
            date="01-01-25"
            description="Resort" />
        <Entry
            img={La}
            titleImg="Los Angles picture"
            country="USA"
            mapUrl="https://shorturl.at/E6Y2P"
            title="Los Angles - California"
            date="01-01-25"
            description="City of Angles" />
        <Entry
            img={Paris}
            titleImg="Paris"
            country="France"
            mapUrl="https://shorturl.at/rxh3Q"
            title="France - Paris"
            date="01-01-25"
            description="Fashion City" />
        <Entry
            img={Toronto} 
            titleImg="Canada - Toronto"
            country="Canada"
            mapUrl="https://shorturl.at/IBURc"
            title="Ontario - Toronto"
            date="01-01-25"
            description="Toronto" />
        </>
    )
}
```

## Make sure you change the URL's in case you are are using different locations

- Run the application using `npm run dev`
