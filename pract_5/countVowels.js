function countVowels(s) {
    const vowels = "aeiouAEIOU";
    var count = 0;
    
    for (const char of s) {
        if (vowels.includes(char)){
            count++;
        }
    }
    return count;
};


const s = "Hello World";
console.log(countVowels(s));