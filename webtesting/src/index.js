import displayHelloworld from './helloWorld'
import image from './image'
import Button from './components/button'
displayHelloworld()
image()

const button = new Button()

button.render()

//ES6 to ES5
const multiply = (a, b) => {
    const c = a + b
    console.log(`total ${c}`)

}
multiply(1, 2)