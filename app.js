tailwind.config = {
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#0f1117',
          raised: '#161b26',
          card: '#1a2030',
          border: '#2a3347',
        },
        board: {
          dark: '#2a3142',
          light: '#7eb8a8',
          accent: '#6b9fd4',
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        board: '0 24px 64px -12px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255,255,255,0.04)',
        card: '0 8px 32px -8px rgba(0, 0, 0, 0.4)',
      },
    },
  },
};

const OPENINGS = [
  { prefix: 'e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6', name: 'Sicilya Savunması: Najdorf Varyantı' },
  { prefix: 'e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nxd4 Nf6 Nc3 e5', name: 'Sicilya Savunması: Pelikan/Sveshnikov' },
  { prefix: 'e4 c5 Nf3 e6 d4 cxd4 Nxd4', name: 'Sicilya Savunması: Paulsen / Kan' },
  { prefix: 'e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3', name: 'Sicilya Savunması: Açık Sicilya' },
  { prefix: 'e4 c5 c3', name: 'Sicilya Savunması: Alapin Varyantı' },
  { prefix: 'e4 c5 Nc3', name: 'Sicilya Savunması: Kapalı Varyant' },
  { prefix: 'e4 c5', name: 'Sicilya Savunması' },
  { prefix: 'e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7', name: 'İspanyol Açılışı: Ruy Lopez, Kapalı' },
  { prefix: 'e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6', name: 'İspanyol Açılışı: Ruy Lopez' },
  { prefix: 'e4 e5 Nf3 Nc6 Bb5', name: 'İspanyol Açılışı (Ruy Lopez)' },
  { prefix: 'e4 e5 Nf3 Nc6 Bc4 Bc5', name: 'İtalyan Açılışı: Giuoco Piano' },
  { prefix: 'e4 e5 Nf3 Nc6 Bc4 Nf6', name: 'İtalyan Açılışı: İki At Savunması' },
  { prefix: 'e4 e5 Nf3 Nc6 Bc4', name: 'İtalyan Açılışı' },
  { prefix: 'e4 e5 Nf3 Nc6 d4 exd4 Nxd4', name: 'İskoç Açılışı' },
  { prefix: 'e4 e5 Nf3 Nf6', name: 'Rus Savunması (Petrov)' },
  { prefix: 'e4 e5 Nf3 d6', name: 'Philidor Savunması' },
  { prefix: 'e4 e5 Bc4', name: 'Fil Açılışı' },
  { prefix: 'e4 e5 f4', name: 'Şah Gambiti' },
  { prefix: 'e4 e6 d4 d5', name: 'Fransız Savunması' },
  { prefix: 'e4 e6', name: 'Fransız Savunması' },
  { prefix: 'e4 c6 d4 d5', name: 'Caro-Kann Savunması' },
  { prefix: 'e4 c6', name: 'Caro-Kann Savunması' },
  { prefix: 'e4 d6 d4 Nf6 Nc3 g6', name: 'Pirc Savunması' },
  { prefix: 'e4 d6', name: 'Pirc Savunması' },
  { prefix: 'e4 g6', name: 'Modern Savunma' },
  { prefix: 'e4 Nf6', name: 'Alekhine Savunması' },
  { prefix: 'd4 d5 c4 e6 Nc3 Nf6', name: 'Kabul Edilmeyen Vezir Gambiti' },
  { prefix: 'd4 d5 c4 e6', name: 'Kabul Edilmeyen Vezir Gambiti' },
  { prefix: 'd4 d5 c4 c6', name: 'Slav Savunması' },
  { prefix: 'd4 d5 c4 dxc4', name: 'Kabul Edilen Vezir Gambiti' },
  { prefix: 'd4 d5 c4', name: 'Vezir Gambiti' },
  { prefix: 'd4 Nf6 c4 e6 Nf3 b6', name: 'Yeni Hint Savunması' },
  { prefix: 'd4 Nf6 c4 e6 Nc3 Bb4', name: 'Nimzo-Hint Savunması' },
  { prefix: 'd4 Nf6 c4 g6 Nc3 Bg7', name: 'Şah-Hint Savunması' },
  { prefix: 'd4 Nf6 c4 g6', name: 'Kral-Hint Savunması' },
  { prefix: 'd4 Nf6', name: 'Hint Savunması' },
  { prefix: 'd4 d5', name: 'Kapalı Oyun' },
  { prefix: 'Nf3 d5', name: 'Reti Açılışı' },
  { prefix: 'Nf3', name: 'Reti Açılışı' },
  { prefix: 'c4 e5', name: 'İngiliz Açılışı: Ters Sicilya' },
  { prefix: 'c4', name: 'İngiliz Açılışı' },
  { prefix: 'f4', name: 'Bird Açılışı' },
  { prefix: 'g3', name: 'Benko Açılışı' },
  { prefix: 'b3', name: 'Larsen Açılışı' },
  { prefix: 'e4 e5', name: 'Açık Oyun' }
];

const PIECE_IMAGES = {
  w: {
    k: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg',
    q: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg',
    r: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg',
    b: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg',
    n: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg',
    p: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg'
  },
  b: {
    k: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg',
    q: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg',
    r: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg',
    b: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg',
    n: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg',
    p: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg'
  }
};

const PIECE_VALUES = { p: 1, n: 3, b: 3, r: 5, q: 9, k: 0 };

const game = new Chess();
const boardEl = document.getElementById('chess-board');
const statusEl = document.getElementById('game-status');
const historyBody = document.querySelector('#move-history tbody');
const historyEmpty = document.getElementById('move-history-empty');
const pgnEl = document.getElementById('pgn-output');
const playerWhite = document.getElementById('player-white');
const playerBlack = document.getElementById('player-black');
const clockWhite = document.getElementById('clock-white');
const clockBlack = document.getElementById('clock-black');
const boardEndOverlay = document.getElementById('board-end-overlay');
const evalFill = document.getElementById('eval-fill');
const evalLabel = document.getElementById('eval-label');
const timePresetEl = document.getElementById('time-preset');
const aiLevelEl = document.getElementById('ai-level');
const aiPlayerName = document.getElementById('ai-player-name');
const aiPlayerElo = document.getElementById('ai-player-elo');
const timeControlLabel = document.getElementById('time-control-label');
const gameModal = document.getElementById('game-modal');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');
const btnUndo = document.getElementById('btn-undo');
const btnRedo = document.getElementById('btn-redo');
const btnFlip = document.getElementById('btn-flip');
const btnNew = document.getElementById('btn-new');
const tabHistory = document.getElementById('tab-history');
const tabAnalysis = document.getElementById('tab-analysis');
const panelHistory = document.getElementById('panel-history');
const panelAnalysis = document.getElementById('panel-analysis');
const analysisAlert = document.getElementById('analysis-alert');
const analysisStats = document.getElementById('analysis-stats');
const analysisMoveList = document.getElementById('analysis-move-list');
const analysisEmpty = document.getElementById('analysis-empty');
const analysisArrow = document.getElementById('analysis-arrow');
const boardShell = document.getElementById('board-shell');
const btnPgnCopy = document.getElementById('btn-pgn-copy');
const btnPgnLoad = document.getElementById('btn-pgn-load');
const btnPgnApply = document.getElementById('btn-pgn-apply');
const pgnImport = document.getElementById('pgn-import');

let currentVolume = 0.42;
let isMuted = false;
let threatMapEnabled = false;
let userDrawings = {
  arrows: [],
  squares: new Set()
};

const userDrawingsEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
userDrawingsEl.id = 'user-drawings';
userDrawingsEl.setAttribute('class', 'pointer-events-none absolute inset-0 z-30');
userDrawingsEl.setAttribute('aria-hidden', 'true');
boardShell.appendChild(userDrawingsEl);

const QUALITY_META = {
  best: { label: 'En İyi Hamle', dot: 'bg-emerald-400', text: 'text-emerald-300' },
  excellent: { label: 'Mükemmel', dot: 'bg-emerald-300', text: 'text-emerald-200' },
  good: { label: 'İyi', dot: 'bg-cyan-400', text: 'text-cyan-200' },
  book: { label: 'Teorik', dot: 'bg-slate-400', text: 'text-slate-300' },
  mistake: { label: 'Hata', dot: 'bg-amber-400', text: 'text-amber-200' },
  blunder: { label: 'Büyük Hata', dot: 'bg-rose-500', text: 'text-rose-300' },
};

