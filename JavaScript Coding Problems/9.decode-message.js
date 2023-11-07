// Your are given a 2-D array of characters. There is a hidden message in it.

// I B C A L K A
// D R F C A E A
// G H O E L A D 
// The way to collect the message is as follows

// start at top left
// move diagonally down right
// when cannot move any more, try to switch to diagonally up right
// when cannot move any more, try switch to diagonally down right, repeat 3
// stop when cannot neither move down right or up right. the character on the path is the message
// for the input above, IROCLED should be returned.

// notes:
// if no characters could be collected, return empty string
/**
 * @param {string[][]} message
 * @return {string}
 */
function decode(message) {
    let row = 0, col = 0
    let result = ''
    
    while(message[row] && message[row][col]) {
        // keep adding characters on the path until we reach end
        result += message[row][col]
        // if we still can move diagonally down right then increment the row , else move up right by decrementing row
        message[row + 1] ? row++ : row--
        // constantly increment col because we are moving diagonally
        col++
    }
    
    return result
  }
