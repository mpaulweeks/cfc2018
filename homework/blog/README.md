# Blog

[View the lecture notes](/lectures/week2)

[View the example web page](https://mpaulweeks.github.io/cfc2018/homework/blog/example)

Read `example/index.html` for an example of how to create a form and import the comments CSS and JS.

Read `example/main.js` for information about setting up your own comment section with JS.

## Assignment

Create a blog page where you describe your thoughts and feelings from the first five chapters of [Don't Make Me Think](http://static.mpaulweeks.com/files/think.pdf).

Your page must include the following:
- a paragraph describing your thoughts on the reading
  - include 3 lessons you learned
- a link to your biography page from last week (get URL from pink site)
- a working comments section (don't break the provided code)
- change the copy from the example:
  - page title (currently `Comments Example`)
  - form labels (currently `Label 1`, `Label 2`)
  - form button (currently `Button`)
- add your own custom styles to give the page character
  - similar stuff as last week, colors and fonts are sufficient

Upload the following to `students/<yourname>/blog/` by 8am on Monday, April 16
- `index.html`
- a `css` file for styling
- a `js` file to load the comments

## Tips
- Override the default yellowish comments styling by inspecting the page for the class names, then add those class names to your CSS file and customize them further
- Trying to center something with fixed width? `text-align: center;` isn't cutting it?
  - For something with width: 600px, add the following CSS: `margin-left: calc(50% - 300px);`
  - Be careful! White space is important with calc!
- Look into adding "placeholder" text to your form
  - eg: `<input placeholder="something"> ...`
