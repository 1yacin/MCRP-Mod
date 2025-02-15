module.exports = {
  OWNER_IDS: ["452960418915418123"], // Bot owner ID's
  SUPPORT_SERVER: "https://discord.gg/fgSEyDqDq8", // Your bot support server
  PREFIX_COMMANDS: {
    ENABLED: true, // Enable/Disable prefix commands
    DEFAULT_PREFIX: "$", // Default prefix for the bot
  },
  INTERACTIONS: {
    SLASH: true, // Should the interactions be enabled
    CONTEXT: true, // Should contexts be enabled
    GLOBAL: true, // Should the interactions be registered globally
    TEST_GUILD_ID: "914277797449568306", // Guild ID where the interactions should be registered. [** Test you commands here first **]
  },
  EMBED_COLORS: {
    BOT_EMBED: "#FFFF00",
    TRANSPARENT: "#FFFF00",
    SUCCESS: "#FFFF00",
    ERROR: "#FFFF00",
    WARNING: "#FFFF00",
  },
  CACHE_SIZE: {
    GUILDS: 1,
    USERS: 10000,
    MEMBERS: 10000,
  },
  MESSAGES: {
    API_ERROR: "Unexpected Backend Error! Try again later or contact support server",
  },

  // PLUGINS

  AUTOMOD: {
    ENABLED: true,
    LOG_EMBED: "#FFFF00",
    DM_EMBED: "#FFFF00",
  },

  DASHBOARD: {
    enabled: false, // enable or disable dashboard
    baseURL: "https://mcrp-mod.onrender.com", // base url
    failureURL: "https://mcrp-mod.onrender.com", // failure redirect url
    port: "8080", // port to run the bot on
  },

  ECONOMY: {
    ENABLED: false,
    CURRENCY: "₪",
    DAILY_COINS: 100, // coins to be received by daily command
    MIN_BEG_AMOUNT: 100, // minimum coins to be received when beg command is used
    MAX_BEG_AMOUNT: 2500, // maximum coins to be received when beg command is used
  },

  MUSIC: {
    ENABLED: true,
    IDLE_TIME: 60, // Time in seconds before the bot disconnects from an idle voice channel
    MAX_SEARCH_RESULTS: 5,
    DEFAULT_SOURCE: "YT", // YT = Youtube, YTM = Youtube Music, SC = SoundCloud
    // Add any number of lavalink nodes here
    // Refer to https://github.com/freyacodes/Lavalink to host your own lavalink server
    LAVALINK_NODES: [
      {
        host: "localhost",
        port: 2333,
        password: "youshallnotpass",
        id: "Local Node",
        secure: false,
      },
    ],
  },

  GIVEAWAYS: {
    ENABLED: true,
    REACTION: "🎁",
    START_EMBED: "#FFFF00",
    END_EMBED: "#FFFF00",
  },

  IMAGE: {
    ENABLED: true,
    BASE_API: "https://strangeapi.hostz.me/api",
  },

  INVITE: {
    ENABLED: true,
  },

  MODERATION: {
    ENABLED: true,
    EMBED_COLORS: {
      TIMEOUT: "#FFFF00",
      UNTIMEOUT: "#FFFF00",
      KICK: "#FFFF00",
      SOFTBAN: "#FFFF00",
      BAN: "#FFFF00",
      UNBAN: "#FFFF00",
      VMUTE: "#FFFF00",
      VUNMUTE: "#FFFF00",
      DEAFEN: "#FFFF00",
      UNDEAFEN: "#FFFF00",
      DISCONNECT: "RANDOM",
      MOVE: "RANDOM",
    },
  },

  PRESENCE: {
    ENABLED: false, // Whether or not the bot should update its status
    STATUS: "online", // The bot's status [online, idle, dnd, invisible]
    TYPE: "WATCHING", // Status type for the bot [PLAYING | LISTENING | WATCHING | COMPETING]
    MESSAGE: "{members} members in {servers} servers", // Your bot status message
  },

  STATS: {
    ENABLED: false,
    XP_COOLDOWN: 5, // Cooldown in seconds between messages
    DEFAULT_LVL_UP_MSG: "{member:tag}, You just advanced to **Level {level}**",
  },

  SUGGESTIONS: {
    ENABLED: false, // Should the suggestion system be enabled
    EMOJI: {
      UP_VOTE: "⬆️",
      DOWN_VOTE: "⬇️",
    },
    DEFAULT_EMBED: "#FFFF00",
    APPROVED_EMBED: "#FFFF00",
    DENIED_EMBED: "#FFFF00",
  },

  TICKET: {
    ENABLED: false,
    CREATE_EMBED: "#FFFF00",
    CLOSE_EMBED: "#FFFF00",
  },
};