let VS_AI = false;
const HUMAN_COLOR = 'w';

const AI_LEVELS = {
  0: { name: 'Oyuncu 2', elo: 1800, movetime: 0, depth: 0, skill: 0 },
  1: { name: 'Başlangıç AI', elo: 800, movetime: 200, depth: 1, skill: 0 },
  2: { name: 'Orta AI', elo: 1500, movetime: 500, depth: 5, skill: 5 },
  3: { name: 'Usta AI', elo: 2200, movetime: 800, depth: 10, skill: 12 },
  4: { name: 'Grandmaster', elo: 2859, movetime: 1200, depth: 15, skill: 20 },
};

const Sounds = {
  move: new Audio('https://lichess1.org/assets/sound/standard/Move.mp3'),
  capture: new Audio('https://lichess1.org/assets/sound/standard/Capture.mp3'),
  check: new Audio('https://lichess1.org/assets/sound/standard/Check.mp3'),
  game_end: new Audio('https://lichess1.org/assets/sound/standard/Victory.mp3'),
};
Object.values(Sounds).forEach((clip) => {
  clip.preload = 'auto';
  clip.volume = 0.42;
});

function getAiLevelConfig() {
  return AI_LEVELS[aiLevelEl?.value] || AI_LEVELS[0];
}

function updateAiProfile() {
  const level = aiLevelEl?.value || "0";
  VS_AI = (level !== "0");
  const cfg = getAiLevelConfig();
  if (aiPlayerName) aiPlayerName.textContent = cfg.name;
  if (aiPlayerElo) aiPlayerElo.textContent = String(cfg.elo);
}

function updateMaterialDengesi() {
  const board = game.board();
  const startingCounts = {
    w: { p: 8, n: 2, b: 2, r: 2, q: 1 },
    b: { p: 8, n: 2, b: 2, r: 2, q: 1 }
  };

  const currentCounts = {
    w: { p: 0, n: 0, b: 0, r: 0, q: 0 },
    b: { p: 0, n: 0, b: 0, r: 0, q: 0 }
  };

  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const cell = board[r][c];
      if (cell && cell.type !== 'k') {
        currentCounts[cell.color][cell.type]++;
      }
    }
  }

  const capturedByWhite = [];
  const capturedByBlack = [];

  let whiteScore = 0;
  let blackScore = 0;

  const types = ['q', 'r', 'b', 'n', 'p'];
  types.forEach(t => {
    const missingBlack = startingCounts.b[t] - currentCounts.b[t];
    for (let i = 0; i < missingBlack; i++) {
      capturedByWhite.push({ type: t, color: 'b' });
      whiteScore += PIECE_VALUES[t] || 0;
    }

    const missingWhite = startingCounts.w[t] - currentCounts.w[t];
    for (let i = 0; i < missingWhite; i++) {
      capturedByBlack.push({ type: t, color: 'w' });
      blackScore += PIECE_VALUES[t] || 0;
    }
  });

  const elWhite = document.getElementById('captured-by-white');
  const elBlack = document.getElementById('captured-by-black');

  if (elWhite && elBlack) {
    elWhite.innerHTML = '';
    elBlack.innerHTML = '';

    capturedByWhite.forEach(p => {
      const img = document.createElement('img');
      img.src = PIECE_IMAGES[p.color][p.type];
      img.className = 'w-3 h-3 opacity-80';
      elWhite.appendChild(img);
    });

    capturedByBlack.forEach(p => {
      const img = document.createElement('img');
      img.src = PIECE_IMAGES[p.color][p.type];
      img.className = 'w-3 h-3 opacity-80';
      elBlack.appendChild(img);
    });

    if (whiteScore > blackScore) {
      const diff = whiteScore - blackScore;
      const badge = document.createElement('span');
      badge.className = 'ml-1 px-1 bg-emerald-500/25 text-emerald-400 font-bold rounded text-[8px]';
      badge.textContent = `+${diff}`;
      elWhite.appendChild(badge);
    } else if (blackScore > whiteScore) {
      const diff = blackScore - whiteScore;
      const badge = document.createElement('span');
      badge.className = 'ml-1 px-1 bg-emerald-500/25 text-emerald-400 font-bold rounded text-[8px]';
      badge.textContent = `+${diff}`;
      elBlack.appendChild(badge);
    }
  }
}

function updateOpeningDetector() {
  const history = game.history();
  const el = document.getElementById('opening-detector');
  if (!el) return;

  if (history.length === 0) {
    el.classList.add('hidden');
    el.textContent = '';
    return;
  }

  const movesStr = history.join(' ');
  let matchedName = null;
  
  const sortedOpenings = [...OPENINGS].sort((a, b) => b.prefix.length - a.prefix.length);
  
  for (const op of sortedOpenings) {
    if (movesStr.startsWith(op.prefix)) {
      matchedName = op.name;
      break;
    }
  }

  if (matchedName) {
    el.textContent = `📖 ${matchedName}`;
    el.classList.remove('hidden');
  } else {
    el.classList.add('hidden');
  }
}

function getMoveQualityForCurrentSquare(name) {
  if (!lastMove || lastMove.to !== name) return null;
  const historyLen = game.history().length;
  if (historyLen === 0) return null;
  const analysis = moveAnalyses[historyLen - 1];
  if (analysis) return analysis.quality;
  return null;
}

function renderUserDrawings() {
  userDrawingsEl.innerHTML = '';
  if (userDrawings.arrows.length === 0) return;

  const shellRect = boardShell.getBoundingClientRect();
  userDrawingsEl.innerHTML = `
    <defs>
      <marker id="user-arrowhead" markerWidth="6" markerHeight="6" refX="4.8" refY="3" orient="auto">
        <polygon points="0 0, 6 3, 0 6" fill="rgba(16,185,129,0.85)" />
      </marker>
    </defs>
  `;

  userDrawings.arrows.forEach((arr) => {
    const fromEl = squares[arr.from]?.el;
    const toEl = squares[arr.to]?.el;
    if (!fromEl || !toEl) return;

    const fromRect = fromEl.getBoundingClientRect();
    const toRect = toEl.getBoundingClientRect();

    const x1 = fromRect.left + fromRect.width / 2 - shellRect.left;
    const y1 = fromRect.top + fromRect.height / 2 - shellRect.top;
    const x2 = toRect.left + toRect.width / 2 - shellRect.left;
    const y2 = toRect.top + toRect.height / 2 - shellRect.top;

    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.sqrt(dx * dx + dy * dy);
    if (len === 0) return;

    const shrink = 16;
    const x2Short = x2 - (dx / len) * shrink;
    const y2Short = y2 - (dy / len) * shrink;

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2Short);
    line.setAttribute('y2', y2Short);
    line.setAttribute('stroke', 'rgba(16,185,129,0.75)');
    line.setAttribute('stroke-width', '7');
    line.setAttribute('stroke-linecap', 'round');
    line.setAttribute('marker-end', 'url(#user-arrowhead)');
    line.style.filter = 'drop-shadow(0 0 4px rgba(16,185,129,0.5))';
    userDrawingsEl.appendChild(line);
  });
}

let rightClickStartSquare = null;

function setupRightClickDrawing() {
  boardEl.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });

  boardEl.addEventListener('click', (e) => {
    if (e.button === 0) {
      clearUserDrawings();
    }
  });

  boardEl.addEventListener('mousedown', (e) => {
    if (e.button !== 2) return;
    const sqEl = e.target.closest('[data-square]');
    if (sqEl) {
      rightClickStartSquare = sqEl.dataset.square;
    }
  });

  boardEl.addEventListener('mouseup', (e) => {
    if (e.button !== 2 || !rightClickStartSquare) return;
    const sqEl = e.target.closest('[data-square]');
    if (!sqEl) {
      rightClickStartSquare = null;
      return;
    }
    const endSquare = sqEl.dataset.square;

    if (rightClickStartSquare === endSquare) {
      toggleSquareHighlight(endSquare);
    } else {
      toggleArrow(rightClickStartSquare, endSquare);
    }
    rightClickStartSquare = null;
  });
}

