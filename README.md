# test-frontend-engineer

This is Liam's Alton's test-frontend-engineer project made with Typescript and Tailwinds on the Next.js framework. A live demo of the project which has been delployed on Vercel can be found [here](https://test-frontend-engineer-nine.vercel.app/)

## Running the development server

To run the development server you'll need to install the projects dependencies and run the development server. When the site is ready you can go [here](http://localhost:3000) to view it

```bash
npm i --force && npm run dev
```

## Running the production server

If you wish to run an optomised poduction build of the application you can run the following commands. These will install the nessesary dependencies, generate the build files and run the production server. When the site is ready you can go [here](http://localhost:3000) to view it

```bash
npm i --force && npm run build && npm run start
```

## Other commands

Run the linter and fix any potential issues

```bash
npm run lint -- --fix
```

Run through the test suites with jest

```bash
npm run test
```

Check the type with the Typescirpt complier

```bash
npm run type-check
```

## Architectural Decisions

* To optimize Next.js's caching and server-side rendering capabilities, I strategically limited client-side components to areas that required user-specific data, such as the shopping cart state, authentication status, and user profile information.
* For navigation between home and product pages, I implemented Next.js Link component instead of client-side routing. This approach enhances page caching efficiency and improves site crawlability, ultimately boosting SEO performance.
* I developed reusable components such as buttons and input fields to encapsulate core functionality and enforce consistent design patterns throughout the website. This modular approach ensures uniform styling and behavior while promoting maintainable code.
* I chose to store only item IDs in the cart rather than complete product objects. While this approach requires fetching fresh data when users navigate to the cart page, it ensures data consistency with the database. In a real production environment, product details (like price, availability, or specifications) may change between user sessions, making it crucial to display the most current information.
* I implemented global state management using React Context to handle user authentication, cart data, and user details. This solution integrated seamlessly with Next.js without requiring additional configuration or external dependencies.
* I developed reusable utility functions for data fetching operations across pages, which enhanced the codebase's modularity and scalability.
* The [Fake Store API](https://fakestoreapi.com/) lacks built-in pagination support, I implemented a custom pagination solution by dividing the retrieved products array into pages within the server-side function.

## Compromises

* The [Fake Store API](https://fakestoreapi.com/) provides only REST endpoints, so I implemented the application using traditional REST API calls rather than GraphQL.
* Since all functionality was implemented within a single project, there was no need for a monorepo structure.
* To optimize development time, I focused testing efforts specifically on the application's core components.
