import { React, useEffect, useState } from 'react';
import './Allfiles.css'
// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [error, seterror] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        const auth = localStorage.getItem("user")
        if(auth){
            navigate("/")
        }
    },[])

    const create = (event)=> {
        event.preventDefault();
        // console.log(!name);
        if(!name || !email || !password)
        {
            seterror(true)
        return false;
        }
        // event.preventDefault();
        let data = { name, email, password }
        fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
                "Accept": 'application/json',
                "Content-type": 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            result.json().then((resp) => {
                localStorage.setItem("user", JSON.stringify(resp.result))
                localStorage.setItem("token", JSON.stringify(resp.auth))
                navigate('/');
            })
        })
    }
    return (
        <div>
            <div className='for-m p-0'>
                <h1 className='mt-3 mb-4 mt-4'>Register </h1>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationCustom03">
                            <Form.Label className='styl-e '>Enter Full name</Form.Label>
                            <Form.Control type="text" placeholder="Name" value={name}
                                onChange={(e) => setname(e.target.value)}
                                className='shado-w' />
                                { error && !name && <span>Enter a valid name</span> }
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustom04">
                            <Form.Label className='styl-e pt-2'>Enter Email</Form.Label>
                            <Form.Control type="text" placeholder="Email...." value={email}
                                onChange={(e) => setemail(e.target.value)}
                                className='shado-w' />
                                { error && !email && <span>Enter a valid email</span> }
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustom05">
                            <Form.Label className='styl-e pt-2' >Enter password</Form.Label>
                            <Form.Control type="password" placeholder="Password****" value={password}
                                onChange={(e) => setpassword(e.target.value)}
                                className='shado-w' />
                                { error && !password && <span>Enter a valid password</span> }
                        </Form.Group>
                    </Row>
                    <button className='butto-n' onClick={create} type="submit">Submit form</button>
                </Form>
            </div>
            
        </div>
    );
}

export default Signup;



    // const create = async () => {
    //     let data = { name, email, password }
    //     let result = await fetch("http://localhost:5000/register", {
    //         method: 'post',
    //         body: JSON.stringify(data),
    //         headers: {
    //             "Accept": 'application/json',
    //             "Content-type": 'application/json'
    //         },
    //     });
    //     result = await result.json()
    //         navigate('/')
    // }