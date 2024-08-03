// 리액트 컴포넌트(함수)는 순수해야 한다.
// 순수한 지, 안한 지 어떻게 확인할까? 2번 실행한다. 
// <React.Strictmode></React.Strictmode>
// 개발 중일 때만 2번 실행해서 일반적인 문제 진단
// 배포 되었을 때는 1번만 실행

import MenuItemListPage from '@/pages/MenuItemListPage';
import itemsData from '@/data/items';

function App() {

  return (
      <MenuItemListPage list={itemsData} />
  )
}

export default App;