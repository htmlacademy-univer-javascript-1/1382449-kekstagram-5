const checkLength = (string = '', maxLength = 1) => (string.length <= maxLength);

const checkPalindrome = function (string = '') {
  string = string.toLowerCase().replaceAll(' ', '');
  let result = '';
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result === string;
};


const findNumbers = function (string) {
  let result = '';
  if (!string.isNaN) {
    string = string.toString();
  }
  for (let i = 0; i < string.length; i++) {
    if (string[i] >= 0 && string[i] <= 9) {
      result += string[i];
    }
  }
  return parseInt(result.replaceAll(' ', ''), 10);
};

checkLength();
checkPalindrome();
findNumbers();
