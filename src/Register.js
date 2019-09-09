import React,{useState} from 'react';
import videographer from './videographer.svg';
import './Register.css';
import useRegisterForm from './hooks/form';

const Register = ()=> {
    const {inputs, handleInputChange, handleSubmit} = useRegisterForm(Register);
    let [currentForm, setCurrentForm] = useState(1);
    const next = ()=> {
        currentForm >2 ? setCurrentForm({currentForm:3}) : setCurrentForm(currentForm+=1)
    }
    const prev = ()=> {
        currentForm <=1 ? setCurrentForm({currentForm:1}) : setCurrentForm(currentForm-=1)
    }
    const previousButton = ()=> {
        if(currentForm !==1){
          return (
            <div onClick={prev} className='btn Next text-light '>Back  <i className='fas fa-arrow-circle-left'></i></div>            
          )
        }
        return null;
      }
      
      const nextButton = ()=> {
        if(currentForm<3){
          return ( 
             <div onClick={next} className='btn Next text-light float-right'>Next  <i className='fas fa-arrow-circle-right'></i></div>    
          )
        } else  if (currentForm === 3) {
            return (
                <button className='btn Next text-light float-right'>Register <i className='fas fa-sign-in-alt'></i></button>    
            )
        } else {
            return null;
        }
      }

    return (
        <>
        <div className='row'>
             <div className='col'>
                <img className='Logo mt-5 mb-5' alt='mobmanstudios logo' src ='../mobmanlogo.png'/>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-6'>
                <div className='mx-auto'>
                    <img src={videographer} alt='Videographer resting on his camera...' className='Videographer'/> 
                </div>
            </div>
            <div className='col-md-6 Half'>
                <form onSubmit={handleSubmit}>
                    <FormOne inputs={inputs} handleInputChange={handleInputChange} currentForm={currentForm}/>
                    <FormTwo inputs={inputs} handleInputChange={handleInputChange} currentForm={currentForm}/>
                    <FormThree inputs={inputs} handleInputChange={handleInputChange} currentForm={currentForm}/>
                    {previousButton()}
                    {nextButton()}
                </form>
            </div>

        </div>           
    </>
    )
        
}


const FormOne = (props) => {
    if(props.currentForm !== 1) {
        return null
    }
    return (
        <>
        <h5 className='Videographer-Legend  text-center mx-auto bold'>Kindly fill all mandatory fields with accurate information.</h5>
            <hr/>
                <div>
                    <span>
                        <i className='fas fa-circle'></i>
                        <i className='fas fa-circle mx-1'></i>
                        <i className='fas fa-circle'></i>
                    </span>
                    <span className='float-right '>Personal details</span>
                </div>
                <div className='Form p-4 my-5' >
                    <div className='form-group'>
                        <label htmlFor='fullName'>Full Name</label>
                        <input onChange={props.handleInputChange} value={props.inputs.fullName} type='text' className='form-control'  id='fullName' placeholder='e.g. Joe'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='gender'>Gender</label>
                        <select onChange={props.handleInputChange} value={props.inputs.gender}  name='gender' className='form-control'>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                            <option value='Others'>Rather not say</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='age font-weight-bold'>Age</label>
                        <input onChange={props.handleInputChange} value={props.inputs.age} name='age' type='text' className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='phone'>Phone number</label>
                        <input onChange={props.handleInputChange} value={props.inputs.phone} name='phone' type='tel' className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='phone'>Email</label>
                        <input onChange={props.handleInputChange} value={props.inputs.email} name='email' type='email' className='form-control'/>
                    </div>
                </div>
                </>
    )
}

const FormTwo = (props)=> {
    if(props.currentForm !== 2) {
        return null
    }
    return (
        <>
       <h5 className='Videographer-Legend  text-center mx-auto bold'>Kindly fill all mandatory fields with accurate information.</h5>
            <hr/>
                <div>
                    <span>
                        <i className='fas fa-circle'></i>
                        <i className='fas fa-circle mx-1'></i>
                        <i className='fas fa-circle'></i>
                    </span>
                    <span className='float-right '>Experience</span>
                </div>
                <div className='Form p-4 my-5' >
                    <div className='form-group'>
                        <label htmlFor='experience'>Level of Experience</label>
                        <input onChange={props.handleInputChange} value={props.inputs.experience} name='experience' type='text' className='form-control' id='experience' placeholder='your level of experience'/>
                    </div>
                    <div className='form-group'>
                        <label>Do you own a camera?</label>
                        <input onChange={props.handleInputChange}  className='form-control' value={props.inputs.camera}  id='' name='camera' type='text' /> 
                        
                        {/* <input id='no' value={props.inputs.camera} name='camera'  value='No' type='radio' />
                        <label htmlFor='no'>No</label> */}
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='age font-weight-bold'>If yes, Type of Camera</label>
                        <input name='cameraType' onChange={props.handleInputChange}  value={props.inputs.cameraType} type='text' placeholder='type in your camera details' className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='areaOfApplication'>Area of Camera application</label>
                        <input name='areaOfApplication' onChange={props.handleInputChange} value={props.inputs.areaOfApplication} type='text' className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='phone'>Most preferred area of interest</label>
                        <input name='areaOfInterest' value={props.inputs.areaOfInterest}  onChange={props.handleInputChange} type='text' className='form-control' />
                    </div>
                </div>
        </>
    )
}

const FormThree = (props) => {
    if(props.currentForm !== 3) {
        return null
    }
    return (
        <> 
        <h5 className='Videographer-Legend  text-center mx-auto bold'>Kindly fill all mandatory fields with accurate information.</h5>
            <hr/>
                <div>
                    <span>
                        <i className='fas fa-circle'></i>
                        <i className='fas fa-circle mx-1'></i>
                        <i className='fas fa-circle'></i>
                    </span>
                    <span className='float-right '>Complete Registration</span>
                </div>
                <div className='Form p-4 my-5' >
                   <div>
                    By clicking the <strong>“Register”</strong> button, I declare that all information
                    provided for this Videografia Class are authentic and I will also 
                    keep to the <a href='/'>rules </a> and <a href='/'>regulations</a> of this Master class.
                   </div>
                </div>
        </>
    )
}

export default Register;