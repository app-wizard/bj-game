# BlackJack Game Project PP2 (HTML+CSS+JS)

The website's objective is to provide users with the opportunity to experiment with various strategies in the game of Blackjack, to acquaint them with the fundamental rules of the game, and to offer a space for relaxation and unwinding.

The website is divided into two main sections. 
- The first section contains information about the game rules, where users are prompted to select a nickname and initiate the game. This section also offers access to the outcomes of the most recent 10 gaming sessions. 
- The second section directly presents the playing field, segmented into distinct parts including the dealer's cards, the score display, the player's cards area, and the game control buttons section.

The entire visual design employs dark tones, incorporating thoughtfully chosen backgrounds that simulate the gaming environment.

To view the deployed website click [here](https://app-wizard.github.io/bj-game/)
![Responsive image](/assets/img/readme/mockup-bj.png)

## Website intentions

For the user:
```
- Master the art of Blackjack gameplay.
- Explore game strategies without risking anything.
- Indulge in a tranquil gaming experience at your own unhurried rhythm.
```

For the site developer:
```
- Capture users' interest through captivating game content.
- Possibility to expand the gaming experience by introducing fresh game mechanics.
- A robust platform for integrating advertisements effectively.
```

### 1.Strategy

The website is structured as an online gaming and leisure platform. Its primary objective is to offer users the chance to explore game BlackJack mechanics without any risk, while ensuring a complete understanding that the game operates fairly, employing randomized card shuffling.

### 2.Structure

The website's structure is split into two primary segments:

The initial section encompasses details about the game regulations, urging users to pick a nickname and commence the game. This area additionally permits entry to the results of the ten latest gaming sessions.
The subsequent section directly showcases the gaming arena, partitioned into discrete components comprising the dealer's cards, the score exhibition, the player's card zone, and the section for game control buttons. Significant focus was dedicated to refining the game mechanics and the interface's responsiveness to in-game scenarios during the development process. For instance, Aces can be valued as either 11 or 1 point based on the game situation, and the content of the game control buttons adapts according to the different game stages.

### 3.Design

The design was crafted and font and color contrasts were evaluated using Figma during the development process (https://www.figma.com/).
Design home: [here](/assets/img/readme/page1.png)
Design game: [here](/assets/img/readme/page2.png)

### 4.Surface

For enhanced legibility and an appealing layout, the design incorporates the highly readable Google Fonts Poppins and Raleway. This selection aims to draw attention to the title while upholding the clarity of the main text. Concerning the color palette, the plan involves using light fonts against a dark background. Adhering to contrast recommendations, the text color will be adjusted according to the background color, ensuring optimal readability.

## Features 

### Header
![Responsive image](/assets/img/readme/header.png)
The header consists of a logo on the left and a navigation menu on the right, containing options  ["How to Play"](/assets/img/readme/how-to-play.png) and "Top Score". The header is designed to be responsive, adjusting to users' screen resolutions. For mobile devices, the navigation menu on the right is concealed behind a navigation button, aligning with contemporary design trends and meeting user expectations. Upon selecting "How to Play" or "Top Score," modal windows appear with their respective content. The "How to Play" modal window adjust site size and font adaptively based on the user's screen width, providing game rules. The ["Top Score"](/assets/img/readme/top-score.png) action showcases the user's last 10 game statistics. This functionality is realized using local storage, enabling the user's browser to retain string information. Additionally, within the same window, the "Clear result" button facilitates erasing the user's gaming session details. If no data is present in the local storage, the user receives a prompt indicating the absence of game history and an invitation to initiate a game.

### Home Page
![Responsive image](/assets/img/readme/main.png)
The website's homepage features a player name input form, which includes validation for checking against a pattern. Furthermore, JavaScript-based name validation is incorporated. The field comes pre-filled with the default name "Player." If a player prefers not to customize their name, they can initiate the game with a single click, and the standard name "Player" will be employed for the ongoing gaming session and when preserving results in the browser's local storage.
![Responsive image](/assets/img/readme/footer.png)
At the bottom of the homepage, you'll find links to well-known social media platforms. Clicking on a link will launch a new page showcasing the chosen social network.

### Game Page
![Responsive image](/assets/img/readme/game-screen.png)
The game page greets players with already dealt dealer's and player's cards. The computer acts as the dealer, functioning as the game's mathematical model. At the game's outset, the deck is shuffled using the Fisher-Yates Sorting Algorithm (source: https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript). Subsequently, the dealer receives cards, the first of which remains face down. The dealer draws cards until their point count reaches 17. Following this, two cards are dealt to the player, marking the beginning of the game. The player is prompted for action, with the choice of requesting another card or concluding the round and comparing their points with the dealer's.

The game incorporates scoring and result comparison, encompassing all possible outcomes within the rule framework. After each round, the game's outcome is displayed on the player's board. Button text dynamically changes based on the game situation. For instance, if a player exceeds 21 points, the "HIT" button becomes inactive, and the "STAY" button transforms into "NEW GAME," indicating the current loss.

To sustain user engagement and prevent annoyance, the game refrains from utilizing sound or pop-ups for notifications, given the game's quick session duration. The game area's background is subtly darkened using a gradient, reducing eye strain and accentuating the game interface. The game completion button is conveniently positioned in the upper-right corner, akin to the familiar layout of the Windows operating system. This button concludes the gaming session while saving the results locally. Furthermore, a check ensures that unchanged scoreboard results (00-00) are not saved to prevent cluttering the results table with zero values.

Adaptability has been integrated into this screen as well. The dimensions of game elements are contingent on the screen width, ensuring a visually appealing presentation on diverse devices such as mobile phones, tablets, desktop computers, and laptops.

# Testing

## HTML Validator 

The code passes html validation (https://validator.w3.org/) without errors and warnings

![Responsive image](/assets/img/readme/html-checker.jpg)

## CSS Validator

During the development process, I made several adjustments to the CSS code in order to ensure that it passed CSS validation without any errors. By continuously refactoring the CSC code, I was able to address any potential issues and maintain a clean and error-free stylesheet.
Css validator - https://jigsaw.w3.org/css-validator/validator

![Responsive image](/assets/img/readme/css-checker.jpg)

## JS Validator

The validator showed errors that for some reason are not highlighted in VS-code, these were missing characters ";" or inappropriately used ";" . All errors have been fixed the code works without errors and warnings in the browser console
JS Validator- https://jshint.com/
![Responsive image](/assets/img/readme/js-check.png)

## Lighthouse

To assess the loading speed of my website, I utilized Google DevTools Lighthouse to conduct performance testing. In order to enhance the download performance, I made necessary adjustments such as resizing the images. This approach allowed me to strike a balance between image quality and download speed, ensuring that the website loads efficiently without compromising visual appeal.

![Responsive image](/assets/img/readme/light-house.jpg)

## Manual testing

I thoroughly tested and developed this website using Mac Safari as my primary browser. However, I also verified its functionality and compatibility on Chrome and Microsoft Edge, and I'm pleased to confirm that it works perfectly on all these platforms.

Additionally, I performed tests on mobile devices, specifically an iPhone 11 and Samsung S22. For other mobile devices, I utilized Google DevTools to simulate their displays and ensure optimal responsiveness and appearance. This comprehensive testing approach guarantees a seamless and enjoyable user experience across different browsers and devices.

During the testing process, errors in the use of styles in samsung mobile browsers and also in Safari browser were identified. More detailed information about the errors will be presented below in the Issues and their solutions section.

## Issues and their solutions

* I ran into problems maintaining visual appeal when resizing the screen, as it was extremely important to ensure a uniform style on a wide range of devices, from iPhone 4 to 4K high-resolution monitors and other devices. However, after many factors, I have successfully achieved the desired result by adapting the content for screens of different sizes without compromising the aesthetics of the website.

* During testing, it was revealed that the overflow: hidden; directive for the body tag does not work correctly on Samsung browsers, while it worked as expected in Chrome Safari and Mozilla browsers... the solution was to change the styles for the appearance of the game screen, because the use of the style:
/ .section-wrapper {width: 200%;} /
led to the appearance of scrollbars in the Samsung browser despite / body { overflow: hidden;} /

* Another issue that came up during testing was the effectiveness of the .model directives backdrop-filter: blur(15px); in Safari browsers. The remedy was discovered by investigating comparable problems posted on StackOverflow. An additional directive, -webkit-backdrop-filter: blur(15px);, was introduced to rectify the situation. As a result, the desired blur effect when the modal window emerged started functioning as intended across all browsers subjected to testing.

# Deployment 

* The website was deployed to GitHub. The steps to deploy are as follows:
    * In the GitHub repository, navigate to the Settings tab
    * Scroll down to GitHub pages and click "Check it out here!"
    * Under "Source" ensure you select "main"
    * Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

Click [here](https://app-wizard.github.io/bj-game/) to view my GitHub repository.