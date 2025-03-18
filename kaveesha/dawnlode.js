const config = require('../config');
const { cmd } = require('../command');
const fs = require('fs');
const FileType = require('file-type');
const downloadContentFromMessage = require('@whiskeysockets/baileys');
const { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js'); 

// video

cmd({ 
    pattern: "video", 
    alias: ["ytdl", "mp4"], 
    react: "🎥", 
    desc: "Download Youtube song", 
    category: "main", 
    use: '.song < Yt url or Name >', 
    filename: __filename 
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => { 
    try { 
        if (!q) return await reply("Please provide a YouTube URL or song name.");
        
        const yt = await ytsearch(q);
        if (yt.results.length < 1) return reply("No results found!");
        
        let yts = yt.results[0];  
        let apiUrl = `https://apis.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(yts.url)}`;
        
        let response = await fetch(apiUrl);
        let data = await response.json();
        
        if (data.status !== 200 || !data.success || !data.result.download_url) {
            return reply("Failed to fetch the video. Please try again later.");
        }
        
        let ytmsg = `╭━━━〔 *🥷𝗗𝗮𝗿𝗸 𝗻𝗲𝗿𝗼 𝘄𝗵𝗮𝘁𝘀𝗮𝗽 𝗯𝗼𝘁⚠️* 〕━━━┈⊷
┇๏ *🥷𝗧𝗶𝘁𝗹𝗲* -  ${yts.title}
┇๏ *🥷𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻* - ${yts.timestamp}
┇๏ *🥷𝗩𝗶𝗲𝘄𝘀* -  ${yts.views}
┇๏ *🥷𝗔𝘂𝘁𝗵𝗼𝗿* -  ${yts.author.name}
┇๏ *🥷𝗟𝗶𝗻𝗸* -  ${yts.url}
╰────────────────┈⊷

> 🥷ᴘᴏᴡᴇʀᴅ ʙʏ ᴄʏʙᴇʀ ʏᴀᴋᴜᴢᴀ ᴛᴇᴀᴍ⚠️`;

        // Send video details
        await conn.sendMessage(from, { image: { url: data.result.thumbnail || '' }, caption: ytmsg }, { quoted: mek });
        
        // Send video file
        await conn.sendMessage(from, { video: { url: data.result.download_url }, mimetype: "video/mp4" }, { quoted: mek });
        
        // Send document file (optional)
        await conn.sendMessage(from, { 
            document: { url: data.result.download_url }, 
            mimetype: "video/mp4", 
            fileName: `${data.result.title}.mp4`, 
            caption: `> *${yts.title}*\n > 🥷ᴘᴏᴡᴇʀᴅ ʙʏ ᴄʏʙᴇʀ ʏᴀᴋᴜᴢᴀ ᴛᴇᴀᴍ⚠️`
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply("An error occurred. Please try again later.");
    }
});  
       
// play
// Only require ytsearch once


// Your bot's logic goes here
cmd({ 
    pattern: "song", 
    alias: ["ytdl", "mp3"], 
    react: "🎶", 
    desc: "Download YouTube song in MP3 format", 
    category: "main", 
    use: '.song < Yt url or Name >', 
    filename: __filename 
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => { 
    try { 
        if (!q) return await reply("Please provide a YouTube URL or song name.");
        
        const yt = await ytsearch(q);
        if (yt.results.length < 1) return reply("No results found!");
        
        let yts = yt.results[0];  
        let apiUrl = `https://api.vreden.my.id/api/ytplaymp3?query=${encodeURIComponent(yts.url)}`;
        
        let response = await fetch(apiUrl);
        let data = await response.json();
        
        if (data.status !== 200 || !data.success || !data.result.url) {
            return reply("Failed to fetch the MP3. Please try again later.");
        }
        
        let ytmsg = `╭━━━〔 *𝐒𝐔𝐋𝐀-𝐌𝐃* 〕━━━┈⊷
┇๏ *Title* -  ${yts.title}
┇๏ *Duration* - ${yts.timestamp}
┇๏ *Views* -  ${yts.views}
┇๏ *Author* -  ${yts.author.name}
┇๏ *Link* -  ${yts.url}
╰────────────────┈⊷

> 🄿🄾🅆🄴🅁🄳 🅱🆈 𝐒𝐔𝐋𝐀_𝐌𝐃 😈`;

        // Send video details
        await conn.sendMessage(from, { image: { url: data.result.thumbnail || '' }, caption: ytmsg }, { quoted: mek });
        
        // Send MP3 file
        await conn.sendMessage(from, { audio: { url: data.result.url }, mimetype: "audio/mp4" }, { quoted: mek });
        
        // Send document file (optional)
        await conn.sendMessage(from, { 
            document: { url: data.result.url }, 
            mimetype: "audio/mp3", 
            fileName: `${yts.title}.mp3`, 
            caption: `> *${yts.title}*\n> 🄿🄾🅆🄴🅁🄳 🅱🆈 𝐒𝐔𝐋𝐀_𝐌𝐃 😈`
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply("An error occurred. Please try again later.");
    }
});



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

