import React, { useEffect, useRef, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import '../../styles/suggest.css';
import '../../styles/global.css';
import { Context } from '../store/appContext';
import axios from 'axios';

export const GetAquote = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    try {
      const response = await fetch(process.env.BACKEND_URL + '/api/quote/add', {
        method: 'POST',
        body: formData,
      });

      const data = await response.text();
      console.log(data); // Puedes manejar la respuesta del servidor aquí
    } catch (error) {
      console.error('Error:', error);
    }

    // Correo
    let templateParams = {
      name: name,
      email: email,
    };

    try {
      await emailjs.send('service_isyzkhm', 'template_728s34e', templateParams, '4L6qDDEc0zbLka_DW');
      console.log('Correo enviado con éxito!');
    } catch (error) {
      console.error('Error al enviar el correo:', error);
    }
    alert("Quotate sent. Thanks you.")
    setName('')
    setEmail('')
    setMessage('')
    
  };

  return (

    <div class="px-4 py-5 px-md-5 text-center text-lg-start h-100" style={{backgroundColor: "hsl(0, 0%, 100%)"}}>
      <div class="container">
        <div class="row gx-lg-5 align-items-center">
          
          <div class="col-lg-6 mb-5 mb-lg-0">
        
            <h1 class="mb-5 display-3 fw-bold ls-tight mt-0">
              Request a Custom <span class="text-componentify">Component</span> Quote
            </h1>
            <h2 class="my-5 fw-bold ls-tight">
            Get in touch with 
            <br/>
              <span class="text-componentify">Componentify</span>
            </h2>
            <p style={{color: "hsl(217, 10%, 50.8%)"}}>
            We're thrilled that you're interested in Componentify for your custom component needs! Let us know what you have in mind, 
            and we'll get back to you with a personalized quote. We're all about making your component dreams come true, 
            so don't hesitate to reach out. We're here to help!
            </p>

          </div>
            
          <div class="col-lg-6 mb-5 mb-lg-0">
             <div class="card shadow p-3" style={{ borderRadius: "1rem"}}>
               <div class="card-body py-5 px-md-5">

               <div>

               <div class="mb-3">
      <label for="name" class="form-label"style={{color: "hsl(217, 10%, 50.8%)"}}>Name:</label>
      <input type="text" class="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
    
    <div class="mb-3">
      <label for="email" class="form-label"style={{color: "hsl(217, 10%, 50.8%)"}}>Email:</label>
      <input type="email" class="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    </div>

    <div class="mb-3">
      <label for="message" class="form-label"style={{color: "hsl(217, 10%, 50.8%)"}}>Message:</label>
      <textarea class="form-control" id="message" rows="4" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
    </div>

    <div class="mb-3">
      <label for="file" class="form-label"style={{color: "hsl(217, 10%, 50.8%)"}}>Upload image:</label>
      <input type="file" class="form-control-file" id="file" onChange={handleFileChange} />
    </div>

    <button type="button" class="c-btn c-btn-componentify c-btn-componentify-hover" onClick={handleUpload}>Submit</button>
              </div>


               </div> 
            </div> 
          </div>


        </div>
      </div>
    </div>

















    
  );
};









//   let userName = localStorage.getItem("name");
//   useEffect(() => {
//     Verifica si el usuario está autenticado al cargar la página
//     const isAuthenticated = !!localStorage.getItem('token'); 

//     if (!isAuthenticated) {
//       Si el usuario no está autenticado, alert
//       Swal.fire({
//         icon: 'warning',
//         title: 'Acceso denegado',
//         text: 'Debes iniciar sesión para acceder a esta página.',
//         confirmButtonText: 'Ir a la página de inicio de sesión',
//         allowOutsideClick: false,
//       }).then(() => {
//         Redirige a la página de inicio de login
//         navigate('/login');
//       });
//     }
//   }, []);



// CECILIA 

// return (


    // <div class="px-4 py-5 px-md-5 text-center text-lg-start h-100" style={{backgroundColor: "hsl(0, 0%, 100%)"}}>
    //   <div class="container">
    //     <div class="row gx-lg-5 align-items-center">
    //       <div class="col-lg-6 mb-5 mb-lg-0">
    //       <h1 class="mb-5 display-3 fw-bold ls-tight mt-0">
    //           Request a Custom <span class="text-componentify">Component</span> Quote
    //         </h1>
    //         <h2 class="my-5 fw-bold ls-tight">
    //         Share your Ideas with  <br />
    //           <span class="text-componentify">Componentify</span>
    //         </h2>
    //         <p style={{color: "hsl(217, 10%, 50.8%)"}}>
    //         We're thrilled that you're interested in Componentify for your custom component needs! Let us know what you have in mind, 
    //         and we'll get back to you with a personalized quote. We're all about making your component dreams come true, 
    //         so don't hesitate to reach out. We're here to help!
    //         </p>
    //       </div>
  
//           <div class="col-lg-6 mb-5 mb-lg-0">
//             <div class="card shadow p-3" style={{ borderRadius: "1rem"}}>
//               <div class="card-body py-5 px-md-5">
//                 <form >
//                   <div class="row">
//                     <div class="col-md-6 mb-4">
//                       <div class="form-outline">
//                       <label class="form-label" for="form3Example1">Name</label>
//                         <input type="text" id="form3Example1" class="form-control" />
                        
//                       </div>
//                     </div>
//                   </div>
  
                  
//                   <div class="form-outline mb-4">
//                   <label class="form-label" for="form3Example3">Email</label>
//                     <input type="email"
//                           name="email"
//                           className="form-control"
//                           required id="form3Example3" class="form-control" />
//                   </div>
  
//                   <div class="form-outline mb-4">
//                       <label class="form-label" for="customFile">Your idea</label>
//                       <input type="file" class="form-control" id="customFile" />
//                   </div>
  
//                   <div class="form-outline mb-4">
//                   <label htmlFor="message" className="form-label" style={{color: "hsl(217, 10%, 50.8%)"}}>
//                   Your message:
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   className="form-control"
//                   rows="6"
//                   required
//                 ></textarea>
//                 </div>
//                   <button type="submit" class="c-btn c-btn-componentify c-btn-componentify-hover btn-block mb-4">
//                     Send
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
  
//     )
