import React from "react";


const Division = ({ width, children, title }) => {
    return (
        <div className={width} style={{
            // border: '1px solid black',
            height: '100%',
            marginTop: '30px',
            borderRadius: '6px',
            backgroundColor: 'white',
            padding : '10px',
            margin : '30px 10px 0px 10px'
        }}>
            <div style={{
                height: '15px',
                display: "flex",
                justifyContent: 'space-between',
                alignItems: 'center',
                padding : '10px 10px 0px 0px'
            }}>
                <h6 style={{
                    color: 'blue'
                }}>{title}</h6>
                <i class="fas fa-ellipsis-v "></i>
            </div>
            <hr />
           <div style={{
            padding : '20px',
            height : '100%',
            width : '100%'
           }}> 
           {children}
           </div>
        </div>
    )
}
export default Division