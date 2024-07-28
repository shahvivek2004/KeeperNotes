import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";
<<<<<<< HEAD
import axios from "axios";

const API_URL = "http://localhost:4000";

const handleLogout = async () => {
  try {
    const response = await axios.get(`${API_URL}/logout`);
    alert(response.data.message);
    window.location.reload();
  } catch (err) {
    console.error('Logout failed', err);
  }
};

=======
>>>>>>> origin/main

function Header() {
  return (
    <header>
      <h1>
        <HighlightIcon />
        Keeper
      </h1>
<<<<<<< HEAD
      <button onClick={handleLogout}>Log Out</button>
=======
>>>>>>> origin/main
    </header>
  );
}

export default Header;
