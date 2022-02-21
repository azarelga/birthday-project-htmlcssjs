var randomlinks=[
    'https://open.spotify.com/album/2PullXMROSpzCdFdzEmFhy?si=97e13796646543fb',
    'https://gfycat.com/neatfewiguana',
    'https://i.imgur.com/q2yUji5.gifv',
    'https://www.youtube.com/watch?v=6N6OM_q97s4',
    'https://www.youtube.com/watch?v=aHmZ7yiy6wI',
    'https://youtu.be/5qap5aO4i9A',
    'https://youtu.be/XNXIZuIBJKs',
    'https://youtu.be/-0M6pw233DA',
    'https://cat-bounce.com/'
];

function randomlink(){
    window.open(randomlinks[Math.floor(Math.random()*randomlinks.length)])
}