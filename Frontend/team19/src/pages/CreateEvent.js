import React, { useState } from "react";
import { useCreateEvent } from "../hooks/useCreateEvent";
import Wrapper from "../components/Wrrapper";
import { useParams } from "react-router-dom";
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
        questions:[],
        duration:''

    });
    // const {id}=useParams("")
    console.log(eventData);
    const handleQuestionsChange = (e, index) => {
      const { value } = e.target;
  
      setEventData((prevFormData) => {
        const updatedQuestions = [...prevFormData.questions];
        updatedQuestions[index] = value;
  
        return {
          ...prevFormData,
          questions: updatedQuestions,
        };
      });
    };
    const handleAddQuestion = () => {
      setEventData((prevFormData) => ({
        ...prevFormData,
        questions: [...prevFormData.questions, ''],
      }));
    };
    
    const handleRemoveQuestion = (index) => {
      setEventData((prevFormData) => {
        const updatedEvents = [...prevFormData.questions];
        updatedEvents.splice(index, 1);
    
        return {
          ...prevFormData,
          questions: updatedEvents,
        };
      });
    };

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
        const questions=eventData.questions
        const title=eventData.title
        const num=Number(eventData.duration)
       await createEvent(eventData);

       setTimeout(function() {
        fetch(`http://localhost:4000/api/event/surveyform`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title,questions})
    })
      .then((response) => response.json())
      .then((result) => {
        // Handle the response from the backend
        
        alert("Survey Form created");
        
      })
      .catch((error) => {
        // Handle errors
        console.error('Error:', error);
      });
  


      }, num*1000); // Timeout duration in milliseconds (e.g., 1000ms = 1 second)
          }
    return (<>
    <Wrapper>
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
          className="form-control multiple"
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
      


      <div className="mb-3">
        Questions for the survey form:
        {eventData.questions.map((question, index) => (
          <div key={index}>
            <input
              type="text"
              name="questions"
              value={question}
              onChange={(e) => handleQuestionsChange(e, index)}
            />
            <div>
              <button type="button" className="btn btn-primary btn-sm" onClick={() => handleRemoveQuestion(index)}>
                Remove
              </button>
            </div>
          </div>
        ))}
        <div>
          <button type="button" className="btn btn-primary btn-sm" onClick={handleAddQuestion}>
            Add Question
          </button>
        </div>
        

      <div className="mb-3">
        After how many days do you wish to send this form?:
        <input
          type="text"
          name="duration"
          value={eventData.duration}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter no. of days"
        />
      </div>


      <div className="d-grid">
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>

      </div>

    </form>
    </Wrapper>
    
    </>)
}
export default CreateEvent;