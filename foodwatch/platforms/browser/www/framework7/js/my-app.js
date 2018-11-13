var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  theme: "ios",
  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },
    {
      path: '/food/',
      componentUrl: 'food.html'
    },
  ],
  // ... other parameters
});

var mainView = app.views.create('.view-main');

var $$ = Dom7;