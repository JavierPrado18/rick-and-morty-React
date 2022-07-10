import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import ResidentInformation from './ResidentInformation';
import ResidentStatus from './ResidentStatus';

const ResidentItem = ({ resident }) => {
    const [residentData,setResidentData]=useState({})
    useEffect(()=>{
        axios.get(resident)
            .then(res=>setResidentData(res.data))
    },[])
    return( 
    <div className='container-resident'>
        <div className='container-img'>
            <img src={residentData.image} alt="" />
            <ResidentStatus status={residentData.status}/>
        </div>
        
        <p >{residentData.name}</p>
        <ResidentInformation specie={residentData.species} origin={residentData.origin?.name} episode={residentData.episode?.length}/>
        
    
    </div>
  
    )
};
  

export default ResidentItem