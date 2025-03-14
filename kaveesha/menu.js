const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const imageUrl = 'https://files.catbox.moe/ppqnv0.jpeg';

cmd({
    pattern: "menu",
    react: "📜",
    alias: ["panel", "commands"],
    desc: "Get Bot Menu",
    category: "main",
    use: '.menu',
    filename: __filename
},
async (conn, mek, m, { from, quoted, pushname, reply }) => {
    try {
        const selectionMessage = `
┍┄┄┄┄┄┄┄┄┄┄┄┄┄┄
      *HEY 🚩*  *${pushname}*
      
    *⚠️Dark-Nero-Md-Command List⚠️*
┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┙
  *│1.   🩵DOWNLOAD MENU*
  *│2.   🩵SEARCH MENU* 
  *│3.   🩵AI MENU*
  *│4.   🩵OWNER MENU*
  *│5.   🩵GROUP MENU*
  *│6.   🩵INFO MENU*
  *│7.   🩵CONVERTER MENU*
  *│8.   🩵RANDOM MENU*
  *│9.   🩵WALLPAPERS MENU*
  *│10. 🩵OTHER MENU*
 
 *┕┄┄┄┄┄┄┄┄┄┄┄┄┄┄

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʏʙᴇʀ ʏᴀᴋᴜᴢᴀ ᴛᴇᴀᴍ❗
`;

        const sentMsg = await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: selectionMessage,
            contextInfo: { forwardingScore: 999, isForwarded: true },
        }, { quoted: mek });

        // පරිශීලක ප්‍රතිචාර ලබා ගැනීම
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userResponse = msg.message.extendedTextMessage.text.trim();
            if (msg.message.extendedTextMessage.contextInfo &&
                msg.message.extendedTextMessage.contextInfo.stanzaId === sentMsg.key.id) {

                let responseText;

                switch (userResponse) {
                    case '1': // DOWNLOAD MENU
                        responseText = `
┍┄┄┄┄┄┄┄┄┄┄┄┄
       🔖Download Commands🔖
*┋* 1.  song
*┋* 2.  video
*┋* 3.  tiktok
*┋* 4.  fb
*┋* 5.  insta
*┋* 6.  mediafire
*┋* 7.  apk
*┋* 8.  ytpost
*┋* 9.  twitter
   
Coming Soon💖
┄┄┄┄┄┄┄┄┄┄┄┄┄┙

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʏʙᴇʀ ʏᴀᴋᴜᴢᴀ ᴛᴇᴀᴍ❗
`;
                        break;
                    case '2': // SEARCH MENU
                        responseText = `
┍┄┄┄┄┄┄┄┄┄┄┄
        🔖Search Commands🔖
  ┋  1.  tiktokstalk
  ┋  2 . tiktoksearch
  ┋  3.  movie
  ┋  4.  img
  ┋  5.  logolist
  ┋  6.  rw
  ┋  7.  srepo
  
Coming Soon💖
┄┄┄┄┄┄┄┄┄┄┄┄┄┙

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʏʙᴇʀ ʏᴀᴋᴜᴢᴀ ᴛᴇᴀᴍ❗
`;
                        break;
                    case '3': // AI MENU
                        responseText = `
┍┄┄┄┄┄┄┄┄┄┄┄
         🔖Ai Commands🔖
*┋* 1.  ai
*┋* 2.  openai
*┋* 3.  deepseek
*┋* 4.  aiimg

Coming Soon💖
┄┄┄┄┄┄┄┄┄┄┄┄┙

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʏʙᴇʀ ʏᴀᴋᴜᴢᴀ ᴛᴇᴀᴍ❗
`;
                        break;
                    case '4': // OWNER MENU
                        responseText = `
┍┄┄┄┄┄┄┄┄┄┄┄
         🔖Owner  Commands🔖
*┋* 1.  update
*┋* 2.  restart
*┋* 3.  block
*┋* 4.  unblock

Coming Soon💖
┄┄┄┄┄┄┄┄┄┄┄┄┙

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʏʙᴇʀ ʏᴀᴋᴜᴢᴀ ᴛᴇᴀᴍ❗
`;
                        break;
                    case '5': // GROUP MENU
                        responseText = `
┍┄┄┄┄┄┄┄┄┄┄┄
         🔖Group Commands🔖
*┋* 1. kickall
*┋* 2. tagall
*┋* 3. hidetag
*┋* 4. add

Coming Soon💖
┄┄┄┄┄┄┄┄┄┄┄┄┙

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʏʙᴇʀ ʏᴀᴋᴜᴢᴀ ᴛᴇᴀᴍ❗
`;
                        break;
                    case '6': // INFO MENU
                        responseText = `
┍┄┄┄┄┄┄┄┄┄┄┄
         🔖Info  Commands🔖
┋ 1.  alive
┋ 2.  menu
┋ 3.  ping
┋ 4.  owner

Coming Soon💖
┄┄┄┄┄┄┄┄┄┄┄┄┙

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʏʙᴇʀ ʏᴀᴋᴜᴢᴀ ᴛᴇᴀᴍ❗
`;
                        break;
                    case '7': // CONVERTER MENU
                        responseText = `
┍┄┄┄┄┄┄┄┄┄┄┄
         🔖Convert  Commands🔖
*┋* 1.  tts2
*┋* 2.  tourl
*┋* 3.  sticker

Coming Soon💖
┄┄┄┄┄┄┄┄┄┄┄┄┙

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʏʙᴇʀ ʏᴀᴋᴜᴢᴀ ᴛᴇᴀᴍ❗
`;
                        break;
                    case '8': // WALLPAPERS MENU
                        responseText = `
┍┄┄┄┄┄┄┄┄┄┄┄
         🔖Randome Commands🔖
*┋* 1.  hack
*┋* 2.  weather
*┋* 3.  news
*┋* 4.  hirucheck

Coming Soon💖
┄┄┄┄┄┄┄┄┄┄┄┄┙

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʏʙᴇʀ ʏᴀᴋᴜᴢᴀ ᴛᴇᴀᴍ❗
`;
                        break;
                    case '9': // WALLPAPER MENU
                        responseText = `
┍┄┄┄┄┄┄┄┄┄┄┄
         🔖Wallpaper  Commands🔖
*┋* 1. animegirl1 
*┋* 2. animegirl2
*┋* 3. animegirl3
*┋* 4. animegirl4
*┋* 5. animegirl5

Coming Soon💖
┄┄┄┄┄┄┄┄┄┄┄┄┙

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʏʙᴇʀ ʏᴀᴋᴜᴢᴀ ᴛᴇᴀᴍ❗
`;
                        break;
                    case '10': // OTHER MENU
                        responseText = `
┍┄┄┄┄┄┄┄┄┄┄┄
         🔖Other Commands🔖
*┋* 1. pair
*┋* 2. getpp

Coming Soon💖
┄┄┄┄┄┄┄┄┄┄┄┄┙

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʏʙᴇʀ ʏᴀᴋᴜᴢᴀ ᴛᴇᴀᴍ❗
`;
                        break;
                    default:
                        responseText = "*❌ Invalid option. Please enter a valid number (1-10)*";
                }

                // තෝරාගත් මෙනුව WhatsApp chat එකට යවයි.
                await conn.sendMessage(from, { text: responseText }, { quoted: mek });
            }
        });

    } catch (e) {
        console.error(e);
        reply(`*⚠ An error occurred: ${e.message}*`);
    }
});
