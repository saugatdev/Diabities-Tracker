import React from 'react';
import { useForm } from 'react-hook-form';
import './form.css';

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);  // This will log the form data
    // You can send the form data to backend here
  };

  return (
    <div className="diabetes-form-container">
      <h2>Diabetes Tracker Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        
        {/* Full Name */}
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            {...register('name', { required: 'Name is required' })} 
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        {/* Age */}
        <div className="form-group">
          <label>Age:</label>
          <input 
            type="number" 
            {...register('age', { required: 'Age is required', min: 1 })} 
          />
          {errors.age && <p>{errors.age.message}</p>}
        </div>

        {/* Gender */}
        <div className="form-group">
          <label>Gender:</label>
          <select {...register('gender', { required: 'Gender is required' })}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p>{errors.gender.message}</p>}
        </div>

        {/* Type of Diabetes */}
        <div className="form-group">
          <label>Type of Diabetes:</label>
          <select {...register('typeOfDiabetes', { required: 'This field is required' })}>
            <option value="">Select</option>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
            <option value="gestational">Gestational</option>
            <option value="prediabetes">Prediabetes</option>
          </select>
          {errors.typeOfDiabetes && <p>{errors.typeOfDiabetes.message}</p>}
        </div>

        {/* Diagnosis Date */}
        <div className="form-group">
          <label>Date of Diagnosis:</label>
          <input 
            type="date" 
            {...register('diagnosisDate', { required: 'Date of Diagnosis is required' })} 
          />
          {errors.diagnosisDate && <p>{errors.diagnosisDate.message}</p>}
        </div>

        {/* Blood Sugar Level */}
        <div className="form-group">
          <label>Blood Sugar Level (mg/dL):</label>
          <input 
            type="number" 
            {...register('bloodSugarLevel', { required: 'Blood Sugar Level is required' })} 
          />
          {errors.bloodSugarLevel && <p>{errors.bloodSugarLevel.message}</p>}
        </div>

        {/* HbA1c */}
        <div className="form-group">
          <label>HbA1c (%):</label>
          <input 
            type="number" 
            step="0.1" 
            {...register('hbA1c', { required: 'HbA1c is required' })} 
          />
          {errors.hbA1c && <p>{errors.hbA1c.message}</p>}
        </div>

        {/* Physical Activity */}
        <div className="form-group">
          <label>Physical Activity Level:</label>
          <select {...register('physicalActivity')}>
            <option value="">Select</option>
            <option value="sedentary">Sedentary</option>
            <option value="moderate">Moderate</option>
            <option value="active">Active</option>
          </select>
        </div>

        {/* Diet */}
        <div className="form-group">
          <label>Diet:</label>
          <input 
            type="text" 
            {...register('diet', { required: 'Diet is required' })} 
          />
          {errors.diet && <p>{errors.diet.message}</p>}
        </div>

        {/* Current Medication */}
        <div className="form-group">
          <label>Current Medication:</label>
          <input 
            type="text" 
            {...register('medication', { required: 'Medication is required' })} 
          />
          {errors.medication && <p>{errors.medication.message}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
