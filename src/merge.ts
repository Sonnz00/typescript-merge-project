export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {

  // Reverse descending array manually
  const reversedCollection3: number[] = [];

  for (let i = collection_3.length - 1; i >= 0; i--) {
    reversedCollection3.push(collection_3[i]);
  }

  // Merge first two ascending arrays
  const merged12 = mergeTwoSortedArrays(
    collection_1,
    collection_2
  );

  // Merge with reversed collection_3
  return mergeTwoSortedArrays(
    merged12,
    reversedCollection3
  );
}

function mergeTwoSortedArrays(
  arr1: number[],
  arr2: number[]
): number[] {

  const result: number[] = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {

    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}