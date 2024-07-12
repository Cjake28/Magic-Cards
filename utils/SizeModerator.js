import { Dimensions } from 'react-native';

let { width, height } = Dimensions.get("window");

console.log(height, width)
const guidelineBaseWidth = 375; // typical width for newer phones (19.5:9 aspect ratio)
const guidelineBaseHeight = 812; // typical height for newer phones (19.5:9 aspect ratio)

Dimensions.addEventListener('change', (e) => {
    width = e.window.width;
    height = e.window.height;
    console.log(`There was a change in dimension`)  })

if(width < height) {
    width = Dimensions.get("window").height;
    height = Dimensions.get("window").width;
}

console.log(`Reversed height and width: ${height} ${width}`)
const aspectRatio = guidelineBaseHeight/guidelineBaseWidth;
console.log(`Aspect Ratio: ${aspectRatio}`);

const horizontalScale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (horizontalScale(size) - size) * factor;

export { horizontalScale, verticalScale, moderateScale };
