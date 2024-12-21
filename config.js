//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2348131010817";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVBObm5WTUpJTjVrUWN4anZwREsvblY2bUZJREpwemNPQS9NQ1orTmUxQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVkwwcFBXZlZDaUJRVHBYQzBON3RnclFoQzl0dXJzTW5BWUZFZisvbERVOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwQTF5ZFlrWEhXaEZUSCtVK2lMUVNoeVRaS0FnZzFSTElobjVCcWFmeDA0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrcHJvKzZSejBieG1qclFjTVl1VUtIQ0ZkeGlXcmxYS1krQU5HVWs4OVIwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1BQmE5cTR5aHZ6UEExK3hiYXRWU09RVms1TlladnpxREtaL0ZGMjRoSG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVMMTFDdFU0aUZpK2pxdEo1dklFekhTWnkxTjJFRWZqdUV6azBuV0NSSDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0JyUG5aS1JtODFsY3NUa0hwdzlHNVhMWUlJQWxsSHE2WkRDR2dvZE0xcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS291dWRuVmdERXdwenJ3MGxUemJrWGpYbDJVVFBYb00vdjVMSUplRzdrVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFYRGRSQ0VSamZtN3IyUCtJRVlwMmlCcmxQUGYzZzFjRUNGRlJNQ3c3OHljaGlYWjN6N1ZicGQ4M0Y0bXFyOE5ZdlJLN1ROK1Z1c2VJMkt0N3BkSEJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA4LCJhZHZTZWNyZXRLZXkiOiJBWGZCaXdBQjR0aCtIbDRUSHhRejczNkdpcGViQmx4MTQ4YWQ1Qkw4M3ZvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJpMWRaOWlHYVF5U18tdk1FSEJka2xBIiwicGhvbmVJZCI6IjljOTQ5NzRiLTZkMGYtNDI2Yi04Yjg0LThiMGNiMTIyYWE3NiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYTHZmRlhLbTh3WjBoVzVkSFBzcExTbFkvT1k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1VtRXRQNzNqZTdXQ3pEU3ZRZjhDeFZBc0RBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlaNlo0MzE3IiwibWUiOnsiaWQiOiIyMzQ4MTMxMDEwODE3OjM4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFOT05ZTU9VUyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTlRYaGF3Q0VPTzNtcnNHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNHhoUUxiV3NKSEdWK0xFbjY5a1dGd01ycDZBTmhkbWFCQ3EraWVrMGNUST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSGQydVh5bTM2RFpCTjlmUWJKWHNTS0pHdVIvTk5ZUXNqa0dRTEhhVWYwV0VpSmFoaWZnT2k0TlNBTXYvS2tnMGVoWlZ4M0t3N2FkM1BDK1NTMHNURFE9PSIsImRldmljZVNpZ25hdHVyZSI6IkRDYUpvTm12WVpJRkJqYzJjdUtSaGFpMWpuRTZFaCswSFB5SVpJS0tndjNiRDVLb3ArbDdQL3pFbVhlczRvQk9Yd054M2hPSFZQK1F2VkhRbmE1SUNnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODEzMTAxMDgxNzozOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlTVlVQzIxckNSeGxmaXhKK3ZaRmhjREs2ZWdEWVhabWdRcXZvbnBOSEV5In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM0Nzc3ODQxfQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "Anonymous Zica",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
