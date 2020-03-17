
## PDF Generator Cordova

This is just a demo showcasing the pdf generator Cordova plugin


## Getting started.

```sh
    git clone https://github.com/cesarvr/pdf-generator-example sample
    cd sample
    cordova platform add ios android
```

For the web application I'm using [Webpack](https://webpack.github.io/) and [Backbone](https://webpack.github.io/), is just a simple web app if you want to do some modifications you need to:

```sh
  cd www/
  npm install
  npm webpack -g  # if you don't have webpack.
  webpack --watch   
```   

This will build automatically the source files and you can use your favorite static server to serve the www/ folder for example:  

```sh

cordova serve

#or

cd www/ && python -m SimpleHTTPServer 8080

```

to run the app on the device:

```sh
cordova plugin add cordova-pdf-generator
cordova build #ios android
cordova run ios #android
```

## Demo

### Android version.
![Android](https://github.com/cesarvr/pdf-generator-example/blob/master/docs/android-demo.gif)

### IOS Version
![IOS](https://github.com/cesarvr/pdf-generator-example/blob/master/docs/ios-demo.gif)
