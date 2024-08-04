# MenuItem 컴포넌트
## 1. 만드는 과정
### (1) 피그마로 MenuItem 컴포넌트 제작  
- 바닐라프로젝트에서 제작했던 마켓칼리의 컴포넌트 중, 헤더 카테고리의 메뉴 아이템 리스트를 컴포넌트로 만들었다.
- MenuItem 컴포넌트의 item 속성 : meat-egg, salad, soup-dish, noodle-oil
<br>
<br>

### (2) MenuItem & MenuItemListPage 컴포넌트 제작
- itemsData : id, name, photo로 구성된 객체로 이루어진 메뉴 아이템 관련 배열 데이터
<br>
<br>
- MenuItemListPage 컴포넌트 : 앞선 itemsData 데이터를 list로 받는 컴포넌트 
   - map 메서드로 itemList의 item을 순환하여 item의 네가지 속성에 따른 ```<li/> 태그```를 반환한다. 

``` jsx
function MenuItemListPage(props) {
  const itemList = [...props.list];

 return (
    <ul className='MenuItemList'>
      {itemList.map((item) => (
        <li key={item.id}>
          <a href={`#${item.id}`}><MenuItem item={item}/></a>
        </li> 
      ))
      }
    </ul>
 )
}
```
<br>

* MenuItem 컴포넌트
  * 메뉴 아이템 아이콘을 ```<img/>```로, 메뉴 아이템 레이블을 ```<span/>```로 마크업했다.
  * MenuItem 컴포넌트의 props를 item으로 받아서, item 객체의 photo, name, size 속성을 활용했다. 
``` jsx
function MenuItem({item}) {
  const {photo, name, size = 24} = item;

  return (
    <>
      <img src={`/icons/${photo}`} alt="" width={size} height={size}/>
      <span>{name}</span>
    </>
  )
}
```
<br>
<br>


### (3) MenuItem & MenuItemListPage 컴포넌트 속성 검사 (prop-types 사용)
- 속성을 받은 MenuItem과 MenuItemListPage 컴포넌트의 속성 검사를 진행했다.
- 속성 검사는 prop-types를 활용했다.   
<br>

※ itemType 변수 (itemsData의 속성타입)
``` javascript
const ItemType = exact({
  id: string.isRequired,
  photo: string.isRequired,
  name: string.isRequired,
  size: number 
})
```
<br>

※ MenuItemListPage 컴포넌트 
  ``` javascript
  MenuItemListPage.propTypes = { list: arrayOf(ItemType).isRequired,}
  ```
<br>

※ MenuItem 컴포넌트 
``` javascript
MenuItem.propTypes = { item: ItemType.isRequired }
```
<br>
<br>

## 2. 느낀점
- 지난 과제에서는 피그마를 잘 다루지 못해서, weather 컴포넌트로 만들었는데 이번에는 바닐라프로젝트에서 진행했던 마켓컬리 컴포넌트로 과제를 진행했다. 지난 번 과제에서는 main.jsx 파일에 모든 코드를 작성했는데 이번에는 컴포넌트마다 파일을 나눠서 진행하다보니까, 컴포넌트 연결 흐름이 훨씬 익숙해진 것 같다.
- 다만, 하위 컴포넌트에서 상위 컴포넌트로부터 데이터를 받아와야 코드를 완성할 수 있다 보니까, 하위 컴포넌트부터 작성해서 상위로 올라가야 하는 건지, 상위 컴포넌트를 먼저 작성해서 틀을 잡고 하위 컴포넌트로 내려가야 하는 건지, 어떤 순서가 효율적인 방식인지가 아직 확실치 않아 과제 진행 과정이 매끄럽지는 못했던 것 같다. 


