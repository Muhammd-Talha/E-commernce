import { React, useState, useEffect } from 'react';
import './Allfiles.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [error, seterror] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const auth = localStorage.getItem("user")
        if (auth) {
            navigate("/")
        }
    })

    const create = async (e) => {
        e.preventDefault()
        console.log(email);
        if (!email || !password) {
            seterror(true)
            return false
        }

        console.log(email, password);
        let result = await fetch("http://localhost:5000/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                "content-type": "application/json"
            }
        });
        result = await result.json();
        console.log(result);
        // if (result.name) {               with auth
        if (result.auth) {                  //with auth
            // same as sign up page 
            localStorage.setItem("user", JSON.stringify(result.user));
            localStorage.setItem("token", JSON.stringify(result.auth));
            navigate("/")
        }
        //    else{
        //     alert("nuyg")
        //    }

    }
    return (
        <div className='for-m'>
            <h1 className='mt-5 mb-4'>Login Components </h1>
            <Form >
                <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom04">
                        <Form.Label className='styl-e pt-2'>Enter Email</Form.Label>
                        <Form.Control type="text" placeholder="Email...." value={email}
                            onChange={(e) => setemail(e.target.value)}
                            className='shado-w' />
                        {error && !email && <span>Enter a valid email</span>}

                    </Form.Group>
                    <Form.Group as={Col} md="12" controlId="validationCustom05">
                        <Form.Label className='styl-e pt-2' >Enter password</Form.Label>
                        <Form.Control type="password" placeholder="Password****" value={password}
                            onChange={(e) => setpassword(e.target.value)}
                            className='shado-w' />
                        {error && !password && <span>Enter a valid password</span>}

                    </Form.Group>
                </Row>
                <button className='butto-n' onClick={create} type="submit">Submit form</button>
            </Form>
        </div>
    );
}

export default Login;
