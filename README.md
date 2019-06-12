
# CoderSchool FTW - *Wall-e App*

Created with :blue_heart: by <a href="https://github.com/albertanguyen">Anh</a>

## Description

<img src="https://github.com/albertanguyen/wall-e-app.github.io/blob/master/public/img/robotScreenshot.png"  align="left" width="48"/>


## Required User Stories

THE USER IS ABLE TO

* [x] See the main page with the welcome message
* [x] Click on Companions on nav menu and be directed to the Companions page, url also changes accordingly.
* [x] See all Companions cards which include their basic information

[//]: # (- [] Enter a repository in a search bar, click "search", and see the associated issues. The repository should be of the format owner/repo-name, e.g. facebook/react.)


## Optional User Stories

THE USER CAN


## Time Spent and Lessons Learned
* Use React Router to quickly change between Views
* Know basic implementation of CRUD App (Create, Read, Update, Delete).
* Set up basic server on your own computer (using json-server)
* Use of Fake Data to use as a demo for your App Model.
* Exclusive route and nested route

## Describe any challenges encountered while building the app.
* <a href="https://stackoverflow.com/questions/45148532/cant-install-react-transition-group#45148963">react-router-dom corruption</a>

* <a href="https://stackoverflow.com/questions/49755821/when-using-create-react-app-why-does-the-development-server-keep-disconnecting">The development server has disconnected</a>

* Resolve error message <code>&lt;a&gt; cannot appear as a descendant of &lt;a&gt;</code> due to the overuse of Nav.Link and Link at the same time
* Make sure that Link url and Route url match
* Cannot use map function within Route, had to map inside child component instead of parent component which renders the site more slowly based on my personal experience

## License

    Copyright [2019] Anh Nguyen

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
