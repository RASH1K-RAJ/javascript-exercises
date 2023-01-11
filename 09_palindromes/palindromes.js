const palindromes = function (words) {
    let symbols = words.toLowerCase().split('');
    const letters = symbols.filter((symbol) => 'a' <= symbol && symbol <= 'z');
    return letters.toString() === letters.reverse().toString();
};

//THE WAY THEY DID IT: 
// const palindromes = function(string) {
//     const processedString = string.toLowerCase().replace(/[^a-z]/g, "");
//     return (
//       processedString
//         .split("")
//         .reverse()
//         .join("") == processedString
//     );
//   };

// Do not edit below this line
module.exports = palindromes;
