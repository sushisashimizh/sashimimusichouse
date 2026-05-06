# Sashimi Music House

刺身黑胶碟铺是一个静态原创音乐播放网页。页面以黑胶唱片播放器为核心，支持歌单浏览、风格筛选、搜索、播放控制、音量控制、同步歌词，以及站长专用的 LRC 打轴工具。

## 当前功能

- 黑胶唱片视觉播放器
- 播放、暂停、上一首、下一首、进度拖动、音量调节
- 歌词同步滚动和歌词面板开关
- 基于歌曲 `genres` 的风格筛选：`Pop`、`J-pop`、`Rock`、`Hip Hop`、`Chill Jazz`、`Cinematic`
- 搜索歌曲名、歌手、专辑和风格标签
- 长歌名在播放器标题区域横向滚动，避免挤掉播放按钮
- 紫色主视觉主题
- 站长模式 LRC 制作器

## 曲库文件

音频文件放在 `music/` 目录，曲目信息写在 `app.js` 顶部的 `demoTracks` 数组里。

当前已录入：

- `弥海砂`
- `宕机说饿`
- `Dorohedoro bath`
- `おかえり、混沌`
- `Dorohedoro after-effect`
- `おかえり、混沌 - male voice`

## 添加新歌

把音频放入 `music/`，然后在 `app.js` 的 `demoTracks` 里追加一项：

```js
{
  id: "your-song-id",
  title: "你的歌名",
  artist: "Sashimi",
  album: "anime",
  tag: "single",
  genres: ["Pop", "Rock", "Storytelling"],
  src: "music/your-song.mp3",
  lyrics: `[00:00.00]第一句歌词
[00:08.00]第二句歌词`
}
```

`genres` 会同时用于搜索和顶部风格筛选。筛选规则在 `app.js` 的 `genreFilters` 中维护。

## LRC 站长工具

公开访问时，普通访客看不到 `LRC` 按钮，也不能永久修改站点歌词。

站长打开下面的地址可以启用 LRC 工具：

```text
index.html?admin=1
```

启用后，当前浏览器会记住站长模式。退出站长模式：

```text
index.html?visitor=1
```

LRC 工具可以载入当前歌词、打点、撤销、重打当前句、复制、下载，并把歌词临时应用到当前页面。注意：这是纯静态网页，`应用到当前歌曲` 只会修改当前浏览器运行中的数据；要永久更新网站歌词，需要把最终 LRC 写回 `app.js`。

## 本地预览

可以直接用浏览器打开 `index.html`。如果浏览器对本地音频路径有限制，也可以在项目目录启动一个简单服务器：

```sh
python3 -m http.server 4173
```

然后访问：

```text
http://127.0.0.1:4173/index.html
```

## 部署

这是纯静态网站，可以部署到 GitHub Pages、Netlify、Vercel、Cloudflare Pages 或任意静态文件服务器。部署时确保以下文件和目录一起上传：

- `index.html`
- `styles.css`
- `app.js`
- `music/`

## 更新日志

功能和内容迭代记录见 `CHANGELOG.md`。
