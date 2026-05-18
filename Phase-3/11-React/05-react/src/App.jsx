import React from 'react'
import Button2 from './components/Button2';
import Button from './components/Button';

const App = () => {
  return (
    <div className='flex justify-center items-center h-screen gap-2'>
    <Button disabled={false} text = "Button1" size="sm" type="primary"
    clickHandler={()=>{console.log('Button Clicked');
    }}
    />

    <Button2 disabled={false} text= "Success" size="small" color="Success" 
    clickHandler={()=>{console.log('Button Clicked');
    }}/>
    </div>
  )
}

export default App