import React, { useState } from "react";
import { useCreateEvent } from "../hooks/useCreateEvent";
const CreateEvent=()=>{
    const{createEvent,error,isLoading,success,setSuccess}=useCreateEvent();
    const [eventData,setEventData]=useState({
        title:'',
        description:'',
        location:'',
        start:'',
        end:'',
        tag:'',
        resources:'',

    });

    const handleChange=(e)=>{
        const { name, value, type, checked } = e.target;
       
        setEventData((preData)=>({
            ...preData,
            [name]:value
            


        }))
    }
    const handleSubmit= async(e)=>{
        e.preventDefault();
        console.log(eventData);
       await createEvent(eventData);
    }
    return (<>
    <form onSubmit={handleSubmit}>
      <h3>Fill Event Details</h3>
      <div className="mb-3">
        Title:
        <input
          type="text"
          name="title"
          value={eventData.title}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter title"
        />
      </div>
      <div className="mb-3">
        Description:
        {/* <input
          
          name="description"
          value={eventData.description}
          onChange={handleChange}
          className="form-control"
          placeholder=""
        /> */}
        <textarea
        name="description"
        value={eventData.description}
        onChange={handleChange}
        className="form-control"
        placeholder=""
        ></textarea>
      </div>
     
      <div className="mb-3">
        Location:
        <input
          type="text"
          name="location"
          value={eventData.location}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter location of event"
        />
      </div>
     
      
    
    
      <div className="mb-3">
        Start date:
        <input
          type="date"
          name="start"
          value={eventData.start}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter start date"
        />
      </div>
      <div className="mb-3">
        End date:
        <input
          type="date"
          name="end"
          value={eventData.end}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter end date"
        />
      </div>
    
     
     
      <div className="mb-3">
        Event Type
        <select
          name="tag"
          value={eventData.tag}
          onChange={handleChange}
          className="form-control"
        >
          <option value="Education">Education</option>
          <option value="Health">Health Related</option>
          <option value="women">Women Employment</option>
          <option value="child">Children Special</option>
        </select>
      </div>
      <div className="mb-3">
        Resources:
        <input
          type="text"
          name="resources"
          value={eventData.resources}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter resources"
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
    
    </>)
}
export default CreateEvent;