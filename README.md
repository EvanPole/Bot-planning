# Bot-planning

This repository contains a planning bot developed using Node.js. The bot uses NPM dependencies to function properly. Before running the bot, please follow the installation steps below.

## Installation

To install the necessary dependencies, run the following command:

`npm install`

## Configuration

Before running the bot, you need to configure certain parameters. Follow the steps below to configure the `config.json` file:

1. Open the `config.json` file in a text editor.
2. Modify the values of the following keys according to your needs:

   - `url_login`: Login URL to access the planning page.
   - `user`: Username used for logging in.
   - `pass`: Password used for logging in.
   - `page_pl`: Planning page name.

   For example:

   ```json
   {
     "url_login": "https://example.com/login",
     "user": "username",
     "pass": "password",
     "page_pl": "planning_page_name"
   }
   
Running the Bot

Once the dependencies are installed and the configuration is completed, you can run the bot by executing the following command:

`node index.js`
