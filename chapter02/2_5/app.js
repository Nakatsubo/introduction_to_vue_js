// ロードされ、Vueがグローバル変数として定義されているか確認
console.assert(typeof Vue !== 'undefined');

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

console.log(vm)
// -> Vue {_uid: 0, _isVue: true, $options: {…}, _renderProxy: Proxy, _self: Vue, …}

console.log(vm.items)
// -> (3) [{…}, {…}, {…}, __ob__: Observer]