# Activate GitHub Copilot using Nodejs 

Demo project for running labs to evaluate Copilot viability

> Make sure GitHub Copilot is configured and enabled for the current language, just check the status bar on the bottom right corner of VS Code.

## Exercise 1: First Touch

- Open `nodeserver.js` and begin by writing a Nod... NO NO NO!! Just CTRL+i and ask Copilot to do it ;)
- Open `test.js` file and analyze the current test
- Open a command prompt and run the test (`mocha test.js`)
- See the result, it should display something like:

``` bash
mocha test.js
server is listening on port 3000

  Node Server
    
    √ should return "key not passed" if key is not passed

  1 passing (34ms)

```

## Plan


- Exercise 2: Add some methods to the web server
- Exercise 3: Use Copilot to document the code
- Exercise 4: Build and run tests
- Exercise 5: Update a dockerfile file, and fill it, in order to create a docker container with a node image that can run the web server


### Exercise 2: Building new functionlities

The exercise consist of building a web server using Nodejs that serves the request of various functionality.

The requests that the server must attend are the following:

- **/Get** : 

  * Return a hello world message


- **/DaysBetweenDates**: 

  * Calculate days between two dates
  * receive by query string 2 parameters date1 and date 2, and calculate the days between those two dates.

  > **_NOTE:_** Use above information inside the Copilot inline feature in the `nodeserver.js` file. Press enter and wait for Copilot to suggest you the code.


- **/Validatephonenumber**: 

  * Receive by querystring a parameter called phoneNumber 
  * validate phoneNumber with Spanish format, for example +34666777888
  * if phoneNumber is valid return "valid"
  * if phoneNumber is not valid return "invalid"

  > **_NOTE:_** Use above information inside the Copilot inline feature in the `nodeserver.js` file. Press enter and wait for Copilot to suggest you the code.


- **/ValidateSpanishDNI**:

  * Receive by querystring a parameter called dni, for example X12345678T
  * calculate DNI letter
  * if DNI is valid return "valid"
  * if DNI is not valid return "invalid"

  > NOTE: Use above information inside a comment in the `nodeserver.js` file. In this case, you may want to see multiple solutions from Copilot to pick the one that best fits the way to calculate the letter. In order to see the firs 10 suggestions from Copilot press ctrl + enter.


- **/ReturnColorCode**:

  * Receive by querystring a parameter called color
  * read colors.json file and return the rgba field
  * get color var from querystring
  * iterate for each color in colors.json to find the color
  * return the code.hex field

  > NOTE: Lets try Copilot chat now. Paste the above information and make it as detailed as possible in the Copilot chat text box. Copilot will use by default the open file as context in order to generate the suggestion.
  
  > NOTE: Do not forget to open color.json file in Visual Studio Code, so CoPilot get all the context to make better recommendations

- **/TellMeAJoke**:

  * Make a call to the joke api and return a random joke using axios (https://official-joke-api.appspot.com/random_joke)

- **/ParseUrl**:

  * Retrieves a parameter from querystring called someurl
  * Parse the url and return the protocol, host, port, path, querystring and hash
  * Return the parsed host

- **/ListFiles**:

  * Get the current directory
  * Get the list of files in the current directory
  * Return the list of files

  > **_NOTE:_** Copilot can also help with these kind of commands locally. The feature is called Copilot in the CLI. You can learn more information about this feature [here](https://docs.github.com/en/copilot/github-copilot-in-the-cli/about-github-copilot-in-the-cli).


- **/GetFullTextFile**:

  * Read `sample.txt`` and return lines that contains the word "Fusce"

  > **_NOTE:_** Becareful with this implementation, since this normally reads the full content of the file before analizing it, so memory usage is high and may fail when files are too big.
  >
  > You can use Copilot Code completion or inline chat. Once done you can also use Copilot Inline Chat to refactor the code to put this logic in a function.

- **/GetLineByLinefromtTextFile**:

  * Read `sample.txt` line by line
  * Create a promise to read the file line by line, and return a list of lines that contains the word "Fusce"
  * Return the list of lines

  > **_NOTE:_** You can use Copilot Code completion or inline chat. Once done you can also use Copilot Inline Chat to refactor the code to put this logic in a function.

- **/CalculateMemoryConsumption**:

  * Return the memory consumption of the process in GB, rounded to 2 decimals


- **/RandomEuropeanCountry**:

  * Make an array of european countries and its iso codes
  * Return a random country from the array
  * Return the country and its iso code

  > **_NOTE:_** Copilot can help you to generate data sets.

### Exercise 3: Document the code

Documenting code is always a boring and painful task. However, we can use Copilot to document it for us. In the chat, ask Copilot to document the `nodeserver.js` file. 

### Exercise 4: Building tests

We will create automated tests to check that the functionality of the previous endpoints is correctly implemented. The tests should be together in the `test.js` file.

You can leverage Copilot to run the tests. There is a `/tests` command that you can directly run from Copilot Chat or by selecting the piece of code you want to create tests for and using the Copilot inline feature. 

### Exercise 5: Create a Dockerfile

Now that we have the new functionality added and tests covering it, lets create a Dockerfile for the Node JS Application.

- Build the image using Copilot and expose the port 3000.
- Create command to run docker in port 3000
- Test that the application is working in port 3000

## Summary

With the previous exercises you have gone through some common activities that developers usually run:
- Create new features in the code
- Work with external APIs
- Create documentation
- Create tests

However, there are many other things that Copilot can help you with. Feel free to explore other slash command in the Copilot chat like:
- `/fix`: to fix the problems in your code
- `/explain`: for Copilot to explain you what the code does
