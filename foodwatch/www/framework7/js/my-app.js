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
    {
      path: '/food/:id',
      name:"product",
      componentUrl: 'food.html'
    },
    {
      path: '/signin/',
      componentUrl:'signin.html'
    },
    {
      path: '/fav/',
      componentUrl:'favorites.html'
    },
    {
      path: '/signup/',
      componentUrl:'signup.html'
    }
  ],
  // ... other parameters
});

var mainView = app.views.create('.view-main');

var $$ = Dom7;

if(window.localStorage.getItem("jwt") === null) {
  $$("#signin").removeClass("hidden")
  $$("#signup").removeClass("hidden")
} else {

  app.request({
    url: "https://foxxy.ovh/_db/ema_api/api/auth/ping",
    headers: {
      "X-Session-Id": window.localStorage.getItem("jwt")
    },
    error: function() {
      window.localStorage.removeItem("jwt")
      $$("#fav").addClass("hidden")
      $$("#logout").addClass("hidden")
      $$("#signin").removeClass("hidden")
      $$("#signup").removeClass("hidden")
    }
  })

  $$("#fav").removeClass("hidden")
  $$("#logout").removeClass("hidden")
  $$("#signin").addClass("hidden")
  $$("#signup").addClass("hidden")
}

$$("#logout").on("click", function() {
  $$("#fav").addClass("hidden")
  $$("#logout").addClass("hidden")
  $$("#signin").removeClass("hidden")
  $$("#signup").removeClass("hidden")
  window.localStorage.removeItem("jwt")
})

