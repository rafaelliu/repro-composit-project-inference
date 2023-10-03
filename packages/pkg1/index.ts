
export abstract class ParameterizedType<TParams = unknown> {
    private _param?: TParams;
}

export type InferParameter<T> = T extends ParameterizedType<infer X> ? X : never;

export class Wrapper<TProvider extends ParameterizedType = ParameterizedType> {
    parameterValue: InferParameter<TProvider>;
}

