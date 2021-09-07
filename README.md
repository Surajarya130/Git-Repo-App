# Search repositories app

This project is using github api to fetch the repos and data of github user.
A nice UI palate to show the repos information with some cool aniamtion effect.
User can search and find the repo link inside the UI Tile. Also can look into forks counts.
This project is created initally by following the official docs of https://reactjs.org/docs/create-a-new-react-app.html

## Instruciton to run the applicaiton

1. Just clone the repo from github
2. Extract it and open the main folder in VS Code
3. Open Terminal and write `npm-install`
4. It will add all the modules
5. Now run npm start to run the app
6. Woho you are good to go

### Manual Tesing output

1. You can write input values and search it.
2. If there will be any result with that name it will list down
3. If not, no list will be shown
4. The dynamic preview for your search keyword will show below search bar like `Search Result for: ${keyword}`
5. If the search word will blank then no words will show below
6. Dark and light mode are dynamically rendered to change the theme
7. Alert bar will popup for 1 sec on switiching bewtween the theme color.

#### Future improvements

1. I am planning to add a dropdwon element with 2 value(Search by username, repo name) where user wil have option to search either by repo name or by user name
2. On the basis of selected option we can render the list.
3. We can add dyanamic filter as well. But There can be an issue of calling limit. Since GITHUB allows 10 times to call in one time so if the calling will exceed the limit then we will not get the result instantly.
4. Can make and easy an nice ui for user profile. Right now it is ref to open the link in new tab.
5. We can call the alert multiple time where ever we feel to add the features.

##### My feedback

It was a cool project, Functional based components were really easy. Since class based functions are little less explained. I really build some nice logic like alert function search keyword preview. Mapping through the whole repos and show up in the repo tiles.
I have build bunch of projects using api with vanila js(links can be found on my portfolio) but react is something next level kinda thing.
It helped to understand the basic working flow of react roots and routers.
React.js is really powerful thing. Previously developers were first selecting the element by classname or id then we add event listeners and perform actionn over it. We have to make more code with vanilla js. Then page refresh each time. But react make things more easy and handy.
In one word I would say it was `awesome` project. Will make more projects with react from now.
#   F I n d R e p o A p p  
 