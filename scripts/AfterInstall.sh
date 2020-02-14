#!/bin/sh

echo "-----------------------------------"
echo "AfterInstall"
aws s3 cp s3://jjouhiu-application/index.html /deployApp/myReactApp/public/
aws s3 cp s3://jjouhiu-application/bundle.js  /deployApp/myReactApp/public/
echo "-----------------------------------"
