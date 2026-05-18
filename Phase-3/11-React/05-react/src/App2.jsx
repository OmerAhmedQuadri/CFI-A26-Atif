import { useState } from 'react'
import Card from './components/Card'

const products =[
    {
        title:"Shoe",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        price: "150",
        image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-IQ3435-045_1.jpg?rnd=20200526195200&tr=w-512"

    },
    {
        title:"Watch",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        price: "38.5",
        image: "https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw7b993993/images/Sonata/Catalog/7152QM01_1.jpg?sw=600&sh=600"
    },
    {
        title:"Pant",
        description: "Lorem ipsum dolor sit amet consectetur adkjdhcbjhc",
        price: "64.5",
        image: "https://thumbs.dreamstime.com/b/jeans-white-background-22262983.jpg"
    }
]
const App2 = () => {
    const [isLoading, setLoading] = useState(true)
  return (
    <div className='flex flex-row items-center justify-center h-screen bg-white  text-black gap-1.5'>
        {products.length >0 ? 
            products.map((product, index)=>(
                <Card
                    key={index}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    image={product.image}
                />
            )
            )
        :
        <h1>No Products</h1>
         }
    </div>
  )
}

export default App2