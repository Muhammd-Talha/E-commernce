import { React, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Allfiles.css'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Addproduct = () => {
    const [name, setname] = useState("");
    const [price, setprice] = useState("");
    const [category, setcategory] = useState("");
    const [company, setcompany] = useState("");
    const [error, seterror] = useState(false)
    const navigate = useNavigate()
    const create = async (e) => {
        e.preventDefault()
        // console.log(!name);
        if (!name || !price || !category || !company) {
            seterror(true)
            return false
        }

        // console.log(name, price, category, company);
        const userid = JSON.parse(localStorage.getItem("user"))._id
        let result = await fetch("http://localhost:5000/add-product", {
            method: "post",
            body: JSON.stringify({ name, price, category, company, userid }),
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        })
        result = await result.json()
        // console.log(result);
        if(result){
        navigate('/')
        }
    }
    return (
        <div>
            <div className='for-m p-0'>
            <div className='heading'>
                <p>Add product Components</p>
            </div>
                {/* <h1 className='mt-3 mb-4 mt-4'>Add product Components </h1> */}
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationCustom03" >
                            <Form.Control type="text" placeholder="Enter Product Name" value={name}
                                onChange={(e) => setname(e.target.value)}
                                className='shado-w' />
                            {error && !name && <span>Enter valid name</span>}
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustom04" className='mt-4'>
                            <Form.Control type="text" placeholder="Enter Product Price" value={price}
                                onChange={(e) => setprice(e.target.value)}
                                className='shado-w' />
                            {error && !price && <span>Enter valid price</span>}
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustom05" className='mt-4'>
                            <Form.Control type="text" placeholder="Enter Product Category" value={category}
                                onChange={(e) => setcategory(e.target.value)}
                                className='shado-w' />
                            {error && !category && <span>Enter valid category</span>}
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustom06" className='mt-4'>
                            <Form.Control type="text" placeholder="Enter Product Company" value={company}
                                onChange={(e) => setcompany(e.target.value)}
                                className='shado-w' />
                            {error && !company && <span>Enter valid company</span>}
                        </Form.Group>
                    </Row>
                    <button className="button-57" role="button" onClick={create}><span class="text">Add Product</span><span>Add Product</span>  </button>
                    {/* <button className='butto-n' onClick={create} type="submit">Add Product</button> */}
                </Form>
            </div>
            <div className='fo-ter'> 
            <Footer />
            </div>
            
        </div>
    );
}

export default Addproduct;
