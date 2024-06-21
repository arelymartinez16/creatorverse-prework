# WEB103 Prework - *Creatorverse*

Submitted by: **Arely Martinez Garcia**

About this web app: **Creatorverse is a web application designed to manage and share your favorite content creators, such as Twitch streamers, YouTube channels, Instagram personalities, and TikTok accounts. The app supports CRUD (Create, Read, Update, Delete) operations, allowing users to add new creators, view their details, update their information, and remove them from the list. Each creator profile includes a name, a URL to their channel or page, a description, and an optional image URL. The app is built using React, ensuring a dynamic and responsive user experience, with use of PicoCSS for styling.**

Time spent: **5** hours

## Required Features

The following **required** functionality is completed:

<!-- 👉🏿👉🏿👉🏿 Make sure to check off completed functionality below -->
- [X] **A logical component structure in React is used to create the frontend of the app**
- [X] **At least five content creators are displayed on the homepage of the app**
- [X] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [X] **API calls use the async/await design pattern via Axios or fetch()**
- [X] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [X] **Each content creator has their own unique URL**
- [X] **The user can edit a content creator to change their name, url, or description**
- [X] **The user can delete a content creator**
- [X] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [X] Picocss is used to style HTML elements
- [X] The content creator items are displayed in a creative format, like cards instead of a list
- [X] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='./src/assets/video-walkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with LICEcap
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app or any additional context you'd like to add.

One challenge I faced was managing social media links. Storing multiple URLs for different social media platforms in a single field required the use of an array, which was different from my initial plan of using a simple varchar type in the database. On the frontend, extracting and displaying the correct URL for each platform involved writing additional logic. For example, I had to create functions to identify and format URLs correctly based on their domain (e.g., YouTube, Instagram, Twitter). Throughout the process, I realized I needed to format the YouTube URL differently from Instagram and Twitter because it needed the "@" to bring it to the correct creator. Fortunately, through these adjustments, the URLs were displayed on the website and were functioning correctly!

## License

Copyright [2024] [Arely Martinez Garcia]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.