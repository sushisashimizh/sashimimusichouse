const demoTracks = [
  {
    id: "misa",
    title: "弥海砂",
    artist: "Sashimi",
    album: "anime",
    tag: "single",
    genres: ["Pop", "Hip Hop", "Rock", "R&B", "Latin", "Lo-Fi Beats", "Indie", "Trap"],
    src: "music/《弥海砂》.mp3",
    lyrics: `[00:00.00]弥海砂
[00:03.00]两颗头颅在棋盘上开花
[00:06.00]一个用死亡擦拭另一个的脚踝
[00:09.00]苹果在舌尖腐烂成神谕
[00:15.00]笔记本吞吃名字时
[00:18.00]月光正从指缝漏下
[00:21.00]而棋局，从未结束
[00:26.00]她把自己切成两半
[00:30.00]又一半
[00:32.00]只为看清一个名字
[00:34.00]雷姆的镰刀悬在L头顶时
[00:36.50]她还在笑
[00:39.50]像只刚学会献祭的蝴蝶`
  },
  {
    id: "okaeri",
    title: "おかえり、混沌",
    artist: "Sashimi",
    album: "anime",
    tag: "single",
    genres: ["j-pop", "ballad", "piano rock", "electric guitar", "rock ballad drums"],
    src: "music/おかえり、混沌.mp3",
    lyrics: `[00:00.31]おかえり、混沌
[00:14.08][Intro]
[00:15.24](ピアノの単音、広い間、心臓の鼓動みたいに)
[00:20.14]ん...
[00:20.50]このままでいい...
[00:26.37][Verse 1]
[00:27.67]骨格を抱えて歩き込んだ
[00:34.14]解けるべき謎だと思ってた
[00:40.71]壁にかけた問いかけ
[00:44.27]息をしていた壁に気づいた
[00:54.31]十二夜、煙を追いかけた
[01:00.71]吐瀉物とレースで描かれた街
[01:06.93]側溝に咲いたものは
[01:09.87]生きるはずのない、優しさ
[01:19.65][Pre-Chorus]
[01:21.01]真相は遠くにあると思ってた
[01:26.54]綺麗な答え、出口の標識
[01:33.04]でも真相はここにいて
[01:37.03]私の頬に触れている
[01:43.70]この混沌を、私はずっと
[01:46.51]愛してたんだ
[01:50.65][Chorus]
[01:52.15]メガネを外したら
[01:55.40]ぼやけたものだけが鮮明に見えた
[02:04.26]抱えた骨格は
[02:08.77]温かく、息づいて、家になった
[02:17.93]怪物を探しに来たのに
[02:24.06]鏡を見つけて、君の手を見つけた
[02:31.21]君と私の混沌へようこそ
[02:37.11]離したくない、この混沌へ
[02:42.40][Verse 2]
[02:48.65]暴力を水彩みたいに描く
[02:53.61]レースみたいに、愛みたいに
[02:56.62]MAPPAが吐いた世界は
[02:58.74]美しくて、聖くて、真実
[03:02.53]答えはただの扉
[03:05.28]暗い部屋、優しい部屋
[03:08.77]壁が私を抱きしめる部屋
[03:12.06]側溝から生えた花は
[03:15.28]牙を持って、心を持って、声を持って
[03:20.56][Pre-Chorus]
[03:21.18]走れば真相に追いつけると思ってた
[03:25.40]でも真相は走らない
[03:28.68]私が止まるのを待って
[03:31.34]振り返ってくれた
[03:36.58][Chorus]
[03:45.30]メガネを外したら
[03:48.75]ぼやけたものだけが鮮明に見えた
[03:58.55]抱えた骨格は
[04:02.96]温かく、息づいて、家になった
[04:12.65]怪物を探しに来たのに
[04:18.62]鏡を見つけて、君の手を見つけた
[04:25.85]君と私の混沌へようこそ
[04:31.75]離したくない、この混沌へ
[04:47.37][Bridge - ピアノと声だけ、息も絶え絶え]
[04:47.37]探偵だと思ってた
[04:50.50]でも私が事件だった
[04:53.41]煙は問いかけのように巻いて
[04:57.17]答えは必要なかった
[05:00.12]見るのをやめた時
[05:03.12]世界は目を開けて
[05:06.25]私を見た
[05:09.93]壊れた部分も
[05:13.31]壊れた部分を、特別に
[05:19.62][Final Chorus - フルバンド、弦がうねる、声が擦れても歌い続ける]
[05:20.43]メガネを外したら
[05:23.06]やっと、やっと、全てがここにある
[05:32.73]骨格が私を抱きしめる
[05:38.60]重みじゃなく、避難所として
[05:41.62]亡霊じゃなく、地面として
[05:46.62]君と私の混沌へようこそ
[05:50.42]去らなかった混沌へ
[05:53.75]去りたくなかったから
[05:58.43][Outro - ピアノが戻る、疲れ切った声、でも笑っている]
[05:59.00]君は消えてなかった...
[06:01.99]ここにいた...
[06:05.45]ずっと...`
  },
  {
    id: "dorohedoro-after-effect",
    title: "Dorohedoro after-effect",
    artist: "Sashimi",
    album: "anime",
    tag: "single",
    genres: [
      "Pop",
      "Country Pop",
      "Synth-pop",
      "Indie Folk Pop",
      "Female Vocals",
      "Acoustic Guitar",
      "Cinematic Synth",
      "Driving Beat",
      "Emotional",
      "Storytelling",
      "2020s Pop"
    ],
    src: "music/Dorohedoro after-effect.mp3",
    lyrics: `[00:00.81]Dorohedoro after-effect
[00:05.58][Verse 1]
[00:06.79]I walked in with a question
[00:08.88]Hung it on my coat like a name tag
[00:11.75]Thought I was the detective
[00:14.22]Turns out I was the case all along
[00:18.00]Twelve episodes of chasing shadows
[00:21.14]In a world drawn with smoke and lace
[00:25.51]The gutters grew flowers
[00:27.98]And the flowers had teeth
[00:30.80][Pre-Chorus]
[00:33.02]I thought truth was a destination
[00:36.10]Something I'd catch if I ran fast enough
[00:43.67]But truth moves like a lizard's tongue
[00:46.59]Silent, sudden, already tasting my neck
[00:53.89][Chorus]
[00:54.27]Welcome back to the chaos
[00:56.96]Welcome back to the mess I never left
[01:01.63]I took off my glasses
[01:04.01]To see the world blur into focus
[01:06.90]The skeleton I carried
[01:09.70]Was breathing, was warm, was alive
[01:14.62]I came looking for a monster
[01:19.65]And found a mirror instead
[01:22.53][Verse 2]
[01:26.70]They paint violence like watercolor
[01:29.65]Gutters turned into lace edges
[01:32.34]Mappa made it look like vomit
[01:34.45]But beautiful, but holy, but true
[01:38.89]I thought I wanted answers
[01:41.54]But answers are just doors
[01:45.17]To bigger rooms
[01:46.92]To darker rooms
[01:48.01]To rooms where the walls hug back
[01:51.79][Pre-Chorus]
[01:52.98]I thought truth was a destination
[01:56.59]A clean ending with credits rolling
[02:03.76]But truth curls like cigarette smoke
[02:07.43]It touches you before you see it
[02:12.43][Chorus]
[02:14.40]Welcome back to the chaos
[02:17.02]Welcome back to the mess I never left
[02:21.27]I took off my glasses
[02:23.96]To see the world blur into focus
[02:26.68]The skeleton I carried
[02:29.21]Was breathing, was warm, was alive
[02:34.40]I came looking for a monster
[02:39.09]And found a mirror instead
[02:42.09][Bridge]
[02:46.30]Oh, the sewers grew something tender
[02:48.84]Something that shouldn't survive
[02:54.77]But it did, it did, it did
[02:56.87]And it looked at me
[02:59.40]With the same eyes I've been avoiding
[03:02.18]In every reflection
[03:04.56]Every morning
[03:05.86]Every lie I told myself
[03:11.40]About being in control
[03:14.59][Final Chorus - build, then drop to acoustic]
[03:18.30]Welcome back to the chaos
[03:21.02]Welcome back to the mess I never left
[03:25.59]I took off my glasses
[03:27.62]And suddenly everything
[03:29.21]Was exactly where it needed to be
[03:38.90]The skeleton holds me now
[03:44.21]Not as a burden
[03:49.86]But as home
[03:52.27][Outro - whispered, a cappella or minimal]
[03:54.38]Welcome back...
[03:56.50]You were never gone.`
  },
  {
    id: "okaeri-chaos-male",
    title: "おかえり、混沌 - male voice",
    artist: "Sashimi",
    album: "anime",
    tag: "single",
    genres: [
      "Japanese Alternative Rock",
      "Dark Pop",
      "J-pop",
      "Rock",
      "Electronic Rock",
      "Raw Vocals",
      "Male Vocals",
      "Cinematic Anime Soundtrack",
      "Melancholic",
      "Energetic",
      "Urban Decay",
      "Distorted Synths",
      "Acoustic Elements",
      "Dramatic Build",
      "120-130 BPM",
      "Post-Apocalyptic Warmth"
    ],
    src: "music/おかえり、混沌 - male voice.mp3",
    lyrics: `[00:00.66]おかえり、混沌 - male voice
[00:02.64][Intro]
[00:07.66](Instrumental - sparse piano, building tension)
[00:22.42][Verse 1]
[00:24.37]骨を抱えて入ってきた
[00:27.46]第十三話で動き出す
[00:31.69]誰か教えてくれよ
[00:38.28]この胃の中で十二話も発酵したものは
[00:43.67]世界の膿なのか
[00:49.21]俺なのか
[00:52.35][Pre-Chorus]
[00:52.89]眼鏡を外したら
[00:56.50]世界が逆さまに見えた
[01:00.21]追いかけていたのは
[01:04.17]本当は俺だった
[01:07.15][Chorus]
[01:08.12]おかえり、混沌
[01:09.51]ここが帰る場所だ
[01:11.59]暴力がレースのように
[01:13.98]そっと咲いている
[01:15.59]おかえり、混沌
[01:17.26]真実は俺の後ろで笑っている
[01:22.56]蜥蜴の舌が絡みつく
[01:26.06]煙の触手が導く
[01:30.01]下水道から生まれた優しさに
[01:35.48]抱きしめられて
[01:38.95][Verse 2]
[01:42.50]Mappaが吐き捨てた色の中で
[01:44.09]林田球は女の手で
[01:46.20]腸をレースに編んでいく
[01:48.17]誰が悪いわけじゃない
[01:49.98]この世界がそうやって
[01:52.73]美しく壊れていくんだ
[01:56.31][Pre-Chorus]
[01:56.70]眼鏡を外したら
[01:59.75]世界が逆さまに見えた
[02:03.34]追いかけていたのは
[02:07.23]本当は俺だった
[02:11.09][Chorus]
[02:11.65]おかえり、混沌
[02:12.77]ここが帰る場所だ
[02:14.78]暴力がレースのように
[02:17.06]そっと咲いている
[02:18.78]おかえり、混沌
[02:20.18]真実は俺の後ろで笑っている
[02:25.78]蜥蜴の舌が絡みつく
[02:29.59]煙の触手が導く
[02:33.34]下水道から生まれた優しさに
[02:38.90]抱きしめられて
[02:43.59][Bridge]
[02:49.09](Building intensity)
[02:50.93]開曼は誰だ？
[02:51.49]開曼は俺だ
[02:52.93]開曼は誰だ？
[02:54.80]開曼は——
[02:57.15]鉄の身体に流れる
[02:59.61]赤い血のようなもの
[03:03.03]それが涙なのか
[03:06.75]それが答えなのか
[03:11.78][Final Chorus]
[03:14.90](Explosive, full power)
[03:18.53]おかえり、混沌
[03:19.96]ここが帰る場所だ
[03:21.87]暴力がレースのように
[03:24.06]そっと咲いている
[03:25.90]おかえり、混沌
[03:27.96]真実は俺の後ろで笑っている
[03:32.93]蜥蜴の舌が絡みつく
[03:36.56]煙の触手が導く
[03:40.21]下水道から生まれた優しさに
[03:45.87]抱きしめられて
[03:51.05][Outro]
[03:51.93](Fading, whispered)
[03:52.43]眼鏡を外したら
[03:58.77]世界が——
[04:06.21]もっと——
[04:13.93]鮮やかに——
[04:18.10]見えた——
[04:22.57](Single piano note, silence)`
  },
  {
    id: "dorohedoro-bath",
    title: "Dorohedoro bath",
    artist: "Sashimi",
    album: "anime",
    tag: "single",
    genres: [
      "Jazz Hip Hop",
      "Hip Hop",
      "Jazz Rap",
      "Instrumental Hip Hop",
      "Downtempo",
      "Chillhop",
      "Lo-fi",
      "Japanese Jazz Hop",
      "2010s",
      "Mellow Beats",
      "Soulful Male Vocals",
      "Warm Rhodes Piano",
      "Nylon String Guitar",
      "Upright Bass",
      "Soft Boom Bap Drums",
      "Vinyl Crackle",
      "Atmospheric Pads",
      "Intimate",
      "Nostalgic"
    ],
    src: "music/Dorohedoro bath.mp3",
    lyrics: `[00:00.00]Dorohedoro bath
[00:04.50][Intro]
[00:08.25](Rhodes piano chord, rain sample, vinyl crackle)
[00:17.60]Mmm...
[00:19.07]Yeah...
[00:20.62][Verse 1]
[00:22.71]Brought a skeleton to the door
[00:26.39]Thought it was a puzzle to be solved
[00:29.17]Hung my questions out to dry
[00:34.78]But the coat rack started breathing
[00:37.60]Twelve episodes of smoke and mirrors
[00:40.57]And the mirrors, they were breathing too
[00:45.92]Mappa painted the gutters with lace
[00:48.60]Lace that grew teeth, teeth that smiled at me
[00:55.28]I was chasing a monster
[00:57.78]Turns out the monster was holding my hand
[01:04.23]The whole time
[01:06.15][Hook]
[01:06.56]Welcome to you and me
[01:10.81]Welcome to the chaos we never left
[01:17.01]I took off my glasses
[01:21.18]And the blur became the truth
[01:28.62]The skeleton I carry
[01:31.25]It breathes, it warms, it's home
[01:33.20]I came here looking for a killer
[01:39.92]Found a mirror, found you, found me
[01:51.23][Verse 2]
[01:52.43]Truth moves like a lizard's tongue
[01:55.09]Tasting the dark before we name it
[01:57.56]They paint violence like watercolor
[02:00.20]Vomit and beauty, holy and raw
[02:03.28]Answers are just doors, man
[02:05.42]Doors to rooms where the walls hug back
[02:08.11]Where the sewers grow something tender
[02:10.71]Something that shouldn't survive
[02:13.12]But it does, it does, it does
[02:16.49]And it's looking at me
[02:18.21]With eyes I spent my whole life avoiding
[02:22.09][Hook]
[02:23.21]Welcome to you and me
[02:29.37]Welcome to the chaos we never left
[02:34.96]I took off my glasses
[02:40.33]And the blur became the truth
[02:46.50]The skeleton I carry
[02:49.05]It breathes, it warms, it's home
[02:51.28]I came here looking for a killer
[02:58.12]Found a mirror, found you, found me
[03:09.15][Bridge - stripped, just Rhodes + voice]
[03:10.62]I thought I was the detective
[03:15.96]I was the case all along
[03:21.15]The smoke curls like a question
[03:25.59]That doesn't need an answer anymore
[03:32.24]When I stopped trying to see it
[03:36.46]The world...
[03:41.62]Finally looked back at me
[03:46.93][Final Hook - full instrumentation, warm bass walking in]
[03:48.40]Welcome to you and me
[03:53.12]Welcome to the mess that holds us close
[03:58.75]I took off my glasses
[04:02.93]And everything was where it needed to be
[04:09.84]The skeleton holds me now
[04:12.68]Not as weight, but as warmth
[04:14.68]Not as ghost, but as ground
[04:21.42]Welcome to you and me
[04:27.42]You were never gone...
[04:34.12][Outro]
[04:37.55](Rhodes solo, gentle guitar harmonics, fading to vinyl crackle and rain)
[04:39.91]Welcome...
[04:42.83]Home...`
  }
];

