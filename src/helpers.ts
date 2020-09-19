export function isTruthValue(val: any): boolean {
  return !!val
}

export function isArray(val: any): boolean {
  return Object.prototype.toString.call(val) === '[object Array]'
}
