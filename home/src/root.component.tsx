import React from "react";
import ServiceNow from './logos/servicenow.svg';
import EverydayRobot from './logos/everyday_robot.svg';
import MemVerge from './logos/memVerge.png';
import DigitalOcean from './logos/DO_Logo_Vertical_Blue.png';
import "./Home.scss";

export default function Root(props: any) {
  return (
    <main className="home">
      <section className="intro">
        <p>
          Welcome to my personal website! Here you can find various projects I'm
          working <br></br> on in the projects tab above and also check out my
          resume too!
        </p>
        <p>
          My name is Aaron Lee and I have a B.S. in Computer Science from UCSD
          '21. I will be pursuing my M.S. in Computer Systems and be expected to
          graduate in '22.
        </p>
      </section>
      <section className="highlights">
        <h4>Experience Highlights</h4>
        <div className="description">
          <article>
            <h4>Digital Ocean</h4>
            <img width="100" src={DigitalOcean} alt="Digital Ocean Logo" />
            <p>
              I interned at this company in Summer 2021. I primarily worked on the development of the internal admin dashboard for 
              the Container Registry product to help engineers identify possible issues in customer cases. I learned how to use Docker,
              Kubernetes, and golang during this internship.
            </p>
          </article>
          <article>
            <h4>The Everyday Robot Project</h4>
            <img
              width="50"
              src={EverydayRobot}
              alt="Everyday Robot Project logo"
            />
            <p>
              I interned at this company under X and Google in Summer 2020. I
              prototyped a VR application for the Oculus VR headset. This
              prototype helped visualize future features that other engineers
              could use in their workflow for replaying robot logs.
            </p>
          </article>
          <article>
            <h4>ServiceNow</h4>
            <img width="200" src={ServiceNow} alt="ServiceNow logo" />
            <p>
              I interned at this company in Summer 2019 and worked part time
              from Fall 2019 to Summer 2020. I developed an automated
              performance tool on the platform to measure product performance
              and it also helped improve the workflow for over 100 engineers.
            </p>
          </article>
          <article>
            <h4>MemVerge</h4>
            <img width="200" src={MemVerge} alt="MemVerge logo" />
            <p>
              I interned in Summer 2018 where I developed a Java performance
              test measuring the efficiency of the company's product on industry
              grade servers. This also was used to explain to clients such as
              LinkedIn and Intel the improved speeds and savings with the
              company's product.
            </p>
          </article>
          <article>
            <h4>GitHub</h4>
            <p>
              In my free time, I like to explore new technologies and use small
              repositories to test them and understand how they work. The
              concept of microservices really stood out to me and I'm currently
              exploring ways to utilize them in my career. Feel free to check
              out the projects page to see what I'm up to!
            </p>
          </article>
        </div>
      </section>
      <section className="about me">
        <h4>Short Summary About Me</h4>
        <p>
          I'm really passionate about new and upcoming technology. My passions
          include but are not limited to:
        </p>
        <ul>
          <li>Bitcoin and the blockchain network</li>
          <li>Drawing</li>
          <li>Cloud Infrastructure / DevOps</li>
          <li>Microservices / Kubernetes</li>
          <li>Software Engineering</li>
          <li>VR/AR</li>
          <li>Anime</li>
        </ul>
        <p>
          I just find that these technologies are revolutionary and can really
          change the way we approach issues. I really like studying
          microservices because you can understand how large companies such as
          Apple and Google scale their services to massive number of daily
          users.
        </p>
      </section>
      <section className="cousework">
        <h4>Coursework</h4>
        <p>Here's a list of coursework I've taken at UCSD</p>
        <h4>Undergraduate Courses</h4>
        <ul>
          <li>CSE 100 - Advanced Data Structures</li>
          <li>CSE 101 - Design &amp; Analysis of Algorithms</li>
          <li>CSE 110 - Software Engineering</li>
          <li>CSE 120 - Operating Systems</li>
          <li>CSE 124 - Networked Services</li>
          <li>CSE 127 - Intro to Computer Security</li>
          <li>CSE 130 - Programming Languages &amp; Paradigms</li>
          <li>CSE 132A - Database Principles</li>
          <li>CSE 132C - Database Implementation</li>
          <li>CSE 134B - Web Client Languages</li>
          <li>
            CSE 140/140L - Components &amp; Design Techniques for Digital
            Systems
          </li>
          <li>CSE 141/141L - Intro to Comp. Architecture</li>
          <li>CSE 150B - Intro to AI: Search and Reasoning</li>
          <li>CSE 151A - Intro to AI: Statistical Approaches</li>
          <li>CSE 151B - Deep Learning</li>
          <li>CSE 152 - Computer Vision</li>
          <li>CSE 158 - Recommender Systems &amp; Web Mining</li>
        </ul>
        <h4>Graduate Courses</h4>
        <ul>
          <li>CSE 202 - Algorithm Design &amp; Analysis</li>
          <li>CSE 221 - Operating Systems</li>
          <li>CSE 257 - Search and Optimization</li>
        </ul>
      </section>
    </main>
  );
}
