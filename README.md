[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/S4QFH1ZW)
# Challenge 4 - Travel Info Challenge

```ascii

-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----
           . _..::__:  ,-"-"._        |7       ,     _,.__
   _.____ _<_>`!(._`.`-.    /         _._`_ ,_/  '  '-._.---.-.__
>.{     " " `-==,',._\{  \  / {)      / _ ">_,-'`                mt-2_
  \_.:--.       `._ )`^-. "'       , [_/(                       __,/-'
 '"'     \         "    _L        oD_,--'                )     /. (|
          |           ,'          _)_.\\._<> 6              _,' /  '
          `.         /           [_/_'` `"(                <'}  )
           \\    .-. )           /`-'"..' `:.#          _)  '
    `        \  (  `(           /`:\  > \  ,-^.  /' '
              `._,   ""         |           \`'   \|   ?_)  {\
                 `=.---.`._._       ,'     "`|' ,- '..
                   |    `-._         |     /          `:`<_|h--._
                   (        >        .     | ,          `=.__.`-'\
                    `.     /         |     |{|              ,-.,\     .
                     |   ,'           \   /`'            ,"     \
                     |  /              |_'                |  __  /
                     | |                                  '-'  `-'   \.
                     |/                                         "    /
                     \.                                             '

                      ,/            ______._.--._ _..---.---------._
     ,-----"-..?----_/ )      __,-'"             "                  (
-.._(                  `-----'`-
-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----
Map (C) 1998 Matthew Thomas. 
```

## Introduction

In this repo you will find the code developed to meet the 4th challenge on the Digital Futures Software Enginneering Program, the creation of a front end of a Travel Information Website.

This challenge is complimentary to the work completed for Challenge 5, a back end REST API which supplied data from a weather forecast service and gave the user the ability to store favourites.
The repo for this can be found [here](https://github.com/IanGarraway/Challenge-5---Weather-application-Back-End).

### The Challenge Tasks

1. From the requirements listed ([See original Readme for full requirements](Challenge%204%20README.md)), devise a set of user stories that describe the functionality that the client has requested
2. From the wireframes and the user stories, devise a component hierarchy that will help in the construction of the web application and explain your reasoning for this hierarchy
   - When you have made your static application, add your "state" planning indicating why you have chosen to hold state in that specific component
   - Answering the 3 state questions here would help!
3. Create the application using the "Thinking in React" strategy and creating tests for any logic that will affect the user's experience
4. Once you have completed your application, write a document that makes suggestions for further development of the application, including any potential integration with other DFCorp applications and external APIs:
   - This should include a description of the potential benefits of these integrations or additional APIs, how they could be implemented and the potential risks of these integrations

Ensure that the application that you submit will run in the development environment (using `npm run dev` command).

The full instructions can be found in the original project readme.md [here.](Challenge%204%20README.md)

---

## The Work

1. [User Stories](./docs/userStories.md)
2. [Component hierarchy and justification](./docs/component-justification.md)
3. The code developed to meet the requirements can be found in the src folder, the tests can found in a subfolder of the src folder.
4. [Further Development](./docs/further%20development.md)

---

## The approach

A single Miro Board was used to plan out the work for both this and Challenge 5.

The project was managed using a Agile approach, the requirements were broken down into user stories, which were then prioritised and worked through in order.

The primary driving force behind a number of my design choices largely came down to my experience, this is one of my 1st projects created in react, the very 1st which wasn't following a tutorial or working with someone with prior experience of it.

I largely tried to apply a test driven development approach to the code, however found that rather than automatic testing of each page, this came more in the form of having the site being displayed on my second monitor to ensure it looked how I intended. Once I had this in place I then created integration tests to ensure the requests for data were being correctly sent and the responses being appropriately handled. Since the weather data requests weren't to be restricted behind the user login, I started with the home page and the weather report pages, slicing the project, once I had that working, I then worked on the back end to get that data being sent to the front end on request. This process was then repeated for each other feature.

### Imported Libraries

#### React Bootstrap

The choice to use React Bootstrap largely lies in that it was introduced as part of the course and I was confident it would assist me in producing the site that met the requirements.

#### Axios

Axios was used to facilitate the communication between the front end and the backend, in previous projects it had made the process of creating the REST requests relatively easy.

#### React-cookie

In researching how to use JWT tokens, it became apparent the best approach was to store it in a http only token, this meant that I couldn't use that cookie to store that the user was logged in. React-cookie seemed like it would meet my needs for creating and accessing a cookie locally to store the user's data, so I could track if someone was logged in or not. This tied in easily with the react components and allowed me to check if the user was logged in or not on a reload of the page.

#### Formik and Yup

While researching how to use React-bootstrap to make my user creation form, it was suggested by the page on forms to combine them with Formik and Yup to simplify the verification of these imputs. Yup allows you to create a schema of what the data should look like which integrates with Formik which verifies if it is acceptable or not and is able to inform the user of any failures.

### Testing

The core of my testing is built on Vitest. This was combined with Testing Library to mock a user using the site, and Jest to mock axios. This allowed me to verify if axios was sending the correct requests, based upon what data was being entered and also then displaying the data being received was correct.