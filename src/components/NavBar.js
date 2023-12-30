import React from 'react'

function NavBar() {
    const resumeurl='https://drive.google.com/uc?export=download&id=17HlRy93jW40T7s9SGot7MW2JFNV8tE3S';
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <a href="candidate_details">Candidate_Details</a>
                </li>
                <li>
                    <a href={resumeurl}>Candidate_Resume</a>
                </li>
                <li>
                    <a href="BMI_Calculator">BMI_Calculator</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar