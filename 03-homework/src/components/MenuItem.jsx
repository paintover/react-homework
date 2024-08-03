
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