function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    
    const sorted1 = str1.toLowerCase().split('').sort().join('');
    const sorted2 = str2.toLowerCase().split('').sort().join('');

    return sorted1 === sorted2;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));
console.log(isAnagram("Kyiv", "Viky"));