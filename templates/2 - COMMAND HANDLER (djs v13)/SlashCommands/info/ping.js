const { Client, CommandInteraction } = require("discord.js");

module.exports = {
  name: "ping",
  description: "returns websocket ping",
  category: "Info",
  type: "CHAT_INPUT",
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    let ping = `${client.ws.ping}ms!`;
    interaction.followUp({ content: `${ping}`});
  },
};
