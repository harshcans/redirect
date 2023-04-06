import React, { useState } from "react";

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
    setNewLink(`https://7y1nmn-3000.csb.app/${id}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter external link:
          <input
            type="text"
            value={externalLink}
            onChange={(event) => setExternalLink(event.target.value)}
          />
        </label>
        <button type="submit">Create new link</button>
      </form>
      {newLink && (
        <div>
          New link: <a href={newLink}>{newLink}</a>
        </div>
      )}
    </div>
  );
}

export default Submenu;
