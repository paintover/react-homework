import MenuItem from '@/components/MenuItem'
import { arrayOf, exact, string, number } from 'prop-types';

const ItemType = exact({
  id: string.isRequired,
  photo: string.isRequired,
  name: string.isRequired,
  size: number 
})


function MenuItemListPage(props) {
  const itemList = [...props.list];
  // console.log(itemList);
  
  // const handleClick = (e) => {
  //   e.stopPropagation();
  // }

  return (
    <ul className='MenuItemList'>
      {itemList.map((item) => (
        <li key={item.id}>
          <a href={`#${item.id}`}><MenuItem item={item}/></a>
        </li> 
      ))
      }
    </ul>
  );
}

export default MenuItemListPage;

// MenuItemListPage 속성 검사 (list)
MenuItemListPage.propTypes = {
 list: arrayOf(ItemType).isRequired,
}