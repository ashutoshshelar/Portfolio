import React from 'react';

const projects = [
  {
    title: "Automated CI/CD and Containerized Deployment for Airline Application",
    tech: "Python, HTML, CSS, JavaScript, MySQL, GitHub, Jenkins, Docker, Kubernetes, Terraform, Ansible",
    desc: ["Automated the build and deployment process by setting up a CI/CD pipeline using Jenkins triggered by GitHub webhooks. Jenkins was configured to clone the GitHub repository, build Docker images for the application, push these images to Docker Hub, and perform Kubernetes rolling updates to enable seamless zero-downtime deployments. (Technologies: GitHub, Jenkins, Docker, Kubernetes).",
        "Managed cloud infrastructure deployment and configuration using Terraform and Ansible, ensuring the infrastructure was scalable and reliable to support mission-critical airline management operations. (Technologies: Terraform, Ansible).",
        " Designed and implemented the deployment infrastructure for a flight management web application used by an airline company, streamlining the entire deployment process, reducing manual effort and deployment time by 85%, and ensuring high availability for the critical system. (Technologies: Python, HTML, CSS, JavaScript, MySQL)"
    ],
    code: "https://github.com/ashutoshshelar"
  },
  {
    title: " Serverless 3-Tier Student Data Aggregator using AWS (Lambda, API Gateway, DynamoDB, S3)",
    tech: "Ec2, AWS Lambda, API Gateway, DynamoDB, and S3",
    desc: ["Developed a serverless 3-tier web application using AWS Lambda, API Gateway, DynamoDB, and S3 to efficiently store and retrieve student data. The application utilizes Amazon DynamoDB as a NoSQL database with student_id as partition key, ensuring optimized data retrieval. Implemented two AWS Lambda functions in Python 3.12 getStudent to fetch student records and createStudent to insert new data both secured with IAM roles that grant controlled access to DynamoDB.",
        "Deployed REST API using API Gateway, which provide secure access to Lambda functions through GET and POST methods. Configured CORS policies to allow seamless communication between frontend and backend, enhancing cross-origin security. The frontend, developed in HTML and JavaScript, is hosted on Amazon S3 with public access and static website hosting enabled, allowing users to interact with application through a web interface.",
        " Implemented S3 bucket policies and ACLs to enforce security best practices while ensuring accessibility.Implemented S3 bucket policies and ACLs to enforce security best practices while ensuring accessibility.)"
    ],
    code: "https://github.com/ashutoshshelar"
  }
];

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div>
      {projects.map(project => (
        <div key={project.title}>
          <h3>{project.title}</h3>
          <p>
            <strong>Tech:</strong> {project.tech}
        </p>
        <strong>Description</strong>
          <div>
            <ul>
            <li>{project.desc[0]}</li>
            <li>{project.desc[1]}</li>
            <li>{project.desc[2]}</li>
            </ul>
        </div>
        <a href={project.code} target='blank'>Source Code</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
