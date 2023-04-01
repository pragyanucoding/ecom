import React from 'react'
import MainCmp from '../components/MainCmp'
import Nav from '../components/Nav'
import fertilizer from '../components/DB/Fertilizer'
import MultiActionAreaCard from '../mart/mui/MultiActionAreaCard'

export default function Mart() {
  return (
    <>
        <Nav/>
        <MainCmp
            
            comp={
                <>
                <div className='h1 text-center'>Products</div>
                <div className='w-full flex justify-center align-middle items-center'>
                    <div className='grid grid-cols-4 gap-3'>

                    {
                      fertilizer.map(({name,price,img})=>{
                        return(
                          // <div className='w-[250px] h-[250px] border-[2px] border-black'>
                          //   <h1>{name}</h1>
                          //   <p>₹{price}</p>
                          //   <img className='w-[150px] h-[150px] ' src={img} alt={name} />
                          // </div>
                          <>
                          <MultiActionAreaCard name={name} price={price} image={img}/> 
                          </>

                        )
                      })
  
                    }
                    </div>
              </div>
                </>
            }
        />

    </>
  )
}
