import {useState} from 'react'

const useRegisterForm = (callback) => {
    const [inputs, setInputs] = useState({});
    const handleSubmit = (event) => {
      if (event) {
        event.preventDefault();
        alert('You wanted to register we are working on the backend')
      }
    }
    const handleInputChange = (event) => {
      event.persist();
      setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }
   

    return {
      handleSubmit,
      handleInputChange,
      inputs,
    };
  }


  export default useRegisterForm