function toggleSquareHighlight(sq) {
  if (userDrawings.squares.has(sq)) {
    userDrawings.squares.delete(sq);
    squares[sq]?.el.classList.remove('square-highlighted');
  } else {
    userDrawings.squares.add(sq);
    squares[sq]?.el.classList.add('square-highlighted');
  }
}

function toggleArrow(from, to) {
  const idx = userDrawings.arrows.findIndex((a) => a.from === from && a.to === to);
  if (idx !== -1) {
    userDrawings.arrows.splice(idx, 1);
  } else {
    userDrawings.arrows.push({ from, to });
  }
  renderUserDrawings();
}

function clearUserDrawings() {
  userDrawings.arrows = [];
  userDrawings.squares.forEach((sq) => {
    squares[sq]?.el.classList.remove('square-highlighted');
  });
  userDrawings.squares.clear();
  renderUserDrawings();
}

function updateVolume(val) {
  currentVolume = val / 100;
  if (!isMuted) {
    Object.values(Sounds).forEach((clip) => {
      clip.volume = currentVolume;
    });
  }
}

function toggleMute() {
  isMuted = !isMuted;
  Object.values(Sounds).forEach((clip) => {
    clip.volume = isMuted ? 0 : currentVolume;
  });

  const btnMute = document.getElementById('btn-mute');
  const svgVolume = document.getElementById('svg-volume');

  if (isMuted) {
    btnMute.classList.add('text-rose-400');
    svgVolume.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6L4.5 9.5H1.5v5h3L9 18.25V5.75z" />`;
  } else {
    btnMute.classList.remove('text-rose-400');
    svgVolume.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M12 18.75V5.25L7.75 9.5H4.5v5h3.25L12 18.75z" />`;
  }
}

function playSound(key) {
  const clip = Sounds[key];
  if (!clip) return;
  try {
    const inst = clip.cloneNode();
    inst.volume = clip.volume;
    inst.play().catch(() => { });
  } catch {
  }
}

function playMoveSound(move) {
  if (move.san.includes('#')) return;
  if (move.captured) {
    playSound('capture');
  } else if (move.san.includes('+') || game.in_check()) {
    playSound('check');
  } else {
    playSound('move');
  }
}

let selectedSquare = null;
let lastMove = null;
let dragFrom = null;
let boardFlipped = false;
let aiThinking = false;
let gameOverReason = null;
let gameOverWinner = null;

let initialTimeMs = 600000;
let whiteTimeMs = 600000;
let blackTimeMs = 600000;
let clockStarted = false;
let activeClock = null;
let clockInterval = null;
let lastTickAt = 0;

let snapshots = [];
let snapshotIndex = 0;
let moveAnalyses = [];
let engineEvalCp = null;
let analysisQueue = Promise.resolve();

const squares = {};

const Engine = (() => {
  let worker = null;
  let ready = false;
  let currentRequest = null;
  let lastInfo = { cp: 0, mate: null, pv: '', bestmove: '' };

  function emitBestmove(uci) {
    if (!currentRequest) return;
    const req = currentRequest;
    currentRequest = null;
    const payload = {
      cp: lastInfo.cp,
      mate: lastInfo.mate,
      bestmove: uci || lastInfo.bestmove || lastInfo.pv,
      pv: lastInfo.pv,
    };

    if (req.kind === 'ai') {
      handleStockfishAiMove(payload.bestmove);
      if (req.resolve) req.resolve(payload);
    } else if (req.resolve) {
      req.resolve(payload);
    }
  }

  function parseLine(line) {
    if (typeof line !== 'string') return;
    if (line === 'uciok') ready = true;

    if (line.startsWith('info ') && line.includes(' score ')) {
      const depthMatch = line.match(/\bdepth (\d+)/);
      if (!depthMatch || parseInt(depthMatch[1], 10) < 8) return;
      const cpMatch = line.match(/\bscore cp (-?\d+)/);
      const mateMatch = line.match(/\bscore mate (-?\d+)/);
      const pvMatch = line.match(/\bpv ([a-h][1-8][a-h][1-8][qrbn]?)/);
      if (cpMatch) {
        lastInfo.cp = parseInt(cpMatch[1], 10);
        lastInfo.mate = null;
      }
      if (mateMatch) lastInfo.mate = parseInt(mateMatch[1], 10);
      if (pvMatch) lastInfo.pv = pvMatch[1];
    }

    if (line.startsWith('bestmove ')) {
      const parts = line.split(' ');
      const uci = parts[1] || lastInfo.pv;
      lastInfo.bestmove = uci;
      emitBestmove(uci);
    }
  }

  function init() {
    return new Promise((resolve) => {
      try {
        const sfBlob = new Blob(["importScripts('https://cdnjs.cloudflare.com/ajax/libs/stockfish.js/10.0.2/stockfish.js');"], { type: 'application/javascript' });
        worker = new Worker(URL.createObjectURL(sfBlob));
      } catch (err) {
        console.warn('Stockfish yüklenemedi:', err);
        resolve(false);
        return;
      }
      worker.onmessage = (e) => parseLine(e.data);
      worker.postMessage('uci');
      window.setTimeout(() => resolve(ready), 1200);
    });
  }

  function startSearch(fen, movetime, kind, depth, skill) {
    return new Promise((resolve) => {
      if (!worker || !ready) {
        resolve(null);
        return;
      }
      lastInfo = { cp: 0, mate: null, pv: '', bestmove: '' };
      currentRequest = { kind, resolve, fen };
      worker.postMessage('stop');
      if (skill !== undefined) worker.postMessage(`setoption name Skill Level value ${skill}`);
      worker.postMessage(`position fen ${fen}`);

      let goCmd = `go movetime ${movetime}`;
      if (depth !== undefined) goCmd += ` depth ${depth}`;
      worker.postMessage(goCmd);

      window.setTimeout(() => {
        if (currentRequest === null) return;
        if (currentRequest.kind !== kind) return;
        emitBestmove(lastInfo.bestmove || lastInfo.pv);
      }, movetime + 280);
    });
  }

  function analyze(fen, movetime = 280) {
    return startSearch(fen, movetime, 'analyze');
  }

  function requestAiMove(fen, movetime = 900, depth, skill) {
    return startSearch(fen, movetime, 'ai', depth, skill);
  }

  return { init, analyze, requestAiMove, isReady: () => ready };
})();

function handleStockfishAiMove(uci) {
  if (!VS_AI || !aiThinking) return;
  if (gameOverReason || game.game_over()) {
    aiThinking = false;
    updateNavButtons();
    return;
  }
  if (game.turn() !== 'b') {
    aiThinking = false;
    updateNavButtons();
    return;
  }

  const parsed = parseUci(uci);
  if (!parsed) {
    aiThinking = false;
    updateNavButtons();
    return;
  }

  const thinkDelay = 600 + Math.floor(Math.random() * 401);

  window.setTimeout(() => {
    if (gameOverReason || game.game_over() || game.turn() !== 'b') {
      aiThinking = false;
      updateNavButtons();
      return;
    }

    const played = executeMove(parsed.from, parsed.to, {
      animate: true,
      recordSnapshot: true,
      promotion: parsed.promotion || 'q',
      fromAi: true,
    });

    if (!played) {
      aiThinking = false;
      updateNavButtons();
    }
  }, thinkDelay);
}

function squareName(row, col) {
  return String.fromCharCode(97 + col) + (8 - row);
}

