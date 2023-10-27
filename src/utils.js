const getRandNumRange = (min = 2, max = 100) => (Math.floor(Math.random() * (max - min + 1)) + min);

const isEven = (number) => (number % 2 === 0);

export { getRandNumRange, isEven };
