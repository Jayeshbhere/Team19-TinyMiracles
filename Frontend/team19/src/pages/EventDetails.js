// // import React, { useEffect, useState } from 'react'
// // import CreateIcon from '@mui/icons-material/Create';
// // import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// // import Card from '@mui/material/Card';
// // import CardContent from '@mui/material/CardContent';
// // import MailOutlineIcon from '@mui/icons-material/MailOutline';
// // import WorkIcon from '@mui/icons-material/Work';
// // import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
// // import LocationOnIcon from '@mui/icons-material/LocationOn';
// // import { NavLink, useParams, useNavigate } from 'react-router-dom';


// // const EventDetails = () => {

// //     const [getuserdata, setUserdata] = useState([]);
// //     console.log(getuserdata);

// //     const { id } = useParams("");
// //     console.log(id);

// //     const navigate = useNavigate();


// //     const getdata = async () => {

// //         const res = await fetch(` http://localhost:4000/api/event/get/${id}`, {
// //             method: "GET",
// //             headers: {
// //                 "Content-Type": "application/json"
// //             }
// //         });

// //         const data = await res.json();
// //         console.log(data);

// //         if (res.status === 422 || !data) {
// //             console.log("error ");

// //         } else {
// //             setUserdata(data)
// //             console.log("get data");
// //         }
// //     }

// //     useEffect(() => {
// //         getdata();
// //     }, [])

// //     const deleteuser = async (id) => {

// //         const res2 = await fetch(` http://localhost:4000/api/event/delete/${id}`, {
// //             method: "DELETE",
// //             headers: {
// //                 "Content-Type": "application/json"
// //             }
// //         });

// //         const deletedata = await res2.json();
// //         console.log(deletedata);

// //         if (res2.status === 422 || !deletedata) {
// //             console.log("error");
// //         } else {
// //             console.log("user deleted");
// //             alert("Success");
// //             window.location.reload(false);
// //         }

// //     }

