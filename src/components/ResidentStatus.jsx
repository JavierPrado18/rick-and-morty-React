import React from 'react';

const ResidentStatus = ({status}) => {
    if(status=="Alive"){
        return(
            <div>
                <p ><i style={{color:"limegreen"}} class="fa-solid fa-circle"></i> { status}</p>    
            </div>
        )
    }else if(status=="Dead"){
        return(
            <div>
                <p ><i style={{color:"red"}} class="fa-solid fa-circle"></i> { status}</p>    
            </div>
        )
    }else{
        return(
            <div>
                <p ><i style={{color:"gray"}} class="fa-solid fa-circle"></i> { status}</p>    
            </div>
        )
    }
};

export default ResidentStatus;