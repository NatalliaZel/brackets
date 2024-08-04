module.exports = function check(str, bracketsConfig) {
  let openedBracketsArray = [];
  let closedBracketsArray = [];
  let equalBracketsArray = [];

  let stack = [];

  for (let item of bracketsConfig) {
    openedBracketsArray.push(item[0]);
  }

  for (let item of bracketsConfig) {
    closedBracketsArray.push(item[1]);
  }

  for (let item of bracketsConfig) {
    if (item[0] === item[1]) {
      equalBracketsArray.push(item[0]);
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (openedBracketsArray.includes(str[i])) {
      stack.push(str[i]);

      if (
        stack.length > 1 &&
        equalBracketsArray.includes(stack[stack.length - 1]) &&
        equalBracketsArray.includes(stack[stack.length - 2]) &&
        equalBracketsArray.indexOf(stack[stack.length - 1]) ===
          equalBracketsArray.indexOf(stack[stack.length - 2])
      ) {
        stack.pop();
        stack.pop();
      }
    } else if (
      !openedBracketsArray.includes(str[i]) &&
      stack.length > 0 &&
      openedBracketsArray.indexOf(stack[stack.length - 1]) ===
        closedBracketsArray.indexOf(str[i])
    ) {
      stack.pop();
    } else {
      return false;
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};
