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

### filter
汎用的なテキストフォーマット処理を適用する仕組み。

```html
 <p>フィルター処理例 {{1000 | numberWithDelimiter}}</p>
 .....
```

```javascript
.....
filters: {
  numberWithDelimiter: function (value) {
    if (!value) { return '0' }
    // 3ケタの数字をカンマ区切りにする
    return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
  }
}
.....
```

### $event
Vue.jsが提供しているDOMイベントのオブジェクトを参照する。

```html
<li v-for="item in items" v-bind:key="item.name">
  {{ item.name }}の個数: <input type="number" v-on:change="item.quantity = $event.target.valuv-bind:value="item.quantity" min="0">
</li>

<!-- v-modelを使った記述で省略 -->
<li v-for="item in items" v-bind:key="item.name">
  {{ item.name }}の個数: <input type="number" v-model.lazy="item.quantity" min="0">
</li>
```

### props
親コンポーネントから子コンポーネントへデータを渡す。親からテンプレートの属性（v-bind）経由で渡す。
逆の場合（子から親に通信する）、イベントを使用する。（v-on + $emitなど）

```javascript
Vue.component(コンポーネント名,{
  props: {
    親から受け取る属性名: {
      type: データ型（String, Object, ...）,
      default: デフォルト値,
      required: 真偽値（必須かどうか）,
      validator: バリデーション用の関数
    }
  }
  // ...template内で「親から受け取る属性」が使える
})
```

#### Sample Data

```html
<!-- sample1 -->
<div id="app">
  <!-- テンプレートの属性名はkebab-caseで指定 -->
  <item-desc v-bind:item-name="myItem"></item-desc>
</div>

<!-- sample2 -->
<div id="fruits-component">
  <ol>
    <fruits-item-name v-for="fruit in fruitsItems" :key="fruit.name" v-bind:fruits-item="fruit"><fruits-item-name>
  </ol>
</div>
```

```javascript
// sample1
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

// sample2
// 子コンポーネント
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
      {name: '梨'}, {name: 'いちご'}
    ]
  }
})
```

### slot(スロットコンテンツ)
親コンポーネントごとに子コンポーネントの内容を書き換える仕組み。

```html
.....
<div id="fruits-list">
  <page-header class="header">
    <h1 slot="header">
      冬の果物
    </h1>
  </page-header>
  <page-content class="content">
    <ul slot="content">
    <li>りんご</li>
    <li>イチゴ</li>
    </ul>
  </page-content>
</div>
  
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
<script>
var headerTemplate = `
  <div>
    <slot name="header">No title</slot>
  </div>
`

var contentTemplate = `
  <div>
    <slot name="content">No contents</slot>
  </div>
`

Vue.component('page-header', {
  template: headerTemplate
})
Vue.component('page-content', {
  template: contentTemplate
})

new Vue({
  el: "#fruits-list"
})
</script>
.....
```

### vue-router
SPA構築のためのルーティングライブラリ。

```html
.....
<script>
  const RUTER = new VueRouter({
    routes: [
      {
        path: '/top',
        component: {
          template: '<div>トップページです。</div>'
        }
      },
      {
        path: '/users',
        component: {
          template: '<div>ユーザー一覧ページです。</div>'
        }
      }
    ]
  })
  // ルーターのインスタンスをrootとなるVueインスタンスに渡す
  const app = new Vue({
    router: RUTER
  }).$mount('#app')
</script>
.....
```
