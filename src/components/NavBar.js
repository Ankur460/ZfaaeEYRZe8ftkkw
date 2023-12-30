import React from 'react'
import { Link } from 'react-router-dom';
function NavBar() {
    const resumeurl='https://drive.google.com/uc?export=download&id=17HlRy93jW40T7s9SGot7MW2JFNV8tE3S';
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/candidate_details">Candidate_Details</Link>
                </li>
                <li>
                    <a href={resumeurl}>Candidate_Resume</a>
                </li>
                <li>
                    <Link to="/BMI_Calculator">BMI_Calculator</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar