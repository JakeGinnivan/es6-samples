/* tslint:disable */
class Shape {
    width: number
    height: number

    constructor(width, height) {
        this.width = width
        this.height = height
    }

    area() {
        return this.width * this.height
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super(sideLength, sideLength)
    }
}

class Cube extends Shape {
    depth: number

    constructor(width, height, depth) {
        super(width, height)
        this.depth = depth
    }

    area() {
        return this.width * this.height * this.depth
    }
}
