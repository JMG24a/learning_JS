let valor = process.argv[2];

const dictionary = [
  { condition: (v) => v < 18, action: () => console.log('you are a minor.') },
  { condition: (v) => v >= 18 && v < 65, action: () => console.log('you are an adult') },
  { condition: (v) => v >= 65, action: () => console.log('you are an older adult.') },
];

dictionary.some(item => {
  if (item.condition(valor)) {
    item.action();
    return true;  // Finish loop when find a coincidence
  }
  return false;
});