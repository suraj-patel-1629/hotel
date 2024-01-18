import React from "react";
function Navbar() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "/login";
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg ">
        <a class="navbar-brand" href="#">
          SURAJROOMS
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon">
            <i class="fa-solid fa-bars" style={{ color: "white" }}></i>
          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-5">
            {user ? (
              <>
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa fa-user"></i> {user.name}
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="/book">
                      Bookings
                    </a>
                    <a class="dropdown-item" href="/login" onclick={logout}>
                      Logout
                    </a>
                    
                  </div>
                </div>
              </>
            ) : (
              <>
                <li class="nav-item active">
                  <a class="nav-link" href="/Register">
                    Register
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Login">
                    Login
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
