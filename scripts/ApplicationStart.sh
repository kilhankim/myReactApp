
echo "-----------------------------------"
echo "ApplicationStart"
cd /deployApp
pm2 start app.js --name myReactApp
echo "-----------------------------------"
