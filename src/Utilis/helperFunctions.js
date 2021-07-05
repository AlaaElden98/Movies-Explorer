import {Dimensions} from 'react-native';

const percentageCalculation = (max, val) => max * (val / 100);

/**
 * @param height
 * @param width
 * @param {number} val
 * @returns the %val of the screen size
 */
const fontCalculation = (height, width, val) => {
  const widthDimension = height > width ? width : height;
  const aspectRatioBasedHeight = (16 / 9) * widthDimension;
  return percentageCalculation(
    Math.sqrt(
      Math.pow(aspectRatioBasedHeight, 2) + Math.pow(widthDimension, 2),
    ),
    val,
  );
};
export const responsiveFontSize = val => {
  const {height, width} = Dimensions.get('window');
  return fontCalculation(height, width, val);
};
/**
 *
 * @param {number} val
 * @returns %val from the screen width
 */
export const responsiveWidth = val => {
  const {width} = Dimensions.get('window');
  return percentageCalculation(width, val);
};
