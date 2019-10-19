# Introduction to the JAMstack

This is the code for a Frontend Masters workshop. In this workshop, we’ll learn what the JAMstack is, what it’s capable of, and how we can use it to build full-featured apps with less complexity and overhead.

## Sections

### Section 1: Create a Basic JAMstack Site

- Create an `index.html` with a heading and a content area
- Create a `styles.css` with basic styles
- Create a `main.js` that loads repos from GitHub
- Add a `link` and a `script` element to `index.html`
- Use the `serve` package to get a local server going

## Section 2: Deploy a JAMstack Site

- Set up Netlify CLI
- Create a GitHub repository (use Hub)
- Create a Netlify site connected to the GitHub repo
- Push the code
- See the deploy
- Push a change as a PR
- See the deploy as a preview
- Merge
- See the deploy go live

### Section 3: Serverless Functions

- What are serverless functions?
  - Talk about other providers
  - Use Netlify because it requires almost no setup/config
- Create a "hello world" function
- Use Netlify Dev to run it locally
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

- Set up client-only routes in Gatsby
- Add authentication w/Netlify Dev
- Bounce to login screen when accessing protected routes while logged out
- Load privileged data (e.g. GitHub) on protected route using JWT
- (stretch) Check JWT in a serverless function
