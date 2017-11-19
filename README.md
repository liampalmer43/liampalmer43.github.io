### Origins
This project was originally cloned from [Create React App](https://github.com/facebookincubator/create-react-app)

### Local Development
To develop and test this locally:
- Run ```npm start```
- This will start a local server available at http://localhost:3000

### Pushing
To push project changes (this WILL NOT cause changes to the website served at https://liampalmer43.github.io/me):
- Run ```git add .```
- Run ```git commit -m <message>```
- Run ```git push origin master```

To push built changes (this WILL cause changes to the website served at https://liampalmer43.github.io/me):
- Run ```npm deploy```
- This makes use of the react-scripts npm package to build the project into the directory /build and the gh-pages npm package to push the built code to https://github.com/liampalmer43/me.git on branch gh-pages.

### Special Considerations and Explanations
- This project is in the repository `liampalmer43.github.io/me` (and thus served at https://liampalmer43.github.io/me) instead of repository `liampalmer43.github.io` (served at https://liampalmer43.github.io) because github pages only serves from a non-master branch (ie. `gh-pages`) for a project site (so this won't work for a user site). Please see the `Github Pages` section of [Create React App Deployment](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment) for more details and explanation.
- Note that this project is using React's `HashRouter` instead of `BrowserRouter`. This is because github pages does not support server side routing. A url with hashes such as https://liampalmer43.github.io/me/#/Internships allows for client side routing, whereas a url such as https://liampalmer43.github.io/me/Internships will send a request to the server and fail because asset `liampalmer43.github.io/me/Internships` does not exist.

