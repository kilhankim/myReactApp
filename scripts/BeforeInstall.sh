#!/bin/sh

echo "---------------------------------------"
echo " BeforeInstall "
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
chmod +x ~/.nvm/nvm.sh
cd ~
echo `pwd`
export NVM_DIR="$HOME/.nvm"
sh .bash_profile
\. $NVM_DIR/nvm.sh
sh .bash_profile
echo "---------------------------------------"
nvm install node
echo "---------------------------------------"
cd /deployApp
export PATH=$PATH:/root/.nvm/versions/node/v13.8.0/bin
npm install
npm install pm2 -g
pm2 start app.js --name myReactApp
echo "---------------------------------------"
