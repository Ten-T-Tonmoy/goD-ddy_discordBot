import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("check bot responsiveness & latency");

export async function run(interaction) {
  const sent = await interaction.reply({
    content: "Pinging bot .....",
    fetchReply: true,
  });

  const latency = sent.createdTimestamp - interaction.createdTimestamp;
  await interaction.editReply(`Pong! Roundtrip took : ${latency} ms`);
}
