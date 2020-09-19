import { isArray, isTruthValue } from './helpers'

type Value = string | number | boolean | null

export function valueFilter<T>(obj: Record<string, any>, omit: Value[]): T
export function valueFilter<T>(obj: Record<string, any>, omit?: Value): T
export function valueFilter<T>(obj: Record<string, any>, omit?: any): T {
  const result: any = {}

  Object.keys(obj).forEach((item) => {
    const value = obj[item]

    let pick = false

    if (omit === undefined) {
      pick = isTruthValue(value)
    } else if (isArray(omit)) {
      pick = (omit as any).indexOf(value) === -1
    } else {
      pick = value !== omit
    }

    if (pick) {
      result[item] = value
    }
  })

  return result
}

export function valueFilterWith<T>(
  obj: Record<string, any>,
  filter: (val: string) => boolean
): T {
  const result: any = {}

  Object.keys(obj).forEach((item) => {
    const value = obj[item]

    const pick = filter(value)

    if (pick) {
      result[item] = value
    }
  })

  return result
}
