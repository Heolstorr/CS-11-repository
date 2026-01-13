function findSecondLargest(arr) {

    if (arr.length < 2) {
        return "Array is too short";
    }

    let largest = -Infinity;
    let secondLargest = -Infinity; 

    for (const element of arr) {
        if (element > largest) {  

            secondLargest = largest;
            largest = element;

        } else if (element > secondLargest && element < largest) {
            secondLargest = element;
        }
    }
   
    if (secondLargest === -Infinity) {
        return "No second largest number";
    }

    return secondLargest;
}


const elements = [10, 5, 20, 8, 12]; 
console.log(findSecondLargest(elements));