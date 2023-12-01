const { AoiClient } = require("aoi.js");

const client = new AoiClient({
  token: "TOKEN",
  prefix: "+",
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    tables: ["main"],
    path: "./database/",
    extraOptions: {
      dbType: "KeyValue",
    },
  },
});


// Ping Command Example
client.command({
  name: "ping",
  code: `Pong! $pingms uptime $uptime[full]`,
});

client.status({
  name: "Entah lah",
  type: "PLAYING",
  status: "idle",
  time: 12,
});

client.loadCommands("./commands/", true);