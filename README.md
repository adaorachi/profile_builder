## PROFILE BUILDER APP - ProfileBuilder.io

This is a Profile Builder application build using [React](https://reactjs.org/) for the front-end processes and [IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) for storing data. 

To answer the required questions:

1. What was your approach for this project? Did it change as you developed the app further?
- My approach for this project at the start was to create a two-pages application; the "view profile" and "edit profile" pages, following the instructions as stated in the provided documents. To use the localStorage as a means to store data.
- My approach as I developed the app further changed slightly. Since, the project is an application, I decided to add extra feaatures such as as Authentication and Authorisation features. I created a Login and Register Pages where users can be authenticated in order to use the application. Secondly, I used the [IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) and the Dexie Package to store data. This is because IndexedDB provides a richer and effective way of storing data and also comes with data query features. Thirdly, I made the app responsive, i.e optimised to be functional and aesthetically pleasing on devices of different sizes.

2. What were the challenges you faced?
- The following were the challenges I faced - getting familiar with the IndexedDB queries and how best to implement them. 

3. How differently will you do if you had a couple of more days to complete the assignment? What if you have one full month?
- If I were given more days, I would like to use and implement TypeScript for this project in order to make it more robust and for better scaling. Secondly, to implement and add some tests using JEST.


## Table of Contents

* [Built With](#built-with)
* [Live Preview](#live-preview)
* [Required Installations](#required-installations)
* [Instalation of This App](#instalation)
* [License](#license)
* [Authors](#authors)
* [Acknowledgements](#acknowledgements)


### Built With

*   React
*   CSS
*   IndexedDB
*   Webpack

<!-- LIVE PREVIEW -->
## Live Preview

This is the link to the live preview. Feel free to visit.<br>

Live version of the project: [Profile Builder App](https://profilebuilder.netlify.app/)<br>


<!-- REQUIRED INSTALLATION -->
## Required Installations

<p>If you want a copy of this project running on your machine you have to install:</p>

* <a href="https://nodejs.org/en/">Node.js (v5. 2.0 or greater)</a>

<!-- INSTALLATION -->
## Installation of This App

Once you have installed the required package shown on the [Required Installations](#required-installations), proceed with the following steps

Clone the Repository,

```Shell
your@pc:~$ git clone https://github.com/adaorachi/profile_builder
```

Move into the downloaded folder

```Shell
your@pc:~$ cd profile_builder
```

Get the dependencies needed for the app

```Shell
your@pc:~$ npm install
```

Start the server and use the app

```Shell
your@pc:~$ npm start
```

The App navigates to the Login Page

```Shell
Log into the app with your login details if you are an existing user or Register with your details if you are a new user.
```

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


<!-- CONTACT -->
## Author

 MaryAnn Chukwuka
 - Github: [@adaorachi](https://github.com/adaorachi)
 - Linkedin: [MaryAnn Chukwuka](https://www.linkedin.com/in/adaorachi/)