const state = {
  tracks: [...demoTracks],
  currentIndex: 0,
  filter: "all",
  query: "",
  lyricsVisible: true,
  lyricLines: [],
  volume: Number(localStorage.getItem("musicPlayerVolume") || 0.8),
  lastVolume: Number(localStorage.getItem("musicPlayerLastVolume") || 0.8),
  maker: {
    open: false,
    entries: [],
    lines: [],
    marks: [],
    cursor: 0
  }
};

const genreFilters = {
  pop: ["pop", "synth-pop", "country pop", "indie folk pop", "dark pop"],
  jpop: ["j-pop", "japanese", "japanese jazz hop"],
  rock: ["rock", "alternative rock", "electronic rock", "piano rock"],
  hiphop: ["hip hop", "jazz rap", "trap", "lo-fi beats"],
  chilljazz: ["jazz", "chillhop", "downtempo", "lo-fi", "mellow", "rhodes"],
  cinematic: ["cinematic", "anime soundtrack", "soundtrack", "atmospheric"]
};

const adminParams = new URLSearchParams(window.location.search);
if (adminParams.get("admin") === "1") {
  localStorage.setItem("sashimiMusicAdmin", "1");
}
if (adminParams.get("visitor") === "1") {
  localStorage.removeItem("sashimiMusicAdmin");
}
document.body.classList.toggle("admin-mode", localStorage.getItem("sashimiMusicAdmin") === "1");

