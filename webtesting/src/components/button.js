import './button.scss'
class Button {
    render() {
        const button = document.createElement('button')
        button.innerHTML = "CLICK ME"
        button.classList.add('green-class')
        const body = document.querySelector('body');
        body.append(button)
    }
}

export default Button