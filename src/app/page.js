"use client"
import React, { useEffect, useState } from 'react'
import useDataStore from '../store/store'
import axios from 'axios'
import Card from '@/components/Card'


const page = () => {
  const {data,setData}=useDataStore();
  const [category,setCategory]=useState("");
  const [filterdata,setFilterdata]=useState([]);
  const [loading,setLoading]=useState(false);
  const [sort,setSort]=useState("");
  const [search,setSearch]=useState("")
  const fetchData=async()=>{
    setLoading(true)
    const response=await axios.get("https://fakestoreapi.com/products");
    console.log(response.data);
    
    setData(response.data)
    setLoading(false)
  }
  useEffect(()=>{
    fetchData();
  },[])
  useEffect(()=>{
    if(sort==="inc"){
    setFilterdata(data.filter((obj)=>obj.category===category).sort((a,b)=>a.price-b.price))
    }else if(sort==="dec"){
      setFilterdata(data.filter((obj)=>obj.category===category).sort((a,b)=>b.price-a.price))
    }
    else{
      setFilterdata(data.filter((obj)=>obj.category===category))
    }
   
    console.log(filterdata);
    
  },[category,sort,search])
  useEffect(()=>{
    if(sort==="inc"){
    setData(data.sort((a,b)=>a.price-b.price))
    }else if(sort==="dec"){
      setData(data.sort((a,b)=>b.price-a.price))
    }
  },[sort])
 
  if(loading) return <div>loading...</div>
  return (
    <div className='parent-container'>
            <div className='select-container'>
            <div className='select'>
            <select onChange={(e)=>setCategory(e.target.value)}>
              <option value="">Choose by category</option>
              {
                [...new Set(data.map((obj) => obj.category))].map((category, ind) => (
                  <option value={category} key={ind}>{category}</option>
                ))
              }
            </select>
            </div>
            <div className='select'>
              <select onChange={(e)=>setSort(e.target.value)}>
              <option value="">Sort</option>
              <option value="inc">Price low to high</option>
              <option value="dec">Price high to low</option>
              </select>
              
            </div>
            </div>
          
      <div className='grid-container'>
      { 
        !category?
        data?.map((obj,ind)=>{
          return <Card key={ind} product={obj}/>
        }):
        (filterdata)?.map((obj,ind)=>{
          return <Card key={ind} product={obj}/>
        })
        
      }
      </div>
    </div>
  )
}

export default page