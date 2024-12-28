// Исходный массив слов
const words = ['non', 'banan', 'mashina', 'asal', 'olma', 'aziza', 'Gul'];

// Слова, содержащие букву "n"
const wordsWithN = words.filter(word => word.includes('n'));

// Слова, не содержащие букву "n"
const wordsWithoutN = words.filter(word => !word.includes('n'));

// Вывод результата
console.log(wordsWithN, "'n' harfi ishtirok etgan so'zlar");
console.log(wordsWithoutN, "'n' harfi ishtirok etmagan so'zlar");
