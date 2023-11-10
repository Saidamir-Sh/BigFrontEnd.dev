// Say you have multiple versions of a program, write a program that will find and return the first bad revision given a isBad(version) function.
// Versions after first bad version are supposed to be all bad versions.

// notes:
// Inputs are all non-negative integers
// if none found, return -1

function firstBadVersion(isBad) {
	// firstBadVersion receive a check function isBad
  // and should return a closure which accepts a version number(integer)
  let min = 0;
  let max;

  return (version) => {
    let left = min
    let right = max || version

    while(left <= right) {
      let mid = Math.floor((left + right) / 2)
      if(isBad(mid)) {
        right = mid - 1
        max = right
      } else {
        left = mid + 1
        min = left
      }
    }
    return left <= version ? left : -1
    // write your code to return the first bad version
    // if none found, return -1
  }
}