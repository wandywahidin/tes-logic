
// Anagram adalah istilah dimana suatu string jika dibolak balik ordernya maka akan sama eg.'aku' dan 'kua' adalah Anagram, 'aku' dan 'aka' bukan Anagram
// Buatlah function yang dapat menerima list of array dan
// bisa memisahkan datanya sesuai anagramnya
// Contoh
// Input: ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']
// Expected Outputs
// [
// ["kita", "atik", "tika"], ["aku", "kua"], ["makan"], ["kia"]
// ]

const collectAnagram = (listWord) => {
    let anagram = []
    let group = [];
    for(word of listWord) {
        let letters = word.split('').sort().join('')

        anagram[letters] = anagram[letters] || []

        anagram[letters].push(word)
    }

    for(let key in anagram) {
        group.push(anagram[key])
    }
    return group
}
const Input = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua', 'kamu', 'ikan', 'kain', 'nikah'];

console.log(collectAnagram(Input));