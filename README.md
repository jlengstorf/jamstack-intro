# Introduction to the JAMstack

This is the code for a Frontend Masters workshop. In this workshop, we’ll learn what the JAMstack is, what it’s capable of, and how we can use it to build full-featured apps with less complexity and overhead.

## Sections

### Section 1: Create a Basic JAMstack Site

The simplest possible JAMstack site uses plain ol’ HTML, CSS, and JavaScript. No build steps, no libraries, just static files like it’s 1999.

#### Create an HTML file and load it in the browser

Diff: https://github.com/jlengstorf/jamstack-intro/compare/3cd4713...e365f1b

- Create an `index.html` with a heading and a content area
- Use `npx serve` to load the site during development

#### Create a CSS file and load it

Diff: https://github.com/jlengstorf/jamstack-intro/compare/e365f1b...0d93f19

- Create a `styles.css` with basic styles
- Add a `link` tag to the HTML
- Check the result in the browser

#### Create a JavaScript file and load it

Diff: https://github.com/jlengstorf/jamstack-intro/compare/0d93f19...9061365

- Create a `main.js` that loads repos from GitHub
- Add a `script` tag to `index.html`
- Check the result in the browser

### Section 2: Deploy a JAMstack Site

How much work is it to get a JAMstack site online? Not much!

Because JAMstack sites consist of only static assets (no servers), all that’s required to deploy them is a folder on a web server somewhere. For the best results, a content delivery network (CDN) is usually the best bet.

Tools like Netlify, AWS Amplify, and others make it far less complex to put your static assets up on a CDN, so it’s easier than ever before to deploy sites.

