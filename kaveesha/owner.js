const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "owner",
    react: "☠️", // Reaction emoji when the command is triggered
    alias: ["kaveesha", "king"],
    desc: "Get owner number",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from }) => {
    try {
        // Owner's contact info
        const ownerNumber = '+94774071805'; // Replace this with the actual owner number
        const ownerName = '𝗸𝗮𝘃𝗲𝘀𝗵𝗮 𝘀𝗶𝘁𝗵𝘂𝗺'; // Replace this with the owner's name
        const organization = '*𝗸𝗮𝘃𝗲𝘀𝗵𝗮 𝘀𝗶𝘁𝗵𝘂𝗺* WHATSAPP BOT DEVALOPER 🥷'; // Optional: replace with the owner's organization

        // Create a vCard (contact card) for the owner
        const vcard = 'BEGIN:VCARD\n' +
                      'VERSION:3.0\n' +
                      `FN:${ownerName}\n` +  // Full Name
                      `ORG:${organization};\n` +  // Organization (Optional)
                      `TEL;type=CELL;type=VOICE;waid=${ownerNumber.replace('+', '')}:${ownerNumber}\n` +  // WhatsApp ID and number
                      'END:VCARD';

        // Send the vCard first
        const sentVCard = await conn.sendMessage(from, {
            contacts: {
                displayName: ownerName,
                contacts: [{ vcard }]
            }
        });

        // Send a reply message that references the vCard
        await conn.sendMessage(from, {
            text: `> 🥷𝗗𝗮𝗿𝗸 𝗻𝗲𝗿𝗼 𝗼𝘄𝗻𝗲𝗿𝘀,⚠️

> 🥷𝗸𝗮𝘃𝗲𝘀𝗵𝗮 𝘀𝗶𝘁𝗵𝘂𝗺
> 🥷𝘀𝘂𝗿𝗮𝘁𝗵 𝗮𝗹𝗼𝗸𝗮
> 🥷𝗽𝗮𝗵𝗮𝗻 𝗿𝗮𝘀𝗵𝗺𝗶𝗸𝗮

> 🥷ᴘᴏᴡᴇʀᴅ ʙʏ ᴄʏʙᴇʀ ʏᴀᴋᴜᴢᴀ ᴛᴇᴀᴍ⚠️`,
            contextInfo: {
                mentionedJid: [ownerNumber.replace('+94774071805') + '+94774071805@s.whatsapp.net'], // Mention the owner
                quotedMessageId: sentVCard.key.id // Reference the vCard message
            }
        }, { quoted: mek });

    } catch (error) {
        console.error(error);
        await conn.sendMessage(from, { text: 'Sorry, there was an error fetching the owner contact.' }, { quoted: mek聽});
聽聽聽聽}
});
