# BeersQA

Beers made with React Hooks + Redux and Parcel.

- **React Hooks:** to define all styled components
- **Redux:** in order to create a store to locate all users and filter settings
- **Testing:** to be done (unit testing, integration tests, e2e test using cypress)

## Functions to be completed

All functions are returning dummy objects in order to allow you test the whole app in case you cannot complete some exercices

### Pagination

(in utils/pagination)
export const getNumPages = ({ totalElements, elementsPerPage })
export const generatePageNumbers = ({ actualPage, numPages, maxNumShowedPages})

### Calendar

(in utils/filters)
export const getMinBrewedDate = (beers = [])
export const getMaxBrewedDate = (beers = [])
export const getBeersByBrewedFromTo = ({ beers = [], brewedFrom, brewedTo })

## Installation

- npm install

## Build

- npm run dev

## Test

- Make sure you have the Redux Dev Tools Chrome Extension `(https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?)hl=es)` installed otherwise the app wouldn't run when hitting `localhost:1234`  

- You will have to manually install the Redux Dev Tools on the Cypress Chrome instance too, otherwise the site won't load either.

- I tried installing a package to sort this out, but given I'm on Windows that solution wouldn't work on different computers:
I checked the following articles:

  - `https://selleo.com/til/posts/rvajzbhbww-loading-react-redux-dev-tools-in-cypress`
  - `https://www.cypress.io/blog/2020/01/07/how-to-load-the-react-devtools-extension-in-cypress/`

With more time I would have probably found a way to make this work, but for the sake of completing the exercise in a timely manner I'd say install the plugin manually on the Cypress Chrome instance.

UPDATE:

By following the instructions here:   
- `https://www.cypress.io/blog/2020/01/07/how-to-load-the-react-devtools-extension-in-cypress/`

I managed to pick up the extension from my local repo instead of having to manually install it.

### Running the tests

- run `npm run dev & npm run cypress:open` this will have the web server running at the same time as the Cypress UI opens and you can run the tests.

NOTE: Headless mode won't work because it won't have the Redux Dev Tools and the tests will fail

### Approach

I chose to use a Page Object Model kind of approach as we had discussed the benefits of it during the interview.

The way I did this was to create a file per component in the pageobjects folder and imported them into support/index.js

 `(calendar.js, beerCards.js, pagination.js)` 

and I added the different relevant selectors and contextually relevant functions in said files. Notice that any spec file will have access to all page objects which is not ideal, but it can be useful if you wish to write more integration-style-tests.me I would have probably found a way to make this work, but for the sake of completing the exercise in a timely manner I'd say install the plugin on the Cypress Chrome instance.

Under the e2e folder you will find the 3 Spec files matching the previously mentioned Page Object files

## Design

[VIEW PROJECT DESIGN (made with Adobe XD)](https://xd.adobe.com/view/d76ecc87-9ad3-47c0-6c0e-fb4a9bac3099-a15f/).

You can interact with the app. If you click on a non-iteractable item all interactable items will be highlitedd

## Components

All components haves their own test. Unit, Integration and Snapshot.
Also commented its functionality in test file.
PropTypes included and default props.

## User Stories

User can load and view all data from url.
User can apply filters to data (brewed date)
User can change page to view more beers

## Dev Dependencies

- **Prettier:** to make styled code in a beautiful way
- **parcel-plugin-react-svg:** to load awesome svg files

### License

React is [MIT licensed](./LICENSE).
