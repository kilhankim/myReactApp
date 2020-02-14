#!/bin/sh

echo "-----------------------------------"
echo "AfterInstall"
aws s3 cp s3://jjouhiu-application/index.html /home/ec2-user/myReactApp/public/
aws s3 cp s3://jjouhiu-application/bundle.js  /home/ec2-user/myReactApp/public/
echo "-----------------------------------"
