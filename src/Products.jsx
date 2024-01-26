 var product=[
    {id: 1, title: "Product1", des: "sdvgghdsv dhgv", cat: "ph"},
    {id: 2, title: "Product2", des: "sdvgghdsv dhgv", cat: "tv"},
    {id: 3, title: "Product3", des: "sdvgghdsv dhgv", cat: "ph"},
    {id: 4, title: "Product4", des: "sdvgghdsv dhgv", cat: "ph"},
 ]

function Products() {
    let data=product.filter((a)=>a.cat=='ph')
  return (
    <div>
        <ol>
      {data.map((a)=>(
        <li key={a.id}>{a.title}</li>
      ))}
      </ol>
    </div>
  )
}

export default Products
