# Frontend Developer Challenge

Welcome to the uberall frontend challenge. Your task will be to implement a local business online status check - one of the core features that Uberall is offering.

## The Rules

This is not a quiz! As much as we are interested in knowing what a great developer you are, we want to work with you in a team based manner, as we would on an average day in the uberall office. This means that you should feel free to ask any question at any time, if you need clarification on any aspect of this challenge or if you felt stuck with a specific question.

We are providing a repository with a minimal react starter-kit (more on it [here](#boilerplate)) to _hopefully_ help you get to the heart of the matter and focus on the actual task rather than on the setup. You have to fork the repository and open a pull request for an easier review of your work.~~ ([handover](#handover) steps)  
If you do not wish to use the boilerplate, feel free not to, if you are more comfortable with a tool of your own.

## The Challenge

On our website we have a status report page, (https://uberall.com/en/check), where a user can enter the Name, Street + Number, and ZIP code of a business, and will receive a report of how that business appears in all the online directories that uberall supports (try it!). Your task is to implement a new status report page, using our own API.

In a web page, you should implement the following:

1. An input form where the user can input the following:

- - Country
- - Business Name
- - Street and Street Number
- - ZIP code

2. The results of the user’s status report. Provided are logos for each directory.
3. The status check should work with different locations/countries. Here is the location that we use for our tests: 

- - Einstein Cafe, Unter den linden 42, 10117

But you should feel free to play around and test other locations too. Pay attention to the API response/UI - why is it different?

- Uberall (Uberall, Hussitenstr 32-33, 13355)
- Try your favorite bar!
- Try locations in other countries

Bonus things to think about:

- The SearchData object contains a `shortUrl` property.
- - What do you think this does?
- - How could you use it, if you also controlled the page it links to?
- How could it be architected in a way that a customer could easily implement it into their own website/CMS?
- Does the API make sense to you? Is it clear? Would you make any changes?

The page should poll the API with the entered data, then display it on the page.

### Using the API:

- API Docs:
- - Overview and examples:
- - - https://uberall.com/en/developers/presenceChecks
- - Endpoint documentation:
- - - https://uberall.com/en/developers/apiDocumentation?language=en#_api_search-POST
- - - https://uberall.com/en/developers/apiDocumentation#_api_search__id-GET
- - Response Object documentation:
- - - https://uberall.com/en/developers/resources#SearchData
- - - https://uberall.com/en/developers/resources#BasicListing
- API Usage
- - Dev server
- - - All API calls should be sent to
- - - https://sandbox.uberall.com/api/$ENDPOINT, our development server (e.g. https://sandbox.uberall.com/api/search).
- - publicKey
- - - All requests should include the following `publicKey`:
- - - GNpPyrkYiTS5BV4F8XckW3kYurprwSk7cRG3Z4jOtrTTBceyfPveAOvDFk3mYY0ofundf (included in the boilerplate)

- Useful files
- - In the repo, you will find inside `src/data` three useful files for the task:
- - - A mapping of countries we support to the third party directories per country
- - - A mapping of two-letter country code to its full name (optional)
- - - Logo images for each third party directory (optional)

### Boilerplate

The starter-kit provides a minimal setup for a React application. It comes with support for LESS, that we use in our application, but it is not a requirement. FYI, we do use redux, but it is probably not necessary here 😉

You can get started by installing the necessary dependencies with `npm install` and running `npm run webpack` in the project root and head over to `http://localhost:3000` to see an empty page. It comes with hot reload, so you should be able to see your changes immediately, but if you stumble upon any problem, do not hesitate to ask!

The entrypoint is in `src/index.js`, you will find helpful mappings in `src/data` and a working example of an API call in `src/api/index.js`.

As stated previously, you don't **have** to use the boilerplate, and can use other tools and frameworks of your choice that you are more comfortable with, but keep in mind that the task was designed with minimal-to-no setup time.

You can use any kind of framework or library. Just be prepared to tell us why :)

### Handover

Please bear with us and follow these instructions:

- Fork this repo with your user to obtain the working project for this challenge (https://github.com/YOUR_USERNAME/frontend-challenge)
- You can now commit and push your changes to your personal repository.  
- After having forked the repository and finish your solution, please make a PR with our repo as destination

### Notes:

The design of the page is up to you. If you would like, you can mimic the current design, or feel free to experiment and try new ideas.

Be prepared to discuss your code and design decisions with us at the end of the day.

If you have any questions, about anything (our API, the product, how/why/where etc.)
