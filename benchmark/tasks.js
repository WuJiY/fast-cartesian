import bigCartesianLib from 'big-cartesian'
import cartesianLib from 'cartesian'
import cartesianProductLib from 'cartesian-product'
import fastCartesianLib from 'fast-cartesian'
import fastCartesianProductLib from 'fast-cartesian-product'
import lodash from 'lodash'
// eslint-disable-next-line import/no-unassigned-import
import 'lodash.product'
import PowerCartesianProduct from 'power-cartesian-product'

// eslint-disable-next-line fp/no-let, init-declarations
let matrix

// Retrieve matrix used as argument based on the input, e.g. [4, 16]
const beforeAll = function ({ size: [length, secondLength] }) {
  const array = Array.from({ length: secondLength }, getIndex)
  // eslint-disable-next-line fp/no-mutation
  matrix = Array.from({ length }, () => array)
}

const getIndex = function (_, index) {
  return index
}

export const fastCartesianMain = {
  beforeAll,
  main() {
    fastCartesianLib(matrix)
  },
}

export const bigCartesian = {
  beforeAll,
  main() {
    ;[...bigCartesianLib(matrix)]
  },
}

export const fastCartesianProduct = {
  beforeAll,
  main() {
    fastCartesianProductLib(matrix)
  },
}

export const cartesianProduct = {
  beforeAll,
  main() {
    cartesianProductLib(matrix)
  },
}

export const powerCartesianProduct = {
  beforeAll,
  main() {
    ;[...new PowerCartesianProduct(matrix)]
  },
}

export const cartesian = {
  beforeAll,
  main() {
    cartesianLib(matrix)
  },
}

export const lodashProduct = {
  beforeAll,
  main() {
    lodash.product(...matrix)
  },
}
