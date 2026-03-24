export const BASE_CURRENCIES = [
  'bronze',
  'silver',
  'gold',
  'diamond',
  'ruby',
  'emerald',
  'sapphire',
  'amethyst',
  'topaz',
  'opal',
  'orange',
  'pink',
  'lime',
  'cyan',
  'teal',
  'magenta',
  'indigo',
  'violet',
  'maroon',
  'brown',
  'beige',
  'coral',
  'olive',
  'navy',
  'turquoise',
  'peach',
  'mint',
  'lavender',
  'cherry',
  'apricot',
  'rose',
  'aqua',
  'limegreen',
  'mustard',
  'plum',
  'fuchsia',
  'tan',
  'salmon',
  'periwinkle',
  'charcoal',
  'crimson',
  'amber',
  'jade',
  'ivory',
  'cerulean',
  'scarlet',
  'ochre',
  'azure',
  'lilac',
  'graphite',
];

export interface WorldConfig {
  id: string;
  name: string;
  currencies: string[];
  basePrice: number;
  baseIncrement: number;
  symbol?: string;
}

const WORLD_IDS = [
  'classic',
  'bars',
  'dots',
  'dots-vs-bars',
  'spinner',
  'shapes',
  'polygons',
  'progress',
  'wobbling',
  'infinity',
  'zig-zag',
  'wavy',
  'mechanic',
  'continuous',
  'growing',
  'pulsing',
  'flipping',
  'arcade',
  'hypnotic',
  'rolling',
  'glowing',
  'square',
  'bouncing',
  'filling',
  'circle',
  'square-vs-circle',
  'colorful',
  'nature',
  'time',
  'hungry',
  'shuriken',
  'dancers',
  'moving',
  'eyes',
  'line',
  'thin',
  'cut',
  'clones',
  'arrow',
  'blob',
  'maze',
  'factory',
  'three-d',
];

export const CURRENCY_COLORS: Record<string, string> = {
  bronze: '#cd7f32',
  silver: '#c0c0c0',
  gold: '#ffd700',
  diamond: '#b9f2ff',
  ruby: '#e0115f',
  emerald: '#50c878',
  sapphire: '#0f52ba',
  amethyst: '#9966cc',
  topaz: '#ffc87c',
  opal: '#a8c3bc',
  orange: 'orange',
  pink: 'pink',
  lime: '#00ff00',
  cyan: '#00ffff',
  teal: '#008080',
  magenta: '#ff00ff',
  indigo: '#4b0082',
  violet: '#8f00ff',
  maroon: '#800000',
  brown: '#a52a2a',
  beige: '#f5f5dc',
  coral: '#ff7f50',
  olive: '#808000',
  navy: '#000080',
  turquoise: '#40e0d0',
  peach: '#ffe5b4',
  mint: '#98ff98',
  lavender: '#e6e6fa',
  cherry: '#de3163',
  apricot: '#fbceb1',
  rose: '#ff007f',
  aqua: '#00ffff',
  limegreen: '#32cd32',
  mustard: '#ffdb58',
  plum: '#dda0dd',
  fuchsia: '#ff00ff',
  tan: '#d2b48c',
  salmon: '#fa8072',
  periwinkle: '#ccccff',
  charcoal: '#36454f',
  crimson: '#dc143c',
  amber: '#ffbf00',
  jade: '#00a86b',
  ivory: '#fffff0',
  cerulean: '#007ba7',
  scarlet: '#ff2400',
  ochre: '#cc7722',
  azure: '#007fff',
  lilac: '#c8a2c8',
  graphite: '#383838',
};

export const WORLD_SYMBOLS: Record<string, string> = {
  classic: '┃',             // iron bar style
  bars: '▮',                // vertical bar
  dots: '•',                // simple dot
  'dots-vs-bars': '⦿',      // filled circle
  spinner: '⟳',             // spinner
  shapes: '◆',              // diamond
  polygons: '⬟',            // hexagon
  progress: '▸',            // right arrow
  wobbling: '≈',            // wavy line
  infinity: '∞',            // infinity symbol
  'zig-zag': '⧓',           // zig-zag shape
  wavy: '〰',                // wavy dash
  mechanic: '⚙',             // gear (Unicode, not emoji)
  continuous: '═',          // horizontal line
  growing: '▲',             // triangle up
  pulsing: '◉',             // filled circle / pulsing
  flipping: '↻',            // rotation symbol
  arcade: '⌖',              // target-like symbol for arcade
  hypnotic: '◎',            // concentric circle
  rolling: '◉',             // rolling circle
  glowing: '✦',             // star symbol
  square: '■',              // square
  bouncing: '●',            // filled circle
  filling: '▰',             // filled square
  circle: '◯',              // empty circle
  'square-vs-circle': '▣',  // square with grid
  colorful: '✺',            // decorative star
  nature: '♣',               // club / leaf-like
  time: '⌛',                 // hourglass
  hungry: '◌',               // hollow circle (food placeholder)
  shuriken: '✦',             // four-point star
  dancers: '♩',              // musical note (movement)
  moving: '➤',               // arrow
  eyes: '◉',                 // circle / eye-like
  line: '─',                 // horizontal line
  thin: '│',                 // vertical line
  cut: '✂',                  // scissors
  clones: '⧉',               // double square
  arrow: '➤',                // arrow
  blob: '●',                 // filled circle / blob
  maze: '☷',                  // maze-like pattern
  factory: '⚒',              // hammer & pick
  'three-d': '▣',            // cube-like square
};

export const WORLDS: WorldConfig[] = WORLD_IDS.map((worldId) => ({
  id: worldId,
  name: `${worldId.charAt(0).toUpperCase() + worldId.slice(1)} World`,
  basePrice: 0.02,
  baseIncrement: 0.01,
  currencies: BASE_CURRENCIES.map((c) => c),
  symbol: WORLD_SYMBOLS[worldId] || '*', // assign symbol here
}));
