import axios from "axios";
import { useEffect, useState } from "react";
import { toast, Toaster, ToastBar } from 'react-hot-toast';
function Home() {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUsers(res.data);
            toast.success("Users fetch successfully");
        } catch (error) {
            console.log(error);
            toast.error("API call failed!");
        }
    };
    useEffect(() => {
        getUsers();
    }, []);

    console.log(users);

    return (
        <>
            <Toaster position="top-center" />
            <table width="100%" border="1px solid black">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div
                style={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "20px",
                    flexWrap: "wrap",
                }}
            >
                {users.map((user) => (
                    <div
                        key={user.id}
                        style={{
                            border: "1px solid black",
                            padding: "20px",
                            boxShadow: "1px 1px 5px",
                        }}
                    >
                        
                        <h3>Name : {user.name}</h3>
                        <p>Email : {user.email}</p>
                        <p>Mobile : {user.phone}</p>
                        <p>
                            {user.address.street} {user.address.city} {user.address.zipcode}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;