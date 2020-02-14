
echo "-----------------------------------"
echo "ApplicationStart"
cd /deployApp
sudo su
echo "-----------------------------------"
echo " PATH Information "
echo $PATH
/root/.nvm/versions/node/v13.8.0/bin/pm2 start /deployApp/app.js --name myReactApp
echo "-----------------------------------"
