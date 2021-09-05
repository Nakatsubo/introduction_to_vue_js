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
new Vue({
  el: '#app',
  data: { myItem: 'pen' }
})

Vue.component('fruits-item-name',{
  props: {
    fruitsItem: {
      type: Object,
      required: true
    }
  },
  template: '<li>{{ fruitsItem.name }}</li>'
})
new Vue({
  el: '#fruits-component',
  data: {
    fruitsItems: [
      { name: '梨' },
      { name: 'いちご' }
    ]
  }
})