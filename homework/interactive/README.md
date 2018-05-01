# interactive

[View the lecture notes](/lectures/week5)

[View the example code](/homework/interactive/example)

[View the example site](https://mpaulweeks.github.io/cfc2018/homework/interactive/example)

## Assignment

Watch/read one or more of the following videos/articles about modern computing

- Videos
  - [Quantum Computers Explained – Limits of Human Technology](https://youtu.be/JhHMJCUmq28)
  - [How Machines Learn](https://youtu.be/R9OHn5ZF4Uo)
  - [General AI Won't Want You To Fix its Code](https://youtu.be/4l7Is6vOAOA)
  - [AI "Stop Button" Problem](https://youtu.be/3TYT1QfdfsM)
- Articles
  - [The AI Revolution: The Road to Superintelligence](https://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html)
  - [Blockchain is not only crappy technology but a bad vision for the future](https://medium.com/@kaistinchcombe/decentralized-and-trustless-crypto-paradise-is-actually-a-medieval-hellhole-c1ca122efde)

Then create a web page where you respond to the content of the video, similar to the [blog](/homework/blog) assignment:

- What you find scary
- What you find exciting
- Any questions or what you're like to learn more about
- Any criticisms of the video's content or presentation

The webpage must have Javascript-driven interaction. Some example / ideas:

- Additional text / related images the user can expand
- Text blocks the user can expand or hide
- Aesthetic customization (eg Night Mode)

The firm requirements are:

- HTML must have title and favicon (`<meta>` tags optional)
- You must use jQuery to select elements
- You must use jQuery to add or remove CSS classes

The rest is up to you! Feel free to email me with questions / confusions

Upload the following to `students/<yourname>/interactive/` by 8am on Monday, May 7

- `index.html`
- a `css` file for styling
- a `js` file to drive user interaction

## Tips
- Use `var` the first time you declare the variable, eg `var count = 0;`
- Variables and functions must be declared before (aka above) where they are used
- In general, don't declare variables inside functions. Declare them outside and above
- `if` statements require a condition check inside parenthesis, then code inside braces. See the example
- When condition checking if two things are equal, use `==`
  - You can also experiment with:
    - `>` greater than
    - `>=` greater than or equal to
    - `<` less than
    - `<=` less than or equal to
    - `!=` not equal
- Totally stuck? Try inspecting the page and checking the Console for errors, and use the line number:
![](/static/console.png)
