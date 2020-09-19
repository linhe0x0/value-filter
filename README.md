# value-filter

Filter object data with value.

### Install

```sh
yarn add @sqrtthree/value-filter

# OR use npm
npm install @sqrtthree/value-filter
```

### How to usage

#### valueFilter(obj, omit?= string | number | boolean | null | (string | number | boolean | null)[] )

if omit is missing, all keys with truth-value are returned.

#### valueFilterWith(obj, filter: (val: string) => boolean)

Iterates over elements of obj, returning a subset of the received object which all elements predicate returns truthy for.
