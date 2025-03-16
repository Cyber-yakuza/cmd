const config = require('../config');
const { cmd } = require('../command');
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

cmd({ 
    pattern: "song", 
    alias: ["ytmp3", "mp3"], 
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
        let apiUrl = `https://api.vreden.my.id/api/ytplaymp3?query=${encodeURIComponent(yts.url)}`;
        
        let response = await fetch(apiUrl);
        let data = await response.json();
        
        if (data.status !== 200 || !data.success || !data.result.download_url) {
            return reply("Failed to fetch the video. Please try again later.");
        }
        
        let ytmsg = `╭━━━〔 > 🥷𝗗𝗔𝗥𝗞 𝗡𝗘𝗥𝗢 〕━━━┈⊷
┇๏ *Title* -  ${yts.title}
┇๏ *Duration* - ${yts.timestamp}
┇๏ *Views* -  ${yts.views}
┇๏ *Author* -  ${yts.author.name}
┇๏ *Link* -  ${yts.url}
╰────────────────┈⊷

> 🥷𝗗𝗔𝗥𝗞 𝗡𝗘𝗥𝗢⚠️`;

        // Send video details
        await conn.sendMessage(from, { image: { url: data.result.thumbnail || '' }, caption: ytmsg }, { quoted: mek });
        
        // Send video file
        await conn.sendMessage(from, { video: { url: data.result.download_url }, mimetype: "audio/mpeg" }, { quoted: mek });
        
        // Send document file (optional)
        await conn.sendMessage(from, { 
            document: { url: data.result.download_url }, 
            mimetype: "audio/mpeg", 
            fileName: `${data.result.title}.mp3`, 
            caption: `> *${yts.title}*\n> 🥷𝗗𝗔𝗥𝗞 𝗡𝗘𝗥𝗢⚠️`
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply("An error occurred. Please try again later.");
    }
});  