const els = {
  audio: document.querySelector("#audio"),
  playlist: document.querySelector("#playlist"),
  songCount: document.querySelector("#songCount"),
  searchInput: document.querySelector("#searchInput"),
  tabs: document.querySelectorAll(".tab-button"),
  importButton: document.querySelector("#importButton"),
  fileInput: document.querySelector("#fileInput"),
  playButton: document.querySelector("#playButton"),
  prevButton: document.querySelector("#prevButton"),
  nextButton: document.querySelector("#nextButton"),
  seekBar: document.querySelector("#seekBar"),
  muteButton: document.querySelector("#muteButton"),
  volumeBar: document.querySelector("#volumeBar"),
  volumeValue: document.querySelector("#volumeValue"),
  currentTime: document.querySelector("#currentTime"),
  duration: document.querySelector("#duration"),
  record: document.querySelector("#record"),
  recordInitial: document.querySelector("#recordInitial"),
  tonearm: document.querySelector("#tonearm"),
  trackTitle: document.querySelector("#trackTitle"),
  artistName: document.querySelector("#artistName"),
  albumName: document.querySelector("#albumName"),
  nowTag: document.querySelector("#nowTag"),
  lyricsToggle: document.querySelector("#lyricsToggle"),
  lyricsPanel: document.querySelector("#lyricsPanel"),
  lyricsSongTitle: document.querySelector("#lyricsSongTitle"),
  lyricsList: document.querySelector("#lyricsList"),
  lrcMakerButton: document.querySelector("#lrcMakerButton"),
  makerOverlay: document.querySelector("#makerOverlay"),
  makerCloseButton: document.querySelector("#makerCloseButton"),
  makerTrackTitle: document.querySelector("#makerTrackTitle"),
  rawLyrics: document.querySelector("#rawLyrics"),
  makerTime: document.querySelector("#makerTime"),
  makerLineCount: document.querySelector("#makerLineCount"),
  makerCurrentLine: document.querySelector("#makerCurrentLine"),
  makerSeekCurrent: document.querySelector("#makerSeekCurrent"),
  makerSeekBar: document.querySelector("#makerSeekBar"),
  makerSeekDuration: document.querySelector("#makerSeekDuration"),
  makerBackButton: document.querySelector("#makerBackButton"),
  markLineButton: document.querySelector("#markLineButton"),
  makerForwardButton: document.querySelector("#makerForwardButton"),
  undoMarkButton: document.querySelector("#undoMarkButton"),
  retimeLineButton: document.querySelector("#retimeLineButton"),
  loadCurrentLyricsButton: document.querySelector("#loadCurrentLyricsButton"),
  clearMakerButton: document.querySelector("#clearMakerButton"),
  lrcOutput: document.querySelector("#lrcOutput"),
  copyLrcButton: document.querySelector("#copyLrcButton"),
  downloadLrcButton: document.querySelector("#downloadLrcButton"),
  applyLrcButton: document.querySelector("#applyLrcButton"),
  toast: document.querySelector("#toast")
};
const appShell = document.querySelector(".app-shell");

