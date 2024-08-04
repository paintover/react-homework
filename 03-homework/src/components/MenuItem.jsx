import { exact, string, number } from 'prop-types';

const ItemType = exact({
  id: string.isRequired,
  photo: string.isRequired,
  name: string.isRequired,
  size: number 
})


function MenuItem({item}) {
  const {photo, name, size = 24} = item;

  return (
    <>
      <img src={`/icons/${photo}`} alt="" width={size} height={size}/>
      <span>{name}</span>
    </>
  )
}

export default MenuItem;

// MenuItem 속성 검사 (item)
MenuItem.propTypes = {
  item: ItemType.isRequired
}