- Set up Netlify CLI `yarn global add netlify-cli`
- Initialize a new GitHub repo `git init` (make sure you’re in the `sections/basic` directory!)
- Install `hub` (`brew install hub` — see https://hub.github.com)
- Add an alias for `hub` in `.bash_profile` (`source ~/.bash_profile` to reload)
- Create a GitHub repository `git create <repo-name>`
- Create a Netlify site connected to the GitHub repo `netlify init`
- Push the code `git add -A`, `git commit -m 'message'`, `git push origin master`
- See the deploy `netlify open`
- Push a change as a PR
  - Check out a new branch (`git checkout -b feature-idea`)
  - Make a change (add a `body` background color)
  - Add and commit the change (`git commit -am 'feat: update background color'`)
  - Push the changes (`git push origin feature-idea`)
  - Open a pull request with Hub (`git pull-request`)
- See the deploy as a preview
  - Show the live site vs. the deploy preview
- Merge the pull request
- See the deploy go live
- Revert the change to go back to where we were

### Section 3: Serverless Functions

What do we do when a JAMstack site needs interactivity? We use serverless functions!

This example takes advantage of Netlify’s Functions, but we could also use AWS Lambda, Google Cloud Functions, Azure Serverless Functions, Zeit, or any other serverless/lambda provider.

#### Create your first serverless function

Diff: https://github.com/jlengstorf/jamstack-intro/compare/9061365...74db49d

- Create a "hello world" function
- Create a `netlify.toml` to identify the functions directory
- Use `netlify dev` to run it locally
- Write a redirect to change the URL
- Deploy and see it working live

#### Create an accessible form using React

Diff: https://github.com/jlengstorf/jamstack-intro/compare/74db49d...b22bdcc

- Set up the repo as a Gatsby site `yarn add gatsby react react-dom`
- Add an index page
- Create global styles `src/global.css`
- Create a CSS module for the form `src/components/form.module.css`
- Create a `Form` component with accessible inputs and a submit button
- Add form/label/input styles

#### Manage form state with React Hooks

Diff: https://github.com/jlengstorf/jamstack-intro/compare/b22bdcc...ce60efd

- Set up a reducer to manage form state
- Create a curried helper to update field values in state
- Change all the form inputs to controlled inputs
- Log the state on submit

#### Support different form states

Diff: https://github.com/jlengstorf/jamstack-intro/compare/ce60efd...6c8e75b

- Add support for a `status` field in state
- Add a success message and styles for after a form is submitted successfully
- Add support for resetting the form
- Add an error message for when things go wrong
- Add disabled styles for when form submissions are pending

#### Create a serverless function to receive form submissions

Diff: https://github.com/jlengstorf/jamstack-intro/compare/6c8e75b...013ea9e

- Create a serverless function `functions/contact.js`
- Actually send form submissions to the function
- Log the `event` arg to see what gets sent
- Send back a status code and a message

#### Use Mailgun to actually send emails

Diff: https://github.com/jlengstorf/jamstack-intro/compare/013ea9e...6c5b699

- Add required dependencies `yarn add dotenv mailgun-js`
- Get credentials from Mailgun (sandbox)
  - Go to https://app.mailgun.com/app/dashboard
  - Find the domain on the dashboard
  - Go to https://app.mailgun.com/app/account/security/api_keys
  - Find the Private API key
  - Add both to `.env`
  - Review `.env.EXAMPLE` so you don’t show your secret stuff
- Use the serverless function to send email from the form
- Verify that the email actually showed up in your inbox

### Section 4: Create a Password-Protected Dashboard

#### Set up a site with client-only routes

Diff: https://github.com/jlengstorf/jamstack-intro/compare/6c5b699...b312c90

- Add dependencies `yarn add gatsby react react-dom`
- Add a home page and a dashboard page
- Create a `gatsby-config.js` so Netlify will auto-identify Gatsby
- Set up client-only routes in Gatsby
  - Use `matchPath` in `gatsby-node.js`
  - Create components to show at different sub-routes (e.g. `/dashboard/login`)
  - Add a redirect for Netlify

#### Create dashboard that uses client-only routes

Diff: https://github.com/jlengstorf/jamstack-intro/compare/b312c90...997d190

- Create a dashboard component
- Create a login, secret, and base component
- Use Reach Router to add routing between route components
- Use an effect hook to redirect to the login page
- Create a profile component to navigate between dashboard routes

#### Add authentication

Diff: https://github.com/jlengstorf/jamstack-intro/compare/997d190...f65928a

- Deploy the site to Netlify
  - Required so we can activate Identity
- `yarn add react-netlify-identity-widget react-netlify-identity @reach/dialog @reach/tabs @reach/visually-hidden`
- Wrap the `Layout` component with the provider
- Add the Identity modal to the dashboard page
- Update `Profile` to show whether or not we’re logged in
- Create a `PrivateRoute` component to bounce to the login screen if not logged in
- Update `Dashboard` to use private routes
- Deploy
- Sign up for an account
- Bounce to login screen when accessing protected routes while logged out

### Section 6: Create a DB-Backed Todo App

#### Set up a database

Diff: https://github.com/jlengstorf/jamstack-intro/compare/f65928a...13bcaaa

- Create a Fauna account (https://fauna.com)
- Write a GraphQL schema (`functions/utils/todos.gql`)
- Create a new Fauna DB (https://dashboard.fauna.com/db-new/)
- Upload the GraphQL schema to Fauna
- Explore the GraphQL Playground in Fauna
- Create a todo item in the playground
- Read all todos in the playground

#### Add a function to get all todos

Diff: https://github.com/jlengstorf/jamstack-intro/compare/13bcaaa...5af95be

- Create an API server key in the “security” tab
- Add the server key to `.env`
- Install deps `yarn add axios dotenv`
- Create a helper for serverless functions (`functions/utils/send-query.js`)
- Create a serverless function `/functions/get-all-todos.js`
- Add a `netlify.toml` to define where functions live and set up redirects
- Test the function

#### Create a Gatsby site as the app front-end

Diff: https://github.com/jlengstorf/jamstack-intro/compare/5af95be...63b8f04

- Install deps `yarn add gatsby react react-dom`
- Create a `gatsby-config.js` to trigger Netlify’s auto-detection
- Create an index page
- Write a hook to load todos
- Create a `Todo` component to display todo items

#### Add the ability to create todos

Diff: https://github.com/jlengstorf/jamstack-intro/compare/63b8f04...5025acf

- Create a serverless function `/functions/create-todo.js`
- Create a `Form` component
- Reload todos when a new one is created

#### Add the ability to toggle todo completed state

Diff: https://github.com/jlengstorf/jamstack-intro/compare/5025acf...7234aea

- Create a serverless function `/functions/toggle-completed.js`
- Add a checkbox input to show completed state and handle toggling
- Reload after a todo is toggled

#### Add the ability to delete todos

Diff: https://github.com/jlengstorf/jamstack-intro/compare/7234aea...6edaf84

- Create a serverless function `/functions/delete-todo.js`
- Add a button to delete todos
- Reload after a todo is deleted

## Thanks

Huge thanks to [David Khourshid](https://twitter.com/DavidKPiano) and [Ryan Florence](https://twitter.com/ryanflorence) for reviewing code and providing [better patterns for using React Hooks](https://twitter.com/jlengstorf/status/1185705298868129793). Thanks to [Sarah Drasner](https://twitter.com/sarah_edo) for sharing notes and examples from [her JAMstack workshop](https://github.com/sdras/JAMstack-Workshop).
