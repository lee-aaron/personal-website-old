import React from 'react';
import "./Projects.scss";

function Projects() {
  return (
    <main className="projects">
      <section className="intro">
        <p>
          Below are a list of projects I've had experience with. Some of them link to my GitHub and some are active projects where
          you can play around with them! If you hover over them they should indicate a clickable link.
        </p>
      </section>
      <section className="description">
        <article>
          <h4>Personal Website</h4>
          <p>
            This personal website is powered by React in the front end! I'm currently looking into expanding the scalability of this
            website by applying the microfrontend concept. My goal is to allow a plug and play environment of different front end applications.
            This allows developers to work on various projects without having to synchronize often for a single build.
          </p>
        </article>
        <article>
          <h4>chatty</h4>
          <p>
            I want to gain exposure to cloud infrastructure and engineering. This app is simply a chat room where you can interact with friends.
            I use React on the front end and have Kubernetes on the backend to host multiple services. I use Kafka for streaming messages and a Redis
            database to store users and messages.
          </p>
        </article>
        <article>
          <h4>Cryptocurrency / Blockchain</h4>
          <p>
            On the side, I run a trading bot on cryptocurrencies. I run it on a Contabo VPS and used nginx to help manage an interface to tuning 
            the bot. I also am learning about the Svelte framework and am trying it out to visualize a blockchain's network.
          </p>
        </article>
        <article>
          <h4>totalreturn.cc</h4>
          <p>
            This is a finance app powered by React, Redux, Node.js, and AWS. I intended to create a project that helps
            investors visualize a stock chart with dividend adjusted returns using recharts which is based upon D3.js. This project is no
            longer active.
          </p>
        </article>
        <article>
          <h4>honyomi</h4>
          <p>
            This is a Manga reader app for iOS. I built this using React Native and Redux. There is an equivalent app for Android called
            Tachiyomi but manga readers for iOS don't have one due to being unable to load APKs. As I was developing, I found that the websites
            serving the manga pages used Cloudflare to mitigate DDOS attacks but I'm unable to find a workaround so far. I will try to pick up
            this project again in the future if I can research more into OkHttp.
          </p>
        </article>
        <article>
          <h4>CSE 124 - Networked Services</h4>
          <p>
            In this course, I learned how to utilize golang for client / server interaction. I studied various networking concepts such as TCP/UDP
            and the network layers. I also used Docker in the course assignments to maintain environment control when working with my group partners.
          </p>
        </article>
        <article>
          <h4>Personal Best</h4>
          <p>
            This is an Android app created for a Software Engineering class (CSE 110). I learned about the agile software process, unit testing,
            and various industry practices. This really taught me a lot about how engineers work and are able to function in a massive company.
            I'm also grateful for my group mates to help teach me skills as I'm not too familiar with Android. We used Firebase and Google Cloud Platform
            to host our services.
          </p>
        </article>
        <article>
          <h4>intern.demand</h4>
          <p>
            This is a full stack application developed at SD Hacks to help make job tracking easier. It's conceptually similar to an excel sheet but 
            we made our application more UI friendly and navigateable. We used React, Node, Express, Firebase, and Google Cloud Platform.
          </p>
        </article>
        <article>
          <h4>Anime Recommender</h4>
          <p>
            I am also interested in machine learning so I had wanted to explore how to use machine learning to generate a recommendation to users
            based on previously watched shows. I used React in the front end and Flask with python in the back end. I also used Google Cloud Platform and 
            Amazon Web Services for this small project.
          </p>
        </article>
      </section>
    </main>
  )
}

export default Projects;