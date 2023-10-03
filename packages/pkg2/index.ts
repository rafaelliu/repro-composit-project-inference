import { ParameterizedType, Wrapper } from '@mono/pkg1'

class Instance extends ParameterizedType<string> { }

const obj = new Wrapper<Instance>();

// Language Service infers type just fine, but this will error with tsc -b
// index.ts:9:7 - error TS2322: Type 'unknown' is not assignable to type 'string'.
const stringValue: string = obj.parameterValue
console.log(stringValue)