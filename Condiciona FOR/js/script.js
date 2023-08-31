const arrayNumeros = [1,2,3,4,5,6,7,8,9]

arrayNumeros.push(20)

console.log(arrayNumeros);

for (let i = 0; i < arrayNumeros.length; i++) {
    const element = arrayNumeros[i];
    
    console.log(element);
}