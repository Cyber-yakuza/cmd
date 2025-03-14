const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "👋",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `

╭─「🥷 ᴅᴀʀᴋ ɴᴇʀᴏ🥷」  Hey🤭👋💗  ${pushname}



│🥷ʀᴜɴᴛᴛᴍᴇ -   ${runtime(process.uptime())} 
╰──────────●●►

╭──────────●●►
│🥷ᴇᴅᴜᴄᴀᴛɪᴏɴᴀʟ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ: 
╰──────────●●►

╭──────────●●►
│🥷ᴄᴏᴍᴍᴀɴᴅ: ᴛᴀʏᴘ ᴛᴏ ᴍᴜɴᴜ ʟɪꜱᴛ
│
╰──────────●●►


🥷ɢɪᴛ ʜᴜʙ ʀᴇᴘᴏɢᴛʀ:

 coming soon...‼️

> ⭕ ᴘᴏᴡᴡᴀʀᴅ ʙʏ ᴄʏʙᴇʀ ʏᴀᴋᴜᴢᴀ ᴛᴇᴀᴍ⭕`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://files.catbox.moe/kdo0ix.jpeg` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363385281017920@newsletter',
                    newsletterName: 'ᴅᴀʀᴋ ɴᴇʀᴏ',
                    serverMessageId: 190
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
