import React, { useEffect, useState } from 'react'
import './ServicesAf.css'
import HeaderAf from '../HeaderAf'
import Tip from '../Tip'
import Tsidebar from '../sidebar/Tsidebar'
import NextTable from './tables/NextTable'

const JobsheetStatus = () => {
   


  return (
    <>
        <div className='af-pages'>
          <Tsidebar/>
          
          <div className='main-body'>
            <HeaderAf/>
            <Tip/>

            <NextTable/>

          </div>
        </div>
    </>
  )
}

export default JobsheetStatus