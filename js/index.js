    const numbers  = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

    const positiveNumbers = numbers.filter(elem => elem > 0);
    const numberOfPositiveElements = positiveNumbers.length;
    const sumOfPositiveNumbers = positiveNumbers.reduce((sum, elem) => sum + elem, 0) ;

    const minNumbers =  numbers.reduce((min, current) => Math.min(min, current));
    const minIndex = numbers.indexOf(minNumbers);

    const maxNumbers =  numbers.reduce((max, current) => Math.max(max, current));
    const maxIndex = numbers.indexOf(maxNumbers);

    const negativeNumbers = numbers.filter(elem => elem < 0);
    const numberOfNegativeElements = negativeNumbers.length;

    const oddPositiveElements = numbers.filter(elem => elem > 0 && elem % 2 !== 0);
    const numberOfOddPositiveElements = oddPositiveElements.length;

    const evenPositiveElements = numbers.filter(elem => elem > 0 && elem % 2 === 0);
    const numberOfEvenPositiveElements = evenPositiveElements.length;

    const sumEvenPositiveElements = evenPositiveElements.reduce((sum, elem) => sum + elem, 0);

    const sumOddPositiveElements = oddPositiveElements.reduce((sum, elem) => sum + elem, 0);

    const productPositiveElements = positiveNumbers.reduce((product, item) => product * item, 1);
    const bigIntResult = BigInt(productPositiveElements);

    const maxElement = numbers.reduce((max, current) => Math.max(max, current));
    const resultNumbers = numbers.map(number => (number === maxElement) ? number : 0);

    let result = `1. Given array [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,- 4,12,-35,4,47].
    Find the sum and number of positive elements :<br>sum ${sumOfPositiveNumbers} and positive elements ${numberOfPositiveElements}.`
        + '<br>'
    + `2. Find the minimum array element and its sequence number : min element ${minNumbers} and sequence number ${minIndex}.`
        + '<br>'
    + `3. Find the maximum array element and its sequence number : max element ${maxNumbers} and sequence number ${maxIndex}.`
        + '<br>'
    + `4. Determine the number of negative elements : ${numberOfNegativeElements}.`
        + '<br>'
    + `5. Find the number of odd positive elements : ${numberOfOddPositiveElements}.`
        + '<br>'
    + `6. Find the number of even positive elements : ${numberOfEvenPositiveElements}.`
        + '<br>'
    + `7. Find the sum of even positive elements : ${sumEvenPositiveElements}.`
        + '<br>'
    + `8. Find the sum of odd  positive elements : ${sumOddPositiveElements}.`
        + '<br>'
    + `9. Find the product of positive elements : ${bigIntResult}.`
        + '<br>'
    + `10. Find the largest among the elements of the array, set the others to zero : ${resultNumbers}.`

    document.write(result)