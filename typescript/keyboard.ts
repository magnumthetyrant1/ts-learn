export function keyboard () {
  qwertyAlphabet = 'QWERTYUIOPASDFGHJKLZXCVBNM'
  keyboard = `<div class="keyboard">`
  for(let i = 0; i < qwertyAlphabet.length; i++){
    keyboard += `<input type="button" value="${qwertyAlphabet[i]}">`
  }
}
