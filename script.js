function palindrome() {
  var num = document.querySelector(".inputbox").value.toUpperCase();

  var alpha = num 
  .split('')
  .reverse()
  .join('');


  if(num.length <= 2) {
   document.querySelector(".list").innerHTML = "type more values";
  }
  else if(num.length >= 3 && num===alpha) {
    document.querySelector(".list").innerHTML = `<br>"${num}"</b> palindrome`;
  }
  else {
    document.querySelector(".list").innerHTML = `<br>"${num}"</b> not`;
  }
}