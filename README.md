# Event Countdown App

## Preview

[Click here to check out the countdown app](https://elissatsekouras.github.io)

## To the reviewer

- I've tried to write my commits as a story, so reviewing the code commit by commit will give you the best overview of how this app came to be.
- The assignment stated that the text should fit the whole screen. I've opted to put a maximum width on the text container, as it looks better 💅🏼 However, by removing the `max-width` on the `.countdown-app` class you can see that my text-fitting solution works well to fill the whole screen.
- I'm using local storage to persist the event details between page reloads.

## Suggested improvements

- My interpretation of the assignment was that the text had to be resized using javascript. In a 'real life senario' I would argue that a simple css solution should do the trick. As it introduces less complexity with the same result.
- Before shipping this I would want the favicon to be updated to something cool 😊

## For developers

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.3.

### Getting stared

Install the Angular CLI: `npm install -g @angular/cli`

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
