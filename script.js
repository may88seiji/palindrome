function palindrome(str) {
 var i =str.replace(/[\W_]/g, '').toLowerCase();
 return i === i.split('').reverse().join('');
}