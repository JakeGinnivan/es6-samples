/* tslint:disable */

/** Spread */
const obj = { foo: 'foo!', bar: '' }
const obj2 = obj
obj2.bar = 'bar!'

obj
console.log(obj === obj2)

/** Array sprea */
const array1 = ['one!', 'two!']
const array2 = ['three!', 'four!']
const five = 'five!'

console.log([array1, array2, five])

/** Rest */
const restFunc = function() {
    console.log(arguments)
}
