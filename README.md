# wabot-aq

Simple WhatsApp Bot

## `HEROKU`

`**langkah pertama**`
```
*1.buat akun atau login diheroku!
*2.ikuti angkah langkah dari web heroku
*3.[buat app atau klik tulisan ini](https://dashboard.heroku.com/new-app)
*4.nama kan app tersebut contoh wabot-aq123
*5.setelahnya ikuti penjelasan di bawah ini!!
```
1. Add Buildpack<br/>

```
> nodejs
> https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest
> https://github.com/steeple-org/heroku-buildpack-imagemagick
```
2. Delpoy<br/>

[`Click Here For Tutorial`](https://www.google.com/url?sa=t&source=web&rct=j&url=https://m.youtube.com/channel/UCraNp4tbaE3teFS0-TRpLFQ&ved=2ahUKEwiw756EkpfzAhXHZCsKHf4iCWkQjjh6BAgHEAE&usg=AOvVaw3pb5OOdaYW6_Y-MH81xIzN)<br>

3. Change Dyno<br/>

<p align="center">
  <a href="https://www.google.com/url?sa=t&source=web&rct=j&url=https://m.youtube.com/channel/UCraNp4tbaE3teFS0-TRpLFQ&ved=2ahUKEwiw756EkpfzAhXHZCsKHf4iCWkQjjh6BAgHEAE&usg=AOvVaw3pb5OOdaYW6_Y-MH81xIzN"><img src="https://a.top4top.io/p_20888ybra1.jpg" />
</p>


## `CHANGE SESSION`

1. Put your session here<br/>
*

## `CHANGE SETING`

1. [nama owner + no hp](https://github.com/Bintangp02/wabot-aq02/blob/master/plugins/creator.js)
2. [merubah tempilan menu](https://github.com/Bintangp02/wabot-aq02/blob/master/plugins/menu.js)
3. [merubah owner dan user prem](https://github.com/Bintangp02/wabot-aq02/blob/master/config.js)
  **note : edit di repository milik kalian sendiri**
  
  
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/rasssya76/wabot-aq02/tree/patch-1)

## FOR TERMUX/UBUNTU/SSH USER

```bash
apt update && apt upgrade
apt install git -y
apt install nodejs -y
apt install ffmpeg -y
apt install imagemagick -y
git clone https://github.com/bintangp02/wabot-aq02
cd wabot-aq02
npm install
npm update
```

## INSTALL ON TERMUX WITH UBUNTU

[ INSTALLING UBUNTU ]

```bash
apt update && apt full-upgrade
apt install wget curl git proot-distro
proot-distro install ubuntu
echo "proot-distro login ubuntu" > $PREFIX/bin/ubuntu
ubuntu
```
---------

[ INSTALLING REQUIRED PACKAGES ]

```bash
ubuntu
apt update && apt full-upgrade
apt install wget curl git ffmpeg imagemagick build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev dbus-x11 ffmpeg2theora ffmpegfs ffmpegthumbnailer ffmpegthumbnailer-dbg ffmpegthumbs libavcodec-dev libavcodec-extra libavcodec-extra58 libavdevice-dev libavdevice58 libavfilter-dev libavfilter-extra libavfilter-extra7 libavformat-dev libavformat58 libavifile-0.7-bin libavifile-0.7-common libavifile-0.7c2 libavresample-dev libavresample4 libavutil-dev libavutil56 libpostproc-dev libpostproc55 graphicsmagick graphicsmagick-dbg graphicsmagick-imagemagick-compat graphicsmagick-libmagick-dev-compat groff imagemagick-6.q16hdri imagemagick-common libchart-gnuplot-perl libgraphics-magick-perl libgraphicsmagick++-q16-12 libgraphicsmagick++1-dev
```

---------

[ INSTALLING NODEJS & WABOT-AQ ]

```bash
ubuntu
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
apt install -y nodejs gcc g++ make
git clone https://github.com/Nurutomo/wabot-aq
cd wabot-aq
npm install
npm update
```

---------

## FOR WINDOWS/VPS/RDP USER

* Download And Install Git [`Click Here`](https://git-scm.com/downloads)
* Download And Install NodeJS [`Click Here`](https://nodejs.org/en/download)
* Download And Install FFmpeg [`Click Here`](https://ffmpeg.org/download.html) (**Don't Forget Add FFmpeg to PATH enviroment variables**)
* Download And Install ImageMagick [`Click Here`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/Nurutomo/wabot-aq
cd wabot-aq
npm install
npm update
```

---------

## Run

```bash
node .
```

---------

## Arguments `node . [--options] [<session name>]`

### `--self`

Activate self mode (Ignores other)

### `--pconly`

If that chat not from private bot, bot will ignore

### `--gconly`

If that chat not from group, bot will ignore

### `--swonly`

If that chat not from status, bot will ignore

### `--prefix <prefixes>`

* `prefixes` are seperated by each character
Set prefix

### `--server`

Used for [heroku](https://heroku.com/) or scan through website

### `--db <json-server-url>`

Use external db instead of local db, 
Example Server `https://json-server.nurutomo.repl.co/`
Code: `https://repl.it/@Nurutomo/json-server`

`node . --db 'https://json-server.nurutomo.repl.co/'`

The server should have like this specification

#### GET

```http
GET /
Accept: application/json
```

#### POST

```http
POST /
Content-Type: application/json

{
 data: {}
}
```

### `--big-qr`

If small qr unicode doesn't support

### `--restrict`

Enables restricted plugins (which can lead your number to be **banned** if used too often)

* Group Administration `add, kick`

### `--img`

Enable image inspector through terminal

### `--autoread`

If enabled, all incoming messages will be marked as read

### `--nyimak`

No bot, just print received messages and add users to database

### `--test`

**Development** Testing Mode

### `--trace`

```js
conn.logger.level = 'trace'
```

### `--debug`

```js
conn.logger.level = 'debug'
```

---------

<a href="https://api.xteam.xyz"><img src="https://i.ibb.co/7j0vtwz/xlogo.png" width="100" height="100"></a> | [![Nurutomo](https://github.com/Nurutomo.png?size=100)](https://github.com/Nurutomo) | [![Bintang](https://github.com/Bintangp02.png?size=100)](https://github.com/Bintangp02) |
----|----|----|
[XTEAM](https://api.xteam.xyz/) | [Nurutomo](https://github.com/Nurutomo) | [Bintang](https://github.com/Bintangp02) |
Powered by XTEAM | Author / Creator | Recoder wabot-aq |