function parseLyrics(lrcText = "") {
  const pattern = /\[(\d{2}):(\d{2})(?:\.(\d{1,3}))?\](.*)/;
  return lrcText
    .split(/\r?\n/)
    .map((line) => {
      const match = line.match(pattern);
      if (!match) return null;
      const minutes = Number(match[1]);
      const seconds = Number(match[2]);
      const fraction = Number((match[3] || "0").padEnd(3, "0"));
      return {
        time: minutes * 60 + seconds + fraction / 1000,
        text: match[4].trim() || " "
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.time - b.time);
}

function formatTime(value) {
  if (!Number.isFinite(value)) return "0:00";
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function formatLrcTime(value) {
  if (!Number.isFinite(value)) return "00:00.00";
  const minutes = Math.floor(value / 60).toString().padStart(2, "0");
  const seconds = Math.floor(value % 60).toString().padStart(2, "0");
  const centiseconds = Math.floor((value % 1) * 100).toString().padStart(2, "0");
  return `${minutes}:${seconds}.${centiseconds}`;
}

function parseMakerInput(text = "") {
  const timestampPattern = /\[(\d{2}):(\d{2})(?:\.(\d{1,3}))?\](.*)/;
  const entries = [];

  text.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) return;

    const match = trimmed.match(timestampPattern);
    if (match) {
      const minutes = Number(match[1]);
      const seconds = Number(match[2]);
      const fraction = Number((match[3] || "0").padEnd(3, "0"));
      entries.push({
        time: minutes * 60 + seconds + fraction / 1000,
        text: match[4].trim() || " "
      });
      return;
    }

    entries.push({ time: null, text: trimmed });
  });

  const marks = entries
    .filter((entry) => Number.isFinite(entry.time))
    .map((entry) => ({ time: entry.time, text: entry.text }));
  const firstUntimed = entries.findIndex((entry) => !Number.isFinite(entry.time));
  const cursor = firstUntimed === -1 ? entries.length : firstUntimed;

  return { entries, marks, cursor };
}

