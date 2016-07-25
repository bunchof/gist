/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.05
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "ЕБАНЫЙ САНДБОКС";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = true;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/greencircles.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/touhou01.jpg",
	"backgrounds/images/touhou02.jpg",
	"backgrounds/images/touhou03.jpg"
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{youtube: "Fj5BktLOAT8", name: " Birthday - Cock Destroyer"},
	{youtube: "8f0qNe6QsFU", name: "Tiger Lillies - Suicide"},
	{youtube: "dgDeslyYJOE", name: "El Mudo - Shakaron Makaron"},
	{youtube: "PpccpglnNf0", name: "Goats Yelling Like Humans"},
	{youtube: "1yHbAhFnfrA", name: "Russian Anthem by Egyptian Orchestra"},
	{youtube: "CDs9vAjDRxE", name: "Skimask - Slap Me Silly"},
	{youtube: "ojbDLAdcga8", name: "Inokentijs Mārpls - Лучший Друг"},
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 25;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"Эй ты.. да-да, ты!",
"Знаешь что самое важное на этой земле?",
"Мой хуй",
"А Фибоначчиеву систему придумал мой дед",
"Дарк Эр Пэ для уебанов",
"Сандбокс тоже",
"Кто это его вообще придумал",
"Как тебя жизнь к этому привела? М?",
"и ПЭКА для конченных людей",
"Хочу заметить, автор этого сервера им пользуется",
"В чем смысл жизни?",
"...",
"Тысячи ответов на этот вопрос",
"Как и людей, задающих этот вопрос",
"Но я знаю, один.. единственный... верный ответ",
"Барабанная Дробь...",
"МОЙ ХУЙ",
"Но если серьезно, то прибытие на этом сервере",
"Добро пожаловать",
"Но если тебе 14 - уябывай",
"Шутка, естественно серди 14-ти летних есть адекватные люди",
"Правда их количество ... равно нулю",
"Но ты все равно заходи, если что, даже если тебе 14",
"Педофилов нет",
"В тоже время я не могу сказать, что наличие педофилов на этом сервере как либо фильтруется",

];

/*Random message order?*/
var l_messagesRandom = false;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 3400;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;