// //     return (
// //         <div className="container mt-3 mango">
        
  
// //         <Card sx={{ maxWidth: 800 }}>
// //           <CardContent>
// //             <div className="add_btn">
// //               <NavLink to={`/edit/${getuserdata._id}`}>
// //                 <button className="btn btn-primary mx-2">
// //                   <CreateIcon />
// //                 </button>
// //               </NavLink>
// //               <button className="btn btn-danger" onClick={() => deleteuser(getuserdata._id)}>
// //                 <DeleteOutlineIcon />
// //               </button>
// //             </div>
// //             <div className="row">
// //               <div className="left_view col-lg-6 col-md-6 col-12">
// //                 <img src="/profile.png" style={{ width: 50 }} alt="profile" />
// //                 <h3 className="mt-3">
// //                   Name: <span>{getuserdata.title}</span>
// //                 </h3>
// //                 <h3 className="mt-3">
// //                   Age: <span>{getuserdata.start}</span>
// //                 </h3>
// //                 <p className="mt-3">
// //                   <MailOutlineIcon />
// //                   Email: <span>{getuserdata.end}</span>
// //                 </p>
// //                 <p className="mt-3">
// //                   <WorkIcon />
// //                   Occupation: <span>{getuserdata.location}</span>
// //                 </p>
// //                 <p className="mt-3">
// //                   Aadhar: <span>{getuserdata.tag}</span>
// //                 </p>
// //                 {/* <p className="mt-3">
// //                   PAN Card: <span>{getuserdata.isPanCard ? getuserdata.pan : 'Not provided'}</span>
// //                 </p>
// //                 <p className="mt-3">
// //                   Eshram: <span>{getuserdata.isEshram ? getuserdata.eshram : 'Not provided'}</span>
// //                 </p>
// //                 <p className="mt-3">
// //                   Mobile: <span>+91 {getuserdata.mobile}</span>
// //                 </p>
// //                 <p className="mt-3">
// //                   Date of Birth: <span>{getuserdata.dob}</span>
// //                 </p>
// //                 <p className="mt-3">
// //                   Area: <span>{getuserdata.area}</span>
// //                 </p>
// //                 <p className="mt-3">
// //                   Street: <span>{getuserdata.street}</span>
// //                 </p>
// //                 <p className="mt-3">
// //                   City: <span>{getuserdata.city}</span>
// //                 </p>
// //                 <p className="mt-3">
// //                   State: <span>{getuserdata.state}</span>
// //                 </p>
// //                 <p className="mt-3">
// //                   PIN: <span>{getuserdata.pin}</span>
// //                 </p>
// //                 {/* Add more fields here */}
// //               {/* </div>
// //               <div className="right_view col-lg-6 col-md-6 col-12">
// //                 <p className="mt-5">
// //                   <PhoneAndroidIcon />
// //                   Mobile: <span>+91 {getuserdata.mobile}</span>
// //                 </p> */} 
// //                 <p className="mt-3">
// //                   <LocationOnIcon />
// //                   Location: <span>{getuserdata.location}</span>
// //                 </p>
// //                 <p className="mt-3">
// //                   Description: <span>{getuserdata.desccription}</span>
// //                 </p>
// //                 {/* <p className="mt-3">
// //                   Family and Friends: <span>{getuserdata.familyFriends && getuserdata.familyFriends.length > 0 ? getuserdata.familyFriends.join(', ') : 'None'}</span>
// //                 </p>
// //                 <p className="mt-3">
// //                   Bank Account: <span>{getuserdata.isBankAccount ? 'Yes' : 'No'}</span>
// //                 </p>
// //                 <p className="mt-3">
// //                   Bank Name: <span>{getuserdata.bankName}</span>
// //                 </p>
// //                 <p className="mt-3">
// //                   Account Number: <span>{getuserdata.accountNumber}</span>
// //                 </p>
// //                 <p className="mt-3">
// //                   IFSC: <span>{getuserdata.ifsc}</span>
// //                 </p>
// //                 <p className="mt-3">
// //                   Medical Test Frequency: <span>{getuserdata.medicalTestFrequency}</span>
// //                 </p>
// //                 <p className="mt-3">
// //                   Last Checkup: <span>{getuserdata.lastCheckup}</span>
// //                 </p>
// //                 <p className="mt-3">
// //                   Diseases: <span>{getuserdata.diseases && getuserdata.diseases.length > 0 ? getuserdata.diseases.join(', ') : 'None'}</span>
// //                 </p>
// //                 <p className="mt-3">
// //                   Number of Children: <span>{getuserdata.numberOfChildren}</span>
// //                 </p>
// //                 <p className="mt-3">
// //                   Child Education Assistance: <span>{getuserdata.needChildEducationAssistance ? 'Yes' : 'No'}</span>
// //                 </p>
// //                 <p className="mt-3">
// //                   Employment Support: <span>{getuserdata.needEmploymentSupport ? 'Yes' : 'No'}</span>
// //                 </p>
// //                 <p className="mt-3">
// //                   Education Level: <span>{getuserdata.educationLevel}</span>
// //                 </p>
// //                 <p className="mt-3">
// //                   Skillset: <span>{getuserdata.skillset && getuserdata.skillset.length > 0 ? getuserdata.skillset.join(', ') : 'None'}</span>
// //                 </p>
// //                 <p className="mt-3">
// //                   Interests: <span>{getuserdata.interests && getuserdata.interests.length > 0 ? getuserdata.interests.join(', ') : 'None'}</span>
// //                 </p>
// //                 <p className="mt-3">
// //                   Events Attended: <span>{getuserdata.eventsAttended && getuserdata.eventsAttended.length > 0 ? getuserdata.eventsAttended.join(', ') : 'None'}</span>
// //                 </p>
// //                 <p className="mt-3">
// //                   Community: <span>{getuserdata.community}</span>
// //                 </p>
// //                 <p className="mt-3">
// //                   Gender: <span>{getuserdata.gender}</span>
// //                 </p>
// //                 Add more fields here */}
// //               </div>
// //             </div>
// //           </CardContent>
// //         </Card>
// //       </div>
// //     )
// // }

// // export default EventDetails


