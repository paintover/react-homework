import MenuItemListPage from '@/pages/MenuItemListPage';
import itemsData from '@/data/items';

function App() {

  return (
      <MenuItemListPage list={itemsData} />
  )
}

export default App;