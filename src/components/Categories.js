import '../styles/Categories.css'

function Categories({ categories, catSelected, setCatSelected }) {
  function handleSelect(e) {
    setCatSelected(e.target.value);
  }
  function handleClick() {
    setCatSelected("...");
  }
  return (
    <div>
      <select className='lmj-select-list' value={catSelected} onChange={handleSelect}>
        {categories.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>
      <button className='lmj-button-reset' onClick={() => handleClick()}>Réinitialiser</button>
    </div>
  )
}

export default Categories