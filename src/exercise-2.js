const getTheExactNumber = (numbers) => {
    const multiplesOfThree = numbers.filter(num => num % 3 === 0);
    return multiplesOfThree.reduce((max, curr) => Math.max(max, curr), 0);
}

export default getTheExactNumber;