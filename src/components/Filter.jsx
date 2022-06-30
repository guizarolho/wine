import React from 'react'

function Filter() {
  return(
    <aside>
      <h5>Refine sua busca</h5>
      <p>Por preço</p>
      <form style={{ display:"flex", flexDirection:"column" }}>
        <label>
          <input type="radio" name="price" value="40"/>
          Até R$40
        </label>
        <label>
          <input type="radio" name="price" value="40-60"/>
          R$40 A R$60
        </label>
        <label>
          <input type="radio" name="price" value="60-100"/>
          R$60 A R$100
        </label>
        <label>
          <input type="radio" name="price" value="100-200"/>
          R$100 A R$200
        </label>
        <label>
          <input type="radio" name="price" value="200-500"/>
          R$200 A R$500        
        </label>
        <label>
          <input type="radio" name="price" value=">500"/>
          Acima de R$500
        </label>
      </form>
    </aside>
  )
}

export default Filter