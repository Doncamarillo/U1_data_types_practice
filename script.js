/*
 * Prompt 1:
 *
 * Declare a variable called myFavoriteSong on one line and console.log the value
 * Then, using your Literals, console.log "my favorite song is..." with the song's value
 */

/*
 * Prompt 2:
 *
 * Create 3 variables using let and const, then console.log each of them, using a string literal (` ${} `} in the log
 */

/*
 * Prompt 3:
 *
 * Create a variable and assign a number to it. On a separate line for each, using console.log:
 *   - add a number to your variable
 *   - subtract a number from your variable
 *   - multiply your variable by 3
 *   - divide your variable by 7
 *   - calculate the remainder of dividing your variable by 2
 */

/*
 * Prompt 4:
 *
 * Create a variable called firstName and assign it to a string of your first
 * name. Create a variable called lastName and assign it to a string of your
 * last name.
 *
 * Create a variable called fullName and use addition to combine your firstName
 * and lastName variables.
 * Run a console.log that says 'hello my name is..." with your fullName. 
 */


/* Arrays */

// Create an array of Movies, then log the 2nd movie in your array
// Use your array methods to add a movie in to the Front of the array, then the Back of the Array, then to the 2nd index point of the array


/*
 *
 * Retrieve "Marty McFly" from each of the arrays below.
 */

let array1 = ['Marty Marion', 'Marty Feldman', 'Marty McFly', 'Marty Marion'];
let array2 = [
  ['Marty Feldman', 'Marty Marion'],
  ['Marty Stuart', 'Marty McFly'],
  ['Marty Jannetty', 'Marty Robbins']
];
let array3 = [
  ['Marty Feldman', ['Marty Marion']],
  ['Marty Stuart', ['Marty Janetty', ['Marty McFly'], 'Marty Robbins']]
];

/*
 *
 * Use the length of the array below to retrieve the second to last item.
 */

let array4 = ['a', 'b', 'c', 'd', 'e'];

/*
 *
 * Use the following arrays to answer the subprompts below.
 */

let thom = ['Thom', 1000, 'Christchurch'];
let karolin = ['Karolin', 16, 'New York'];
let kristyn = ['Kristyn', 5, 'Pittsburgh'];
let cathleen = ['Cathleen', 186, 'New York'];

// Cathleen decides that Thom can't be named "Thom" anymore. Remove "Thom" from
// the thom array and replace it with "Tom".

// Karolin just had her birthday; change Karolin's array to reflect her being
// a year older.

// Change Cathleen's hometown from New York to "Gotham City".

// Remove "Pittsburgh" from Kristyn's array and add "Oakland".

//prompt 1

let myFavoriteSong= 'Runaway'
console.log(`my favorite song is ${myFavoriteSong}`)

//prompt 2

let chips = ['lays', 'doritos', 'fritos']
console.log(`I like to eat the taco with the ${chips[1]} shell and a mix of ${chips[0]} and ${chips[2]} on the side`)

//prompt 3

let y = 6

console.log(y+6)
console.log(y-7)
console.log(y*3)
console.log(y/7)
console.log(y%2)

//prompt 4

let firstName = 'Emil Don'
let lastName = ' Camarillo'
let fullName= firstName + lastName
console.log(`Hello my name is ${fullName}`)

let movies = ['didi', 'titanic', '21 jump street', 'Space Jam']
console.log(movies[1])

movies.unshift('Like Mike')
console.log(movies)

movies.push('transformers')
console.log(movies)

//line 40 was wrong 30 seconds ago i wasnt sure what the prompt asked not sure how to 
    //cite but code was revised by taking note of classmate's success

movies.splice(1,0,'titanic')
console.log(movies)


let array1 = ['Marty Marion', 'Marty Feldman', 'Marty McFly', 'Marty Marion']
console.log(array1[2])

let array2 = [
    ['Marty Feldman', 'Marty Marion'],
    ['Marty Stuart', 'Marty McFly'],
    ['Marty Jannetty', 'Marty Robbins']
]
console.log(array2[1][1])
let array3 = [
    ['Marty Feldman', ['Marty Marion']],
    ['Marty Stuart', ['Marty Janetty', ['Marty McFly'], 'Marty Robbins']]
  ];
  console.log(array3[1][1][1])

  let array4 = ['a', 'b', 'c', 'd', 'e'];
console.log(array4[array4.length-2]) 



  let thom = ['Thom', 1000, 'Christchurch'];
let karolin = ['Karolin', 16, 'New York'];
let kristyn = ['Kristyn', 5, 'Pittsburgh'];
let cathleen = ['Cathleen', 186, 'New York'];

thom.shift(0)
thom.unshift('Tom')
console.log(thom)

karolin.shift(0)
karolin.shift(0)
karolin.unshift('17')
karolin.unshift('Karolin')
console.log(karolin)

kristyn.pop(2)
kristyn.push('gotham city')
console.log(kristyn)

cathleen.pop(2)
cathleen.push('Oakland')
console.log(cathleen)