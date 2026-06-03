const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) { 
            results.push(file);
        }
    });
    return results;
}

const files = walk('./src');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let newContent = content
        .replace(/text-gradient-gold/g, 'text-primary')
        .replace(/bg-black\/80/g, 'bg-background/80')
        .replace(/hover:border-gold/g, 'hover:border-accent');
        
    // Also add font to __root.tsx
    if (file.endsWith('__root.tsx') && !newContent.includes('fonts.googleapis.com')) {
        newContent = newContent.replace(
            /links: \[\{ rel: "stylesheet", href: appCss \}\],/g,
            `links: [{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Noto+Serif+Tamil:wght@400;500;600;700;800&family=Noto+Sans+Tamil:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap" }, { rel: "stylesheet", href: appCss }],`
        );
    }
    
    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log('Updated ' + file);
    }
});
console.log('Done');
