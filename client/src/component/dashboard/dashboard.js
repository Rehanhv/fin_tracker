import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const fetchUsers = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/user");
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error("Error while fetching users: ", error.message);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleUpdate = (userId) => {
        navigate(`/user/${userId}`);
    };

    const handleDelete = async (userId) => {
        try {
            const response = await fetch(`http://localhost:8000/api/user/${userId}`, {
                method: "DELETE",
            });

            if (response.ok) {
                fetchUsers();
            }
        } catch (error) {
            console.error("Error while deleting users: ", error.message);
        }
    };

    // Calculate total amount
    const totalAmount = users.reduce((sum, user) => sum + Number(user.amount), 0);

    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col>
                        <h1 className="text-center">Financial Tracker</h1>
                        
                        {/* Display Total Amount */}
                        <h3 className="text-center mt-3">
                        Total Amount: <span className="text-primary">₹{totalAmount}</span>
                        </h3>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Amount</th>
                                    <th>Location</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user._id}>
                                        <td>{user.desc}</td>
                                        <td>₹{user.amount}</td>
                                        <td>{user.location}</td>
                                        <td>
                                            <Button
                                                variant="dark"
                                                onClick={() => handleUpdate(user._id)}
                                            >
                                                Update
                                            </Button>{" "}
                                            <Button
                                                variant="danger"
                                                onClick={() => handleDelete(user._id)}
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Dashboard;