function formatClock(ms) {
  const totalSec = Math.max(0, Math.ceil(ms / 1000));
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

function presetLabel(seconds) {
  const m = Math.floor(seconds / 60);
  return `${m}+0`;
}

function stopClock() {
  if (clockInterval) {
    clearInterval(clockInterval);
    clockInterval = null;
  }
  activeClock = null;
}

function updateClockDisplay() {
  clockWhite.textContent = formatClock(whiteTimeMs);
  clockBlack.textContent = formatClock(blackTimeMs);

  clockWhite.classList.toggle('clock-low-time', whiteTimeMs > 0 && whiteTimeMs <= 30000);
  clockBlack.classList.toggle('clock-low-time', blackTimeMs > 0 && blackTimeMs <= 30000);

  clockWhite.classList.toggle('clock-warning', whiteTimeMs > 0 && whiteTimeMs <= 10000);
  clockBlack.classList.toggle('clock-warning', blackTimeMs > 0 && blackTimeMs <= 10000);

  if (!gameOverReason && clockStarted) {
    clockWhite.classList.toggle('clock-active', activeClock === 'w');
    clockBlack.classList.toggle('clock-active', activeClock === 'b');
  } else {
    clockWhite.classList.remove('clock-active');
    clockBlack.classList.remove('clock-active');
  }
}

function tickClocks() {
  if (!clockStarted || gameOverReason || game.game_over()) return;

  const now = performance.now();
  const delta = now - lastTickAt;
  lastTickAt = now;

  if (activeClock === 'w') whiteTimeMs = Math.max(0, whiteTimeMs - delta);
  else if (activeClock === 'b') blackTimeMs = Math.max(0, blackTimeMs - delta);

  updateClockDisplay();

  if (whiteTimeMs <= 0) endByTimeout('b');
  else if (blackTimeMs <= 0) endByTimeout('w');
}

function startClockFor(color) {
  stopClock();
  if (gameOverReason || game.game_over()) return;
  activeClock = color;
  lastTickAt = performance.now();
  clockInterval = window.setInterval(tickClocks, 100);
  updateClockDisplay();
}

function onMoveClockSwitch(moverColor) {
  if (gameOverReason) return;

  if (!clockStarted) {
    clockStarted = true;
    startClockFor(moverColor === 'w' ? 'b' : 'w');
    return;
  }

  startClockFor(moverColor === 'w' ? 'b' : 'w');
}

function resetClocks(seconds) {
  stopClock();
  initialTimeMs = seconds * 1000;
  whiteTimeMs = initialTimeMs;
  blackTimeMs = initialTimeMs;
  clockStarted = false;
  updateClockDisplay();
}

function endByTimeout(winnerColor) {
  if (gameOverReason) return;
  stopClock();
  gameOverReason = 'timeout';
  gameOverWinner = winnerColor;
  whiteTimeMs = winnerColor === 'w' ? Math.max(whiteTimeMs, 0) : 0;
  blackTimeMs = winnerColor === 'b' ? Math.max(blackTimeMs, 0) : 0;
  updateClockDisplay();
  updateStatus();
  showGameModal('Süre Bitti', `Süre bitti — ${winnerColor === 'w' ? 'Beyaz' : 'Siyah'} kazandı.`);
}

function showGameModal(title, message) {
  modalTitle.textContent = title;
  modalMessage.textContent = message;
  gameModal.classList.add('is-open');
  playSound('game_end');
}

function hideGameModal() {
  gameModal.classList.remove('is-open');
}

function switchSideTab(tab) {
  const isHistory = tab === 'history';
  tabHistory.classList.toggle('side-tab-active', isHistory);
  tabAnalysis.classList.toggle('side-tab-active', !isHistory);
  tabHistory.setAttribute('aria-selected', isHistory ? 'true' : 'false');
  tabAnalysis.setAttribute('aria-selected', !isHistory ? 'true' : 'false');
  panelHistory.classList.toggle('hidden', !isHistory);
  panelHistory.classList.toggle('flex', isHistory);
  panelAnalysis.classList.toggle('hidden', isHistory);
  panelAnalysis.classList.toggle('flex', !isHistory);
  if (!isHistory) updateAnalysisPanel();
}

function sideEvalFromAnalysis(analysis, sideToMove) {
  if (!analysis) return 0;
  if (analysis.mate !== null) {
    const mate = analysis.mate;
    return mate > 0 ? 10000 - mate : -10000 - mate;
  }
  return analysis.cp;
}

function classifyMove(cpLoss, isBest, ply) {
  if (isBest || cpLoss <= 8) return 'best';
  if (ply <= 12 && cpLoss <= 35) return 'book';
  if (cpLoss <= 25) return 'excellent';
  if (cpLoss <= 55) return 'good';
  if (cpLoss <= 120) return 'mistake';
  return 'blunder';
}

function parseUci(uci) {
  if (!uci || uci.length < 4 || uci === '(none)') return null;
  return {
    from: uci.slice(0, 2),
    to: uci.slice(2, 4),
    promotion: uci.length > 4 ? uci[4] : undefined,
  };
}

function detectBlunderWarning(fenAfter, moverColor, cpLoss) {
  const probe = new Chess();
  if (!probe.load(fenAfter)) return '⚠️ Avantaj Kaybedildi';

  const opponentMoves = probe.moves({ verbose: true });
  let hung = null;
  for (const m of opponentMoves) {
    if (!m.captured) continue;
    const val = PIECE_VALUES[m.captured] || 0;
    if (val >= 3) {
      hung = m.captured === 'q' ? 'Vezir Tehdit Altında!' : m.captured === 'r' ? 'Kale Boşta!' : 'Taş Boşta!';
      break;
    }
  }
  if (hung) return `⚠️ Dikkat: ${hung}`;
  if (cpLoss >= 250) return '⚠️ Ciddi Avantaj Kaybedildi';
  return '⚠️ Avantaj Kaybedildi';
}

function qualityIconHtml(quality) {
  const meta = QUALITY_META[quality] || QUALITY_META.good;
  return `<span class="quality-dot ${meta.dot}" title="${meta.label}"></span>`;
}

function formatMoveCell(san, plyIndex) {
  const analysis = moveAnalyses[plyIndex];
  if (!analysis) return san;
  return `<span class="inline-flex items-center gap-1.5">${qualityIconHtml(analysis.quality)}<span>${san}</span></span>`;
}

function showAnalysisAlert(message) {
  if (!message) {
    analysisAlert.classList.add('hidden');
    analysisAlert.textContent = '';
    return;
  }
  analysisAlert.textContent = message;
  analysisAlert.classList.remove('hidden');
}

function updateAnalysisPanel() {
  const counts = { best: 0, excellent: 0, good: 0, book: 0, mistake: 0, blunder: 0 };
  moveAnalyses.forEach((a) => {
    if (counts[a.quality] !== undefined) counts[a.quality] += 1;
  });

  const total = moveAnalyses.length || 1;
  ['best', 'excellent', 'good', 'book', 'mistake', 'blunder'].forEach((key) => {
    const el = document.getElementById(`bar-${key}`);
    if (el) el.style.width = `${(counts[key] / total) * 100}%`;
  });

  analysisStats.innerHTML = Object.entries(QUALITY_META)
    .map(([key, meta]) => `<div class="flex items-center justify-between gap-2"><span class="inline-flex items-center gap-1.5">${qualityIconHtml(key)}${meta.label}</span><span class="font-mono text-slate-200">${counts[key] || 0}</span></div>`)
    .join('');

  if (moveAnalyses.length === 0) {
    analysisEmpty.classList.remove('hidden');
    analysisMoveList.querySelectorAll('li:not(#analysis-empty)').forEach((n) => n.remove());
    return;
  }

  analysisEmpty.classList.add('hidden');
  analysisMoveList.querySelectorAll('li:not(#analysis-empty)').forEach((n) => n.remove());

  moveAnalyses.forEach((a, i) => {
    const meta = QUALITY_META[a.quality] || QUALITY_META.good;
    const li = document.createElement('li');
    li.className = 'flex items-center justify-between gap-2 rounded-lg border border-surface-border/40 bg-surface-raised/40 px-2.5 py-1.5';
    li.innerHTML = `
      <span class="inline-flex min-w-0 items-center gap-2 ${meta.text}">
        ${qualityIconHtml(a.quality)}
        <span class="truncate font-mono">${i + 1}. ${a.san}</span>
      </span>
      <span class="shrink-0 text-[10px] text-slate-500">${meta.label}${a.cpLoss ? ` · ${a.cpLoss}cp` : ''}</span>
    `;
    analysisMoveList.appendChild(li);
  });

  const lastHumanBlunder = [...moveAnalyses].reverse().find((a) => a.color === HUMAN_COLOR && a.quality === 'blunder');
  if (lastHumanBlunder?.warning) showAnalysisAlert(lastHumanBlunder.warning);
  else if (moveAnalyses.length) showAnalysisAlert(null);
}

function queueMoveAnalysis(fenBefore, fenAfter, playedUci, moverColor, san) {
  analysisQueue = analysisQueue.then(async () => {
    const [beforeResult, afterResult] = await Promise.all([
      Engine.analyze(fenBefore, 320),
      Engine.analyze(fenAfter, 220),
    ]);

    let cpLoss = 0;
    let isBest = false;
    let bestMove = null;

    if (beforeResult) {
      bestMove = parseUci(beforeResult.bestmove || beforeResult.pv);
      isBest = (beforeResult.bestmove || beforeResult.pv || '').slice(0, 4) === playedUci.slice(0, 4);
      const evalBefore = sideEvalFromAnalysis(beforeResult, moverColor);
      const evalAfter = afterResult ? -sideEvalFromAnalysis(afterResult, moverColor === 'w' ? 'b' : 'w') : evalBefore;
      cpLoss = Math.max(0, Math.round(evalBefore - evalAfter));
    } else {
      const matBefore = computeMaterial(fenBefore, moverColor);
      const matAfter = computeMaterial(fenAfter, moverColor);
      cpLoss = Math.max(0, Math.round((matBefore - matAfter) * 100));
    }

    const ply = moveAnalyses.length + 1;
    const quality = classifyMove(cpLoss, isBest, ply);
    const warning = quality === 'blunder' && moverColor === HUMAN_COLOR
      ? detectBlunderWarning(fenAfter, moverColor, cpLoss)
      : null;

    moveAnalyses.push({ ply, san, color: moverColor, quality, cpLoss, bestMove, warning });

    if (snapshotIndex === snapshots.length - 1 && moveAnalyses.length === game.history().length) {
      snapshots[snapshotIndex] = createSnapshot();
    }

    updateHistory();
    updateAnalysisPanel();
    if (warning && snapshotIndex === snapshots.length - 1) {
      showAnalysisAlert(warning);
      if (panelAnalysis.classList.contains('hidden')) switchSideTab('analysis');
    }
  });
}

function computeMaterial(fen, forColor) {
  const probe = new Chess();
  if (!probe.load(fen)) return 0;
  const board = probe.board();
  let score = 0;
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const cell = board[row][col];
      if (!cell) continue;
      const val = PIECE_VALUES[cell.type] || 0;
      if (cell.color === forColor) score += val;
      else score -= val;
    }
  }
  return score;
}

