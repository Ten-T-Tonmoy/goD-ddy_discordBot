import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";

export const diddyRow = new ActionRowBuilder().addComponents(
  new ButtonBuilder()
    .setCustomId("diddy:approve")
    .setLabel("Save them ✅")
    .setStyle(ButtonStyle.Success),
  new ButtonBuilder()
    .setCustomId("diddy:drag")
    .setLabel("Drag to party 🕺")
    .setStyle(ButtonStyle.Danger)
);
