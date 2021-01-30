# _project-3_

#### _Mr. Rodgers machine_

##### By _**Michael Burton**_

## Technologies Used

* _Html_
* _css w/ bootstrap_
* _javaScript with jQuery_

## Description

_This is the webpage that allows a user to input a number and have a return of "beeps", "boops", "Wont you be my neighbor?" and numbers( depending on the number inputted)._

## Setup/Instalation Requirements

1. Open terminal
2. input these commands into command line:

* cd desktop
* git clone https://github.com/Michael-Burton1/project-3.git
* code .

### To view project in browser you can:

* right click the index.htnl file and open in live browser.  
OR  
* copy and paste this URL into your browser:  https://michael-burton1.github.io/project-3/

## Known Bugs

*_no know bugs_

## Specifications

```
Describe: beepBoop()
Test: if something is inputted that is not a number it should alert user to input a number.
Expect: beepBoop("hi").toAlert("enter a real number")


Test: "it should retun an array with a 0 if the number inputted is 0"
Expect: (beepBoop(0).toEqual([0]));

Test: " it should return an array with the index length the same length +1 of the number inputted"
Expect; beeBoop(n).toEqual([length of n+1])

Test: "it should replace every instance of a number containing 3 with 'wont you be my neighbor?'."
Expect: beepBoop(3).toReplace(["wont you be my neighbor?"]);

Test: "it should replace every instance of a number with a 2 that dosent contain a 3 with 'boop'."
Expect: beepBoop(2).toReplace(["boop"]);

Test: "it should replace every instance of a number containing a 1 that does not contain a 2 or a 3 to be replaced by a 'beep'."
Expect: beeBoop(1).toReplace(["beep"]);
```

## Licensing

_Licensed under the [MIT License](LICENSE)._


## Contact Information

_Michael Burton (micbur1@gmail.com)_

