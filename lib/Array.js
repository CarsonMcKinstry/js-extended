
/**
 * @return {any} the last element of an array
 */
function last() {
  return this[this.length - 1];
}

Array.prototype.last = last;

/**
 * @return {any} the first element of an array
 */
function first() {
  return this[0];
}

Array.prototype.first = first;

/**
 * @param {Number} [n=1] - size of chunks 
 * @return {array} a new array of arrays of size n
 */
function chunk(n=1) {
  if (!this.length || n < 1) {
    return [];
  }
  
  let index = 0;
  let result = [];
  while (index < this.length) {
    result.push(this.slice(index, index += n));
  }
  return result;
}

Array.prototype.chunk = chunk;

/**
 * @param {any} v - the given value
 * @return {boolean} a boolean representing if the given value, v, occupies the zeroth index
 */
function startsWith(v) {
  return this.length > 0 && this.first() === v;
}

Array.prototype.startsWith = startsWith;

/**
 * @param {any} v - the given value
 * @return {boolean} a boolean representing if the given value, v, occupies the last index
 */
function endsWith(v) {
  return this.length > 0 && this.last() === v;
}

Array.prototype.endsWith = endsWith;

// /**
//  * @param {...Array} arr - the 
//  * @return {Array} an array of arrays
//  */
// function zip(arr) {

// }

/**
 * @return {Array} an array of unique values
 */
function unique() {
  return this.reduce((acc, val) => {
    if (!acc.includes(val)) {
      return [...acc, val];
    }
    return acc;
  }, []);
}

Array.prototype.unique = unique;