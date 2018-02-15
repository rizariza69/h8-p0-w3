function balikKata(str) {

  var kata = '';

  for (var i = str.length -1; 0 <= i ; i--) {
   kata +=  str[i];
  }
  return kata
}
console.log(balikKata('hello world'));
