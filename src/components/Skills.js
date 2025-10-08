import React from 'react';

const skills = [
    "Aws",
    "DevOps",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "CI/CD",
    "VPC",
    "Lambda",
    "CloudWatch",
    "Route 53",
    "Load Balancer",
    "Git",
    "GitHub",  
    "Ansible",
    "Terraform",
    "Prometheus",
    "Grafana",
    "Linux",
    "Monitoring",
    "Python",
    "React",
    "MySQL",
    "IAM",
    "CloudFormation",
    "Security Groups"
];

const Skills = () => (
    <section id="sk">
        <div>
            <h2>Skills</h2>
        </div>
        <div id='skills'>
            <ul>
                {skills.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
        </div>

    </section>
);

export default Skills;
