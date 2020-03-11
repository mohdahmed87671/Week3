// Assignment Code
var generateBtn = document.querySelector("#generate");

var characterset = [];
var ascii_low = 0;
var ascii_high = 0;
// Write password to the #password input
function writePassword() {
  //gatherCriteria()
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  characterset = [];

}

function generatePassword(){
  //var updatedcharset = gatherCriteria()
  var result = '';
  var randomindex = 0;
  var passwordlength = prompt('Enter length of password: ');
  passwordlength = parseInt(passwordlength)

  if(passwordlength < 8 || passwordlength > 128){
    passwordlength = prompt('Enter a length greater than 8 and less than 128:');
    passwordlength = parseInt(passwordlength);
  }

  var islowercase = confirm('Do you want to include lowercase charactes?');
  var isuppercase = confirm('Do you want ot include upper case charactes?')
  var isnumeric = confirm('Do you want to include numbers ?');
  var isspecialchar = confirm('Do you want to include special characters ?');

  if(islowercase){
    ascii_low = 97;
    ascii_high = 122;
    //var len1 = ascii_high - ascii_low;
    for(var i = ascii_low; i< ascii_high;i++){
      var tempstring = String.fromCharCode(i);
      characterset.push(tempstring);
    }
    console.log('lowercase charset: '+characterset);
  }

  if(isuppercase){
    ascii_low = 65;
    ascii_high = 90;
    //var len1 = ascii_high - ascii_low;
    for(var i = ascii_low; i< ascii_high;i++){
      var tempstring = String.fromCharCode(i);
      characterset.push(tempstring);
    }
    console.log('uppercase charset: '+characterset);
  }

  if(isnumeric){
    ascii_low = 48;
    ascii_high = 57;
    //var len1 = ascii_high - ascii_low;
    for(var i = ascii_low; i<= ascii_high;i++){
      var tempstring = String.fromCharCode(i);
      characterset.push(tempstring);
    }
    console.log('numeric charset: '+characterset);
  }

  if(isspecialchar){
    ascii_low = 33;
    ascii_high = 47;
    //var len1 = ascii_high - ascii_low;
    for(var i = ascii_low; i<= ascii_high;i++){
      var tempstring = String.fromCharCode(i);
      characterset.push(tempstring);
    }
    console.log('numeric charset: '+characterset);
  }

  for(var j=0;j<passwordlength; j++){
    //randomindex = Math.random() * (characterset.length);
    result += characterset[Math.floor(Math.random()*characterset.length)];;
  }
  console.log(result);
  return result;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
