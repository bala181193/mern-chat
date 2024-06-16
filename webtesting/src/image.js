import sampleImage from './sample.png'

const image = () => {
    const img = document.createElement('img')
    img.src = sampleImage;
    const body = document.querySelector('body');
    body.append(img)
}

export default image