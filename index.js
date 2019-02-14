let srt2vtt = require('srt-to-vtt')
let fs = require('fs')
let path = require('path');

let input_directory = path.join(__dirname, 'input');
let output_directory = path.join(__dirname, 'output');

let subtitles = fs.readdirSync(input_directory);

for(subtitle of subtitles)
{
    let input_subtitle = path.join(input_directory, subtitle);
    let output_filename = subtitle.replace('.srt', '') + '.vtt';
    let output_subtitle_location = path.join(output_directory, output_filename);
    
    fs.createReadStream(input_subtitle)
        .pipe(srt2vtt())
        .pipe(fs.createWriteStream(output_subtitle_location));

};