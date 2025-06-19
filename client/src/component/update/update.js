import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button} from 'react-bootstrap'

const Update = ()=>{
    const {id} = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        desc: "",
        amount: 0,
        location: "",
    });


    useEffect(()=>{
            const fetchUser = async () =>{
                try{
                    const response = await fetch(`http://localhost:8000/api/user/${id}`);
                    const data = await response.json();
                    setFormData(data);
                }catch(error){
                    console.error('error while fetching users: ', error.message)
                }
            }
            fetchUser();
    }, [id]);


    const handleInputChange = (event)=> {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await fetch(`http://localhost:8000/api/user/${id}`,{
                method: "PATCH",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json(response)
            console.log(data);
            navigate("/")
        }catch(error){
            console.error(error.message)
        }
    }


    return(
        <>
             <div className="center-form">
                <h1>Update</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                            type="text"
                            name="desc"
                            placeholder="Enter Description"
                            value={formData.desc}
                            onChange={handleInputChange}                    
                        
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicamount">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control 
                            type="number"
                            name="amount"
                            placeholder="Enter Amount"
                            value={formData.amount}
                            onChange={handleInputChange}                    
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicLocation">
                        <Form.Label>Location</Form.Label>
                        <Form.Control 
                            type="text"
                            name="location"
                            placeholder="Enter Location"
                            value={formData.location}
                            onChange={handleInputChange}                    
                        
                        />
                    </Form.Group>
                    <Button variant="dark" type="submit" className="w-100">
                        Update
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default Update;