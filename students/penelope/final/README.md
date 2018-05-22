# penelope/final/

- https://akpvasquez.github.io/cfc/
- https://github.com/Akpvasquez/cfc/tree/master

[Assignment details](/homework/final)

Edit this document on GitHub. _Only edit the text in parentheses._ Feel free to add more at the bottom.

## Project Description 

This be a website where it shuffles random tarot cards for the user and depending on the cards and what comes up- it will tell the user general information on the card and they can come up with a conclusion about their future. If this is too basic for the final project, I will create a blog with crystal information (similar to my mobile app) and other "spiritual things"

## Project Requirements

many tarot deck have about 78 cards- I will about 78 cards to shuffle through. this will be shuffled through with javascript. I am not sure if I should have a webpage with the meaning of each card or when the cards shuffle through the deck the image and meaning will pop up together.

## Plan for Mobile Differences

It will have a mobile version

# Feedback

- get the floating cards looking how you want
- get the back card and several more assets uploaded
- ensure your CSS is enforcing the cards to be same size, even when flipped
  - targeting width, height
- it should start with the cards face down
  - when clicked on, check id in JS, then show card
  - `<img src="back.jpg" id="fool">`
  - make a img for each preset
```
if ($(this).attr("id") == "fool"){
  $(this).attr("src", "fool_face.png");
}
```
you will need an if statement like this for each card

## For next week

- get the visuals 100% done, including meta and favicon etc
- try to get the JS working
