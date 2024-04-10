const set = new Set();

set.add(1);
set.add('Lydia');
set.add([{ name: 'Lydia' }]);
set.add(true);


for (let item of set) {
  console.log(item + 3);
}
