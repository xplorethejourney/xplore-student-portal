# Xplore - Discover, Attend, or Launch Your Own Events

Xplore Minimum Viable Product(MVP) is made on firebase PaaS. 

## What is 🔥 Firebase?  

Firebase is a backend platform by Google that helps developers build web and mobile apps faster.

It includes services like:

- Firestore / Realtime Database (databases)
- Authentication
- Hosting
- Cloud Functions
- Storage
- Analytics, etc.

You usually access Firebase through the [Firebase Console](https://console.firebase.google.com/), SDKs, or CLI (firebase-tools).

## Why firebase for Xplore?

Xplore is in its very initial stages of development, using firebase helps not only in quick development but also help nullify the infrastructure cost. This is useful because Xplore can quickly iterate and improve based on feedback from its audience.

> Important: LDAP sign-in is not supported natively in firebase, however email based login system will be used initially and replaced with LDAP in the near future.  

## MERN vs Firebase

| Feature                   | Firebase App                | MERN Stack App                                      |
| ------------------------- | --------------------------- | --------------------------------------------------- |
| Backend                   | Firebase (managed)          | Node.js + Express (custom)                          |
| Database                  | Firestore / Realtime DB     | MongoDB                                             |
| Frontend                  | React or any JS framework   | React                                               |
| Hosting                   | Firebase Hosting (optional) | Self-host or use services like Vercel, Heroku, etc. |
| Authentication, Analytics | Built into Firebase         | You have to integrate manually                      |


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









