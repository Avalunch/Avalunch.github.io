<div class="ui labeled button" tabindex="0">
  <div class="ui blue button">
    <i class="github alternate icon"></i>
  </div>
  <a class="ui basic red left pointing label" href="https://github.com/avalunch">
    View Repository
  </a>
</div>

## [Table of Contents](#table-of-contents)<a name="table-of-contents"></a>
- [About Avalunch](#about-avalunch)
- [Application Design](#application-design)
  - [Directory Structure](#directory-structure)
  - [Import Conventions](#import-conventions)
  - [Data Model](#data-model)
  - [CSS](#css)
  - [Routing](#routing)
  - [Authentication](#authentication)
  - [Configuration](#configuration)
  - [Quality Assurance](#quality-assurance)
    - [ESLint](#eslint)
- [Development History](#history)
  - [Milestone 1: Mockup Development](#milestone1)
- [Coming Soon<sup>TM</sup>](#soon)

<hr>

## [About Avalunch](#about-avalunch)<a name="about-avalunch"></a>


Avalunch is the brain-child of ICS 314 classmates, Anh Lam [@anhlam](https://github.com/anhlam), Edmund Ho [@sorazodia](https://github.com/sorazodia), and Clark DeNunzio [@unjammy](https://github.com/unjammy).
Our software aims to become the visual solution to the problem of contemplating meal decisions during students precious lunch breaks.
At first glace, our application will provide the following landing page to explain our product.

<img class="ui centered medium image" src="/images/landingpage.png">

Anyone with a UH Username and Password may sign into our app, as this app will be using the UH CAS authentication API.
The next following page will accept user credentials and allow access to the following screens.

<img class="ui centered medium image" src="/images/login.png">

The user will then gain access to start a generic, user-independent search of the current listing inside the app database.

<img class="ui centered medium image" src="/images/search.png">

This app was designed to be customized by the user to create a dynamic, exciting experience. In addition to generic searches, the user will also be allocated a preferences and admin configuration for generating automated recommendations.

<img class="ui centered medium image" src="/images/profile.png">
<img class="ui centered medium image" src="/images/admin.png">

Once fully configured, the app will begin to generate user-dependent listings of relevant food items based on style, price, and location.

<img class="ui centered medium image" src="/images/user1.png">
<img class="ui centered medium image" src="/images/user2.png">

<hr>

## [Application Design](#application-design)<a name="application-design"></a>
### [Directory Structure](#directory-structure)<a name="directory-structure"></a>


This project is based off of the UH ICS Deparment's [Meteor Application Template](http://ics-software-engineering.github.io/meteor-application-template/) and likewise we will be using a similar directory structure. We feel this choice will allow us to perform more agile development as all team members already have a working knowledge of hacking the aforementioned template.

Our directory structure will organize the meteor application into a directory called ```/app``` and within, all of the dependencies for the project will be located, as well as, the source code for our later sections of the [Application Design](#application-design).

### [Import Conventions](#import-conventions)<a name="import-conventions"></a>


Our project will be making extensive use of the following technologies including Meteor, and those that are natively bundled with Meteor.

* Meteor
* Blaze Template Engine
* MongoDB

As such, our source code will make extensive use of imports from these libraries.

### [Data Model](#data-model)<a name="data-model"></a>


Our goal is to follow a similar data model of [Techfolios](http://techfolios.github.io/). As an out-of-the-box feature, we intend to include a checkbox style ```Preferences``` page and ```Admin``` page. Using these forms, event handlers will control a JSON object with a UUID, which can then be referenced against when performing Map-Reduces against our item database.

The data model will include two ```Collections``` that will be used to create the dynamic experience of this application. One collection named ```Users``` will contain objects with keys of true or false values for ```Preferences``` offered inside the application. This will then be used to query a second collection named ```Items``` which will contain objects of keys of properties about food items in the school-wide menu.

By using a data-first model, our team is believed to gain a factor toward a more enjoyable, and agile development experience.

### [CSS](#css)<a name="css"></a>


As mentioned before, it was agreed that using the [Meteor Application Template](http://ics-software-engineering.github.io/meteor-application-template/) would allow more agile development, therefore the choice was made to continue using the templates built-in Semantic UI functionality.

Let it be noticed that extensive use of the ```ui container``` class and ```ui image``` class will be throughout this app to exploit the spacing characteristics of Semantic UI. By avoiding to hard-code the UI layout, our team is believed to have an edge in agile development.

### [Routing](#routing)<a name="routing"></a>


As mentioned, in the [Import Conventions](#import-conventions) segment, Blaze router was chosen to inject HTML templates into our Meteor application. This is a built-in functionality of Meteor, thereby using Blaze, our team gains an edge toward agile development as no additional software is needed for our stack. 

### [Authentication](#authentication)<a name="authentication"></a>


Configured with the official Meteor Application Template is an authentication script for the UH Manoa CAS, which handles the University-wide login adminstration. This application will access UH CAS via API calls and authenticate users as valid logins.

### [Configuration](#configuration)<a name="configuration"></a>
The repository contains one file: config/settings.development.json.

The .gitignore file prevents a file named settings.production.json from being committed to the repository. So, if you are deploying the application, you can put settings in a file named settings.production.json and it will not be committed.



### [Quality Assurance](#quality-assurance)<a name="quality-assurance"></a>

#### [ESLint](#eslint)<a name="eslint"></a>


By choosing the UH Manoa Meteor Application Template, the option to use ESLint to debug our code was included out-of-the-box. Our source code includes a ```.eslint``` and ```.eslintrc``` file included in it's top level directory. These files when configured correctly, allowed our team to comply with the AirBNB Javascript standards out-of-the-box, thus giving yet another edge in agile development

<hr>

## [Development History](#history)<a name="history"></a>

### [Milestone 1: Mockup Development](#milestone1)<a name="milestone1"></a>

<hr>

## [Coming Soon<sup>TM</sup>](#soon)<a name="soon"></a>

### Milestone 2: Data Model Development


More exciting features are on it's way, please reference our [Data Model](#data-model) segment to see the current plans for this milestone! Stay tuned, as this is a learning experience, and may change over time. Please pay attention to our mistakes and how we have learned from them so you may have a more enjoyable and agile development experience in the future.
