import React from 'react';
import videographer from './videographer.svg';

const RegPageThree = ()=> {
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
                    <span className='float-right '>Experience</span>
                </div>
                <div className='Form p-4 my-5' >
                    <div className='form-group'>
                        <label htmlFor='experience'></label>
                        <input type='text' className='form-control' id='experience' placeholder='e.g. Joe'/>
                    </div>
                    <div className='form-group'>
                        <label>Do you own a camera?</label>
                        <input value='Yes' id='' name='camera' type='radio' /> 
                        <label>Yes</label>
                        <input id='no' name='camera'  value='No' type='radio' />
                        <label htmlFor='no'>No</label>
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='age font-weight-bold'>Type of Camera</label>
                        <input name='age' type='text' className='form-control' value={age}/>
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='phone'>Phone number</label>
                        <input name='phone' value={phone} type='tel' className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='phone'>Email</label>
                        <input name='email' type='email' className='form-control' value ={email}/>
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


export default RegPageThree;