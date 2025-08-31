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

client.on("messageCreate", (message) => {
  console.log("Message found :", message.content);
  if (message.author.bot) return;
  message.reply({
    content: "Received !",
  });
});

client.login(process.env.BOT_TOKEN);
