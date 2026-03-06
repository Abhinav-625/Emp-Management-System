import { useEffect, useState } from "react"
import { createEmployee, getEmployee, updateEmployee } from "../services/EmployeeService"
import { useNavigate, useParams } from "react-router-dom"

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const navigator = useNavigate();

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getEmployee(id)
                .then(response => {
                    setFirstName(response.data.firstName)
                    setLastName(response.data.lastName)
                    setEmail(response.data.email)
                })
                .catch(err => console.error(err))
        }
    }
        , [id]
    )

    function saveOrUpdateEmployee(event) {
        event.preventDefault();

        if (validateForm()) {
            const employee = { firstName, lastName, email }
            console.log(employee);

            if (id) {
                updateEmployee(id, employee)
                    .then(response => {
                        console.log(response.data)
                        navigator('/')
                    })
                    .catch((err) => console.error(err))
            }
            else {
                createEmployee(employee)
                    .then(response => {
                        console.log(response.data)
                        navigator("/")
                    })
                    .catch(error => console.error(error));
            }
        }
    }

    function validateForm() {
        let valid = true;

        const errorsCopy = { ...errors }

        if (firstName.trim()) {
            errorsCopy.firstName = '';
        } else {
            errorsCopy.firstName = 'First Name is required';
            valid = false;
        }

        if (lastName.trim()) {
            errorsCopy.lastName = '';
        } else {
            errorsCopy.lastName = 'Last Name is required';
            valid = false;
        }

        if (email.trim()) {
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Email is required';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }

    return (
        <div className="container">
            <br />
            <br />
            <div className="row">
                <div className="card col-md-6 offset-md-3">
                    <h2 className="text-center">{
                        id ? 'Update' : 'Add'
                    } Employee</h2>
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className="form-label">First Name :</label>
                                <input type="text" name="firstName" className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} placeholder="Enter first name" value={firstName} onChange={e => setFirstName(e.target.value)} />

                                {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Last Name :</label>
                                <input type="text" name="lastName" className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} placeholder="Enter last name" value={lastName} onChange={e => setLastName(e.target.value)} />

                                {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Email Id :</label>
                                <input type="email" name="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} placeholder="Enter email id" value={email} onChange={e => setEmail(e.target.value)} />

                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                            </div>
                            <button type="submit" className="btn btn-success" onClick={saveOrUpdateEmployee}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeComponent