# Introduction

Poker Hand Comparison is a little program that will compare two hands of poker according to the rules of [Texas Hold'em rules](https://en.wikipedia.org/wiki/Texas_hold_%27em#Hand_values).

# Getting Started

Guide users through getting your code up and running on their own system. In this section you can talk about:

1. Installation process <br />

- a. Setup for MAC(Focused on FE)
- b. Running the Project locally

### 1a. Setup for MAC(Focused on FE) <br />

Setup from basics <br/>

- Install git <br/>
  Open terminal and type
  `git --version` <br/>
  Or <br /> Follow instructions from [here](https://www.atlassian.com/git/tutorials/install-git) <br/>
- Configure git if needed <br />

- Cloning the project

```
git clone git@github.com:Gurmeettt/Poker-Project.git
```

- Check for bash profile

```
~/.bash_profile
```

If bash profile doesn’t exist create it

```
touch ~/.bash_profile
```

- Install node v10.16.0

Need Help ? Follow instructions on [this link](https://www.webucator.com/how-to/how-install-nodejs-on-mac.cfm)

- Check if node is installed successfully

```
node --version
v10.16.0
```

- Install brew and npm

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

brew install npm
```

```
npm install
```

- navigate to the project

- Install IDE (Optional) <br /> [VS Code](https://code.visualstudio.com/)

### 1b. Running the Project locally and testing

- Open Terminal windows

- On terminal
- Navigate to the project run

```
npm start
```

- This will start the project locally

There are two input fields, Input the values in the feilds in this order '4S 5S 8C AS AD' then click on Compare to see which suit is higher

Results are "Player One Won", "Player Two Won" or TIE
Player one's is on left and player two is on the right

# Build

- To build the project

```
npm run build
```

# Contribute

If you want to learn more about creating good readme files then refer the following [guidelines](https://docs.microsoft.com/en-us/azure/devops/repos/git/create-a-readme?view=azure-devops). You can also seek inspiration from the below readme files:

- [ASP.NET Core](https://github.com/aspnet/Home)
- [Visual Studio Code](https://github.com/Microsoft/vscode)
- [Chakra Core](https://github.com/Microsoft/ChakraCore)
