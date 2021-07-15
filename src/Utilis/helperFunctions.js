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

export const responsiveHeight = val => {
  const {height} = Dimensions.get('window');
  return percentageCalculation(height, val);
};

export const convertMinutesToReadableTime = time => {
  let hours = (time / 60).toFixed();
  if (hours < 10) hours = '0' + hours;
  const minutes = time % 60;
  return `${hours}h ${minutes}m`;
};

export const converToDollars = val => {
  return '$' + val.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

export const getGenresNames = val => {
  // val = [{id,name},{id,name}]
  let result = '';
  for (let i = 0; i < val.length; ++i) {
    result += val[i].name;
    result += i === val.length - 1 ? '.' : ', ';
  }
  return result;
};