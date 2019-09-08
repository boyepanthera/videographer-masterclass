import React from 'react';
import videographer from './videographer.svg';


const RegPageOne = ()=> {
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
                        <input type='text' className='form-control'  id='fullName' placeholder='e.g. Joe'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='gender'>Gender</label>
                        <select  name='gender' className='form-control'>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                            <option value='Others'>Rather not say</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='age font-weight-bold'>Age</label>
                        <input name='age' type='text' className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='phone'>Phone number</label>
                        <input name='phone' type='tel' className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='phone'>Email</label>
                        <input name='email' type='email' className='form-control'/>
                    </div>
                </div>
                <div className='row float-right mr-1'> 
                        <button className='btn Next text-light float-right'>Next  <i className='fas fa-arrow-circle-right'></i></button>            
                </div>
            </div>

        </div>           
    </>
    )
        
}


export default RegPageOne;