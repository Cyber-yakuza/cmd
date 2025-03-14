const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")

cmd({
    pattern: "settings",
    alias: ["setting"],
    desc: "settings the bot",
    category: "owner",
    react: "⚙",
    filename: __filename


},
async (conn, mek, m, { from, isOwner, quoted, reply }) => {
    if (!isOwner) return reply("❌ You are not the owner!");
    try {
        let desc = ``*╭───╎◈𝗗𝗮𝗿𝗸 𝗻𝗲𝗿𝗼 𝘄𝗮𝘁𝘀𝗮𝗽𝗽 𝗯𝗼𝘁 ◈╎────╮*

> *🥷💀 𝗗𝗮𝗿𝗸 𝗻𝗲𝗿𝗼 𝘄𝗮𝘁𝘀𝗮𝗽𝗽 𝗯𝗼𝘁 𝘀𝗲𝘁𝘁𝗶𝗻𝗴 𝗽𝗮𝗻𝗲𝗹*

- *🔢 Reply Below Number*

✤ ============================ ✤

* *1️⃣ 𝐌𝐎𝐃𝐄*
*1.1 ╎ ⛭  PUBLIC 🗃️*
*1.2 ╎ ⛭  PRIVATE 🔐*
*1.3 ╎ ⛭  GROUPS 🎛️*
*1.4 ╎ ⛭  INBOX 🎭*
✤ ============================ ✤

* *2️⃣ 𝐀𝐔𝐓𝐎 𝐕𝐎𝐈𝐂𝐄*
*2.1 ╎ ⛭ TRUE 🔑*
*2.2 ╎ ⛭ FALSE 🔐*
✤ ============================ ✤

* *3️⃣ 𝐀𝐔𝐓𝐎 𝐒𝐓𝐀𝐓𝐔𝐒 𝐒𝐄𝐄𝐍*
*3.1 ╎ ⛭ TRUE 🔑*
*3.2 ╎ ⛭ FALSE 🔐*
✤ ============================ ✤

* *4️⃣ 𝐀𝐔𝐓𝐎 𝐒𝐓𝐈𝐂𝐊𝐄𝐑*
*4.1 ╎ ⛭ TRUE 🔑*
*4.2 ╎ ⛭ FALSE 🔐*
✤ ============================ ✤

* *5️⃣ 𝐀𝐔𝐓𝐎 𝐑𝐄𝐏𝐋𝐘*
*5.1 ╎ ⛭ TRUE 🔑*
*5.2 ╎ ⛭ FALSE 🔐*
✤ ============================ ✤

* *6️⃣ 𝐁𝐎𝐓 𝐎𝐍𝐋𝐈𝐍𝐄 𝐎𝐅𝐅𝐋𝐈𝐍𝐄*
*6.1 ╎ ⛭ TRUE 🔑*
*6.2 ╎ ⛭ FALSE 🔐*
✤ ============================ ✤

* *7️⃣ 𝐌𝐒𝐆 𝐑𝐄𝐀𝐃*
*7.1 ╎ ⛭ TRUE 🔑*
*7.2 ╎ ⛭ FALSE 🔐*
✤ ============================ ✤

* *8️⃣ 𝐌𝐒𝐆 𝐑𝐄𝐀𝐂𝐓*
*8.1 ╎ ⛭ TRUE 🔑*
*8.2 ╎ ⛭ FALSE 🔐*
✤ ============================ ✤

* *9️⃣ 𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊*
*9.1 ╎ ⛭ TRUE 🔑*
*9.2 ╎ ⛭ FALSE 🔐*
*9.3 ╎ ⛭ REMOVE ‼️*
✤ ============================ ✤

* *1️⃣0️⃣ 𝐀𝐍𝐓𝐈 𝐁𝐎𝐓*
*10.1 ╎ ⛭ TRUE 🔑*
*10.2 ╎ ⛭ FALSE 🔐*
✤ ============================ ✤

* *1️⃣1️⃣ 𝐀𝐔𝐓𝐎 𝐒𝐓𝐀𝐓𝐔𝐒 𝐑𝐄𝐏𝐋𝐘*
*11.1 ╎ ⛭ TRUE 🔑*
*11.2 ╎ ⛭ FALSE 🔐*
✤ ============================ ✤

* *1️⃣2️⃣ 𝐀𝐔𝐓𝐎 𝐒𝐓𝐀𝐓𝐔𝐒 𝐑𝐄𝐀𝐂𝐓*
*12.1 ╎ ⛭ TRUE 🔑*
*12.2 ╎ ⛭ FALSE 🔐*
✤ ============================ ✤

* *1️⃣3️⃣ 𝐀𝐍𝐓𝐈 𝐁𝐎𝐓*
*13.1 ╎ ⛭ TRUE 🔑*
*13.2 ╎ ⛭ FALSE 🔐*
✤ ============================ ✤

* *1️⃣4️⃣ 𝐀𝐍𝐓𝐈 𝐁𝐀𝐃*
*14.1 ╎ ⛭ TRUE 🔑*
*14.2 ╎ ⛭ FALSE 🔐*
✤ ============================ ✤


> 🥷ᴘᴏᴡᴇʀᴅ ʙʏ ᴄʏʙᴇʀ ʏᴀᴋᴜᴢᴀ ᴛᴇᴀᴍ⚠️`;

        const vv = await conn.sendMessage(from, { image: { url: "https://files.catbox.moe/o0cp0d.jpeg"}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1.1':
                        reply(".update MODE:public" );
                        break;
                    case '1.2':               
                        reply(".update MODE:private");
                        break;
                    case '1.3':               
                          reply(".update MODE:group");
                      break;
                    case '1.4':     
                        reply(".update MODE:inbox");
                      break;
                    case '2.1':     
                        reply(".update AUTO_VOICE:true");
                        break;
                    case '2.2':     
                        reply(".update AUTO_VOICE:false");
                    break;
                    case '3.1':    
                        reply(".update AUTO_READ_STATUS:true");
                    break;
                    case '3.2':    
                        reply(".update AUTO_READ_STATUS:false");
                    break;                    
                    case '4.1':    
                        reply(".update AUTO_STICKER:true");
                    break;
                    case '4.2':    
                        reply(".update AUTO_STICKER:false");
                    break;                                        
                    case '5.1':    
                        reply(".update AUTO_REPLY:true");
                    break;
                    case '5.2':    
                        reply(".update AUTO_REPLY:false");
                    break;                        
                    case '6.1':    
                        reply(".update ALLWAYS_OFFLINE:true");
                    break; 
                    case '6.2':    
                        reply(".update ALLWAYS_OFFLINE:false");
                    break;                       
                    case '7.1':    
                        reply(".update READ_MESSAGE:true");
                    break;
                    case '7.2':    
                        reply(".update READ_MESSAGE:false");
                    break;
                    case '8.1':    
                        reply(".update AUTO_REACT:true");
                    break;
                    case '8.2':    
                        reply(".update AUTO_REACT:false");
                    break;
                    case '9.1':    
                        reply(".update ANTI_LINK:true");
                        reply(".update ANTI_LINKK:false");
                    break;
                    case '9.2':    
                        reply(".update ANTI_LINKK:true");
                        reply(".update ANTI_LINK:false");
                    break;
                    case '9.3':    
                        reply(".update ANTI_LINK:false");
                        reply(".update ANTI_LINKK:false");
                    break;
                    case '10.1':
                        reply(".update AUTO_REACT_STATUS:true");
                    break;
                    case '10.2':
                        reply(".update AUTO_REACT_STATUS:fales");
                    break;
                    case '10.3':
                        reply(".update AUTO_STATUS_REPLY:true");
                    break;
                    case '10.4':
                        reply(".update AUTO_STATUS_REPLY:fales");
                    break;

                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
