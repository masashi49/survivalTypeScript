//ジェネリクスにしなくてもいい
function hoge<T extends string>(item: T): T {
    return item
}
hoge("123");


// オブジェクトを引数に受け取るときはextendsで担保する
interface argTypes {
    name: string;
}
interface argTypes {
    id: number,
    age: number
}

interface user {
    pass: string
}

function getName<T extends argTypes>(arg: T): string {
    return `${arg.name}${arg.name}${arg.age}`;
}

getName({
    famiry: "鈴木一郎",
    id: 243,
    age: 234,
    name: "田中太郎",
    sadf: "田中太郎"
});
