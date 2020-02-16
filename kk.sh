#!/bin/sh

target=`ps -ef | grep node | awk '{if("app.js"==$9) print $2}'`
sudo kill -9 $target
