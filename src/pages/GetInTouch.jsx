import React from 'react'
import {Field, Form, Formik} from 'formik'

const GetInTouch = () => {
  return (
    <div>
      <section id="section1" className='h-[50vh] w-full bg-black text-white flex  justify-center  gap-3'>
        <div className='relative top-50 flex flex-col items-center gap-3'>
      <h1 className='text-5xl font-light text-[#fdb3bd]'>Get Your Personalized Travel Quote</h1>
      <h2 className='text-2xl font-light'>Share your travel plans, and we’ll provide a personalized quote tailored just for you.</h2>
      <h3 className='font-light'>Your comfort and convenience are our priority—let us know how we can help</h3>
      </div></section>
      <section id="section2" className='h-[80vh] w-full bg-white px-50 py-20'>
        <div>
          <h1 className='text-5xl font-light pb-4'>Contact Form</h1>
          <p className='font-extralight text-lg'>Complete the form below with your travel details, and our experts at OSR Trips will craft a customized travel plan and quote that fits your needs. </p>
        </div>
        
        <Formik initialValues={{name:'',phone:"",email:'',message:''}}
        onSubmit={(value,{resetForm})=>{
         fetch("https://formsubmit.co/ajax/osrtrips@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(value),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Message sent!");
        resetForm();
      })
      .catch((err) => console.log(err));
  }}
          >
          
          <Form>
          <div className=' md:flex  gap-10   '>
             <div className='flex flex-col'>
                <label htmlFor='name'>Name</label>
                <Field id="name" name="name" type="text" required className="border w-[35vw] h-10 capitalize "/>
             </div>
              <div className='flex flex-col'>
                <label htmlFor='phone'>Phone No</label>
              <Field id='phone' name='phone' type='number' required  className="border w-[35vw] h-10"/>
              </div>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='email'>Email</label>
            <Field id="email" name="email" required className="border h-10" />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='message'>Message</label>
             <Field as="textarea" id="message" name="message" className="border h-40 capitalize" />
          </div>
          <div className=' flex justify-end'>
          <button type='submit' className='p-3 px-5 bg-[#fa2743] rounded-4xl text-white text-md mt-5 active:scale-90'>Submit</button>
          </div>
          </Form>
          </Formik>
        <div>

        </div>
      </section>
      <section id="section3" className='h-[40vw] w-full bg-[#fa2743] px-50 py-15 flex'>
        <div className='text-white   f-full w-1/2'>
          <h1 className='text-4xl my-4'>Find Us</h1>
          <h2 className='text-2xl my-3'>Location</h2>
          <h3>Bishalnagar-5, Kathmandu, Nepal</h3>
          <h2 className='text-2xl my-4'>Contact</h2>
          <h3>Tel: +977-9816940114</h3>
          <h3>Email:  osrtrips@gmail.com</h3>
          <h2 className='text-2xl my-4'>Hours</h2>
          <h3>Sunday-Friday: 9:00 Am - 6:00 PM</h3>
          <h3>Saturday: 10:30 Am - 4:00 PM</h3>

        </div>
        <div className='bg-amber-300 h-full w-1/2'>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.7421096863926!2d85.33785936477072!3d27.721183907409554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb196c4906da23%3A0xd802818622745323!2sP8CQ%2BG53%2C%20Pipal%20Bot%20Marg%2C%20Kathmandu%2C%20Bagmati%20Province%2044616!5e0!3m2!1sen!2snp!4v1790328130290!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>

        </div>
        
      </section>
    </div>
  )
}

export default GetInTouch
