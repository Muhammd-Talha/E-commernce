import { React, useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Allfiles.css'
import {  useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
const Updateproduct = () => {
    const [name, setname] = useState("");
    const [price, setprice] = useState("");
    const [category, setcategory] = useState("");
    const [company, setcompany] = useState("");
    const params = useParams();
    const navigate= useNavigate()
    useEffect(()=>{
            getproductdetails()
    },[])
    const getproductdetails = async ()=>{
        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        })
        result = await result.json();
        setname(result.name);
        setprice(result.price);
        setcategory(result.category);
        setcompany(result.company)
    }
    const update = async (e) => {
        e.preventDefault()
        console.log(name, price,category,company);
        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            method: "PUT",
            body: JSON.stringify({name, price,category,company}),
            headers:{
                "content-type": "application/json",
                authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        })
        result =  await result.json()
        if(result){
        navigate('/')

        }

    }
    return (
        <div>
            <div className='for-m p-0'>
            <div className='heading'>
                <p>Update product Components</p>
            </div>
                {/* <h1 className='mt-3 mb-4 mt-4'>Update product Components </h1> */}
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationCustom03" >
                            <Form.Control type="text" placeholder="Enter Product Name" value={name}
                                onChange={(e) => setname(e.target.value)}
                                className='shado-w' />
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustom04" className='mt-4'>
                            <Form.Control type="text" placeholder="Enter Product Price" value={price}
                                onChange={(e) => setprice(e.target.value)}
                                className='shado-w' />
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustom05" className='mt-4'>
                            <Form.Control type="text" placeholder="Enter Product Category" value={category}
                                onChange={(e) => setcategory(e.target.value)}
                                className='shado-w' />
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustom06" className='mt-4'>
                            <Form.Control type="text" placeholder="Enter Product Company" value={company}
                                onChange={(e) => setcompany(e.target.value)}
                                className='shado-w' />
                        </Form.Group>
                    </Row>
                    <button class="button-57" role="button" onClick={update}><span class="text">Update Product</span><span>Update Product</span>  </button>
                    {/* <button className='butto-n' onClick={update} type="submit">Update Product</button> */}
                </Form>
            </div>
            <div className='fo-ter'> 
            <Footer />
            </div>
        </div>
    );
}

export default Updateproduct;
