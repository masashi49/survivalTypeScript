//ジェネリクスにしなくてもいい
function hoge<T extends string>(item: T): T {
    return item
}
hoge("123");


// オブジェクトを引数に受け取るときはextendsで担保する
interface argTypes extends user {
    id: number;
    age: number;
    name: string;
}

interface argTypes {
    fdsads: number;
}


type user = {
    pass: string
}

type usereee = {
    dome: string
} & user

function sfdasdf<T extends usereee>(arg: T): string {
    return `${arg.pass}${arg.dome}${arg.age}`;
}

function getName<T extends argTypes>(arg: T): string {
    return `${arg.name}${arg.name}${arg.age}${arg.pass}${arg.fdsads}`;
}

getName({
    pass: "鈴木一郎",
    id: 243,
    age: 234,
    name: "田中太郎",
    sadf: "田中太郎",
    fdsads: 3444478
});
