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