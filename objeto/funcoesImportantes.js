const pessoa = {
    nome: 'Lara',
    idade: 12,
    peso: 30
}

console.log(Object.keys(pessoa))

console.log(Object.values(pessoa))

console.log(Object.entries(pessoa))
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2002'
})
pessoa.dataNascimento = '01/01/2001'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)
console.log(obj)

Object.freeze(obj)
obj.c = 1234
console.log(obj)