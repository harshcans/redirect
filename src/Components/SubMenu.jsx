import React, { useState } from "react";
import "./Input.css";
import Navbar from "./Navbar";

function Submenu() {
  const [externalLink, setExternalLink] = useState("");
  const [newLink, setNewLink] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Generate a unique ID for the new link
    const id = Date.now().toString(36) + Math.random().toString(36).substr(2);
    // Store the external link in local storage
    localStorage.setItem(id, externalLink);
    setNewLink(`https://harshcans.netlify.app/redirect/${id}`);
  };

  return (
   <div className="form">
      <Navbar />
      <div class="formbold-main-wrapper">
        <section id="Free_Quote">
          <div class="slogan">
            <h1>
             Create Redirectable Link with ease
              <br />
              of One Click
            </h1>
          </div>
          <div class="form-container">
            <h2>Enter Web Address!</h2>
            <form
              id="form"
               onSubmit={handleSubmit}
            >
              <div class="form-email">
               <input
          type="text"
          value={externalLink}
            onChange={(event) => setExternalLink(event.target.value)}
          placeholder="eg: https://harshcans.netlify.app"
          class="formbold-form-input"
        />
               <button class="formbold-btn ">
        Get your Link
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1661_1158)">
        <path d="M2.494 0.937761L14.802 7.70709C14.8543 7.73587 14.8978 7.77814 14.9282 7.8295C14.9586 7.88087 14.9746 7.93943 14.9746 7.99909C14.9746 8.05875 14.9586 8.11732 14.9282 8.16868C14.8978 8.22005 14.8543 8.26232 14.802 8.29109L2.494 15.0604C2.44325 15.0883 2.3861 15.1026 2.32818 15.1017C2.27027 15.1008 2.21358 15.0848 2.16372 15.0553C2.11385 15.0258 2.07253 14.9839 2.04382 14.9336C2.01511 14.8833 2.00001 14.8264 2 14.7684V1.22976C2.00001 1.17184 2.01511 1.11492 2.04382 1.06461C2.07253 1.0143 2.11385 0.97234 2.16372 0.942865C2.21358 0.913391 2.27027 0.897419 2.32818 0.896524C2.3861 0.895629 2.44325 0.909842 2.494 0.937761ZM3.33333 8.66576V13.0771L12.5667 7.99909L3.33333 2.92109V7.33243H6.66667V8.66576H3.33333Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_1661_1158">
        <rect width="16" height="16" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        </button>
              </div>
            </form>
            
          </div>
        </section>
      </div>

      {newLink && (
        <div className="redirectlink">
         <h2> New link : &nbsp; &nbsp; <a href={newLink}>{newLink}</a> </h2>
        </div>
      )}
    </div>
  );
}

export default Submenu;
