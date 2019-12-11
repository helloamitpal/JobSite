# JobSite

This is an app for job list and related details

# Installation instruction

1. `npm install`
2. `sudo npm install -g json-server` to run the mock server
3. Open a new console, go to the jobsite folder and execute this command `json-server --watch mock-data.json --port 7096`. Now, the API will be available in this URL: http://localhost:7096/alljobs. [** NOTE: You may change the port number (7096) if it is conflicting with any running port. Then you have to change the defined URL as well in /jobsite/src/config/default.js file. Variable name API_BASE_URL]
4. In another console, execute this command as well to kick-start the application `npm run start`. Default port is 3000. If that port is not available, it would ask for changing the port number automatically.
5. The application will be opened in the browser.

# Features and coding styles

- Responsive UI. Different layout for mobile and desktop
- Implemented extensible UI architecture
- Used reactive and functional programming paradigm with Redux and React Hooks respectively
- Added error boundary to conceive any unexpected UI errors
- Added react memo in some places to stop unnecessary rendering
- Followed modular approach in coding
- Used React lazy to make on-demand respective module loading to gain the start up performance
- Used modular common components approach in coding
- Maintained common config, helper files to serve the common purposes
- Added API interceptor to enabling the scope of writing central code while sending request or receiving response
