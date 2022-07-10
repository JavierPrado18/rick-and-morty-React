import React from 'react';

const Pagination = ({pag,setPag,amount}) => {
    const previous=()=>{
        if (pag==0){
            setPag(0)
        }else{
            setPag(pag-4)
        }    
    }
    const next=()=>{
        if (pag>=amount){
            setPag(pag)
        }else{
            setPag(pag+3)
        }    
    }
    return (
        <>
            <button className='btn-pagination' onClick={previous}><i class="fa-solid fa-circle-chevron-left"></i></button><button 
            className='btn-pagination' onClick={next}><i class="fa-solid fa-circle-chevron-right"></i></button>
        </>
    );
};

export default Pagination