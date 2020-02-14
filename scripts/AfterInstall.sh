#!/bin/sh

echo "-----------------------------------"
echo "AfterInstall"
aws s3 cp s3://jjouhiu-application/index.html /deployApp/myReactApp/public/
aws s3 cp s3://jjouhiu-application/bundle.js  /deployApp/myReactApp/public/

echo "s3 result check"
ls -alt /deployApp/myReactApp/public/

cd /deployApp
echo "module install"
npm install
echo "-----------------------------------"
