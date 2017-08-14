/* tslint:disable */
export function Square(width, height) {
    this.width = width
    this.height = height

    this.localArea = function() {
        return this.height * this.width
    } //.bind(this)
}
Square.prototype.area = function() {
    return this.width * this.height
}

const sq = new Square(5, 5)
sq.area() /*?*/
sq.localArea() /*?*/

const area = sq.area
const area2 = sq.localArea

area() /*?*/
area2() /*?*/
