import React, {useState} from 'react';
import './Register.css';
import RegPageOne from './RegPageOne';


const Register = () => {

    const [fullName, setFullName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] =  useState('');
    const [experience, setExperience] =  useState('');
    const [areaOfApplication, setAreaOfApplication] =  useState('');
    const [areaOFInterest, setAreaOfInterest] =  useState('');

    const handleChange = (event) => {
        const {name, value} = event.target;
        
    }

    const handleSubmit = (event) => {
        event.preventDefault();

    }

    return (
        <RegPageOne />    
    )
}

















export default Register;