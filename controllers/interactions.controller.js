export async function routeComponentInteraction(interaction) {
  if (interaction.isButton()) {
    if (interaction.customId === "diddy:approve") {
      return interaction.reply({
        content: "🛡️ The crowd got ur a$$ SAVED!",
        ephermal: true,
      });
    }
    if (interaction.customId === "diddy:drag") {
      return interaction.reply({
        content: " Diddy wins. Weird emotes unleashed.", //send gifs?ig
        ephermal: true,
      });
    }
  }
}