function getVisibleTracks() {
  const query = state.query.trim().toLowerCase();
  return state.tracks.filter((track) => {
    const genreText = (track.genres || []).join(" ").toLowerCase();
    const filterKeywords = genreFilters[state.filter] || [];
    const matchesFilter =
      state.filter === "all" || filterKeywords.some((keyword) => genreText.includes(keyword));
    const haystack = `${track.title} ${track.artist} ${track.album} ${track.tag} ${genreText}`.toLowerCase();
    return matchesFilter && haystack.includes(query);
  });
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => els.toast.classList.remove("show"), 2600);
}

function applyVolume(volume, shouldPersist = true) {
  const normalized = Math.min(Math.max(Number(volume), 0), 1);
  state.volume = normalized;
  els.audio.volume = normalized;
  els.audio.muted = normalized === 0;
  els.volumeBar.value = String(Math.round(normalized * 100));
  els.volumeValue.textContent = `${Math.round(normalized * 100)}%`;
  els.muteButton.classList.toggle("is-muted", normalized === 0);
  els.muteButton.classList.toggle("is-low", normalized > 0 && normalized < 0.45);
  els.muteButton.setAttribute("aria-pressed", String(normalized === 0));

  if (normalized > 0) {
    state.lastVolume = normalized;
    localStorage.setItem("musicPlayerLastVolume", String(normalized));
  }
  if (shouldPersist) {
    localStorage.setItem("musicPlayerVolume", String(normalized));
  }
}

