## You’re Getting Old - A Multiplayer Web Game

A web-based implementation of the hilarious board game “You’re Getting Old”, playable over a shared screen on Zoom or with friends on the same local network. This is the "card" piece of the game, which is meant for the host of the game to load and share on their screen via zoom so the rest of the players can see which card is being played. 

## Features
	•	Draw random cards with prompts to laugh at and redeem yourself.
	•	A modal overlay pops up with a funny quip when a player “gets old.”
	•	Simple, clean design with a game title image and intuitive interface.
	•	Playable from other computers on the same local network.

## Setup Instructions

### Prerequisites
	•	Node.js: Install from https://nodejs.org/.
	•	Ensure you have the images folder with the necessary assets:

```
images/
├── card/
│   ├── card001.jpg
│   ├── card002.jpg
│   └── ...
├── game/
│   └── game-title.jpg
```

---

### Installation

1. Clone or download this repository.
2. Navigate to the project directory in your terminal:

```
cd youre-getting-old
```

3. Install dependencies:

```
npm install express
```

## Running the Game
1. Start the server:

```
node app.js
```

2. Access the game on your computer:

http://localhost:3001


3. To allow others on your local network to join:
 - Find your local IP address (e.g., 192.168.x.x).
 - Share the URL in this format:

```
http://<your-ip-address>:3001
```

## Playing the Game
1.	Open the game in a browser.
1.	Share your screen (if playing on Zoom) or share the local IP with players on your network.
1.	Click “Draw Card” to display a new card.
1.	Laugh at the prompts, redeem yourself, and see who gets old first!

## Customization
	•	Game Title Image: Replace images/game/game-title.jpg with your custom title image.
	•	Card Images: Update the contents of images/card/ with your game cards.

## License

This project is provided for personal use and fun only. The original game concept belongs to its creator. To purchase a physical copy of the the game, visit: https://www.vangotoys.com/youre-getting-old

Enjoy the game and remember: You’re only as old as you feel!

This README.md covers setup, usage, and customization while being beginner-friendly. Let me know if you need further tweaks!