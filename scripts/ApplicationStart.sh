
echo "-----------------------------------"
echo "ApplicationStart"
cd /deployApp
sudo su
pm2 start /deployApp/app.js --name myReactApp
echo "-----------------------------------"
