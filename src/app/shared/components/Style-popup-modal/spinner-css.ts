export const SPINNER_CSS: Record<string, string[]> = {
  classic: [
    `
.loader1 {
  font-weight: bold;
  font-family: sans-serif;
  font-size: 30px;
  color: #ff9800;
  animation: l1 1s linear infinite alternate;
}
.loader1:before { content: 'Loading...'; }
@keyframes l1 { to { opacity: 0; } }
`,
    `
.loader2 {
  width: fit-content;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 30px;
  padding-bottom: 8px;
  background: linear-gradient(currentColor 0 0) 0 100%/0% 3px no-repeat;
  animation: l2 2s linear infinite;
}
.loader2:before { content: 'Loading...'; }
@keyframes l2 { to { background-size: 100% 3px; } }
`,
    `.loader2 {
  width: fit-content;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 30px;
  padding-bottom: 8px;
  background: linear-gradient(currentColor 0 0) 0 100%/0% 3px no-repeat;
  animation: l2 2s linear infinite;
}

.loader2:before {
  content: 'Loading...';
}

@keyframes l2 {
  to {
    background-size: 100% 3px;
  }
}`,
    `.loader4 {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  clip-path: inset(0 3ch 0 0);
  animation: l4 1s steps(4) infinite;
}

.loader4:before {
  content: 'Loading...';
}

@keyframes l4 {
  to {
    clip-path: inset(0 -1ch 0 0);
  }
}`,
    `.loader5 {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  clip-path: inset(0 100% 0 0);
  animation: l5 2s steps(11) infinite;
}

.loader5:before {
  content: 'Loading...';
}

@keyframes l5 {
  to {
    clip-path: inset(0 -1ch 0 0);
  }
}`,
    `.loader6 {
  --c: #000;
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  color: #0000;
  overflow: hidden;
  text-shadow:
    0 0 var(--c),
    11ch 0 var(--c);
  animation: l6 2s infinite linear;
}

.loader6:before {
  content: 'Loading...';
}

@keyframes l6 {
  to {
    text-shadow:
      -11ch 0 var(--c),
      0ch 0 var(--c);
  }
}`,
    `.loader7 {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  color: #0000;
  background: linear-gradient(90deg, #c02942 calc(50% + 0.5ch), #000 0) right/calc(200% + 1ch) 100%;
  -webkit-background-clip: text;
  background-clip: text;
  animation: l7 2s infinite steps(11);
}

.loader7:before {
  content: 'Loading...';
}

@keyframes l7 {
  to {
    background-position: left;
  }
}`,
    `.loader8 {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  color: #0000;
  background: linear-gradient(90deg, #000 calc(50% - 0.5ch), #c02942 0 calc(50% + 0.5ch), #000 0)
    right/calc(200% + 1ch) 100%;
  -webkit-background-clip: text;
  background-clip: text;
  animation: l8 2s infinite steps(11);
}

.loader8:before {
  content: 'Loading...';
}

@keyframes l8 {
  to {
    background-position: left;
  }
}`,
    `.loader9 {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  color: #0000;
  overflow: hidden;
  animation: l9 5s infinite cubic-bezier(0.3, 1, 0, 1);
}

.loader9:before {
  content: 'Loading...';
}

@keyframes l9 {
  0% {
    text-shadow:
      0 0 #000,
      11ch 0 #8a9b0f,
      22ch 0 #c02942,
      33ch 0 #00a0b0,
      44ch 0 #000;
  }
  25% {
    text-shadow:
      -11ch 0 #000,
      0ch 0 #8a9b0f,
      11ch 0 #c02942,
      22ch 0 #00a0b0,
      33ch 0 #000;
  }
  50% {
    text-shadow:
      -22ch 0 #000,
      -11ch 0 #8a9b0f,
      0ch 0 #c02942,
      11ch 0 #00a0b0,
      22ch 0 #000;
  }
  75% {
    text-shadow:
      -33ch 0 #000,
      -22ch 0 #8a9b0f,
      -11ch 0 #c02942,
      0ch 0 #00a0b0,
      11ch 0 #000;
  }
  100% {
    text-shadow:
      -44ch 0 #000,
      -33ch 0 #8a9b0f,
      -22ch 0 #c02942,
      -11ch 0 #00a0b0,
      0ch 0 #000;
  }
}`,
    `.loader10 {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  color: #0000;
  background: linear-gradient(90deg, #000 25%, #8a9b0f 0 50%, #c02942 0 75%, #00a0b0 0) 0 0/400%
    100%;
  -webkit-background-clip: text;
  background-clip: text;
  animation: l10 5s infinite cubic-bezier(0.3, 1, 0, 1);
}

.loader10:before {
  content: 'Loading...';
}

@keyframes l10 {
  25% {
    background-position: calc(1 * 100% / 3) 0;
  }
  50% {
    background-position: calc(2 * 100% / 3) 0;
  }
  75% {
    background-position: calc(3 * 100% / 3) 0;
  }
  100% {
    background-position: calc(4 * 100% / 3) 0;
  }
}`,
    `.loader11 {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  color: #ff9800;
  overflow: hidden;
  position: relative;
}

.loader11:before {
  content: 'Loading...';
  display: inline-block;
  animation: l11 1.5s linear infinite;
}

@keyframes l11 {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}`,
    `.loader12 {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  color: #ff9800;
  text-shadow:
    1px 0 #000,
    -1px 0 #000,
    0 1px #000,
    0 -1px #000;
  animation: l12 1s linear infinite alternate;
}

.loader12:before {
  content: 'Loading...';
}

@keyframes l12 {
  0% {
    letter-spacing: normal;
  }
  50% {
    letter-spacing: 0.5em;
  }
  100% {
    letter-spacing: normal;
  }
}
`,
    `.loader13 {
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  display: inline-grid;
  overflow: hidden;
}
.loader13:before,
.loader13:after {
  content: 'Loading...';
  grid-area: 1/1;
  clip-path: inset(0 -200% 50%);
  text-shadow: -10ch 0 0;
  animation: l13 2s infinite;
}
.loader13:after {
  clip-path: inset(50% -200% 0%);
  text-shadow: 10ch 0 0;
  --s: -1;
  animation-delay: 1s;
}
@keyframes l13 {
  25%,
  100% {
    transform: translateX(calc(var(--s, 1) * 100%));
  }
}`,
    `.loader14 {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  color: #ff9800;
  overflow: hidden;
}

.loader14:before {
  content: 'Loading...';
  display: inline-block;
  animation: l14 1s linear infinite;
}

@keyframes l14 {
  0%,
  100% {
    transform: scaleX(0);
    opacity: 0;
  }
  50% {
    transform: scaleX(1);
    opacity: 1;
  }
}`,
    `.loader15 {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  color: #ff9800;
  letter-spacing: 0.1em;
  animation: l15 0.8s linear infinite alternate;
}

.loader15:before {
  content: 'Loading...';
}

@keyframes l15 {
  0% {
    transform: rotateX(0deg);
  }
  50% {
    transform: rotateX(180deg);
  }
  100% {
    transform: rotateX(360deg);
  }
}`,
    `.loader16 {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  color: #ff9800;
  display: inline-block;
  overflow: hidden;
}

.loader16:before {
  content: 'Loading...';
  animation: l16 1.2s linear infinite alternate;
}

@keyframes l16 {
  0% {
    opacity: 0.2;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0.2;
    transform: scale(0.5);
  }
}`,
    `.loader17 {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  color: #ff9800;
  position: relative;
  overflow: hidden;
}

.loader17:before {
  content: 'Loading...';
  display: inline-block;
  animation: l17 2s steps(5) infinite;
}

@keyframes l17 {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
`,
    `.loader18 {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  color: #ff9800;
  text-shadow:
    2px 0 #000,
    -2px 0 #000;
  animation: l18 1s linear infinite alternate;
}

.loader18:before {
  content: 'Loading...';
}

@keyframes l18 {
  0% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(15deg);
  }
  100% {
    transform: rotateZ(-15deg);
  }
}`,
    `.loader19 {
  --w: 10ch;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  line-height: 1.2em;
  letter-spacing: var(--w);
  width: var(--w);
  overflow: hidden;
  white-space: nowrap;
  color: #0000;
  animation: l19 2s infinite linear;
}
.loader19:before {
  content: 'Loading...';
}

@keyframes l19 {
  0% {
    text-shadow:
      calc(0 * var(--w)) 0,
      calc(-1 * var(--w)) 0,
      calc(-2 * var(--w)) 0,
      calc(-3 * var(--w)) 0,
      calc(-4 * var(--w)) 0,
      calc(-5 * var(--w)) 0,
      calc(-6 * var(--w)) 0,
      calc(-7 * var(--w)) 0,
      calc(-8 * var(--w)) 0,
      calc(-9 * var(--w)) 0;
  }
  4% {
    text-shadow:
      calc(0 * var(--w)) 0 #000,
      calc(-1 * var(--w)) 0,
      calc(-2 * var(--w)) 0,
      calc(-3 * var(--w)) 0,
      calc(-4 * var(--w)) 0,
      calc(-5 * var(--w)) 0,
      calc(-6 * var(--w)) 0,
      calc(-7 * var(--w)) 0,
      calc(-8 * var(--w)) 0,
      calc(-9 * var(--w)) 0;
  }
  8% {
    text-shadow:
      calc(0 * var(--w)) 0 #000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0,
      calc(-3 * var(--w)) 0,
      calc(-4 * var(--w)) 0,
      calc(-5 * var(--w)) 0,
      calc(-6 * var(--w)) 0,
      calc(-7 * var(--w)) 0,
      calc(-8 * var(--w)) 0,
      calc(-9 * var(--w)) 0;
  }
  12% {
    text-shadow:
      calc(0 * var(--w)) 0 #000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000,
      calc(-3 * var(--w)) 0,
      calc(-4 * var(--w)) 0,
      calc(-5 * var(--w)) 0,
      calc(-6 * var(--w)) 0,
      calc(-7 * var(--w)) 0,
      calc(-8 * var(--w)) 0,
      calc(-9 * var(--w)) 0;
  }
  16% {
    text-shadow:
      calc(0 * var(--w)) 0 #000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0,
      calc(-5 * var(--w)) 0,
      calc(-6 * var(--w)) 0,
      calc(-7 * var(--w)) 0,
      calc(-8 * var(--w)) 0,
      calc(-9 * var(--w)) 0;
  }
  20% {
    text-shadow:
      calc(0 * var(--w)) 0 #000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) 0,
      calc(-6 * var(--w)) 0,
      calc(-7 * var(--w)) 0,
      calc(-8 * var(--w)) 0,
      calc(-9 * var(--w)) 0;
  }
  24% {
    text-shadow:
      calc(0 * var(--w)) 0 #000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0,
      calc(-7 * var(--w)) 0,
      calc(-8 * var(--w)) 0,
      calc(-9 * var(--w)) 0;
  }
  28% {
    text-shadow:
      calc(0 * var(--w)) 0 #000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000,
      calc(-7 * var(--w)) 0,
      calc(-8 * var(--w)) 0,
      calc(-9 * var(--w)) 0;
  }
  32% {
    text-shadow:
      calc(0 * var(--w)) 0 #000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0,
      calc(-9 * var(--w)) 0;
  }
  36% {
    text-shadow:
      calc(0 * var(--w)) 0 #000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000,
      calc(-9 * var(--w)) 0;
  }
  40%,
  60% {
    text-shadow:
      calc(0 * var(--w)) 0 #000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000,
      calc(-9 * var(--w)) 0 #000;
  }
  64% {
    text-shadow:
      calc(0 * var(--w)) 0,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000,
      calc(-9 * var(--w)) 0 #000;
  }
  68% {
    text-shadow:
      calc(0 * var(--w)) 0,
      calc(-1 * var(--w)) 0,
      calc(-2 * var(--w)) 0 #000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000,
      calc(-9 * var(--w)) 0 #000;
  }
  72% {
    text-shadow:
      calc(0 * var(--w)) 0,
      calc(-1 * var(--w)) 0,
      calc(-2 * var(--w)) 0,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000,
      calc(-9 * var(--w)) 0 #000;
  }
  76% {
    text-shadow:
      calc(0 * var(--w)) 0,
      calc(-1 * var(--w)) 0,
      calc(-2 * var(--w)) 0,
      calc(-3 * var(--w)) 0,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000,
      calc(-9 * var(--w)) 0 #000;
  }
  80% {
    text-shadow:
      calc(0 * var(--w)) 0,
      calc(-1 * var(--w)) 0,
      calc(-2 * var(--w)) 0,
      calc(-3 * var(--w)) 0,
      calc(-4 * var(--w)) 0,
      calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000,
      calc(-9 * var(--w)) 0 #000;
  }
  84% {
    text-shadow:
      calc(0 * var(--w)) 0,
      calc(-1 * var(--w)) 0,
      calc(-2 * var(--w)) 0,
      calc(-3 * var(--w)) 0,
      calc(-4 * var(--w)) 0,
      calc(-5 * var(--w)) 0,
      calc(-6 * var(--w)) 0 #000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000,
      calc(-9 * var(--w)) 0 #000;
  }
  88% {
    text-shadow:
      calc(0 * var(--w)) 0,
      calc(-1 * var(--w)) 0,
      calc(-2 * var(--w)) 0,
      calc(-3 * var(--w)) 0,
      calc(-4 * var(--w)) 0,
      calc(-5 * var(--w)) 0,
      calc(-6 * var(--w)) 0,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000,
      calc(-9 * var(--w)) 0 #000;
  }
  92% {
    text-shadow:
      calc(0 * var(--w)) 0,
      calc(-1 * var(--w)) 0,
      calc(-2 * var(--w)) 0,
      calc(-3 * var(--w)) 0,
      calc(-4 * var(--w)) 0,
      calc(-5 * var(--w)) 0,
      calc(-6 * var(--w)) 0,
      calc(-7 * var(--w)) 0,
      calc(-8 * var(--w)) 0 #000,
      calc(-9 * var(--w)) 0 #000;
  }
  96% {
    text-shadow:
      calc(0 * var(--w)) 0,
      calc(-1 * var(--w)) 0,
      calc(-2 * var(--w)) 0,
      calc(-3 * var(--w)) 0,
      calc(-4 * var(--w)) 0,
      calc(-5 * var(--w)) 0,
      calc(-6 * var(--w)) 0,
      calc(-7 * var(--w)) 0,
      calc(-8 * var(--w)) 0,
      calc(-9 * var(--w)) 0 #000;
  }
  100% {
    text-shadow:
      calc(0 * var(--w)) 0,
      calc(-1 * var(--w)) 0,
      calc(-2 * var(--w)) 0,
      calc(-3 * var(--w)) 0,
      calc(-4 * var(--w)) 0,
      calc(-5 * var(--w)) 0,
      calc(-6 * var(--w)) 0,
      calc(-7 * var(--w)) 0,
      calc(-8 * var(--w)) 0,
      calc(-9 * var(--w)) 0;
  }
}`,
    `.loader20 {
  --w: 10ch;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  line-height: 1.4em;
  letter-spacing: var(--w);
  width: var(--w);
  overflow: hidden;
  white-space: nowrap;
  color: #0000;
  text-shadow:
    calc(0 * var(--w)) 0 #000,
    calc(-1 * var(--w)) 0 #000,
    calc(-2 * var(--w)) 0 #000,
    calc(-3 * var(--w)) 0 #000,
    calc(-4 * var(--w)) 0 #000,
    calc(-5 * var(--w)) 0 #000,
    calc(-6 * var(--w)) 0 #000,
    calc(-7 * var(--w)) 0 #000,
    calc(-8 * var(--w)) 0 #000,
    calc(-9 * var(--w)) 0 #000;
  animation: l20 2s infinite linear;
}
.loader20:before {
  content: 'Loading...';
}

@keyframes l20 {
  9.09% {
    text-shadow:
      calc(0 * var(--w)) -10px #000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000,
      calc(-9 * var(--w)) 0 #000;
  }
  18.18% {
    text-shadow:
      calc(0 * var(--w)) 0 #000,
      calc(-1 * var(--w)) -10px #000,
      calc(-2 * var(--w)) 0 #000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000,
      calc(-9 * var(--w)) 0 #000;
  }
  27.27% {
    text-shadow:
      calc(0 * var(--w)) 0 #000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) -10px #000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000,
      calc(-9 * var(--w)) 0 #000;
  }
  36.36% {
    text-shadow:
      calc(0 * var(--w)) 0 #000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000,
      calc(-3 * var(--w)) -10px #000,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000,
      calc(-9 * var(--w)) 0 #000;
  }
  45.45% {
    text-shadow:
      calc(0 * var(--w)) 0 #000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) -10px #000,
      calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000,
      calc(-9 * var(--w)) 0 #000;
  }
  54.54% {
    text-shadow:
      calc(0 * var(--w)) 0 #000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) -10px #000,
      calc(-6 * var(--w)) 0 #000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000,
      calc(-9 * var(--w)) 0 #000;
  }
  63.63% {
    text-shadow:
      calc(0 * var(--w)) 0 #000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) -10px #000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000,
      calc(-9 * var(--w)) 0 #000;
  }
  72.72% {
    text-shadow:
      calc(0 * var(--w)) 0 #000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000,
      calc(-7 * var(--w)) -10px #000,
      calc(-8 * var(--w)) 0 #000,
      calc(-9 * var(--w)) 0 #000;
  }
  81.81% {
    text-shadow:
      calc(0 * var(--w)) 0 #000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) -10px #000,
      calc(-9 * var(--w)) 0 #000;
  }
  90.90% {
    text-shadow:
      calc(0 * var(--w)) 0 #000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000,
      calc(-9 * var(--w)) -10px #000;
  }
}`,
    `.loader21 {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  background: linear-gradient(90deg, #000 50%, #0000 0) right/200% 100%;
  animation: l21 2s infinite linear;
}
.loader21::before {
  content: 'Loading...';
  color: #0000;
  padding: 0 5px;
  background: inherit;
  background-image: linear-gradient(90deg, #fff 50%, #000 0);
  -webkit-background-clip: text;
  background-clip: text;
}

@keyframes l21 {
  100% {
    background-position: left;
  }
}`,
    `.loader22 {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  background: linear-gradient(135deg, #0000 calc(50% - 0.5em), #000 0 calc(50% + 0.5em), #0000 0)
    right/300% 100%;
  animation: l22 2s infinite;
}
.loader22::before {
  content: 'Loading...';
  color: #0000;
  padding: 0 5px;
  background: inherit;
  background-image: linear-gradient(
    135deg,
    #000 calc(50% - 0.5em),
    #fff 0 calc(50% + 0.5em),
    #000 0
  );
  -webkit-background-clip: text;
  background-clip: text;
}

@keyframes l22 {
  100% {
    background-position: left;
  }
}`,
    `.loader23 {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  overflow: hidden;
}
.loader23::before {
  content: 'Loading...';
  color: #0000;
  text-shadow:
    0 0 0 #000,
    10ch 0 0 #fff,
    20ch 0 0 #000;
  background: linear-gradient(90deg, #0000 calc(100% / 3), #000 0 calc(2 * 100% / 3), #0000 0)
    left/300% 100%;
  animation: l23 2s infinite;
}

@keyframes l23 {
  50% {
    background-position: center;
    text-shadow:
      -10ch 0 0 #000,
      0 0 0 #fff,
      10ch 0 0 #000;
  }
  100% {
    background-position: right;
    text-shadow:
      -20ch 0 0 #000,
      -10ch 0 0 #fff,
      0 0 0 #000;
  }
}`,
    `.loader24 {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  background: radial-gradient(circle closest-side, #000 94%, #0000) right/calc(200% - 1em) 100%;
  animation: l24 1s infinite alternate linear;
}
.loader24::before {
  content: 'Loading...';
  line-height: 1em;
  color: #0000;
  background: inherit;
  background-image: radial-gradient(circle closest-side, #fff 94%, #000);
  -webkit-background-clip: text;
  background-clip: text;
}

@keyframes l24 {
  100% {
    background-position: left;
  }
}`,
    `.loader25 {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  animation: l25 1s infinite;
}
.loader25::before {
  content: 'Loading...';
}

@keyframes l25 {
  0%,
  12.5% {
    transform: translate(10px, 0);
  }
  13%,
  25% {
    transform: translate(4px, -4px);
  }
  26%,
  37.5% {
    transform: translate(2px, 8px);
  }
  38%,
  50% {
    transform: translate(12px, -6px);
  }
  51%,
  62.5% {
    transform: translate(0, 12px);
  }
  63%,
  75% {
    transform: translate(-8px, -4px);
  }
  76%,
  86.5% {
    transform: translate(-12px, 6px);
  }
  87%,
  100% {
    transform: translate(6px, 0);
  }
}`,
    `.loader26 {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  animation: l26 2s infinite;
}
.loader26::before {
  content: 'Loading...';
}

@keyframes l26 {
  0%,
  10% {
    transform: perspective(200px) rotateX(0) rotateY(0) scale(1);
  }
  30%,
  36% {
    transform: perspective(200px) rotateX(180deg) rotateY(0) scale(1);
  }
  63%,
  69% {
    transform: perspective(200px) rotateX(180deg) rotateY(180deg) scale(1);
  }
  90%,
  100% {
    transform: perspective(200px) rotateX(180deg) rotateY(180deg) scale(-1);
  }
}`,
    `.loader27 {
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  display: inline-flex;
}
.loader27::before {
  content: 'Loadi';
  animation: l27 2s infinite;
}
.loader27::after {
  content: 'ng...';
  animation: l27 2s infinite 1s;
}

@keyframes l27 {
  50%,
  100% {
    transform: rotate(1turn);
  }
}`,
    `.loader28 {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  overflow: hidden;
  animation: l28 2s infinite;
}
.loader28::before {
  content: 'Loading...';
}

@keyframes l28 {
  0%,
  10% {
    transform: perspective(300px) rotate(0) rotateY(0) rotateX(0);
  }
  30%,
  36% {
    transform: perspective(300px) rotate(0.5turn) rotateY(0) rotateX(0);
  }
  63%,
  69% {
    transform: perspective(300px) rotate(0.5turn) rotateY(180deg) rotateX(0);
  }
  90%,
  100% {
    transform: perspective(300px) rotate(0.5turn) rotateY(180deg) rotateX(180deg);
  }
}`,
    `.loader29 {
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  display: inline-grid;
}
.loader29:before,
.loader29:after {
  content: 'Loading...';
  grid-area: 1/1;
  -webkit-mask: linear-gradient(90deg, #000 50%, #0000 0) 0 50%/2ch 100%;
  mask: linear-gradient(90deg, #000 50%, #0000 0) 0 50%/2ch 100%;
  animation: l29 2s infinite;
}
.loader29:after {
  -webkit-mask-position: 1ch 50%;
  mask-position: 1ch 50%;
  --s: -1;
}
@keyframes l29 {
  80%,
  100% {
    transform: rotate(calc(var(--s, 1) * 1turn));
  }
}`,
    `.loader30 {
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  display: inline-grid;
}
.loader30:before,
.loader30:after {
  content: 'Loading...';
  grid-area: 1/1;
  line-height: 1em;
  -webkit-mask: linear-gradient(90deg, #000 50%, #0000 0) 0 50%/2ch 100%;
  mask: linear-gradient(90deg, #000 50%, #0000 0) 0 50%/2ch 100%;
  -webkit-mask-position: calc(var(--s, 0) * 1ch) 50%;
  mask-position: calc(var(--s, 0) * 1ch) 50%;
  animation: l30 2s infinite;
}
.loader30:after {
  --s: -1;
}
@keyframes l30 {
  33% {
    transform: translateY(calc(var(--s, 1) * 50%));
    -webkit-mask-position: calc(var(--s, 0) * 1ch) 50%;
  }
  66% {
    transform: translateY(calc(var(--s, 1) * 50%));
    -webkit-mask-position: calc(var(--s, 0) * 1ch + 1ch) 50%;
  }
  100% {
    transform: translateY(calc(var(--s, 1) * 0%));
    -webkit-mask-position: calc(var(--s, 0) * 1ch + 1ch) 50%;
  }
}`,
    `.loader31 {
  --w: 10ch;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  line-height: 2em;
  letter-spacing: var(--w);
  width: var(--w);
  overflow: hidden;
  white-space: nowrap;
  color: #0000;
  text-shadow:
    calc(0 * var(--w)) 0 #000,
    calc(-1 * var(--w)) 0 #000,
    calc(-2 * var(--w)) 0 #000,
    calc(-3 * var(--w)) 0 #000,
    calc(-4 * var(--w)) 0 #000,
    calc(-5 * var(--w)) 0 #000,
    calc(-6 * var(--w)) 0 #000,
    calc(-7 * var(--w)) 0 #000,
    calc(-8 * var(--w)) 0 #000,
    calc(-9 * var(--w)) 0 #000;
  animation: l31 1s infinite cubic-bezier(0.5, -150, 0.5, 150);
}
.loader31:before {
  content: 'Loading...';
}

@keyframes l31 {
  15%,
  100% {
    text-shadow:
      calc(0 * var(--w) + 0.1px) 0 #000,
      calc(-1 * var(--w)) 0.01em #000,
      calc(-2 * var(--w) - 0.2px) 0 #000,
      calc(-3 * var(--w) + 0.1px) 0.01em #000,
      calc(-4 * var(--w)) -0.01em #000,
      calc(-5 * var(--w) - 0.1px) 0 #000,
      calc(-6 * var(--w) - 0.2px) 0.015em #000,
      calc(-7 * var(--w) - 0.1px) 0.02em #000,
      calc(-8 * var(--w)) -0.01em #000,
      calc(-9 * var(--w) + 0.2px) -0.01em #000;
  }
}`,
    `.loader32 {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  text-shadow:
    0 0 0 rgb(255 0 0),
    0 0 0 rgb(0 255 0),
    0 0 0 rgb(0 0 255);
  font-size: 30px;
  animation: l32 1s infinite cubic-bezier(0.5, -2000, 0.5, 2000);
}
.loader32:before {
  content: 'Loading...';
}

@keyframes l32 {
  25%,
  100% {
    text-shadow:
      0.03px -0.01px 0.01px rgb(255 0 0),
      0.02px 0.02px 0 rgb(0 255 0),
      -0.02px 0.02px 0 rgb(0 0 255);
  }
}`,
    `.loader33 {
  --w: 10ch;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  letter-spacing: var(--w);
  width: var(--w);
  overflow: hidden;
  white-space: nowrap;
  color: #0000;
  animation: l33 1s infinite alternate;
}
.loader33:before {
  content: 'Loading...';
}

@keyframes l33 {
  0%,
  15%,
  75%,
  100% {
    text-shadow:
      calc(0 * var(--w)) 0 #000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000,
      calc(-9 * var(--w)) 0 #000;
  }
  20% {
    text-shadow:
      calc(0 * var(--w)) 0 #000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000,
      calc(-3 * var(--w)) 0 9px #000,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000,
      calc(-9 * var(--w)) 0 #000;
  }
  25% {
    text-shadow:
      calc(0 * var(--w)) 0 #000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000,
      calc(-7 * var(--w)) 0 7px #000,
      calc(-8 * var(--w)) 0 #000,
      calc(-9 * var(--w)) 0 #000;
  }
  30% {
    text-shadow:
      calc(0 * var(--w)) 0 #000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) 0 9px #000,
      calc(-6 * var(--w)) 0 #000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000,
      calc(-9 * var(--w)) 0 #000;
  }
  35% {
    text-shadow:
      calc(0 * var(--w)) 0 #000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000,
      calc(-9 * var(--w)) 0 7px #000;
  }
  40% {
    text-shadow:
      calc(0 * var(--w)) 0 5px #000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000,
      calc(-9 * var(--w)) 0 #000;
  }
  45% {
    text-shadow:
      calc(0 * var(--w)) 0 #000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) 0 7px #000,
      calc(-6 * var(--w)) 0 #000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000,
      calc(-9 * var(--w)) 0 #000;
  }
  50% {
    text-shadow:
      calc(0 * var(--w)) 0 #000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 5px #000,
      calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000,
      calc(-9 * var(--w)) 0 #000;
  }
  55% {
    text-shadow:
      calc(0 * var(--w)) 0 #000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 8px #000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000,
      calc(-9 * var(--w)) 0 #000;
  }
  60% {
    text-shadow:
      calc(0 * var(--w)) 0 #000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 5px #000,
      calc(-9 * var(--w)) 0 #000;
  }
  65% {
    text-shadow:
      calc(0 * var(--w)) 0 #000,
      calc(-1 * var(--w)) 0 7px #000,
      calc(-2 * var(--w)) 0 #000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000,
      calc(-9 * var(--w)) 0 #000;
  }
  70% {
    text-shadow:
      calc(0 * var(--w)) 0 #000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 9px #000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000,
      calc(-9 * var(--w)) 0 #000;
  }
}`,
    `.loader34 {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  white-space: pre;
  font-size: 30px;
}
.loader34:before {
  content: 'Loading...';
  animation: l34 1s infinite alternate;
}

@keyframes l34 {
  0%,
  15%,
  75%,
  100% {
    content: 'Loading...';
  }
  20% {
    content: 'Loading...';
  }
  25% {
    content: 'Lo ding...';
  }
  30% {
    content: 'Load ng...';
  }
  35% {
    content: ' oading...';
  }
  40% {
    content: 'L ading...';
  }
  45% {
    content: 'Loadin ...';
  }
  50% {
    content: 'Loa ing...';
  }
  55% {
    content: 'Loading  .';
  }
  60% {
    content: ' oa ing...';
  }
  65% {
    content: 'L ading...';
  }
  70% {
    content: 'Load n ...';
  }
}`,
    `.loader35 {
  font-weight: bold;
  font-family: monospace;
  display: inline-grid;
  font-size: 30px;
}
.loader35:before,
.loader35:after {
  content: 'Loading...';
  grid-area: 1/1;
  -webkit-mask-size:
    100% 5px,
    100% 100%;
  mask-size:
    100% 5px,
    100% 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: l35-1 1s infinite;
}
.loader35:before {
  -webkit-mask-image: linear-gradient(#000 0 0), linear-gradient(#000 0 0);
  mask-image: linear-gradient(#000 0 0), linear-gradient(#000 0 0);
}
.loader35:after {
  -webkit-mask-image: linear-gradient(#000 0 0);
  mask-image: linear-gradient(#000 0 0);
  animation:
    l35-1 1s infinite,
    l35-2 0.2s infinite cubic-bezier(0.5, 200, 0.5, -200);
}

@keyframes l35-1 {
  0% {
    -webkit-mask-position:
      0 20px,
      0 0;
  }
  20% {
    -webkit-mask-position:
      0 8px,
      0 0;
  }
  40% {
    -webkit-mask-position:
      0 100%,
      0 0;
  }
  60% {
    -webkit-mask-position:
      0 3px,
      0 0;
  }
  80% {
    -webkit-mask-position:
      0 15px,
      0 0;
  }
  100% {
    -webkit-mask-position:
      0 0,
      0 0;
  }
}
@keyframes l35-2 {
  100% {
    transform: translate(0.1px);
  }
}`,
    `.loader36 {
  font-weight: bold;
  font-family: monospace;
  display: inline-grid;
  font-size: 30px;
}
.loader36:before,
.loader36:after {
  content: 'Loading...';
  grid-area: 1/1;
  -webkit-mask-size:
    1.5ch 100%,
    100% 100%;
  mask-size:
    1.5ch 100%,
    100% 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: l36-1 1s infinite;
}
.loader36:before {
  -webkit-mask-image: linear-gradient(#000 0 0), linear-gradient(#000 0 0);
  mask-image: linear-gradient(#000 0 0), linear-gradient(#000 0 0);
}
.loader36:after {
  -webkit-mask-image: linear-gradient(#000 0 0);
  mask-image: linear-gradient(#000 0 0);
  animation:
    l36-1 1s infinite,
    l36-2 0.2s infinite cubic-bezier(0.5, 200, 0.5, -200);
}

@keyframes l36-1 {
  0% {
    -webkit-mask-position:
      0 0,
      0 0;
  }
  20% {
    -webkit-mask-position:
      0.5ch 0,
      0 0;
  }
  40% {
    -webkit-mask-position:
      100% 0,
      0 0;
  }
  60% {
    -webkit-mask-position:
      4.5ch 0,
      0 0;
  }
  80% {
    -webkit-mask-position:
      6.5ch 0,
      0 0;
  }
  100% {
    -webkit-mask-position:
      2.5ch 0,
      0 0;
  }
}
@keyframes l36-2 {
  100% {
    transform: translateY(0.2px);
  }
}`,
    `.loader37 {
  font-weight: bold;
  font-family: monospace;
  display: inline-grid;
  font-size: 30px;
}
.loader37:before,
.loader37:after {
  content: 'Loading...';
  grid-area: 1/1;
  -webkit-mask-size:
    2ch 100%,
    100% 100%;
  mask-size:
    2ch 100%,
    100% 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: l37 1s infinite;
}
.loader37:before {
  -webkit-mask-image: linear-gradient(#000 0 0), linear-gradient(#000 0 0);
  mask-image: linear-gradient(#000 0 0), linear-gradient(#000 0 0);
}
.loader37:after {
  -webkit-mask-image: linear-gradient(#000 0 0);
  mask-image: linear-gradient(#000 0 0);
  transform: scaleY(0.5);
}

@keyframes l37 {
  0% {
    -webkit-mask-position:
      1ch 0,
      0 0;
  }
  12.5% {
    -webkit-mask-position:
      100% 0,
      0 0;
  }
  25% {
    -webkit-mask-position:
      4ch 0,
      0 0;
  }
  37.5% {
    -webkit-mask-position:
      8ch 0,
      0 0;
  }
  50% {
    -webkit-mask-position:
      2ch 0,
      0 0;
  }
  62.5% {
    -webkit-mask-position:
      100% 0,
      0 0;
  }
  75% {
    -webkit-mask-position:
      0ch 0,
      0 0;
  }
  87.5% {
    -webkit-mask-position:
      6ch 0,
      0 0;
  }
  100% {
    -webkit-mask-position:
      3ch 0,
      0 0;
  }
}`,
    `.loader38 {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  white-space: pre;
  font-size: 30px;
  line-height: 1.2em;
  height: 1.2em;
  overflow: hidden;
}
.loader38:before {
  content: 'Loading...\AgodnLai...\Aoiaglni...\ALiongad...\Agindola...\Analoidg...';
  white-space: pre;
  display: inline-block;
  animation: l38 1s infinite steps(6);
}

@keyframes l38 {
  100% {
    transform: translateY(-100%);
  }
}`,
    `.loader39 {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  white-space: pre;
  font-size: 30px;
  line-height: 1.2em;
  height: 1.2em;
  overflow: hidden;
}
.loader39:before {
  content: 'Loading...\A⌰oading...\A⌰⍜ading...\A⌰⍜⏃ding...\A⌰⍜⏃⎅ing...\A⌰⍜⏃⎅⟟ng...\A⌰⍜⏃⎅⟟⋏g...\A⌰⍜-aos...\A⌰⍜-aos⟒..\A⌰⍜-aos⏁.\A⌰⍜-aos⏁⋔';
  white-space: pre;
  display: inline-block;
  animation: l39 1s infinite steps(11) alternate;
}

@keyframes l39 {
  100% {
    transform: translateY(-100%);
  }
}`,
    `.loader40 {
  --w: 10ch;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  letter-spacing: var(--w);
  width: var(--w);
  overflow: hidden;
  white-space: nowrap;
  color: #0000;
  animation: l40 2s infinite;
}
.loader40:before {
  content: 'Loading...';
}

@keyframes l40 {
  0%,
  100% {
    text-shadow:
      calc(0 * var(--w)) 0 #000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) 0 #000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000,
      calc(-9 * var(--w)) 0 #000;
  }
  9% {
    text-shadow:
      calc(0 * var(--w)) 0 #000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) -20px #0000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) 0 #000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000,
      calc(-9 * var(--w)) 0 #000;
  }
  18% {
    text-shadow:
      calc(0 * var(--w)) 0 #000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) -20px #0000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) -20px #0000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000,
      calc(-9 * var(--w)) 0 #000;
  }
  27% {
    text-shadow:
      calc(0 * var(--w)) -20px #0000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) -20px #0000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) 0 #000,
      calc(-6 * var(--w)) -20px #0000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000,
      calc(-9 * var(--w)) 0 #000;
  }
  36% {
    text-shadow:
      calc(0 * var(--w)) -20px #0000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) -20px #0000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) -20px #0000,
      calc(-6 * var(--w)) -20px #0000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) 0 #000,
      calc(-9 * var(--w)) 0 #000;
  }
  45% {
    text-shadow:
      calc(0 * var(--w)) -20px #0000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) -20px #0000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) 0 #000,
      calc(-5 * var(--w)) -20px #0000,
      calc(-6 * var(--w)) -20px #0000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) -20px #0000,
      calc(-9 * var(--w)) 0 #000;
  }
  54% {
    text-shadow:
      calc(0 * var(--w)) -20px #0000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) -20px #0000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) -20px #0000,
      calc(-5 * var(--w)) -20px #0000,
      calc(-6 * var(--w)) -20px #0000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) -20px #0000,
      calc(-9 * var(--w)) 0 #000;
  }
  63% {
    text-shadow:
      calc(0 * var(--w)) -20px #0000,
      calc(-1 * var(--w)) 0 #000,
      calc(-2 * var(--w)) -20px #0000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) -20px #0000,
      calc(-5 * var(--w)) -20px #0000,
      calc(-6 * var(--w)) -20px #0000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) -20px #0000,
      calc(-9 * var(--w)) -20px #0000;
  }
  72% {
    text-shadow:
      calc(0 * var(--w)) -20px #0000,
      calc(-1 * var(--w)) -20px #0000,
      calc(-2 * var(--w)) -20px #0000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) -20px #0000,
      calc(-5 * var(--w)) -20px #0000,
      calc(-6 * var(--w)) -20px #0000,
      calc(-7 * var(--w)) 0 #000,
      calc(-8 * var(--w)) -20px #0000,
      calc(-9 * var(--w)) -20px #0000;
  }
  81% {
    text-shadow:
      calc(0 * var(--w)) -20px #0000,
      calc(-1 * var(--w)) -20px #0000,
      calc(-2 * var(--w)) -20px #0000,
      calc(-3 * var(--w)) 0 #000,
      calc(-4 * var(--w)) -20px #0000,
      calc(-5 * var(--w)) -20px #0000,
      calc(-6 * var(--w)) -20px #0000,
      calc(-7 * var(--w)) -20px #0000,
      calc(-8 * var(--w)) -20px #0000,
      calc(-9 * var(--w)) -20px #0000;
  }
  90% {
    text-shadow:
      calc(0 * var(--w)) -20px #0000,
      calc(-1 * var(--w)) -20px #0000,
      calc(-2 * var(--w)) -20px #0000,
      calc(-3 * var(--w)) -20px #0000,
      calc(-4 * var(--w)) -20px #0000,
      calc(-5 * var(--w)) -20px #0000,
      calc(-6 * var(--w)) -20px #0000,
      calc(-7 * var(--w)) -20px #0000,
      calc(-8 * var(--w)) -20px #0000,
      calc(-9 * var(--w)) -20px #0000;
  }
}`, // add as many loaders as needed
  ],

  arcade: [
    `
.loader1 {
   width: 45px;
   height: 30px;
   animation: l1 2s infinite linear;
}
@keyframes l1{
  0%,
  25%  {background:
          linear-gradient(#e50021 0 0) 50% 0/66% 100% no-repeat}
  25.1%,
  50%  {background:
          linear-gradient(#004ce4 0 0) 0 0/100% 50% no-repeat,
          linear-gradient(#004ce4 0 0) 0 0/33% 100% no-repeat}
  50.1%,
  75%  {background:
          linear-gradient(#00e622 0 0) 100% 0/66% 50% no-repeat,
          linear-gradient(#00e622 0 0) 0 100%/66% 50% no-repeat}
  75.1%,
  100% {background:
          linear-gradient(#9d0be6 0 0) 0 100%/100% 50% no-repeat,
          linear-gradient(#9d0be6 0 0) 50% 0 /33%  50% no-repeat}
}
`,
    `
.loader2 {
  width: 45px;
  height: 30px;
  background:
    linear-gradient(#004ce4 0 0) 0 100%/100% 50%,
    linear-gradient(#004ce4 0 0) 0 0   /calc(100%/3) 100%;
  background-repeat: no-repeat;
  position: relative;
  clip-path: inset(-100% 0 0 0);
  animation: l2-0 2s infinite steps(4);
}
.loader2::before,
.loader2::after {
  content: "";
  position: absolute;
  inset:-50% 0 50%;
  background:
    linear-gradient(#00e622 0 0) 0 0      /calc(2*100%/3) 50%,
    linear-gradient(#00e622 0 0) 100% 100%/calc(2*100%/3) 50%;
  background-repeat: no-repeat;
  animation: inherit;
  animation-name: l2-1;
}
.loader2::after {
  inset:-100% 0 100%;
  background:
    linear-gradient(#e50021 0 0) 0    0/100%         50%,
    linear-gradient(#e50021 0 0) 100% 0/calc(100%/3) 100%;
  background-repeat: no-repeat;
  animation-name: l2-2;
}
@keyframes l2-0{
  0%       {transform: translateY(-250%);clip-path: inset(100% 0 0 0)}
  25%,100% {transform: translateY(0);clip-path: inset(-100% 0 0 0)}
}
@keyframes l2-1{
  0% ,25%  {transform: translateY(-250%)}
  50%,100% {transform: translateY(0)}
}
@keyframes l2-2{
  0% ,50%  {transform: translateY(-250%)}
  75%,100% {transform: translateY(0)}
}`,
    `
.loader3 {
  width: 80px;
  height: 70px;
  border: 5px solid #000;
  padding: 0 8px;
  box-sizing: border-box;
  background:
    linear-gradient(#fff 0 0) 0    0/8px 20px,
    linear-gradient(#fff 0 0) 100% 0/8px 20px,
    radial-gradient(farthest-side,#fff 90%,#0000) 0 5px/8px 8px content-box,
    #000;
  background-repeat: no-repeat;
  animation: l3 2s infinite linear;
}
@keyframes l3{
  25% {background-position: 0 0   ,100% 100%,100% calc(100% - 5px)}
  50% {background-position: 0 100%,100% 100%,0    calc(100% - 5px)}
  75% {background-position: 0 100%,100%    0,100% 5px}
}`,
    `
.loader4 {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    radial-gradient(farthest-side,#000 98%,#0000) 55% 20%/8px 8px no-repeat,
    #ffcc00;
  box-shadow: 2px -6px 12px 0px inset rgba(0, 0, 0, 0.7);
  animation: l4 .5s infinite steps(5) alternate;
}
@keyframes l4{
    0% {clip-path: polygon(50% 50%,100%   0,100% 0,0 0,0 100%,100% 100%,100% 100%)}
  100% {clip-path: polygon(50% 50%,100% 65%,100% 0,0 0,0 100%,100% 100%,100%  35%)}
}`,
    `
.loader5 {
  width: 90px;
  height: 24px;
  padding: 2px 0;
  box-sizing: border-box;
  display: flex;
  animation: l5-0 3s infinite steps(6);
  background:
    linear-gradient(#000 0 0) 0 0/0% 100% no-repeat,
    radial-gradient(circle 3px,#eeee89 90%,#0000) 0 0/20% 100%
    #000;
  overflow: hidden;
}
.loader5::before {
  content: "";
  width: 20px;
  transform: translate(-100%);
  border-radius: 50%;
  background: #ffff2d;
  animation:
    l5-1 .25s .153s infinite steps(5) alternate,
    l5-2  3s        infinite linear;
}
@keyframes l5-1{
    0% {clip-path: polygon(50% 50%,100%   0,100% 0,0 0,0 100%,100% 100%,100% 100%)}
  100% {clip-path: polygon(50% 50%,100% 65%,100% 0,0 0,0 100%,100% 100%,100%  35%)}
}
@keyframes l5-2{
  100% {transform: translate(90px)}
}
@keyframes l5-0{
  100% {background-size:120% 100%,20% 100%}
}`,
    `
.loader6 {
  width: 80px;
  height: 60px;
  box-sizing: border-box;
  background:
    linear-gradient(#fff 0 0) left /calc(50% - 15px) 8px no-repeat,
    linear-gradient(#fff 0 0) right/calc(50% - 15px) 8px no-repeat,
    conic-gradient(from 135deg at top,#0000, red 1deg 90deg,#0000 91deg) bottom/14px 8px repeat-x,
    #000;
  border-bottom: 2px solid red;
  position: relative;
  overflow: hidden;
  animation: l6-0 1s infinite linear;
}
.loader6::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 14px;
  background: lightblue;
  left: -5px;
  animation:
    l6-1 2s infinite cubic-bezier(0,100,1,100),
    l6-2 2s infinite linear;
}
@keyframes l6-0{
  50% { background-position: left,right,bottom -2px left -4px}
}
@keyframes l6-1{
  0%,27%   {bottom: calc(50% + 4px)}
  65%,100% {bottom: calc(50% + 4.1px)}
}
@keyframes l6-2{
  100% {left:100%}
}`,
    `
.loader7 {
  width: 70px;
  height: 50px;
  box-sizing: border-box;
  background:
    conic-gradient(from 135deg at top,#0000, #fff 1deg 90deg,#0000 91deg) right -20px bottom 8px/18px 9px,
    linear-gradient(#fff 0 0) bottom/100% 8px,
    #000;
  background-repeat: no-repeat;
  border-bottom: 8px solid #000;
  position: relative;
  animation: l7-0 2s infinite linear;
}
.loader7::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 14px;
  background: lightblue;
  left: 10px;
  animation: l7-1 2s infinite cubic-bezier(0,200,1,200);
}
@keyframes l7-0{
  100% { background-position: left -20px bottom 8px,bottom}
}
@keyframes l7-1{
  0%,50%   {bottom: 8px}
  90%,100% {bottom: 8.1px}
}`,
    `
.loader8 {
  width: fit-content;
  font-size: 17px;
  font-family: monospace;
  line-height: 1.4;
  font-weight: bold;
  --c: no-repeat linear-gradient(#000 0 0);
  background: var(--c),var(--c),var(--c),var(--c),var(--c),var(--c),var(--c);
  background-size: calc(1ch + 1px) 100%;
  border-bottom: 10px solid #0000;
  position: relative;
  animation: l8-0 3s infinite linear;
  clip-path: inset(-20px 0);
}
.loader8::before {
  content:"Loading";
}
.loader8::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 14px;
  background: #25adda;
  left: -10px;
  bottom: 100%;
  animation: l8-1 3s infinite linear;
}
@keyframes l8-0{
   0%,
   12.5% {background-position: calc(0*100%/6) 0   ,calc(1*100%/6)    0,calc(2*100%/6)    0,calc(3*100%/6)    0,calc(4*100%/6)    0,calc(5*100%/6)    0,calc(6*100%/6) 0}
   25%   {background-position: calc(0*100%/6) 40px,calc(1*100%/6)    0,calc(2*100%/6)    0,calc(3*100%/6)    0,calc(4*100%/6)    0,calc(5*100%/6)    0,calc(6*100%/6) 0}
   37.5% {background-position: calc(0*100%/6) 40px,calc(1*100%/6) 40px,calc(2*100%/6)    0,calc(3*100%/6)    0,calc(4*100%/6)    0,calc(5*100%/6)    0,calc(6*100%/6) 0}
   50%   {background-position: calc(0*100%/6) 40px,calc(1*100%/6) 40px,calc(2*100%/6) 40px,calc(3*100%/6)    0,calc(4*100%/6)    0,calc(5*100%/6)    0,calc(6*100%/6) 0}
   62.5% {background-position: calc(0*100%/6) 40px,calc(1*100%/6) 40px,calc(2*100%/6) 40px,calc(3*100%/6) 40px,calc(4*100%/6)    0,calc(5*100%/6)    0,calc(6*100%/6) 0}
   75%   {background-position: calc(0*100%/6) 40px,calc(1*100%/6) 40px,calc(2*100%/6) 40px,calc(3*100%/6) 40px,calc(4*100%/6) 40px,calc(5*100%/6)    0,calc(6*100%/6) 0}
   87.4% {background-position: calc(0*100%/6) 40px,calc(1*100%/6) 40px,calc(2*100%/6) 40px,calc(3*100%/6) 40px,calc(4*100%/6) 40px,calc(5*100%/6) 40px,calc(6*100%/6) 0}
   100%  {background-position: calc(0*100%/6) 40px,calc(1*100%/6) 40px,calc(2*100%/6) 40px,calc(3*100%/6) 40px,calc(4*100%/6) 40px,calc(5*100%/6) 40px,calc(6*100%/6) 40px}
}
@keyframes l8-1{
  100% {left:115%}
}`,
    `
.loader9 {
  width: fit-content;
  font-size: 17px;
  font-family: monospace;
  line-height: 1.4;
  font-weight: bold;
  background:
    linear-gradient(#000 0 0) left ,
    linear-gradient(#000 0 0) right;
  background-repeat: no-repeat;
  border-right: 5px solid #0000;
  border-left: 5px solid #0000;
  background-origin: border-box;
  position: relative;
  animation: l9-0 2s infinite;
}
.loader9::before {
  content:"Loading";
}
.loader9::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 22px;
  height: 60px;
  background:
   linear-gradient(90deg,#000 4px,#0000 0 calc(100% - 4px),#000 0) bottom            /22px 20px,
   linear-gradient(90deg,red  4px,#0000 0 calc(100% - 4px),red  0) bottom 10px left 0/22px 6px,
   linear-gradient(#000 0 0) bottom 3px left 0  /22px 8px,
   linear-gradient(#000 0 0) bottom 0   left 50%/8px  16px;
 background-repeat: no-repeat;
 animation: l9-1 2s infinite;
}
@keyframes l9-0{
  0%,25%    {background-size: 50% 100%}
  25.1%,75% {background-size: 0 0,50% 100%}
  75.1%,100%{background-size: 0 0,0 0}
}
@keyframes l9-1{
  25%   { background-position:bottom, bottom 54px left 0,bottom 3px left 0,bottom 0 left 50%;left:0}
  25.1% { background-position:bottom, bottom 10px left 0,bottom 3px left 0,bottom 0 left 50%;left:0}
  50%   { background-position:bottom, bottom 10px left 0,bottom 3px left 0,bottom 0 left 50%;left:calc(100% - 22px)}
  75%   { background-position:bottom, bottom 54px left 0,bottom 3px left 0,bottom 0 left 50%;left:calc(100% - 22px)}
  75.1% { background-position:bottom, bottom 10px left 0,bottom 3px left 0,bottom 0 left 50%;left:calc(100% - 22px)}
}`,
    `
.loader10 {
  width: fit-content;
  font-size: 17px;
  font-family: monospace;
  line-height: 1.4;
  font-weight: bold;
  padding: 30px 2px 50px;
  background: linear-gradient(#000 0 0) 0 0/100% 100% content-box padding-box no-repeat;
  position: relative;
  overflow: hidden;
  animation: l10-0 2s infinite cubic-bezier(1,175,.5,175);
}
.loader10::before {
  content:"Loading";
  display:inline-block;
  animation: l10-2 2s infinite;
}
.loader10::after {
  content:"";
  position: absolute;
  width: 34px;
  height: 28px;
  top: 110%;
  left: calc(50% - 16px);
  background:
    linear-gradient(90deg,#0000 12px,#f92033 0 22px,#0000 0 26px,#fdc98d 0 32px,#0000) bottom 26px left 50%,
    linear-gradient(90deg,#0000 10px,#f92033 0 28px,#fdc98d 0 32px,#0000 0) bottom 24px  left 50%,
    linear-gradient(90deg,#0000 10px,#643700 0 16px,#fdc98d 0 20px,#000 0 22px,#fdc98d 0 24px,#000 0 26px,#f92033 0 32px,#0000 0) bottom 22px left 50%,
    linear-gradient(90deg,#0000 8px,#643700 0 10px,#fdc98d 0 12px,#643700 0 14px,#fdc98d 0 20px,#000 0 22px,#fdc98d 0 28px,#f92033 0 32px,#0000 0) bottom 20px left 50%,
    linear-gradient(90deg,#0000 8px,#643700 0 10px,#fdc98d 0 12px,#643700 0 16px,#fdc98d 0 22px,#000 0 24px,#fdc98d 0 30px,#f92033 0 32px,#0000 0) bottom 18px left 50%,
    linear-gradient(90deg,#0000 8px,#643700 0 12px,#fdc98d 0 20px,#000 0 28px,#f92033 0 30px,#0000 0) bottom 16px left 50%,
    linear-gradient(90deg,#0000 12px,#fdc98d 0 26px,#f92033 0 30px,#0000 0) bottom 14px left 50%,
    linear-gradient(90deg,#fdc98d 6px,#f92033 0 14px,#222a87 0 16px,#f92033 0 22px,#222a87 0 24px,#f92033 0 28px,#0000 0 32px,#643700 0) bottom 12px left 50%,
    linear-gradient(90deg,#fdc98d 6px,#f92033 0 16px,#222a87 0 18px,#f92033 0 24px,#f92033 0 26px,#0000 0 30px,#643700 0) bottom 10px left 50%,
    linear-gradient(90deg,#0000 10px,#f92033 0 16px,#222a87 0 24px,#feee49 0 26px,#222a87 0 30px, #643700 0) bottom 8px left 50%,
    linear-gradient(90deg,#0000 12px,#222a87 0 18px,#feee49 0 20px,#222a87 0 30px,#643700 0) bottom 6px left 50%,
    linear-gradient(90deg,#0000 8px,#643700 0 12px,#222a87 0 30px,#643700 0) bottom 4px left 50%,
    linear-gradient(90deg,#0000 6px,#643700 0 14px,#222a87 0 26px,#0000 0) bottom 2px left 50%,
    linear-gradient(90deg,#0000 6px,#643700 0 10px,#0000 0 ) bottom 0px left 50%;
  background-size: 34px 2px;
  background-repeat: no-repeat;
  animation: inherit;
  animation-name: l10-1;
}
@keyframes l10-0{
  0%,30%   { background-position: 0 0px }
  50%,100% { background-position: 0 -0.1px }
}
@keyframes l10-1{
  50%,100% { top:109.5% };
}
@keyframes l10-2{
  0%,30%   { transform:translateY(0); }
  80%,100% { transform:translateY(-260%); }
}
`,
  ],

  bars: [
    `
    .loader1 {
  width: 45px;
  aspect-ratio: 1;
  --c: no-repeat linear-gradient(#000 0 0);
  background:
    var(--c) 0% 50%,
    var(--c) 50% 50%,
    var(--c) 100% 50%;
  background-size: 20% 100%;
  animation: l1 1s infinite linear;
}
@keyframes l1 {
  0% {
    background-size:
      20% 100%,
      20% 100%,
      20% 100%;
  }
  33% {
    background-size:
      20% 10%,
      20% 100%,
      20% 100%;
  }
  50% {
    background-size:
      20% 100%,
      20% 10%,
      20% 100%;
  }
  66% {
    background-size:
      20% 100%,
      20% 100%,
      20% 10%;
  }
  100% {
    background-size:
      20% 100%,
      20% 100%,
      20% 100%;
  }
}`,
    `
.loader2 {
  width: 45px;
  aspect-ratio: 1;
  --c: no-repeat linear-gradient(#000 0 0);
  background:
    var(--c) 0% 100%,
    var(--c) 50% 100%,
    var(--c) 100% 100%;
  animation: l2 1s infinite linear;
}
@keyframes l2 {
  0% {
    background-size:
      20% 100%,
      20% 100%,
      20% 100%;
  }
  20% {
    background-size:
      20% 60%,
      20% 100%,
      20% 100%;
  }
  40% {
    background-size:
      20% 80%,
      20% 60%,
      20% 100%;
  }
  60% {
    background-size:
      20% 100%,
      20% 80%,
      20% 60%;
  }
  80% {
    background-size:
      20% 100%,
      20% 100%,
      20% 80%;
  }
  100% {
    background-size:
      20% 100%,
      20% 100%,
      20% 100%;
  }
}`,
    `
.loader3 {
  width: 45px;
  aspect-ratio: 1;
  background:
    linear-gradient(#0000 calc(1 * 100% / 6), #000 0 calc(3 * 100% / 6), #0000 0) left bottom,
    linear-gradient(#0000 calc(2 * 100% / 6), #000 0 calc(4 * 100% / 6), #0000 0) center bottom,
    linear-gradient(#0000 calc(3 * 100% / 6), #000 0 calc(5 * 100% / 6), #0000 0) right bottom;
  background-size: 20% 600%;
  background-repeat: no-repeat;
  animation: l3 1s infinite linear;
}
@keyframes l3 {
  100% {
    background-position:
      left top,
      center top,
      right top;
  }
}`,
    `
.loader4 {
  width: 45px;
  aspect-ratio: 1;
  --c: no-repeat linear-gradient(#000 calc(50% - 10px), #0000 0 calc(50% + 10px), #000 0);
  background:
    var(--c) 0% 100%,
    var(--c) 50% 100%,
    var(--c) 100% 100%;
  background-size: 20% calc(200% + 20px);
  animation: l4 1s infinite linear;
}
@keyframes l4 {
  33% {
    background-position:
      0% 50%,
      50% 100%,
      100% 100%;
  }
  50% {
    background-position:
      0% 0%,
      50% 50%,
      100% 100%;
  }
  66% {
    background-position:
      0% 0%,
      50% 0%,
      100% 50%;
  }
  100% {
    background-position:
      0% 0%,
      50% 0%,
      100% 0%;
  }
}`,
    `
.loader5 {
  width: 45px;
  aspect-ratio: 0.75;
  --c: no-repeat linear-gradient(#000 0 0);
  background:
    var(--c) 0% 100%,
    var(--c) 50% 100%,
    var(--c) 100% 100%;
  background-size: 20% 65%;
  animation: l5 1s infinite linear;
}
@keyframes l5 {
  20% {
    background-position:
      0% 50%,
      50% 100%,
      100% 100%;
  }
  40% {
    background-position:
      0% 0%,
      50% 50%,
      100% 100%;
  }
  60% {
    background-position:
      0% 100%,
      50% 0%,
      100% 50%;
  }
  80% {
    background-position:
      0% 100%,
      50% 100%,
      100% 0%;
  }
}`,
    `
.loader6 {
  width: 45px;
  aspect-ratio: 0.75;
  --c: no-repeat linear-gradient(#000 0 0);
  background:
    var(--c) 0% 50%,
    var(--c) 50% 50%,
    var(--c) 100% 50%;
  background-size: 20% 50%;
  animation: l6 1s infinite linear;
}
@keyframes l6 {
  20% {
    background-position:
      0% 0%,
      50% 50%,
      100% 50%;
  }
  40% {
    background-position:
      0% 100%,
      50% 0%,
      100% 50%;
  }
  60% {
    background-position:
      0% 50%,
      50% 100%,
      100% 0%;
  }
  80% {
    background-position:
      0% 50%,
      50% 50%,
      100% 100%;
  }
}`,
    `
.loader7 {
  width: 45px;
  aspect-ratio: 0.75;
  --c: no-repeat linear-gradient(#000 0 0);
  background:
    var(--c) 0% 50%,
    var(--c) 50% 50%,
    var(--c) 100% 50%;
  animation: l7 1s infinite linear alternate;
}
@keyframes l7 {
  0% {
    background-size:
      20% 50%,
      20% 50%,
      20% 50%;
  }
  20% {
    background-size:
      20% 20%,
      20% 50%,
      20% 50%;
  }
  40% {
    background-size:
      20% 100%,
      20% 20%,
      20% 50%;
  }
  60% {
    background-size:
      20% 50%,
      20% 100%,
      20% 20%;
  }
  80% {
    background-size:
      20% 50%,
      20% 50%,
      20% 100%;
  }
  100% {
    background-size:
      20% 50%,
      20% 50%,
      20% 50%;
  }
}`,
    `
.loader8 {
  width: 45px;
  aspect-ratio: 0.75;
  --c: no-repeat linear-gradient(#000 0 0);
  background:
    var(--c) 0% 100%,
    var(--c) 50% 100%,
    var(--c) 100% 100%;
  background-size: 20% 65%;
  animation: l8 1s infinite linear;
}
@keyframes l8 {
  16.67% {
    background-position:
      0% 0%,
      50% 100%,
      100% 100%;
  }
  33.33% {
    background-position:
      0% 0%,
      50% 0%,
      100% 100%;
  }
  50% {
    background-position:
      0% 0%,
      50% 0%,
      100% 0%;
  }
  66.67% {
    background-position:
      0% 100%,
      50% 0%,
      100% 0%;
  }
  83.33% {
    background-position:
      0% 100%,
      50% 100%,
      100% 0%;
  }
}`,
    `
.loader9 {
  width: 45px;
  aspect-ratio: 0.75;
  --c: no-repeat linear-gradient(#000 0 0);
  background:
    var(--c) 0% 50%,
    var(--c) 50% 50%,
    var(--c) 100% 50%;
  background-size: 20% 60%;
  animation: l9 1s infinite;
}
@keyframes l9 {
  33% {
    background-position:
      0% 0%,
      50% 100%,
      100% 0%;
  }
  66% {
    background-position:
      0% 100%,
      50% 0%,
      100% 100%;
  }
}`,
    `
.loader10 {
  height: 45px;
  aspect-ratio: 1.2;
  --c: no-repeat repeating-linear-gradient(90deg, #000 0 20%, #0000 0 40%);
  background:
    var(--c) 50% 0,
    var(--c) 50% 100%;
  background-size: calc(500% / 6) 50%;
  animation: l10 1s infinite linear;
}
@keyframes l10 {
  33% {
    background-position:
      0 0,
      100% 100%;
  }
  66% {
    background-position:
      0 100%,
      100% 0;
  }
  100% {
    background-position:
      50% 100%,
      50% 0;
  }
}`,
    `
.loader11 {
  width: 45px;
  aspect-ratio: 1;
  --c: no-repeat linear-gradient(#000 0 0);
  background:
    var(--c) 0 0,
    var(--c) 0 100%,
    var(--c) 50% 0,
    var(--c) 50% 100%,
    var(--c) 100% 0,
    var(--c) 100% 100%;
  animation: l11 1s infinite linear;
}
@keyframes l11 {
  80% {
    background-size: 20% 30%;
  }
  0%,
  90%,
  100% {
    background-size: 20% 50%;
  }
}`,
    `
.loader12 {
  width: 45px;
  aspect-ratio: 1;
  --c: no-repeat linear-gradient(#000 0 0);
  background:
    var(--c) 0 0,
    var(--c) 0 100%,
    var(--c) 50% 0,
    var(--c) 50% 100%,
    var(--c) 100% 0,
    var(--c) 100% 100%;
  animation: l12 1s infinite;
}
@keyframes l12 {
  0%,
  100% {
    background-size: 20% 50%;
  }
  16.67% {
    background-size:
      20% 30%,
      20% 30%,
      20% 50%,
      20% 50%,
      20% 50%,
      20% 50%;
  }
  33.33% {
    background-size:
      20% 30%,
      20% 30%,
      20% 30%,
      20% 30%,
      20% 50%,
      20% 50%;
  }
  50% {
    background-size:
      20% 30%,
      20% 30%,
      20% 30%,
      20% 30%,
      20% 30%,
      20% 30%;
  }
  66.67% {
    background-size:
      20% 50%,
      20% 50%,
      20% 30%,
      20% 30%,
      20% 30%,
      20% 30%;
  }
  83.33% {
    background-size:
      20% 50%,
      20% 50%,
      20% 50%,
      20% 50%,
      20% 30%,
      20% 30%;
  }
}`,
    `
.loader13 {
  width: 45px;
  aspect-ratio: 1;
  --c: no-repeat linear-gradient(#000 0 0);
  background:
    var(--c) 0 0,
    var(--c) 0 100%,
    var(--c) 50% 50%,
    var(--c) 100% 0,
    var(--c) 100% 100%;
  animation: l13 1s infinite alternate;
}

@keyframes l13 {
  0%,
  10% {
    background-size: 20% 100%;
  }
  50% {
    background-size: 20% 20%;
  }
  90%,
  100% {
    background-size: 100% 20%;
  }
}`,
    `
.loader14 {
  width: 45px;
  aspect-ratio: 1;
  --c: no-repeat linear-gradient(#000 0 0);
  background: var(--c), var(--c), var(--c), var(--c), var(--c), var(--c);
  animation:
    l14-1 0.5s infinite alternate,
    l14-2 2s infinite;
}
@keyframes l14-1 {
  0%,
  10% {
    background-size: 20% 100%;
  }
  100% {
    background-size: 20% 20%;
  }
}
@keyframes l14-2 {
  0%,
  49.9% {
    background-position:
      0 0,
      0 100%,
      50% 50%,
      50% 50%,
      100% 0,
      100% 100%;
  }
  50%,
  100% {
    background-position:
      0 50%,
      0 50%,
      50% 0,
      50% 100%,
      100% 50%,
      100% 50%;
  }
}`,
    `
.loader15 {
  width: 45px;
  aspect-ratio: 1;
  --c: no-repeat linear-gradient(#000 0 0);
  background: var(--c), var(--c), var(--c);
  animation:
    l15-1 1s infinite,
    l15-2 1s infinite;
}
@keyframes l15-1 {
  0%,
  100% {
    background-size: 20% 100%;
  }
  33%,
  66% {
    background-size: 20% 40%;
  }
}
@keyframes l15-2 {
  0%,
  33% {
    background-position:
      0 0,
      50% 100%,
      100% 100%;
  }
  66%,
  100% {
    background-position:
      100% 0,
      0 100%,
      50% 100%;
  }
}`,
    `
.loader16 {
  width: 45px;
  aspect-ratio: 1;
  --c: no-repeat linear-gradient(#000 0 0);
  background: var(--c), var(--c), var(--c);
  animation:
    l16-1 1s infinite,
    l16-2 1s infinite;
}
@keyframes l16-1 {
  0%,
  100% {
    background-size: 20% 100%;
  }
  33%,
  66% {
    background-size: 20% 40%;
  }
}
@keyframes l16-2 {
  0%,
  33% {
    background-position:
      0 0,
      50% 100%,
      100% 0;
  }
  66%,
  100% {
    background-position:
      0 100%,
      50% 0,
      100% 100%;
  }
}`,
    `
.loader17 {
  width: 45px;
  aspect-ratio: 1;
  --c: no-repeat linear-gradient(#000 0 0);
  background:
    var(--c) 0 0,
    var(--c) 50% 50%,
    var(--c) 100% 100%;
  animation: l17 1s infinite alternate;
}
@keyframes l17 {
  0%,
  10% {
    background-size: 20% 100%;
  }
  50% {
    background-size: 20% 20%;
  }
  90%,
  100% {
    background-size: 100% 20%;
  }
}`,
    `
.loader18 {
  width: 45px;
  aspect-ratio: 1;
  --c: no-repeat linear-gradient(#000 0 0);
  background: var(--c), var(--c), var(--c);
  animation:
    l18-1 1s infinite,
    l18-2 1s infinite;
}
@keyframes l18-1 {
  0%,
  100% {
    background-size: 20% 100%;
  }
  33%,
  66% {
    background-size: 20% 20%;
  }
}
@keyframes l18-2 {
  0%,
  33% {
    background-position:
      0 0,
      50% 50%,
      100% 100%;
  }
  66%,
  100% {
    background-position:
      100% 0,
      50% 50%,
      0 100%;
  }
}`,
    `
.loader19 {
  width: 45px;
  aspect-ratio: 1;
  --c: conic-gradient(from -90deg, #000 90deg, #0000 0);
  background: var(--c), var(--c);
  background-size: 40% 40%;
  animation: l19 1s infinite alternate;
}
@keyframes l19 {
  0%,
  10% {
    background-position:
      0 0,
      0 calc(100% / 3);
  }
  50% {
    background-position:
      0 0,
      calc(100% / 3) calc(100% / 3);
  }
  90%,
  100% {
    background-position:
      0 0,
      calc(100% / 3) 0;
  }
}`,
    `
.loader20 {
  width: 45px;
  aspect-ratio: 1;
  --c: conic-gradient(from -90deg, #000 90deg, #0000 0);
  background: var(--c), var(--c);
  background-size: 40% 40%;
  animation: l20 1.5s infinite;
}
@keyframes l20 {
  0%,
  20% {
    background-position:
      0 0,
      0 calc(100% / 3);
  }
  33% {
    background-position:
      0 0,
      calc(100% / 3) calc(100% / 3);
  }
  66% {
    background-position:
      0 calc(100% / 3),
      calc(100% / 3) 0;
  }
  80%,
  100% {
    background-position:
      0 calc(100% / 3),
      0 0;
  }
}`,
    `
.loader21 {
  width: 45px;
  aspect-ratio: 1;
  --c: no-repeat repeating-linear-gradient(90deg, #000 0 20%, #0000 0 40%);
  background: var(--c), var(--c), var(--c), var(--c);
  background-size: 100% 26%;
  animation: l21 1.5s infinite;
}

@keyframes l21 {
  0% {
    background-position:
      -50px calc(0 * 100% / 3),
      -50px calc(1 * 100% / 3),
      -50px calc(2 * 100% / 3),
      -50px calc(3 * 100% / 3);
  }
  12.5% {
    background-position:
      0 calc(0 * 100% / 3),
      -50px calc(1 * 100% / 3),
      -50px calc(2 * 100% / 3),
      -50px calc(3 * 100% / 3);
  }
  25% {
    background-position:
      0 calc(0 * 100% / 3),
      0 calc(1 * 100% / 3),
      -50px calc(2 * 100% / 3),
      -50px calc(3 * 100% / 3);
  }
  37.5% {
    background-position:
      0 calc(0 * 100% / 3),
      0 calc(1 * 100% / 3),
      0 calc(2 * 100% / 3),
      -50px calc(3 * 100% / 3);
  }
  45%,
  55% {
    background-position:
      0 calc(0 * 100% / 3),
      0 calc(1 * 100% / 3),
      0 calc(2 * 100% / 3),
      0 calc(3 * 100% / 3);
  }
  62.5% {
    background-position:
      50px calc(0 * 100% / 3),
      0 calc(1 * 100% / 3),
      0 calc(2 * 100% / 3),
      0 calc(3 * 100% / 3);
  }
  75% {
    background-position:
      50px calc(0 * 100% / 3),
      50px calc(1 * 100% / 3),
      0 calc(2 * 100% / 3),
      0 calc(3 * 100% / 3);
  }
  87.5% {
    background-position:
      50px calc(0 * 100% / 3),
      50px calc(1 * 100% / 3),
      50px calc(2 * 100% / 3),
      0 calc(3 * 100% / 3);
  }
  100% {
    background-position:
      50px calc(0 * 100% / 3),
      50px calc(1 * 100% / 3),
      50px calc(2 * 100% / 3),
      50px calc(3 * 100% / 3);
  }
}`,
    `
.loader22 {
  width: 45px;
  aspect-ratio: 1;
  --c: no-repeat repeating-linear-gradient(90deg, #000 0 20%, #0000 0 40%);
  background: var(--c), var(--c), var(--c), var(--c);
  background-size: 100% 26%;
  animation: l22 1.5s infinite;
}

@keyframes l22 {
  0% {
    background-position:
      0 -20px,
      0 -20px,
      0 -20px,
      0 -20px;
  }
  12.5% {
    background-position:
      0 -20px,
      0 -20px,
      0 -20px,
      0 calc(3 * 100% / 3);
  }
  25% {
    background-position:
      0 -20px,
      0 -20px,
      0 calc(2 * 100% / 3),
      0 calc(3 * 100% / 3);
  }
  37.5% {
    background-position:
      0 -20px,
      0 calc(1 * 100% / 3),
      0 calc(2 * 100% / 3),
      0 calc(3 * 100% / 3);
  }
  45%,
  50% {
    background-position:
      0 calc(0 * 100% / 3),
      0 calc(1 * 100% / 3),
      0 calc(2 * 100% / 3),
      0 calc(3 * 100% / 3);
  }
  62.5% {
    background-position:
      0 calc(0 * 100% / 3),
      0 calc(1 * 100% / 3),
      0 calc(2 * 100% / 3),
      0 50px;
  }
  75% {
    background-position:
      0 calc(0 * 100% / 3),
      0 calc(1 * 100% / 3),
      0 50px,
      0 50px;
  }
  87.5% {
    background-position:
      0 calc(0 * 100% / 3),
      0 50px,
      0 50px,
      0 50px;
  }
  100% {
    background-position:
      0 50px,
      0 50px,
      0 50px,
      0 50px;
  }
}`,
    `
.loader23 {
  height: 45px;
  aspect-ratio: 1.6;
  --c: no-repeat repeating-linear-gradient(90deg, #000 0 20%, #0000 0 40%);
  background: var(--c), var(--c), var(--c), var(--c);
  background-size: 62.5% 26%;
  animation: l23 1s infinite;
}
@keyframes l23 {
  0%,
  10% {
    background-position:
      50% calc(0 * 100% / 3),
      50% calc(1 * 100% / 3),
      50% calc(2 * 100% / 3),
      50% calc(3 * 100% / 3);
  }
  33% {
    background-position:
      100% calc(0 * 100% / 3),
      calc(100% - 9px) calc(1 * 100% / 3),
      9px calc(2 * 100% / 3),
      0 calc(3 * 100% / 3);
  }
  66% {
    background-position:
      0 calc(0 * 100% / 3),
      9px calc(1 * 100% / 3),
      calc(100% - 9px) calc(2 * 100% / 3),
      100% calc(3 * 100% / 3);
  }
  90%,
  100% {
    background-position:
      50% calc(0 * 100% / 3),
      50% calc(1 * 100% / 3),
      50% calc(2 * 100% / 3),
      50% calc(3 * 100% / 3);
  }
}`,
    `
.loader24 {
  width: 45px;
  aspect-ratio: 0.8;
  --c: no-repeat repeating-linear-gradient(90deg, #000 0 20%, #0000 0 40%);
  background: var(--c), var(--c), var(--c), var(--c);
  background-size: 100% 21%;
  animation: l24 0.75s infinite alternate;
}
@keyframes l24 {
  0%,
  10% {
    background-position:
      0 calc(0 * 100% / 4),
      0 calc(1 * 100% / 4),
      0 calc(2 * 100% / 4),
      0 calc(3 * 100% / 4);
  }
  25% {
    background-position:
      0 calc(0 * 100% / 4),
      0 calc(1 * 100% / 4),
      0 calc(2 * 100% / 4),
      0 calc(4 * 100% / 4);
  }
  50% {
    background-position:
      0 calc(0 * 100% / 4),
      0 calc(1 * 100% / 4),
      0 calc(3 * 100% / 4),
      0 calc(4 * 100% / 4);
  }
  75% {
    background-position:
      0 calc(0 * 100% / 4),
      0 calc(2 * 100% / 4),
      0 calc(3 * 100% / 4),
      0 calc(4 * 100% / 4);
  }
  90%,
  100% {
    background-position:
      0 calc(1 * 100% / 4),
      0 calc(2 * 100% / 4),
      0 calc(3 * 100% / 4),
      0 calc(4 * 100% / 4);
  }
}`,
    `
.loader25 {
  width: 45px;
  aspect-ratio: 1;
  --c: no-repeat repeating-linear-gradient(90deg, #000 0 calc(100%/7), #0000 0 calc(200%/7));
  background: var(--c), var(--c), var(--c), var(--c);
  background-size: 140% 26%;
  animation: l25 0.75s infinite;
}
@keyframes l25 {
  0% {
    background-position:
      0 calc(0 * 100% / 3),
      100% calc(1 * 100% / 3),
      0 calc(2 * 100% / 3),
      100% calc(3 * 100% / 3);
  }
  25% {
    background-position:
      100% calc(0 * 100% / 3),
      100% calc(1 * 100% / 3),
      0 calc(2 * 100% / 3),
      100% calc(3 * 100% / 3);
  }
  50% {
    background-position:
      100% calc(0 * 100% / 3),
      0 calc(1 * 100% / 3),
      0 calc(2 * 100% / 3),
      100% calc(3 * 100% / 3);
  }
  75% {
    background-position:
      100% calc(0 * 100% / 3),
      0 calc(1 * 100% / 3),
      100% calc(2 * 100% / 3),
      100% calc(3 * 100% / 3);
  }
  100% {
    background-position:
      100% calc(0 * 100% / 3),
      0 calc(1 * 100% / 3),
      100% calc(2 * 100% / 3),
      0 calc(3 * 100% / 3);
  }
}`,
    `
.loader26 {
  width: 45px;
  aspect-ratio: 1;
  --c: no-repeat repeating-linear-gradient(90deg, #000 0 calc(100%/7), #0000 0 calc(200%/7));
  background: var(--c), var(--c), var(--c), var(--c);
  background-size: 140% 26%;
  animation: l26 0.75s infinite linear;
}
@keyframes l26 {
  0%,
  5% {
    background-position:
      0 calc(0 * 100% / 3),
      0 calc(1 * 100% / 3),
      0 calc(2 * 100% / 3),
      0 calc(3 * 100% / 3);
  }
  20% {
    background-position:
      50% calc(0 * 100% / 3),
      0 calc(1 * 100% / 3),
      0 calc(2 * 100% / 3),
      0 calc(3 * 100% / 3);
  }
  40% {
    background-position:
      100% calc(0 * 100% / 3),
      50% calc(1 * 100% / 3),
      0 calc(2 * 100% / 3),
      0 calc(3 * 100% / 3);
  }
  60% {
    background-position:
      100% calc(0 * 100% / 3),
      100% calc(1 * 100% / 3),
      50% calc(2 * 100% / 3),
      0 calc(3 * 100% / 3);
  }
  80% {
    background-position:
      100% calc(0 * 100% / 3),
      100% calc(1 * 100% / 3),
      100% calc(2 * 100% / 3),
      50% calc(3 * 100% / 3);
  }
  95%,
  100% {
    background-position:
      100% calc(0 * 100% / 3),
      100% calc(1 * 100% / 3),
      100% calc(2 * 100% / 3),
      100% calc(3 * 100% / 3);
  }
}`,
    `
.loader27 {
  width: 45px;
  aspect-ratio: 1;
  --c: no-repeat repeating-linear-gradient(90deg, #000 0 calc(100%/7), #0000 0 calc(200%/7));
  background: var(--c), var(--c), var(--c), var(--c);
  background-size: 140% 26%;
  animation: l27 0.75s infinite linear;
}
@keyframes l27 {
  0%,
  20% {
    background-position:
      0 calc(0 * 100% / 3),
      100% calc(1 * 100% / 3),
      0 calc(2 * 100% / 3),
      100% calc(3 * 100% / 3);
  }
  80%,
  100% {
    background-position:
      100% calc(0 * 100% / 3),
      0 calc(1 * 100% / 3),
      100% calc(2 * 100% / 3),
      0 calc(3 * 100% / 3);
  }
}`,
    `
.loader28 {
  height: 45px;
  aspect-ratio: 1.4;
  --c: no-repeat repeating-linear-gradient(90deg, #000 0 20%, #0000 0 40%);
  background: var(--c), var(--c), var(--c), var(--c);
  background-size: 72% 26%;
  animation: l28 1s infinite;
}
@keyframes l28 {
  0%,
  20% {
    background-position:
      50% calc(0 * 100% / 3),
      50% calc(1 * 100% / 3),
      50% calc(2 * 100% / 3),
      50% calc(3 * 100% / 3);
  }
  40% {
    background-position:
      50% calc(0 * 100% / 3),
      100% calc(1 * 100% / 3),
      0 calc(2 * 100% / 3),
      50% calc(3 * 100% / 3);
  }
  60% {
    background-position:
      50% calc(0 * 100% / 3),
      0 calc(1 * 100% / 3),
      100% calc(2 * 100% / 3),
      50% calc(3 * 100% / 3);
  }
  80%,
  100% {
    background-position:
      50% calc(0 * 100% / 3),
      50% calc(1 * 100% / 3),
      50% calc(2 * 100% / 3),
      50% calc(3 * 100% / 3);
  }
}`,
    `
.loader29 {
  width: 9px;
  height: 9px;
  background: #000;
  color: #000;
  box-shadow:
    -18px -9px,
    0 -9px,
    18px -9px,
    -18px 0,
    18px 0,
    -18px 9px,
    0 9px,
    18px 9px,
    -18px 18px,
    0 18px,
    18px 18px;
  animation: l29 2s infinite;
}

@keyframes l29 {
  10% {
    box-shadow:
      -18px -9px,
      0 -9px,
      18px -9px,
      -18px 0,
      18px 0,
      -18px 9px #0000,
      0 9px,
      18px 9px #0000,
      -18px 18px,
      0 18px,
      18px 18px;
  }
  20% {
    box-shadow:
      -18px -9px,
      0 -9px,
      18px -9px,
      -18px 0,
      18px 0,
      -18px 9px,
      0 9px,
      18px 9px #0000,
      -18px 18px #0000,
      0 18px,
      18px 18px;
  }
  30% {
    box-shadow:
      -18px -9px,
      0 -9px #0000,
      18px -9px,
      -18px 0 #0000,
      18px 0,
      -18px 9px,
      0 9px #0000,
      18px 9px,
      -18px 18px #0000,
      0 18px,
      18px 18px #0000;
  }
  40% {
    box-shadow:
      -18px -9px,
      0 -9px,
      18px -9px,
      -18px 0 #0000,
      18px 0 #0000,
      -18px 9px,
      0 9px,
      18px 9px,
      -18px 18px,
      0 18px,
      18px 18px;
  }
  50% {
    box-shadow:
      -18px -9px,
      0 -9px,
      18px -9px,
      -18px 0,
      18px 0 #0000,
      -18px 9px #0000,
      0 9px,
      18px 9px,
      -18px 18px,
      0 18px,
      18px 18px;
  }
  60% {
    box-shadow:
      -18px -9px,
      0 -9px #0000,
      18px -9px,
      -18px 0,
      18px 0,
      -18px 9px #0000,
      0 9px,
      18px 9px,
      -18px 18px #0000,
      0 18px,
      18px 18px;
  }
  70% {
    box-shadow:
      -18px -9px,
      0 -9px #0000,
      18px -9px #0000,
      -18px 0,
      18px 0,
      -18px 9px,
      0 9px,
      18px 9px,
      -18px 18px #0000,
      0 18px,
      18px 18px;
  }
  80% {
    box-shadow:
      -18px -9px #0000,
      0 -9px,
      18px -9px,
      -18px 0,
      18px 0,
      -18px 9px,
      0 9px,
      18px 9px,
      -18px 18px,
      0 18px,
      18px 18px #0000;
  }
  90% {
    box-shadow:
      -18px -9px #0000,
      0 -9px,
      18px -9px,
      -18px 0,
      18px 0,
      -18px 9px,
      0 9px #0000,
      18px 9px,
      -18px 18px,
      0 18px,
      18px 18px #0000;
  }
}`,
    `
.loader30 {
  width:9px;
  height: 9px;
  background: #000;
  color: #000;
  box-shadow:
    -18px -9px,0 -9px,18px -9px,
    -18px  0  ,       18px  0  ,
    -18px  9px,0  9px,18px  9px,
    -18px 18px,0 18px,18px 18px;
  animation: l30 2s infinite;
}
@keyframes l30 {
  10% {
   box-shadow:
     -18px -9px,0 -9px,18px -9px,
     -18px  0  ,       18px  0  ,
     -18px  9px 0 2px,0  9px,18px  9px 0 2px,
     -18px 18px,0 18px,18px 18px;
  }
  20% {
   box-shadow:
     -18px -9px,0 -9px,18px -9px,
     -18px  0  ,       18px  0  ,
     -18px  9px,0  9px,18px  9px 0 2px,
     -18px 18px 0 2px,0 18px,18px 18px;
  }
  30% {
   box-shadow:
     -18px -9px,0 -9px,18px -9px,
     -18px  0   0 2px,       18px  0  ,
     -18px  9px,0  9px 0 2px,18px  9px,
     -18px 18px 0 2px,0 18px,18px 18px 0 2px;
  }
  40% {
   box-shadow:
     -18px -9px,0 -9px ,18px -9px,
     -18px  0  0 2px,       18px  0 0 2px,
     -18px  9px,0  9px,18px  9px,
     -18px 18px,0 18px,18px 18px  0 2px;
  }
  50% {
   box-shadow:
     -18px -9px,0 -9px,18px -9px,
     -18px  0  ,       18px  0  0 2px,
     -18px  9px 0 2px,0  9px,18px  9px,
     -18px 18px,0 18px,18px 18px;
  }
  60% {
   box-shadow:
     -18px -9px,0 -9px 0 2px,18px -9px,
     -18px  0  ,       18px  0  ,
     -18px  9px 0 2px,0  9px,18px  9px,
     -18px 18px 0 2px,0 18px,18px 18px;
  }
  70% {
   box-shadow:
     -18px -9px,0 -9px 0 2px,18px -9px 0 2px,
     -18px  0  ,       18px  0  ,
     -18px  9px,0  9px,18px  9px,
     -18px 18px 0 2px,0 18px,18px 18px;
  }
  80% {
   box-shadow:
     -18px -9px 0 2px,0 -9px,18px -9px,
     -18px  0  ,       18px  0  ,
     -18px  9px,0  9px,18px  9px,
     -18px 18px,0 18px,18px 18px 0 2px;
  }
  90% {
   box-shadow:
     -18px -9px 0 2px,0 -9px,18px -9px,
     -18px  0  ,       18px  0  ,
     -18px  9px,0  9px 0 2px,18px  9px,
     -18px 18px,0 18px,18px 18px 0 2px;
  }
}
`,
  ], dots: [`
    .loader1 {
  width: 60px;
  aspect-ratio: 4;
  background: radial-gradient(circle closest-side,#000 90%,#0000) 0/calc(100%/3) 100% space;
  clip-path: inset(0 100% 0 0);
  animation: l1 1s steps(4) infinite;
}
@keyframes l1 {to{clip-path: inset(0 -34% 0 0)}}`,`
.loader2 {
  width: 60px;
  aspect-ratio: 4;
  background: radial-gradient(circle closest-side,#000 90%,#0000) 0/calc(100%/3) 100% no-repeat;
  animation: l2 1s steps(3) infinite;
}
@keyframes l2 {to{background-position: 150%}}`,`
.loader3 {
  width: 60px;
  aspect-ratio: 2;
  --_g: no-repeat radial-gradient(circle closest-side,#000 90%,#0000);
  background:
    var(--_g) 0%   50%,
    var(--_g) 50%  50%,
    var(--_g) 100% 50%;
  background-size: calc(100%/3) 50%;
  animation: l3 1s infinite linear;
}
@keyframes l3 {
    20%{background-position:0%   0%, 50%  50%,100%  50%}
    40%{background-position:0% 100%, 50%   0%,100%  50%}
    60%{background-position:0%  50%, 50% 100%,100%   0%}
    80%{background-position:0%  50%, 50%  50%,100% 100%}
}`,`
.loader4 {
  width: 60px;
  aspect-ratio: 4;
  --c:#000 90%,#0000;
  background:
    radial-gradient(circle closest-side at left  6px top 50%,var(--c)),
    radial-gradient(circle closest-side                     ,var(--c)),
    radial-gradient(circle closest-side at right 6px top 50%,var(--c));
  background-size: 100% 100%;
  background-repeat: no-repeat;
  animation: l4 1s infinite alternate;
}
@keyframes l4 {
    to{width:25px;aspect-ratio: 1}
}`,`
.loader5 {
  width: 15px;
  aspect-ratio: 1;
  border-radius: 50%;
  animation: l5 1s infinite linear alternate;
}
@keyframes l5 {
    0%  {box-shadow: 20px 0 #000, -20px 0 #0002;background: #000 }
    33% {box-shadow: 20px 0 #000, -20px 0 #0002;background: #0002}
    66% {box-shadow: 20px 0 #0002,-20px 0 #000; background: #0002}
    100%{box-shadow: 20px 0 #0002,-20px 0 #000; background: #000 }
}`,`
.loader6 {
  width: 15px;
  aspect-ratio: 1;
  background: #000;
  border-radius: 50%;
  animation: l6 1s infinite linear alternate;
}
@keyframes l6 {
    0%  {box-shadow: 15px 0,-25px 0}
    50% {box-shadow: 15px 0,-15px 0}
    100%{box-shadow: 25px 0,-15px 0}
}`,`
.loader7 {
  width: 60px;
  aspect-ratio: 4;
  --_g: no-repeat radial-gradient(circle closest-side,#000 90%,#0000);
  background:
    var(--_g) 0%   50%,
    var(--_g) 50%  50%,
    var(--_g) 100% 50%;
  background-size: calc(100%/3) 100%;
  animation: l7 1s infinite linear;
}
@keyframes l7 {
    33%{background-size:calc(100%/3) 0%  ,calc(100%/3) 100%,calc(100%/3) 100%}
    50%{background-size:calc(100%/3) 100%,calc(100%/3) 0%  ,calc(100%/3) 100%}
    66%{background-size:calc(100%/3) 100%,calc(100%/3) 100%,calc(100%/3) 0%  }
}`,`
.loader8 {
  width: 15px;
  aspect-ratio: 1;
  position: relative;
}
.loader8::before,
.loader8::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #000;
}
.loader8::before {
  box-shadow: -25px 0;
  animation: l8-1 1s infinite linear;
}
.loader8::after {
  transform: rotate(0deg) translateX(25px);
  animation: l8-2 1s infinite linear;
}

@keyframes l8-1 {
    100%{transform: translateX(25px)}
}
@keyframes l8-2 {
    100%{transform: rotate(-180deg) translateX(25px)}
}`,`
.loader9 {
  width: 15px;
  aspect-ratio: 1;
  position: relative;
  animation: l9-0 1.5s infinite steps(2);
}
.loader9::before,
.loader9::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #000;
}
.loader9::before {
  box-shadow: 26px 0;
  transform: translateX(-26px);
  animation: l9-1 .75s infinite linear alternate;
}
.loader9::after {
  transform: translateX(13px) rotate(0deg) translateX(13px);
  animation: l9-2 .75s infinite linear alternate;
}
@keyframes l9-0 {
    0% ,49.9% {transform: scale(1)}
    50%,100%  {transform: scale(-1)}
}
@keyframes l9-1 {
    100%{box-shadow: 52px 0}
}
@keyframes l9-2 {
    100%{transform: translateX(13px) rotate(-180deg) translateX(13px)}
}`,`
.loader10 {
  width: 15px;
  aspect-ratio: 1;
  position: relative;
}
.loader10::before,
.loader10::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #000;
}
.loader10::before {
  box-shadow: -26px 0;
  animation: l10-1 1.5s infinite linear;
}
.loader10::after {
  transform: rotate(0deg) translateX(26px);
  animation: l10-2 1.5s infinite linear;
}
@keyframes l10-1 {
    50%{transform:translateX(26px)}
}
@keyframes l10-2 {
    100%{transform:rotate(-360deg) translateX(26px)}
}`,`
.loader11 {
  width: 35px;
  aspect-ratio: 1;
  --_g: no-repeat radial-gradient(circle closest-side,#000 90%,#0000);
  background:
    var(--_g) 0    0,
    var(--_g) 0    100%,
    var(--_g) 100% 100%;
  background-size: 40% 40%;
  animation:l11 1s infinite linear;
}
@keyframes l11 {
    25% {background-position:100% 0   ,0 100%,100% 100%}
    50% {background-position:100% 0   ,0 0   ,100% 100%}
    75% {background-position:100% 0   ,0 0   ,0    100%}
    100%{background-position:100% 100%,0 0   ,0    100%}
}`,`
.loader12 {
  width: 60px;
  aspect-ratio: 2;
  --_g: no-repeat radial-gradient(farthest-side,#000 90%,#0000);
  background:
    var(--_g) 0    50%,
    var(--_g) 50%  50%,
    var(--_g) 50%  50%,
    var(--_g) 100% 50%;
  background-size: 25% 50%;
  animation: l12 1s infinite linear;
}
@keyframes l12 {
    33%  {background-position:0   0  ,50% 100%,50%  100%,100% 0}
    66%  {background-position:50% 0  ,0   100%,100% 100%,50%  0}
    100% {background-position:50% 50%,0   50% ,100% 50% ,50%  50%}
}`,`
.loader13 {
  --s: 64px;
  width: var(--s);
  aspect-ratio: 2;
  --_g: #000 90%,#0000;
  background:
    radial-gradient(farthest-side at bottom,var(--_g)) 0    calc(50% - var(--s)/16),
    radial-gradient(farthest-side at top   ,var(--_g)) 0    calc(50% + var(--s)/16),
    radial-gradient(farthest-side at bottom,var(--_g)) 50%  calc(50% - var(--s)/16),
    radial-gradient(farthest-side at top   ,var(--_g)) 50%  calc(50% + var(--s)/16),
    radial-gradient(farthest-side at bottom,var(--_g)) 100% calc(50% - var(--s)/16),
    radial-gradient(farthest-side at top   ,var(--_g)) 100% calc(50% + var(--s)/16);
  background-size: 25% 25%;
  background-repeat: no-repeat;
  animation: l13 1s infinite linear;
}
@keyframes l13 {
    16.67% {background-position:0 0,0 100%,50% calc(50% - var(--s)/8),50% calc(50% + var(--s)/16),100% calc(50% - var(--s)/16),100% calc(50% + var(--s)/16)}
    33.33% {background-position:0 0,0 100%,50% 0,50% 100%,100% calc(50% - var(--s)/16),100% calc(50% + var(--s)/16)}
    50%    {background-position:0 0,0 100%,50% 0,50% 100%,100% 0,100% 100%}
    66.67% {background-position:0 calc(50% - var(--s)/16),0 calc(50% + var(--s)/16),50% 0,50% 100%,100% 0,100% 100%}
    83.33% {background-position:0 calc(50% - var(--s)/16),0 calc(50% + var(--s)/16),50% calc(50% - var(--s)/16),50% calc(50% + var(--s)/16),100% 0,100% 100%}
}`,`
.loader14 {
  --s: 64px;
  width: var(--s);
  aspect-ratio: 2;
  --_g: #000 90%,#0000;
  background:
    radial-gradient(farthest-side,var(--_g)) 0   50%/25% 50%,
    radial-gradient(farthest-side at bottom,var(--_g)) 50%  calc(50% - var(--s)/16)/25% 25%,
    radial-gradient(farthest-side at top   ,var(--_g)) 50%  calc(50% + var(--s)/16)/25% 25%,
    radial-gradient(farthest-side at bottom,var(--_g)) 100% calc(50% - var(--s)/16)/25% 25%,
    radial-gradient(farthest-side at top   ,var(--_g)) 100% calc(50% + var(--s)/16)/25% 25%;
  background-repeat: no-repeat;
  animation: l14 1s infinite;
}
@keyframes l14 {
    25%  {background-position:0    50%,50% 0,50% 100%,100% 0,100% 100%}
    50%  {background-position:100% 50%,0   0,0   100%,50%  0,50%  100%}
    75%,
    100% {background-position:100% 50%,0 calc(50% - var(--s)/16),0 calc(50% + var(--s)/16),50% calc(50% - var(--s)/16),50% calc(50% + var(--s)/16)}
}`,`
.loader15 {
  width: 60px;
  aspect-ratio: 4;
  background: radial-gradient(closest-side at calc(100%/6) 50%,#000 90%,#0000) 0/75% 100%;
  position: relative;
  animation: l15-0 1s infinite linear;
}
.loader15::before {
  content:"";
  position: absolute;
  background: inherit;
  clip-path: inset(0 0 0 50%);
  inset: 0;
  animation: l15-1 0.5s infinite linear;
}
@keyframes l15-0 {
    0%,49.99% {transform: scale(1)}
    50%,100%  {transform: scale(-1)}
}
@keyframes l15-1 {
    0%       {transform: translateX(-37.5%) rotate(0turn)}
    80%,100% {transform: translateX(-37.5%) rotate(1turn)}
}`,`
.loader16 {
  width: 40px;
  aspect-ratio: 1.154;
  --_g: no-repeat radial-gradient(farthest-side,#000 90%,#0000);
  background:
    var(--_g) 50%  0,
    var(--_g) 0    100%,
    var(--_g) 100% 100%;
  background-size: 35% calc(35%*1.154);
  animation: l16 1s infinite;
}
@keyframes l16{
    50%,100% {background-position: 100% 100%,50% 0,0 100%}
}`,`
.loader17 {
  width: 60px;
  aspect-ratio: 1;
  --_g: no-repeat radial-gradient(farthest-side,#000 90%,#0000);
  background: var(--_g), var(--_g), var(--_g);
  background-size: 25% 25%;
  animation: l17 1s infinite;
}
@keyframes l17{
  0%     {background-position: 0% -100%,50% -100%,100% -100%}
  16.67% {background-position: 0%   50%,50% -100%,100% -100%}
  33.33% {background-position: 0%   50%,50%   50%,100% -100%}
  45%,55%{background-position: 0%   50%,50%   50%,100%   50%}
  66.67% {background-position: 0%  200%,50%   50%,100%   50%}
  83.33% {background-position: 0%  200%,50%  200%,100%   50%}
  100%   {background-position: 0%  200%,50%  200%,100%  200%}
}`,`
.loader18 {
  width: 15px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #000;
  box-shadow: -20px 0px,20px 0px;
  animation: l18 1s infinite;
}
@keyframes l18{
  25%  {box-shadow: -20px -20px, 20px 20px}
  50%  {box-shadow:   0px -20px,  0px 20px}
  75%  {box-shadow:  20px -20px,-20px 20px}
  100% {box-shadow:  20px   0px,-20px  0px}
}`,`
.loader19 {
  width: 15px;
  aspect-ratio: 1;
  border-radius: 50%;
  clip-path: inset(-45px);
  box-shadow: -60px 15px,-60px 15px,-60px 15px;
  transform: translateY(-15px);
  animation: l19 1s infinite linear;
}
@keyframes l19{
  16.67% {box-shadow:-60px 15px,-60px 15px,19px 15px}
  33.33% {box-shadow:-60px 15px,  0px 15px,19px 15px}
  40%,60%{box-shadow:-19px 15px,  0px 15px,19px 15px}
  66.67% {box-shadow:-19px 15px,  0px 15px,60px 15px}
  83.33% {box-shadow:-19px 15px, 60px 15px,60px 15px}
  100%   {box-shadow: 60px 15px, 60px 15px,60px 15px}
}`,`
.loader20 {
  height: 15px;
  aspect-ratio: 6;
  display: flex;
}
.loader20:before,
.loader20:after {
  content: "";
  flex: 1;
  padding-left: calc(100%/6);
  background: radial-gradient(closest-side at calc(100%/3) 50%,#000 90%,#0000) 0/75% 100% content-box;
  animation: l20 2s infinite;
}
.loader20:after {
  --_s:-1;
}
@keyframes l20 {
    0%       {transform:scale(var(--_s,1)) translate(0)    rotate(0)}
    25%      {transform:scale(var(--_s,1)) translate(-25%) rotate(0)}
    50%      {transform:scale(var(--_s,1)) translate(-25%) rotate(1turn)}
    75%,100% {transform:scale(var(--_s,1)) translate(0)    rotate(1turn)}
}`,`
.loader21 {
  color: #000;
  width: 4px;
  aspect-ratio: 1;
  border-radius: 50%;
  box-shadow: 19px 0 0 7px, 38px 0 0 3px, 57px 0 0 0;
  transform: translateX(-38px);
  animation: l21 .5s infinite alternate linear;
}

@keyframes l21 {
  50%  {box-shadow: 19px 0 0 3px, 38px 0 0 7px, 57px 0 0 3px}
  100% {box-shadow: 19px 0 0 0  , 38px 0 0 3px, 57px 0 0 7px}
}`,`
.loader22 {
  width: 17px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #000;
  display: grid;
  animation: l22-0 2s infinite linear;
}
.loader22:before,
.loader22:after {
  content: "";
  grid-area: 1/1;
  margin: 15%;
  border-radius: 50%;
  background: inherit;
  transform: rotate(0deg) translate(150%);
  animation: l22 1s infinite;
}
.loader22:after {
  animation-delay: -.5s
}
@keyframes l22-0 {
  100% {transform: rotate(1turn)}
}
@keyframes l22 {
  100% {transform: rotate(1turn) translate(150%)}
}`,`
.loader23 {
  width: 50px;
  height: 28px;
  --_g: no-repeat radial-gradient(farthest-side,#000 94%,#0000);
  background:
    var(--_g) 50%  0,
    var(--_g) 100% 0;
  background-size: 12px 12px;
  position: relative;
  animation: l23-0 1.5s linear infinite;
}
.loader23:before {
  content: "";
  position: absolute;
  height: 12px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #000;
  left:0;
  top:0;
  animation:
    l23-1 1.5s linear infinite,
    l23-2 0.5s cubic-bezier(0,200,.8,200) infinite;
}
@keyframes l23-0 {
  0%,31%  {background-position: 50% 0   ,100% 0}
  33%     {background-position: 50% 100%,100% 0}
  43%,64% {background-position: 50% 0   ,100% 0}
  66%     {background-position: 50% 0   ,100% 100%}
  79%     {background-position: 50% 0   ,100% 0}
  100%    {transform:translateX(calc(-100%/3))}
}
@keyframes l23-1 {
  100% {left:calc(100% + 7px)}
}
@keyframes l23-2 {
  100% {top:-0.1px}
}`,`
.loader24 {
  width: 88px;
  height: 12px;
  --_g: no-repeat radial-gradient(farthest-side,#000 94%,#0000);
  background:
    var(--_g) 25% 0,
    var(--_g) 75% 0;
  background-size: 12px 12px;
  position: relative;
  animation: l24-0 1s linear infinite;
}
.loader24:before {
  content: "";
  position: absolute;
  height: 12px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #000;
  inset: 0;
  margin: auto;
  animation: l24-1 1s cubic-bezier(0.5,300,0.5,-300) infinite;
}
@keyframes l24-0 {
  0%,24%  {background-position: 25% 0,75% 0}
  40%     {background-position: 25% 0,85% 0}
  50%,72% {background-position: 25% 0,75% 0}
  90%     {background-position: 15% 0,75% 0}
  100%    {background-position: 25% 0,75% 0}
}
@keyframes l24-1 {
  100% {transform:translate(0.1px)}
}`,`
.loader25 {
  width: 50px;
  height: 12px;
  --_g: no-repeat radial-gradient(farthest-side,#000 94%,#0000);
  background:
    var(--_g) left,
    var(--_g) right;
  background-size: 12px 12px;
  position: relative;
}
.loader25:before {
  content: "";
  position: absolute;
  height: 12px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #000;
  inset: 0;
  margin: auto;
  animation: l25-1 1s, l25-2 0.5s;
  animation-timing-function: cubic-bezier(.5,-900,.5,900);
  animation-iteration-count: infinite;
}
@keyframes l25-1 {
  100% {transform:translate(0.12px)}
}
@keyframes l25-2 {
  100% {inset:-0.15px 0 0;}
}`,`
.loader26 {
  width: 4px;
  color: #000;
  aspect-ratio: 1;
  border-radius: 50%;
  box-shadow:
    19px -19px 0 0px, 38px -19px 0 0px, 57px -19px 0 0px,
    19px 0     0 5px, 38px 0     0 5px, 57px 0     0 5px,
    19px 19px  0 0px, 38px 19px  0 0px, 57px 19px  0 0px;
  transform: translateX(-38px);
  animation: l26 2s infinite linear;
}
@keyframes l26 {
  12.5% {box-shadow:
    19px -19px 0 0px, 38px -19px 0 0px, 57px -19px 0 5px,
    19px 0     0 5px, 38px 0     0 0px, 57px 0     0 5px,
    19px 19px  0 0px, 38px 19px  0 0px, 57px 19px  0 0px}
  25%   {box-shadow:
    19px -19px 0 5px, 38px -19px 0 0px, 57px -19px 0 5px,
    19px 0     0 0px, 38px 0     0 0px, 57px 0     0 0px,
    19px 19px  0 0px, 38px 19px  0 5px, 57px 19px  0 0px}
  50%   {box-shadow:
    19px -19px 0 5px, 38px -19px 0 5px, 57px -19px 0 0px,
    19px 0     0 0px, 38px 0     0 0px, 57px 0     0 0px,
    19px 19px  0 0px, 38px 19px  0 0px, 57px 19px  0 5px}
  62.5% {box-shadow:
    19px -19px 0 0px, 38px -19px 0 0px, 57px -19px 0 0px,
    19px 0     0 5px, 38px 0     0 0px, 57px 0     0 0px,
    19px 19px  0 0px, 38px 19px  0 5px, 57px 19px  0 5px}
  75%   {box-shadow:
    19px -19px 0 0px, 38px -19px 0 5px, 57px -19px 0 0px,
    19px 0     0 0px, 38px 0     0 0px, 57px 0     0 5px,
    19px 19px  0 0px, 38px 19px  0 0px, 57px 19px  0 5px}
  87.5% {box-shadow:
    19px -19px 0 0px, 38px -19px 0 5px, 57px -19px 0 0px,
    19px 0     0 0px, 38px 0     0 5px, 57px 0     0 0px,
    19px 19px  0 5px, 38px 19px  0 0px, 57px 19px  0 0px}
}`,`
.loader27 {
  height: 15px;
  aspect-ratio: 4;
  --_g: no-repeat radial-gradient(farthest-side,#000 94%,#0000);
  background:
    var(--_g) left,
    var(--_g) right;
  background-size: 25% 100%;
  display: grid;
}
.loader27:before,
.loader27:after {
  content: "";
  grid-area: 1/1;
  margin: auto;
  height: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #000;
  clip-path: inset(0 0 49%);
  transform-origin: -100% 50%;
  animation: l27 .5s infinite alternate;
}
.loader27:after {
  --s:-1;
  transform-origin: 200% 50%;
}
@keyframes l27 {
  0%,40% {transform:scaleY(var(--s,1)) rotate(0)}
  100%   {transform:scaleY(var(--s,1)) rotate(calc(var(--s,1)*-90deg))}
}`,`
.loader28 {
  width: 12px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #000;
  clip-path: inset(-220%);
  animation: l28 2s infinite linear;
}
@keyframes l28 {
  0%  {box-shadow:0 0 0 0   , 40px 0,-40px 0,0 40px,0 -40px}
  10% {box-shadow:0 0 0 0   , 12px 0,-40px 0,0 40px,0 -40px}
  20% {box-shadow:0 0 0 4px , 0px  0,-40px 0,0 40px,0 -40px}
  30% {box-shadow:0 0 0 4px , 0px  0,-12px 0,0 40px,0 -40px}
  40% {box-shadow:0 0 0 8px , 0px  0,  0px 0,0 40px,0 -40px}
  50% {box-shadow:0 0 0 8px , 0px  0,  0px 0,0 12px,0 -40px}
  60% {box-shadow:0 0 0 12px, 0px  0,  0px 0,0  0px,0 -40px}
  70% {box-shadow:0 0 0 12px, 0px  0,  0px 0,0  0px,0 -12px}
  80% {box-shadow:0 0 0 16px, 0px  0,  0px 0,0  0px,0  0px }
  90%,
  100%{box-shadow:0 0 0 0   , 40px 0,-40px 0,0 40px,0 -40px}
}`,`
.loader29 {
  --s: 15px;
  width: calc(var(--s)*2.33);
  aspect-ratio: 1;
  display: flex;
  justify-content: space-between;
  animation: l29-0 1s infinite;
}
.loader29::before,
.loader29::after {
  content: "";
  width: var(--s);
  --_g: no-repeat radial-gradient(farthest-side,#000 94%,#0000);
  background:
    var(--_g) top,
    var(--_g) bottom;
  background-size: 100% var(--s);
  transform-origin: 50% calc(100% - var(--s)/2);
  animation: inherit;
  animation-name: l29-1;
}
.loader29::after {
  --_s:-1;
}
@keyframes l29-0 {
    100% {transform:translateY(calc(var(--s) - 100%))}
}
@keyframes l29-1 {
    100% {transform:rotate(calc(var(--_s,1)*-180deg))}
}`,`
.loader30 {
  --s: 15px;
  width: calc(var(--s)*2.33);
  aspect-ratio: 1;
  display: flex;
  justify-content: space-between;
}
.loader30::before,
.loader30::after {
  content: "";
  width: var(--s);
  --_g: no-repeat radial-gradient(farthest-side,#000 94%,#0000);
  background:
    var(--_g) top,
    var(--_g) bottom;
  background-size: 100% var(--s);
  transform-origin: 50% calc(100% - var(--s)/2);
  animation: l30 1s infinite;
}
.loader30::after {
  transform-origin: 50% calc(var(--s)/2);
}
@keyframes l30 {
   70%,100% {transform:rotate(-270deg)}
}`,`
.loader31 {
  height: 15px;
  aspect-ratio: 4;
  display: grid;
  animation: l31-0 1s infinite;
}
.loader31:before,
.loader31:after {
  content: "";
  grid-area: 1/1;
  --_g: no-repeat radial-gradient(farthest-side,#000 94%,#0000);
  background:
    var(--_g) left,
    var(--_g) right;
  background-size: 25% 100%;
}
.loader31:after {
  transform: rotate(0) translate(37.5%) rotate(0);
  animation: inherit;
  animation-name: l31-1;
}
@keyframes l31-0 {
  100% {transform:translate(37.5%)}
}
@keyframes l31-1 {
  100% {transform:rotate(-.5turn) translate(37.5%) rotate(.5turn)}
}`,`
.loader32 {
  height: 15px;
  aspect-ratio: 5;
  display: grid;
  --_g: no-repeat radial-gradient(farthest-side,#000 94%,#0000);
}
.loader32:before,
.loader32:after {
  content: "";
  grid-area: 1/1;
  background:
    var(--_g) left,
    var(--_g) right;
  background-size: 20% 100%;
  animation: l32 1s infinite;
}
.loader32:after {
  background:
    var(--_g) calc(1*100%/3),
    var(--_g) calc(2*100%/3);
  background-size: 20% 100%;
  animation-direction: reverse;
}
@keyframes l32 {
  80%,100% {transform:rotate(.5turn)}
}`,`
.loader33 {
  height: 15px;
  aspect-ratio: 5;
  display: flex;
  justify-content: space-between;
}
.loader33:before,
.loader33:after {
  content: "";
  width: calc(140%/3);
  --_g: no-repeat radial-gradient(farthest-side,#000 94%,#0000);
  background:
    var(--_g) left,
    var(--_g) right;
  background-size: calc(300%/7) 100%;
  transform-origin: calc(300%/14) 50%;
  transform: translate(0) rotate(0);
  animation: l33 1s infinite linear;
}
.loader33:after {
  --s:-1;
  transform-origin: calc(100% - calc(300%/14)) 50%;
}
@keyframes l33 {
  100% {transform: translate(calc(var(--s,1)*(100% - calc(300%/7)))) rotate(calc(var(--s,1)*.5turn))}
}`,`
.loader34 {
  height: 15px;
  aspect-ratio: 4;
  display: grid;
}
.loader34:before,
.loader34:after {
  content: "";
  grid-area: 1/1;
  --_g: no-repeat radial-gradient(farthest-side,#000 94%,#0000);
  background:
    var(--_g) left,
    var(--_g) right;
  background-size: 25% 100%;
  animation: l34 1s infinite;
  transform: translate(var(--d,0)) rotate(0);
}
.loader34:after {
  --d: 37.5%;
  animation-delay: .5s;
}
@keyframes l34 {
  50%,100% {transform: translate(var(--d,0)) rotate(.5turn)}
}`,`
.loader35 {
  height: 15px;
  aspect-ratio: 5;
  display: grid;
}
.loader35:before,
.loader35:after {
  content: '';
  grid-area: 1/1;
  height: inherit;
  --_g: no-repeat radial-gradient(farthest-side, #000 94%, #0000);
  background:
    var(--_g) left,
    var(--_g) right;
  background-size: 15px 100%;
  background-repeat: no-repeat;
  animation: l35 1s infinite linear;
}
.loader35:after {
  margin-left: auto;
  --s: -1;
}
@keyframes l35 {
  0% {
    transform: translateY(calc(var(--s, 1) * 0px));
    aspect-ratio: 2.3;
  }
  33% {
    transform: translateY(calc(var(--s, 1) * 8px));
    aspect-ratio: 2.3;
  }
  66% {
    transform: translateY(calc(var(--s, 1) * 8px));
    aspect-ratio: 3.7;
  }
  100% {
    transform: translateY(calc(var(--s, 1) * 0px));
    aspect-ratio: 3.7;
  }
}`,`
.loader36 {
  height: 15px;
  aspect-ratio: 5;
  display: grid;
  animation: l36-0 2s infinite linear;
}
.loader36:before,
.loader36:after {
  content: '';
  grid-area: 1/1;
  height: inherit;
  --_g: no-repeat radial-gradient(farthest-side, #000 94%, #0000);
  background:
    var(--_g) left,
    var(--_g) right;
  background-size: 15px 100%;
  background-repeat: no-repeat;
  animation: l36-1 1s infinite linear;
}
.loader36:after {
  margin-left: auto;
  --s: -1;
}
@keyframes l36-0 {
  0%,
  49.99% {
    transform: scaleY(1);
  }
  50%,
  100% {
    transform: scaleY(-1);
  }
}
@keyframes l36-1 {
  0% {
    transform: translate(0, calc(var(--s, 1) * 0px));
    aspect-ratio: 2.3;
  }
  33% {
    transform: translate(0, calc(var(--s, 1) * 8px));
    aspect-ratio: 2.3;
  }
  66% {
    transform: translate(calc(var(--s, 1) * 19px), calc(var(--s, 1) * 8px));
    aspect-ratio: 3.7;
  }
  100% {
    transform: translate(calc(var(--s, 1) * 19px), calc(var(--s, 1) * 0px));
    aspect-ratio: 3.7;
  }
}`,`
.loader37 {
  color: #000;
  width: 6px;
  aspect-ratio: 1;
  border-radius: 50%;
  animation:
    l37-1 0.75s infinite linear alternate,
    l37-2 1.5s infinite linear;
}
@keyframes l37-1 {
  0%,
  20% {
    box-shadow:
      30px 0 0 3px,
      10px 0 0 3px,
      -10px 0 0 3px,
      -30px 0 0 3px;
  }
  60%,
  100% {
    box-shadow:
      12px 0 0 3px,
      14px 0 0 6px,
      -14px 0 0 6px,
      -12px 0 0 3px;
  }
}

@keyframes l37-2 {
  0%,
  25% {
    transform: rotate(0);
  }
  50%,
  100% {
    transform: rotate(0.5turn);
  }
}`,`
.loader38{
  width: 35px;
  aspect-ratio: 1;
  --_g: no-repeat radial-gradient(farthest-side, #000 94%, #0000);
  background:
    var(--_g) 0 0,
    var(--_g) 100% 0,
    var(--_g) 100% 100%,
    var(--_g) 0 100%;
  background-size: 40% 40%;
  animation: l38 0.5s infinite;
}
@keyframes l38 {
  100% {
    background-position:
      100% 0,
      100% 100%,
      0 100%,
      0 0;
  }
}`,`
.loader39 {
  height: 15px;
  aspect-ratio: 5;
  display: grid;
  animation: l39-0 1s infinite linear;
}
.loader39:before,
.loader39:after {
  content: '';
  width: calc(140% / 3);
  grid-area: 1/1;
  --_g: no-repeat radial-gradient(farthest-side, #000 94%, #0000);
  background:
    var(--_g) left,
    var(--_g) right;
  background-size: calc(300% / 7) 100%;
  animation: l39-1 1s infinite linear;
}
.loader39:after {
  margin-left: auto;
  --s: -1;
}
@keyframes l39-0 {
  0%,
  30% {
    transform: rotate(0);
  }
  50%,
  100% {
    transform: rotate(0.5turn);
  }
}
@keyframes l39-1 {
  30%,
  70% {
    transform: translate(calc(var(--s, 1) * 400% / 14));
  }
}`,`
.loader40 {
  height: 15px;
  aspect-ratio: 5;
  --_g: no-repeat radial-gradient(farthest-side, #000 94%, #0000);
  background: var(--_g), var(--_g), var(--_g), var(--_g);
  background-size: 20% 100%;
  animation:
    l40-1 0.75s infinite alternate,
    l40-2 1.5s infinite alternate;
}
@keyframes l40-1 {
  0%,
  10% {
    background-position:
      0 0,
      0 0,
      0 0,
      0 0;
  }
  33% {
    background-position:
      0 0,
      calc(100% / 3) 0,
      calc(100% / 3) 0,
      calc(100% / 3) 0;
  }
  66% {
    background-position:
      0 0,
      calc(100% / 3) 0,
      calc(2 * 100% / 3) 0,
      calc(2 * 100% / 3) 0;
  }
  90%,
  100% {
    background-position:
      0 0,
      calc(100% / 3) 0,
      calc(2 * 100% / 3) 0,
      100% 0;
  }
}
@keyframes l40-2 {
  0%,
  49.99% {
    transform: scale(1);
  }
  50%,
  100% {
    transform: scale(-1);
  }
}`,`
.loader41 {
  height: 15px;
  aspect-ratio: 5;
  display: flex;
  justify-content: space-between;
  --_g: no-repeat radial-gradient(farthest-side, #000 95%, #0000);
  background:
    var(--_g) calc(1 * 100% / 3) 0,
    var(--_g) calc(2 * 100% / 3) 0;
  background-size: 20% 100%;
}
.loader41:before,
.loader41:after {
  content: '';
  height: inherit;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #000;
  animation: l41 1s infinite;
}
.loader41:after {
  --s: -1, -1;
}
@keyframes l41 {
  0% {
    transform: scale(var(--s, 1)) translate(0, 0);
  }
  33% {
    transform: scale(var(--s, 1)) translate(0, 130%);
  }
  66% {
    transform: scale(var(--s, 1)) translate(400%, 130%);
  }
  100% {
    transform: scale(var(--s, 1)) translate(400%, 0);
  }
}`,`
.loader42 {
  height: 15px;
  aspect-ratio: 5;
  display: flex;
  justify-content: space-between;
  --_g: no-repeat radial-gradient(farthest-side, #000 95%, #0000);
  background: var(--_g), var(--_g);
  background-size: 20% 100%;
  animation: l42-0 1s infinite;
}
.loader42:before,
.loader42:after {
  content: '';
  height: inherit;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #000;
  animation: l42-1 1s infinite;
}
.loader42:after {
  --s: -1, -1;
}
@keyframes l42-0 {
  0%,
  60% {
    background-position:
      calc(1 * 100% / 3) 0,
      calc(2 * 100% / 3) 0;
  }
  100% {
    background-position:
      calc(0 * 100% / 3) 0,
      calc(3 * 100% / 3) 0;
  }
}
@keyframes l42-1 {
  0% {
    transform: scale(var(--s, 1)) translate(0, 0);
  }
  33% {
    transform: scale(var(--s, 1)) translate(0, 130%);
  }
  66% {
    transform: scale(var(--s, 1)) translate(calc(400% / 3), 130%);
  }
  100% {
    transform: scale(var(--s, 1)) translate(calc(400% / 3), 0);
  }
}`,`
.loader43 {
  height: 30px;
  aspect-ratio: 2.5;
  --_g: no-repeat radial-gradient(farthest-side, #000 90%, #0000);
  background: var(--_g), var(--_g), var(--_g), var(--_g);
  background-size: 20% 50%;
  animation: l43 1s infinite linear;
}
@keyframes l43 {
  0% {
    background-position:
      calc(0 * 100% / 3) 50%,
      calc(1 * 100% / 3) 50%,
      calc(2 * 100% / 3) 50%,
      calc(3 * 100% / 3) 50%;
  }
  16.67% {
    background-position:
      calc(0 * 100% / 3) 0,
      calc(1 * 100% / 3) 50%,
      calc(2 * 100% / 3) 50%,
      calc(3 * 100% / 3) 50%;
  }
  33.33% {
    background-position:
      calc(0 * 100% / 3) 100%,
      calc(1 * 100% / 3) 0,
      calc(2 * 100% / 3) 50%,
      calc(3 * 100% / 3) 50%;
  }
  50% {
    background-position:
      calc(0 * 100% / 3) 50%,
      calc(1 * 100% / 3) 100%,
      calc(2 * 100% / 3) 0,
      calc(3 * 100% / 3) 50%;
  }
  66.67% {
    background-position:
      calc(0 * 100% / 3) 50%,
      calc(1 * 100% / 3) 50%,
      calc(2 * 100% / 3) 100%,
      calc(3 * 100% / 3) 0;
  }
  83.33% {
    background-position:
      calc(0 * 100% / 3) 50%,
      calc(1 * 100% / 3) 50%,
      calc(2 * 100% / 3) 50%,
      calc(3 * 100% / 3) 100%;
  }
  100% {
    background-position:
      calc(0 * 100% / 3) 50%,
      calc(1 * 100% / 3) 50%,
      calc(2 * 100% / 3) 50%,
      calc(3 * 100% / 3) 50%;
  }
}`,`
.loader44 {
  height: 30px;
  aspect-ratio: 2.5;
  --_g: no-repeat radial-gradient(farthest-side, #000 90%, #0000);
  background: var(--_g), var(--_g), var(--_g), var(--_g);
  background-size: 20% 50%;
  animation: l44 1s infinite linear alternate;
}
@keyframes l44 {
  0%,
  5% {
    background-position:
      calc(0 * 100% / 3) 50%,
      calc(1 * 100% / 3) 50%,
      calc(2 * 100% / 3) 50%,
      calc(3 * 100% / 3) 50%;
  }
  12.5% {
    background-position:
      calc(0 * 100% / 3) 0,
      calc(1 * 100% / 3) 50%,
      calc(2 * 100% / 3) 50%,
      calc(3 * 100% / 3) 50%;
  }
  25% {
    background-position:
      calc(0 * 100% / 3) 0,
      calc(1 * 100% / 3) 0,
      calc(2 * 100% / 3) 50%,
      calc(3 * 100% / 3) 50%;
  }
  37.5% {
    background-position:
      calc(0 * 100% / 3) 100%,
      calc(1 * 100% / 3) 0,
      calc(2 * 100% / 3) 0,
      calc(3 * 100% / 3) 50%;
  }
  50% {
    background-position:
      calc(0 * 100% / 3) 100%,
      calc(1 * 100% / 3) 100%,
      calc(2 * 100% / 3) 0,
      calc(3 * 100% / 3) 0;
  }
  62.5% {
    background-position:
      calc(0 * 100% / 3) 50%,
      calc(1 * 100% / 3) 100%,
      calc(2 * 100% / 3) 100%,
      calc(3 * 100% / 3) 0;
  }
  75% {
    background-position:
      calc(0 * 100% / 3) 50%,
      calc(1 * 100% / 3) 50%,
      calc(2 * 100% / 3) 100%,
      calc(3 * 100% / 3) 100%;
  }
  87.5% {
    background-position:
      calc(0 * 100% / 3) 50%,
      calc(1 * 100% / 3) 50%,
      calc(2 * 100% / 3) 50%,
      calc(3 * 100% / 3) 100%;
  }
  95%,
  100% {
    background-position:
      calc(0 * 100% / 3) 50%,
      calc(1 * 100% / 3) 50%,
      calc(2 * 100% / 3) 50%,
      calc(3 * 100% / 3) 50%;
  }
}`,`
.loader45 {
  --s: 28px;
  height: var(--s);
  aspect-ratio: 2.5;
  --_g: #000 90%, #0000;
  --_g0: no-repeat radial-gradient(farthest-side, var(--_g));
  --_g1: no-repeat radial-gradient(farthest-side at top, var(--_g));
  --_g2: no-repeat radial-gradient(farthest-side at bottom, var(--_g));
  background: var(--_g0), var(--_g1), var(--_g2), var(--_g0), var(--_g1), var(--_g2);
  background-size:
    20% 50%,
    20% 25%,
    20% 25%;
  animation: l45 1s infinite;
}
@keyframes l45 {
  0% {
    background-position:
      calc(0 * 100% / 3) 50%,
      calc(1 * 100% / 3) calc(50% + calc(var(--s) / 8)),
      calc(1 * 100% / 3) calc(50% - calc(var(--s) / 8)),
      calc(3 * 100% / 3) 50%,
      calc(2 * 100% / 3) calc(50% + calc(var(--s) / 8)),
      calc(2 * 100% / 3) calc(50% - calc(var(--s) / 8));
  }
  33% {
    background-position:
      calc(0 * 100% / 3) 50%,
      calc(1 * 100% / 3) 100%,
      calc(1 * 100% / 3) 0,
      calc(3 * 100% / 3) 50%,
      calc(2 * 100% / 3) 100%,
      calc(2 * 100% / 3) 0;
  }
  66% {
    background-position:
      calc(1 * 100% / 3) 50%,
      calc(0 * 100% / 3) 100%,
      calc(0 * 100% / 3) 0,
      calc(2 * 100% / 3) 50%,
      calc(3 * 100% / 3) 100%,
      calc(3 * 100% / 3) 0;
  }
  90%,
  100% {
    background-position:
      calc(1 * 100% / 3) 50%,
      calc(0 * 100% / 3) calc(50% + calc(var(--s) / 8)),
      calc(0 * 100% / 3) calc(50% - calc(var(--s) / 8)),
      calc(2 * 100% / 3) 50%,
      calc(3 * 100% / 3) calc(50% + calc(var(--s) / 8)),
      calc(3 * 100% / 3) calc(50% - calc(var(--s) / 8));
  }
}`,`
.loader46 {
  width: 32px;
  aspect-ratio: 1;
  --_g: no-repeat radial-gradient(farthest-side, #000 90%, #0000);
  background: var(--_g), var(--_g), var(--_g), var(--_g);
  background-size: 40% 40%;
  animation: l46 1s infinite;
}
@keyframes l46 {
  0% {
    background-position:
      0 0,
      100% 0,
      100% 100%,
      0 100%;
  }
  40%,
  50% {
    background-position:
      100% 100%,
      100% 0,
      0 0,
      0 100%;
  }
  90%,
  100% {
    background-position:
      100% 100%,
      0 100%,
      0 0,
      100% 0;
  }
}`,`
.loader47 {
  height: 15px;
  aspect-ratio: 5;
  background: radial-gradient(closest-side at 37.5% 50%, #000 94%, #0000) 0 / calc(80% / 3) 100%;
  animation: l47 0.75s infinite;
}
@keyframes l47 {
  100% {
    background-position: 36.36%;
  }
}`,`
.loader48 {
  height: 15px;
  aspect-ratio: 5;
  mask: linear-gradient(90deg, transparent, black 20% 80%, transparent);
  -webkit-mask: linear-gradient(90deg, #0000, #000 20% 80%, #0000);
  background: radial-gradient(closest-side at 37.5% 50%, #000 94%, #0000) 0 / calc(80% / 3) 100%;
  animation: l48 0.75s infinite linear;
}
@keyframes l48 {
  100% {
    background-position: 36.36%;
  }
}`,`
.loader49 {
  height: 15px;
  aspect-ratio: 4;
  --_g: no-repeat radial-gradient(farthest-side, #000 90%, #0000);
  background:
    var(--_g) left,
    var(--_g) right;
  background-size: 25% 100%;
  display: grid;
}
.loader49:before,
.loader49:after {
  content: '';
  height: inherit;
  aspect-ratio: 1;
  grid-area: 1/1;
  margin: auto;
  border-radius: 50%;
  transform-origin: -100% 50%;
  background: #000;
  animation: l49 1s infinite linear;
}
.loader49:after {
  transform-origin: 200% 50%;
  --s: -1;
  animation-delay: -0.5s;
}

@keyframes l49 {
  58%,
  100% {
    transform: rotate(calc(var(--s, 1) * 1turn));
  }
}`,`
.loader50 {
  height: 15px;
  aspect-ratio: 4;
  --_g: no-repeat radial-gradient(farthest-side,#000 90%,#0000);
  background:
    var(--_g) left,
    var(--_g) right;
  background-size: 25% 100%;
  display: flex;
}
.loader50:before{
  content: "";
  flex: 1;
  background: inherit;
  animation: l50 2s infinite;
}
@keyframes l50 {
  0%    {transform: translate( 37.5%) rotate(0)     }
  16.67%{transform: translate( 37.5%) rotate(90deg) }
  33.33%{transform: translate(-37.5%) rotate(90deg) }
  50%   {transform: translate(-37.5%) rotate(180deg)}
  66.67%{transform: translate(-37.5%) rotate(270deg)}
  83.33%{transform: translate( 37.5%) rotate(270deg)}
  100%  {transform: translate( 37.5%) rotate(360deg)}
}
`],
};
