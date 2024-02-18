import React from "react";
import './Allfiles.css'
import { NavLink, useNavigate } from "react-router-dom";
// import Container from "react-bootstrap/Container";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { TiSocialLinkedinCircular } from "react-icons/ti";



const Nav = () => {

    const auth = localStorage.getItem("user")
    const navigate = useNavigate()
    const logout = () => { 
        console.log("apple");
        localStorage.clear()
        navigate("/signup")
    }

    return (
        <div >
            <div className=" containe-r">
                <div className="p-0 acti-ve">
                    <div className="img-styling">
                        <img src="https://images.unsplash.com/photo-1647221598270-e7a8716fef08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVjb21tZXJjZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" alt="e-com img" />
                    </div>
                    {
                        auth ?
                            <ul className="nav-ul right-styled">
                                <li> <NavLink className="ancho-r hidden-property" to={'/'}> Products </NavLink> </li>
                                <li> <NavLink className="ancho-r hidden-property" to={'/add'}> Add Product </NavLink> </li>
                                <li> <NavLink className="ancho-r hidden-property" to={'/update'}> Update Product </NavLink> </li>
                                <li> <NavLink className="ancho-r hidden-property" to={'/profile'}> Profile </NavLink> </li>
                                <NavLink onClick={logout} className="ancho-r responsive-link" to={'/signup'}> Logout <span className="hide">({JSON.parse(auth).name})</span> </NavLink>
                            </ul>
                            :
                            <ul className="nav-ul right-style">
                                <li><NavLink className="ancho-r" to={'/signup'}> Sign Up </NavLink> </li>
                                <li> <NavLink className="ancho-r " to={'/Login'}> Login </NavLink> </li>
                            </ul>
                    }

                </div>
                {
                    auth ?
                        <div className="styling d-md-none">
                            <a className="iocns" href="#" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                                aria-controls="offcanvasExample">
                                <HiMiniBars3BottomRight />
                            </a>

                            <div class="offcanvas offcanvas-end sidebar-style" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="offcanvasExampleLabel"></h5>
                                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                    <div>
                                        <div>
                                            <ul className='list-icons'>
                                                <div style={{ marginLeft: "15px" }}>
                                                    <label>Follow Us</label>
                                                </div>
                                                <li><a title='Facebook'><FaFacebook /></a> </li>
                                                <li><a title="twitter"><AiFillTwitterCircle /></a></li>
                                                <li><a title="instagram"><RiInstagramFill /></a> </li>
                                                <li><a title="linkedin"><TiSocialLinkedinCircular /></a> </li>
                                            </ul>
                                        </div>

                                        {/* <div className="right-styled"> */}
                                            <li> <NavLink className="child" to={'/'}> Products </NavLink> </li>
                                            <li> <NavLink className="child" to={'/add'}> Add Product </NavLink> </li>
                                            <li> <NavLink className="child" to={'/update'}> Update Product </NavLink> </li>
                                            <li> <NavLink className="child" to={'/profile'}> Profile </NavLink> </li>
                                        {/* </div> */}

                                    </div>
                                </div>
                            </div>
                        </div>
                        : null
                }



            </div>

        </div>
    )
}
export default Nav