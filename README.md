# EC327Project
This web application is a version of Wordle owned by the New York Times. A user has 6 chances to guess a five letter mystery word. For each guess, each letter in the guess has a status that related to its correctness:
1. If the letter is not in the word, it shows up gray
2. If the letter is in the word, but in the wrong location, it shows up yellow
3. If the letter is in the word AND in the correct location, it shows up green

#### Example:
If the correct word is SNAKE and the user enters SANDY as the guess:


![example](./public/eampleWord.png)

1. The 'D' and 'Y' are both not in the word
2. The 'A' and 'N' are in the word but in the wrong spot
3. The 'S' is in the correct space 



## How To Run Application

### Install Nodejs
How to get nodejs/npm --> [On Ubuntu](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/)


### HOW TO START APPLICATION:
1. Clone the repository on your own device
```shell
git clone https://github.com/dsudit01/EC327Project.git
```

2. Install All Dependencies from package.json
```shell
npm install
```

3. Run react-scripts start
```shell
npm start
```

4. If browser does not open automatically, site is running on:
```
http://localhost:3000/
``` 

### Optional
1. Install WebStorm editor to add changes to the code in a user-friendly UI that understand javascript code language

