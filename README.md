## SamplStak

---

![logoo](https://github.com/nicholasvaldez/samplstak-server/assets/102673642/77a9b578-1a7f-4e52-a4bc-2732feafcc0b)


### [Video Demo](https://www.loom.com/share/7ce29a209a524674a989752a16db0d98?sid=c94a1919-87d7-44ca-a290-4ca19fd0cfa9)

<b style="font-size: 20px;"><i>..explore the worlds best drumkit sample
library and unmatched marketplace.</i></b>

### Application Overview

Most modern music productions utilize audio samples to elevate and achieve their sonic goals for their project song. Whether it is a piano melody, or a drum break, or a sound clip of cars passing by on a busy road, producers "chop up" these audio files in their DAWS(digital audio workstations) to isolate specific parts (loops) to inspire the main riff of a song or layer sounds on top of each other for a unique "one-shot" sound. Drum samples specifically, are _very_ unique and are often _made_, _collected_, and _traded_ amongst producers in packs (zip files) called "drumkits."
**SamplStak** is a platform for users to browse samples created by others and to upload their very own samples to share.

## Technologies Used

![React](https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![GitHub](https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white)![HTML5](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white) ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) ![CSS3](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white) ![Git](https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/VSCode%20-%23007ACC.svg?&style=for-the-badge&logo=visual-studio-code&logoColor=white)

## Running This Application

### Installation

Along with this repository, you will need to clone the [SamplStak Server](https://github.com/nicholasvaldez/samplstak-server) repo, which contains the database and api endpoints.

1. Clone this repository and change to the directory in the terminal.

```sh
git clone git@github.com:nicholasvaldez/samplstak-client.git
cd samplstak-client
```

2. Access the data by following the instructions found here:

<a href="https://github.com/nicholasvaldez/samplstak-server" target="_blank"><img src="https://img.shields.io/badge/server repo%20-%2375120e.svg?&style=for-the-badge&&logoColor=white" alt="SamplStak Server Repo" style="height: auto !important; width: auto !important;" /></a>

3. Launch the client.

```sh
    npm install
    npm start
```

### User Stories

- User able to register for a new account on SamplStak
- An existing user able to login to SamplStak
- User able to listen to audio samples within the app
- Uesr able to filter samples while browsing samples
- User able to add samples to their personal collection
- User able to browse drumkits
- User able to upload their own samples and drumkits
- User able to have a dedictaed view that displays their uploaded samples and drumkits
- User able to edit and delete their uploaded samples and drumkits

### Features

- Samples
  - User able to differentiate the user who uploaded the sample by profile image next to sample play button
  - If the original user who uploaded a sample, also uploaded it to drumkit, the drumkit cover art will display next to the sample play button
- Drumkits
  - When user clicks on a drumkit card, they will be redirected to a drumkit detail view that shows all samples associated with that drumkit
  - User can filter all drumkits by genre
  - All samples within the drumkit, are samples of the drumkits genre
- Users' Uploads

  - User has a list of their uploaded samples at the My Sounds path
  - Plus sign is a button that routes user to add a sample form
  - "My Samples" header is a button that toggles the view to "My Drumkits" that displays the users drumkits
  - The same plus sign toggles the route to add a drumkit form when the view is switched

  ## User Experience

---

#### User Login

![](gifs/SS_Login.gif)

---

#### Browse Samples

![](gifs/SS_Browse.gif)

---

#### Add to Collection

![](gifs/SS_Collection.gif)

---

#### Browse Drumkits

![](gifs/SS_Drumkits.gif)

---

#### Create a Sample

![](gifs/SS_Sample_upload.gif)

---

#### Create a Drumkit

![](gifs/SS_Drumkit-upload.gif)

---

#### Create a Drumkit Sample

![](gifs/SS_Drumkit--sample.gif)

#### Demo User Credentials

<p>
Username: <i>Carrie1945</i>
<br>
Password: <i>me</i>

#### Nick Valdez

<a href="https://www.github.com/nicholasvaldez/" target="_blank"><img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white" alt="Nick Valdea GitHub" style="height: auto !important;width: auto !important;" /></a> <a href="https://www.linkedin.com/in/nicholasvaldez/" target="_blank"><img src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt="Nick Valdez LinkedIn" style="height: auto !important;width: auto !important;" /></a>
