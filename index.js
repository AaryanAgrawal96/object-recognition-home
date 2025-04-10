import React from "react";
import './index.css';

export default function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <h1>Object Recognition</h1>

        <p>
          <strong></strong><br /> {/* Removed "Description" */}
          Recognizing objects in natural scenes has numerous applications. In this project, our goal is to compare the ML techniques for object recognition task.
        </p>

        <div>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project Interface (Link TBD)
          </a>
          <a
            href="https://github.com/Sidharth8100/Object_detection_PRML.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Video Demonstration (Link TBD)
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project Report (Link TBD)
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Minutes of Project Meetings (Link TBD)
          </a>
          <a
            href="https://www.cs.toronto.edu/~kriz/cifar.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dataset (CIFAR-10)
          </a>
        </div>

        <div className="credits" style={{ lineHeight: '1.5', textAlign: 'center' }}>
          <p className="font-bold">Team:</p>
          <p>Aaryan Agrawal</p>
          <p>Kanishk Singh Dayma</p>
          <p>Sidharth Bhagat</p>
          <p>Mayank Dahiya</p>
          <p>Devansh Saini</p>
          <p>Dhanush Kumar</p>
        </div>
      </div>
    </div>
  );
}