const fruits = ["apple", "banana"]
fruits.push("orange") // 元の配列を変更してしまう、破壊的操作
console.log(fruits)

const footds = ["menma", "takouyaki"]
const all = fruits.concat(footds)
console.log(fruits); // ['apple', 'banana']
console.log(all); // ['apple', 'banana', 'menma', 'takoyaki']

const alls = [...fruits,...footds]
console.log(alls)


type userType = {
    id: number;
    displayName: string;
    fullName: {
        firstName: string;
        lastName: string;
    }
}
const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

function userId({ id }: { id: number }): number{ //分割代入で受け取って分割代入の方指定した
    
    return id
}


console.log(userId(user))