// import React, { useState, useEffect}  from "react";
// // import logo from "./assets/images/logo.png";
// // import speaker1 from "./assets/images/speakers/speaker-1.jpg";
// // import speaker2 from "./assets/images/speakers/speaker-2.jpg";
// // import speaker3 from "./assets/images/speakers/speaker-3.jpg";
// // import speaker4 from "./assets/images/speakers/speaker-4.jpg";
// // import speaker5 from "./assets/images/speakers/speaker-5.jpg";
// // import speaker6 from "./assets/images/speakers/speaker-6.jpg";
// import "../assets/css/main.css";
// import {useParams, useNavigate } from "react-router-dom";
// function EventDetails() {
//     const [getuserdata, setUserdata] = useState([]);
//     console.log(getuserdata);
//     console.log(getuserdata.title);

//     const { id } = useParams("");
//     console.log(id);

//     const navigate = useNavigate();


//     const getdata = async () => {

//         const res = await fetch(` http://localhost:4000/api/event/get/${id}`, {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });

//         const data = await res.json();
//         console.log(data);

//         if (res.status === 422 || !data) {
//             console.log("error ");

//         } else {
//             setUserdata(data)
//             console.log("get data");
//         }
//     }

//     useEffect(() => {
//         getdata();
//     }, [])

//     const deleteuser = async (id) => {

//         const res2 = await fetch(` http://localhost:4000/api/event/delete/${id}`, {
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });

//         const deletedata = await res2.json();
//         console.log(deletedata);

//         if (res2.status === 422 || !deletedata) {
//             console.log("error");
//         } else {
//             console.log("user deleted");
//             alert("Success");
//             window.location.reload(false);
//         }

//     }
//   return (
//     <div>
//       <nav id="site-nav" className="navbar navbar-fixed-top navbar-custom">
//         {getuserdata.title}
//       </nav>

//       <header id="site-header" className="site-header valign-center">
//         <div className="intro">
//           {/* Header content */}
//           {getuserdata.title}
//         </div>
//       </header>

//       <section id="about" className="section about">
//         <div className="container">
//           <div className="row">
//             <div className="col-sm-6">
//               {/* About Us content */}
//               {getuserdata.title}
//             </div>
//             <div className="col-sm-6">
//               {/* What is Our Goal? content */}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="facts" className="section bg-image-1 facts text-center">
//         <div className="container">
//           <div className="row">
//             {/* Facts content */}
//           </div>
//         </div>
//       </section>

//       <section id="speakers" className="section speakers">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12">
//               {/* Speakers section title */}
//             </div>
//           </div>

//           <div className="row">
//             <div className="col-md-4">
//               <div className="speaker">
//                 {/* Speaker 1 content */}
//               </div>
//             </div>

//             <div className="col-md-4">
//               <div className="speaker">
//                 {/* Speaker 2 content */}
//               </div>
//             </div>

//             <div className="col-md-4">
//               <div className="speaker">
//                 {/* Speaker 3 content */}
//               </div>
//             </div>
//           </div>

//           <div className="row">
//             <div className="col-md-4">
//               <div className="speaker">
//                 {/* Speaker 4 content */}
//               </div>
//             </div>

//             <div className="col-md-4">
//               <div className="speaker">
//                 {/* Speaker 5 content */}
//               </div>
//             </div>

//             <div className="col-md-4">
//               <div className="speaker">
//                 {/* Speaker 6 content */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Rest of the sections */}
//     </div>
//   );
// }

// export default EventDetails;x

