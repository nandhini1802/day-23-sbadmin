import React from "react";


const Colors = ({ colorCode, colorName, backColor, textColor }) => {
    const size = {
        height: '75px',
        width: '240px',
        padding: '20px',
        color: textColor,
        borderRadius: '8px',
        backgroundColor : backColor,
        marginBottom : '20px'
    }
    return (
        <div>
            <div style={size}>
                <h5 style={{
                    padding : '0px',
                    margin : 0
                }}>{colorName}</h5>
                <p style={{
                    color: '#D0D3D4',
                    fontSize: '12px'
                }}>{colorCode}
                </p>
            </div>
        </div>
    )
}

export default Colors