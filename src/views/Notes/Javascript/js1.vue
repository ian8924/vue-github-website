<template>
  <div>
     <v-md-editor v-model="text" height="100%"></v-md-editor>
  </div>
</template>

<script>
const text = ` ###### tags: \`javascript\`
# array 處理方法
\`\`\` javascript
// 相同的陣列
var people = [
  {
    name: 'Casper',
    like: '鍋燒意麵',
    age: 18
  },
  {
    name: 'Wang',
    like: '炒麵',
    age: 24
  },
  {
    name: 'Bobo',
    like: '蘿蔔泥',
    age: 1
  },
  {
    name: '滷蛋',
    like: '蘿蔔泥',
    age: 3
  }
];
\`\`\`

## filter()
會回傳一個陣列，其條件是 return 後方為 true 的物件，很適合用在搜尋符合條件的資料。
\`\`\` javascript
var result = people.filter(function(item, index, array){
  return item.age > 5;       // 取得大於五歲的
});


result=[
{
    name: 'Casper',
    like: '鍋燒意麵',
    age: 18
  },
  {
    name: 'Wang',
    like: '炒麵',
    age: 24
  }
];
\`\`\`

## find()
find() 與 filter() 很像，但 find() 只會回傳一次值，且是第一次為 true 的值。
\`\`\` javascript
var result = people.find(function(item, index, array){
  return item.age > 5;           // 取得大於五歲的
});

result={
    name: 'Casper',
    like: '鍋燒意麵',
    age: 18
  }
// 雖然答案有兩個，但只會回傳 Casper 這一個物件
\`\`\`
\`\`\` javascript
var result = people.find(function(item, index, array){
  return item.like === '蘿蔔泥';  // 取得陣列 like === '蘿蔔泥'
})

result= {
    name: 'Bobo',
    like: '蘿蔔泥',
    age: 1
  }
  // 雖然答案有兩個，但只會回傳第一個 Bobo 物件
\`\`\`
## forEach()
forEach 是這幾個陣列函式最單純的一個，不會額外回傳值，只單純執行每個陣列內的物件或值。

\`\`\` javascript

var result = people.forEach(function(item, index, array){
  item.age = item.age + 1;         // forEach 就如同 for，不過寫法更容易
});

result              // 全部 age + 1

\`\`\`
## map()
使用 map() 時他需要回傳一個值，他會透過函式內所回傳的值***組合成一個新陣列***。
* 如果不回傳則是 *undefined*
* 回傳數量等於原始陣列的長度
\`\`\` javascript
var mapAgeThan5 = people.map(function(item, index, array){
  return item.age > 5;    // 比較大於五歲的
});
console.log(mapAgeThan5); // [true, true, false, false]

var mapEat = people.map(function(item, index, array){
  if (item.like !== '蘿蔔泥') {
    return \`\${item.like} 好吃\`;
  } else {
    return \`\${item.like} 不好吃\`;
  }
});

console.log(mapEat);
// ["鍋燒意麵 好吃", "炒麵 好吃", "蘿蔔泥 不好吃", "蘿蔔泥 不好吃"]
\`\`\`
## reduce()
reduce() 和其他幾個差異就很大了，他可以與前一個回傳的值再次作運算，參數包含以下：

* accumulator: 前一個參數，如果是第一個陣列的話，值是以另外傳入或初始化的值
* currentValue: 當前變數
* currentIndex: 當前索引
* array: 全部陣列

\`\`\` javascript
var reducePlus = people.reduce(function(accumulator, currentValue, currentIndex, array){
  // 分別為前一個回傳值, 目前值, 當前索引值
  console.log(accumulator, currentValue, currentIndex);
  return accumulator + currentValue.age;  // 與前一個值相加
}, 0);

reducePlus // 總和為46
\`\`\`

## includes()
includes()的作用，是查找一個值在不在數組裡，若在，則返回true，反之返回false。基本用法：


\`\`\` javascript
['a', 'b', 'c'].includes('a')      // true
['a', 'b', 'c'].includes('d')      // false
\`\`\`
includes()方法接收兩個引數：要搜尋的值和搜尋的開始索引。當第二個引數被傳入時，該方法會從索引處開始往後搜尋（預設索引值為0）。若搜尋值在陣列中存在則返回true，否則返回false。 且看下面示例：
\`\`\` javascript
['a', 'b', 'c', 'd'].includes('b')          // true
['a', 'b', 'c', 'd'].includes('b' , 1)       // true
['a', 'b', 'c', 'd'].includes('b', 2)       // false

\`\`\`
## splice()
splice() 方法可以藉由刪除既有元素並／或加入新元素來改變一個陣列的內容。
\`\`\` javascript
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 0, 'drum');

// myFish 為 ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed 為 [], 沒有元素被刪除
// myFish index=2的位置插入'drum'


var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);

// removed 為 ["mandarin"]
// myFish 為 ["angel", "clown", "drum", "sturgeon"]
\`\`\``
export default {
  data () {
    return {
      text
    }
  }
}
</script>

<style>

</style>
