<h1 align='center'>My Doctor Appointment</h1><br/>

## Table of Contents

- [Introduction](#introduction)
- [Requirements](#requirements)
- [Usage](#usage-for-development)
- [Potential Improvement](#potential-improvement)
- [Production Consideration](#production-consideration)
- [Assumptions & Opinion](#assumptions-and-opinion)
- [Screenshots](#screenshots)

## Introduction

My Doctor Appointment is a web application for patients to schedule appointments with doctors.
<br/>
<br/>

## Requirements

- [`ReactJS`](https://reactjs.org/)
  <br/> React Js is javascript library for building interfaces based on UI components.
- [`axios`](https://axios-http.com/)
  <br/> Axios is a promise-based HTTP Client for Javascript, here we use axios for handling API fetching.
- [`tailwind`](https://tailwindcss.com/)
  <br/> Tailwind is CSS framwework, this package help us to don't have to write custom css to style our application, it may looks ugly at first but this really easy to use and helpful if we have to write custom css.
- [`UUID`](https://github.com/uuidjs/uuid)
  <br/> We use the UUID package here to generate a unique id that we use every time we create a new booking appointment since the API requires an id.
  <br/>
  <br/>

## Usage for development

1. Open your terminal or command prompt
2. Type `git clone https://github.com/Ocraniawan/Ocraniawan_Patattan_Frontend_Engineer_Technical_Assessment.git`
3. Open the folder and type `npm install` or `yarn install` for install dependencies
4. Create .env file in root folder.
5. Add URL API and KEY API into .env file (example : see .env.sample file).
6. Type `npm start` or `yarn dev` in terminal for run this app.
   <br/>
   <br/>

## Potential Improvement

Since recommend to spending no more than 8 hours for this assignment, there are 3 big point that still can be improved :

1. <b>UI/UX</b>, the UI and UX in this website is still need to improve (need more time to think the design).
2. <b>Form Booking</b>, the form booking still need to improve especially when select booking time.
3. <b>Code Quality</b>, the code for a few component still can be split into small component to become reusable component.
   <br/>
   <br/>

## Production Consideration

When deploying the application to production environment make sure to add environment variable, for list environtment variable, you can see the `.env.sample` file, and for the rest is just the same as deployment for react js in general.
<br/>
<br/>

## Assumptions and Opinion

While integrate with API that provided :

1. When we create new appointment (POST :/booking), we need to send id, it would be better if id is created from backend to avoid using the existing id, since id must be unique.
2. When we get data list appointment/booking (GET :/booking), it would be better if in response data contains doctor_name not just doctor_id, so if we have to display doctor name, frontend don't need to hit 2 apis to get doctor name.
3. Considering the booking and doctor data that can be a lot, it's better if we use pagination to avoid loading time while fetching data, but since this is just a sample API then it still does not really affect the performances.
   <br/>
   <br/>

## Screenshots

### Home Page

<div>Home Page contain benefit of this web application also contain list doctors.</div>
<p align="left">
<img width="677" alt="image" src="https://user-images.githubusercontent.com/52120429/200347307-48bc7d3e-afd2-4ee8-ba66-eb56cad050ef.png">
</p>
<br/>

### Details Doctor Page

<div>Details Doctor Page contain detail information of doctor selected such as address and opening hours, here also you can directly book an appointment with this doctor, make sure to select available time and date of the doctor.</div>
<p align="left">
<img width="680" alt="image" src="https://user-images.githubusercontent.com/52120429/200348326-64aef9d1-c254-4ab0-ba51-4e595342141f.png">
</p>
<br/>

### My Booking Page

<div>My Booking Page contain all the booking appointment that we have made, in this page also we can change our appointment (cancel or re-book) but only for upcoming appointment.</div>
<p align="left">
<img width="680" alt="image" src="https://user-images.githubusercontent.com/52120429/200349159-c3ce3d74-0f2f-41ab-941c-0fc9400a5e5c.png">
</p>
