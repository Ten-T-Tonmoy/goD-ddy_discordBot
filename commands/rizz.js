import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("rizz")
  .setDescription("Drop a questionable rizz line at a user")
  .addUserOption((opt) =>
    opt.setName("victim").setDescription("User to rizz").setRequired(true)
  );

export async function run(interaction) {}
