/* tslint:disable */

/** Array destructuring */
const destructuringArray = ['one!', 'two!', 'three!']

/** Object destructuring */
const destructuringObj = { foo: 'foo!', bar: 'bar!' }

/** Parameter destructuring */
const func = obj => {
    obj.foo /*?*/
    obj.bar /*?*/
}
