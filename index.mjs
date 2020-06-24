
/**
 * @param {string} word
 * @param {boolean?} [shark] 
 * 
 */
function xxSharkDoo(word, shark) {
  let l = `${word}${shark ? '' : ' shark'}`;
  let o = `${l}, ` + `doo `.repeat(6) + "\n";
  return o.repeat(3) + `${l}!\n`;
}



function babySharksong() {
  return xxSharkDoo('Baby') +
    xxSharkDoo('Mommy') +
    xxSharkDoo('Daddy') +
    xxSharkDoo('Grandpa') +
    xxSharkDoo("Let's go hunt", true) +
    xxSharkDoo('Run away', true) +
    xxSharkDoo('Safe at last', true) +
    xxSharkDoo("It's the end", true)
}

export { xxSharkDoo, babySharksong };
