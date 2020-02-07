# Introduction to the JAMstack

This is the code for a Frontend Masters workshop. In this workshop, we’ll learn what the JAMstack is, what it’s capable of, and how we can use it to build full-featured apps with less complexity and overhead.

## Sections

### Section 1: Create a Basic JAMstack Site

- Create an `index.html` with a heading and a content area
- Use `npx serve` to load the site during development
- Create a `styles.css` with basic styles
- Create a `main.js` that loads repos from GitHub
- Add a `link` and a `script` element to `index.html`

### Section 2: Deploy a JAMstack Site

- Set up Netlify CLI `yarn global add netlify-cli`
- Create a GitHub repository (use Hub) https://hub.github.com `git create <repo-name>`
- Create a Netlify site connected to the GitHub repo `netlify init`
- Push the code `git add -A`, `git commit -m 'message'`, `git push --set-upstream origin master`
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

### Section 3: Serverless Functions

Before serverless functions, getting

- What are serverless functions?
  - Talk about other providers
  - Use Netlify because it requires almost no setup/config
- Create a "hello world" function
- Use Netlify Dev to run it locally, Netlify Dev runs on port 8888
- Learn about redirects to change the URL
- Deploy and see it working live

### Section 4: Process a Form Submission

- Create an accessible form using React/CSS Modules
- Use a reducer hook to manage form state
- Handle idle, sending, and sent states
- Create a serverless function
- Get credentials from Mailgun (sandbox)
- Use the serverless function to send email from the form

### Section 5: Create a Password-Protected Dashboard

- Add a home page and a dashboard page
- Set up client-only routes in Gatsby
  - Use `matchPath` in `gatsby-node.js`
  - Create components to show at different sub-routes (e.g. `/dashboard/login`)
  - Add a redirect for Netlify
- Deploy the site to Netlify
  - Required so we can activate Identity
- Add authentication w/Netlify Dev, `netlify dev` runs on port 8888, so access the site through localhost:**8888**
  - `yarn add react-netlify-identity-widget react-netlify-identity @reach/dialog @reach/tabs @reach/visually-hidden`
  - Create a `Layout` component that wraps everything with the provider
  - Add the Identity modal to the dashboard page
  - Add a `Profile` component to show whether or not we’re logged in
  - Add navigation for the dashboard
  - Create a `PrivateRoute` component to bounce to the login screen if not logged in
  - Update `Dashboard` to use private routes
- Deploy
- Sign up for an account
- Bounce to login screen when accessing protected routes while logged out

### Section 6: Create a DB-Backed Todo App

- Create a Fauna account (https://fauna.com)
- Write a GraphQL schema (`functions/utils/todos.gql`)
- Create a new Fauna DB (https://dashboard.fauna.com/db-new/)
- Upload the GraphQL schema to Fauna
- Explore the GraphQL Playground in Fauna
- Create an API server key in the “security” tab
- Add the server key to `.env`
- Create a helper for serverless functions (`functions/utils/send-query.js`)
- `netlify dev` runs on port 8888, so access the site through localhost:**8888** (not 8000)
- Load all todos
  - Create a serverless function `/functions/get-all-todos.js`
  - Write a hook to load todos
  - Create a `Todo` component to display todo items
- Add the ability to create todos
  - Create a serverless function `/functions/create-todo.js`
  - Create a `Form` component
- Add the ability to toggle todo completed state
  - Create a serverless function `/functions/toggle-completed.js`
  - Add a checkbox input to show completed state and handle toggling
- Add the ability to delete todos
  - Create a serverless function `/functions/delete-todo.js`
  - Add a button to delete todos

## Thanks

Huge thanks to [David Khourshid](https://twitter.com/DavidKPiano) and [Ryan Florence](https://twitter.com/ryanflorence) for reviewing code and providing [better patterns for using React Hooks](https://twitter.com/jlengstorf/status/1185705298868129793). Thanks to [Sarah Drasner](https://twitter.com/sarah_edo) for sharing notes and examples from [her JAMstack workshop](https://github.com/sdras/JAMstack-Workshop).
