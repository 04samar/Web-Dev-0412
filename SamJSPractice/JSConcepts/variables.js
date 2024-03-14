/* Keywords to declare variables: var |  let  |  const
var and const not used much. let is used nowadays.*/
let warrior_ = "Experience";
let sumGives$ = 5;
let thisIsReality = true;
let decimal = "0.896";
let myBelovedNum = "45";
let count = 3 + 4;
// This code will give error because acc to it , num2 isn't declared>> let num1, num2 = 34, 89;
console.log(warrior_ + " " + sumGives$ + " " + thisIsReality + " " + decimal + " " + myBelovedNum + " " + count);
let bellRing = warrior_ + " " + sumGives$ + " " + thisIsReality + " " + decimal + " " + myBelovedNum + " " + count;
console.log(bellRing);
let Contra = 46;
Contra += Contra;
console.log(Contra);
//Naming the variable: -
/*A variable name can't be a number or start with a number. 
It can't be Javascript's reserved words or keywords.
KEYWORDS: they are special words that act as programming instructions like: alert or var
Reserved words that we can't use: -
abstract |  as |  boolean | break |  byte |  case |  catch |  char |  class |  continue |  const | 
 debugger |  default |  delete |  do |  double | else |  enum |  export |  extends |  false |  final | 
  finally |  float |  for |  function |  goto |  if |  implements |  import |  in |  instanceof |  int | 
   interface |  is |  long |  namespace |  native |  new |  null |  package |  private |  protected |  
   public |  return |  short |  static | super) |  synchronized |  this |  throw |  throws |  
   transient |  true |  try |  typeof |  use |  var |  void |  volatile |  while |  with |

   1. A variable name can't contain any spaces.
   2. A variable name can contain only letters, numbers, dollar signs, and underscores.
   3. Variable names are casesensitive. myvar, myVAR, myvar, myvAr, myvAR, myvaR --> all these are different variables.
   4. Generally it's preferred to use camel casing while naming variables.Ex: myBrain, myStupidBrain, whatThehell
*/
let unFamiliar = 3;
console.log(unFamiliar); // answer  should be 3
unFamiliar++;
console.log(unFamiliar);  // answer  should be 4
unFamiliar+=1;
console.log(unFamiliar);  // answer  should be 5
unFamiliar = unFamiliar + 1;
console.log(unFamiliar);  // answer  should be 6
unFamiliar = --unFamiliar;
console.log(unFamiliar);  // answer  should be 5
console.log(-4-2-(6*5));
console.log("Samarpreet "+"is "+"23 "+"years "+"old.");
console.log("24"+6);
console.log("24"+"6");
let origami = "Today I made: " + "cat " + "and " + "crane.";
console.log(origami);
/* This code should work on the browser's console log: -
var spec = prompt("Your species?","human");
console.log(spec);*/