import React from "react";

const Progress = ({title, value, titleVal, color}) => {
    return (
        <div style={{
            marginBottom : '10px'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '12px'
            }}>
                <p style={{
                    padding : '5px',
                    margin : 0
                }}>{title}</p>
                <p style={{
                    padding : '5px',
                    margin : 0
                }}>{titleVal}</p>
            </div>
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow={value} aria-valuemin='0' aria-valuemax='100' style={{
                    width: `${value}%`,
                    backgroundColor : color
                }}>
                </div>
            </div>
        </div>

    )
}

export default Progress