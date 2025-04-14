import React, { useState, useEffect } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("light-mode", !darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container ${darkMode ? "dark" : "light"}`}>
      <header className="top-nav">
        <div className="logo">PRML Project</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#abstract">Abstract</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#acknowledgements">Acknowledgments</a></li>
          </ul>
        </nav>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      <div id="home" className="wrapper">
        <h1>Object Recognition</h1>

        <p>
          Object detection is a fundamental task in computer vision that involves identifying and classifying objects within images. Our project aims to implement and compare various machine learning techniques to achieve accurate object detection on the CIFAR-10 dataset.
        </p>

        <div className="links">
          <a
            href="https://cnn-interface.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Project Interface
          </a>
          <a
            href="https://github.com/Sidharth8100/Object_detection_PRML.git"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            GitHub Repo
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Video Demonstration (Coming Soon)
          </a>
          <a
            href="https://docs.google.com/document/d/18NsCVcM5VKOOG5T56j-vM39Ycihdg4v51u-hH5R3YAo/edit?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Project Report
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Minutes of Project Meetings (Coming Soon)
          </a>
          <a
            href="https://www.cs.toronto.edu/~kriz/cifar.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Dataset (CIFAR-10)
          </a>
        </div>
      </div>

      <div id="abstract" className="abstract-section">
        <h2>Abstract</h2>
        <p>
          Our project explores various machine learning methods, including PCA, Decision trees, Gaussian Naive Bayes, Gaussian Mixture Model, SVM with RBF kernel, KNN, Linear Regression, DBScan, K Means, Logistic Regression, ANN to achieve accurate object recognition on the CIFAR-10 dataset. The CIFAR-10 dataset is a widely used benchmark dataset in the field of computer vision and machine learning. It consists of 60,000 32x32 color images in 10 classes, with 6,000 images per class. The classes are mutually exclusive and include objects such as airplanes, automobiles, birds, cats, deer, dogs, frogs, horses, ships, and trucks. The dataset is split into 50,000 training images and 10,000 test images, making it suitable for training and evaluating machine learning models for object recognition tasks, accuracy scores for each method on the test set.
        </p>
      </div>

      <div id="team" className="wrapper">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="src\assets\images\aaryan.jpg" alt="Aaryan Agrawal" />
            <p>Aaryan Agrawal</p>
          </div>
          <div className="team-member">
            <img src="src/assets/images/devansh.jpg" alt="Devansh Saini" />
            <p>Devansh Saini</p>
          </div>
          <div className="team-member">
            <img src="/images/dhanush.jpg" alt="Dhanush Kumar" />
            <p>Dhanush Kumar</p>
          </div>
          <div className="team-member">
            <img src="/images/kanishk.jpg" alt="Kanishk Singh Dayma" />
            <p>Kanishk Singh Dayma</p>
          </div>
          <div className="team-member">
            <img src="/images/mayank.jpg" alt="Mayank Dahiya" />
            <p>Mayank Dahiya</p>
          </div>
          <div className="team-member">
            <img src="/images/sidharth.jpg" alt="Sidharth Bhagat" />
            <p>Sidharth Bhagat</p>
          </div>
        </div>
      </div>

      <div id="acknowledgements" className="wrapper">
        <h2>Acknowledgements</h2>
        <p>
          This project was undertaken as part of the CSL2050 course at IIT Jodhpur by a team of machine learning enthusiasts, under the valuable guidance of Dr. Anand Mishra.
        </p>
      </div>
    </div>
  );
}
