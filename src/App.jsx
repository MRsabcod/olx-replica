import React, { useContext, useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Prodcard from './components/Prodcard/Prodcard'
Header
const App = () => {
  const [prodbucket, setprodbucket] = useState([])
  const [category, setCategory] = useState([])
  const products = async () => {

    try {
      fetch('https://dummyjson.com/products/')

        .then(response => response.json())

        .then((data) => {
          setprodbucket(data.products)
          const categroydup = []
         console.log(typeof data.products)

         data?.products?.map((elem) => {
              if (categroydup.length == 0 || categroydup[categroydup.length - 1]!=elem.category) {
              categroydup.push(elem.category)
            }
            })
          setCategory(categroydup)
        });



    }
    catch (error) {
      console.log(error)
    }


  }
  useEffect(() => {


    products()
  }, [])
  console.log(category)
  return (
    <div>
      <Header categories={category} />
      <div className='w-full max-w-screen-xl mt-[1.6rem] mb-[1.6rem] mr-auto ml-auto flex justify-evenly flex-wrap '>
        {prodbucket.map((items) => {
          return <Prodcard items={items} />
        })}

      </div>
      {
        category.map((item)=>{
          console.log(item)
        })
      }
        
    </Usercontextprovider>
  )
}


export default App