function renderPlaylist() {
  const visibleTracks = getVisibleTracks();
  els.songCount.textContent = `${visibleTracks.length} 首`;
  els.playlist.innerHTML = "";

  visibleTracks.forEach((track) => {
    const realIndex = state.tracks.findIndex((item) => item.id === track.id);
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.className = `track-row${realIndex === state.currentIndex ? " active" : ""}`;
    button.type = "button";
    const textWrap = document.createElement("span");
    const title = document.createElement("strong");
    const detail = document.createElement("span");
    const index = document.createElement("span");

    title.textContent = track.title;
    detail.textContent = `${track.artist} · ${track.album}`;
    index.className = "track-index";
    index.textContent = String(realIndex + 1).padStart(2, "0");
    textWrap.append(title, detail);
    button.append(textWrap, index);
    button.addEventListener("click", () => selectTrack(realIndex, true));
    item.appendChild(button);
    els.playlist.appendChild(item);
  });

  if (!visibleTracks.length) {
    const empty = document.createElement("li");
    empty.className = "track-row";
    const textWrap = document.createElement("span");
    const title = document.createElement("strong");
    const detail = document.createElement("span");
    title.textContent = "没有匹配歌曲";
    detail.textContent = "换个关键词试试";
    textWrap.append(title, detail);
    empty.appendChild(textWrap);
    els.playlist.appendChild(empty);
  }
}

function renderLyrics() {
  const current = state.tracks[state.currentIndex];
  state.lyricLines = parseLyrics(current?.lyrics || "");
  els.lyricsSongTitle.textContent = current?.title || "歌词";
  els.lyricsList.innerHTML = "";

  if (!state.lyricLines.length) {
    const line = document.createElement("p");
    line.className = "lyric-line active";
    line.textContent = "暂无歌词";
    els.lyricsList.appendChild(line);
    return;
  }

  state.lyricLines.forEach((lyric, index) => {
    const line = document.createElement("p");
    line.className = "lyric-line";
    line.dataset.index = String(index);
    line.textContent = lyric.text;
    els.lyricsList.appendChild(line);
  });
}

function updateTrackMeta() {
  const current = state.tracks[state.currentIndex];
  if (!current) return;

  els.trackTitle.textContent = current.title;
  els.artistName.textContent = current.artist;
  els.albumName.textContent = current.album;
  els.nowTag.textContent = current.genres?.[0] || tagLabel(current.tag);
  els.recordInitial.textContent = current.title.trim().charAt(0).toUpperCase() || "M";
  els.audio.src = current.objectUrl || current.src;
  els.seekBar.value = 0;
  els.currentTime.textContent = "0:00";
  els.duration.textContent = "0:00";
  renderLyrics();
  renderPlaylist();
}

function tagLabel(tag) {
  return {
    single: "单曲",
    demo: "Demo",
    live: "现场"
  }[tag] || "原创音乐";
}

function selectTrack(index, shouldPlay = false) {
  state.currentIndex = (index + state.tracks.length) % state.tracks.length;
  updateTrackMeta();
  if (shouldPlay) playCurrent();
}

async function playCurrent() {
  try {
    await els.audio.play();
  } catch (error) {
    const current = state.tracks[state.currentIndex];
    showToast(`请导入音频，或把文件放到 ${current.src}`);
  }
}

function updatePlayingState() {
  const playing = !els.audio.paused;
  els.record.classList.toggle("playing", playing);
  els.tonearm.classList.toggle("playing", playing);
  els.playButton.textContent = playing ? "Ⅱ" : "▶";
}

function updateProgress() {
  const current = els.audio.currentTime;
  const duration = els.audio.duration;
  els.currentTime.textContent = formatTime(current);
  els.duration.textContent = formatTime(duration);
  if (Number.isFinite(duration) && duration > 0) {
    els.seekBar.value = String(Math.round((current / duration) * 1000));
  }
  syncLyrics(current);
  if (state.maker.open) renderMaker();
}

function syncLyrics(currentTime) {
  if (!state.lyricLines.length) return;
  let activeIndex = state.lyricLines.findIndex((line, index) => {
    const next = state.lyricLines[index + 1];
    return currentTime >= line.time && (!next || currentTime < next.time);
  });
  if (activeIndex < 0) activeIndex = 0;

  const active = els.lyricsList.querySelector(`[data-index="${activeIndex}"]`);
  if (!active || active.classList.contains("active")) return;

  els.lyricsList.querySelectorAll(".lyric-line").forEach((line) => line.classList.remove("active"));
  active.classList.add("active");
  active.scrollIntoView({ block: "center", behavior: "smooth" });
}

function readMakerLines() {
  const parsed = parseMakerInput(els.rawLyrics.value);
  state.maker.entries = parsed.entries;
  state.maker.lines = parsed.entries.map((entry) => entry.text);
  state.maker.marks = parsed.marks;
  state.maker.cursor = parsed.cursor;
}

function writeMakerEntriesToRaw() {
  els.rawLyrics.value = state.maker.entries
    .map((entry) => (Number.isFinite(entry.time) ? `[${formatLrcTime(entry.time)}]${entry.text}` : entry.text))
    .join("\n");
}

function buildLrcOutput() {
  return state.maker.entries
    .map((entry) => (Number.isFinite(entry.time) ? `[${formatLrcTime(entry.time)}]${entry.text}` : entry.text))
    .join("\n");
}