function isReviewingPosition() {
  return snapshotIndex < snapshots.length - 1;
}

function clearAnalysisArrow() {
  analysisArrow.innerHTML = '';
  analysisArrow.classList.add('opacity-0');
}

function drawBestMoveArrow(from, to) {
  const fromEl = squares[from]?.el;
  const toEl = squares[to]?.el;
  if (!fromEl || !toEl) {
    clearAnalysisArrow();
    return;
  }

  const shellRect = boardShell.getBoundingClientRect();
  const fromRect = fromEl.getBoundingClientRect();
  const toRect = toEl.getBoundingClientRect();

  const x1 = fromRect.left + fromRect.width / 2 - shellRect.left;
  const y1 = fromRect.top + fromRect.height / 2 - shellRect.top;
  const x2 = toRect.left + toRect.width / 2 - shellRect.left;
  const y2 = toRect.top + toRect.height / 2 - shellRect.top;

  analysisArrow.setAttribute('viewBox', `0 0 ${shellRect.width} ${shellRect.height}`);
  analysisArrow.innerHTML = `
    <defs>
      <marker id="arrowhead" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto">
        <polygon points="0 0, 7 3.5, 0 7" fill="rgba(96,165,250,0.85)" />
      </marker>
    </defs>
    <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"
      stroke="rgba(96,165,250,0.55)" stroke-width="10" stroke-linecap="round"
      marker-end="url(#arrowhead)" />
  `;
  analysisArrow.classList.remove('opacity-0');
}

async function updateReviewArrow() {
  if (!isReviewingPosition()) {
    clearAnalysisArrow();
    return;
  }

  const result = await Engine.analyze(game.fen(), 380);
  const uci = result?.bestmove || result?.pv;
  const arrow = parseUci(uci);
  if (arrow) {
    window.requestAnimationFrame(() => drawBestMoveArrow(arrow.from, arrow.to));
  } else {
    clearAnalysisArrow();
  }
}

async function calculateEvaluation() {
  const result = await Engine.analyze(game.fen(), 220);
  if (result) {
    engineEvalCp = result.mate !== null
      ? (result.mate > 0 ? 1000 : -1000)
      : (game.turn() === 'w' ? result.cp : -result.cp);
  } else {
    engineEvalCp = null;
  }
  updateEvalBar();
}

function computeEval() {
  const board = game.board();
  let score = 0;
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const cell = board[row][col];
      if (!cell) continue;
      const val = PIECE_VALUES[cell.type] || 0;
      score += cell.color === 'w' ? val : -val;
    }
  }
  if (game.in_checkmate()) score = game.turn() === 'w' ? -999 : 999;
  return score;
}

function updateEvalBar() {
  const score = engineEvalCp !== null ? engineEvalCp / 100 : computeEval();
  const clamped = Math.max(-10, Math.min(10, score));
  const whitePercent = ((clamped + 10) / 20) * 100;
  evalFill.style.height = `${whitePercent}%`;

  if (score > 0.05) {
    evalFill.className = 'absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-500/85 to-cyan-400/75';
  } else if (score < -0.05) {
    evalFill.className = 'absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-600/90 to-slate-500/70';
  } else {
    evalFill.className = 'absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cyan-500/80 to-emerald-400/70';
  }

  if (Math.abs(score) >= 9) {
    evalLabel.textContent = score > 0 ? 'M+' : 'M-';
  } else {
    const display = score.toFixed(1);
    evalLabel.textContent = score > 0 ? `+${display}` : display;
  }
}

function createSnapshot() {
  return {
    fen: game.fen(),
    lastMove: lastMove ? { from: lastMove.from, to: lastMove.to } : null,
    whiteTimeMs,
    blackTimeMs,
    clockStarted,
    gameOverReason,
    gameOverWinner,
    moveAnalyses: moveAnalyses.map((a) => ({ ...a, bestMove: a.bestMove ? { ...a.bestMove } : null })),
  };
}

function applySnapshot(snapshot) {
  game.load(snapshot.fen);
  lastMove = snapshot.lastMove;
  whiteTimeMs = snapshot.whiteTimeMs;
  blackTimeMs = snapshot.blackTimeMs;
  clockStarted = snapshot.clockStarted;
  gameOverReason = snapshot.gameOverReason;
  gameOverWinner = snapshot.gameOverWinner;
  moveAnalyses = (snapshot.moveAnalyses || []).map((a) => ({ ...a, bestMove: a.bestMove ? { ...a.bestMove } : null }));
  selectedSquare = null;
  stopClock();
  if (clockStarted && !gameOverReason && !game.game_over()) {
    startClockFor(game.turn());
  }
  updateClockDisplay();
}

function rebuildSnapshots() {
  snapshots = [createSnapshot()];
  snapshotIndex = 0;
  updateNavButtons();
}

function pushSnapshot() {
  snapshots = snapshots.slice(0, snapshotIndex + 1);
  snapshots.push(createSnapshot());
  snapshotIndex = snapshots.length - 1;
  updateNavButtons();
}

function updateNavButtons() {
  btnUndo.disabled = snapshotIndex <= 0 || aiThinking;
  btnRedo.disabled = snapshotIndex >= snapshots.length - 1 || aiThinking;
}

function undoStepsCount() {
  if (!VS_AI) return 1;
  const ply = game.history().length;
  if (ply >= 2 && ply % 2 === 0) return 2;
  return 1;
}

function undoMove() {
  if (snapshotIndex <= 0 || aiThinking) return;
  const steps = undoStepsCount();
  snapshotIndex = Math.max(0, snapshotIndex - steps);
  applySnapshot(snapshots[snapshotIndex]);
  hideGameModal();
  boardEndOverlay.classList.remove('is-visible');
  renderBoard();
  updateStatus();
  updateHistory();
  updateEvalBar();
  updateAnalysisPanel();
  updateReviewArrow();
  calculateEvaluation();
  updateNavButtons();
}

