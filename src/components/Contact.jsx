import { useState,useEffect } from "react"

export default function Contact() {

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [number , setNumber] = useState("");
    const [message , setMessage] = useState("")




    const onsubmit = () =>{
        const contactForm = [
      {
         "name": name,
        "email": email,
        "number": number
      }
       ]
         //json can be send to backend through post method  
    }
    return(
        <>
       
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden pt-[100px] ">
        <div className="w-full p-6 m-auto rounded-md shadow-2xl shadow-black-600/40  lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-indigo-700  uppercase ">
          Contact Us
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Name</span>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="

            w-full
            block px-16 py-2 mt-2
            border- ring-2
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="shazna sadique"
              />
            </label>
          </div>

          
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Email addres</span>
              <input
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
            block
            w-full
            mt-2 px-16 py-2
            border- ring-2
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="shaznasadique@gmail.com"
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">mobile number</span>
              <input
                type="tel"
                name="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="

            w-full
            block px-16 py-2 mt-2
            border- ring-2
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="91-8521456398"
              />
            </label>
          </div>


          <div className="mb-2">
            <label>
              <span class="text-gray-700">Message</span>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="
            block
            w-full
            mt-2 px-16 py-8
            border- ring-2
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                rows="5"
              ></textarea>
            </label>
          </div>

          <div class="mb-6">
            <button
              type="submit"
              className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
            onClick={onsubmit()}
            >
              Contact Us
            </button>
          </div>
          <div></div>
        </form>
      </div>
   




        </div>
        </>
    )
}