function loadMakerFromLyrics(lrcText = "") {
  const parsed = parseMakerInput(lrcText);
  state.maker.entries = parsed.entries;
  state.maker.lines = parsed.entries.map((entry) => entry.text);
  state.maker.marks = parsed.marks;
  state.maker.cursor = parsed.cursor;
  writeMakerEntriesToRaw();
}

function refreshMakerTitle() {
  const current = state.tracks[state.currentIndex];
  els.makerTrackTitle.textContent = current ? `制作歌词 · ${current.title}` : "制作歌词";
}

function renderMaker() {
  readMakerLines();
  const total = state.maker.lines.length;
  const cursor = state.maker.cursor;
  const duration = els.audio.duration;
  const currentLine = state.maker.lines[cursor] || (total ? "已经打完所有歌词" : "等待歌词");

  els.makerTime.textContent = formatLrcTime(els.audio.currentTime);
  els.makerSeekCurrent.textContent = formatTime(els.audio.currentTime);
  els.makerSeekDuration.textContent = formatTime(duration);
  els.makerLineCount.textContent = `${Math.min(cursor + 1, total)} / ${total}`;
  els.makerCurrentLine.textContent = currentLine;
  els.lrcOutput.value = buildLrcOutput();
  els.markLineButton.disabled = !total || cursor >= total;
  els.undoMarkButton.disabled = !state.maker.marks.length;
  els.retimeLineButton.disabled = !state.maker.marks.length;

  if (Number.isFinite(duration) && duration > 0) {
    els.makerSeekBar.value = String(Math.round((els.audio.currentTime / duration) * 1000));
    els.makerSeekBar.disabled = false;
  } else {
    els.makerSeekBar.value = 0;
    els.makerSeekBar.disabled = true;
  }
}

function openMaker() {
  state.maker.open = true;
  els.makerOverlay.classList.remove("hidden");
  refreshMakerTitle();
  const current = state.tracks[state.currentIndex];
  loadMakerFromLyrics(current?.lyrics || "");
  renderMaker();
}

function closeMaker() {
  state.maker.open = false;
  els.makerOverlay.classList.add("hidden");
}

function markCurrentLine() {
  readMakerLines();
  if (state.maker.cursor >= state.maker.lines.length) {
    showToast("歌词已经全部打点");
    return;
  }
  state.maker.entries[state.maker.cursor].time = els.audio.currentTime;
  writeMakerEntriesToRaw();
  renderMaker();
}

function undoMark() {
  readMakerLines();
  const lastTimedIndex = state.maker.entries.map((entry) => Number.isFinite(entry.time)).lastIndexOf(true);
  if (lastTimedIndex < 0) return;
  state.maker.entries[lastTimedIndex].time = null;
  writeMakerEntriesToRaw();
  renderMaker();
}

function retimeCurrentLine() {
  readMakerLines();
  if (!state.maker.entries.length) return;
  const targetIndex =
    state.maker.cursor >= state.maker.entries.length
      ? state.maker.entries.length - 1
      : Math.max(0, state.maker.cursor - 1);
  state.maker.entries = state.maker.entries.map((entry, index) =>
    index >= targetIndex ? { ...entry, time: null } : entry
  );
  writeMakerEntriesToRaw();
  renderMaker();
}

function clearMaker() {
  state.maker.entries = [];
  state.maker.lines = [];
  state.maker.marks = [];
  state.maker.cursor = 0;
  els.rawLyrics.value = "";
  renderMaker();
}

function seekMakerBy(offset) {
  const duration = els.audio.duration;
  if (!Number.isFinite(duration)) return;
  els.audio.currentTime = Math.min(Math.max(els.audio.currentTime + offset, 0), duration);
  renderMaker();
}

async function copyLrc() {
  const output = els.lrcOutput.value.trim();
  if (!output) {
    showToast("还没有 LRC 内容");
    return;
  }
  try {
    await navigator.clipboard.writeText(output);
  } catch (error) {
    els.lrcOutput.select();
    document.execCommand("copy");
  }
  showToast("LRC 已复制");
}

