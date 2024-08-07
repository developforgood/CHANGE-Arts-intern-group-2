import { useState } from 'react';

function Form() {
    const [formData, setFormData] = useState({
        'usage': '',
        'likedAttributes': '',
        'techIssues': '',
        'additional': ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div style={{margin: "0 auto"}}>
            <h1>Feedback Form</h1>
            <form onSubmit={handleSubmit}>
                <label>

                </label>
            </form>
        </div>
    )
}
