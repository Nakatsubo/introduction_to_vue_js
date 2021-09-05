// ロードされ、Vueがグローバル変数として定義されているか確認
console.assert(typeof Vue !== 'undefined');

// 子コンポーネント
Vue.component('item-desc',{
  props: {
    // 親から受け取る属性名 -> lowerCamleCaseで指定
    itemName: {
      type: String
    }
  },
  template: '<p>{{ itemName }}は便利です</p>'
})
const app = new Vue({
  el: '#app',
  data: { myItem: 'pen' }
})