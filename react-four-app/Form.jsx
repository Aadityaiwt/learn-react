import { useState } from "react"

export default function Form() {

    let [FormData, setFormData] = useState({
        fullName: "",
        username: "",
        password: "",
    })

    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        let newValue = event.target.value;

        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(FormData);
        
        setFormData({
            fullName: "",
            username: "",
            password: "",
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name : </label>
            <input type="text"
             placeholder="full name : " 
             value={FormData.fullName} 
             id="fullname" 
             name="fullName"
             onChange={handleInputChange}
             
             />

            <br />
            <br />

            <label htmlFor="username">Username : </label>
            <input type="text" 
            placeholder="username : " 
            id="username" 
            value={FormData.username} 
            name="username"
            onChange={handleInputChange}
            
            />

            <br />
            <br />

            <label htmlFor="password">Password : </label>
            <input type="password" 
            placeholder="password : " 
            id="password" 
            value={FormData.password} 
            name="password"
            onChange={handleInputChange}
            
            />

            <button>Submit</button>
        </form>
    )
}