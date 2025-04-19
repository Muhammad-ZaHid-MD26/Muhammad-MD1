import { addBGM, deleteBGM, getBGMs } from './addbgm.js';  // Adjust path if needed

let handler = async (m, { conn, usedPrefix, command, args }) => {
    if (command === 'addbgm') {
        addBGM(m, { conn, args });
    } else if (command === 'delbgm') {
        deleteBGM(m, { conn, args });
    } else if (command === 'getbgm') {
        getBGMs(m, { conn });
    }
};

handler.help = ['addbgm', 'delbgm', 'getbgm'];
handler.tags = ['commands'];
handler.command = ['addbgm', 'delbgm', 'getbgm'];

export default handler;
