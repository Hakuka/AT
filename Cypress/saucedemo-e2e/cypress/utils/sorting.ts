export function isSortedPriceAscending(arr: number[]): boolean {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

export function isSortedPriceDescending(arr: number[]): boolean {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      return false;
    }
  }
  return true;
}

export function isSortedNameAscending(arr: string[]): boolean {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1].localeCompare(arr[i]) > 0) {
      return false;
    }
  }
  return true;
}

export function isSortedNameDescending(arr: string[]): boolean {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1].localeCompare(arr[i]) < 0) {
      return false;
    }
  }
  return true;
}
