import React, { useContext, useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Prodcard from './components/Prodcard/Prodcard'
import { Addproducts, Getproducts, auth } from './config/Firebase/Firebase'
import Usercontext from './context/Usercontext'
import Usercontextprovider from './context/Usercontextprovider'
import Login from './screens/Login/Login'

console.log(auth)
Header
const App = () => {
  const [prodbucket, setprodbucket] = useState([])
  const [category, setCategory] = useState([])
  const products = async () => {

  const response=await Getproducts()
  console.log(response)
  setprodbucket(response)
  const categorydup=[]
  response.map((elem)=>{
    if(!categorydup.length || categorydup[categorydup.length-1]!=elem.category){
      categorydup.push(elem.category)
    }
  })
  setCategory(categorydup)



    


  }
  useEffect(() => {
Addproducts()












































    products()
  }, [])
  console.log(category)
  console.log(useContext(Usercontext))
  // console.log(user)
  const user=useContext(Usercontext)
  const [username, setusername] = useState(null)
  return (
    <Usercontextprovider value={category} >
      {/* <Login/> */}
      <Header categories={category}  />
      <div className='w-full max-w-screen-xl mt-[1.6rem] mb-[1.6rem] mr-auto ml-auto flex justify-evenly flex-wrap '>
        {prodbucket.map((items) => {
          return <Prodcard items={items} categories={category} />
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
export const githubinfo = async () => {
  const resp = await fetch('https://api.github.com/users/MRsabcod')
  return resp.json()
}

export default App