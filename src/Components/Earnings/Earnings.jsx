import React from "react";
import './Earnings.css'
const Earnings = ({title, color, symbol, content, children}) => {
    return (
        <div className="earningsDiv" style={{
            borderLeft : `4px solid ${color}`
        }}>
            <div>
            <h6 style={{
                color : color,
                fontSize : '15px'
            }}>{title}</h6>
            <h4
            style={{
                fontSize : '20px'
            }}
            >{content}</h4>
            </div>
            <div>
            {children}
            </div>
            <div style={{
                fontSize : '30px',
                color : '#dddfeb'
            }}>
                {symbol}
            </div>
        </div>
    )
}
export default Earnings;