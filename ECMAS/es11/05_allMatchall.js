const regex = /\b(Apple)+\b/g;

const phrase = 'yesterday, I goes to the supermarket and buyer a Apple, an Apple?, yes an Apple';

for (const match of phrase.matchAll(regex)){
    console.log(match)
}