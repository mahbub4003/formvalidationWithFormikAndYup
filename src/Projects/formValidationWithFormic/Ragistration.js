import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const Ragistration = () => {

    const formik = useFormik({
        initialValues :{
          name : '',
          email : '',
          password : ''
        },
        validationSchema : yup.object({
            name : yup.string().min(2, "Name atleast 2 carectors").required(),
            email : yup.string().email( "Email atleast 2 carectors").required(),
            password : yup.string().min(6, "Password atleast 6 carectors").required()
        }),
        onSubmit : (values,{resetForm})=>{
            console.log(values);
            resetForm({values:""})
        }

    })
    return (
        <div>
            <h2>Ragistration Form</h2>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input onChange={formik.handleChange} name="name" value={formik.values.name} type="text" />
                    {formik.touched.name && formik.errors.name && <p style={{color:"red"}}>{formik.errors.name}</p>}
                </div>
                <div>
                    <label>Email:</label>
                    <input onChange={formik.handleChange} name="email" value={formik.values.email} type="email" />
                    {formik.touched.email && formik.errors.email && <p style={{color:"red"}}>{formik.errors.email}</p>}
                </div>
                <div>
                    <label>Password:</label>
                    <input onChange={formik.handleChange} name="password" value={formik.values.password} type="password" />
                    {formik.touched.password && formik.errors.password && <p style={{color:"red"}}>{formik.errors.password}</p>}
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Ragistration;