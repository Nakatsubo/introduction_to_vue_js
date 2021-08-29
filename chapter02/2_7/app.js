// ロードされ、Vueがグローバル変数として定義されているか確認
console.assert(typeof Vue !== 'undefined');

let items = [
  { name: '鉛筆', price: 300, quantity: 0 },
  { name: 'ノート', price: 400, quantity: 0 }, 
  { name: '消しゴム', price: 500, quantity: 0 }
];

var vm = new Vue({
  el: '#app',
  data: {
      items: items
  },
  filters: {
    numberWithDelimiter: function (value) {
      if (!value) { return '0' }
      return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
    }
  }
});
