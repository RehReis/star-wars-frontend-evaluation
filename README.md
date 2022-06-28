# Star Wars Episode X: Frontend Evaluation
### Table of Contents
- [Star Wars Episode X: Frontend Evaluation](#star-wars-episode-x-frontend-evaluation)
    - [Table of Contents](#table-of-contents)
    - [General Info](#general-info)
    - [Demo](#demo)
    - [Tech Stack](#tech-stack)
    - [Installation and Setup](#installation-and-setup)
    - [Contributors](#contributors)

### General Info
This app allows users to view list of all the planets in the Star Wars Universe.
Requirements:
- Use the Star Wars API to get a list of all the planets in the Star Wars Universe. Note, the api is paginated, so you will need to pull multiple times to get all the planets.
- Display all of those planets in a list on the front page of your app. You may choose to show all the planets, or paginate them for the UX experience.
- Add a text input at the top of the page that allows a user to search the full list of planets. The filtering should NOT re-call any api calls.
- When a user clicks on a planet, they should navigate to a new page that shows a list of the residents of the planet fetched from the Star Wars API.
- When a user clicks on one of the residents, they should navigate to another page that shows the personal details of that resident.
- Include a header with breadcrumbs. Something like All Planets / Planet Name / Resident Name. Each breadcrumb section should be clickable to navigate to the appropriate page.
- Include a service file that contains all the api urls and gets. Your React components should not contain any url references.

### Demo
![star-wars-demo](https://user-images.githubusercontent.com/75865828/176321712-fc6fc80d-5627-4f2c-8f81-0dfa17a96a85.gif)

### Tech Stack
- Front End: Javascript, Mobx State Tree, React, React Router, React Bootstrap, Axios

### Installation and Setup
1. Clone down the repo `$ git clone https://github.com/RehReis/star-wars-frontend-evaluation.git`
2. Install dependencies `$ npm install`
3. Start webpack by running `$ npm start`

### Contributors
- [Regina Grogan](https://github.com/RehReis)
