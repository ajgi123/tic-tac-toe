
# Tic Tac Toe on steroids

An application used to play and simulate games of tic tac toe, built with React, Typescript and SCSS.

Used libraries: 
- comlink
- react minimal pie chart
- react router
- react spring 
- worker plugin

## About the app 

The application has 4 game modes. Each game mode has its place in local storage, so progress won't be lost on refresh. Some game modes have twists to make gameplay
more interesting. For example, in Easy game mode, there is implemented undo-redo functionality. In Player vs Player, you can change the size of the gameboard from classic 3x3 up to 5x5.
In AI vs AI, you can watch a game of AIs of your choice playing against each other. In Hard mode, you simply play against the minimax algorithm.

In the application, you can also simulate up to 50 games of AI vs AI. Since this process can be time-consuming, simulations are run by web worker. Results are displayed on the pie chart. 
Each simulated game is displayed. 50 items take a lot of space so I have implemented pagination using react-router. 


## Demo

<img src="https://media.giphy.com/media/619ZWmPNX1lqVJqCzy/giphy.gif" title="Demo gif" width=100%/>

Link to the project: https://ajgi123.github.io/tic-tac-toe/


## Run Locally

Clone the project

```bash
  git clone https://github.com/ajgi123/tic-tac-toe
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

  