// import QrCode from "react-qr-code";
import React, { useState, useEffect}  from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import speaker1 from "../assets/images/speakers/speaker-1.jpg";
import speaker2 from "../assets/images/speakers/speaker-2.jpg";
import speaker3 from "../assets/images/speakers/speaker-3.jpg";
import speaker4 from "../assets/images/speakers/speaker-4.jpg";
import speaker5 from "../assets/images/speakers/speaker-5.jpg";
import speaker6 from "../assets/images/speakers/speaker-6.jpg";
import "../assets/css/main.css";
import {useParams, useNavigate } from "react-router-dom";
function EventDetails() {
    const[pass,setPass]=useState(null)
    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);
    console.log(getuserdata.title);

    // const { id } = useParams("");
    const {id}=useParams("")


    const navigate = useNavigate();

    const [aadhar, setAadhar] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      // Call handleSubmit2 with the Aadhar number
      
      // You can use fetch or any other HTTP library to send the Aadhar number as the request body
      // Example:
      fetch(`http://localhost:4000/api/event/markAttendanceaadhar/${id}`, {
        method: 'POST',
        body: JSON.stringify({ aadhar }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
            alert("Attendance Marked")
          // Handle the response from the server
        })
        .catch(error => {
          // Handle any errors
          alert(error)
        });
    };
  
    
    const getdata = async () => {

        const res = await fetch(`http://localhost:4000/api/event/get/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserdata(data)
            setPass(getuserdata.attendants)
            console.log("get data");
        }
    }
    useEffect(() => {
        getdata();
    }, [])
    console.log(getuserdata.attendants);
    const extractedDate = new Date(getuserdata.start).toLocaleString('en-IN');
    const extractedEnd = new Date(getuserdata.end).toLocaleString('en-IN');
    const deleteuser = async (id) => {

        const res2 = await fetch(` http://localhost:4000/api/event/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("user deleted");
            alert("Success");
            window.location.reload(false);
        }

    }
  return (
    <>
    <nav id="site-nav" class="navbar navbar-fixed-top navbar-custom">
    <div class="container">
        <div class="navbar-header">

            <div class="site-branding">
                <a class="logo" href="index.html">
                    
                    <img src={logo} alt="Logo"/>

                    Conference 2015
                </a>
            </div>

            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-items" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>

        </div>

        <div class="collapse navbar-collapse" id="navbar-items">
            <ul class="nav navbar-nav navbar-right">

                <li class="active"><a data-scroll href="#about">About</a></li>
                <li><a data-scroll href="#speakers">Speakers</a></li>              
                <li><a data-scroll href="#schedule">Schedule</a></li>                  
                <li><a data-scroll href="#partner">Partner</a></li>       
                <li><a data-scroll href="#faq">FAQ</a></li>
                <li><a data-scroll href="#photos">Photos</a></li>
            
            </ul>
        </div>
    </div>
</nav>

<header id="site-header" class="site-header valign-center"> 
    <div class="intro">

        <h2>{extractedDate} to {extractedEnd} </h2>
        
        <h1>{getuserdata.title}</h1>
        
        <p>First &amp; Largest Conference</p>
        
        <a class="btn btn-white" data-scroll href="#registration">Register Now</a>
    
    </div>
</header>

<section id="about" class="section about">
    <div class="container">
        <div class="row">
            <div class="col-sm-6">

                {/* <h3 class="section-title">About Us</h3> */}

                {/* <p>You've inspired new consumer, racked up click-thru's, blown-up brand enes. We can't give you back the weekends you worked, or erase the pain ebeing forced to make the logo bigger. But if you submit your best work we ajusts might be able to give the chance to show you best digital marketing.</p> */}
                {/* <p> <QrCode value={`event=${id}`}/> </p> */}
                <figure>
                    <img alt="" class="img-responsive" src="assets/images/about-us.jpg"/>
                </figure>

            </div>

            <div class="col-sm-6">

                {/* <h3 class="section-title multiple-title">What is Our Goal?</h3> */}

                <h3>For got your mobile? </h3>
                <h5>Use Aadhar to mark your attendance</h5>
                {/* <ul class="list-arrow-right">

                    <li>Learn from the best Asian Social Media Experts &amp; Case Studies</li>
                    <li>Have dedicated 2-to-1 meetings with the experts</li>
                    <li>Reach more consumers for less by learning new digital media skills</li>
                    <li>Save money when spending in online advertising</li>
                
                </ul> */}
            <form onSubmit={handleSubmit}>
      <label>
        Aadhar Number:
        <input
          type="text"
          value={aadhar}
          onChange={(e) => setAadhar(e.target.value)}
        />
      </label>
      <button type="submit" class="btn btn-primary">Submit</button>

    </form>
            </div>
        </div>
    </div>
</section>

<section id="facts" class="section bg-image-1 facts text-center">
    <div class="container">
        <div class="row">
            <div class="col-sm-3">

                <i class="ion-ios-calendar"></i>
                <h3><br/></h3>
            
            </div>
            <div class="col-sm-3">

                <i class="ion-ios-location"></i>
                <h3>{extractedDate}<br/></h3>
            
            </div>
            <div class="col-sm-3">

                <i class="ion-pricetags"></i>
                <h3> {getuserdata.location}<br/></h3>
            
            </div>
            <div class="col-sm-3">
            
                <i class="ion-speakerphone"></i>
                <h3><br/></h3>
            
            </div>
        </div>
    </div>
</section>

<section id="speakers" class="section speakers">
    <div class="container">
        <div class="row">
            <div class="col-md-12">

                <h3 class="section-title">Description</h3>
            
            </div>
        </div>

        <div class="row">
            <div class="col-md-4">
                <div class="speaker">

                    <figure>
                        <img alt="" class="img-responsive center-block" src="assets/images/speakers/speaker-1.jpg"/>
                    </figure>

                    {/* <h4>Jhon Smith</h4>

                    <p>CEO of Peren</p>

                    <ul class="social-block">
                        <li><a href=""><i class="ion-social-twitter"></i></a></li>
                        <li><a href=""><i class="ion-social-facebook"></i></a></li>
                        <li><a href=""><i class="ion-social-linkedin-outline"></i></a></li>
                        <li><a href=""><i class="ion-social-googleplus"></i></a></li>
                    </ul>

                </div>
            </div>

            <div class="col-md-4">
                <div class="speaker">

                    <figure>
                        <img alt="" class="img-responsive center-block" src="assets/images/speakers/speaker-2.jpg"/>
                    </figure>

                    <h4>Jhon Smith</h4>

                    <p>CEO of Peren</p>

                    <ul class="social-block">
                        <li><a href=""><i class="ion-social-twitter"></i></a></li>
                        <li><a href=""><i class="ion-social-facebook"></i></a></li>
                        <li><a href=""><i class="ion-social-linkedin-outline"></i></a></li>
                        <li><a href=""><i class="ion-social-googleplus"></i></a></li>
                    </ul>

                </div>
            </div>

            <div class="col-md-4">
                <div class="speaker">

                    <figure>
                        <img alt="" class="img-responsive center-block" src="assets/images/speakers/speaker-3.jpg"/>
                    </figure>

                    <h4>Jhon Smith</h4>

                    <p>CEO of Peren</p>

                    <ul class="social-block">
                        <li><a href=""><i class="ion-social-twitter"></i></a></li>
                        <li><a href=""><i class="ion-social-facebook"></i></a></li>
                        <li><a href=""><i class="ion-social-linkedin-outline"></i></a></li>
                        <li><a href=""><i class="ion-social-googleplus"></i></a></li>
                    </ul>

                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-4">

                <div class="speaker">

                    <figure>
                        <img alt="" class="img-responsive center-block" src="assets/images/speakers/speaker-4.jpg"/>
                    </figure>

                    <h4>Jhon Smith</h4>

                    <p>CEO of Peren</p>

                    <ul class="social-block">
                        <li><a href=""><i class="ion-social-twitter"></i></a></li>
                        <li><a href=""><i class="ion-social-facebook"></i></a></li>
                        <li><a href=""><i class="ion-social-linkedin-outline"></i></a></li>
                        <li><a href=""><i class="ion-social-googleplus"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-4">

                <div class="speaker">

                    <figure>
                        <img alt="" class="img-responsive center-block" src="assets/images/speakers/speaker-5.jpg"/>
                    </figure>

                    <h4>Jhon Smith</h4>

                    <p>CEO of Peren</p> */}
                    {/* <figure><p>{getuserdata.description}</p></figure>  */}
                    <ul class="social-block">
                        <li><a href=""><i class="ion-social-twitter"></i></a></li>
                        <li><a href=""><i class="ion-social-facebook"></i></a></li>
                        <li><a href=""><i class="ion-social-linkedin-outline"></i></a></li>
                        <li><a href=""><i class="ion-social-googleplus"></i></a></li>
                    </ul>

                </div>
            </div>

            <div class="col-md-4">
                <div class="speaker">
                    <figure>
                        <img alt="" class="img-responsive center-block" src="assets/images/speakers/speaker-6.jpg"></img>
                    </figure>
                    <h4>{getuserdata.description}</h4>
                    {/* <p>CEO of Peren</p> */}
                    <ul class="social-block">
                        <li><a href=""><i class="ion-social-twitter"></i></a></li>
                        <li><a href=""><i class="ion-social-facebook"></i></a></li>
                        <li><a href=""><i class="ion-social-linkedin-outline"></i></a></li>
                        <li><a href=""><i class="ion-social-googleplus"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="registration" class="section registration">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h3 class="section-title">Registration &amp; Pricing</h3>
            </div>
        </div>
            
        <form action="#" id="registration-form">
            <div class="row">
                <div class="col-md-12" id="registration-msg" style={{display:"none"}}>
                    <div class="alert"></div>
                </div>
                <div class="col-sm-6">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="First Name" id="fname" name="fname" required/>
                    </div>

                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Last Name" id="lname" name="lname" required/>
                    </div>

                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="Email" id="email" name="email" required/>
                    </div>

                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Phone" id="cell" name="cell" required/>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Address" id="address" name="address" required/>
                    </div>

                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Zip Code" id="zip" name="zip" required/>
                    </div>

                    <div class="form-group">
                        <select class="form-control" name="city" id="city" required>
                            <option readonly>City</option>
                            <option>City Name 1</option>
                            <option>City Name 2</option>
                            <option>City Name 3</option>
                            <option>City Name 4</option>
                        </select>
                    </div>

                    {/* <div class="form-group">
                        <select class="form-control" name="program" id="program" required>
                            <option readonly>Select Your Program</option>
                            <option>Program Name 1</option>
                            <option>Program Name 2</option>
                            <option>Program Name 3</option>
                        </select>
                    </div> */}
                </div>
            </div>
            <div class="text-center mt20">
                <button type="submit" class="btn btn-black" id="registration-submit-btn">Submit</button>
            </div>
        </form>
    </div>
</section>

<section id="contribution" class="section bg-image-2 contribution">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h3 class="text-uppercase mt0 font-400">Submit Your Contribution Work</h3>
                
                <p>You've inspired new consumer, racked up click-thru's, blown-up brand awareness. We can't give you back the weekends you worked, or erase the pain of being forced to make the logo bigger. But if you submit your best work.</p>

                <a class="btn btn-white" href="#">Submit</a>
            </div>
        </div>
    </div>
</section>

<section id="schedule" class="section schedule">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h3 class="section-title">Event Schedule</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-sm-6">
                <div class="schedule-box">
                    <div class="time">
                        <time datetime="09:00">09:00 am</time> - <time datetime="22:00">10:00 am</time>
                    </div>
                    <h3>Welcome and intro</h3>
                    <p>Mustafizur Khan, SD Asia</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="schedule-box">
                    <div class="time">
                        <time datetime="10:00">10:00 am</time> - <time datetime="22:00">10:00 am</time>
                    </div>
                    <h3>Tips and share</h3>
                    <p>Mustafizur Khan, SD Asia</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="schedule-box">
                    <div class="time">
                        <time datetime="10:00">10:00 am</time> - <time datetime="22:00">10:00 am</time>
                    </div>
                    <h3>View from the top</h3>
                    <p>Mustafizur Khan, SD Asia</p>
                </div>
            </div>
        </div>
    </div>
</section>

{/* <section id="partner" class="section partner">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h3 class="section-title">Event Partner</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-3">
                <a class="partner-box partner-box-1"></a>
            </div>
            <div class="col-sm-3">
                <a class="partner-box partner-box-2"></a>
            </div>
            <div class="col-sm-3">
                <a class="partner-box partner-box-3"></a>
            </div>
            <div class="col-sm-3">
                <a class="partner-box partner-box-4"></a>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-3">
                <a class="partner-box partner-box-5"></a>
            </div>
            <div class="col-sm-3">
                <a class="partner-box partner-box-6"></a>
            </div>
            <div class="col-sm-3">
                <a class="partner-box partner-box-7"></a>
            </div>
            <div class="col-sm-3">
                <a class="partner-box partner-box-8"></a>
            </div>
        </div>   
    </div>
</section> */}

<section id="faq" class="section faq">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h3 class="section-title"><Link to=
         {"/viewallattendance/"+id}>View Attendance</Link></h3>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    
                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingOne">
                            <h4 class="panel-title">
                                <a class="faq-toggle collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> What is the price of the ticket ?</a>
                            </h4>
                        </div>

                        <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                            <div class="panel-body">
                                <h3>Hello</h3>
                                <p>Lorem Ipsum</p>
                            </div>
                        </div>
                    </div>

                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingTwo">
                            <h4 class="panel-title">
                                <a class="faq-toggle collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> What is included in my ticket ?</a>
                            </h4>
                        </div>

                        <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                            <div class="panel-body">Hello</div>
                        </div>
                    </div>

                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingThree">
                            <h4 class="panel-title">
                                <a class="faq-toggle collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Office address ?</a>
                            </h4>
                        </div>

                        <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                            <div class="panel-body">Hello</div>
                        </div>
                    </div>

                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingFour">
                            <h4 class="panel-title">
                                <a class="faq-toggle collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour"> How should I dress ?</a>
                            </h4>
                        </div>

                        <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                            <div class="panel-body">Hello</div>
                        </div>
                    </div>

                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingFive">
                            <h4 class="panel-title">
                                <a class="faq-toggle collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive"> I have specific questions that are not addressed here. Who can help me ?</a>
                            </h4>
                        </div>

                        <div id="collapseFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                            <div class="panel-body">Hello</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="photos" class="section photos">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h3 class="section-title">Photos</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <ul class="grid">
                    
                    <li class="grid-item grid-item-sm-6">
                        <img alt="" class="img-responsive center-block" src="assets/images/photos/photos-1.jpg"/>
                    </li>

                    <li class="grid-item grid-item-sm-3">
                        <img alt="" class="img-responsive center-block" src="assets/images/photos/photos-2.jpg"/>
                    </li>

                    <li class="grid-item grid-item-sm-3">
                        <img alt="" class="img-responsive center-block" src="assets/images/photos/photos-3.jpg"/>
                    </li>
                
                    <li class="grid-item grid-item-sm-3">
                        <img alt="" class="img-responsive center-block" src="assets/images/photos/photos-5.jpg"/>
                    </li>

                    <li class="grid-item grid-item-sm-3">
                        <img alt="" class="img-responsive center-block" src="assets/images/photos/photos-6.jpg"/>
                    </li>

                    <li class="grid-item grid-item-sm-3">
                        <img alt="" class="img-responsive center-block" src="assets/images/photos/photos-7.jpg"/>
                    </li>

                    <li class="grid-item grid-item-sm-3">
                        <img alt="" class="img-responsive center-block" src="assets/images/photos/photos-8.jpg"/>
                    </li>

                    <li class="grid-item grid-item-sm-3">
                        <img alt="" class="img-responsive center-block" src="assets/images/photos/photos-2.jpg"/>
                    </li>

                    <li class="grid-item grid-item-sm-3">
                        <img alt="" class="img-responsive center-block" src="assets/images/photos/photos-3.jpg"/>
                    </li>
                </ul>
            </div>
        </div>            
    </div>
</section>

<section id="location" class="section location">
    <div class="container">
        <div class="row">
            <div class="col-sm-3">
                <h3 class="section-title">Event Location</h3>
                <address>
                    <p>Eardenia<br/> The Grand Hall<br/> House # 08, Road #52, Street<br/> Phone: +1159t3764<br/> Email: example@mail.com</p>
                </address>
            </div>
            <div class="col-sm-9">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96706.50013548559!2d-78.9870674333782!3d40.76030630398601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited+States!5e0!3m2!1sen!2sbd!4v1436299406518" width="100%" height="450" frameborder="0" style={{border:"0"}} allowfullscreen></iframe>
            </div>
        </div>
    </div>
</section>

<footer class="site-footer">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <p class="site-info">Designed and <br/> Developed by <a href="http://technextit.com">Technext Limited</a></p>
                <ul class="social-block">
                    <li><a href=""><i class="ion-social-twitter"></i></a></li>
                    <li><a href=""><i class="ion-social-facebook"></i></a></li>
                    <li><a href=""><i class="ion-social-linkedin-outline"></i></a></li>
                    <li><a href=""><i class="ion-social-googleplus"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
</>
  );
}

export default EventDetails;