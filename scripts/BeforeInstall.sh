#!/bin/sh

echo "---------------------------------------"
echo " BeforeInstall "
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
chmod +x ~/.nvm/nvm.sh
cd ~
echo `pwd`
export NVM_DIR="$HOME/.nvm"
\. $NVM_DIR/nvm.sh
sh .bash_profile
cd /deployApp
npm install
echo "---------------------------------------"
