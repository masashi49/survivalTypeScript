interface ValueObjct<T> {
    value: T;
    toString(): string; // stringを返す関数
}


//interfaceは実装の時にimplementsを使う
class UseId implements ValueObjct<number> {
    public value: number;
    public constructor(value: number) {
        this.value = value
    }
    public toString(): string{
        return `${this.value}`
    }
}

class AADASER<ID extends ValueObjct<unknown>>{
    private id: ID
    public constructor(id: ID) {
        this.id = id
    }
}
