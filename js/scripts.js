function translatePigLatin(str) {
  var vowels = [ 'a', 'e', 'i', 'o', 'u' ];
  var numbers = [ '0','1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (vowels.includes(str.charAt(0))) {
    return str += "way";
  } else if(!vowels.includes(str.charAt(0)) && (str.slice(0,2))) {

    return str.slice(1) + str[0] + "ay";

  }

    else  {
    return str.substr(2) + str.slice(0,2) + "ay";

  }




}

console.log(translatePigLatin("8"));
