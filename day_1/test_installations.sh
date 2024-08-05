#!/bin/bash
pause(){
    sleep 1
}

echo "Testing Node.js and npm installations..."
echo "-------------------------------------"
pause


# Checking Node.js version
echo "Checking Node.js version"
pause
if command -v node &> /dev/null; then
    echo "Node.js is installed. Version:"
    node -v
    echo
else
    echo "Node.js is not installed."
    echo "Please install Node.js from the following link:"
    echo "https://nodejs.org/en/download/"
    echo
fi
echo "-------------------------------------"
pause

# Check npm version
echo "Checking npm version..."
pause
if command -v npm &> /dev/null; then
    echo "npm is installed. Version:"
    npm -v
    echo
else
    echo "npm is not installed."
    echo "npm is included with Node.js, so installing Node.js should also install npm."
    echo "You can download Node.js from the following link:"
    echo "https://nodejs.org/en/download/"
    echo
fi
echo "Test completed. Have a great day! 🚀"