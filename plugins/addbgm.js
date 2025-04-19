import { writeFileSync, readFileSync } from 'fs';
import { join } from 'path';

// Path to store BGMs list
let bgmListPath = join(__dirname, 'bgmList.json');  // Aap is path ko apne hisaab se change kar sakte hain

// Add BGM Command
export const addBGM = async (m, { conn, args }) => {
    if (!args[0]) return m.reply('Please provide a valid BGM link.');

    let bgmLink = args[0];
    let bgmList = [];

    try {
        bgmList = JSON.parse(readFileSync(bgmListPath, 'utf-8'));
    } catch (err) {
        // Agar file nahi milti to nayi file banayi jaati hai
        console.log('No previous BGM list found.');
    }

    bgmList.push(bgmLink);
    writeFileSync(bgmListPath, JSON.stringify(bgmList, null, 2));

    m.reply(`Successfully added the BGM link: ${bgmLink}`);
};

// Delete BGM Command
export const deleteBGM = async (m, { conn, args }) => {
    if (!args[0]) return m.reply('Please provide the BGM link to delete.');

    let bgmLink = args[0];
    let bgmList = [];

    try {
        bgmList = JSON.parse(readFileSync(bgmListPath, 'utf-8'));
    } catch (err) {
        return m.reply('No BGM list found.');
    }

    let index = bgmList.indexOf(bgmLink);
    if (index === -1) return m.reply('This BGM link is not in the list.');

    bgmList.splice(index, 1);
    writeFileSync(bgmListPath, JSON.stringify(bgmList, null, 2));

    m.reply(`Successfully deleted the BGM link: ${bgmLink}`);
};

// Get BGM List Command
export const getBGMs = async (m, { conn }) => {
    let bgmList = [];

    try {
        bgmList = JSON.parse(readFileSync(bgmListPath, 'utf-8'));
    } catch (err) {
        return m.reply('No BGM list found.');
    }

    if (bgmList.length === 0) return m.reply('No BGMs found.');
    m.reply(`Here is the list of BGMs:\n\n${bgmList.join('\n')}`);
};
