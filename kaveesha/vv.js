const { cmd, commands } = require('../config');
const { cmd } = require('../command');
const Jimp = require("jimp");
const fs = require('fs');
const FileType = require('file-type');

const {
    default: makeWASocket,
    getAggregateVotesInPollMessage, 
    useMultiFileAuthState,
    DisconnectReason,
    getDevice,
    fetchLatestBaileysVersion,
    jidNormalizedUser,
    getContentType,
    Browsers,
    delay,
    makeInMemoryStore,
    makeCacheableSignalKeyStore,
    downloadContentFromMessage,
    generateForwardMessageContent,
    generateWAMessageFromContent,
    prepareWAMessageMedia,
    proto
} = require('@whiskeysockets/baileys');

cmd({
    pattern: "vv",
    react: "🫣",
    alias: ["mattu", "dakkada", "mekada", "viewonce"],
    desc: "To ViewOnceMessage",
    category: "convert",
    use: '.vv',
    filename: __filename
}, async (conn, mek, m, { from, quoted, reply }) => {
    try {
        // Function to download and save media messages
        conn.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
            const quotedMessage = message.msg || message;
            const mimeType = (message.msg || message).mimetype || '';
            const messageType = mimeType.split('/')[0];

            const stream = await downloadContentFromMessage(quotedMessage, messageType);
            let buffer = Buffer.from([]);
            for await (const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk]);
            }

            const fileType = await FileType.fromBuffer(buffer);
            const trueFileName = attachExtension ? `${filename}.${fileType.ext}` : filename;

            fs.writeFileSync(trueFileName, buffer);
            return trueFileName;
        };

        // Handle ViewOnce messages
        const viewOnceMessage = mek.msg?.contextInfo?.quotedMessage?.viewOnceMessageV2;
        if (viewOnceMessage) {
            if (viewOnceMessage.message?.imageMessage) {
                const caption = viewOnceMessage.message.imageMessage.caption || '';
                const filePath = await conn.downloadAndSaveMediaMessage(viewOnceMessage.message.imageMessage);
                return conn.sendMessage(from, { image: { url: filePath }, caption });
            } else if (viewOnceMessage.message?.videoMessage) {
                const caption = viewOnceMessage.message.videoMessage.caption || '';
                const filePath = await conn.downloadAndSaveMediaMessage(viewOnceMessage.message.videoMessage);
                return conn.sendMessage(from, { video: { url: filePath }, caption });
            }
        }

        // Handle quoted messages
        if (!mek.quoted) return reply("Please reply to a ViewOnce message.");
        if (mek.quoted.mtype === "viewOnceMessage") {
            if (mek.quoted.message?.imageMessage) {
                const caption = mek.quoted.message.imageMessage.caption || '';
                const filePath = await conn.downloadAndSaveMediaMessage(mek.quoted.message.imageMessage);
                return conn.sendMessage(from, { image: { url: filePath }, caption });
            } else if (mek.quoted.message?.videoMessage) {
                const caption = mek.quoted.message.videoMessage.caption || '';
                const filePath = await conn.downloadAndSaveMediaMessage(mek.quoted.message.videoMessage);
                return conn.sendMessage(from, { video: { url: filePath }, caption });
            }
        } else {
            return reply("This is not a ViewOnce message.");
        }

        await conn.sendMessage(from, { react: { text: `✅`, key: mek.key } });
    } catch (error) {
        console.error(error);
        reply(`*An error occurred: ${error.message}*`);
    }
});
