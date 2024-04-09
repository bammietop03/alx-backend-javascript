export default function appendToEachArrayValue(array, appendString) {
  const NewArray = [];
  for (const x of array) {
    NewArray.push(appendString + x);
  }

  return NewArray;
}
