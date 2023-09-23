import React, { useState } from "react";
import './Nav.css'
const Nav = ({ navBar }) => {
    const [dropNav, setDropNav] = useState('none');
    const [dropNavUtilities, setDropNavUtilities] = useState('none');
    const [dropNavPages, setDropNavPages] = useState('none');
    const [arrow, setArrow] = useState(<i class="fa-solid fa-angle-right"></i>)
    const [arrowUtilities, setArrowUtilities] = useState(<i class="fa-solid fa-angle-right"></i>)
    const [arrowPages, setArrowPages] = useState(<i class="fa-solid fa-angle-right"></i>)
    const dropdownNav = () => {
        if (dropNav === 'none') {
            setDropNav('block');
            setArrow(<i class="fa-solid fa-angle-up"></i>)
        } else {
            setDropNav('none')
            setArrow(<i class="fa-solid fa-angle-right"></i>)
        }
    }
    const dropdownNavUtilities = () => {
        if (dropNavUtilities === 'none') {
            setDropNavUtilities('block');
            setArrowUtilities(<i class="fa-solid fa-angle-up"></i>)
        } else {
            setDropNavUtilities('none')
            setArrowUtilities(<i class="fa-solid fa-angle-right"></i>)
        }
    }
    const dropdownNavPages = () => {
        if (dropNavPages === 'none') {
            setDropNavPages('block');
            setArrowPages(<i class="fa-solid fa-angle-up"></i>)
        } else {
            setDropNavPages('none')
            setArrowPages(<i class="fa-solid fa-angle-right"></i>)
        }
    }
    return (
        <div style={{
            display: 'flex'
        }}>
            {/* Side Nav bar */}
            <div className={navBar} >
                <div style={{
                    display: 'flex',
                    width: '170px',
                    justifyContent: 'space-evenly',
                    alignItems: 'center'
                }}>
                    <i class="fa-solid fa-face-laugh-wink" style={{
                        fontSize: '35px',
                        rotate: '-20deg'
                    }}></i>
                    <h3
                        style={{
                            fontSize: '20px'
                        }}>SB Admin <sup>2</sup></h3>
                </div>
                <br />
                <hr />
                <div>
                    <ul>
                        <li>
                            <div style={{
                                display: 'flex',
                                width: '110px',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <i class="fas fa-fw fa-tachometer-alt"></i>
                                <span>Dashboard</span>
                            </div>
                        </li>

                        <hr />

                        <div>
                            <p style={{
                                color: '#B3B6B7',
                                fontWeight: '600'
                            }}>Interface</p>
                            <li>
                                <div style={{
                                    display: 'flex',
                                    width: '100%',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}>
                                    <div>
                                        <i class="fas fa-fw fa-cog"></i>
                                        <span style={{
                                            position: 'relative',
                                            cursor: 'pointer'
                                        }}
                                            onClick={dropdownNav}
                                        > Components</span>
                                    </div>
                                    {arrow}
                                    <div className="dropdownNav" style={{
                                        position: 'absolute',
                                        top: '280px',
                                        backgroundColor: 'white',
                                        color: 'black',
                                        padding: '10px',
                                        fontSize: '12px',
                                        borderRadius: '5px',
                                        display: dropNav,
                                        cursor : 'pointer'
                                    }}>
                                        <p className="text-muted">Custom Components</p>
                                        <p>Buttons</p>
                                        <p>Cards</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div style={{
                                    display: 'flex',
                                    width: '100%',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}>
                                    <div>
                                        <i class="fas fa-fw fa-wrench" style={{
                                            marginRight : '5px'
                                        }}></i>
                                        <span
                                            style={{
                                                position: 'relative',
                                                cursor: 'pointer'
                                            }}
                                            onClick={dropdownNavUtilities}
                                        >Utilities</span>
                                    </div>
                                    {arrowUtilities}
                                    <div className="dropdownNav" style={{
                                        position: 'absolute',
                                        top: '320px',
                                        backgroundColor: 'white',
                                        color: 'black',
                                        padding: '10px',
                                        fontSize: '12px',
                                        borderRadius: '5px',
                                        display: dropNavUtilities,
                                        cursor : 'pointer'
                                    }}>
                                        <p className="text-muted">Custom Utiliti</p>
                                        <p>Colors</p>
                                        <p>Borders</p>
                                        <p>Animations</p>
                                        <p>Others</p>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <hr />
                        <div>
                            <p style={{
                                color: '#B3B6B7',
                                fontWeight: '600'
                            }}>Addons</p>
                            <li>
                                <div style={{
                                    display: 'flex',
                                    width: '100%',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}>
                                    <div>
                                    <i class="fas fa-fw fa-folder" style={{
                                            marginRight : '5px'
                                        }}
                                        ></i>
                                    <span style={{
                                                position: 'relative',
                                                cursor: 'pointer'
                                            }}
                                            onClick={dropdownNavPages}
                                            >Pages</span>
                                    </div>
                                    {arrowPages}
                                    <div className="dropdownNav" style={{
                                        position: 'absolute',
                                        top: '440px',
                                        backgroundColor: 'white',
                                        color: 'black',
                                        padding: '10px',
                                        fontSize: '12px',
                                        borderRadius: '5px',
                                        display: dropNavPages,
                                        cursor : 'pointer'
                                    }}>
                                        <p className="text-muted">Custom Components</p>
                                        <p>Login</p>
                                        <p>Register</p>
                                        <p>Forget password</p>
                                        <p className="text-muted">Other pages</p>
                                        <p>404</p>
                                        <p>Blank pages</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div style={{
                                    display: 'flex',
                                    width: '70px',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}>
                                    <i class="fas fa-fw fa-chart-area"></i>
                                    <span>Charts</span>
                                </div>
                            </li>
                            <li>
                                <div style={{
                                    display: 'flex',
                                    width: '70px',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}>
                                    <i class="fas fa-fw fa-table"></i>
                                    <span>Tables</span>
                                </div>
                            </li>
                        </div>

                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Nav