let wordPalindrome = "tatu";
let isPalindrome = wordPalindrome.split("").reverse();
wordPalindrome = wordPalindrome.split("");

for (i in wordPalindrome){
  if ( wordPalindrome[i] === isPalindrome[i]){
    
    console.log("TRUE");
    return true
  } else {
    
    console.log("FALSE");
    return false
  };
};

