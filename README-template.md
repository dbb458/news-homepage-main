# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Toggle the mobile menu (requires some JavaScript)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- HTML
- CSS custom properties
- Flexbox
- Mobile-first workflow


### What I learned

Before this challenge I already have basic knowledge and understanding on basic CSS properties and Flexbox. In this challenge I reinforced and applied my knowledge and learned how to create a menu that will be shown if the menu icon is clicked and close when closed button is clicked.

```js
function openMenu() {
    document.getElementById("menu-mobile-active").style.display = "block";
    document.getElementById("body").style.overflow = "hidden"
}

function closeMenu() {
    document.getElementById("menu-mobile-active").style.display = "none";
    document.getElementById("body").style.overflow = "scroll";
}
```

### Continued development

In future projects I want to learn and use modern tools like React to build better and more advanced applications and websites.

### Useful resources

https://www.youtube.com/watch?v=HbBMp6yUXO0 - This is where I learned how to structure my menu bar on mobile and desktop
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_overlay - I learned to create curtain menu using javascript
