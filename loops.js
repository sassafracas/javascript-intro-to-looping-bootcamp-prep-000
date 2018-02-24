function forLoop (array) {
  for (var i = 0; i < 25; i++) {
  if (i < 1) {
    return `I am ${i} strange loops.`
  }
  else if (i > 1 ) {
    return `I am ${i} strange loops.`
  }
  else {
    array.push ["I am 1 strange loop"]
  }
}
return array
}
