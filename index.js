const {
  Client,
  Events,
  GatewayIntentBits,
  SlashCommandBuilder,
  MessageFlags,
} = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const TICKS = {
  4: 358,
  5: 286,
  6: 239,
  7: 205,
  8: 179,
};

client.once(Events.ClientReady, () => {
  const tick = new SlashCommandBuilder()
    .setName('tick')
    .setDescription('Gives ATB tick information')
    .addNumberOption((option) =>
      option
        .setName('base_spd')
        .setDescription('The monster base speed')
        .setRequired(true)
        .setMinValue(90)
        .setMaxValue(130)
    )
    .addNumberOption((option) =>
      option
        .setName('lead')
        .setDescription('The speed lead')
        .setRequired(true)
        .setMinValue(0)
        .setMaxValue(33)
    );
  const tickCommand = tick.toJSON();

  client.application.commands.create(tickCommand);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'tick') {
    const base_spd = interaction.options.getNumber('base_spd');
    const spd_lead = interaction.options.getNumber('lead');
    const totem_spd = base_spd * 0.15;
    const spd_from_lead = (base_spd * spd_lead) / 100;
    const spd_tick_5 = TICKS[5] - base_spd - spd_from_lead - totem_spd;
    const spd_tick_6 = TICKS[6] - base_spd - spd_from_lead - totem_spd;
    const spd_tick_7 = TICKS[7] - base_spd - spd_from_lead - totem_spd;

    await interaction.reply({
      content: `Base speed: ${base_spd} / ${spd_lead ? 'Lead: ' + spd_lead + '%' : 'No Lead'}
      
Tick 5: +${Math.floor(spd_tick_5)} (Total: ${Math.floor(spd_tick_5) + base_spd})
Tick 6: +${Math.floor(spd_tick_6)} (Total: ${Math.floor(spd_tick_6) + base_spd})
Tick 7: +${Math.floor(spd_tick_7)} (Total: ${Math.floor(spd_tick_7) + base_spd})`,
      flags: MessageFlags.Ephemeral,
    });
  }
});

client.login(token);
