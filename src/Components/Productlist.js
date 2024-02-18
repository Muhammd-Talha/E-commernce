import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import './Allfiles.css'
import Footer from './Footer';
const Productlist = () => {
    const [products, setproducts] = useState([]);

    useEffect(() => {
        getproducts()
    }, [])
    const getproducts = async () => {
        let result = await fetch('http://localhost:5000/products', {
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        });
        result = await result.json()
        setproducts(result)
    }
    console.log(products);
    const deleteproduct = async (id) => {
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: "Delete",
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
            }

        })
        result = await result.json()
        if (result) {
            getproducts()
        }
    }
    const searchhandel = async (e) => {
        let key = e.target.value;
        if (key) {
            let result = await fetch(`http://localhost:5000/search/${key}`, {
                headers: {
                    authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
                }
            });
            result = await result.json()
            if (result) {
                setproducts(result)
            }
        }
        else {
            getproducts()
        }

    }
    return (
        <div>
            <div className='heading'>
                <p>Products List</p>
            </div>
            <div className='inpu-t'>
                <input type='text' placeholder='search product' onChange={searchhandel} />
            </div>
            <Container>
                <div className='table-responsive'>
                    <Table striped bordered hover className='text-center'>
                        <thead>
                            <tr>
                                <th>Sr.No</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Company</th>
                                <th>Delete Opr</th>
                                <th>Update Opr</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.length > 0 ?
                                    products.map((item, i) =>
                                        <tr key={i}>
                                            <td>{i + 1} </td>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td>{item.category}</td>
                                            <td>{item.company}</td>
                                            <td> <button className="button-57" role="button" onClick={() => deleteproduct(item._id)}><span class="text">Delete</span><span>Delete</span>  </button> </td>
                                            <td>   <Link className="button-57" role="button" to={"/update/" + item._id}><span class="text">Update</span><span>Update</span> </Link> </td>
                                        </tr>

                                    )
                                    : <h3 >No Data Found</h3>
                            }
                        </tbody>
                    </Table>
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default Productlist;
