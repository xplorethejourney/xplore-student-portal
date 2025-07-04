# Xplore - Discover, Attend, or Launch Your Own Events

Xplore Minimum Viable Product(MVP) is made for showcasing events inside one's own campus, or *nearby campuses* if they allow outside participation, for instance, inter-college hackathons. 

Xplore MVP allows students to see and register for events, and clubs to organise those events by providing a dashboard for both. The student dashboard contains the student details and is required to store the participation data and interest which shall be used to:
1. Suggest events to students
2. Suggest relevant members to clubs from the college campus
3. Allow clubs to promote their events without the hassle of posting on various social media platforms and groups

> NOTE: Xplore MVP v0.1 is still in development and focuses on making the bare skeleton for the feature mentioned above. Which means the LDAP auth will be implemented, the Dashboard's data shall be stored in database. Just two features. 

# Why MERN Stack?

Mern Stands for MongoDB, Express, React, Node.js. If you are new to any of these we highly suggest checking out their official documentation. Xplore MVP will be built using MERN stack.

> Initially Xplore decided to use firebase as a backend. However, firebase is not a good fit for this project. The primary reason for this is that firebase does not support LDAP auth out of the box so Xplore had to do it anyways, therefore we decided to not proprietary technologies all together. Note that Xplore itself is not open source yet.  


## MERN vs Firebase

| Feature                   | Firebase App                | MERN Stack App                                      |
| ------------------------- | --------------------------- | --------------------------------------------------- |
| Backend                   | Firebase (managed)          | Node.js + Express (custom)                          |
| Database                  | Firestore / Realtime DB     | MongoDB                                             |
| Frontend                  | React or any JS framework   | React                                               |
| Hosting                   | Firebase Hosting (optional) | Self-host or use services like Vercel, Heroku, etc. |
| Authentication, Analytics | Built into Firebase         | Xplore shall implement manually                      |


## Features

The Xplore MVP will contain the following features:

- Authentication (Using LDAP)
- Role Based Access (Student/Club)
- Student Dashboard
- Club Dashboard  

### Near Future Features (in v0.2 hopefully)  

- Timeline for Events
- Dedicated Event page for Each event
- Generate Event Tickets  

> For any inspiration on this project(Xplore) look at [software carpentry website](https://software-carpentry.org/workshops/workshops-upcoming/) or 
go to [www.software-carpentry.org](https://software-carpentry.org].  









