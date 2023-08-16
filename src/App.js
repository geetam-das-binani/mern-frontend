
import './App.css';
import React, { useEffect } from 'react'
import Header from './component/layout/Header'
import webFont from 'webfontloader'


export default function App() {
    useEffect(()=>{
        webFont.load({
            google:{
                families:['Roboto Mono', 'monospace']
            }
        })
        },[])
  return (
    <Header />
  )
}



