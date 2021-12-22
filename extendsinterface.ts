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
    public toString(): string {
        return `${this.value}`
    }
}

class AADASER<ID extends ValueObjct<unknown>>{
    private id: ID
    public constructor(id: ID) {
        this.id = id
    }
}

class DataStoreage<T> {
    private data: T[] = []
    addTtem(item: T) {
        this.data.push(item)
    }
    removetem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getitems() {
        return [...this.data]
    }
}

const teststorraaa = new DataStoreage<string>();
teststorraaa.addTtem("data1")
teststorraaa.addTtem("data2")
teststorraaa.removetem("data1")
console.log(teststorraaa.getitems())
