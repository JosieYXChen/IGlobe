# IGlobe

## Introduction

IGlobe is a website for users to visualize their life journey by marking all the places they have lived or traveled to on a 3-Dimentional globe.

## Deployed Website

`https://iglobe-cc8df.web.app/`

## Getting started

1. Forb and clone this repo (`https://github.com/JosieYXChen/iglobe.git`). Default branch is named master.
2. Run `npm install`.
3. Start the build process with:`npm run build` and start your application with: `npm run start`. You can also run `npm run dev-start` to start both the build process and application.
4. If you navigate to [localhost:3000](http://localhost:3000), you should see the home page.
5. Another option to start your application is to run `firebase serve`.Yous should see the home page at [localhost:5000](http://localhost:5000).

## How to use IGlobe

1. From the home page, you can start mapping your journey directly by clicking `Start` as a guest. Or you can click `Log In` as a user.
2. If you are a new user, after creating an account, you will be navigated back to the home page. Then click `Log In` if you wish to start as a user.
3. Once you enter the app page, you will see a form consisting of a search bar, two date input areas, and a submit button. You can search and select a place you have been to at the search bar. Then you indicate how long you were at the place by choosing the starting date and ending date.
4. Once you submit the place with the starting and ending dates, a mark of that place will appear on the globe
5. If you are a logged-in user, you will see an additional `sign out` button. You can click this button to sign out.
6. Have fun!

## Features under Development and erros to fix

1. IGlobe runs on all devices, but has the most stable performance on a computer. I am still improving the performace of IGlobe on other devices
2. IGlobe will have the functionality to allow users to delete the markers.
3. An arch will appear between two places that are temporally connected to each other.
4. IGlobe will have the functionality to allow users to choose their own colors for each marker;
