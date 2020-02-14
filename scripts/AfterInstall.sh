#!/bin/sh

echo "-----------------------------------"
echo "AfterInstall"
aws s3 cp s3://jjouhiu-application/index.html /deployApp/public/
aws s3 cp s3://jjouhiu-application/bundle.js  /deployApp/public/

echo "s3 result check"
ls -alt /deployApp/public/

cd /deployApp
echo "module install"
echo $PATH
/root/.nvm/versions/node/v13.8.0/bin/npm install
echo "-----------------------------------"