function redoMove() {
  if (snapshotIndex >= snapshots.length - 1 || aiThinking) return;
  let steps = 1;
  if (VS_AI) {
    const remaining = snapshots.length - 1 - snapshotIndex;
    if (remaining >= 2 && (snapshotIndex === 0 || snapshotIndex % 2 === 1)) steps = 2;
  }
  snapshotIndex = Math.min(snapshots.length - 1, snapshotIndex + steps);
  applySnapshot(snapshots[snapshotIndex]);
  hideGameModal();
  renderBoard();
  updateStatus();
  updateHistory();
  updateEvalBar();
  updateAnalysisPanel();
  updateReviewArrow();
  calculateEvaluation();
  updateNavButtons();
  scheduleAiMove();
}

function findKingSquare(color) {
  const position = game.board();
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const cell = position[row][col];
      if (cell && cell.type === 'k' && cell.color === color) {
        return squareName(row, col);
      }
    }
  }
  return null;
}

function accentClassesForSquare(name) {
  const list = [];
  if (gameOverReason === 'timeout') {
    const wSq = findKingSquare('w');
    const bSq = findKingSquare('b');
    if (gameOverWinner === 'w' && name === wSq) list.push('square-winner-king');
    if (gameOverWinner === 'b' && name === bSq) list.push('square-winner-king');
    if (gameOverWinner === 'w' && name === bSq) list.push('square-loser-king');
    if (gameOverWinner === 'b' && name === wSq) list.push('square-loser-king');
    return list;
  }
  if (game.in_checkmate()) {
    const loser = game.turn();
    const winner = loser === 'w' ? 'b' : 'w';
    const wSq = findKingSquare(winner);
    const lSq = findKingSquare(loser);
    if (name === wSq) list.push('square-winner-king');
    if (name === lSq) list.push('square-loser-king');
    return list;
  }
  if (game.in_stalemate()) {
    const wSq = findKingSquare('w');
    const bSq = findKingSquare('b');
    if (name === wSq || name === bSq) list.push('square-stalemate-king');
    return list;
  }
  if (lastMove) {
    if (name === lastMove.from) list.push('square-last-from');
    if (name === lastMove.to) list.push('square-last-to');
  }
  if (game.in_check()) {
    const inCheckSq = findKingSquare(game.turn());
    if (name === inCheckSq) list.push('square-king-check');
  }
  return list;
}

function clearSelectionUi() {
  Object.values(squares).forEach((sq) => {
    sq.el.classList.remove('square-selected', 'square-legal', 'square-legal-capture');
  });
}

function applyLastMoveHighlights() {
  if (!lastMove) return;
  const a = squares[lastMove.from];
  const b = squares[lastMove.to];
  if (a) a.el.classList.add('square-last-from');
  if (b) b.el.classList.add('square-last-to');
}

function showLegalMoves(fromSquare) {
  const moves = game.moves({ square: fromSquare, verbose: true });
  moves.forEach((m) => {
    const sq = squares[m.to];
    if (!sq) return;
    if (m.captured) sq.el.classList.add('square-legal-capture');
    else sq.el.classList.add('square-legal');
  });
}

function triggerRejectPulse(fromSq) {
  if (!fromSq || !squares[fromSq]) return;
  const wrap = squares[fromSq].el;
  const pc = wrap.querySelector('.piece');
  wrap.classList.add('square-invalid-flash');
  if (pc) {
    pc.classList.remove('piece-reject');
    void pc.offsetWidth;
    pc.classList.add('piece-reject');
  }
  window.setTimeout(() => {
    wrap.classList.remove('square-invalid-flash');
    if (pc) pc.classList.remove('piece-reject');
  }, 480);
}

function updateTurnAuras() {
  if (game.game_over() || gameOverReason) {
    playerWhite.classList.remove('player-turn-active');
    playerBlack.classList.remove('player-turn-active');
    return;
  }
  const whiteTurn = game.turn() === 'w';
  playerWhite.classList.toggle('player-turn-active', whiteTurn);
  playerBlack.classList.toggle('player-turn-active', !whiteTurn);
}

function updateEndOverlay() {
  const mate = game.in_checkmate();
  const stale = game.in_stalemate();
  const timeout = gameOverReason === 'timeout';
  boardEndOverlay.classList.toggle('is-visible', mate || stale || timeout);
}

function updateStatus() {
  updateEndOverlay();

  if (gameOverReason === 'timeout') {
    const winner = gameOverWinner === 'w' ? 'Beyaz' : 'Siyah';
    statusEl.textContent = `Süre bitti! ${winner} kazandı.`;
    statusEl.className = 'mt-2 font-display text-lg font-semibold text-rose-400';
    updateTurnAuras();
    return;
  }

  if (game.in_checkmate()) {
    const winner = game.turn() === 'w' ? 'Siyah' : 'Beyaz';
    statusEl.textContent = `Mat! ${winner} kazandı.`;
    statusEl.className = 'mt-2 font-display text-lg font-semibold text-rose-400';
    updateTurnAuras();
    return;
  }
  if (game.in_stalemate()) {
    statusEl.textContent = 'Pat — berabere.';
    statusEl.className = 'mt-2 font-display text-lg font-semibold text-amber-300';
    updateTurnAuras();
    return;
  }
  if (game.in_draw()) {
    statusEl.textContent = 'Berabere.';
    statusEl.className = 'mt-2 font-display text-lg font-semibold text-amber-300';
    updateTurnAuras();
    return;
  }

  const turnLabel = game.turn() === 'w' ? 'Beyaz' : 'Siyah';
  let text = `Sıra ${turnLabel} oyuncuda`;
  if (game.in_check()) text = `Şah! — ${text}`;

  statusEl.textContent = text;
  statusEl.className = game.in_check()
    ? 'mt-2 font-display text-lg font-semibold text-amber-300'
    : 'mt-2 font-display text-lg font-semibold text-emerald-300';

  updateTurnAuras();

  const whiteTurn = game.turn() === 'w';
  clockWhite.classList.toggle('ring-1', whiteTurn);
  clockWhite.classList.toggle('ring-emerald-500/20', whiteTurn);
  clockBlack.classList.toggle('ring-1', !whiteTurn);
  clockBlack.classList.toggle('ring-board-accent/30', !whiteTurn);
}

function updateHistory() {
  const history = game.history();
  historyBody.innerHTML = '';
  historyEmpty.classList.toggle('hidden', history.length > 0);

  for (let i = 0; i < history.length; i += 2) {
    const moveNum = Math.floor(i / 2) + 1;
    const white = history[i] || '';
    const black = history[i + 1] || '';
    const tr = document.createElement('tr');
    tr.className = 'border-t border-surface-border/40 hover:bg-surface-raised/50';
    tr.innerHTML = `
      <td class="px-2 py-1.5 text-slate-500">${moveNum}.</td>
      <td class="px-2 py-1.5">${white ? formatMoveCell(white, i) : ''}</td>
      <td class="px-2 py-1.5">${black ? formatMoveCell(black, i + 1) : ''}</td>
    `;
    historyBody.appendChild(tr);
  }

  pgnEl.value = game.pgn() || '';
}

function checkGameEndModal() {
  if (gameOverReason === 'timeout') return;
  if (game.in_checkmate()) {
    const winner = game.turn() === 'w' ? 'Siyah' : 'Beyaz';
    stopClock();
    showGameModal('Mat!', `${winner} kazandı.`);
    return;
  }
  if (game.in_stalemate()) {
    stopClock();
    showGameModal('Pat', 'Oyun berabere — pat.');
    return;
  }
  if (game.in_draw()) {
    stopClock();
    showGameModal('Berabere', 'Oyun berabere bitti.');
  }
}

function finishMoveUi(toSquareName, moverColor, recordSnapshot, options = {}) {
  if (game.game_over() || gameOverReason) stopClock();
  else onMoveClockSwitch(moverColor);

  renderBoard();
  updateStatus();
  updateHistory();
  updateEvalBar();
  if (recordSnapshot) pushSnapshot();
  checkGameEndModal();
  updateNavButtons();
  updateAnalysisPanel();
  if (!isReviewingPosition()) clearAnalysisArrow();
  window.requestAnimationFrame(() => {
    const dest = squares[toSquareName]?.el;
    const dp = dest?.querySelector('.piece');
    dest?.classList.add('square-land-burst');
    dp?.classList.add('piece-just-landed');
    window.setTimeout(() => {
      dest?.classList.remove('square-land-burst');
      dp?.classList.remove('piece-just-landed');
    }, 420);
  });

  if (options.fromAi) {
    aiThinking = false;
    updateNavButtons();
  }

  calculateEvaluation();

  if (!options.fromAi) {
    scheduleAiMove();
  }
}

