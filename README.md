describe: beepBoop()
test: "it should retun an array with a 0 if the number inputted is 0"
expect(beepBoop(0).toEqual([0]));

test: " it should return an array with the index length the same length +1 of the number inputted"
expect beeBoop(n).toEqual([length of n+1])

Test: "it should replace every instance of a number containing 3 with 'wont you be my neighbor?'."
expect: beepBoop(3).toReplace(["wont you be my neighbor?"]);

Test: "it should replace every instance of a number with a 2 that dosent contain a 3 with 'boop'."
Expect: beepBoop(2).toReplace(["boop"]);

Test: "it should replace every instance of a number containing a 1 that does not contain a 2 or a 3 to be replaced by a 'beep'."
expect: beeBoop(1).toReplace(["beep"]);