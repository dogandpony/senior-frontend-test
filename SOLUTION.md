# Solution do D&P Studios

## Things to consider: 
- This project ain't 100% finished due to time limitations.
- This is my first Vue and Nuxt project (I'm a React guy) so I tried my best with the little time I had.
- Layout isn't pixel perfect and I'm aware of that. Not due to lazyness but some of the design tokens were slightly different from TW's default theme and instead of adding all of them to `tailwind.config.js` as a theme extension I opted for the similar approach. For a production level project ofc I would map all colors, spacing and sizes before even starting.
- I replicated the initial page as best as I could, but create and edit forms I wasn't as careful with the layout. Again, very little time spent on the project.
- I'm new to Vue's Eslint, so I might have done something wrong here and there. Usually I use airbnb's recommended configurations.

### Store:
I used Vuex for creating a store and populating the initial list values. Created basic CRUD operations in order to show that I know the concepts behind managing the state of the application. I had an issue integrating Vuex with the project's boilerplate, so I had to recreate the project from scratch. After recreating the project, vuex worked out of the box.

### Layout:
I used the `/layouts` directory to add the basic layout structure of the SPA. note that I tried to use partials but I couldn't natively use that concept inside Nuxt, so I had to move partials into the components folder. If there's a better way to structure that, please lmk!

### Components:
I decided to separate the Add Button and Form from the OfficeCard items. It might not be the best approach but I tried to keep components organized by modules.

### Test:
I added a  single unit test file to show that I can run some basic unit tests. The test suite checks for the existence of the component, the initial render of the component and the behaviour when the card is clicked.
