"use strict";
require("dotenv").config();
           
let _import;
    _import = require('../Connect/index.1.js');
           const { Ctx } = _import;
           const { MessageType, mentionedJid, MessageOptions } = Ft.baileys;
           const { scommand, addCmd, getCommandPosition, checkSCommand, getCmd } = _import.Ctx._SCMD
           const { userbot } = _import.Ctx._UserDB
                    var serialize = _import.Ctx.serializeM; 
                    var timestamp = global.Ft.speed();
                    var latensi = global.Ft.speed() - timestamp
           
 module.exports = {
    async chatUpdate(conn, chat) {
        if (!chat.hasNewMessage) return;
            var msg = chat.messages.all()[0];
                try {
                      if (!msg.message) return;
                      if (msg.key && msg.key.remoteJid == 'status@broadcast') return;
                          msg.message = (Object.keys(msg.message)[0] === 'ephemeralMessage') ? msg.message.ephemeralMessage.message: msg.message;
                           if ((Object.keys(msg.message)[0] === 'ephemeralMessage' && JSON.stringify(msg.message).includes('EPHEMERAL_SETTING')) && msg.message.ephemeralMessage.message.protocolMessage.type === 3) {
                          var bugc = true;
                              if (bugc === false) return;
                              if (msg.key.fromMe) return;
                                  conn.groupRemove(msg.key.remoteJid, [msg.participant]).catch((e) => console.log(e));
                                  conn.sendMessage(msg.key.remoteJid, "\n".repeat(420) + `@⁨${msg.participant.split('@')[0]}` + '*Maaf Anda Di Keluarkan*\n\n*Karena Telah Mengirim Virtex*', MessageType.text, {contextInfo:{mentionedJid:[msg.participant + "@s.whatsapp.net"]}});
                        };
                          var isPublic = true;
                              if (!isPublic) {
                              if (!msg.key.fromMe) return;
                        };
                          var m = serialize.smsg(conn, msg);
                              if (m.isBaileys === true) return;
                              if (msg.isBaileys) return;
                                  var type = Object.keys(msg.message)[0]; 
                                  var l = 1;
                                  var prefixRegEx = /^[!&z?=#.+\/]/gi   
                                  var cmd = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') && msg.message[type].selectedButtonId ? msg.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(msg.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(msg.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(msg.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase();
                          var multi = true;
                              if (multi){
                                  var prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#';
                                       } else {
                                  var prefix = userbot.setting.prefix;
                                };
                                  var body = (type === 'conversation' && msg.message.conversation.startsWith(prefix)) ? msg.message.conversation : (type == 'imageMessage') && msg.message[type].caption.startsWith(prefix) ? msg.message[type].caption : (type == 'videoMessage') && msg.message[type].caption.startsWith(prefix) ? msg.message[type].caption : (type == 'extendedTextMessage') && msg.message[type].text.startsWith(prefix) ? msg.message[type].text : (type == 'listResponseMessage') && msg.message[type].singleSelectReply.selectedRowId ? msg.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && msg.message[type].selectedButtonId ? msg.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(msg.message[type].fileSha256.toString('base64')) !== null && getCmd(msg.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(msg.message[type].fileSha256.toString('base64')) : "";
                                  var args = body.trim().split(/ +/).slice(1);
                                  var command = body.toLowerCase().split(' ')[0] || '';
                                  var isCmd = command.startsWith(prefix);
                                  var createName = msg.key.fromMe ? conn.user.jid : conn.contacts[m.sender] || { notify: jid.replace(/@.+/, '') }
                                  var pushName = msg.key.fromMe ? conn.user.name : createName.notify || createName.vname || createName.name || '-'
                                         var fakeimage = await Ft.fs.readFileSync('./src/image/adventure/adventure.1.jpeg')
                                                 var groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : '';
                                           var floc = {
                                       key : {
                                         	         participant : '0@s.whatsapp.net'
                                                 },
                                                     message: {
                                                     liveLocationMessage: {
                                                     caption: `${latensi.toFixed(4)} ms | ${pushName}`,
                                                     ThumbnailUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRKCtPtUkXDSKG8R9YNYEnYQdjyKYiHrDJW6GwLIJgUn62zM7qxKhaWv8&s=10"
                                                  }
                                               }
                                            }
                                              var { userbot } = _import.Ctx._UserDB;
                                              var footerText = userbot.setting.packname;
                                           var ftrol = {
                                       key: {
                                         	         participant : '0@s.whatsapp.net', 
                                         	         remoteJid: '6289523258649-1604595598@g.us',
                                                 },
                                                     message: { 
                                                     orderMessage: { 
                                                     itemCount: 99,
                                                     status: 200,
                                                     thumbnail: fakeimage,
                                                     surface: 200,
                                                     message: `${latensi.toFixed(4)} ms | ${pushName}`,
                                                     orderTitle: footerText,
                                                     sellerJid: "0@s.whatsapp.net",
                                                   },
                                                },
                                        };
                                     var listButton = type == ('listResponseMessage') ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ''
                                              if (listButton == 'MenuLOCATION') {
                                                    var { send3ButtonLoc } = _import.Ctx.serializeM;
                                                    var { menu } = _import.Ctx._write;
                                                    var { userbot } = _import.Ctx._UserDB;
                                                              var footerText = userbot.setting.packname;
                                                              var teks = menu(prefix, l);
                                                           conn.send3ButtonLoc(m.chat, await ( await Ft.fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUh5i0W7GoK27gGgKNgXcryDwNidNO1ixUTw&usqp=CAU')).buffer(), teks, footerText, 'Credits', 'Credits', 'Rules', 'Rules', 'Status', 'Status', m)
                                                       };
                                              if (listButton == 'MenuCATALOG') {
                                                    var { menu } = _import.Ctx._write;
                                                    var { userbot } = _import.Ctx._UserDB;
                                                              var teks = menu(prefix, l);
                                                              var res = conn.prepareMessageFromContent(m.chat,{ "orderMessage": { "itemCount": 321, "message": teks, "thumbnail": fakeimage, "surface": 'CATALOG' }}, {quoted:ftrol, })
                                                           conn.relayWAMessage(res)
                                                       };
                                              if (listButton == 'MenuCATALOG_v2') {
                                              m.reply("Belum Detect")
                                                       };
                                              if (listButton == 'MenuPPTX') {
                                                    var { menu } = _import.Ctx._write;
                                                    var { userbot } = _import.Ctx._UserDB;
                                                              var footerText = userbot.setting.packname;
                                                              var author = userbot.setting.author;
                                                              var teks = menu(prefix, l);
                                                           conn.sendMessage(m.chat, { contentText: teks, buttons: [{buttonId: 'Credits', buttonText: {displayText: 'Credits️'}, type: 1},{buttonId: 'Rules', buttonText: {displayText: 'Rules'}, type: 1},{buttonId: 'Status' , buttonText: {displayText: 'Status'}, type: 1}], "headerType": "DOCUMENT", "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc", "mimetype": "application/vnd.openxmlformats-officedocument.presentationml.presentation", "title": footerText, "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=", "fileLength": 999999999999, "pageCount": 999, "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=", "fileName": author, "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=", "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC", "mediaKeyTimestamp": "1634472176", "jpegThumbnail": Ft.fs.readFileSync('./src/image/action/action.1.jpeg')}}, MessageType.buttonsMessage, { quoted: floc, thumbnail: Ft.fs.readFileSync('./src/image/action/action.2.jpeg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: `${Ft.time}`, body: `${Ft.tanggal}\n⎇ ${Ft.waktu} ${Ft.week} ${Ft.weton}`, thumbnail: Ft.fs.readFileSync('./src/image/action/action.3.jpeg'), mediaType:"2", previewType: "VIDEO", mediaUrl: "https://youtu.be/nLEYHaaB6x0"}}})
                                                       };
                                              if (listButton == 'MenuXLSX') {
                                                    var { menu } = _import.Ctx._write;
                                                    var { userbot } = _import.Ctx._UserDB;
                                                              var footerText = userbot.setting.packname;
                                                              var author = userbot.setting.author;
                                                              var teks = menu(prefix, l);
                                                           conn.sendMessage(m.chat, { contentText: teks, buttons: [{buttonId: 'Credits', buttonText: {displayText: 'Credits️'}, type: 1},{buttonId: 'Rules', buttonText: {displayText: 'Rules'}, type: 1},{buttonId: 'Status' , buttonText: {displayText: 'Status'}, type: 1}], "headerType": "DOCUMENT", "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc", "mimetype": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "title": footerText, "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=", "fileLength": 999999999999, "pageCount": 999, "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=", "fileName": author, "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=", "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC", "mediaKeyTimestamp": "1634472176", "jpegThumbnail": Ft.fs.readFileSync('./src/image/action/action.4.jpeg')}}, MessageType.buttonsMessage, { quoted: floc, thumbnail: Ft.fs.readFileSync('./src/image/action/action.5.jpeg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: `${Ft.time}`, body: `${Ft.tanggal}\n⎇ ${Ft.waktu} ${Ft.week} ${Ft.weton}`, thumbnail: Ft.fs.readFileSync('./src/image/action/action.6.jpeg'), mediaType:"2", previewType: "VIDEO", mediaUrl: "https://youtu.be/nLEYHaaB6x0"}}})
                                                       };
                                              if (listButton == 'MenuDOCX') {
                                                    var { menu } = _import.Ctx._write;
                                                    var { userbot } = _import.Ctx._UserDB;
                                                              var footerText = userbot.setting.packname;
                                                              var author = userbot.setting.author;
                                                              var teks = menu(prefix, l);
                                                           conn.sendMessage(m.chat, { contentText: teks, buttons: [{buttonId: 'Credits', buttonText: {displayText: 'Credits️'}, type: 1},{buttonId: 'Rules', buttonText: {displayText: 'Rules'}, type: 1},{buttonId: 'Status' , buttonText: {displayText: 'Status'}, type: 1}], "headerType": "DOCUMENT", "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc", "mimetype": "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "title": footerText, "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=", "fileLength": 999999999999, "pageCount": 999, "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=", "fileName": author, "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=", "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC", "mediaKeyTimestamp": "1634472176", "jpegThumbnail": Ft.fs.readFileSync('./src/image/action/action.7.jpeg')}}, MessageType.buttonsMessage, { quoted: floc, thumbnail: Ft.fs.readFileSync('./src/image/action/action.8.jpeg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: `${Ft.time}`, body: `${Ft.tanggal}\n⎇ ${Ft.waktu} ${Ft.week} ${Ft.weton}`, thumbnail: Ft.fs.readFileSync('./src/image/action/action.9.jpeg'), mediaType:"2", previewType: "VIDEO", mediaUrl: "https://youtu.be/nLEYHaaB6x0"}}})
                                                       };
                                              if (listButton == 'MenuZIP') {
                                                    var { menu } = _import.Ctx._write;
                                                    var { userbot } = _import.Ctx._UserDB;
                                                              var footerText = userbot.setting.packname;
                                                              var author = userbot.setting.author;
                                                              var teks = menu(prefix, l);
                                                           conn.sendMessage(m.chat, { contentText: teks, buttons: [{buttonId: 'Credits', buttonText: {displayText: 'Credits️'}, type: 1},{buttonId: 'Rules', buttonText: {displayText: 'Rules'}, type: 1},{buttonId: 'Status' , buttonText: {displayText: 'Status'}, type: 1}], "headerType": "DOCUMENT", "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc", "mimetype": "application/zip", "title": footerText, "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=", "fileLength": 999999999999, "pageCount": 999, "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=", "fileName": author, "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=", "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC", "mediaKeyTimestamp": "1634472176", "jpegThumbnail": Ft.fs.readFileSync('./src/image/action/action.10.jpeg')}}, MessageType.buttonsMessage, { quoted: floc, thumbnail: Ft.fs.readFileSync('./src/image/action/action.11.jpeg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: `${Ft.time}`, body: `${Ft.tanggal}\n⎇ ${Ft.waktu} ${Ft.week} ${Ft.weton}`, thumbnail: Ft.fs.readFileSync('./src/image/action/action.12.jpeg'), mediaType:"2", previewType: "VIDEO", mediaUrl: "https://youtu.be/nLEYHaaB6x0"}}})
                                                       };
                                              if (listButton == 'MenuPDF') {
                                                    var { menu } = _import.Ctx._write;
                                                    var { userbot } = _import.Ctx._UserDB;
                                                              var footerText = userbot.setting.packname;
                                                              var author = userbot.setting.author;
                                                              var teks = menu(prefix, l);
                                                           conn.sendMessage(m.chat, { contentText: teks, buttons: [{buttonId: 'Credits', buttonText: {displayText: 'Credits️'}, type: 1},{buttonId: 'Rules', buttonText: {displayText: 'Rules'}, type: 1},{buttonId: 'Status' , buttonText: {displayText: 'Status'}, type: 1}], "headerType": "DOCUMENT", "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc", "mimetype": "application/pdf", "title": footerText, "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=", "fileLength": 999999999999, "pageCount": 999, "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=", "fileName": author, "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=", "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC", "mediaKeyTimestamp": "1634472176", "jpegThumbnail": Ft.fs.readFileSync('./src/image/action/action.13.jpeg')}}, MessageType.buttonsMessage, { quoted: floc, thumbnail: Ft.fs.readFileSync('./src/image/action/action.14.jpeg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: `${Ft.time}`, body: `${Ft.tanggal}\n⎇ ${Ft.waktu} ${Ft.week} ${Ft.weton}`, thumbnail: Ft.fs.readFileSync('./src/image/action/action.15.jpeg'), mediaType:"2", previewType: "VIDEO", mediaUrl: "https://youtu.be/nLEYHaaB6x0"}}})
                                                       };
                                          var selectbutton = type == ('buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : ''
                                              if (selectbutton == 'Rules') {
                                                    var { sendButtonLoc } = _import.Ctx.serializeM;
                                                    var { rules } = _import.Ctx._write;
                                                    var { userbot } = _import.Ctx._UserDB;
                                                              var footerText = userbot.setting.packname;
                                                              var teks = rules(prefix, l)
                                                           conn.sendButtonLoc(m.chat, await ( await Ft.fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHRWun54ErKLGHzBc7VtNoCvIMHwgaZkEWtQ&usqp=CAU')).buffer(), teks, footerText, 'Menu', 'Menu', m) 
                                                       };
                                               if (selectbutton == 'Menu') {
                                                    var { menu } = _import.Ctx._write;
                                                    var { userbot } = _import.Ctx._UserDB;
                                                              var footerText = userbot.setting.packname;
                                                              var listMsg = {
                                                                     title: "「 *Sean 𝗕𝗢𝗧* 」", 
                                                                     buttonText: 'Daftar Menu',
                                                                     footerText: footerText,
                                                                     description: `\nHai kak @${m.sender.split('@')[0]}, Silahkan pilih menu disini`,
                                                                     sections: [
                                                                     {
                                                                        "title": `Originally Type 1`, 
                                                                        "rows" : [
                                                                     {
                                                                         "title": "𝗠𝗘𝗡𝗨 𝗟𝗢𝗖𝗔𝗧𝗜𝗢𝗡 𝗕𝗨𝗧𝗧𝗢𝗡",
                                                                         "rowId": "MenuLOCATION"
                                                                     }]
                                                                     },{
                                                                         "title": `Catalog Type 1`, 
                                                                         "rows" : [
                                                                     {
                                                                         "title": "𝗠𝗘𝗡𝗨 𝗖𝗔𝗧𝗔𝗟𝗢𝗚",
                                                                         "description": "\nKatalog adalah daftar koleksi sebuah pusat dokumentasi atau beberapa pusat dokumentasi yang disusun menurut sistem tertentu.", 
                                                                         "rowId": "MenuCATALOG"
                                                                     }]
                                                                     },{
                                                                         "title": `Catalog Type 2`, 
                                                                         "rows" : [
                                                                     {
                                                                         "title": "𝗠𝗘𝗡𝗨 𝗖𝗔𝗧𝗔𝗟𝗢𝗚 𝗣𝗥𝗢𝗗𝗨𝗖𝗧",
                                                                         "description": "\nKatalog Produk adalah kumpulan produk dan informasi harga mereka. ... Buat daftar diskon untuk menawarkan produk dan layanan dengan harga yang berbeda, tergantung pada jumlah yang dibeli. Mengkonfigurasikan daftar diskon. Mendefinisikan pengukuran atau kuantitas produk Anda akan tersedia.", 
                                                                         "rowId": "MenuCATALOG_v2"
                                                                     }]
                                                                     },{
                                                                         "title": `Dokument Type 1`, 
                                                                         "rows" : [
                                                                     {
                                                                         "title": "𝗠𝗘𝗡𝗨 𝗣𝗣𝗧𝗫",
                                                                         "description": "\nMicrosoft PowerPoint atau Microsoft Office PowerPoint atau PowerPoint adalah sebuah program komputer untuk presentasi yang dikembangkan oleh Microsoft di dalam paket aplikasi kantoran mereka, Microsoft Office, selain Microsoft Word, Excel, Access dan beberapa program lainnya.", 
                                                                         "rowId": "MenuPPTX"
                                                                     }]
                                                                     },{
                                                                         "title": `Dokument Type 2`,
                                                                         "rows": [ 
                                                                     {
                                                                         "title": "𝗠𝗘𝗡𝗨 𝗫𝗟𝗦𝗫",
                                                                         "description": "\nData atau file dengan ekstensi .XLSX adalah sebuah file Microsoft Excel Open XML Spreadsheet yang dibuat memakai aplikasi Microsoft Excel. Namun, karena formatnya open XML, file ini bisa dibuka oleh sejumlah aplikasi, seperti Open Office, Google Docs, hingga Apple Numbers.", 
                                                                         "rowId": "MenuXLSX"
                                                                     }]
                                                                     },{
                                                                         "title": `Dokument Type 3`,
                                                                         "rows": [ 
                                                                     {
                                                                         "title": "𝗠𝗘𝗡𝗨 𝗗𝗢𝗖𝗫",
                                                                         "description": "\nDilansir dari Hubspot, Google Docs adalah layanan pengolah kata yang diberikan kepada pengguna Google secara gratis. Singkatnya, jika kamu sudah familiar dengan Microsoft Word, maka Google Docs adalah versi lain yang memungkinkan kamu untuk membuat, mengedit, dan membagikan dokumen tertulis secara online.", 
                                                                         "rowId": "MenuDOCX"
                                                                     }]
                                                                     },{
                                                                         "title": `Dokument Type 4`,
                                                                         "rows": [ 
                                                                     {
                                                                         "title": "𝗠𝗘𝗡𝗨 𝗭𝗜𝗣",
                                                                         "description": "\nZIP merupakan format file arsip yang digunakan secara luas untuk mengompresi atau memampatkan satu atau beberapa file bersama-sama menjadi ke dalam satu lokasi sehingga mengurangi ukurannya secara keseluruhan serta memudahkan pemindahan file tersebut. File ZIP bekerja serupa dengan folder standar pada komputer Anda.", 
                                                                         "rowId": "MenuZIP"
                                                                     }]
                                                                     },{
                                                                         "title": `Dokument Type 5`,
                                                                         "rows": [ 
                                                                     {
                                                                         "title": "𝗠𝗘𝗡𝗨 𝗣𝗗𝗙",
                                                                         "description": "\nPortable Document Format adalah sebuah format berkas yang dibuat oleh Adobe Systems pada tahun 1993 untuk keperluan pertukaran dokumen digital. Format PDF digunakan untuk merepresentasikan dokumen dua dimensi yang meliputi teks, huruf, citra dan grafik vektor dua dimensi.", 
                                                                         "rowId": "MenuPDF"
                                                                     }]
                                                                   }
                                                                 ],
                                                              listType: 1
                                                           }
                                                           conn.sendMessage(m.chat, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [m.sender]}, quoted:msg })
                                                       };
                                               if (selectbutton == 'Credits') {
                                                    var { sendButtonLoc } = _import.Ctx.serializeM;
                                                    var { credits } = _import.Ctx._write;
                                                    var { userbot } = _import.Ctx._UserDB;
                                                              var footerText = userbot.setting.packname;
                                                              var gaya = global.config.style.satu;
                                                              var teks = credits(gaya);
                                                           conn.sendButtonLoc(m.chat, await ( await Ft.fetch('https://i.ibb.co/7Y56B5L/images.png')).buffer(), teks, footerText, 'Menu', 'Menu', m) 
                                                       };
                                               if (selectbutton == 'Status') {
                                                    var { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = conn.user.phone;
                                                    var { sendButtonLoc } = _import.Ctx.serializeM;
                                                    var { userbot } = _import.Ctx._UserDB;
                                                    var { status } = _import.Ctx._write;
                                                    var { count } = _import.Ctx._moment
                                                              var footerText = userbot.setting.packname;
                                                              var gaya = global.config.style.satu;
                                                              var groups = conn.chats.array.filter(v => v.jid.endsWith('g.us'));
                                                              var privat = conn.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'));
                                                              var totalChat = await conn.chats.all();
                                                              var ramTwo = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
                                                              var teks = "「 *𝗦𝗧𝗔𝗧𝗨𝗦 𝗕𝗢𝗧* 」\n\n"
                                                                     teks += `${gaya} Group Chats : ${groups.length}\n`
                                                                     teks += `${gaya} Private Chats : ${privat.length}\n`
                                                                     teks += `${gaya} Total Chats : ${totalChat.length}\n`
                                                                     teks += `${gaya} Speed : ${latensi.toFixed(4)} ms\n`
                                                                     teks += `${gaya} Public : ${isPublic ? 'true' : 'false'}\n`
                                                                     teks += `${gaya} Multi Prefix : ${multi ? 'true' : 'false'}\n\n\n`
                                                                     teks += "「 *𝗦𝗧𝗔𝗧𝗨𝗦 𝗗𝗘𝗩𝗜𝗖𝗘* 」\n\n"
                                                                     teks += `${gaya} Total Ram : ${ramTwo}\n`
                                                                     teks += `${gaya} Platform : ${Ft.os.platform()}\n`
                                                                     teks += `${gaya} Hostname : ${Ft.os.hostname()}\n`
                                                                     teks += `${gaya} Merk Device : ${device_manufacturer}\n`
                                                                     teks += `${gaya} Version WhatsApp : ${wa_version}\n`
                                                                     teks += `${gaya} Version OS : ${os_version}\n`
                                                                     teks += `${gaya} Version Device : ${device_model}\n`
                                                                     teks += `${gaya} MCC : ${mcc}\n`
                                                                     teks += `${gaya} MNC : ${mnc}\n`   
                                                           conn.sendButtonLoc(m.chat, await ( await Ft.fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTHTRQ9hMI16BPYoMh9AoP1anRUp-IHnXxGg&usqp=CAU')).buffer(), teks, footerText, 'Menu', 'Menu', m) 
                                                    };
                                                       if (isCmd && m.isGroup) {
                                                            console.log(Ft.chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), Ft.chalk.bold.rgb(153, 255, 153)(command), Ft.chalk.bold.rgb(204, 204, 0)("from"), Ft.chalk.bold.rgb(153, 255, 204)(pushName), Ft.chalk.bold.rgb(204, 204, 0)("in"), Ft.chalk.bold.rgb(255, 178, 102)(groupMetadata.subject));
                                                    };
                                                       if (isCmd && !m.isGroup) {
                                                            console.log(Ft.chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), Ft.chalk.bold.rgb(153, 255, 153)(command), Ft.chalk.bold.rgb(204, 204, 0)("from"), Ft.chalk.bold.rgb(153, 255, 204)(pushName), Ft.chalk.bold.rgb(204, 204, 0)("in"), Ft.chalk.bold.rgb(255, 178, 102)("Private Chat"));
                                                    };
                                                       if (isCmd && m.isGroup && selectbutton) {
                                                            console.log(Ft.chalk.chalk.bold.rgb(255, 215, 0)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(252, 201, 185)('SBT') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.white('IdButton:'), Ft.chalk.bold.rgb(181, 0, 148)(selectbutton), Ft.chalk.white('From:'), Ft.chalk.bold.rgb(153, 102, 204)(pushName));
                                                    };
                                                       if (isCmd && !m.isGroup && selectbutton) {
                                                             console.log(Ft.chalk.chalk.bold.rgb(255, 215, 0)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(252, 201, 185)('SBT') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.white('IdButton:'), Ft.chalk.bold.rgb(181, 0, 148)(selectbutton), Ft.chalk.white('From:'), Ft.chalk.bold.rgb(153, 102, 204)(pushName), Ft.chalk.bold.rgb(204, 204, 0)("in"), Ft.chalk.bold.rgb(255, 178, 102)("Private Chat"));
                                                    };
                                                       if (isCmd && m.isGroup && listButton) {
                                                            console.log(Ft.chalk.bold.rgb(255, 255, 167)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(252, 201, 185)('LMS') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.white('IdList:'), Ft.chalk.bold.rgb(224, 173, 66)(listButton), Ft.chalk.white('From:'), Ft.chalk.bold.rgb(0, 170, 255)(pushName));
                                                    };
                                                       if (isCmd && !m.isGroup && listButton) {
                                                             console.log(Ft.chalk.bold.rgb(255, 255, 167)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(252, 201, 185)('LMS') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.white('IdList:'), Ft.chalk.bold.rgb(224, 173, 66)(listButton), Ft.chalk.white('From:'), Ft.chalk.bold.rgb(0, 170, 255)(pushName), Ft.chalk.bold.rgb(204, 204, 0)("in"), Ft.chalk.bold.rgb(255, 178, 102)("Private Chat"));
                                                    };
                                                       switch (command) {
                                                                      case prefix + 'menu': {
                                                                            var { menu } = _import.Ctx._write;
                                                                            var { userbot } = _import.Ctx._UserDB;
                                                                                   var footerText = userbot.setting.packname;
                                                                                   var listMsg = {
                                                                                          title: "「 *Sean 𝗕𝗢𝗧* 」", 
                                                                                          buttonText: 'Daftar Menu',
                                                                                          footerText: footerText,
                                                                                          description: `\nHai kak @${m.sender.split('@')[0]}, Silahkan pilih menu disini`,
                                                                                          sections: [
                                                                                       {
                                                                                          "title": `Originally Type 1`, 
                                                                                          "rows" : [
                                                                                       {
                                                                                          "title": "𝗠𝗘𝗡𝗨 𝗟𝗢𝗖𝗔𝗧𝗜𝗢𝗡 𝗕𝗨𝗧𝗧𝗢𝗡",
                                                                                          "rowId": "MenuLOCATION"
                                                                                       }]
                                                                                       },{
                                                                                          "title": `Catalog Type 1`, 
                                                                                          "rows" : [
                                                                                       {
                                                                                          "title": "𝗠𝗘𝗡𝗨 𝗖𝗔𝗧𝗔𝗟𝗢𝗚",
                                                                                          "description": "\nKatalog adalah daftar koleksi sebuah pusat dokumentasi atau beberapa pusat dokumentasi yang disusun menurut sistem tertentu.", 
                                                                                          "rowId": "MenuCATALOG"
                                                                                       }]
                                                                                       },{
                                                                                          "title": `Catalog Type 2`, 
                                                                                          "rows" : [
                                                                                       {
                                                                                          "title": "𝗠𝗘𝗡𝗨 𝗖𝗔𝗧𝗔𝗟𝗢𝗚 𝗣𝗥𝗢𝗗𝗨𝗖𝗧",
                                                                                          "description": "\nKatalog Produk adalah kumpulan produk dan informasi harga mereka. ... Buat daftar diskon untuk menawarkan produk dan layanan dengan harga yang berbeda, tergantung pada jumlah yang dibeli. Mengkonfigurasikan daftar diskon. Mendefinisikan pengukuran atau kuantitas produk Anda akan tersedia.", 
                                                                                          "rowId": "MenuCATALOG_v2"
                                                                                       }]
                                                                                       },{
                                                                                          "title": `Dokument Type 1`, 
                                                                                          "rows" : [
                                                                                       {
                                                                                          "title": "𝗠𝗘𝗡𝗨 𝗣𝗣𝗧𝗫",
                                                                                          "description": "\nMicrosoft PowerPoint atau Microsoft Office PowerPoint atau PowerPoint adalah sebuah program komputer untuk presentasi yang dikembangkan oleh Microsoft di dalam paket aplikasi kantoran mereka, Microsoft Office, selain Microsoft Word, Excel, Access dan beberapa program lainnya.", 
                                                                                          "rowId": "MenuPPTX"
                                                                                       }]
                                                                                       },{
                                                                                          "title": `Dokument Type 2`,
                                                                                          "rows": [ 
                                                                                       {
                                                                                          "title": "𝗠𝗘𝗡𝗨 𝗫𝗟𝗦𝗫",
                                                                                          "description": "\nData atau file dengan ekstensi .XLSX adalah sebuah file Microsoft Excel Open XML Spreadsheet yang dibuat memakai aplikasi Microsoft Excel. Namun, karena formatnya open XML, file ini bisa dibuka oleh sejumlah aplikasi, seperti Open Office, Google Docs, hingga Apple Numbers.", 
                                                                                          "rowId": "MenuXLSX"
                                                                                       }]
                                                                                       },{
                                                                                          "title": `Dokument Type 3`,
                                                                                          "rows": [ 
                                                                                       {
                                                                                          "title": "𝗠𝗘𝗡𝗨 𝗗𝗢𝗖𝗫",
                                                                                          "description": "\nDilansir dari Hubspot, Google Docs adalah layanan pengolah kata yang diberikan kepada pengguna Google secara gratis. Singkatnya, jika kamu sudah familiar dengan Microsoft Word, maka Google Docs adalah versi lain yang memungkinkan kamu untuk membuat, mengedit, dan membagikan dokumen tertulis secara online.", 
                                                                                          "rowId": "MenuDOCX"
                                                                                       }]
                                                                                       },{
                                                                                          "title": `Dokument Type 4`,
                                                                                          "rows": [ 
                                                                                       {
                                                                                          "title": "𝗠𝗘𝗡𝗨 𝗭𝗜𝗣",
                                                                                          "description": "\nZIP merupakan format file arsip yang digunakan secara luas untuk mengompresi atau memampatkan satu atau beberapa file bersama-sama menjadi ke dalam satu lokasi sehingga mengurangi ukurannya secara keseluruhan serta memudahkan pemindahan file tersebut. File ZIP bekerja serupa dengan folder standar pada komputer Anda.", 
                                                                                          "rowId": "MenuZIP"
                                                                                       }]
                                                                                       },{
                                                                                          "title": `Dokument Type 5`,
                                                                                          "rows": [ 
                                                                                       {
                                                                                          "title": "𝗠𝗘𝗡𝗨 𝗣𝗗𝗙",
                                                                                          "description": "\nPortable Document Format adalah sebuah format berkas yang dibuat oleh Adobe Systems pada tahun 1993 untuk keperluan pertukaran dokumen digital. Format PDF digunakan untuk merepresentasikan dokumen dua dimensi yang meliputi teks, huruf, citra dan grafik vektor dua dimensi.", 
                                                                                          "rowId": "MenuPDF"
                                                                                       }]
                                                                                     }
                                                                                   ],
                                                                                      listType: 1
                                                                                    }
                                                                                       conn.sendMessage(m.chat, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [m.sender]}, quoted:msg })
                                                                                    };
                                                                            break;
                                                                      case prefix + 'uptime': {
                                                                                  var gaya = global.config.style.satu;
                                                                                       conn.sendMessage(msg.key.remoteJid, `${gaya} Uptime : ${Ft.kyun(Ft.os.uptime())}`, MessageType.text, { quoted: msg, contextInfo: { forwardingScore: 999, isForwarded: true, sendEphemeral: true, externalAdReply: { title: `${Ft.time}`, body: `${Ft.tanggal}\n⎇ ${Ft.waktu} ${Ft.week} ${Ft.weton}`, thumbnail: fakeimage, mediaType: 2, previewType: "VIDEO", mediaUrl: "https://youtu.be/3E-mIsZ0dNA"}}})
                                                                                    };
                                                                            break
                                                                      case prefix + 'speed': {
                                                                                  var gaya = global.config.style.satu;
                                                                                       conn.sendMessage(msg.key.remoteJid, `${gaya} Speed : ${latensi.toFixed(4)} Second`, MessageType.text, { quoted: msg, contextInfo: { forwardingScore: 999, isForwarded: true, sendEphemeral: true, externalAdReply: { title: `${Ft.time}`, body: `${Ft.tanggal}\n⎇ ${Ft.waktu} ${Ft.week} ${Ft.weton}`, thumbnail: fakeimage, mediaType: 2, previewType: "VIDEO", mediaUrl: "https://youtu.be/3E-mIsZ0dNA"}}}) 
                                                                                    };
                                                                            break;
                                                                      case prefix + 'delete': {
                                                                            var { userbot } = _import.Ctx._UserDB;
                                                                                  var onlyG = userbot.mess.KhususGrup
                                                                            if (!m.isGroup) return m.reply(onlyG)
                                                                                       conn.deleteMessage(m.chat, { id: msg.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: m.chat, fromMe: true })
                                                                                    };
                                                                      break;
                                                                      case prefix + 'rules': {
                                                                            var { sendButtonLoc } = _import.Ctx.serializeM;
                                                                            var { rules } = _import.Ctx._write;
                                                                            var { userbot } = _import.Ctx._UserDB;
                                                                                  var footerText = userbot.setting.packname;
                                                                                  var teks = rules(prefix, l);
                                                                                       conn.sendButtonLoc(m.chat, await ( await Ft.fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHRWun54ErKLGHzBc7VtNoCvIMHwgaZkEWtQ&usqp=CAU')).buffer(), teks, footerText, 'Menu', 'Menu', m) 
                                                                                    } 
                                                                            break;
                                                                      case prefix + 'credits': {
                                                                            var { sendButtonLoc } = _import.Ctx.serializeM;
                                                                            var { credits } = _import.Ctx._write;
                                                                            var { userbot } = _import.Ctx._UserDB;
                                                                                  var footerText = userbot.setting.packname;
                                                                                  var gaya = global.config.style.satu;
                                                                                  var teks = credits(gaya);
                                                                                       conn.sendButtonLoc(m.chat, await ( await Ft.fetch('https://i.ibb.co/7Y56B5L/images.png')).buffer(), teks, footerText, 'Menu', 'Menu', m) 
                                                                                    } 
                                                                            break;
                                                                      case prefix + 'status': {
                                                                            var { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = conn.user.phone;
                                                                            var { sendButtonLoc } = _import.Ctx.serializeM;
                                                                            var { userbot } = _import.Ctx._UserDB;
                                                                            var { status } = _import.Ctx._write;
                                                                            var { count } = _import.Ctx._moment
                                                                                  var footerText = userbot.setting.packname;
                                                                                  var gaya = global.config.style.satu;
                                                                                  var groups = conn.chats.array.filter(v => v.jid.endsWith('g.us'));
                                                                                  var privat = conn.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'));
                                                                                  var totalChat = await conn.chats.all();
                                                                                  var ramTwo = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
                                                                                  var teks = "「 *𝗦𝗧𝗔𝗧𝗨𝗦 𝗕𝗢𝗧* 」\n\n"
                                                                                         teks += `${gaya} Group Chats : ${groups.length}\n`
                                                                                         teks += `${gaya} Private Chats : ${privat.length}\n`
                                                                                         teks += `${gaya} Total Chats : ${totalChat.length}\n`
                                                                                         teks += `${gaya} Speed : ${latensi.toFixed(4)} ms\n`
                                                                                         teks += `${gaya} Public : ${isPublic ? 'true' : 'false'}\n`
                                                                                         teks += `${gaya} Multi Prefix : ${multi ? 'true' : 'false'}\n\n\n`
                                                                                         teks += "「 *𝗦𝗧𝗔𝗧𝗨𝗦 𝗗𝗘𝗩𝗜𝗖𝗘* 」\n\n"
                                                                                         teks += `${gaya} Total Ram : ${ramTwo}\n`
                                                                                         teks += `${gaya} Platform : ${Ft.os.platform()}\n`
                                                                                         teks += `${gaya} Hostname : ${Ft.os.hostname()}\n`
                                                                                         teks += `${gaya} Merk Device : ${device_manufacturer}\n`
                                                                                         teks += `${gaya} Version WhatsApp : ${wa_version}\n`
                                                                                         teks += `${gaya} Version OS : ${os_version}\n`
                                                                                         teks += `${gaya} Version Device : ${device_model}\n`
                                                                                         teks += `${gaya} MCC : ${mcc}\n`
                                                                                         teks += `${gaya} MNC : ${mnc}\n`              
                                                                                       conn.sendButtonLoc(m.chat, await ( await Ft.fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTHTRQ9hMI16BPYoMh9AoP1anRUp-IHnXxGg&usqp=CAU')).buffer(), teks, footerText, 'Menu', 'Menu', m) 
                                                                                    } 
                                                                            break;
                                                                      case prefix + 'listonline': {
                                                                             let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
                                                                             try {
                                                                                      let online = [
                                                                                 ...Object.keys(conn.chats.get(id).presences),
                                                                                       conn.user.jid,
                                                                                           ];
                                                                                                m.reply(m.chat, "┌─〔 Daftar Online 〕\n" + online.map((v) => "├ @" + v.replace(/@.+/, "")).join`\n` + "\n└────", m, { contextInfo: { mentionedJid: online }, 
                                                                                            });
                                                                                          } catch (e) {m.reply(""); 
                                                                                       }
                                                                                    }
                                                                            break;
                                                                      case prefix + 'sider': {
                                                                             if (!m.quoted) throw `Balas pesan bot!`;
                                                                                   let members = 
                                                                              m.quoted.chat.endsWith("g.us") 
                                                                          ? (await conn.groupMetadata(m.quoted.chat))
                                                                      .participants.length - 1 
                                                                 : m.quoted.chat.endsWith("@broadcast") 
                                                          ? -1 
                                                    : 1;
                                        let { reads, 
                               deliveries 
                       } = await conn.messageInfo(
                m.quoted.chat, 
      m.quoted.id);
let txt = `*Dibaca oleh:*
${reads
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `@${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`)
  .join("\n")}
${members > 1 ? `${members - reads.length} tersisa` : ""}

*Terkirim ke:*
${deliveries
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`)
  .join("\n")}
${members > 1 ? `${members - reads.length - deliveries.length} tersisa` : ""}
`.trim();
        m.reply(txt, null, {
                                         contextInfo: {
                                                                   mentionedJid: conn.parseMention(txt),
                                                                         },
                                                                               });
                                                                                      }
                                                                            break;
                                                                      case prefix + 'listonline2': {
                                                                            var { userbot } = _import.Ctx._UserDB;
                                                                                  var onlyG = userbot.mess.KhususGrup
                                                                                        if (!m.isGroup) return m.reply(onlyG)
                                                                                try {
                                                                                         let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                                                                                         let online = [...Object.keys(conn.chats.get(ido).presences), conn.user.jid]
                                                                                     conn.sendMessage(m.chat, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, MessageType.text, {
                                                                                               quoted: msg,
                                                                                               contextInfo: {
                                                                                               mentionedJid: online
                                                                                               }
                                                                                            })
                                                                                         } catch (e) {
                                                                                           m.reply(`${e}`)
                                                                                         }
                                                                                      }
                                                                            break;
                                                                      case prefix + 'q': {
                                                                             if (!m.quoted) return m.reply("reply message!");
                                                                                   let qse = conn.serializeM(await m.getQuotedObj());
                                                                                        if (!qse.quoted)
                                                                                              return m.reply("the message you replied does not contain a reply!");
                                                                                         await qse.quoted.copyNForward(m.chat, true);
                                                                                    }
                                                                            break;
                                                                      case prefix +  'kick': {
                                                                            var { userbot } = _import.Ctx._UserDB;
                                                                                     var onlyG = userbot.mess.KhususGrup;
                                                                                     var onlyO = userbot.mess.KhususOwner;
                                                                                     var ses = userbot.mess.success;
                                                                                      if (!m.isGroup) return m.reply(onlyG);
                                                                                      if (!msg.key.fromMe) return m.reply(onlyO);
                                                                                           if (
                                                                                                  msg.message.extendedTextMessage === undefined ||
                                                                                                  msg.message.extendedTextMessage === null
                                                                                               )
                                                                                          return m.reply("Tag target yang ingin di kick!");
                                                                                     var mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid;
                                                                                     if (mentioned.length > 1) {
                                                                                           conn.groupRemove(from, mentioned);
                                                                                        m.reply(ses);
                                                                                 } else if (mentioned.length < 1) {
                                                                                     var anu = msg.message.extendedTextMessage.contextInfo.participant;
                                                                                           conn.groupRemove(m.chat, [anu]);
                                                                                                m.reply(ses);
                                                                                 } else {
                                                                                                conn.groupRemove(m.chat, mentioned);
                                                                                            m.reply(ses);
                                                                                        }
                                                                                     }
                                                                            break;  
                                                                      case prefix + 'runtime': {
                                                                            var run = process.uptime()
                                                                            var teks = Ft.runtime(run)
                                                                            				   conn.sendMessage(m.chat, teks, MessageType.text, { quoted: msg })
                                                                            				    	}
                                                                            break;
                                                                        }
                                               } catch (_) {
                                                     _ = String(_);
                                        if (!_.includes("c.isZero") && !_.includes("this.isZero")) {
                                                return;
                                              }
                                                 console.log(Ft.chalk.chalk.bold.rgb(255, 182, 193)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(119, 221, 119)('ERR') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.bold.rgb(0, 138, 175)(_))
                                              };
                                         }, 
                                    };
                                                  



                                                 //externalAdReply: { title: `${Ft.time}`, body: `${Ft.tanggal}\n⎇ ${Ft.waktu} ${Ft.week} ${Ft.weton}`, thumbnailUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHZ1yqvCRonLfpL2yZplrfpEcjHOT_4oG3YA&usqp=CAU", mediaType: 2, previewType: "VIDEO", mediaUrl: "https://youtu.be/3E-mIsZ0dNA"}}) 
                                                                                    