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
*╭────❒⁠⁠⁠⁠* *👨‍💻 OWNER-MENU 👨‍💻* *❒⁠⁠⁠⁠* 
*┋* *update*
*┋* *restart*
*┋* *block*
*┋* *unblock*
*┋* *Coming Soon*
*╰───────────────────❒*

> 🄿🄾🅆🄴🅁🄳 🅱🆈 𝐒𝐔𝐋𝐀_𝐌𝐃 😈
`;
                        break;
                    case '5': // GROUP MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *👥 GROUP-MENU 👥* *❒⁠⁠⁠⁠* 
*┋* *kickall*
*┋* *tagall*
*┋* *hidetag*
*┋* *add*
*┋* *Coming Soon*
*╰───────────────────❒*

> 🄿🄾🅆🄴🅁🄳 🅱🆈 𝐒𝐔𝐋𝐀_𝐌𝐃 😈
`;
                        break;
                    case '6': // INFO MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *💾 INFO-MENU 💾* *❒⁠⁠⁠⁠* 
*┋* *alive*
*┋* *menu*
*┋* *ping*
*┋* *owner*
*┋* *Coming Soon*
*╰───────────────────❒*

> 🄿🄾🅆🄴🅁🄳 🅱🆈 𝐒𝐔𝐋𝐀_𝐌𝐃 😈
`;
                        break;
                    case '7': // CONVERTER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🔄 CONVERTER-MENU 🔄* *❒⁠⁠⁠⁠* 
*┋* *tts2*
*┋* *tourl*
*┋* *sticker*
*┋* *Coming Soon*
*╰───────────────────❒*

> 🄿🄾🅆🄴🅁🄳 🅱🆈 𝐒𝐔𝐋𝐀_𝐌𝐃 😈
`;
                        break;
                    case '8': // WALLPAPERS MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *⛱️ RANDOM-MENU ⛱️* *❒⁠⁠⁠⁠* 
*┋* *hack*
*┋* *weather*
*┋* *news*
*┋* *hirucheck*
*┋* *Coming Soon*
*╰───────────────────❒*

> 🄿🄾🅆🄴🅁🄳 🅱🆈 𝐒𝐔𝐋𝐀_𝐌𝐃 😈
`;
                        break;
                    case '9': // WALLPAPER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🏜️ WALLPAPERS-MENU 🏜️* *❒⁠⁠⁠⁠* 
*┋* *animegirl1*
*┋* *animegirl2*
*┋* *animegirl3*
*┋* *animegirl4*
*┋* *animegirl5*
*┋* *Coming Soon*
*╰───────────────────❒*

> 🄿🄾🅆🄴🅁🄳 🅱🆈 𝐒𝐔𝐋𝐀_𝐌𝐃 😈
`;
                        break;
                    case '10': // OTHER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🌐 OTHER-MENU 🌐* *❒⁠⁠⁠⁠* 
*┋* *pair*
*┋* *getpp*
*┋* *Coming Soon*
*╰───────────────────❒*

> 🄿🄾🅆🄴🅁🄳 🅱🆈 𝐒𝐔𝐋𝐀_𝐌𝐃 😈
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
