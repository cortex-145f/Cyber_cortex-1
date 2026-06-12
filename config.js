const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://repository-images.githubusercontent.com/78524793/17d15480-1b36-11ea-8472-dc52b86f3e2b",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 Cybercortex1 Is Alive Now😍*",
BOT_OWNER: '94776121326',  // Replace with the owner's phone number



};
