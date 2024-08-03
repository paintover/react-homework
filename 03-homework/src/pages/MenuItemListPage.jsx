import MenuItem from '@/components/MenuItem'

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