const express = require("express");
const path = require("path");
const fs = require("fs");
const { log } = require("console");

const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files
app.use(express.static(path.join(__dirname, "images")));

// Keep track of the last 3 cards shown
let recentCards = [];

// Serve the main page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Endpoint to get a random card, avoiding the last 3 cards
app.get("/random-card", (req, res) => {
  const cardDir = path.join(__dirname, "images", "card");
  fs.readdir(cardDir, (err, files) => {
    if (err) {
      return res.status(500).send("Error reading card directory.");
    }

    const cardFiles = files.filter((file) => file.endsWith(".jpg"));
    let availableCards = cardFiles.filter((card) => !recentCards.includes(card));

    // If fewer than 3 unique cards are left, reset the queue
    if (availableCards.length === 0) {
      recentCards = [];
      availableCards = cardFiles;
    }

    // Select a random card and update recentCards
    const randomCard = availableCards[Math.floor(Math.random() * availableCards.length)];
    recentCards.push(randomCard);
    if (recentCards.length > 3) {
      recentCards.shift(); // Maintain a max of 3 cards in the queue
    }

    res.json({ card: `/card/${randomCard}` });
  });
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running at http://0.0.0.0:${PORT}`);
});