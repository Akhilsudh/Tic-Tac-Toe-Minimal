# Tic-Tac-Toe-Minimal
![Platform](https://img.shields.io/badge/platform-web%20platform-lightgrey.svg) [![socketio](https://img.shields.io/badge/socket.io-v1.7.2-brightgreen.svg)](https://github.com/Akhilsudh/Tic-Tac-Toe-Minimal/tree/master/node_modules/socket.io) [![expressjs](https://img.shields.io/badge/express.js-v4.14.0-brightgreen.svg)](https://github.com/Akhilsudh/Tic-Tac-Toe-Minimal/tree/master/node_modules/express) ![License](https://img.shields.io/badge/license-MIT%20license-blue.svg)

A nodeJS based multiplayer Tic-Tac-Toe game using express.js and socket.io.

## Instructions For Running the game
1. Clone this repo into the host system:
   
        git clone https://github.com/Akhilsudh/Tic-Tac-Toe-Minimal.git
2. Adjust the firewall settings to allow inbound outbound for port 3030.
3. Run this link in the browser to start a new game: 
   
        https://<HostURL>:3030/newgame
4. Share the Generated link to a friend that looks like this:
    
        https://<HostURL>:3030/user?id=<ID-Number>
5. Wait for the friend's turn

## Screenshots
After connection established
![Intro](Screenshots/Intro.png)

X-Wins
![WinLose](Screenshots/winLose.png)

O-Wins
![LoseWin](Screenshots/loseWin.png)
