import React from 'react'

const Candidate_Details = () => {
    const candidate = {
        firstName: 'Ankur rai',
        passoutYear: '15 June 2024',
        technologies: ['React', 'JavaScript', 'Node.js','Express','MySql','MongoDB'],
      };
    
      return (
        <div>
          <div>
            <h2>Candidate Details</h2>
            <div>
              <p>
                <span>First Name:</span> {candidate.firstName}
              </p>
              <p>
                <span>Passout Year:</span> {candidate.passoutYear}
              </p>
              <p>
                <span>Technologies:</span>{' '}
                {candidate.technologies.map((tech, index) => (
                  <span key={index}>
                    {tech}
                    {index !== candidate.technologies.length - 1 && ','}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      );
    
}

export default Candidate_Details