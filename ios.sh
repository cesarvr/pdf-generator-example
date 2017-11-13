#!/bin/bash

cd www/ && webpack && cd .. && cordova plugin remove cordova-pdf-generator  && cordova plugins add ../pdf-generator && cordova prepare && cordova run ios