function scheduleAiMove() {
  if (!VS_AI || aiThinking || gameOverReason || game.game_over()) return;
  if (game.turn() !== 'b') return;

  aiThinking = true;
  updateNavButtons();

  const aiLevel = aiLevelEl?.value || "4";
  let randomChance = 0;
  if (aiLevel === "1") randomChance = 0.40;
  else if (aiLevel === "2") randomChance = 0.10;

  if (Math.random() < randomChance) {
    const validMoves = game.moves({ verbose: true });
    if (validMoves.length > 0) {
      const rm = validMoves[Math.floor(Math.random() * validMoves.length)];
      const uci = rm.from + rm.to + (rm.promotion || '');
      handleStockfishAiMove(uci);
      return;
    }
  }

  const aiCfg = getAiLevelConfig();
  Engine.requestAiMove(game.fen(), aiCfg.movetime, aiCfg.depth, aiCfg.skill).then((result) => {
    if (!result && aiThinking) {
      aiThinking = false;
      updateNavButtons();
      const fallback = game.moves({ verbose: true })[0];
      if (fallback && game.turn() === 'b' && !gameOverReason && !game.game_over()) {
        handleStockfishAiMove(fallback.from + fallback.to + (fallback.promotion || ''));
      }
    }
  });
}

function executeMove(from, to, options = {}) {
  const { animate = true, recordSnapshot = true, promotion = 'q', fromAi = false } = options;
  if (gameOverReason || game.game_over()) return false;
  if (!fromAi && aiThinking) return false;

  clearUserDrawings();

  const fenBefore = game.fen();
  const moverColor = game.turn();

  const fromEl = squares[from]?.el;
  const toEl = squares[to]?.el;
  const pieceNode = fromEl?.querySelector('.piece');

  const move = game.move({ from, to, promotion });
  if (move === null) {
    triggerRejectPulse(from);
    return false;
  }

  playMoveSound(move);

  const playedUci = move.from + move.to + (move.promotion || '');
  const fenAfter = game.fen();
  queueMoveAnalysis(fenBefore, fenAfter, playedUci, moverColor, move.san);

  lastMove = { from, to };
  selectedSquare = null;

  const finish = () => finishMoveUi(to, moverColor, recordSnapshot, { fromAi });

  if (animate && pieceNode && fromEl && toEl) {
    const fromRect = pieceNode.getBoundingClientRect();
    const toRect = toEl.getBoundingClientRect();

    if (fromRect.width > 0 && toRect.width > 0) {
      const captureEl = toEl.querySelector('.piece');
      if (captureEl && captureEl !== pieceNode) captureEl.style.visibility = 'hidden';
      pieceNode.style.visibility = 'hidden';

      const ghost = document.createElement('span');
      ghost.className = `${pieceNode.className} piece-flying`.trim();
      ghost.textContent = pieceNode.textContent;
      ghost.setAttribute('aria-hidden', 'true');
      ghost.style.left = `${fromRect.left}px`;
      ghost.style.top = `${fromRect.top}px`;
      ghost.style.width = `${fromRect.width}px`;
      ghost.style.height = `${fromRect.height}px`;
      document.body.appendChild(ghost);

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          const tcx = toRect.left + toRect.width / 2;
          const tcy = toRect.top + toRect.height / 2;
          const fcx = fromRect.left + fromRect.width / 2;
          const fcy = fromRect.top + fromRect.height / 2;
          ghost.style.transform = `translate(${tcx - fcx}px, ${tcy - fcy}px)`;
        });
      });

      let done = false;
      const cleanup = () => {
        if (done) return;
        done = true;
        ghost.remove();
        finish();
      };

      ghost.addEventListener(
        'transitionend',
        (e) => {
          if (e.propertyName === 'transform') cleanup();
        },
        { once: true }
      );

      window.setTimeout(cleanup, 520);
      return true;
    }
  }

  finish();
  return true;
}

function tryMove(from, to) {
  if (gameOverReason || aiThinking) return false;
  if (VS_AI && game.turn() !== HUMAN_COLOR) return false;
  return executeMove(from, to, { animate: true, recordSnapshot: true });
}

function onSquareClick(name) {
  if (gameOverReason || game.game_over() || aiThinking) return;
  if (VS_AI && game.turn() !== HUMAN_COLOR) return;

  const piece = game.get(name);
  const turn = game.turn();

  if (!selectedSquare) {
    if (piece && piece.color === turn) {
      selectedSquare = name;
      clearSelectionUi();
      applyLastMoveHighlights();
      squares[name].el.classList.add('square-selected');
      showLegalMoves(name);
    }
    return;
  }

  if (selectedSquare === name) {
    selectedSquare = null;
    clearSelectionUi();
    applyLastMoveHighlights();
    return;
  }

  if (piece && piece.color === turn) {
    selectedSquare = name;
    clearSelectionUi();
    applyLastMoveHighlights();
    squares[name].el.classList.add('square-selected');
    showLegalMoves(name);
    return;
  }

  const from = selectedSquare;
  selectedSquare = null;
  if (!tryMove(from, name)) {
    clearSelectionUi();
    applyLastMoveHighlights();
  }
}

function setupDrag(pieceEl, squareName) {
  pieceEl.draggable = true;

  pieceEl.addEventListener('dragstart', (e) => {
    if (gameOverReason || game.game_over() || aiThinking) {
      e.preventDefault();
      return;
    }
    if (VS_AI && game.turn() !== HUMAN_COLOR) {
      e.preventDefault();
      return;
    }
    const piece = game.get(squareName);
    if (!piece || piece.color !== game.turn()) {
      e.preventDefault();
      return;
    }
    dragFrom = squareName;
    pieceEl.classList.add('dragging');
    e.dataTransfer.setData('text/plain', squareName);
    e.dataTransfer.effectAllowed = 'move';
    selectedSquare = null;
    clearSelectionUi();
    applyLastMoveHighlights();
    squares[squareName].el.classList.add('square-selected');
    showLegalMoves(squareName);
  });

  pieceEl.addEventListener('dragend', () => {
    pieceEl.classList.remove('dragging');
    dragFrom = null;
  });
}