function downloadLrc() {
  const output = els.lrcOutput.value.trim();
  if (!output) {
    showToast("还没有 LRC 内容");
    return;
  }
  const current = state.tracks[state.currentIndex];
  const safeName = (current?.title || "lyrics").replace(/[\\/:*?"<>|]/g, "_");
  const blob = new Blob([`${output}\n`], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${safeName}.lrc`;
  link.click();
  URL.revokeObjectURL(url);
}

function applyMakerLrc() {
  const output = els.lrcOutput.value.trim();
  const current = state.tracks[state.currentIndex];
  if (!output || !current) {
    showToast("还没有可应用的 LRC");
    return;
  }
  current.lyrics = output;
  renderLyrics();
  showToast("已应用到当前歌曲");
}

function handleImport(files) {
  const audioFiles = [...files].filter((file) => file.type.startsWith("audio/"));
  const lyricFiles = [...files].filter((file) => file.name.toLowerCase().endsWith(".lrc"));

  audioFiles.forEach((file) => {
    const title = file.name.replace(/\.[^.]+$/, "");
    state.tracks.push({
      id: `${title}-${file.lastModified}`,
      title,
      artist: "本地导入",
      album: "我的上传",
      tag: "single",
      src: file.name,
      objectUrl: URL.createObjectURL(file),
      lyrics: `[00:00.00]${title}`
    });
  });

  lyricFiles.forEach((file) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const baseName = file.name.replace(/\.lrc$/i, "").toLowerCase();
      const target = state.tracks.find((track) => track.title.toLowerCase() === baseName);
      if (target) {
        target.lyrics = String(reader.result || "");
        if (state.tracks[state.currentIndex]?.id === target.id) renderLyrics();
      }
    });
    reader.readAsText(file);
  });

  if (audioFiles.length) {
    selectTrack(state.tracks.length - audioFiles.length, false);
    showToast(`已导入 ${audioFiles.length} 首音乐`);
  }
  renderPlaylist();
}

els.importButton.addEventListener("click", () => els.fileInput.click());
els.fileInput.addEventListener("change", (event) => handleImport(event.target.files));

els.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderPlaylist();
});

els.tabs.forEach((button) => {
  button.addEventListener("click", () => {
    state.filter = button.dataset.filter;
    els.tabs.forEach((tab) => tab.classList.toggle("active", tab === button));
    renderPlaylist();
  });
});

els.playButton.addEventListener("click", () => {
  if (els.audio.paused) {
    playCurrent();
  } else {
    els.audio.pause();
  }
});

els.prevButton.addEventListener("click", () => selectTrack(state.currentIndex - 1, true));
els.nextButton.addEventListener("click", () => selectTrack(state.currentIndex + 1, true));

els.seekBar.addEventListener("input", () => {
  const duration = els.audio.duration;
  if (!Number.isFinite(duration)) return;
  els.audio.currentTime = (Number(els.seekBar.value) / 1000) * duration;
});

els.volumeBar.addEventListener("input", () => {
  applyVolume(Number(els.volumeBar.value) / 100);
});

els.muteButton.addEventListener("click", () => {
  if (state.volume > 0) {
    applyVolume(0);
  } else {
    applyVolume(state.lastVolume || 0.8);
  }
});

els.lyricsToggle.addEventListener("click", () => {
  state.lyricsVisible = !state.lyricsVisible;
  els.lyricsToggle.setAttribute("aria-pressed", String(state.lyricsVisible));
  els.lyricsPanel.classList.toggle("hidden", !state.lyricsVisible);
  appShell.classList.toggle("lyrics-off", !state.lyricsVisible);
});

els.lrcMakerButton.addEventListener("click", openMaker);
els.makerCloseButton.addEventListener("click", closeMaker);
els.makerOverlay.addEventListener("click", (event) => {
  if (event.target === els.makerOverlay) closeMaker();
});
els.rawLyrics.addEventListener("input", renderMaker);
els.makerSeekBar.addEventListener("input", () => {
  const duration = els.audio.duration;
  if (!Number.isFinite(duration)) return;
  els.audio.currentTime = (Number(els.makerSeekBar.value) / 1000) * duration;
  renderMaker();
});
els.makerBackButton.addEventListener("click", () => seekMakerBy(-5));
els.makerForwardButton.addEventListener("click", () => seekMakerBy(5));
els.markLineButton.addEventListener("click", markCurrentLine);
els.undoMarkButton.addEventListener("click", undoMark);
els.retimeLineButton.addEventListener("click", retimeCurrentLine);
els.loadCurrentLyricsButton.addEventListener("click", () => {
  const current = state.tracks[state.currentIndex];
  loadMakerFromLyrics(current?.lyrics || "");
  renderMaker();
});
els.clearMakerButton.addEventListener("click", clearMaker);
els.copyLrcButton.addEventListener("click", copyLrc);
els.downloadLrcButton.addEventListener("click", downloadLrc);
els.applyLrcButton.addEventListener("click", applyMakerLrc);

els.audio.addEventListener("play", updatePlayingState);
els.audio.addEventListener("pause", updatePlayingState);
els.audio.addEventListener("ended", () => selectTrack(state.currentIndex + 1, true));
els.audio.addEventListener("timeupdate", updateProgress);
els.audio.addEventListener("loadedmetadata", updateProgress);

document.addEventListener("keydown", (event) => {
  const isTyping = event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement;
  if (state.maker.open && event.code === "Enter" && !isTyping) {
    event.preventDefault();
    markCurrentLine();
    return;
  }
  if (event.code === "Escape" && state.maker.open) {
    closeMaker();
    return;
  }
  if (isTyping) return;
  if (event.code === "Space") {
    event.preventDefault();
    els.playButton.click();
  }
  if (event.code === "ArrowLeft") els.prevButton.click();
  if (event.code === "ArrowRight") els.nextButton.click();
});

applyVolume(state.volume, false);
updateTrackMeta();
