import React from 'react'
import Card from './components/Card'

const App = () => {
  const products =[
    {
      name:'Book',
      desription:'Lorem ipsum',
      price: 4.99
    },
    {
      name: 'Pen',
      desription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      price: 50.33
    },
    {
      name: 'Stand',
      desription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat error',
      price: 99.99
    },
    {
      name: 'Stand',
      desription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat error',
      price: 99.99
    },
    {
      name: 'Stand',
      desription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat error',
      price: 99.99
    }
  ]
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }}>
      {
        products.map(prod =>(
          <
            Card name={prod.name} 
            description={prod.desription} 
            price={prod.price}
          />
        ))
      }

    </div>
  )
}

export default App