function renderBoard() {
  boardEl.innerHTML = '';
  const position = game.board();

  let threatGrid = {};
  if (threatMapEnabled && !gameOverReason && !game.game_over()) {
    const currentMoves = game.moves({ verbose: true });
    currentMoves.forEach(m => {
      if (!threatGrid[m.to]) threatGrid[m.to] = { defenders: 0, attackers: 0 };
      threatGrid[m.to].defenders++;
    });

    const fen = game.fen();
    const tokens = fen.split(' ');
    tokens[1] = tokens[1] === 'w' ? 'b' : 'w';
    tokens[3] = '-';
    const opponentFen = tokens.join(' ');
    try {
      const tempGame = new Chess();
      if (tempGame.load(opponentFen)) {
        const opponentMoves = tempGame.moves({ verbose: true });
        opponentMoves.forEach(m => {
          if (!threatGrid[m.to]) threatGrid[m.to] = { defenders: 0, attackers: 0 };
          threatGrid[m.to].attackers++;
        });
      }
    } catch (e) {
      console.error("Threat calculation error", e);
    }
  }

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const name = squareName(row, col);
      const isDark = (row + col) % 2 === 0;
      const useAlt = col % 2 === 1;

      const el = document.createElement('div');
      el.dataset.square = name;
      el.setAttribute('role', 'gridcell');
      el.setAttribute('aria-label', `Kare ${name}`);
      const accents = accentClassesForSquare(name);
      el.className = [
        'relative flex items-center justify-center aspect-square overflow-hidden',
        isDark ? 'square-dark' : useAlt ? 'square-light alt' : 'square-light',
        ...accents,
      ].join(' ');

      el.addEventListener('click', () => onSquareClick(name));

      el.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
      });

      el.addEventListener('drop', (e) => {
        e.preventDefault();
        const from = e.dataTransfer.getData('text/plain') || dragFrom;
        if (from) tryMove(from, name);
      });

      squares[name] = { el, row, col };
      boardEl.appendChild(el);

      // Reapply right-click highlights
      if (userDrawings.squares.has(name)) {
        el.classList.add('square-highlighted');
      }

      // Apply threat map classes
      if (threatMapEnabled && threatGrid[name]) {
        const t = threatGrid[name];
        if (t.attackers > t.defenders) {
          el.classList.add('square-threat-attacked');
        } else if (t.defenders > t.attackers && position[row][col] && position[row][col].color === game.turn()) {
          el.classList.add('square-threat-defended');
        } else if (t.attackers > 0 && t.defenders > 0) {
          el.classList.add('square-threat-tension');
        }
      }

      // Add move quality badges
      const quality = getMoveQualityForCurrentSquare(name);
      if (quality) {
        const badge = document.createElement('span');
        badge.className = `move-badge move-badge-${quality}`;
        let symbol = '✓';
        if (quality === 'best' || quality === 'excellent') symbol = '★';
        else if (quality === 'brilliant') symbol = '!!';
        else if (quality === 'great') symbol = '!';
        else if (quality === 'good') symbol = '✓';
        else if (quality === 'book') symbol = '📖';
        else if (quality === 'inaccuracy') symbol = '?!';
        else if (quality === 'mistake') symbol = '?';
        else if (quality === 'blunder') symbol = '??';
        
        badge.textContent = symbol;
        badge.title = QUALITY_META[quality]?.label || '';
        el.appendChild(badge);
      }

      const cell = position[row][col];
      if (cell) {
        const span = document.createElement('span');
        span.className = `piece piece-${cell.color === 'w' ? 'white' : 'black'}`;
        span.innerHTML = `<img src="${PIECE_IMAGES[cell.color][cell.type]}" alt="${cell.color}${cell.type}" />`;
        span.setAttribute('aria-hidden', 'true');
        setupDrag(span, name);
        el.appendChild(span);
      }
    }
  }

  boardEl.classList.toggle('rotate-180', boardFlipped);
  boardEl.querySelectorAll('.piece').forEach((p) => p.classList.toggle('-rotate-180', boardFlipped));
  window.requestAnimationFrame(() => updateReviewArrow());
  window.requestAnimationFrame(() => renderUserDrawings());

  updateMaterialDengesi();
  updateOpeningDetector();
}

function toggleFlip() {
  boardFlipped = !boardFlipped;
  renderBoard();
}

function applyTheme(themeId) {
  document.documentElement.setAttribute('data-theme', themeId);
  document.querySelectorAll('.theme-btn').forEach((btn) => {
    btn.classList.toggle('theme-active', btn.dataset.theme === themeId);
  });
}

function newGame() {
  stopClock();
  game.reset();
  selectedSquare = null;
  lastMove = null;
  dragFrom = null;
  aiThinking = false;
  gameOverReason = null;
  gameOverWinner = null;
  boardFlipped = false;
  moveAnalyses = [];
  engineEvalCp = null;
  showAnalysisAlert(null);

  const seconds = parseInt(timePresetEl.value, 10) || 600;
  resetClocks(seconds);
  timeControlLabel.textContent = `GlowChess Arena · ${presetLabel(seconds)}`;

  hideGameModal();
  boardEndOverlay.classList.remove('is-visible');

  rebuildSnapshots();
  renderBoard();
  updateStatus();
  updateHistory();
  updateEvalBar();
  updateAnalysisPanel();
  clearAnalysisArrow();
  calculateEvaluation();
}

async function copyPgnToClipboard() {
  const pgn = game.pgn() || '';
  if (!pgn) return;
  try {
    await navigator.clipboard.writeText(pgn);
    btnPgnCopy.textContent = 'Kopyalandı!';
    window.setTimeout(() => { btnPgnCopy.textContent = 'PGN Kopyala'; }, 1600);
  } catch {
    pgnImport.value = pgn;
    pgnImport.classList.remove('hidden');
    btnPgnApply.classList.remove('hidden');
  }
}

function loadPgnFromText(text) {
  const trimmed = text.trim();
  if (!trimmed) return;

  const probe = new Chess();
  if (probe.load(trimmed)) {
    stopClock();
    game.load(trimmed);
    selectedSquare = null;
    lastMove = null;
    aiThinking = false;
    gameOverReason = null;
    gameOverWinner = null;
    moveAnalyses = [];
    engineEvalCp = null;
    showAnalysisAlert(null);

    hideGameModal();
    boardEndOverlay.classList.remove('is-visible');
    rebuildSnapshots();
    snapshotIndex = snapshots.length - 1;
    renderBoard();
    updateStatus();
    updateHistory();
    updateEvalBar();
    updateAnalysisPanel();
    calculateEvaluation();
    pgnImport.classList.add('hidden');
    btnPgnApply.classList.add('hidden');
    pgnImport.value = '';
    return;
  }

  if (!probe.load_pgn(trimmed)) {
    showAnalysisAlert('⚠️ Geçersiz PGN veya FEN formatı.');
    return;
  }

  stopClock();
  game.load_pgn(trimmed);
  selectedSquare = null;
  lastMove = null;
  aiThinking = false;
  gameOverReason = null;
  gameOverWinner = null;
  moveAnalyses = [];
  engineEvalCp = null;
  showAnalysisAlert(null);

  const history = game.history({ verbose: true });
  if (history.length > 0) {
    const last = history[history.length - 1];
    lastMove = { from: last.from, to: last.to };
  }

  hideGameModal();
  boardEndOverlay.classList.remove('is-visible');
  rebuildSnapshots();
  snapshotIndex = snapshots.length - 1;
  renderBoard();
  updateStatus();
  updateHistory();
  updateEvalBar();
  updateAnalysisPanel();
  calculateEvaluation();
  pgnImport.classList.add('hidden');
  btnPgnApply.classList.add('hidden');
  pgnImport.value = '';
}

document.getElementById('btn-reset')?.addEventListener('click', newGame);
btnNew.addEventListener('click', newGame);
btnUndo.addEventListener('click', undoMove);
btnRedo.addEventListener('click', redoMove);
btnFlip.addEventListener('click', toggleFlip);
document.getElementById('modal-new-game').addEventListener('click', newGame);
document.getElementById('modal-close').addEventListener('click', hideGameModal);

tabHistory.addEventListener('click', () => switchSideTab('history'));
tabAnalysis.addEventListener('click', () => switchSideTab('analysis'));
btnPgnCopy.addEventListener('click', copyPgnToClipboard);
btnPgnLoad.addEventListener('click', () => {
  pgnImport.classList.toggle('hidden');
  btnPgnApply.classList.toggle('hidden');
  if (!pgnImport.classList.contains('hidden')) pgnImport.focus();
});
btnPgnApply.addEventListener('click', () => loadPgnFromText(pgnImport.value));

aiLevelEl.addEventListener('change', () => {
  updateAiProfile();
  if (VS_AI && game.turn() === 'b' && !aiThinking) {
    scheduleAiMove();
  }
});

timePresetEl.addEventListener('change', () => {
  if (game.history().length === 0 && !gameOverReason) {
    const seconds = parseInt(timePresetEl.value, 10) || 600;
    resetClocks(seconds);
    timeControlLabel.textContent = `GlowChess Arena · ${presetLabel(seconds)}`;
    rebuildSnapshots();
  }
});

const btnMute = document.getElementById('btn-mute');
const sliderVolume = document.getElementById('slider-volume');

btnMute.addEventListener('click', toggleMute);
sliderVolume.addEventListener('input', (e) => {
  updateVolume(e.target.value);
});

const toggleThreatMap = document.getElementById('toggle-threat-map');
if (toggleThreatMap) {
  toggleThreatMap.addEventListener('change', () => {
    threatMapEnabled = toggleThreatMap.checked;
    renderBoard();
  });
}

setupRightClickDrawing();

document.querySelectorAll('.theme-btn').forEach((btn) => {
  btn.addEventListener('click', () => applyTheme(btn.dataset.theme));
});

window.addEventListener('resize', () => {
  if (isReviewingPosition()) updateReviewArrow();
  renderUserDrawings();
});

applyTheme('midnight-ice');
updateAiProfile();
Engine.init().then(() => calculateEvaluation());
newGame();
