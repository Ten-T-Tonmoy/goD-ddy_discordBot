import {
  Client,
  Events,
  GatewayIntentBits,
  Partials,
  Collection,
} from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, //guild intents for perms
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
    partials: [Partials.Channel],
});
client.commands = new Collection();




client.login(process.env.BOT_TOKEN);
