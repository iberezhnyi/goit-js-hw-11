export default () => {
  const randomIntUniqueNumbersArray = [];

  for (let i = 1; i <= 10; i += 1) {
    const randomIntNumber = Number.parseInt(Math.random() * (200 - 1) + 1);

    if (!randomIntUniqueNumbersArray.includes(randomIntNumber)) {
      randomIntUniqueNumbersArray.push(randomIntNumber);
    }

    if (randomIntUniqueNumbersArray.length === 4)
      return randomIntUniqueNumbersArray;
  }
};
