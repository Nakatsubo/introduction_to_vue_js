# Introduction to Vue.js

## Note down JavaScript methods.

### Console.assert()
console.assert() は、アサーションが false になる場合に、コンソールへエラーメッセージを出力します。アサーションが true になる場合は、何も行いません。

#### [Console.assert()](https://developer.mozilla.org/ja/docs/Web/API/console/assert)

### typeof
typeof 演算子は、未評価のオペランドの型を示す文字列を返します。

#### [typeof](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/typeof)

## Note down Vue.js methods.

### $watch
第一引数に監視対象の値を返す関数、第二引数に値が変わった場合に呼ばれるコールバック関数を返す。

```javascript
let items = [
  { name: '鉛筆', price: 300, quantity: 0 },
  { name: 'ノート', price: 400, quantity: 0 }, 
  { name: '消しゴム', price: 500, quantity: 0 }
];

let vm = new Vue({
  el: '#app',
  data: { // dataプロパティ
    items: items
  }
});

// console
vm.$watch(function() {
  return this.item[0].quantity
}, function(quantity) {
  console.log(quantity)
})
// -> ƒ unwatchFn () {
//   watcher.teardown();
// }
vm.items[0].quantity = 1
// -> 1
```