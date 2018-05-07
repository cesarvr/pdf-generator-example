#!/bin/zsh
cd www/ 
webpack 
cd ..

cordova prepare 
#cordova plugins remove cordova-pdf-generator
#cordova plugins add ../pdf-generator 

#cordova build 
#cordova run android
#cordova run ios

#rm ./sample-server/pdf/*.pdf
