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
  ],
  dots: [
    `
    .loader1 {
  width: 60px;
  aspect-ratio: 4;
  background: radial-gradient(circle closest-side,#000 90%,#0000) 0/calc(100%/3) 100% space;
  clip-path: inset(0 100% 0 0);
  animation: l1 1s steps(4) infinite;
}
@keyframes l1 {to{clip-path: inset(0 -34% 0 0)}}`,
    `
.loader2 {
  width: 60px;
  aspect-ratio: 4;
  background: radial-gradient(circle closest-side,#000 90%,#0000) 0/calc(100%/3) 100% no-repeat;
  animation: l2 1s steps(3) infinite;
}
@keyframes l2 {to{background-position: 150%}}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
}`,
    `
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
`,
  ],
  'dots-vs-bars': [
    `
    .loader1 {
  width: 40px;
  aspect-ratio: 1;
  --c: linear-gradient(#000 0 0);
  --r1: radial-gradient(farthest-side at bottom, #000 93%, #0000);
  --r2: radial-gradient(farthest-side at top, #000 93%, #0000);
  background:
    var(--c), var(--r1), var(--r2), var(--c), var(--r1), var(--r2), var(--c), var(--r1), var(--r2);
  background-repeat: no-repeat;
  animation: l1 1s infinite alternate;
}
@keyframes l1 {
  0%,
  10% {
    background-size:
      8px 0,
      8px 4px,
      8px 4px;
    background-position:
      0 50%,
      0 calc(50% - 2px),
      0 calc(50% + 2px),
      50% 50%,
      50% calc(50% - 2px),
      50% calc(50% + 2px),
      100% 50%,
      100% calc(50% - 2px),
      100% calc(50% + 2px);
  }
  90%,
  100% {
    background-size:
      8px 100%,
      8px 4px,
      8px 4px;
    background-position:
      0 50%,
      0 -2px,
      0 calc(100% + 2px),
      50% 50%,
      50% -2px,
      50% calc(100% + 2px),
      100% 50%,
      100% -2px,
      100% calc(100% + 2px);
  }
}`,
    `
.loader2 {
  width: 40px;
  aspect-ratio: 1;
  --c: linear-gradient(#000 0 0);
  --r1: radial-gradient(farthest-side at bottom, #000 93%, #0000);
  --r2: radial-gradient(farthest-side at top, #000 93%, #0000);
  background:
    var(--c), var(--r1), var(--r2), var(--c), var(--r1), var(--r2), var(--c), var(--r1), var(--r2);
  background-repeat: no-repeat;
  animation: l2 1s infinite alternate;
}
@keyframes l2 {
  0%,
  25% {
    background-size:
      8px 0,
      8px 4px,
      8px 4px,
      8px 0,
      8px 4px,
      8px 4px,
      8px 0,
      8px 4px,
      8px 4px;
    background-position:
      0 50%,
      0 calc(50% - 2px),
      0 calc(50% + 2px),
      50% 50%,
      50% calc(50% - 2px),
      50% calc(50% + 2px),
      100% 50%,
      100% calc(50% - 2px),
      100% calc(50% + 2px);
  }
  50% {
    background-size:
      8px 100%,
      8px 4px,
      8px 4px,
      8px 0,
      8px 4px,
      8px 4px,
      8px 0,
      8px 4px,
      8px 4px;
    background-position:
      0 50%,
      0 calc(0% - 2px),
      0 calc(100% + 2px),
      50% 50%,
      50% calc(50% - 2px),
      50% calc(50% + 2px),
      100% 50%,
      100% calc(50% - 2px),
      100% calc(50% + 2px);
  }
  75% {
    background-size:
      8px 100%,
      8px 4px,
      8px 4px,
      8px 100%,
      8px 4px,
      8px 4px,
      8px 0,
      8px 4px,
      8px 4px;
    background-position:
      0 50%,
      0 calc(0% - 2px),
      0 calc(100% + 2px),
      50% 50%,
      50% calc(0% - 2px),
      50% calc(100% + 2px),
      100% 50%,
      100% calc(50% - 2px),
      100% calc(50% + 2px);
  }
  95%,
  100% {
    background-size:
      8px 100%,
      8px 4px,
      8px 4px,
      8px 100%,
      8px 4px,
      8px 4px,
      8px 100%,
      8px 4px,
      8px 4px;
    background-position:
      0 50%,
      0 calc(0% - 2px),
      0 calc(100% + 2px),
      50% 50%,
      50% calc(0% - 2px),
      50% calc(100% + 2px),
      100% 50%,
      100% calc(0% - 2px),
      100% calc(100% + 2px);
  }
}`,
    `
.loader3 {
  width: 40px;
  height: 26px;
  --c: no-repeat linear-gradient(#000 0 0);
  background:
    var(--c) 0 100%,
    var(--c) 50% 100%,
    var(--c) 100% 100%;
  background-size: 8px calc(100% - 4px);
  position: relative;
}
.loader3:before {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #000;
  left: 0;
  top: 0;
  animation:
    l3-1 1.5s linear infinite alternate,
    l3-2 0.75s cubic-bezier(0, 200, 0.8, 200) infinite;
}
@keyframes l3-1 {
  100% {
    left: calc(100% - 8px);
  }
}
@keyframes l3-2 {
  100% {
    top: -0.1px;
  }
}`,
    `
.loader4 {
  width: 40px;
  height: 20px;
  --c: no-repeat radial-gradient(farthest-side, #000 93%, #0000);
  background:
    var(--c) 0 0,
    var(--c) 50% 0,
    var(--c) 100% 0;
  background-size: 8px 8px;
  position: relative;
  animation: l4-0 1s linear infinite alternate;
}
.loader4:before {
  content: '';
  position: absolute;
  width: 8px;
  height: 12px;
  background: #000;
  left: 0;
  top: 0;
  animation:
    l4-1 1s linear infinite alternate,
    l4-2 0.5s cubic-bezier(0, 200, 0.8, 200) infinite;
}
@keyframes l4-0 {
  0% {
    background-position:
      0 100%,
      50% 0,
      100% 0;
  }
  8%,
  42% {
    background-position:
      0 0,
      50% 0,
      100% 0;
  }
  50% {
    background-position:
      0 0,
      50% 100%,
      100% 0;
  }
  58%,
  92% {
    background-position:
      0 0,
      50% 0,
      100% 0;
  }
  100% {
    background-position:
      0 0,
      50% 0,
      100% 100%;
  }
}
@keyframes l4-1 {
  100% {
    left: calc(100% - 8px);
  }
}
@keyframes l4-2 {
  100% {
    top: -0.1px;
  }
}`,
    `
.loader5 {
  width: 40px;
  height: 30px;
  --c: no-repeat linear-gradient(#000 0 0);
  background:
    var(--c) 0 100%/8px 30px,
    var(--c) 50% 100%/8px 20px,
    var(--c) 100% 100%/8px 10px;
  position: relative;
  clip-path: inset(-100% 0);
}
.loader5:before {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #000;
  left: -16px;
  top: 0;
  animation:
    l5-1 2s linear infinite,
    l5-2 0.5s cubic-bezier(0, 200, 0.8, 200) infinite;
}
@keyframes l5-1 {
  0% {
    left: -16px;
    transform: translateY(-8px);
  }
  100% {
    left: calc(100% + 8px);
    transform: translateY(22px);
  }
}
@keyframes l5-2 {
  100% {
    top: -0.1px;
  }
}`,
    `
.loader6 {
  width: 40px;
  height: 20px;
  --c: no-repeat radial-gradient(farthest-side, #000 93%, #0000);
  background:
    var(--c) 0 0,
    var(--c) 50% 0;
  background-size: 8px 8px;
  position: relative;
  clip-path: inset(-200% -100% 0 0);
  animation: l6-0 1.5s linear infinite;
}
.loader6:before {
  content: '';
  position: absolute;
  width: 8px;
  height: 12px;
  background: #000;
  left: -16px;
  top: 0;
  animation:
    l6-1 1.5s linear infinite,
    l6-2 0.5s cubic-bezier(0, 200, 0.8, 200) infinite;
}
.loader6:after {
  content: '';
  position: absolute;
  inset: 0 0 auto auto;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #000;
  animation: l6-3 1.5s linear infinite;
}
@keyframes l6-0 {
  0%,
  30% {
    background-position:
      0 0,
      50% 0;
  }
  33% {
    background-position:
      0 100%,
      50% 0;
  }
  41%,
  63% {
    background-position:
      0 0,
      50% 0;
  }
  66% {
    background-position:
      0 0,
      50% 100%;
  }
  74%,
  100% {
    background-position:
      0 0,
      50% 0;
  }
}
@keyframes l6-1 {
  90% {
    transform: translateY(0);
  }
  95% {
    transform: translateY(15px);
  }
  100% {
    transform: translateY(15px);
    left: calc(100% - 8px);
  }
}
@keyframes l6-2 {
  100% {
    top: -0.1px;
  }
}
@keyframes l6-3 {
  0%,
  80%,
  100% {
    transform: translate(0);
  }
  90% {
    transform: translate(26px);
  }
}`,
    `
.loader7 {
  width: 40px;
  aspect-ratio: 1;
  --c: no-repeat linear-gradient(#000 0 0);
  background:
    var(--c) 0 0,
    var(--c) 0 100%,
    var(--c) 50% 0,
    var(--c) 50% 100%,
    var(--c) 100% 0,
    var(--c) 100% 100%;
  background-size: 8px 50%;
  animation: l7-0 1s infinite;
  position: relative;
  overflow: hidden;
}
.loader7:before {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #000;
  top: calc(50% - 4px);
  left: -8px;
  animation: inherit;
  animation-name: l7-1;
}

@keyframes l7-0 {
  16.67% {
    background-size:
      8px 30%,
      8px 30%,
      8px 50%,
      8px 50%,
      8px 50%,
      8px 50%;
  }
  33.33% {
    background-size:
      8px 30%,
      8px 30%,
      8px 30%,
      8px 30%,
      8px 50%,
      8px 50%;
  }
  50% {
    background-size:
      8px 30%,
      8px 30%,
      8px 30%,
      8px 30%,
      8px 30%,
      8px 30%;
  }
  66.67% {
    background-size:
      8px 50%,
      8px 50%,
      8px 30%,
      8px 30%,
      8px 30%,
      8px 30%;
  }
  83.33% {
    background-size:
      8px 50%,
      8px 50%,
      8px 50%,
      8px 50%,
      8px 30%,
      8px 30%;
  }
}

@keyframes l7-1 {
  20% {
    left: 0px;
  }
  40% {
    left: calc(50% - 4px);
  }
  60% {
    left: calc(100% - 8px);
  }
  80%,
  100% {
    left: 100%;
  }
}`,
    `
.loader8 {
  width: 40px;
  aspect-ratio: 1;
  --c: no-repeat linear-gradient(#000 0 0);
  background:
    var(--c) 0 0,
    var(--c) 0 100%,
    var(--c) 50% 0,
    var(--c) 50% 100%,
    var(--c) 100% 0,
    var(--c) 100% 100%;
  background-size: 8px 50%;
  animation: l8-0 2s infinite;
  position: relative;
  overflow: hidden;
}
.loader8:before {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #000;
  top: calc(50% - 4px);
  left: -8px;
  animation: inherit;
  animation-name: l8-1;
}
@keyframes l8-0 {
  16.67% {
    background-size:
      8px 30%,
      8px 30%,
      8px 50%,
      8px 50%,
      8px 50%,
      8px 50%;
  }
  33.33% {
    background-size:
      8px 30%,
      8px 30%,
      8px 30%,
      8px 30%,
      8px 50%,
      8px 50%;
  }
  50% {
    background-size:
      8px 30%,
      8px 30%,
      8px 30%,
      8px 30%,
      8px 50%,
      8px 50%;
  }
  66.67% {
    background-size:
      8px 50%,
      8px 50%,
      8px 30%,
      8px 30%,
      8px 50%,
      8px 50%;
  }
  83.33% {
    background-size:
      8px 50%,
      8px 50%,
      8px 50%,
      8px 50%,
      8px 50%,
      8px 50%;
  }
}
@keyframes l8-1 {
  20% {
    left: 0px;
  }
  40%,
  100% {
    left: calc(50% - 4px);
  }
}`,
    `
.loader9 {
  width: 40px;
  height: 40px;
  --c: no-repeat linear-gradient(#000 0 0);
  background:
    var(--c) 0 0,
    var(--c) 0 100%,
    var(--c) 50% 0,
    var(--c) 50% 100%,
    var(--c) 100% 0,
    var(--c) 100% 100%;
  background-size: 8px 50%;
  animation: l9-0 2s infinite;
  position: relative;
  overflow: hidden;
}
.loader9:before {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #000;
  top: calc(50% - 4px);
  left: -8px;
  animation: inherit;
  animation-name: l9-1;
}
@keyframes l9-0 {
  16.67% {
    background-size:
      8px 30%,
      8px 30%,
      8px 50%,
      8px 50%,
      8px 50%,
      8px 50%;
  }
  33.33% {
    background-size:
      8px 30%,
      8px 30%,
      8px 30%,
      8px 30%,
      8px 50%,
      8px 50%;
  }
  50% {
    background-size:
      8px 30%,
      8px 30%,
      8px 30%,
      8px 30%,
      8px 50%,
      8px 50%;
  }
  66.67% {
    background-size:
      8px 50%,
      8px 50%,
      8px 30%,
      8px 30%,
      8px 50%,
      8px 50%;
  }
  83.33% {
    background-size:
      8px 50%,
      8px 50%,
      8px 50%,
      8px 50%,
      8px 50%,
      8px 50%;
  }
}
@keyframes l9-1 {
  20% {
    left: 0px;
  }
  40%,
  70% {
    left: calc(50% - 4px);
  }
  80%,
  85% {
    left: 8px;
    top: calc(50% - 4px);
  }
  100% {
    left: 8px;
    top: -8px;
  }
}`,
    `
.loader10 {
  width: 70px;
  height: 30px;
  overflow: hidden;
  position: relative;
}
.loader10:before {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  inset: 0;
  margin: auto;
  background: #000;
  transform-origin: bottom;
  animation: l10-1 3s infinite;
}
.loader10:after {
  content: '';
  position: absolute;
  width: 8px;
  height: 14px;
  bottom: calc(50% - 4px);
  background: #000;
  animation: l10-2 3s infinite;
}
@keyframes l10-1 {
  0%,
  10% {
    transform: translate(0) scale(1);
    box-shadow:
      60px 0,
      60px 0;
  }
  20%,
  40% {
    transform: translate(20px) scale(1);
    box-shadow:
      60px 0,
      60px 0;
  }
  48% {
    transform: translate(20px) scale(1);
    box-shadow:
      8px 0,
      60px 0;
  }
  50% {
    transform: translate(20px) scale(1.5);
    box-shadow:
      0 0,
      60px 0;
  }
  58% {
    transform: translate(20px) scale(1.5);
    box-shadow:
      0 0,
      8px 0;
  }
  60%,
  70% {
    transform: translate(20px) scale(2);
    box-shadow:
      0 0,
      0 0;
  }

  85% {
    transform: translate(-50px) scale(2);
    box-shadow:
      0 0,
      0 0;
  }
  87% {
    transform: translate(-50px) scale(1);
    box-shadow:
      0 0,
      0 0;
  }
  100% {
    transform: translate(0) scale(1);
    box-shadow:
      0 0,
      0 0;
  }
}
@keyframes l10-2 {
  20%,
  70% {
    left: 50%;
  }
  0%,
  10%,
  85%,
  100% {
    left: -25px;
  }
}`,
    `
.loader11 {
  width: 40px;
  aspect-ratio: 1;
  --c: no-repeat linear-gradient(#000 0 0);
  background: var(--c), var(--c), var(--c);
  background-size: 8px calc(50% + 8px);
  mask: radial-gradient(circle closest-side, transparent 92%, black) 0 / 8px 100%;
  -webkit-mask: radial-gradient(circle closest-side, #0000 92%, #000) 0/8px 100%;
  animation: l11 0.75s infinite alternate linear;
}
@keyframes l11 {
  0%,
  10% {
    background-position:
      0 100%,
      50% 100%,
      100% 100%;
  }
  25% {
    background-position:
      0 50%,
      50% 100%,
      100% 100%;
  }
  50% {
    background-position:
      0 0,
      50% 50%,
      100% 100%;
  }
  75% {
    background-position:
      0 0,
      50% 0,
      100% 50%;
  }
  90%,
  100% {
    background-position:
      0 0,
      50% 0,
      100% 0;
  }
}`,
    `
.loader12 {
  width: 40px;
  aspect-ratio: 1;
  --c: no-repeat linear-gradient(#000 0 0);
  --m: no-repeat radial-gradient(circle closest-side, #0000 92%, #000);
  background:
    var(--c) 0 50%,
    var(--c) 50% 50%,
    var(--c) 100% 50%;
  background-size: 8px calc(50% + 8px);
  mask: var(--m), var(--m), var(--m);
  mask-size: 8px 150%;
  -webkit-mask: var(--m), var(--m), var(--m);
  -webkit-mask-size: 8px 150%;
  animation: l12 1s infinite alternate;
}
@keyframes l12 {
  0%,
  100% {
    -webkit-mask-position:
      0 50%,
      50% 50%,
      100% 50%;
  }
  20% {
    -webkit-mask-position:
      0 100%,
      50% 50%,
      100% 50%;
  }
  40% {
    -webkit-mask-position:
      0 0,
      50% 100%,
      100% 50%;
  }
  60% {
    -webkit-mask-position:
      0 50%,
      50% 0,
      100% 100%;
  }
  80% {
    -webkit-mask-position:
      0 50%,
      50% 50%,
      100% 0;
  }
}`,
    `
.loader13 {
  width: 40px;
  aspect-ratio: 1;
  --c: linear-gradient(#000 0 0);
  --m: radial-gradient(farthest-side, #000 92%, #0000);
  background: var(--c), var(--m), var(--c), var(--m), var(--c), var(--m);
  background-size:
    8px 12px,
    8px 8px;
  background-repeat: no-repeat;
  animation: l13 1s infinite alternate;
}
@keyframes l13 {
  0%,
  100% {
    background-position:
      0 0,
      0 100%,
      50% 0,
      50% 100%,
      100% 0,
      100% 100%;
  }
  20% {
    background-position:
      0 calc(50% - 6px),
      0 calc(50% + 4px),
      50% 0,
      50% 100%,
      100% 0,
      100% 100%;
  }
  40% {
    background-position:
      0 calc(50% - 6px),
      0 calc(50% + 4px),
      50% calc(50% - 6px),
      50% calc(50% + 4px),
      100% 0,
      100% 100%;
  }
  60% {
    background-position:
      0 0,
      0 100%,
      50% calc(50% - 6px),
      50% calc(50% + 4px),
      100% calc(50% - 6px),
      100% calc(50% + 4px);
  }
  80% {
    background-position:
      0 0,
      0 100%,
      50% 0,
      50% 100%,
      100% calc(50% - 6px),
      100% calc(50% + 4px);
  }
}`,
    `
.loader14 {
  width: 40px;
  aspect-ratio: 1;
  --c: linear-gradient(#000 0 0);
  --m: radial-gradient(farthest-side, #000 92%, #0000);
  background: var(--c), var(--m), var(--c), var(--m), var(--c), var(--m);
  background-size:
    8px 15px,
    8px 8px;
  background-repeat: no-repeat;
  animation: l14 1s infinite alternate;
}
@keyframes l14 {
  0%,
  10% {
    background-position:
      0 0,
      0 100%,
      50% 0,
      50% 100%,
      100% 0,
      100% 100%;
  }
  33% {
    background-position:
      0 100%,
      0 0,
      50% 0,
      50% 100%,
      100% 0,
      100% 100%;
  }
  66% {
    background-position:
      0 100%,
      0 0,
      50% 100%,
      50% 0,
      100% 0,
      100% 100%;
  }
  90%,
  100% {
    background-position:
      0 100%,
      0 0,
      50% 100%,
      50% 0,
      100% 100%,
      100% 0;
  }
}`,
    `
.loader15 {
  width: 40px;
  aspect-ratio: 1;
  --c: linear-gradient(#000 0 0);
  --m: radial-gradient(farthest-side, #000 92%, #0000);
  background: var(--c), var(--m), var(--c), var(--m), var(--c), var(--m);
  background-size:
    8px 15px,
    8px 8px;
  background-repeat: no-repeat;
  animation: l15 2s infinite;
}
@keyframes l15 {
  0% {
    background-position:
      0 0,
      0 100%,
      50% 0,
      50% 100%,
      100% 0,
      100% 100%;
  }
  11.11% {
    background-position:
      0 calc(100% - 8px),
      0 100%,
      50% 0,
      50% 100%,
      100% 0,
      100% 100%;
  }
  22.22% {
    background-position:
      0 calc(100% - 8px),
      0 100%,
      50% calc(100% - 8px),
      50% 100%,
      100% 0,
      100% 100%;
  }
  33.33% {
    background-position:
      0 calc(100% - 8px),
      0 100%,
      50% calc(100% - 8px),
      50% 100%,
      100% calc(100% - 8px),
      100% 100%;
  }
  44.44% {
    background-position:
      0 0,
      0 15px,
      50% calc(100% - 8px),
      50% 100%,
      100% calc(100% - 8px),
      100% 100%;
  }
  55.55% {
    background-position:
      0 0,
      0 15px,
      50% 0,
      50% 15px,
      100% calc(100% - 8px),
      100% 100%;
  }
  66.66% {
    background-position:
      0 0,
      0 15px,
      50% 0,
      50% 15px,
      100% 0,
      100% 15px;
  }
  77.77% {
    background-position:
      0 0,
      0 100%,
      50% 0,
      50% 15px,
      100% 0,
      100% 15px;
  }
  88.88% {
    background-position:
      0 0,
      0 100%,
      50% 0,
      50% 100%,
      100% 0,
      100% 15px;
  }
  100% {
    background-position:
      0 0,
      0 100%,
      50% 0,
      50% 100%,
      100% 0,
      100% 100%;
  }
}`,
    `
.loader16 {
  width: 40px;
  aspect-ratio: 1;
  --c: linear-gradient(#000 0 0);
  --m: radial-gradient(farthest-side, #000 92%, #0000);
  background: var(--c), var(--m), var(--c), var(--m), var(--c), var(--m);
  background-size:
    8px 12px,
    8px 8px;
  background-repeat: no-repeat;
  animation: l16 1s infinite linear alternate;
}
@keyframes l16 {
  0%,
  5% {
    background-position:
      0 50%,
      0 0,
      50% 50%,
      50% 0,
      100% 50%,
      100% 0;
  }
  16.67% {
    background-position:
      0 50%,
      0 calc(50% - 10px),
      50% 50%,
      50% 0,
      100% 50%,
      100% 0;
  }
  33.33% {
    background-position:
      0 calc(50% + 10px),
      0 50%,
      50% 50%,
      50% 0,
      100% 50%,
      100% 0;
  }
  50% {
    background-position:
      0 calc(50% + 10px),
      0 50%,
      50% 50%,
      50% calc(50% - 10px),
      100% 50%,
      100% 0;
  }
  66.67% {
    background-position:
      0 calc(50% + 10px),
      0 50%,
      50% calc(50% + 10px),
      50% 50%,
      100% 50%,
      100% 0;
  }
  83.33% {
    background-position:
      0 calc(50% + 10px),
      0 50%,
      50% calc(50% + 10px),
      50% 50%,
      100% 50%,
      100% calc(50% - 10px);
  }
  95%,
  100% {
    background-position:
      0 calc(50% + 10px),
      0 50%,
      50% calc(50% + 10px),
      50% 50%,
      100% calc(50% + 10px),
      100% 50%;
  }
}`,
    `
.loader17 {
  width: 40px;
  aspect-ratio: 1;
  --c: linear-gradient(#000 0 0);
  --m: radial-gradient(farthest-side, #000 92%, #0000);
  background: var(--c), var(--m), var(--c), var(--m), var(--c), var(--m);
  background-size:
    8px 12px,
    8px 8px;
  background-repeat: no-repeat;
  animation: l17 1s infinite linear;
}
@keyframes l17 {
  0%,
  5% {
    background-position:
      0 50%,
      0 0,
      50% 50%,
      50% 0,
      100% 50%,
      100% 0;
  }
  12.5% {
    background-position:
      0 50%,
      0 calc(50% - 10px),
      50% 50%,
      50% 0,
      100% 50%,
      100% 0;
  }
  25% {
    background-position:
      0 calc(50% + 10px),
      0 50%,
      50% 50%,
      50% 0,
      100% 50%,
      100% 0;
  }
  37.5% {
    background-position:
      0 calc(50% + 10px),
      0 50%,
      50% 50%,
      50% calc(50% - 10px),
      100% 50%,
      100% 0;
  }
  50% {
    background-position:
      0 50%,
      0 0,
      50% calc(50% + 10px),
      50% 50%,
      100% 50%,
      100% 0;
  }
  62.5% {
    background-position:
      0 50%,
      0 0,
      50% calc(50% + 10px),
      50% 50%,
      100% 50%,
      100% calc(50% - 10px);
  }
  75% {
    background-position:
      0 50%,
      0 0,
      50% 50%,
      50% 0,
      100% calc(50% + 10px),
      100% 50%;
  }
  87.5% {
    background-position:
      0 50%,
      0 0,
      50% 50%,
      50% 0,
      100% calc(50% + 10px),
      100% 50%;
  }
  95%,
  100% {
    background-position:
      0 50%,
      0 0,
      50% 50%,
      50% 0,
      100% 50%,
      100% 0;
  }
}`,
    `
.loader18 {
  width: 40px;
  aspect-ratio: 1;
  --c: linear-gradient(#000 0 0);
  --m: radial-gradient(farthest-side, #000 92%, #0000);
  background:
    var(--m) center / 12px 12px,
    var(--c) left 50% top -20px/8px 16px,
    var(--c) left 50% bottom -20px/8px 16px,
    var(--c) top 50% left -20px/16px 8px,
    var(--c) top 50% right -20px/16px 8px;
  background-repeat: no-repeat;
  animation:
    l18-1 1.5s infinite,
    l18-2 1.5s infinite;
}
@keyframes l18-1 {
  30%,
  70% {
    background-position:
      center,
      left 50% top calc(50% - 8px),
      left 50% bottom calc(50% - 8px),
      top 50% left calc(50% - 8px),
      top 50% right calc(50% - 8px);
  }
}
@keyframes l18-2 {
  0%,
  40% {
    transform: rotate(0);
  }
  60%,
  100% {
    transform: rotate(90deg);
  }
}`,
    `
.loader19 {
  width: 40px;
  aspect-ratio: 1;
  --c: linear-gradient(#000 0 0);
  --m: radial-gradient(farthest-side, #000 90%, #0000);
  background: var(--c), var(--m), var(--c);
  background-size:
    16px 8px,
    10px 10px;
  background-repeat: no-repeat;
  animation:
    l19-1 0.5s infinite alternate,
    l19-2 4s infinite linear 0.5s;
}
@keyframes l19-1 {
  0%,
  10% {
    background-position:
      calc(50% - 8px) 50%,
      50% 10%,
      calc(50% + 8px) 50%;
  }
  80%,
  100% {
    background-position:
      -20px 50%,
      50% 50%,
      calc(100% + 20px) 50%;
  }
}
@keyframes l19-2 {
  0%,
  24.99% {
    transform: rotate(0);
  }
  25%,
  49.99% {
    transform: rotate(90deg);
  }
  50%,
  74.99% {
    transform: rotate(180deg);
  }
  75%,
  100% {
    transform: rotate(270deg);
  }
}`,
    `
.loader20 {
  width: 40px;
  aspect-ratio: 1;
  --c: linear-gradient(#000 0 0);
  --m: radial-gradient(farthest-side, #000 90%, #0000);
  background: var(--c), var(--m), var(--c);
  background-size:
    16px 8px,
    10px 10px;
  background-repeat: no-repeat;
  animation:
    l20-1 1s infinite linear,
    l20-2 4s infinite linear -0.4s;
}
@keyframes l20-1 {
  0%,
  10% {
    background-position:
      calc(50% - 8px) 50%,
      50% -15px,
      calc(50% + 8px) 50%;
  }
  33% {
    background-position:
      -20px 50%,
      50% 50%,
      calc(100% + 20px) 50%;
  }
  66% {
    background-position:
      -20px 50%,
      50% calc(100% + 15px),
      calc(100% + 20px) 50%;
  }
  80%,
  100% {
    background-position:
      calc(50% - 8px) 50%,
      50% calc(100% + 15px),
      calc(50% + 8px) 50%;
  }
}
@keyframes l20-2 {
  0%,
  24.99% {
    transform: rotate(0);
  }
  25%,
  49.99% {
    transform: rotate(90deg);
  }
  50%,
  74.99% {
    transform: rotate(180deg);
  }
  75%,
  100% {
    transform: rotate(270deg);
  }
}
`,
  ],
  spinner: [
    `
    .loader1 {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid;
  border-color: #000 #0000;
  animation: l1 1s infinite;
}
@keyframes l1 {
  to {
    transform: rotate(0.5turn);
  }
}`,
    `
.loader2 {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid lightblue;
  border-right-color: orange;
  animation: l2 1s infinite linear;
}
@keyframes l2 {
  to {
    transform: rotate(1turn);
  }
}`,
    `
.loader3 {
  width: 50px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #25b09b;
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;
}
@keyframes l3 {
  to {
    transform: rotate(1turn);
  }
}`,
    `
.loader4 {
  width: 50px;
  --b: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 1px;
  background: conic-gradient(#0000 10%, #f03355) content-box;
  mask:
    repeating-conic-gradient(#0000 0deg, #000 1deg 20deg, #0000 21deg 36deg),
    radial-gradient(farthest-side, #0000 calc(100% - var(--b) - 1px), #000 calc(100% - var(--b)));
  -webkit-mask:
    repeating-conic-gradient(#0000 0deg, #000 1deg 20deg, #0000 21deg 36deg),
    radial-gradient(farthest-side, #0000 calc(100% - var(--b) - 1px), #000 calc(100% - var(--b)));
  -webkit-mask-composite: destination-in;
  mask-composite: intersect;
  animation: l4 1s infinite steps(10);
}
@keyframes l4 {
  to {
    transform: rotate(1turn);
  }
}`,
    `
.loader5 {
  width: 50px;
  --b: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #514b82;
  mask:
    repeating-conic-gradient(#0000 0deg, #000 1deg 70deg, #0000 71deg 90deg),
    radial-gradient(farthest-side, #0000 calc(100% - var(--b) - 1px), #000 calc(100% - var(--b)));
  -webkit-mask:
    repeating-conic-gradient(#0000 0deg, #000 1deg 70deg, #0000 71deg 90deg),
    radial-gradient(farthest-side, #0000 calc(100% - var(--b) - 1px), #000 calc(100% - var(--b)));
  -webkit-mask-composite: destination-in;
  mask-composite: intersect;
  animation: l5 1s infinite;
}
@keyframes l5 {
  to {
    transform: rotate(0.5turn);
  }
}`,
    `
.loader6 {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 3px;
  background:
    radial-gradient(farthest-side, #ffa516 95%, #0000) 50% 0/12px 12px no-repeat,
    radial-gradient(farthest-side, #0000 calc(100% - 5px), #ffa516 calc(100% - 4px)) content-box;
  animation: l6 2s infinite;
}
@keyframes l6 {
  to {
    transform: rotate(1turn);
  }
}`,
    `
.loader7 {
  width: 50px;
  aspect-ratio: 1;
  --_c: no-repeat radial-gradient(farthest-side, #25b09b 92%, #0000);
  background:
    var(--_c) top,
    var(--_c) left,
    var(--_c) right,
    var(--_c) bottom;
  background-size: 12px 12px;
  animation: l7 1s infinite;
}
@keyframes l7 {
  to {
    transform: rotate(0.5turn);
  }
}`,
    `
.loader8 {
  width: 50px;
  aspect-ratio: 1;
  color: #f03355;
  --_c: no-repeat radial-gradient(farthest-side, currentColor 92%, #0000);
  background:
    var(--_c) 50% 0 /12px 12px,
    var(--_c) 50% 100%/12px 12px,
    var(--_c) 100% 50%/12px 12px,
    var(--_c) 0 50%/12px 12px,
    var(--_c) 50% 50%/12px 12px,
    conic-gradient(from 90deg at 4px 4px, #0000 90deg, currentColor 0) -4px -4px / calc(50% + 2px)
      calc(50% + 2px);
  animation: l8 1s infinite linear;
}
@keyframes l8 {
  to {
    transform: rotate(0.5turn);
  }
}`,
    `
.loader9 {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    radial-gradient(farthest-side, #f03355 95%, #0000) 50% 1px/12px 12px no-repeat,
    radial-gradient(farthest-side, #0000 calc(100% - 14px), #ccc 0);
  animation: l9 2s infinite linear;
}
@keyframes l9 {
  to {
    transform: rotate(1turn);
  }
}`,
    `
.loader10 {
  width: 50px;
  aspect-ratio: 1;
  color: #854f1d;
  border-radius: 50%;
  display: grid;
  background:
    conic-gradient(from 90deg at 4px 4px, #0000 90deg, currentColor 0) -4px -4px / calc(50% + 2px)
      calc(50% + 2px),
    radial-gradient(
        farthest-side,
        currentColor 6px,
        #0000 7px calc(100% - 6px),
        currentColor calc(100% - 5px)
      )
      no-repeat;
  animation: l10 2s infinite linear;
  position: relative;
}
.loader10:before {
  content: '';
  border-radius: inherit;
  background: inherit;
  transform: rotate(45deg);
}
@keyframes l10 {
  to {
    transform: rotate(0.5turn);
  }
}`,
    `
.loader11 {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 6px;
  background:
    conic-gradient(from 135deg at top, currentColor 90deg, #0000 0) 0 calc(50% - 4px) / 17px 8.5px,
    radial-gradient(
        farthest-side at bottom left,
        #0000 calc(100% - 6px),
        currentColor calc(100% - 5px) 99%,
        #0000
      )
      top right/50% 50% content-box content-box,
    radial-gradient(
        farthest-side at top,
        #0000 calc(100% - 6px),
        currentColor calc(100% - 5px) 99%,
        #0000
      )
      bottom / 100% 50% content-box content-box;
  background-repeat: no-repeat;
  animation: l11 1s infinite linear;
}
@keyframes l11 {
  100% {
    transform: rotate(1turn);
  }
}`,
    `
.loader12 {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
}
.loader12::before,
.loader12::after {
  content: '';
  grid-area: 1/1;
  --c: no-repeat radial-gradient(farthest-side, #25b09b 92%, #0000);
  background:
    var(--c) 50% 0,
    var(--c) 50% 100%,
    var(--c) 100% 50%,
    var(--c) 0 50%;
  background-size: 12px 12px;
  animation: l12 1s infinite;
}
.loader12::before {
  margin: 4px;
  filter: hue-rotate(45deg);
  background-size: 8px 8px;
  animation-timing-function: linear;
}

@keyframes l12 {
  100% {
    transform: rotate(0.5turn);
  }
}`,
    `
.loader13 {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    radial-gradient(farthest-side, #ffa516 94%, #0000) top/8px 8px no-repeat,
    conic-gradient(#0000 30%, #ffa516);
  mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
  animation: l13 1s infinite linear;
}
@keyframes l13 {
  100% {
    transform: rotate(1turn);
  }
}`,
    `
.loader14 {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  animation: l14 4s infinite;
}
.loader14::before,
.loader14::after {
  content: '';
  grid-area: 1/1;
  border: 8px solid;
  border-radius: 50%;
  border-color: red red #0000 #0000;
  mix-blend-mode: darken;
  animation: l14 1s infinite linear;
}
.loader14::after {
  border-color: #0000 #0000 blue blue;
  animation-direction: reverse;
}
@keyframes l14 {
  100% {
    transform: rotate(1turn);
  }
}`,
    `
.loader15 {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  border: 4px solid #0000;
  border-radius: 50%;
  border-right-color: #25b09b;
  animation: l15 1s infinite linear;
}
.loader15::before,
.loader15::after {
  content: '';
  grid-area: 1/1;
  margin: 2px;
  border: inherit;
  border-radius: 50%;
  animation: l15 2s infinite;
}
.loader15::after {
  margin: 8px;
  animation-duration: 3s;
}
@keyframes l15 {
  100% {
    transform: rotate(1turn);
  }
}`,
    `
.loader16 {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  border: 4px solid #0000;
  border-radius: 50%;
  border-color: #ccc #0000;
  animation: l16 1s infinite linear;
}
.loader16::before,
.loader16::after {
  content: '';
  grid-area: 1/1;
  margin: 2px;
  border: inherit;
  border-radius: 50%;
}
.loader16::before {
  border-color: #f03355 #0000;
  animation: inherit;
  animation-duration: 0.5s;
  animation-direction: reverse;
}
.loader16::after {
  margin: 8px;
}
@keyframes l16 {
  100% {
    transform: rotate(1turn);
  }
}`,
    `
.loader17 {
  width: 70px;
  aspect-ratio: 1;
  background:
    radial-gradient(farthest-side, #ffa516 90%, #0000) center/16px 16px,
    radial-gradient(farthest-side, green 90%, #0000) bottom/12px 12px;
  background-repeat: no-repeat;
  animation: l17 1s infinite linear;
  position: relative;
}
.loader17::before {
  content: '';
  position: absolute;
  width: 8px;
  aspect-ratio: 1;
  inset: auto 0 16px;
  margin: auto;
  background: #ccc;
  border-radius: 50%;
  transform-origin: 50% calc(100% + 10px);
  animation: inherit;
  animation-duration: 0.5s;
}
@keyframes l17 {
  100% {
    transform: rotate(1turn);
  }
}`,
    `
.loader18 {
  width: 50px;
  aspect-ratio: 1;
  --c: no-repeat radial-gradient(farthest-side, #514b82 92%, #0000);
  background:
    var(--c) 50% 0,
    var(--c) 50% 100%,
    var(--c) 100% 50%,
    var(--c) 0 50%;
  background-size: 10px 10px;
  animation: l18 1s infinite;
  position: relative;
}
.loader18::before {
  content: '';
  position: absolute;
  inset: 0;
  margin: 3px;
  background: repeating-conic-gradient(#0000 0 35deg, #514b82 0 90deg);
  mask: radial-gradient(farthest-side, #0000 calc(100% - 3px), #000 0);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 3px), #000 0);
  border-radius: 50%;
}
@keyframes l18 {
  100% {
    transform: rotate(0.5turn);
  }
}`,
    `
.loader19 {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  color: #854f1d;
  background: radial-gradient(
    farthest-side,
    currentColor calc(100% - 6px),
    #0000 calc(100% - 5px) 0
  );
  mask: radial-gradient(farthest-side, #0000 calc(100% - 13px), #000 calc(100% - 12px));
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 13px), #000 calc(100% - 12px));
  border-radius: 50%;
  animation: l19 2s infinite linear;
}
.loader19::before,
.loader19::after {
  content: '';
  grid-area: 1/1;
  background:
    linear-gradient(currentColor 0 0) center,
    linear-gradient(currentColor 0 0) center;
  background-size:
    100% 10px,
    10px 100%;
  background-repeat: no-repeat;
}
.loader19::after {
  transform: rotate(45deg);
}

@keyframes l19 {
  100% {
    transform: rotate(1turn);
  }
}`,
    `
.loader20 {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid #514b82;
  animation:
    l20-1 0.8s infinite linear alternate,
    l20-2 1.6s infinite linear;
}
@keyframes l20-1 {
  0% {
    clip-path: polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%);
  }
  12.5% {
    clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%);
  }
  25% {
    clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%);
  }
  50% {
    clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%);
  }
  62.5% {
    clip-path: polygon(50% 50%, 100% 0, 100% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%);
  }
  75% {
    clip-path: polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 50% 100%, 0% 100%);
  }
  100% {
    clip-path: polygon(50% 50%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 0% 100%);
  }
}
@keyframes l20-2 {
  0% {
    transform: scaleY(1) rotate(0deg);
  }
  49.99% {
    transform: scaleY(1) rotate(135deg);
  }
  50% {
    transform: scaleY(-1) rotate(0deg);
  }
  100% {
    transform: scaleY(-1) rotate(-135deg);
  }
}`,
    `
.loader21 {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: repeating-conic-gradient(#000 0 90deg, #ccc 0 180deg);
  animation: l21 1s infinite linear;
}
@keyframes l21 {
  100% {
    transform: rotate(0.5turn);
  }
}`,
    `
.loader22 {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  border-radius: 50%;
  background: conic-gradient(#25b09b 25%, #f03355 0 50%, #514b82 0 75%, #ffa516 0);
  animation: l22 2s infinite linear;
}
.loader22::before,
.loader22::after {
  content: '';
  grid-area: 1/1;
  margin: 15%;
  border-radius: 50%;
  background: inherit;
  animation: inherit;
}
.loader22::after {
  margin: 25%;
  animation-duration: 3s;
}
@keyframes l22 {
  100% {
    transform: rotate(1turn);
  }
}`,
    `
.loader23 {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  border-radius: 50%;
  background:
    linear-gradient(0deg, rgb(0 0 0/50%) 30%, #0000 0 70%, rgb(0 0 0/100%) 0) 50%/8% 100%,
    linear-gradient(90deg, rgb(0 0 0/25%) 30%, #0000 0 70%, rgb(0 0 0/75%) 0) 50%/100% 8%;
  background-repeat: no-repeat;
  animation: l23 1s infinite steps(12);
}
.loader23::before,
.loader23::after {
  content: '';
  grid-area: 1/1;
  border-radius: 50%;
  background: inherit;
  opacity: 0.915;
  transform: rotate(30deg);
}
.loader23::after {
  opacity: 0.83;
  transform: rotate(60deg);
}
@keyframes l23 {
  100% {
    transform: rotate(1turn);
  }
}`,
    `
.loader24 {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid #0000;
  border-right-color: #ffa50097;
  position: relative;
  animation: l24 1s infinite linear;
}
.loader24:before,
.loader24:after {
  content: '';
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  border: inherit;
  animation: inherit;
  animation-duration: 2s;
}
.loader24:after {
  animation-duration: 4s;
}
@keyframes l24 {
  100% {
    transform: rotate(1turn);
  }
}`,
    `
.loader25 {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #514b82;
  mask: radial-gradient(circle closest-side at 50% 40%, #0000 94%, #000);
  -webkit-mask: radial-gradient(circle closest-side at 50% 40%, #0000 94%, #000);
  transform-origin: 50% 40%;
  animation: l25 1s infinite linear;
}
@keyframes l25 {
  100% {
    transform: rotate(1turn);
  }
}`,
    `
.loader26 {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  mask: conic-gradient(from 15deg, #0000, #000);
  -webkit-mask: conic-gradient(from 15deg, #0000, #000);
  animation: l26 1s infinite steps(12);
}
.loader26,
.loader26:before,
.loader26:after {
  background:
    radial-gradient(closest-side at 50% 12.5%, #f03355 96%, #0000) 50% 0/20% 80% repeat-y,
    radial-gradient(closest-side at 12.5% 50%, #f03355 96%, #0000) 0 50%/80% 20% repeat-x;
}
.loader26:before,
.loader26:after {
  content: '';
  grid-area: 1/1;
  transform: rotate(30deg);
}
.loader26:after {
  transform: rotate(60deg);
}

@keyframes l26 {
  100% {
    transform: rotate(1turn);
  }
}`,
    `
.loader27 {
  --d: 22px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  color: #25b09b;
  box-shadow:
    calc(1 * var(--d)) calc(0 * var(--d)) 0 0,
    calc(0.707 * var(--d)) calc(0.707 * var(--d)) 0 1px,
    calc(0 * var(--d)) calc(1 * var(--d)) 0 2px,
    calc(-0.707 * var(--d)) calc(0.707 * var(--d)) 0 3px,
    calc(-1 * var(--d)) calc(0 * var(--d)) 0 4px,
    calc(-0.707 * var(--d)) calc(-0.707 * var(--d)) 0 5px,
    calc(0 * var(--d)) calc(-1 * var(--d)) 0 6px;
  animation: l27 1s infinite steps(8);
}
@keyframes l27 {
  100% {
    transform: rotate(1turn);
  }
}`,
    `
.loader28 {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  color: #514b82;
  background: conic-gradient(from 90deg at 3px 3px, #0000 90deg, currentColor 0) -3px -3px /
    calc(50% + 1.5px) calc(50% + 1.5px);
  animation: l28 2s infinite;
}
.loader28::before,
.loader28::after {
  content: '';
  grid-area: 1/1;
  background: repeating-conic-gradient(#0000 0 35deg, currentColor 0 90deg);
  mask: radial-gradient(farthest-side, transparent calc(100% - 3px), black 0);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 3px), #000 0);
  border-radius: 50%;
}
.loader28::after {
  margin: 20%;
}
@keyframes l28 {
  100% {
    transform: rotate(1turn);
  }
}`,
    `
.loader29 {
  width: 50px;
  aspect-ratio: 1;
  --_c: no-repeat linear-gradient(orange 0 0) 50%;
  background:
    var(--_c) / 100% 50%,
    var(--_c) / 50% 100%;
  border-radius: 50%;
  animation: l29 2s infinite linear;
}
@keyframes l29 {
  100% {
    transform: rotate(1turn);
  }
}`,
    `
.loader30 {
  --R: 30px;
  --g1: #514b82 96%, #0000;
  --g2: #eeeeee 96%, #0000;
  width: calc(2 * var(--R));
  aspect-ratio: 1;
  border-radius: 50%;
  display: grid;
  mask: linear-gradient(black 0 0);
  -webkit-mask: linear-gradient(#000 0 0);
  animation: l30 2s infinite linear;
}
.loader30::before,
.loader30::after {
  content: '';
  grid-area: 1/1;
  width: 50%;
  background:
    radial-gradient(farthest-side, var(--g1)) calc(var(--R) + 0.866 * var(--R) - var(--R))
      calc(var(--R) - 0.5 * var(--R) - var(--R)),
    radial-gradient(farthest-side, var(--g1)) calc(var(--R) + 0.866 * var(--R) - var(--R))
      calc(var(--R) - 0.5 * var(--R) - var(--R)),
    radial-gradient(farthest-side, var(--g2)) calc(var(--R) + 0.5 * var(--R) - var(--R))
      calc(var(--R) - 0.866 * var(--R) - var(--R)),
    radial-gradient(farthest-side, var(--g1)) 0 calc(-1 * var(--R)),
    radial-gradient(farthest-side, var(--g2)) calc(var(--R) - 0.5 * var(--R) - var(--R))
      calc(var(--R) - 0.866 * var(--R) - var(--R)),
    radial-gradient(farthest-side, var(--g1)) calc(var(--R) - 0.866 * var(--R) - var(--R))
      calc(var(--R) - 0.5 * var(--R) - var(--R)),
    radial-gradient(farthest-side, var(--g2)) calc(-1 * var(--R)) 0,
    radial-gradient(farthest-side, var(--g1)) calc(var(--R) - 0.866 * var(--R) - var(--R))
      calc(var(--R) + 0.5 * var(--R) - var(--R));
  background-size: calc(2 * var(--R)) calc(2 * var(--R));
  background-repeat: no-repeat;
}
.loader30::after {
  transform: rotate(180deg);
  transform-origin: right;
}

@keyframes l30 {
  100% {
    transform: rotate(-1turn);
  }
}
`,
  ],
  shapes: [
    `
    .loader1 {
  width: 40px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #f03355;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  animation: l1 2s infinite cubic-bezier(0.3, 1, 0, 1);
}
@keyframes l1 {
  33% {
    border-radius: 0;
    background: #514b82;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  66% {
    border-radius: 0;
    background: #ffa516;
    clip-path: polygon(50% 0, 50% 0, 100% 100%, 0 100%);
  }
}`,
    `
.loader2 {
  width: 40px;
  aspect-ratio: 1;
  background: #25b09b;
  clip-path: polygon(0 0, 100% 0, 100% 100%);
  animation: l2 2s infinite cubic-bezier(0.3, 1, 0, 1);
}
@keyframes l2 {
  25% {
    clip-path: polygon(0 0, 100% 0, 0 100%);
  }
  50% {
    clip-path: polygon(0 0, 100% 100%, 0 100%);
  }
  75% {
    clip-path: polygon(100% 0, 100% 100%, 0 100%);
  }
  100% {
    clip-path: polygon(100% 0, 100% 100%, 0 0);
  }
}`,
    `
.loader3 {
  width: 50px;
  height: 50px;
  display: flex;
  transform: rotate(45deg);
  animation: l3-0 1.5s infinite linear;
}
.loader3:before,
.loader3:after {
  content: '';
  width: 50%;
  background: #514b82;
  clip-path: polygon(0 50%, 100% 0, 100% 100%);
  animation: inherit;
  animation-name: l3-1;
}
.loader3:after {
  clip-path: polygon(0 0, 100% 50%, 0% 100%);
  animation-name: l3-2;
}
@keyframes l3-0 {
  25% {
    width: 50px;
    height: 50px;
    transform: rotate(0);
  }
  50% {
    width: 50px;
    height: 50px;
  }
  75% {
    width: 70.7px;
    height: 35.35px;
  }
  100% {
    width: 70.7px;
    height: 35.35px;
    transform: rotate(0);
  }
}
@keyframes l3-1 {
  0%,
  25% {
    clip-path: polygon(0 50%, 100% 0, 100% 100%);
    transform: translate(0.3px);
  }
  50% {
    clip-path: polygon(0 50%, 100% 0, 100% 100%);
    transform: translate(-5px);
  }
  75% {
    clip-path: polygon(0 100%, 0 0, 100% 100%);
    transform: translate(-5px);
  }
  100% {
    clip-path: polygon(0 100%, 0 0, 100% 100%);
    transform: translate(17.7px);
  }
}
@keyframes l3-2 {
  0%,
  25% {
    clip-path: polygon(0 0, 100% 50%, 0 100%);
    transform: translate(-0.3px);
  }
  50% {
    clip-path: polygon(0 0, 100% 50%, 0 100%);
    transform: translate(5px);
  }
  75% {
    clip-path: polygon(0 0, 100% 0, 100% 100%);
    transform: translate(5px);
  }
  100% {
    clip-path: polygon(0 0, 100% 0, 100% 100%);
    transform: translate(-17.7px);
  }
}`,
    `
.loader4 {
  width: 40px;
  height: 40px;
  color: #f03355;
  background:
    conic-gradient(from -45deg at top 20px left 50%, #0000, currentColor 1deg 90deg, #0000 91deg),
    conic-gradient(from 45deg at right 20px top 50%, #0000, currentColor 1deg 90deg, #0000 91deg),
    conic-gradient(
      from 135deg at bottom 20px left 50%,
      #0000,
      currentColor 1deg 90deg,
      #0000 91deg
    ),
    conic-gradient(from -135deg at left 20px top 50%, #0000, currentColor 1deg 90deg, #0000 91deg);
  animation: l4 1.5s infinite cubic-bezier(0.3, 1, 0, 1);
}
@keyframes l4 {
  50% {
    width: 60px;
    height: 60px;
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`,
    `
.loader5 {
  width: 40px;
  height: 40px;
  --c: no-repeat linear-gradient(orange 0 0);
  background: var(--c), var(--c), var(--c), var(--c);
  background-size: 21px 21px;
  animation: l5 1.5s infinite cubic-bezier(0.3, 1, 0, 1);
}
@keyframes l5 {
  0% {
    background-position:
      0 0,
      100% 0,
      100% 100%,
      0 100%;
  }
  33% {
    background-position:
      0 0,
      100% 0,
      100% 100%,
      0 100%;
    width: 60px;
    height: 60px;
  }
  66% {
    background-position:
      100% 0,
      100% 100%,
      0 100%,
      0 0;
    width: 60px;
    height: 60px;
  }
  100% {
    background-position:
      100% 0,
      100% 100%,
      0 100%,
      0 0;
  }
}`,
    `
.loader6 {
  width: 40px;
  height: 40px;
  display: grid;
  animation: l6-0 1.5s infinite linear;
}
.loader6:before,
.loader6:after {
  content: '';
  grid-area: 1/1;
  background: #514b82;
  animation:
    l6-1 1.5s infinite linear,
    l6-2 1.5s infinite linear;
}
.loader6:after {
  --s: -1;
  animation-direction: reverse;
}
@keyframes l6-0 {
  0%,
  9%,
  91%,
  100% {
    background: #514b82;
  }
  10%,
  90% {
    background: #0000;
  }
}
@keyframes l6-1 {
  0%,
  33% {
    clip-path: polygon(0 0, 50% 100%, 100% 0, 100% 100%, 0 100%);
  }
  66%,
  100% {
    clip-path: polygon(50% 0, 50% 100%, 50% 0, 100% 100%, 0 100%);
  }
}
@keyframes l6-2 {
  0%,
  10%,
  90%,
  100% {
    transform: scale(var(--s, 1)) translateY(0);
  }
  33%,
  66% {
    transform: scale(var(--s, 1)) translateY(50%);
  }
}`,
    `
.loader7 {
  width: 40px;
  aspect-ratio: 1;
  color: #f03355;
  position: relative;
  background:
    conic-gradient(from 134deg at top, currentColor 92deg, #0000 0) top,
    conic-gradient(from -46deg at bottom, currentColor 92deg, #0000 0) bottom;
  background-size: 100% 50%;
  background-repeat: no-repeat;
}
.loader7:before {
  content: '';
  position: absolute;
  inset: 0;
  --g: currentColor 14.5px, #0000 0 calc(100% - 14.5px), currentColor 0;
  background: linear-gradient(45deg, var(--g)), linear-gradient(-45deg, var(--g));
  animation: l7 1.5s infinite cubic-bezier(0.3, 1, 0, 1);
}
@keyframes l7 {
  33% {
    inset: -10px;
    transform: rotate(0deg);
  }
  66% {
    inset: -10px;
    transform: rotate(90deg);
  }
  100% {
    inset: 0;
    transform: rotate(90deg);
  }
}`,
    `
.loader8 {
  width: 40px;
  aspect-ratio: 1;
  display: grid;
  animation: l8-0 1.5s infinite linear;
}
.loader8:before,
.loader8:after {
  content: '';
  grid-area: 1/1;
  background: #25b09b;
  clip-path: polygon(0 0%, 100% 0, 100% 100%);
  animation: inherit;
  animation-name: l8-1;
}
.loader8:after {
  --s: -1;
}
@keyframes l8-0 {
  66% {
    transform: skewX(0deg);
  }
  80%,
  100% {
    transform: skewX(-45deg);
  }
}
@keyframes l8-1 {
  0% {
    transform: scale(var(--s, 1)) translate(-0.5px, 0);
  }
  33% {
    transform: scale(var(--s, 1)) translate(calc(1px - 50%), calc(1px - 50%));
  }
  66% {
    transform: scale(var(--s, 1)) translate(calc(1px - 50%), 0%);
  }
  100% {
    transform: scale(var(--s, 1)) translate(calc(0.5px - 50%), 0%);
  }
}`,
    `
.loader9 {
  width: 40px;
  height: 20px;
  background: orange;
  position: relative;
  animation: l9-0 1.5s infinite linear;
}
.loader9:before,
.loader9:after {
  content: '';
  position: absolute;
  background: inherit;
  bottom: 100%;
  width: 50%;
  height: 100%;
  animation: inherit;
  animation-name: l9-1;
}
.loader9:before {
  left: 0;
  transform-origin: bottom left;
  --s: -1;
}
.loader9:after {
  right: 0;
  transform-origin: bottom right;
}
@keyframes l9-0 {
  0%,
  10% {
    transform: translateY(0%) scaleY(1);
  }
  49.99% {
    transform: translateY(-50%) scaleY(1);
  }
  50% {
    transform: translateY(-50%) scaleY(-1);
  }
  90%,
  100% {
    transform: translateY(-100%) scaleY(-1);
  }
}
@keyframes l9-1 {
  10%,
  90% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(calc(var(--s, 1) * 180deg));
  }
}`,
    `
.loader10 {
  display: flex;
  width: 50px;
  aspect-ratio: 1;
  animation: l10-0 1.5s infinite linear;
}
.loader10:before,
.loader10:after {
  content: '';
  width: 50%;
  background: #514b82;
  clip-path: polygon(0 0, 100% 50%, 0% 100%);
  animation: inherit;
  animation-name: l10-1;
  transform-origin: bottom left;
}
.loader10:before {
  clip-path: polygon(0 50%, 100% 0, 100% 100%);
  transform-origin: bottom right;
  --s: -1;
}
@keyframes l10-0 {
  0%,
  34.99% {
    transform: scaley(1);
  }
  35%,
  70% {
    transform: scaley(-1);
  }
  90%,
  100% {
    transform: scaley(-1) rotate(180deg);
  }
}

@keyframes l10-1 {
  0%,
  10%,
  70%,
  100% {
    transform: translateY(-100%) rotate(calc(var(--s, 1) * 135deg));
  }
  35% {
    transform: translateY(0%) rotate(0deg);
  }
}`,
    `
.loader11 {
  width: 40px;
  aspect-ratio: 1;
  display: grid;
}
.loader11::before,
.loader11::after {
  content: '';
  grid-area: 1/1;
  background: #25b09b;
  clip-path: polygon(0 0, 50% 50%, 0 100%);
  animation: l11 2s infinite;
}
.loader11::after {
  animation-delay: -1.5s;
  --s: 90deg;
}
@keyframes l11 {
  0%,
  12.5% {
    transform: rotate(var(--s, 0deg)) rotate(0deg);
  }
  37.5%,
  62.5% {
    transform: rotate(var(--s, 0deg)) rotate(-180deg);
  }
  87.5%,
  100% {
    transform: rotate(var(--s, 0deg)) rotate(-360deg);
  }
}`,
    `
.loader12 {
  width: 40px;
  aspect-ratio: 1;
  color: #514b82;
  background: repeating-conic-gradient(
    from -47deg,
    #0000 0deg,
    currentColor 1deg 91deg,
    #0000 94deg 180deg
  );
  display: flex;
  animation: l12-0 2s infinite linear;
}
.loader12::before,
.loader12::after {
  content: '';
  flex: 1;
  background: currentColor;
  clip-path: polygon(0 0, 100% 50%, 0 100%);
  animation: l12 1s infinite alternate;
  transform-origin: bottom left;
}
.loader12::after {
  clip-path: polygon(100% 0, 100% 100%, 0 50%);
  transform-origin: top right;
}
@keyframes l12-0 {
  0%,
  49.9% {
    transform: scaleX(1);
  }
  50%,
  100% {
    transform: scaleX(-1);
  }
}
@keyframes l12 {
  0%,
  20% {
    transform: rotate(0deg);
  }
  80%,
  100% {
    transform: rotate(-270deg);
  }
}`,
    `
.loader13 {
  width: 40px;
  aspect-ratio: 1;
  display: grid;
}
.loader13::before,
.loader13::after {
  content: '';
  grid-area: 1/1;
  background: orange;
  clip-path: polygon(0 0, 101% 0, 0 100%);
  animation: l13 2s infinite;
}
.loader13::after {
  --s: -1, -1;
}
@keyframes l13 {
  0%,
  10% {
    transform: scale(var(--s, 1)) translate(0, 0) rotate(0deg);
  }
  33% {
    transform: scale(var(--s, 1)) translate(20px, -20px) rotate(0deg);
  }
  66% {
    transform: scale(var(--s, 1)) translate(20px, -20px) rotate(180deg);
  }
  90%,
  100% {
    transform: scale(var(--s, 1)) translate(0px, 0px) rotate(180deg);
  }
}`,
    `
.loader14 {
  width: 40px;
  aspect-ratio: 1;
  color: #f03355;
  background: conic-gradient(currentColor 0 270deg, #0000 0);
  border-radius: 50%;
  animation: l14-0 4s infinite linear;
}
.loader14::before {
  content: '';
  display: block;
  height: 50%;
  width: 50%;
  border-top-left-radius: 100px;
  background: currentColor;
  animation: l14 0.5s infinite alternate;
}
@keyframes l14-0 {
  0%,
  24.99% {
    transform: rotate(0deg);
  }
  25%,
  49.99% {
    transform: rotate(90deg);
  }
  50%,
  74.99% {
    transform: rotate(180deg);
  }
  75%,
  100% {
    transform: rotate(270deg);
  }
}
@keyframes l14 {
  100% {
    transform: translate(-10px, -10px);
  }
}`,
    `
.loader15 {
  width: 40px;
  aspect-ratio: 1;
  display: flex;
  transform-origin: 50% 125%;
  animation: l15-0 1.5s infinite linear;
}
.loader15:before,
.loader15:after {
  content: '';
  flex: 1;
  background: orange;
  animation: inherit;
  transform-origin: bottom left;
  animation-name: l15-1;
}
.loader15:before {
  transform-origin: bottom right;
  --s: -1;
}
@keyframes l15-0 {
  0%,
  10% {
    transform: translateY(0) scaleY(1);
  }
  49.99% {
    transform: translateY(-75%) scaleY(1);
  }
  50% {
    transform: translateY(-75%) scaleY(-1);
  }
  90%,
  100% {
    transform: translateY(-150%) scaleY(-1);
  }
}
@keyframes l15-1 {
  10%,
  90% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(calc(var(--s, 1) * 90deg));
  }
}`,
    `
.loader16 {
  width: 40px;
  height: 40px;
  position: relative;
  --c: no-repeat linear-gradient(#25b09b 0 0);
  background:
    var(--c) center/100% 10px,
    var(--c) center/10px 100%;
}
.loader16:before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    var(--c) 0 0,
    var(--c) 100% 0,
    var(--c) 0 100%,
    var(--c) 100% 100%;
  background-size: 15.5px 15.5px;
  animation: l16 1.5s infinite cubic-bezier(0.3, 1, 0, 1);
}
@keyframes l16 {
  33% {
    inset: -10px;
    transform: rotate(0deg);
  }
  66% {
    inset: -10px;
    transform: rotate(90deg);
  }
  100% {
    inset: 0;
    transform: rotate(90deg);
  }
}`,
    `
.loader17 {
  width: 40px;
  height: 60px;
  position: relative;
}
.loader17::before,
.loader17::after {
  content: '';
  position: absolute;
  inset: 0;
  background: #514b82;
  clip-path: polygon(0 0, 100% 0, 100% 67%, 50% 67%, 50% 34%, 0 34%);
  animation: sp7 2s infinite;
}
.loader17::after {
  --s: -1, -1;
}
@keyframes sp7 {
  0%,
  10% {
    transform: scale(var(--s, 1)) translate(0, 0) rotate(0deg);
  }
  33% {
    transform: scale(var(--s, 1)) translate(0, -20px) rotate(0deg);
  }
  66% {
    transform: scale(var(--s, 1)) translate(10px, -20px) rotate(-90deg);
  }
  90%,
  100% {
    transform: scale(var(--s, 1)) translate(10px, -10px) rotate(-90deg);
  }
}`,
    `
.loader18 {
  width: 40px;
  aspect-ratio: 1;
  color: #f03355;
  position: relative;
  background: radial-gradient(10px, currentColor 94%, #0000);
}
.loader18:before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background:
    radial-gradient(9px at bottom right, #0000 94%, currentColor) top left,
    radial-gradient(9px at bottom left, #0000 94%, currentColor) top right,
    radial-gradient(9px at top right, #0000 94%, currentColor) bottom left,
    radial-gradient(9px at top left, #0000 94%, currentColor) bottom right;
  background-size: 20px 20px;
  background-repeat: no-repeat;
  animation: l18 1.5s infinite cubic-bezier(0.3, 1, 0, 1);
}
@keyframes l18 {
  33% {
    inset: -10px;
    transform: rotate(0deg);
  }
  66% {
    inset: -10px;
    transform: rotate(90deg);
  }
  100% {
    inset: 0;
    transform: rotate(90deg);
  }
}`,
    `
.loader19 {
  width: 40px;
  height: 20px;
  background: orange;
  position: relative;
  animation: l19-0 1.5s infinite linear;
}
.loader19:before,
.loader19:after {
  content: '';
  position: absolute;
  background: inherit;
  bottom: 100%;
  width: 50%;
  height: 100%;
  animation: inherit;
  animation-name: l19-1;
}
.loader19:before {
  left: 0;
  --s: -1, 1;
}
.loader19:after {
  right: 0;
}
@keyframes l19-0 {
  0%,
  30% {
    transform: translateY(0) scaleY(1);
  }
  49.99% {
    transform: translateY(-50%) scaleY(1);
  }
  50% {
    transform: translateY(-50%) scaleY(-1);
  }
  70%,
  100% {
    transform: translateY(-100%) scaleY(-1);
  }
}
@keyframes l19-1 {
  0%,
  10%,
  90%,
  100% {
    transform: scale(var(--s, 1)) translate(0);
  }
  30%,
  70% {
    transform: scale(var(--s, 1)) translate(20px);
  }
  50% {
    transform: scale(var(--s, 1)) translate(20px, 20px);
  }
}`,
    `
.loader20 {
  width: 40px;
  aspect-ratio: 1;
  display: flex;
  transform-origin: 0% 150%;
  animation: l20-0 2s infinite linear;
}
.loader20:before,
.loader20:after {
  content: '';
  flex: 1;
  background: #f03355;
  animation: l20-1 1s infinite linear alternate;
  border-radius: 100px 0 0 100px;
  transform-origin: 100% 100%;
}
.loader20:after {
  border-radius: 0 100px 100px 0;
  transform-origin: 0% 100%;
  --s: -1;
}
@keyframes l20-0 {
  0%,
  10% {
    transform: translateY(0) scaleY(1);
  }
  49.99% {
    transform: translateY(-100%) scaleY(1);
  }
  50% {
    transform: translateY(-100%) scaleY(-1);
  }
  90%,
  100% {
    transform: translateY(-200%) scaleY(-1);
  }
}
@keyframes l20-1 {
  0%,
  20% {
    transform: rotate(0deg) translate(0, 0) rotate(0deg);
  }
  50% {
    transform: rotate(calc(var(--s, 1) * -90deg)) translate(0, 0) rotate(0deg);
  }
  100% {
    transform: rotate(calc(var(--s, 1) * -90deg)) translate(0, -20px)
      rotate(calc(var(--s, 1) * -90deg));
  }
}`,
    `
.loader21 {
  width: 40px;
  aspect-ratio: 1;
  display: flex;
}
.loader21:before,
.loader21:after {
  content: '';
  flex: 1;
  background: #f03355;
  animation: l21 2s infinite;
  border-radius: 100px 0 0 100px;
  transform-origin: top right;
  transform: translateY(calc(var(--s, 1) * 0%)) rotate(0);
}
.loader21:after {
  transform-origin: bottom left;
  border-radius: 0 100px 100px 0;
  --s: -1;
}
@keyframes l21 {
  33% {
    transform: translate(0, calc(var(--s, 1) * 50%)) rotate(0);
  }
  66% {
    transform: translate(0, calc(var(--s, 1) * 50%)) rotate(-90deg);
  }
  90%,
  100% {
    transform: translate(calc(var(--s, 1) * -100%), calc(var(--s, 1) * 50%)) rotate(-90deg);
  }
}`,
    `
.loader22 {
  width: 36px;
  aspect-ratio: 1;
  color: #514b82;
  background: conic-gradient(from 134deg at top, currentColor 92deg, #0000 0);
  position: relative;
  animation: l22-0 2s infinite linear;
}
.loader22:before,
.loader22:after {
  content: '';
  position: absolute;
  width: 50%;
  height: 50%;
  background: currentColor;
  transform-origin: top right;
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
  inset: auto 100% 0 auto;
  animation: l22-1 1s infinite linear alternate;
}
.loader22:after {
  inset: auto auto 0 100%;
  transform-origin: top left;
  --s: -1;
  clip-path: polygon(0 0, 100% 100%, 0 100%);
}
@keyframes l22-0 {
  0%,
  49.99% {
    transform: scaleY(1);
  }
  50%,
  90% {
    transform: scaleY(-1);
  }
  100% {
    transform: scaleY(-1) rotate(180deg);
  }
}
@keyframes l22-1 {
  0%,
  30% {
    transform: rotate(calc(var(--s, 1) * 0));
  }
  70%,
  100% {
    transform: rotate(calc(var(--s, 1) * 180deg));
  }
}`,
    `
.loader23 {
  width: 36px;
  aspect-ratio: 1;
  color: #25b09b;
  background: linear-gradient(45deg, #0000 24%, currentColor 0 76%, #0000 0);
  position: relative;
  animation: l23-0 1.5s infinite;
}
.loader23:before,
.loader23:after {
  content: '';
  position: absolute;
  width: 50%;
  height: 50%;
  background: currentColor;
  transform-origin: top left;
  clip-path: polygon(-2px 0, 0 -1px, 100% 100%, -2px 100%);
  inset: auto auto 0 0;
  animation: l23-1 1.5s infinite;
}
.loader23:after {
  inset: 0 0 auto auto;
  transform-origin: bottom right;
  clip-path: polygon(0 0, calc(100% + 2px) 0, calc(100% + 2px) 100%, 100% calc(100% + 1px));
}
@keyframes l23-0 {
  0%,
  50% {
    transform: skewX(0);
  }
  90%,
  100% {
    transform: skewX(-45deg);
  }
}
@keyframes l23-1 {
  40%,
  100% {
    transform: rotate(180deg);
    box-shadow: 0 0 0 3px;
  }
}`,
    `
.loader24 {
  width: 40px;
  aspect-ratio: 1;
  display: grid;
}
.loader24:before,
.loader24:after {
  content: '';
  background: orange;
  transform-origin: left;
  animation: l24 2s infinite;
}
.loader24:before {
  transform-origin: right;
  --s: -1;
}
@keyframes l24 {
  0%,
  10% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(calc(var(--s, 1) * 50%), 0) scale(1);
  }
  66% {
    transform: translate(calc(var(--s, 1) * 50%), calc(var(--s, 1) * -50%)) scale(1);
  }
  90%,
  100% {
    transform: translate(calc(var(--s, 1) * 50%), calc(var(--s, 1) * -50%)) scale(0.5, 2);
  }
}`,
    `
.loader25 {
  width: 40px;
  aspect-ratio: 1;
  position: relative;
}
.loader25:before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  --c: #0000, #f03355 1deg 120deg, #0000 121deg;
  background:
    conic-gradient(from 0deg, var(--c)) top right,
    conic-gradient(from 120deg, var(--c)) bottom,
    conic-gradient(from 240deg, var(--c)) top left;
  background-size: 40px 40px;
  background-repeat: no-repeat;
  animation: l25 2s infinite cubic-bezier(0.3, 1, 0, 1);
}
@keyframes l25 {
  33% {
    inset: -8px;
    transform: rotate(0deg);
  }
  66% {
    inset: -8px;
    transform: rotate(180deg);
  }
  100% {
    inset: 0;
    transform: rotate(180deg);
  }
}`,
    `
.loader26 {
  width: 60px;
  aspect-ratio: 1;
  color: #514b82;
  position: relative;
}
.loader26::before,
.loader26::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(currentColor 0 0) 0 calc(var(--s, 0) * -100%) / 100% calc(100% / 3),
    repeating-linear-gradient(90deg, currentColor 0 25%, #0000 0 50%) calc(var(--s, 0) * 100%) 50% /
      calc(4 * 100% / 3) calc(100% / 3);
  background-repeat: no-repeat;
  animation: l26 2s infinite;
}
.loader26::after {
  --s: -1;
}
@keyframes l26 {
  0%,
  10% {
    transform: translateY(calc(var(--s, 1) * 0));
    background-position:
      0 calc(var(--s, 0) * -100%),
      calc(var(--s, 0) * 100%) 50%;
  }
  33% {
    transform: translateY(calc(var(--s, 1) * -20%));
    background-position:
      0 calc(var(--s, 0) * -100%),
      calc(var(--s, 0) * 100%) 50%;
  }
  66% {
    transform: translateY(calc(var(--s, 1) * -20%));
    background-position:
      0 calc(var(--s, 0) * -100%),
      calc(var(--s, 0) * 100% + 100%) 50%;
  }
  90%,
  100% {
    transform: translateY(calc(var(--s, 1) * 0));
    background-position:
      0 calc(var(--s, 0) * -100%),
      calc(var(--s, 0) * 100% + 100%) 50%;
  }
}`,
    `
.loader27 {
  width: 50px;
  aspect-ratio: 1.154;
  position: relative;
  background: conic-gradient(from 120deg at 50% 64%, #0000, #25b09b 1deg 120deg, #0000 121deg);
  animation: l27-0 1.5s infinite cubic-bezier(0.3, 1, 0, 1);
}
.loader27:before,
.loader27:after {
  content: '';
  position: absolute;
  inset: 0;
  background: inherit;
  transform-origin: 50% 66%;
  animation: l27-1 1.5s infinite;
}
.loader27:after {
  --s: -1;
}
@keyframes l27-0 {
  0%,
  30% {
    transform: rotate(0);
  }
  70% {
    transform: rotate(120deg);
  }
  70.01%,
  100% {
    transform: rotate(360deg);
  }
}
@keyframes l27-1 {
  0% {
    transform: rotate(calc(var(--s, 1) * 120deg)) translate(0);
  }
  30%,
  70% {
    transform: rotate(calc(var(--s, 1) * 120deg)) translate(calc(var(--s, 1) * -5px), 10px);
  }
  100% {
    transform: rotate(calc(var(--s, 1) * 120deg)) translate(0);
  }
}`,
    `
.loader28 {
  width: 20px;
  aspect-ratio: 1;
  background: #514b82;
  position: relative;
  transform-origin: top right;
  animation: l28-0 2s infinite linear;
}
.loader28:before,
.loader28:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: inherit;
  transform-origin: bottom right;
  clip-path: polygon(0 0, 100% 100%, 0 100%);
  inset: auto auto 100% 0;
  animation: l28-1 1s infinite linear alternate;
}
.loader28:after {
  inset: auto auto 0 100%;
  transform-origin: top left;
  --s: -1;
}
@keyframes l28-0 {
  0%,
  49.99% {
    transform: scale(1);
  }
  50%,
  90% {
    transform: scale(-1);
  }
  100% {
    transform: scale(-1) rotate(180deg);
  }
}
@keyframes l28-1 {
  0%,
  30% {
    transform: rotate(calc(var(--s, 1) * 0));
  }
  70%,
  100% {
    transform: rotate(calc(var(--s, 1) * 90deg));
  }
}`,
    `
.loader29 {
  width: 60px;
  aspect-ratio: 1;
  --c: no-repeat linear-gradient(orange 0 0);
  background:
    var(--c) left 20px top 0,
    var(--c) top 20px right 0,
    var(--c) right 20px bottom 0,
    var(--c) bottom 20px left 0;
  background-size: calc(100% / 3) calc(100% / 3);
  animation:
    l29-1 0.75s infinite alternate linear,
    l29-2 1.5s infinite;
}
@keyframes l29-1 {
  90%,
  100% {
    background-size:
      calc(2 * 100% / 3) calc(100% / 3),
      calc(100% / 3) calc(2 * 100% / 3);
  }
}
@keyframes l29-2 {
  0%,
  49.99% {
    transform: scaleX(1);
  }
  50%,
  100% {
    transform: scaleX(-1);
  }
}`,
    `
.loader30 {
  width: 40px;
  aspect-ratio: 1;
  display: grid;
  animation: l30-0 1.5s infinite linear;
}
.loader30:before,
.loader30:after {
  content: '';
  grid-area: 1/1;
  background: #25b09b;
  animation: inherit;
  animation-name: l30-1;
}
.loader30:after {
  transform-origin: bottom right;
  --s: 1;
}
@keyframes l30-0 {
  0%,
  66% {
    transform: scaleY(1);
  }
  66.01%,
  100% {
    transform: scaleY(-1);
  }
}
@keyframes l30-1 {
  0%,
  10% {
    transform: scaleX(calc(var(--s, -1) * -1)) rotate(calc(var(--s, 0) * 90deg));
    clip-path: polygon(0 0, 0 100%, 100% 100%);
  }
  33% {
    transform: scaleX(calc(var(--s, -1) * -1)) rotate(calc(var(--s, 0) * 0deg));
    clip-path: polygon(0 0, 0 100%, 100% 100%);
  }
  66% {
    transform: scaleX(calc(var(--s, -1) * -1)) rotate(calc(var(--s, 0) * 0deg));
    clip-path: polygon(0 0, 0 100%, 100% 0);
  }
  66.01% {
    transform: scaleX(calc(var(--s, -1) * -1)) rotate(calc(var(--s, 0) * 0deg));
    clip-path: polygon(0 0, 0 100%, 100% 100%);
  }
  90%,
  100% {
    transform: scaleX(calc(var(--s, -1) * -1)) rotate(calc(var(--s, 0) * 90deg));
    clip-path: polygon(0 0, 0 100%, 100% 100%);
  }
}`,
    `
.loader31 {
  --c: no-repeat linear-gradient(orange 0 0);
  background:
    var(--c) 0 0,
    var(--c) 0 50%,
    var(--c) 0 100%,
    var(--c) 50% 0,
    var(--c) 50% 50%,
    var(--c) 50% 100%,
    var(--c) 100% 0,
    var(--c) 100% 50%,
    var(--c) 100% 100%;
  background-size: 16px 16px;
  animation: l31 0.5s infinite alternate;
}
@keyframes l31 {
  0%,
  20% {
    width: 45px;
    height: 45px;
  }
  90%,
  100% {
    width: 65px;
    height: 65px;
  }
}`,
    `
.loader32 {
  --c: no-repeat linear-gradient(orange 0 0);
  background:
    var(--c), var(--c), var(--c), var(--c), var(--c), var(--c), var(--c), var(--c), var(--c);
  background-size: 16px 16px;
  animation:
    l32-1 1s infinite,
    l32-2 1s infinite;
}
@keyframes l32-1 {
  0%,
  100% {
    width: 45px;
    height: 45px;
  }
  35%,
  65% {
    width: 65px;
    height: 65px;
  }
}
@keyframes l32-2 {
  0%,
  40% {
    background-position:
      0 0,
      0 50%,
      0 100%,
      50% 100%,
      100% 100%,
      100% 50%,
      100% 0,
      50% 0,
      50% 50%;
  }
  60%,
  100% {
    background-position:
      0 50%,
      0 100%,
      50% 100%,
      100% 100%,
      100% 50%,
      100% 0,
      50% 0,
      0 0,
      50% 50%;
  }
}`,
    `
.loader33 {
  height: 45px;
  --c: no-repeat linear-gradient(#514b82 0 0);
  background:
    var(--c) left,
    var(--c) center,
    var(--c) right;
  background-size: 16px 100%;
  animation:
    l33-1 1.5s infinite,
    l33-2 1.5s infinite;
}
@keyframes l33-1 {
  0%,
  100% {
    width: 45px;
  }
  35%,
  65% {
    width: 65px;
  }
}
@keyframes l33-2 {
  0%,
  40% {
    transform: rotate(0);
  }
  60%,
  100% {
    transform: rotate(90deg);
  }
}`,
    `
.loader34 {
  height: 60px;
  aspect-ratio: 1;
  --c: no-repeat linear-gradient(#514b82 0 0);
  background: var(--c), var(--c), var(--c), var(--c), var(--c), var(--c);
  animation:
    l34-1 2s infinite alternate,
    l34-2 2s infinite alternate;
}
@keyframes l34-1 {
  0%,
  20% {
    background-size: 20px 20px;
  }
  40%,
  60% {
    background-size: 100% 20px;
  }
  80%,
  100% {
    background-size: 20px 20px;
  }
}
@keyframes l34-2 {
  0%,
  40% {
    background-position:
      0 0,
      100% 0,
      50% 50%,
      50% 50%,
      0 100%,
      100% 100%;
  }
  60%,
  100% {
    background-position:
      50% 0,
      50% 0,
      0 50%,
      100% 50%,
      50% 100%,
      50% 100%;
  }
}`,
    `
.loader35 {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
}
.loader35:before,
.loader35:after {
  content: '';
  grid-area: 1/1;
  border-radius: 50%;
  background: #f03355;
  mask: repeating-linear-gradient(#000 0 5px, #0000 0 10px);
  -webkit-mask: repeating-linear-gradient(#000 0 5px, #0000 0 10px);
  animation: l35 1.5s infinite;
}
.loader35:after {
  mask: repeating-linear-gradient(#0000 0 5px, #000 0 10px);
  -webkit-mask: repeating-linear-gradient(#0000 0 5px, #000 0 10px);
  --s: -1;
}
@keyframes l35 {
  0%,
  10% {
    transform: translate(0) rotate(0);
  }
  35% {
    transform: translate(calc(var(--s, 1) * 50%)) rotate(0);
  }
  66% {
    transform: translate(calc(var(--s, 1) * 50%)) rotate(calc(var(--s, 1) * 180deg));
  }
  90%,
  100% {
    transform: translate(0) rotate(calc(var(--s, 1) * 180deg));
  }
}`,
    `
.loader36 {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
}
.loader36:before,
.loader36:after {
  content: '';
  grid-area: 1/1;
  border-radius: 50%;
  background: #f03355;
  mask: repeating-linear-gradient(#000 0 10px, #0000 0 20px);
  -webkit-mask: repeating-linear-gradient(#000 0 10px, #0000 0 20px);
}
.loader36:after {
  mask: repeating-linear-gradient(#0000 0 10px, #000 0 20px);
  -webkit-mask: repeating-linear-gradient(#0000 0 10px, #000 0 20px);
  animation: l36 1.5s infinite;
}
@keyframes l36 {
  0%,
  10% {
    transform: rotate(0) translate(0);
  }
  35% {
    transform: rotate(0) translate(100%);
  }
  66% {
    transform: rotate(180deg) translate(100%);
  }
  90%,
  100% {
    transform: rotate(180deg) translate(0);
  }
}`,
    `
.loader37 {
  width: 60px;
  aspect-ratio: 1.154;
  --c: #0000, #25b09b 2deg 59deg, #0000 61deg;
  --c1: conic-gradient(from 149deg at top, var(--c));
  --c2: conic-gradient(from -31deg at bottom, var(--c));
  background:
    var(--c1) top,
    var(--c1) bottom right,
    var(--c2) bottom,
    var(--c1) bottom left;
  background-size: 50% 50%;
  background-repeat: no-repeat;
  animation: l37 1s infinite;
}
@keyframes l37 {
  80%,
  100% {
    background-position:
      bottom right,
      bottom left,
      bottom,
      top;
  }
}`,
    `
.loader38 {
  width: 60px;
  aspect-ratio: 1.154;
  color: #25b09b;
  display: grid;
  animation: l38-0 6s infinite linear;
}
.loader38:before,
.loader38:after {
  content: '';
  grid-area: 1/1;
}
.loader38:before {
  clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
  background: conic-gradient(from -30deg, #0000 60deg, currentColor 0);
}
.loader38:after {
  background: conic-gradient(from -30deg, currentColor 60deg, #0000 0);
  animation: l38 0.5s infinite alternate;
}
@keyframes l38-0 {
  0%,
  16.66% {
    transform: rotate(0deg);
  }
  16.67%,
  33.33% {
    transform: rotate(60deg);
  }
  33.34%,
  50% {
    transform: rotate(120deg);
  }
  50.1%,
  66.66% {
    transform: rotate(180deg);
  }
  66.67%,
  83.33% {
    transform: rotate(240deg);
  }
  83.34%,
  100% {
    transform: rotate(300deg);
  }
}
@keyframes l38 {
  100% {
    transform: translateY(-20px);
  }
}`,
    `
.loader39 {
  width: 50px;
  aspect-ratio: 1;
  color: #398eb6;
  background: currentColor;
  border-radius: 50%;
  position: relative;
}
.loader39:before {
  content: '';
  position: absolute;
  background:
    radial-gradient(farthest-side at bottom right, #0000 94%, currentColor 96%) 0 0,
    radial-gradient(farthest-side at bottom left, #0000 94%, currentColor 96%) 100% 0,
    radial-gradient(farthest-side at top left, #0000 94%, currentColor 96%) 100% 100%,
    radial-gradient(farthest-side at top right, #0000 94%, currentColor 96%) 0 100%;
  background-size: 25px 25px;
  background-repeat: no-repeat;
  animation:
    l39-1 1s infinite,
    l39-2 1s infinite;
}
@keyframes l39-1 {
  0%,
  10%,
  90%,
  100% {
    inset: 0;
  }
  40%,
  60% {
    inset: -10px;
  }
}

@keyframes l39-2 {
  0%,
  40% {
    transform: rotate(0);
  }
  60%,
  100% {
    transform: rotate(90deg);
  }
}`,
    `
.loader40 {
  width: 50px;
  aspect-ratio: 1;
  color: #398eb6;
  position: relative;
  animation: l40 0.5s infinite alternate;
}
.loader40:before,
.loader40:after {
  content: '';
  position: absolute;
  inset: 0;
  background-size: 25px 25px;
  background-position:
    0 0,
    100% 0,
    100% 100%,
    0 100%;
  background-repeat: no-repeat;
}
.loader40:before {
  background-image:
    radial-gradient(farthest-side at top left, currentColor 96%, #0000),
    radial-gradient(farthest-side at top right, currentColor 96%, #0000),
    radial-gradient(farthest-side at bottom right, currentColor 96%, #0000),
    radial-gradient(farthest-side at bottom left, currentColor 96%, #0000);
  animation: l40-1 1s infinite;
}
.loader40:after {
  background-image:
    radial-gradient(farthest-side at top left, #0000 94%, currentColor 96%),
    radial-gradient(farthest-side at top right, #0000 94%, currentColor 96%),
    radial-gradient(farthest-side at bottom right, #0000 94%, currentColor 96%),
    radial-gradient(farthest-side at bottom left, #0000 94%, currentColor 96%);
  animation: l40-2 1s infinite;
}
@keyframes l40-1 {
  0%,
  10%,
  90%,
  100% {
    inset: 0;
  }
  40%,
  60% {
    inset: -10px;
  }
}
@keyframes l40-2 {
  0%,
  40% {
    transform: rotate(0);
  }
  60%,
  100% {
    transform: rotate(90deg);
  }
}
`,
  ],
  polygons: [
    `
  .loader1 {
  display: inline-grid;
  width: 90px;
  aspect-ratio: 1;
  clip-path: polygon(
    100% 50%,
    85.36% 85.36%,
    50% 100%,
    14.64% 85.36%,
    0% 50%,
    14.64% 14.64%,
    50% 0%,
    85.36% 14.64%
  );
  background: #574951;
  animation: l1 6s infinite linear;
}
.loader1:before,
.loader1:after {
  content: '';
  grid-area: 1/1;
  background: #83988e;
  clip-path: inherit;
  margin: 10%;
  animation: inherit;
  animation-duration: 12s;
}
.loader1:after {
  background: #bcdea5;
  margin: 20%;
  animation-duration: 18s;
}
@keyframes l1 {
  to {
    rotate: 1turn;
  }
}`,
    `
    .loader2 {
  display: inline-grid;
  width: 90px;
  aspect-ratio: 1;
  clip-path: polygon(
    100% 50%,
    85.36% 85.36%,
    50% 100%,
    14.64% 85.36%,
    0% 50%,
    14.64% 14.64%,
    50% 0%,
    85.36% 14.64%
  );
  background: #574951;
  animation: l2 6s infinite linear;
}
.loader2:before,
.loader2:after {
  content: '';
  grid-area: 1/1;
  background: #83988e;
  clip-path: polygon(
    100% 50%,
    81.17% 89.09%,
    38.87% 98.75%,
    4.95% 71.69%,
    4.95% 28.31%,
    38.87% 1.25%,
    81.17% 10.91%
  );
  margin: 10%;
  animation: inherit;
  animation-duration: 10s;
}
.loader2:after {
  background: #bcdea5;
  clip-path: polygon(100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%, 25% 6.7%, 75% 6.7%);
  margin: 20%;
  animation-duration: 3s;
  animation-direction: reverse;
}
@keyframes l2 {
  to {
    rotate: 1turn;
  }
}`,
    `
    .loader3 {
  display: inline-grid;
  width: 90px;
  aspect-ratio: 1;
  animation: l3-0 5s steps(10) infinite;
}
.loader3:before,
.loader3:after {
  content: '';
  grid-area: 1/1;
}
.loader3:before {
  clip-path: polygon(
    100% 50%,
    90.45% 79.39%,
    65.45% 97.55%,
    34.55% 97.55%,
    9.55% 79.39%,
    0% 50%,
    9.55% 20.61%,
    34.55% 2.45%,
    65.45% 2.45%,
    90.45% 20.61%,
    100% 50%,
    85.6% 24.14%,
    63.6% 8.15%,
    36.4% 8.15%,
    14.4% 24.14%,
    6% 50%,
    14.4% 75.86%,
    36.4% 91.85%,
    63.6% 91.85%,
    85.6% 75.86%,
    94% 50%,
    85.6% 24.14%
  );
  background: #574951;
}
.loader3:after {
  background: #83988e;
  clip-path: polygon(100% 50%, 65.45% 97.55%, 9.55% 79.39%, 9.55% 20.61%, 65.45% 2.45%);
  margin: 27%;
  translate: 46% 0;
  transform-origin: right;
  animation: l3-1 0.5s linear infinite;
}
@keyframes l3-0 {
  to {
    rotate: 1turn;
  }
}
@keyframes l3-1 {
  0% {
    rotate: 18deg;
  }
  to {
    rotate: -18deg;
  }
}`,
    `
    .loader4 {
  display: inline-grid;
  width: 90px;
  aspect-ratio: 1;
  transform: rotate(90deg);
  animation: l4 1s linear infinite;
}
.loader4:before,
.loader4:after {
  content: '';
  grid-area: 1/1;
}
.loader4:before {
  clip-path: polygon(
    100% 50%,
    90.45% 79.39%,
    65.45% 97.55%,
    34.55% 97.55%,
    9.55% 79.39%,
    0% 50%,
    9.55% 20.61%,
    34.55% 2.45%,
    65.45% 2.45%,
    90.45% 20.61%,
    100% 50%,
    85.6% 24.14%,
    63.6% 8.15%,
    36.4% 8.15%,
    14.4% 24.14%,
    6% 50%,
    14.4% 75.86%,
    36.4% 91.85%,
    63.6% 91.85%,
    85.6% 75.86%,
    94% 50%,
    85.6% 24.14%
  );
  background: #574951;
}
.loader4:after {
  background: #83988e;
  clip-path: polygon(100% 50%, 65.45% 97.55%, 9.55% 79.39%, 9.55% 20.61%, 65.45% 2.45%);
  margin: 27%;
  translate: 46% 0;
  transform-origin: right;
  animation: inherit;
}
@keyframes l4 {
  0% {
    rotate: 18deg;
  }
  to {
    rotate: -18deg;
  }
}`,
    `
    .loader5 {
  display: inline-grid;
  width: 70px;
  aspect-ratio: 1;
  animation: l5-0 8s steps(10) infinite;
}
.loader5:before,
.loader5:after {
  content: '';
  grid-area: 1/1;
}
.loader5:before {
  clip-path: polygon(
    100% 50%,
    90.45% 79.39%,
    65.45% 97.55%,
    34.55% 97.55%,
    9.55% 79.39%,
    0% 50%,
    9.55% 20.61%,
    34.55% 2.45%,
    65.45% 2.45%,
    90.45% 20.61%,
    100% 50%,
    85.6% 24.14%,
    63.6% 8.15%,
    36.4% 8.15%,
    14.4% 24.14%,
    6% 50%,
    14.4% 75.86%,
    36.4% 91.85%,
    63.6% 91.85%,
    85.6% 75.86%,
    94% 50%,
    85.6% 24.14%
  );
  background: #574951;
}
.loader5:after {
  background: #83988e;
  clip-path: polygon(100% 50%, 65.45% 97.55%, 9.55% 79.39%, 9.55% 20.61%, 65.45% 2.45%);
  margin: 23%;
  translate: -143% 0;
  transform-origin: right;
  animation: l5-1 0.8s linear infinite;
}
@keyframes l5-0 {
  to {
    rotate: 1turn;
  }
}
@keyframes l5-1 {
  0% {
    rotate: -54deg;
  }
  to {
    rotate: 54deg;
  }
}`,
    `
    .loader6 {
  display: inline-grid;
  width: 70px;
  aspect-ratio: 1;
  animation: l6-0 0.8s linear infinite;
  transform: rotate(90deg);
}
.loader6:before,
.loader6:after {
  content: '';
  grid-area: 1/1;
}
.loader6:before {
  clip-path: polygon(
    100% 50%,
    90.45% 79.39%,
    65.45% 97.55%,
    34.55% 97.55%,
    9.55% 79.39%,
    0% 50%,
    9.55% 20.61%,
    34.55% 2.45%,
    65.45% 2.45%,
    90.45% 20.61%,
    100% 50%,
    85.6% 24.14%,
    63.6% 8.15%,
    36.4% 8.15%,
    14.4% 24.14%,
    6% 50%,
    14.4% 75.86%,
    36.4% 91.85%,
    63.6% 91.85%,
    85.6% 75.86%,
    94% 50%,
    85.6% 24.14%
  );
  background: #574951;
}
.loader6:after {
  background: #83988e;
  clip-path: polygon(100% 50%, 65.45% 97.55%, 9.55% 79.39%, 9.55% 20.61%, 65.45% 2.45%);
  margin: 23%;
  translate: -143% 0;
  transform-origin: right;
  animation: inherit;
  animation-name: l6-1;
}
@keyframes l6-0 {
  0% {
    rotate: 18deg;
  }
  to {
    rotate: -18deg;
  }
}
@keyframes l6-1 {
  0% {
    rotate: -54deg;
  }
  to {
    rotate: 54deg;
  }
}`,
    `
    .loader7 {
  display: inline-grid;
  width: 80px;
  aspect-ratio: 2;
  box-shadow: 0 5px #574951;
  overflow: hidden;
}
.loader7:before {
  content: '';
  margin: 0 25%;
  background: #83988e;
  clip-path: polygon(97.55% 65.45%, 50% 100%, 2.45% 65.45%, 20.61% 9.55%, 79.39% 9.55%);
  transform-origin: bottom;
  animation:
    l7-0 0.5s linear infinite,
    l7-1 3s steps(6) infinite;
}
@keyframes l7-0 {
  0% {
    rotate: -36deg;
  }
  to {
    rotate: 36deg;
  }
}
@keyframes l7-1 {
  0% {
    translate: -174% 0;
  }
  to {
    translate: 174% 0;
  }
}`,
    `
    .loader8 {
  display: inline-grid;
  width: 80px;
  aspect-ratio: 2;
  box-shadow: 0 5px #574951;
  overflow: hidden;
}
.loader8:before,
.loader8:after {
  content: '';
  grid-area: 1/1;
  margin: 0 25%;
  background: #83988e;
  clip-path: polygon(97.55% 65.45%, 50% 100%, 2.45% 65.45%, 20.61% 9.55%, 79.39% 9.55%);
  transform-origin: bottom;
  animation:
    l8-0 0.5s linear infinite,
    l8-1 4s steps(8) infinite;
}
.loader8:after {
  animation-direction: reverse;
  animation-delay:
    0s,
    -1.5s;
}
@keyframes l8-0 {
  0% {
    rotate: -36deg;
  }
  to {
    rotate: 36deg;
  }
}
@keyframes l8-1 {
  0% {
    translate: -232% 0;
  }
  to {
    translate: 232% 0;
  }
}`,
    `
    .loader9 {
  display: inline-flex;
  width: 90px;
  aspect-ratio: 2;
  animation: l9-0 1s linear infinite;
}
.loader9:before,
.loader9:after {
  content: '';
  flex: 1;
  background: #83988e;
  clip-path: polygon(
    100% 50%,
    81.17% 89.09%,
    38.87% 98.75%,
    4.95% 71.69%,
    4.95% 28.31%,
    38.87% 1.25%,
    81.17% 10.91%
  );
  animation: l9-1 1s linear infinite;
  transform-origin: right;
}
.loader9:after {
  scale: -1 1;
  translate: -100% 0;
  animation-direction: reverse;
}
@keyframes l9-0 {
  0% {
    translate: 0 -21.5%;
  }
  to {
    translate: 0 21.5%;
  }
}
@keyframes l9-1 {
  0% {
    rotate: -25.7deg;
  }
  to {
    rotate: 25.7deg;
  }
}`,
    `
    .loader10 {
  display: inline-flex;
  width: 90px;
  aspect-ratio: 2;
  animation: l10-0 1s linear infinite;
}
.loader10:before,
.loader10:after {
  content: '';
  flex: 1;
  background: #574951;
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  animation: l10-1 1s linear infinite;
  transform-origin: right;
}
.loader10:after {
  scale: -1 1;
  translate: -100% 0;
  animation-direction: reverse;
}
@keyframes l10-0 {
  0% {
    translate: 0 -35.35%;
  }
  to {
    translate: 0 35.35%;
  }
}
@keyframes l10-1 {
  0% {
    rotate: -45deg;
  }
  to {
    rotate: 45deg;
  }
}`,
    `
    .loader11 {
  display: inline-flex;
  width: 90px;
  aspect-ratio: 2;
  animation: l11-0 1s linear infinite;
}
.loader11:before,
.loader11:after {
  content: '';
  flex: 1;
  background: #574951;
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  animation: l11-1 1s linear infinite;
  transform-origin: right;
}
.loader11:after {
  scale: -1.6 1.6;
  translate: -100% 0;
  background: #83988e;
  clip-path: polygon(
    100% 50%,
    81.17% 89.09%,
    38.87% 98.75%,
    4.95% 71.69%,
    4.95% 28.31%,
    38.87% 1.25%,
    81.17% 10.91%
  );
  animation: l11-2 1s linear infinite;
}
@keyframes l11-0 {
  0% {
    translate: 0 -35.35%;
  }
  to {
    translate: 0 35.35%;
  }
}
@keyframes l11-1 {
  0% {
    rotate: -45deg;
  }
  to {
    rotate: 45deg;
  }
}
@keyframes l11-2 {
  0% {
    rotate: 25.7deg;
  }
  to {
    rotate: -25.7deg;
  }
}`,
    `
    .loader12 {
  display: inline-grid;
  width: 30px;
  aspect-ratio: 1;
  background: #574951;
  animation:
    l12-0 4s steps(4) infinite,
    l12-1 6s linear infinite;
}
.loader12:before,
.loader12:after {
  content: "";
  grid-area: 1/1;
  background: #83988E;
  clip-path: polygon(100% 50%,65.45% 97.55%,9.55% 79.39%,9.55% 20.61%,65.45% 2.45%);
  transform-origin: right;
  translate: -100% 50%;
  scale: 1.7;
  animation: l12-2 1s linear infinite;
}
.loader12:after {
  clip-path: polygon(90.45% 79.39%,34.55% 97.55%,0% 50%,34.55% 2.45%,90.45% 20.61%);
  transform-origin: left;
  translate: 100% -50%;
}
@keyframes l12-0 {
  to{rotate: 1turn}
}
@keyframes l12-1 {
  to{transform: rotate(1turn)}
}
@keyframes l12-2 {
  0%{rotate:  36deg}
  to{rotate: -126deg}
}
`,
  ],
  progress: [
    `
    .loader1 {
  width: 120px;
  height: 20px;
  background: linear-gradient(#000 0 0) 0/0% no-repeat #ddd;
  animation: l1 2s infinite linear;
}
@keyframes l1 {
  100% {
    background-size: 100%;
  }
}`,
    `
    .loader2 {
  width: 120px;
  height: 20px;
  border-radius: 20px;
  background: linear-gradient(orange 0 0) 0/0% no-repeat lightblue;
  animation: l2 2s infinite steps(10);
}
@keyframes l2 {
  100% {
    background-size: 110%;
  }
}`,
    `
    .loader3 {
  width: 120px;
  height: 20px;
  border-radius: 20px;
  background:
    repeating-linear-gradient(135deg, #f03355 0 10px, #ffa516 0 20px) 0/0% no-repeat,
    repeating-linear-gradient(135deg, #ddd 0 10px, #eee 0 20px) 0/100%;
  animation: l3 2s infinite;
}
@keyframes l3 {
  100% {
    background-size: 100%;
  }
}`,
    `
    .loader4 {
  width: 120px;
  height: 20px;
  mask: linear-gradient(90deg, #000 70%, #0000 0) 0/20%;
  -webkit-mask: linear-gradient(90deg, #000 70%, #0000 0) 0/20%;
  background: linear-gradient(#000 0 0) 0/0% no-repeat #ddd;
  animation: l4 2s infinite steps(6);
}
@keyframes l4 {
  100% {
    background-size: 120%;
  }
}`,
    `
    .loader5 {
  width: 80px;
  height: 40px;
  color: #000;
  border: 2px solid currentColor;
  border-right-color: transparent;
  padding: 3px;
  background: repeating-linear-gradient(90deg, currentColor 0 10px, #0000 0 15px) 0/0% no-repeat
    content-box content-box;
  position: relative;
  box-sizing: border-box;
  animation: l5 2s infinite steps(6);
}
.loader5::before {
  content: '';
  position: absolute;
  top: -2px;
  bottom: -2px;
  left: 100%;
  width: 10px;
  background:
    linear-gradient(
        #0000 calc(50% - 7px),
        currentColor 0 calc(50% - 5px),
        #0000 0 calc(50% + 5px),
        currentColor 0 calc(50% + 7px),
        #0000 0
      )
      left / 100% 100%,
    linear-gradient(currentColor calc(50% - 5px), #0000 0 calc(50% + 5px), currentColor 0) left /
      2px 100%,
    linear-gradient(#0000 calc(50% - 5px), currentColor 0 calc(50% + 5px), #0000 0) right/2px 100%;
  background-repeat: no-repeat;
}
@keyframes l5 {
  100% {
    background-size: 120%;
  }
}`,
    `
    .loader6 {
  width: 120px;
  height: 22px;
  border-radius: 20px;
  color: #514b82;
  border: 2px solid;
  position: relative;
}
.loader6::before {
  content: '';
  position: absolute;
  margin: 2px;
  inset: 0 100% 0 0;
  border-radius: inherit;
  background: currentColor;
  animation: l6 2s infinite;
}
@keyframes l6 {
  100% {
    inset: 0;
  }
}`,
    `
    .loader7 {
  width: 120px;
  height: 24px;
  mask:
    radial-gradient(circle closest-side, #000 94%, #0000) 0 0/25% 100%,
    linear-gradient(#000 0 0) center/calc(100% - 12px) calc(100% - 12px) no-repeat;
  -webkit-mask:
    radial-gradient(circle closest-side, #000 94%, #0000) 0 0/25% 100%,
    linear-gradient(#000 0 0) center/calc(100% - 12px) calc(100% - 12px) no-repeat;
  background: linear-gradient(#25b09b 0 0) 0/0% no-repeat #ddd;
  animation: l7 2s infinite linear;
}
@keyframes l7 {
  100% {
    background-size: 100%;
  }
}`,
    `
    .loader8 {
  width: 60px;
  aspect-ratio: 1;
  border-radius: 50%;
  mask: linear-gradient(0deg, #000 55%, #0000 0) bottom/100% 18.18%;
  -webkit-mask: linear-gradient(0deg, #000 55%, #0000 0) bottom/100% 18.18%;
  background: linear-gradient(#f03355 0 0) bottom/100% 0% no-repeat #ddd;
  animation: l8 2s infinite steps(7);
}
@keyframes l8 {
  100% {
    background-size: 100% 115%;
  }
}`,
    `
    .loader9 {
  --r1: 154%;
  --r2: 68.5%;
  width: 60px;
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    radial-gradient(var(--r1) var(--r2) at top, #0000 79.5%, #269af2 80%),
    radial-gradient(var(--r1) var(--r2) at bottom, #269af2 79.5%, #0000 80%),
    radial-gradient(var(--r1) var(--r2) at top, #0000 79.5%, #269af2 80%), #ccc;
  background-size: 50.5% 220%;
  background-position:
    -100% 0%,
    0% 0%,
    100% 0%;
  background-repeat: no-repeat;
  animation: l9 2s infinite linear;
}
@keyframes l9 {
  33% {
    background-position:
      0% 33%,
      100% 33%,
      200% 33%;
  }
  66% {
    background-position:
      -100% 66%,
      0% 66%,
      100% 66%;
  }
  100% {
    background-position:
      0% 100%,
      100% 100%,
      200% 100%;
  }
}`,
    `
    .loader10 {
  width: 120px;
  height: 60px;
  border-radius: 200px 200px 0 0;
  mask: repeating-radial-gradient(
    farthest-side at bottom,
    #0000 0,
    #000 1px 12%,
    #0000 calc(12% + 1px) 20%
  );
  -webkit-mask: repeating-radial-gradient(
    farthest-side at bottom,
    #0000 0,
    #000 1px 12%,
    #0000 calc(12% + 1px) 20%
  );
  background: radial-gradient(farthest-side at bottom, #514b82 0 95%, #0000 0) bottom/0% 0%
    no-repeat #ddd;
  animation: l10 2s infinite steps(6);
}
@keyframes l10 {
  100% {
    background-size: 120% 120%;
  }
}`,
    `
    .loader11 {
  width: 60px;
  aspect-ratio: 1;
  border-radius: 50%;
  animation: l11 2s infinite;
}
@keyframes l11 {
  0% {
    background: conic-gradient(#f03355 0, #0000 0);
  }
  12.5% {
    background: conic-gradient(#f03355 45deg, #0000 46deg);
  }
  25% {
    background: conic-gradient(#f03355 90deg, #0000 91deg);
  }
  37.5% {
    background: conic-gradient(#f03355 135deg, #0000 136deg);
  }
  50% {
    background: conic-gradient(#f03355 180deg, #0000 181deg);
  }
  62.5% {
    background: conic-gradient(#f03355 225deg, #0000 226deg);
  }
  75% {
    background: conic-gradient(#f03355 270deg, #0000 271deg);
  }
  87.5% {
    background: conic-gradient(#f03355 315deg, #0000 316deg);
  }
  100% {
    background: conic-gradient(#f03355 360deg, #0000 360deg);
  }
}`,
    `
    .loader12 {
  width: 120px;
  height: 20px;
  background:
    linear-gradient(#000 50%, #0000 0),
    linear-gradient(#0000 50%, #000 0),
    linear-gradient(#000 50%, #0000 0),
    linear-gradient(#0000 50%, #000 0),
    linear-gradient(#000 50%, #0000 0),
    linear-gradient(#0000 50%, #000 0) #ddd;
  background-size: calc(100% / 6 + 1px) 200%;
  background-repeat: no-repeat;
  animation: l12 2s infinite;
}
@keyframes l12 {
  0% {
    background-position:
      calc(0 * 100% / 5) 100%,
      calc(1 * 100% / 5) 0%,
      calc(2 * 100% / 5) 100%,
      calc(3 * 100% / 5) 0%,
      calc(4 * 100% / 5) 100%,
      calc(5 * 100% / 5) 0%;
  }
  16.67% {
    background-position:
      calc(0 * 100% / 5) 0%,
      calc(1 * 100% / 5) 0%,
      calc(2 * 100% / 5) 100%,
      calc(3 * 100% / 5) 0%,
      calc(4 * 100% / 5) 100%,
      calc(5 * 100% / 5) 0%;
  }
  33.33% {
    background-position:
      calc(0 * 100% / 5) 0%,
      calc(1 * 100% / 5) 100%,
      calc(2 * 100% / 5) 100%,
      calc(3 * 100% / 5) 0%,
      calc(4 * 100% / 5) 100%,
      calc(5 * 100% / 5) 0%;
  }
  50% {
    background-position:
      calc(0 * 100% / 5) 0%,
      calc(1 * 100% / 5) 100%,
      calc(2 * 100% / 5) 0%,
      calc(3 * 100% / 5) 0%,
      calc(4 * 100% / 5) 100%,
      calc(5 * 100% / 5) 0%;
  }
  66.67% {
    background-position:
      calc(0 * 100% / 5) 0%,
      calc(1 * 100% / 5) 100%,
      calc(2 * 100% / 5) 0%,
      calc(3 * 100% / 5) 100%,
      calc(4 * 100% / 5) 100%,
      calc(5 * 100% / 5) 0%;
  }
  83.33% {
    background-position:
      calc(0 * 100% / 5) 0%,
      calc(1 * 100% / 5) 100%,
      calc(2 * 100% / 5) 0%,
      calc(3 * 100% / 5) 100%,
      calc(4 * 100% / 5) 0%,
      calc(5 * 100% / 5) 0%;
  }
  100% {
    background-position:
      calc(0 * 100% / 5) 0%,
      calc(1 * 100% / 5) 100%,
      calc(2 * 100% / 5) 0%,
      calc(3 * 100% / 5) 100%,
      calc(4 * 100% / 5) 0%,
      calc(5 * 100% / 5) 100%;
  }
}`,
    `
    .loader13 {
  width: 124px;
  height: 24px;
  mask:
    conic-gradient(from 135deg at top, #0000, #000 0.5deg 90deg, #0000 90.5deg) 0 0,
    conic-gradient(from -45deg at bottom, #0000, #000 0.5deg 90deg, #0000 90.5deg) 0 100%;
  -webkit-mask:
    conic-gradient(from 135deg at top, #0000, #000 0.5deg 90deg, #0000 90.5deg) 0 0,
    conic-gradient(from -45deg at bottom, #0000, #000 0.5deg 90deg, #0000 90.5deg) 0 100%;
  mask-size: 25% 50%;
  -webkit-mask-size: 25% 50%;
  mask-repeat: repeat-x;
  -webkit-mask-repeat: repeat-x;
  background: linear-gradient(#25b09b 0 0) left/0% 100% no-repeat #ddd;
  animation: l13 2s infinite linear;
}
@keyframes l13 {
  100% {
    background-size: 100% 100%;
  }
}`,
    `
    .loader14 {
  width: 60px;
  height: 50px;
  --m: no-repeat linear-gradient(90deg, #000 70%, #0000 0);
  mask:
    var(--m) calc(0 * 100% / 4) 100% / calc(100% / 5) calc(1 * 100% / 5),
    var(--m) calc(1 * 100% / 4) 100% / calc(100% / 5) calc(2 * 100% / 5),
    var(--m) calc(2 * 100% / 4) 100% / calc(100% / 5) calc(3 * 100% / 5),
    var(--m) calc(3 * 100% / 4) 100% / calc(100% / 5) calc(4 * 100% / 5),
    var(--m) calc(4 * 100% / 4) 100% / calc(100% / 5) calc(5 * 100% / 5);
  -webkit-mask:
    var(--m) calc(0 * 100% / 4) 100% / calc(100% / 5) calc(1 * 100% / 5),
    var(--m) calc(1 * 100% / 4) 100% / calc(100% / 5) calc(2 * 100% / 5),
    var(--m) calc(2 * 100% / 4) 100% / calc(100% / 5) calc(3 * 100% / 5),
    var(--m) calc(3 * 100% / 4) 100% / calc(100% / 5) calc(4 * 100% / 5),
    var(--m) calc(4 * 100% / 4) 100% / calc(100% / 5) calc(5 * 100% / 5);
  background: linear-gradient(#514b82 0 0) left/0% 100% no-repeat #ddd;
  animation: l14 2s infinite steps(6);
}
@keyframes l14 {
  100% {
    background-size: 120% 100%;
  }
}`,
    `
    .loader15 {
  width: 80px;
  aspect-ratio: 1.154;
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  --c: no-repeat linear-gradient(#f03355 0 0);
  background: var(--c), var(--c), var(--c), var(--c), var(--c);
  background-size: 100% calc(100% / 5 + 1px);
  animation: l15 2s infinite;
}
@keyframes l15 {
  0% {
    background-position:
      0 calc(-2 * 100% / 4),
      0 calc(-2 * 100% / 4),
      0 calc(-2 * 100% / 4),
      0 calc(-2 * 100% / 4),
      0 calc(-2 * 100% / 4);
  }
  20% {
    background-position:
      0 calc(4 * 100% / 4),
      0 calc(-2 * 100% / 4),
      0 calc(-2 * 100% / 4),
      0 calc(-2 * 100% / 4),
      0 calc(-2 * 100% / 4);
  }
  40% {
    background-position:
      0 calc(4 * 100% / 4),
      0 calc(3 * 100% / 4),
      0 calc(-2 * 100% / 4),
      0 calc(-2 * 100% / 4),
      0 calc(-2 * 100% / 4);
  }
  60% {
    background-position:
      0 calc(4 * 100% / 4),
      0 calc(3 * 100% / 4),
      0 calc(2 * 100% / 4),
      0 calc(-2 * 100% / 4),
      0 calc(-2 * 100% / 4);
  }
  80% {
    background-position:
      0 calc(4 * 100% / 4),
      0 calc(3 * 100% / 4),
      0 calc(2 * 100% / 4),
      0 calc(1 * 100% / 4),
      0 calc(-2 * 100% / 4);
  }
  100% {
    background-position:
      0 calc(4 * 100% / 4),
      0 calc(3 * 100% / 4),
      0 calc(2 * 100% / 4),
      0 calc(1 * 100% / 4),
      0 calc(0 * 100% / 4);
  }
}`,
    `
    .loader16 {
  height: 4px;
  width: 130px;
  --c: no-repeat linear-gradient(#6100ee 0 0);
  background: var(--c), var(--c), #d7b8fc;
  background-size: 60% 100%;
  animation: l16 3s infinite;
}
@keyframes l16 {
  0% {
    background-position:
      -150% 0,
      -150% 0;
  }
  66% {
    background-position:
      250% 0,
      -150% 0;
  }
  100% {
    background-position:
      250% 0,
      250% 0;
  }
}`,
    `
    .loader17 {
  width: 120px;
  height: 20px;
  mask: radial-gradient(circle closest-side, #000 94%, #0000) left/20% 100%;
  -webkit-mask: radial-gradient(circle closest-side, #000 94%, #0000) left/20% 100%;
  background: linear-gradient(#000 0 0) left/0% 100% no-repeat #ddd;
  animation: l17 2s infinite steps(6);
}
@keyframes l17 {
  100% {
    background-size: 120% 100%;
  }
}`,
    `
    .loader18 {
  width: 60px;
  aspect-ratio: 1;
  border: 15px solid #ddd;
  border-radius: 50%;
  position: relative;
  transform: rotate(45deg);
}
.loader18::before {
  content: '';
  position: absolute;
  inset: -15px;
  border-radius: 50%;
  border: 15px solid #514b82;
  animation: l18 2s infinite linear;
}
@keyframes l18 {
  0% {
    clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
  }
  25% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
  }
  50% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
  }
  75% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
  }
  100% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
  }
}`,
    `
    .loader19 {
  width: 60px;
  aspect-ratio: 1;
  background: linear-gradient(#dc1818 0 0) bottom/100% 0% no-repeat #ccc;
  mask:
    radial-gradient(circle at 60% 65%, #000 62%, #0000 65%) top left,
    radial-gradient(circle at 40% 65%, #000 62%, #0000 65%) top right,
    linear-gradient(to bottom left, #000 42%, #0000 43%) bottom left,
    linear-gradient(to bottom right, #000 42%, #0000 43%) bottom right;
  -webkit-mask:
    radial-gradient(circle at 60% 65%, #000 62%, #0000 65%) top left,
    radial-gradient(circle at 40% 65%, #000 62%, #0000 65%) top right,
    linear-gradient(to bottom left, #000 42%, #0000 43%) bottom left,
    linear-gradient(to bottom right, #000 42%, #0000 43%) bottom right;
  mask-size: 50% 50%;
  -webkit-mask-size: 50% 50%;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  animation: l19 2s infinite linear;
}
@keyframes l19 {
  90%,
  100% {
    background-size: 100% 100%;
  }
}`,
    `
    .loader20 {
  --s: 40px;
  height: calc(var(--s) * 0.9);
  width: calc(var(--s) * 5);
  --v1: transparent, #000 0.5deg 108deg, #0000 109deg;
  --v2: transparent, #000 0.5deg 36deg, #0000 37deg;
  mask:
    conic-gradient(from 54deg at calc(var(--s) * 0.68) calc(var(--s) * 0.57), var(--v1)),
    conic-gradient(from 90deg at calc(var(--s) * 0.02) calc(var(--s) * 0.35), var(--v2)),
    conic-gradient(from 126deg at calc(var(--s) * 0.5) calc(var(--s) * 0.7), var(--v1)),
    conic-gradient(from 162deg at calc(var(--s) * 0.5) 0, var(--v2));

  -webkit-mask:
    conic-gradient(from 54deg at calc(var(--s) * 0.68) calc(var(--s) * 0.57), var(--v1)),
    conic-gradient(from 90deg at calc(var(--s) * 0.02) calc(var(--s) * 0.35), var(--v2)),
    conic-gradient(from 126deg at calc(var(--s) * 0.5) calc(var(--s) * 0.7), var(--v1)),
    conic-gradient(from 162deg at calc(var(--s) * 0.5) 0, var(--v2));
  mask-size: var(--s) var(--s);
  -webkit-mask-size: var(--s) var(--s);
  -webkit-mask-composite: xor, destination-over;
  mask-composite: exclude, add;
  mask-repeat: repeat-x;
  -webkit-mask-repeat: repeat-x;
  background: linear-gradient(#ffb940 0 0) left/0% 100% #ddd no-repeat;
  animation: l20 2s infinite linear;
}
@keyframes l20 {
  90%,
  100% {
    background-size: 100% 100%;
  }
}
`,
  ],
  wobbling: [
    `
    .loader1 {
  width: 120px;
  height: 20px;
  background: linear-gradient(#000 0 0) left/20px 20px no-repeat #ddd;
  animation: l1 1s infinite linear;
}
@keyframes l1 {
  50% {
    background-position: right;
  }
}`,
    `
    .loader2 {
  width: 120px;
  height: 20px;
  border-radius: 20px;
  background: radial-gradient(farthest-side, orange 94%, #0000) left/20px 20px no-repeat lightblue;
  animation: l2 1s infinite linear;
}
@keyframes l2 {
  50% {
    background-position: right;
  }
}`,
    `
    .loader3 {
  width: 120px;
  height: 22px;
  border-radius: 40px;
  color: #514b82;
  border: 2px solid;
  position: relative;
}
.loader3::before {
  content: '';
  position: absolute;
  margin: 2px;
  width: 25%;
  top: 0;
  bottom: 0;
  left: 0;
  border-radius: inherit;
  background: currentColor;
  animation: l3 1s infinite linear;
}
@keyframes l3 {
  50% {
    left: 100%;
    transform: translateX(calc(-100% - 4px));
  }
}`,
    `
    .loader4 {
  width: 20px;
  aspect-ratio: 1;
  background: #25b09b;
  box-shadow: 0 0 60px 15px #25b09b;
  transform: translate(-80px);
  clip-path: inset(0);
  animation:
    l4-1 0.5s ease-in-out infinite alternate,
    l4-2 1s ease-in-out infinite;
}
@keyframes l4-1 {
  100% {
    transform: translateX(80px);
  }
}
@keyframes l4-2 {
  33% {
    clip-path: inset(0 0 0 -100px);
  }
  50% {
    clip-path: inset(0 0 0 0);
  }
  83% {
    clip-path: inset(0 -100px 0 0);
  }
}`,
    `
    .loader5 {
  width: 120px;
  height: 20px;
  clip-path: polygon(
    10px 0,
    calc(100% - 10px) 0,
    100% 50%,
    calc(100% - 10px) 100%,
    10px 100%,
    0 50%
  );
  background:
    conic-gradient(from 135deg at top, #f03355 90deg, #0000 0) top left,
    conic-gradient(from -45deg at bottom, #f03355 90deg, #0000 0) bottom left,
    #ccc;
  background-size: 20px 50%;
  background-repeat: no-repeat;
  animation: l5 1s infinite linear;
}
@keyframes l5 {
  50% {
    background-position:
      top right,
      bottom right;
  }
}`,
    `
    .loader6 {
  width: 120px;
  height: 21px;
  background: linear-gradient(#000 0 0) left/10px 100% no-repeat #ddd;
  animation: l6 1s infinite cubic-bezier(0, 0.2, 1, 1);
  position: relative;
}
.loader6:before,
.loader6:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 7px;
  background: linear-gradient(#000 0 0) left/10px 100% no-repeat #ddd;
  animation: inherit;
}
.loader6:before {
  top: 0;
  animation-timing-function: cubic-bezier(0, 0, 1, 1);
}
.loader6:after {
  bottom: 0;
  animation-timing-function: cubic-bezier(0, 0.4, 1, 1);
}
@keyframes l6 {
  50% {
    background-position: right;
  }
}`,
    `
    .loader7 {
  width: 20px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(at 30% 30%, #0000, #000a) red;
  position: relative;
  left: 0;
  top: 0;
  animation:
    l7-1 0.6s,
    l7-2 0.3s;
  animation-timing-function: cubic-bezier(0.5, -200, 0.5, 200);
  animation-iteration-count: infinite;
}
@keyframes l7-1 {
  100% {
    left: 1px;
  }
}
@keyframes l7-2 {
  100% {
    top: 0.3px;
  }
}`,
    `
    .loader8 {
  width: 20px;
  aspect-ratio: 1;
  border-radius: 50%;
  position: relative;
  transform-origin: 50% -200%;
  background: radial-gradient(at 30% 30%, #0000, #000a) red;
  animation: l8 1s cubic-bezier(0.5, -200, 0.5, 200) infinite;
}
.loader8:before {
  content: '';
  position: absolute;
  inset: -200% 8px 100%;
  background: #ddd;
}
@keyframes l8 {
  100% {
    transform: rotate(1deg);
  }
}`,
    `
    .loader9 {
  width: 80px;
  height: 20px;
  color: #514b82;
  background:
    radial-gradient(farthest-side, currentColor 98%, #0000) left / 20px 20px,
    radial-gradient(farthest-side, currentColor 98%, #0000) right / 20px 20px,
    radial-gradient(farthest-side, #000 98%, #0000) center/5px 5px,
    linear-gradient(currentColor 0 0) center/100% 2px;
  background-repeat: no-repeat;
  animation: l9 1s cubic-bezier(0.5, -150, 0.5, 150) infinite;
}
@keyframes l9 {
  100% {
    transform: rotate(1deg);
  }
}`,
    `
    .loader10 {
  width: calc(100px - 14px);
  height: 50px;
  border-radius: 50px;
  background:
    radial-gradient(farthest-side, #0000 calc(100% - 15px), #ccc calc(100% - 14px) 99%, #0000) left,
    radial-gradient(farthest-side, #0000 calc(100% - 15px), #ccc calc(100% - 14px) 99%, #0000) right;
  background-size: calc(50% + 7px) 100%;
  background-repeat: no-repeat;
  position: relative;
  animation: l10-0 1s infinite linear;
}
.loader10:before {
  content: '';
  position: absolute;
  inset: 0;
  margin: auto;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f03355;
  transform-origin: -14px 50%;
  animation: l10-1 0.5s infinite linear;
}
@keyframes l10-0 {
  0%,
  49.99% {
    transform: scaleX(1);
  }
  50%,
  100% {
    transform: scaleX(-1);
  }
}
@keyframes l10-1 {
  100% {
    transform: rotate(1turn);
  }
}`,
    `
    .loader11 {
  width: 30px;
  aspect-ratio: 1;
  display: grid;
  transform: translateY(100%);
}
.loader11::before,
.loader11::after {
  content: '';
  grid-area: 1/1;
  border-radius: 50%;
  transform-origin: bottom;
  position: relative;
}
.loader11::before {
  background: radial-gradient(at 30% 30%, #0000, #000a) red;
  transform: scaleY(0.65);
  top: 0;
  animation: l11-1, l11-2;
  animation-duration: 2s;
  animation-timing-function: cubic-bezier(0, 400, 1, 400), ease;
  animation-iteration-count: infinite;
}
.loader11::after {
  background: #ccc;
  filter: blur(8px);
  transform: scaleY(0.3) translate(0px, 0px);
  left: 0;
  animation: l11-3 2s cubic-bezier(0, 400, 1, 400) infinite;
}
@keyframes l11-1 {
  100% {
    top: -0.2px;
  }
}
@keyframes l11-2 {
  4%,
  96% {
    transform: scaleY(1);
  }
}
@keyframes l11-3 {
  100% {
    transform: scaleY(0.3) translate(0.1px, -0.1px);
  }
}`,
    `
    .loader12 {
  width: 100px;
  height: 60px;
  display: flex;
  animation: l12-0 2s infinite linear;
}
.loader12::before,
.loader12::after {
  content: '';
  flex: 4;
  background:
    radial-gradient(at 50% 20%, #0000, #000a) bottom left/20px 20px repeat-x,
    linear-gradient(red 0 0) bottom/100% 20px no-repeat #ddd;
  mask:
    repeating-linear-gradient(90deg, #000 0 4px, #0000 0 20px) 8px 0,
    radial-gradient(farthest-side, #000 90%, #0000) left bottom/20px 20px repeat-x;
  -webkit-mask:
    repeating-linear-gradient(90deg, #000 0 4px, #0000 0 20px) 8px 0,
    radial-gradient(farthest-side, #000 90%, #0000) left bottom/20px 20px repeat-x;
}
.loader12::after {
  flex: 1;
  transform-origin: top;
  animation: l12-1 1s cubic-bezier(0, 20, 1, 20) infinite;
}
@keyframes l12-0 {
  0%,
  49.9% {
    transform: scaleX(1);
  }
  50%,
  100% {
    transform: scaleX(-1);
  }
}
@keyframes l12-1 {
  100% {
    transform: rotate(-2deg);
  }
}`,
    `
    .loader13 {
  width: 20px;
  aspect-ratio: 1;
  animation: l13-0 2s linear infinite;
}
.loader13::before,
.loader13::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(at 30% 30%, #0000, #000a) red;
  animation: l13-1 0.5s cubic-bezier(0.5, -500, 0.5, 500) infinite;
}
.loader13::after {
  animation-delay: -0.15s;
}
@keyframes l13-0 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes l13-1 {
  100% {
    transform: translate(0.5px);
  }
}`,
    `
    .loader14 {
  width: 80px;
  aspect-ratio: 1;
  background:
    radial-gradient(
        farthest-side at top,
        #0000 calc(100% - 21px),
        lightblue calc(100% - 20px) 99%,
        #0000
      )
      bottom/100% 50%,
    radial-gradient(farthest-side, lightblue 94%, #0000) left / 20px 20px,
    radial-gradient(farthest-side, lightblue 94%, #0000) right/20px 20px;
  background-repeat: no-repeat;
  position: relative;
}
.loader14::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  inset: auto 0 0;
  margin: auto;
  border-radius: 50%;
  background: orange;
  transform-origin: 50% -20px;
  animation: l14 1s infinite cubic-bezier(0.5, 623, 0.5, -623);
}
@keyframes l14 {
  100% {
    transform: rotate(0.5deg);
  }
}`,
    `
    .loader15 {
  height: 80px;
  width: 20px;
  color: #514b82;
  background:
    radial-gradient(farthest-side, currentColor 94%, #0000) top/8px 8px,
    linear-gradient(currentColor 0 0) top/4px 70%,
    conic-gradient(from -30deg at bottom, #0000, currentColor 2deg 58deg, #0000 60deg) bottom / 100%
      20px,
    conic-gradient(from 150deg at top, #0000, currentColor 2deg 58deg, #0000 60deg) bottom 20px left
      0/100% 20px;
  background-repeat: no-repeat;
  transform-origin: 50% 4px;
  animation: l15 2s infinite cubic-bezier(0.5, 300, 0.5, -300);
}
@keyframes l15 {
  100% {
    transform: rotate(0.5deg);
  }
}`,
    `
    .loader16 {
  width: 80px;
  height: 50px;
  background:
    radial-gradient(farthest-side, #0000 calc(100% - 15px), #ccc calc(100% - 14px) 99%, #0000)
      center/50px 100%,
    linear-gradient(#ccc 0 0) bottom/100% 14px;
  background-repeat: no-repeat;
  position: relative;
  animation: l16-0 2s -0.5s infinite linear;
}
.loader16:before {
  content: '';
  position: absolute;
  inset: auto auto 2px 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f03355;
  transform-origin: 50% -14px;
  animation: l16-1 0.5s infinite linear alternate;
}
@keyframes l16-0 {
  0%,
  49.99% {
    transform: scaleX(1);
  }
  50%,
  100% {
    transform: scaleX(-1);
  }
}
@keyframes l16-1 {
  0% {
    transform: translate(0) rotate(0);
  }
  50% {
    transform: translate(34px) rotate(0);
  }
  100% {
    transform: translate(34px) rotate(-180deg);
  }
}`,
    `
    .loader17 {
  height: 20px;
  width: 80px;
  transform: rotate(-30deg);
  background: radial-gradient(farthest-side, #f03355 90%, #0000) left bottom/15px 15px no-repeat
    #ddd;
  animation:
    l17-0 2s infinite alternate linear,
    l17-1 2s infinite cubic-bezier(0.75, 0, 1, 0.6);
}
@keyframes l17-0 {
  50% {
    transform: rotate(30deg);
  }
}
@keyframes l17-1 {
  50% {
    background-position: right bottom;
  }
}`,
    `
    .loader18 {
  height: 40px;
  aspect-ratio: 2;
  --c: no-repeat linear-gradient(#25b09b 0 0);
  background: var(--c), var(--c), var(--c), var(--c);
  background-size: 26% 50%;
  animation: l18 1s infinite cubic-bezier(0.5, 150, 0.5, -150);
}
@keyframes l18 {
  0% {
    background-position:
      calc(0 * 100% / 3) 50%,
      calc(1 * 100% / 3) 50%,
      calc(2 * 100% / 3) 50%,
      calc(3 * 100% / 3) 50%;
  }
  100% {
    background-position:
      calc(0 * 100% / 3) 51%,
      calc(1 * 100% / 3) 50.5%,
      calc(2 * 100% / 3) 49.5%,
      calc(3 * 100% / 3) 49%;
  }
}`,
    `
    .loader19 {
  height: 30px;
  aspect-ratio: 3;
  --c: no-repeat linear-gradient(#514b82 0 0);
  background:
    var(--c) calc(0 * 100% / 5) 50%,
    var(--c) calc(1 * 100% / 5) 50%,
    var(--c) calc(2 * 100% / 5) 50%,
    var(--c) calc(3 * 100% / 5) 50%,
    var(--c) calc(4 * 100% / 5) 50%,
    var(--c) calc(5 * 100% / 5) 50%;
  background-size: calc(100% / 6 + 1px) 50%;
  animation: l19 1s infinite cubic-bezier(0.5, 170, 0.5, -170);
}
@keyframes l19 {
  14.28% {
    background-position:
      calc(0 * 100% / 5) 51%,
      calc(1 * 100% / 5) 50%,
      calc(2 * 100% / 5) 50%,
      calc(3 * 100% / 5) 50%,
      calc(4 * 100% / 5) 50%,
      calc(5 * 100% / 5) 50%;
  }
  28.57% {
    background-position:
      calc(0 * 100% / 5) 50%,
      calc(1 * 100% / 5) 51%,
      calc(2 * 100% / 5) 50%,
      calc(3 * 100% / 5) 50%,
      calc(4 * 100% / 5) 50%,
      calc(5 * 100% / 5) 50%;
  }
  42.85% {
    background-position:
      calc(0 * 100% / 5) 50%,
      calc(1 * 100% / 5) 50%,
      calc(2 * 100% / 5) 51%,
      calc(3 * 100% / 5) 50%,
      calc(4 * 100% / 5) 50%,
      calc(5 * 100% / 5) 50%;
  }
  57.14% {
    background-position:
      calc(0 * 100% / 5) 50%,
      calc(1 * 100% / 5) 50%,
      calc(2 * 100% / 5) 50%,
      calc(3 * 100% / 5) 51%,
      calc(4 * 100% / 5) 50%,
      calc(5 * 100% / 5) 50%;
  }
  71.42% {
    background-position:
      calc(0 * 100% / 5) 50%,
      calc(1 * 100% / 5) 50%,
      calc(2 * 100% / 5) 50%,
      calc(3 * 100% / 5) 50%,
      calc(4 * 100% / 5) 51%,
      calc(5 * 100% / 5) 50%;
  }
  85.71% {
    background-position:
      calc(0 * 100% / 5) 50%,
      calc(1 * 100% / 5) 50%,
      calc(2 * 100% / 5) 50%,
      calc(3 * 100% / 5) 50%,
      calc(4 * 100% / 5) 50%,
      calc(5 * 100% / 5) 51%;
  }
}`,
    `
    .loader20 {
  height: 60px;
  aspect-ratio: 1;
  position: relative;
}
.loader20::before,
.loader20::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  transform-origin: bottom;
}
.loader20::after {
  background:
    radial-gradient(at 75% 15%, #fffb, #0000 35%),
    radial-gradient(at 80% 40%, #0000, #0008),
    radial-gradient(circle 5px, #fff 94%, #0000),
    radial-gradient(circle 10px, #000 94%, #0000),
    linear-gradient(#f93318 0 0) top / 100% calc(50% - 5px),
    linear-gradient(#fff 0 0) bottom/100% calc(50% - 5px) #000;
  background-repeat: no-repeat;
  animation: l20 1s infinite cubic-bezier(0.5, 120, 0.5, -120);
}
.loader20::before {
  background: #ddd;
  filter: blur(8px);
  transform: scaleY(0.4) translate(-13px, 0px);
}
@keyframes l20 {
  30%,
  70% {
    transform: rotate(0deg);
  }
  49.99% {
    transform: rotate(0.2deg);
  }
  50% {
    transform: rotate(-0.2deg);
  }
}
`,
  ],
  infinity: [
    `
    .loader1 {
  width: 90px;
  height: 14px;
  background: repeating-linear-gradient(90deg, #000 0 calc(25% - 5px), #0000 0 25%)
    left/calc(4 * 100%/3) 100%;
  animation: l1 0.5s infinite linear;
}
@keyframes l1 {
  100% {
    background-position: right;
  }
}`,
    `
.loader2 {
  width: 90px;
  height: 14px;
  background: radial-gradient(circle closest-side, #000 92%, #0000) calc(100% / 3) 0 /
    calc(100% / 4) 100%;
  animation: l2 0.5s infinite linear;
}
@keyframes l2 {
  100% {
    background-position: 0 0;
  }
}`,
    `
.loader3 {
  width: calc(80px / cos(45deg));
  height: 14px;
  background: repeating-linear-gradient(-45deg, #000 0 15px, #0000 0 20px) left/200% 100%;
  animation: l3 2s infinite linear;
}
@keyframes l3 {
  100% {
    background-position: right;
  }
}`,
    `
.loader4 {
  width: calc(80px / cos(45deg));
  height: 14px;
  --c: #000 0 15px, #0000 0 20px;
  background:
    repeating-linear-gradient(135deg, var(--c)) left top,
    repeating-linear-gradient(45deg, var(--c)) left bottom;
  background-size: 200% 50%;
  background-repeat: no-repeat;
  animation: l4 2s infinite linear;
}
@keyframes l4 {
  100% {
    background-position:
      top right,
      bottom right;
  }
}`,
    `
.loader5 {
  width: 90px;
  height: 14px;
  color: #000;
  background:
    radial-gradient(circle 10px at right 7px top 50%, #0000 92%, currentColor),
    radial-gradient(circle 10px at right 0 top 50%, currentColor 92%, #0000);
  background-size: calc(100% / 3) 100%;
  background-position: 50% 0%;
  animation: l5 0.5s infinite linear;
}
@keyframes l5 {
  100% {
    background-position: 0% 0%;
  }
}`,
    `
.loader6 {
  width: 90px;
  height: 14px;
  --c: 50%, #000 90deg, #0000 0;
  background:
    conic-gradient(from 45deg at calc(100% - 7px) var(--c)),
    conic-gradient(from -135deg at 7px var(--c));
  background-position: calc(100% / 3) 0;
  background-size: calc(100% / 4) 100%;
  animation: l6 0.5s infinite linear;
}
@keyframes l6 {
  100% {
    background-position: 0 0;
  }
}`,
    `
.loader7 {
  width: 90px;
  height: 14px;
  color: #000;
  background:
    linear-gradient(90deg, currentColor 50%, #0000 0) repeat-x,
    conic-gradient(from 45deg at right 7px top 50%, currentColor 90deg, #0000 0);
  background-position: calc(100% / 3) 50%;
  background-size:
    calc(100% / 4) 60%,
    calc(100% / 4) 100%;
  animation: l7 0.5s infinite linear;
}
@keyframes l7 {
  100% {
    background-position: 0 50%;
  }
}`,
    `
.loader8 {
  width: 90px;
  height: 12px;
  --c: #000 50%, #0000 0;
  background:
    linear-gradient(90deg, var(--c)) 0 0%,
    linear-gradient(-90deg, var(--c)) 0 50%,
    linear-gradient(90deg, var(--c)) 0 100%;
  background-size: 8px calc(100% / 3);
  background-repeat: repeat-x;
  animation: l8 0.25s infinite linear;
}
@keyframes l8 {
  100% {
    background-position:
      -8px 0%,
      -8px 50%,
      -8px 100%;
  }
}`,
    `
.loader9 {
  width: 90px;
  height: 14px;
  color: #000;
  background:
    linear-gradient(90deg, #0000 16px, currentColor 0 30px, #0000 0),
    radial-gradient(circle closest-side at 68% 50%, currentColor 92%, #0000),
    conic-gradient(from 45deg at calc(100% - 7px) 50%, currentColor 90deg, #0000 0),
    conic-gradient(from -135deg at 7px 50%, currentColor 90deg, #0000 0);
  background-position: 0 0;
  background-size: calc(3 * 100% / 4) 100%;
  background-repeat: repeat-x;
  animation: l9 2s infinite linear;
}
@keyframes l9 {
  100% {
    background-position: -300% 0;
  }
}`,
    `
.loader10 {
  width: 90px;
  height: 12px;
  --c: #000 50%, #0000 0;
  background:
    linear-gradient(90deg, var(--c)) 0 0,
    linear-gradient(-90deg, var(--c)) 0 0;
  background-size: 20px 100%;
  background-repeat: repeat-x;
  animation: l10 1s infinite linear;
}
@keyframes l10 {
  100% {
    background-position:
      -20px 0,
      20px 0;
  }
}`,
    `
.loader11 {
  width: 90px;
  height: 14px;
  --c: #000 92%, #0000;
  background:
    radial-gradient(circle 7px at bottom, var(--c)) 0 0,
    radial-gradient(circle 7px at top, var(--c)) 0 100%;
  background-size: calc(100% / 4) 50%;
  background-repeat: repeat-x;
  animation: l11 1s infinite;
}
@keyframes l11 {
  80%,
  100% {
    background-position:
      calc(100% / 3) 0,
      calc(100% / -3) 100%;
  }
}`,
    `
.loader12 {
  width: 90px;
  height: 14px;
  --c: #000 90deg, #0000 0;
  background:
    conic-gradient(from 135deg at top, var(--c)) 0 0,
    conic-gradient(from -45deg at bottom, var(--c)) 0 100%;
  background-size: calc(100% / 4) 50%;
  background-repeat: repeat-x;
  animation: l12 1s infinite;
}
@keyframes l12 {
  80%,
  100% {
    background-position:
      calc(100% / 3) 0,
      calc(100% / -3) 100%;
  }
}`,
    `
.loader13 {
  width: 90px;
  height: 14px;
  background:
    radial-gradient(circle 7px at bottom, #000 92%, #0000) calc(100% / 2) 0,
    radial-gradient(circle 7px at top, #000 92%, #0000) calc(100% / 2) 100%,
    conic-gradient(from 135deg at top, #000 90deg, #0000 0) 0 0,
    conic-gradient(from -45deg at bottom, #000 90deg, #0000 0) 0 100%;
  background-size: calc(100% / 2) 50%;
  background-repeat: repeat-x;
  animation: l13 3s infinite;
}
@keyframes l13 {
  0% {
    background-position:
      calc(100% / 2) 0,
      calc(100% / 2) 100%,
      0 0,
      0 100%;
  }
  20%,
  30% {
    background-position:
      calc(3 * 100% / 4) 0,
      calc(100% / 4) 100%,
      calc(100% / 4) 0,
      calc(100% / -4) 100%;
  }
  45%,
  55% {
    background-position:
      100% 0,
      0 100%,
      calc(100% / 2) 0,
      calc(100% / -2) 100%;
  }
  70%,
  80% {
    background-position:
      calc(5 * 100% / 4) 0,
      calc(100% / -4) 100%,
      calc(3 * 100% / 4) 0,
      calc(3 * 100% / -4) 100%;
  }
  100% {
    background-position:
      calc(3 * 100% / 2) 0,
      calc(100% / -2) 100%,
      100% 0,
      -100% 100%;
  }
}`,
    `
.loader14 {
  width: 90px;
  height: 14px;
  --c: #000 92%, #0000;
  background:
    radial-gradient(circle closest-side, var(--c)) calc(100% / -4) 0,
    radial-gradient(circle closest-side, var(--c)) calc(100% / 4) 0;
  background-size: calc(100% / 2) 100%;
  animation: l14 1.5s infinite;
}
@keyframes l14 {
  0% {
    background-position:
      calc(100% / -4) 0,
      calc(100% / 4) 0;
  }
  50% {
    background-position:
      calc(100% / -4) -14px,
      calc(100% / 4) 14px;
  }
  100% {
    background-position:
      calc(100% / 4) -14px,
      calc(3 * 100% / 4) 14px;
  }
}`,
    `
.loader15 {
  width: 60px;
  aspect-ratio: 1;
  --g: conic-gradient(from -90deg at 10px 10px, #000 90deg, #0000 0);
  background:
    var(--g),
    var(--g) 10px 10px,
    var(--g) 20px 20px;
  background-size: 50% 50%;
  animation: l15 1s infinite;
}
@keyframes l15 {
  90%,
  100% {
    background-position:
      -30px 30px,
      -20px 40px,
      -10px 50px;
  }
}`,
    `
.loader16 {
  width: 60px;
  aspect-ratio: 1;
  --g: conic-gradient(from -90deg at 10px 10px, #000 90deg, #0000 0);
  background: var(--g), var(--g), var(--g);
  background-size: 50% 50%;
  animation: l16 1s infinite;
}
@keyframes l16 {
  0% {
    background-position:
      0 0,
      10px 10px,
      20px 20px;
  }
  50% {
    background-position:
      0 20px,
      10px 10px,
      20px 0;
  }
  100% {
    background-position:
      20px 20px,
      10px 10px,
      0 0;
  }
}`,
    `
.loader17 {
  width: 60px;
  aspect-ratio: 1;
  --g: conic-gradient(from -90deg at 10px 10px, #000 90deg, #0000 0);
  background: var(--g), var(--g), var(--g);
  background-size: 50% 50%;
  animation: l17 1s infinite;
}
@keyframes l17 {
  0% {
    background-position:
      0 0,
      10px 10px,
      20px 20px;
  }
  33% {
    background-position:
      -30px 0,
      10px 10px,
      20px 20px;
  }
  66% {
    background-position:
      -30px 0,
      -20px 10px,
      20px 20px;
  }
  100% {
    background-position:
      -30px 0,
      -20px 10px,
      -10px 20px;
  }
}`,
    `
.loader18 {
  width: 60px;
  aspect-ratio: 1;
  --g: conic-gradient(from -90deg at 10px 10px, #000 90deg, #0000 0);
  background: var(--g), var(--g), var(--g);
  background-size: 50% 50%;
  animation: l18 1s infinite;
}
@keyframes l18 {
  0% {
    background-position:
      0 0,
      10px 10px,
      20px 20px;
  }
  33% {
    background-position:
      -30px 0,
      10px 10px,
      20px 20px;
  }
  66% {
    background-position:
      -30px 0,
      10px 40px,
      20px 20px;
  }
  100% {
    background-position:
      -30px 0,
      10px 40px,
      50px 20px;
  }
}`,
    `
.loader19 {
  width: 60px;
  aspect-ratio: 1;
  --g: conic-gradient(from -90deg at 10px 10px, #000 90deg, #0000 0);
  background: var(--g), var(--g), var(--g);
  background-size: 50% 50%;
  animation: l19 1s infinite;
}
@keyframes l19 {
  0% {
    background-position:
      0 0,
      10px 10px,
      20px 20px;
  }
  33% {
    background-position: 10px 10px;
  }
  66% {
    background-position:
      0 20px,
      10px 10px,
      20px 0;
  }
  100% {
    background-position:
      0 0,
      10px 10px,
      20px 20px;
  }
}`,
    `
.loader20 {
  width: 60px;
  display: flex;
  align-items: flex-start;
  aspect-ratio: 1;
}
.loader20:before,
.loader20:after {
  content: "";
  flex: 1;
  aspect-ratio: 1;
  --g: conic-gradient(from -90deg at 10px 10px,#000 90deg,#0000 0);
  background: var(--g), var(--g), var(--g);
  filter: drop-shadow(30px 30px 0 #000);
  animation: l20 1s infinite;
}
.loader20:after {
  transform: scaleX(-1);
}
@keyframes l20 {
   0%   {background-position:0     0, 10px 10px, 20px 20px}
   33%  {background-position:10px  10px}
   66%  {background-position:0    20px,10px 10px,20px 0   }
   100% {background-position:0     0, 10px 10px, 20px 20px}
}
`,
  ],
  'zig-zag': [
    `
    .loader1 {
  height: 27px;
  aspect-ratio: 5;
  --c: #000 90deg, #0000 0;
  background:
    conic-gradient(from 135deg at top, var(--c)),
    conic-gradient(from -45deg at bottom, var(--c)) 12.5% 100%;
  background-size: 20% 50%;
  background-repeat: repeat-x;
  animation: l1 0.8s infinite linear;
}
@keyframes l1 {
  to {
    background-position:
      25% 0,
      37.5% 100%;
  }
}`,
    `
.loader2 {
  height: 27px;
  aspect-ratio: 5;
  --c: #000 90deg, #0000 0;
  background:
    conic-gradient(from 135deg at top, var(--c)),
    conic-gradient(from -45deg at bottom, var(--c)) 12.5% 100%;
  background-size: 20% 50%;
  background-repeat: repeat-x;
  clip-path: inset(0 100% 0 0);
  animation: l2 1s infinite linear;
}
@keyframes l2 {
  90%,
  to {
    clip-path: inset(0);
  }
}`,
    `
.loader3 {
  height: 27px;
  aspect-ratio: 5;
  --c: #000 90deg, #0000 0;
  background:
    conic-gradient(from 135deg at top, var(--c)),
    conic-gradient(from -45deg at bottom, var(--c)) 12.5% 100%;
  background-size: 20% 50%;
  background-repeat: repeat-x;
  clip-path: inset(0 50%);
  animation: l3 1s infinite linear;
}
@keyframes l3 {
  90%,
  to {
    clip-path: inset(0);
  }
}`,
    `
.loader4 {
  height: 27px;
  aspect-ratio: 5;
  --c: #000 90deg, #0000 0;
  background:
    conic-gradient(from 135deg at top, var(--c)),
    conic-gradient(from -45deg at bottom, var(--c)) 12.5% 100%;
  background-size: 20% 50%;
  background-repeat: repeat-x;
  clip-path: inset(0 100% 0 0);
  animation:
    l4-0 1s infinite linear,
    l4-1 2s infinite steps(1);
}
@keyframes l4-0 {
  to {
    clip-path: inset(0);
  }
}
@keyframes l4-1 {
  50% {
    scale: -1 1;
  }
}`,
    `
.loader5 {
  height: 27px;
  aspect-ratio: 5;
  --c: #000 90deg, #0000 0;
  background:
    conic-gradient(from 135deg at top, var(--c)),
    conic-gradient(from -45deg at bottom, var(--c)) 12.5% 100%;
  background-size: 20% 50%;
  background-repeat: repeat-x;
  clip-path: inset(0 60% 0 0);
  animation: l5 0.8s infinite linear alternate;
}
@keyframes l5 {
  to {
    clip-path: inset(0 0 0 60%);
  }
}`,
    `
.loader6 {
  height: 27px;
  aspect-ratio: 5;
  --c: #000 90deg, #0000 0;
  background:
    conic-gradient(from 135deg at top, var(--c)),
    conic-gradient(from -45deg at bottom, var(--c)) 12.5% 100%;
  background-size: 20% 50%;
  background-repeat: repeat-x;
  mask: repeating-linear-gradient(90deg, #000 0 15%, #0000 0 50%) 0 0/200%;
  -webkit-mask: repeating-linear-gradient(90deg, #000 0 15%, #0000 0 50%) 0 0/200%;
  animation: l6 0.8s infinite linear;
}
@keyframes l6 {
  to {
    -webkit-mask-position: -100% 0;
  }
}`,
    `
.loader7 {
  display: inline-grid;
}
.loader7:before,
.loader7:after {
  content: '';
  height: 27px;
  aspect-ratio: 5;
  --c: #000 90deg, #0000 0;
  background:
    conic-gradient(from 135deg at top, var(--c)),
    conic-gradient(from -45deg at bottom, var(--c)) 12.5% 100%;
  background-size: 20% 50%;
  background-repeat: repeat-x;
  clip-path: inset(0 60% 0 0);
  animation: l7 0.8s infinite linear alternate;
}
.loader7:after {
  animation-direction: alternate-reverse;
}
@keyframes l7 {
  to {
    clip-path: inset(0 0 0 60%);
  }
}`,
    `
.loader8 {
  display: inline-grid;
}
.loader8:before,
.loader8:after {
  content: '';
  height: 27px;
  aspect-ratio: 5;
  --c: #000 90deg, #0000 0;
  background:
    conic-gradient(from 135deg at top, var(--c)),
    conic-gradient(from -45deg at bottom, var(--c)) 12.5% 100%;
  background-size: 20% 50%;
  background-repeat: repeat-x;
  mask: repeating-linear-gradient(90deg, #000 0 15%, #0000 0 50%) 0 0/200%;
  -webkit-mask: repeating-linear-gradient(90deg, #000 0 15%, #0000 0 50%) 0 0/200%;
  animation: l8 0.8s infinite linear;
}
.loader8:after {
  animation-delay: -0.2s;
  animation-direction: reverse;
}
@keyframes l8 {
  to {
    -webkit-mask-position: -100% 0;
  }
}`,
    `
.loader9 {
  display: inline-grid;
}
.loader9:before,
.loader9:after {
  content: '';
  height: 27px;
  aspect-ratio: 5;
  --c: #000 90deg, #0000 0;
  background:
    conic-gradient(from 135deg at top, var(--c)),
    conic-gradient(from -45deg at bottom, var(--c)) 12.5% 100%;
  background-size: 20% 50%;
  background-repeat: repeat-x;
  clip-path: inset(0 100% 0 0);
  animation: l9 1s infinite linear;
}
.loader9:after {
  scale: -1 1;
}
@keyframes l9 {
  90%,
  to {
    clip-path: inset(0);
  }
}`,
    `
.loader10 {
  display: inline-grid;
  animation: l10-0 2s infinite steps(1);
}
.loader10:before,
.loader10:after {
  content: '';
  height: 27px;
  aspect-ratio: 5;
  --c: #000 90deg, #0000 0;
  background:
    conic-gradient(from 135deg at top, var(--c)),
    conic-gradient(from -45deg at bottom, var(--c)) 12.5% 100%;
  background-size: 20% 50%;
  background-repeat: repeat-x;
  clip-path: inset(0 100% 0 0);
  animation: l10-1 1s infinite linear alternate;
}
.loader10:after {
  scale: -1 1;
}
@keyframes l10-0 {
  50% {
    scale: -1 1;
  }
}
@keyframes l10-1 {
  to {
    clip-path: inset(0);
  }
}`,
    `
.loader11 {
  height: 27px;
  aspect-ratio: 5;
  --c: #000 90deg, #0000 0;
  background:
    conic-gradient(from 135deg at top, var(--c)),
    conic-gradient(from -45deg at bottom, var(--c)) 12.5% 100%;
  background-size: 20% 50%;
  background-repeat: repeat-x;
  clip-path: inset(0 100% 0 0);
  animation: l11 2.5s infinite steps(11, jump-none);
}
@keyframes l11 {
  to {
    clip-path: inset(0);
  }
}`,
    `
.loader12 {
  height: 27px;
  aspect-ratio: 5;
  --c: #000 90deg, #0000 0;
  background:
    conic-gradient(from 135deg at top, var(--c)),
    conic-gradient(from -45deg at bottom, var(--c)) 12.5% 100%;
  background-size: 20% 50%;
  background-repeat: repeat-x;
  clip-path: inset(0 100% 0 0);
  animation: l12 2.5s infinite steps(11, jump-none) alternate;
}
@keyframes l12 {
  to {
    clip-path: inset(0);
  }
}`,
    `
.loader13 {
  height: 27px;
  aspect-ratio: 5;
  --c: #000 90deg, #0000 0;
  background:
    conic-gradient(from 135deg at top, var(--c)),
    conic-gradient(from -45deg at bottom, var(--c)) 12.5% 100%;
  background-size: 20% 50%;
  background-repeat: repeat-x;
  clip-path: inset(0 100% 0 0);
  animation:
    l13-0 2.5s infinite steps(11, jump-none) alternate,
    l13-1 5s infinite steps(1);
}
@keyframes l13-0 {
  to {
    clip-path: inset(0);
  }
}
@keyframes l13-1 {
  50% {
    scale: -1 1;
  }
}`,
    `
.loader14 {
  display: inline-grid;
}
.loader14:before,
.loader14:after {
  content: '';
  grid-area: 1/1;
  height: 28px;
  aspect-ratio: 5;
  --c: #000 90deg, #0000 0;
  background:
    conic-gradient(from 135deg at top, var(--c)),
    conic-gradient(from -45deg at bottom, var(--c)) 12.5% 100%;
  background-size: 20% 50%;
  background-repeat: repeat-x;
  mask: repeating-linear-gradient(90deg, #000 0 10%, #0000 0 20%);
  -webkit-mask: repeating-linear-gradient(90deg, #000 0 10%, #0000 0 20%);
  clip-path: inset(0 100% 0 0);
  animation: l14 1.5s infinite steps(6, jump-none);
}
.loader14:after {
  scale: -1 1;
}
@keyframes l14 {
  to {
    clip-path: inset(0);
  }
}`,
    `
.loader15 {
  display: inline-grid;
}
.loader15:before,
.loader15:after {
  content: '';
  grid-area: 1/1;
  height: 28px;
  aspect-ratio: 5;
  --c: #000 90deg, #0000 0;
  background:
    conic-gradient(from 135deg at top, var(--c)),
    conic-gradient(from -45deg at bottom, var(--c)) 12.5% 100%;
  background-size: 20% 50%;
  background-repeat: repeat-x;
  mask: repeating-linear-gradient(90deg, #000 0 10%, #0000 0 20%);
  -webkit-mask: repeating-linear-gradient(90deg, #000 0 10%, #0000 0 20%);
  clip-path: inset(0 100% 0 0);
  animation: l15 1.5s infinite steps(6, jump-none) alternate;
}
.loader15:after {
  scale: -1 1;
}
@keyframes l15 {
  to {
    clip-path: inset(0);
  }
}`,
    `
.loader16 {
  display: inline-grid;
}
.loader16:before,
.loader16:after {
  content: '';
  grid-area: 1/1;
  height: 27px;
  aspect-ratio: 5;
  --c: #000 90deg, #0000 0;
  background:
    conic-gradient(from 135deg at top, var(--c)),
    conic-gradient(from -45deg at bottom, var(--c)) 12.5% 100%;
  background-size: 20% 50%;
  background-repeat: repeat-x;
  mask: repeating-linear-gradient(90deg, #000 0 10%, #0000 0 20%);
  -webkit-mask: repeating-linear-gradient(90deg, #000 0 10%, #0000 0 20%);
  clip-path: inset(0 100% 0 0);
  animation: l16 1.5s infinite steps(6, jump-none);
}
.loader16:after {
  mask: repeating-linear-gradient(90deg, #0000 0 10%, #000 0 20%);
  -webkit-mask: repeating-linear-gradient(90deg, #0000 0 10%, #000 0 20%);
  animation-delay: -0.75s;
}
@keyframes l16 {
  50%,
  100% {
    clip-path: inset(0);
  }
}`,
    `
.loader17 {
  height: 27px;
  aspect-ratio: 5;
  --c: #000 90deg, #0000 0;
  background:
    conic-gradient(from 135deg at top, var(--c)),
    conic-gradient(from -45deg at bottom, var(--c)) 12.5% 100%;
  background-size: 20% 50%;
  background-repeat: repeat-x;
  clip-path: inset(0 60% 0 0);
  animation: l17 1.2s infinite steps(7, jump-none) alternate;
}
@keyframes l17 {
  to {
    clip-path: inset(0 0 0 60%);
  }
}`,
    `
.loader18 {
  height: 27px;
  aspect-ratio: 5;
  --c: #000 90deg, #0000 0;
  background:
    conic-gradient(from 135deg at top, var(--c)),
    conic-gradient(from -45deg at bottom, var(--c)) 12.5% 100%;
  background-size: 20% 50%;
  background-repeat: repeat-x;
  clip-path: inset(0 50%);
  animation: l18 1s infinite steps(5) alternate;
}
@keyframes l18 {
  90%,
  to {
    clip-path: inset(0);
  }
}`,
    `
.loader19 {
  display: inline-grid;
}
.loader19:before,
.loader19:after {
  content: '';
  height: 27px;
  aspect-ratio: 5;
  --c: #000 90deg, #0000 0;
  background:
    conic-gradient(from 135deg at top, var(--c)),
    conic-gradient(from -45deg at bottom, var(--c)) 12.5% 100%;
  background-size: 20% 50%;
  background-repeat: repeat-x;
  clip-path: inset(0 60% 0 0);
  animation: l19 0.8s infinite steps(7, jump-none) alternate;
}
.loader19:after {
  animation-direction: alternate-reverse;
}
@keyframes l19 {
  to {
    clip-path: inset(0 0 0 60%);
  }
}`,
    `
.loader20 {
  display: inline-grid;
}
.loader20:before,
.loader20:after {
  content: '';
  height: 27px;
  aspect-ratio: 5;
  --c: #000 90deg, #0000 0;
  background:
    conic-gradient(from 135deg at top, var(--c)),
    conic-gradient(from -45deg at bottom, var(--c)) 12.5% 100%;
  background-size: 20% 50%;
  background-repeat: repeat-x;
  clip-path: inset(0 50%);
  animation: l20 1s infinite steps(5) alternate;
}
.loader20:after {
  animation-delay: -1s;
}
@keyframes l20 {
  90%,
  to {
    clip-path: inset(0);
  }
}
`,
  ],
  wavy: [
    `
    .loader1 {
  height: 30px;
  aspect-ratio: 6;
  --c: #0000 64%, #000 66% 98%, #0000 101%;
  background:
    radial-gradient(35% 146% at 50% 159%, var(--c)) 0 0,
    radial-gradient(35% 146% at 50% -59%, var(--c)) 25% 100%;
  background-size: calc(100% / 3) 50%;
  background-repeat: repeat-x;
  animation: l1 1s infinite linear;
}
@keyframes l1 {
  to {
    background-position:
      50% 0,
      75% 100%;
  }
}`,
    `
.loader2 {
  height: 30px;
  aspect-ratio: 6;
  --c: #0000 64%, #000 66% 98%, #0000 101%;
  background:
    radial-gradient(35% 146% at 50% 159%, var(--c)) 0 0,
    radial-gradient(35% 146% at 50% -59%, var(--c)) 25% 100%;
  background-size: calc(100% / 3) 50%;
  background-repeat: repeat-x;
  clip-path: inset(0 100% 0 0);
  animation: l2 1s infinite linear;
}
@keyframes l2 {
  90%,
  to {
    clip-path: inset(0);
  }
}`,
    `
.loader3 {
  height: 30px;
  aspect-ratio: 6;
  --c: #0000 64%, #000 66% 98%, #0000 101%;
  background:
    radial-gradient(35% 146% at 50% 159%, var(--c)) 0 0,
    radial-gradient(35% 146% at 50% -59%, var(--c)) 25% 100%;
  background-size: calc(100% / 3) 50%;
  background-repeat: repeat-x;
  clip-path: inset(0 50%);
  animation: l3 1s infinite linear;
}
@keyframes l3 {
  90%,
  to {
    clip-path: inset(0);
  }
}`,
    `
.loader4 {
  height: 30px;
  aspect-ratio: 6;
  --c: #0000 64%, #000 66% 98%, #0000 101%;
  background:
    radial-gradient(35% 146% at 50% 159%, var(--c)) 0 0,
    radial-gradient(35% 146% at 50% -59%, var(--c)) 25% 100%;
  background-size: calc(100% / 3) 50%;
  background-repeat: repeat-x;
  clip-path: inset(0 100% 0 0);
  animation:
    l4-0 1s infinite linear,
    l4-1 2s infinite steps(1);
}
@keyframes l4-0 {
  to {
    clip-path: inset(0);
  }
}
@keyframes l4-1 {
  50% {
    scale: -1 1;
  }
}`,
    `
.loader5 {
  height: 30px;
  aspect-ratio: 6;
  --c: #0000 64%, #000 66% 98%, #0000 101%;
  background:
    radial-gradient(35% 146% at 50% 159%, var(--c)) 0 0,
    radial-gradient(35% 146% at 50% -59%, var(--c)) 25% 100%;
  background-size: calc(100% / 3) 50%;
  background-repeat: repeat-x;
  clip-path: inset(0 100% 0 0);
  animation: l5 1.5s infinite linear;
}
@keyframes l5 {
  50% {
    clip-path: inset(0);
  }
  to {
    clip-path: inset(0 0 0 100%);
  }
}`,
    `
.loader6 {
  height: 30px;
  aspect-ratio: 6;
  --c: #0000 64%, #000 66% 98%, #0000 101%;
  background:
    radial-gradient(35% 146% at 50% 159%, var(--c)) 0 0,
    radial-gradient(35% 146% at 50% -59%, var(--c)) 25% 100%;
  background-size: calc(100% / 3) 50%;
  background-repeat: repeat-x;
  clip-path: inset(0 60% 0 0);
  animation: l6 0.8s infinite linear alternate;
}
@keyframes l6 {
  to {
    clip-path: inset(0 0 0 60%);
  }
}`,
    `
.loader7 {
  height: 30px;
  aspect-ratio: 6;
  --c: #0000 64%, #000 66% 98%, #0000 101%;
  background:
    radial-gradient(35% 146% at 50% 159%, var(--c)) 0 0,
    radial-gradient(35% 146% at 50% -59%, var(--c)) 25% 100%;
  background-size: calc(100% / 3) 50%;
  background-repeat: repeat-x;
  mask: repeating-linear-gradient(90deg, #000 0 15%, #0000 0 50%) 0 0/200%;
  -webkit-mask: repeating-linear-gradient(90deg, #000 0 15%, #0000 0 50%) 0 0/200%;
  animation: l7 0.8s infinite linear;
}
@keyframes l7 {
  to {
    -webkit-mask-position: -100% 0;
  }
}`,
    `
.loader8 {
  display: inline-grid;
}
.loader8:before,
.loader8:after {
  content: '';
  grid-area: 1/1;
  height: 30px;
  aspect-ratio: 6;
  --c: #0000 64%, #000 66% 98%, #0000 101%;
  background:
    radial-gradient(35% 146% at 50% 159%, var(--c)) 0 0,
    radial-gradient(35% 146% at 50% -59%, var(--c)) 25% 100%;
  background-size: calc(100% / 3) 50%;
  background-repeat: repeat-x;
  mask: repeating-linear-gradient(90deg, #000 0 15%, #0000 0 50%) 0 0/200%;
  -webkit-mask: repeating-linear-gradient(90deg, #000 0 15%, #0000 0 50%) 0 0/200%;
  animation: l8 0.8s infinite linear;
}
.loader8:after {
  scale: -1;
}
@keyframes l8 {
  to {
    -webkit-mask-position: -100% 0;
  }
}`,
    `
.loader9 {
  display: inline-grid;
}
.loader9:before,
.loader9:after {
  content: '';
  grid-area: 1/1;
  height: 30px;
  aspect-ratio: 6;
  --c: #0000 64%, #000 66% 98%, #0000 101%;
  background:
    radial-gradient(35% 146% at 50% 159%, var(--c)) 0 0,
    radial-gradient(35% 146% at 50% -59%, var(--c)) 25% 100%;
  background-size: calc(100% / 3) 50%;
  background-repeat: repeat-x;
  mask: repeating-linear-gradient(90deg, #000 0 15%, #0000 0 50%) 0 0/200%;
  -webkit-mask: repeating-linear-gradient(90deg, #000 0 15%, #0000 0 50%) 0 0/200%;
  animation: l9 0.8s infinite linear;
}
.loader9:after {
  scale: 1 -1;
  animation-delay: -0.2s;
}
@keyframes l9 {
  to {
    -webkit-mask-position: -100% 0;
  }
}`,
    `
.loader10 {
  display: inline-grid;
}
.loader10:before,
.loader10:after {
  content: '';
  grid-area: 1/1;
  height: 30px;
  aspect-ratio: 6;
  --c: #0000 64%, #000 66% 98%, #0000 101%;
  background:
    radial-gradient(35% 146% at 50% 159%, var(--c)) 0 0,
    radial-gradient(35% 146% at 50% -59%, var(--c)) 25% 100%;
  background-size: calc(100% / 3) 50%;
  background-repeat: repeat-x;
  clip-path: inset(0 100% 0 0);
  animation: l10 1.5s infinite linear;
}
.loader10:after {
  scale: -1;
}
@keyframes l10 {
  50% {
    clip-path: inset(0);
  }
  to {
    clip-path: inset(0 0 0 100%);
  }
}`,
    `
.loader11 {
  display: inline-grid;
  padding: 5px;
  background: #fff;
  filter: blur(4px) contrast(12);
}
.loader11:before {
  content: '';
  height: 40px;
  aspect-ratio: 3;
  --c: #0000 64%, #000 66% 98%, #0000 101%;
  background:
    radial-gradient(35% 146% at 50% 159%, var(--c)) 0 0,
    radial-gradient(35% 146% at 50% -59%, var(--c)) 100% 100%;
  background-size: calc(200% / 3) 50%;
  background-repeat: repeat-x;
  animation: l11 0.8s infinite linear;
}
@keyframes l11 {
  to {
    background-position:
      -200% 0,
      -100% 100%;
  }
}`,
    `
.loader12 {
  display: inline-grid;
  padding: 5px;
  background: #fff;
  filter: blur(4px) contrast(12);
}
.loader12:before {
  content: '';
  height: 40px;
  aspect-ratio: 3;
  --c: #0000 64%, #000 66% 98%, #0000 101%;
  background:
    radial-gradient(35% 146% at 50% 159%, var(--c)) 0 0,
    radial-gradient(35% 146% at 50% -59%, var(--c)) 100% 100%;
  background-size: calc(200% / 3) 50%;
  background-repeat: repeat-x;
  mask: repeating-linear-gradient(90deg, #000 0 10%, #0000 0 20%);
  -webkit-mask: repeating-linear-gradient(90deg, #000 0 10%, #0000 0 20%);
  animation: l12 0.8s infinite linear;
}
@keyframes l12 {
  to {
    background-position:
      -200% 0,
      -100% 100%;
  }
}`,
    `
.loader13 {
  display: inline-grid;
  padding: 5px;
  background: #fff;
  filter: blur(4px) contrast(12);
}
.loader13:before,
.loader13:after {
  content: '';
  grid-area: 1/1;
  height: 40px;
  aspect-ratio: 3;
  --c: #0000 64%, #000 66% 98%, #0000 101%;
  background:
    radial-gradient(35% 146% at 50% 159%, var(--c)) 0 0,
    radial-gradient(35% 146% at 50% -59%, var(--c)) 100% 100%;
  background-size: calc(200% / 3) 50%;
  background-repeat: repeat-x;
}
.loader13:before {
  mask: repeating-linear-gradient(90deg, #000 0 8%, #0000 0 15%);
  -webkit-mask: repeating-linear-gradient(90deg, #000 0 8%, #0000 0 15%);
}
.loader13:after {
  clip-path: inset(0 100% 0 0);
  animation: l13 1.5s infinite linear;
}
@keyframes l13 {
  50% {
    clip-path: inset(0);
  }
  to {
    clip-path: inset(0 0 0 100%);
  }
}`,
    `
.loader14 {
  display: inline-grid;
  padding: 5px;
  background: #fff;
  filter: blur(4px) contrast(12);
}
.loader14:before,
.loader14:after {
  content: '';
  grid-area: 1/1;
  height: 40px;
  aspect-ratio: 3;
  --c: #0000 64%, #000 66% 98%, #0000 101%;
  background:
    radial-gradient(35% 146% at 50% 159%, var(--c)) 0 0,
    radial-gradient(35% 146% at 50% -59%, var(--c)) 100% 100%;
  background-size: calc(200% / 3) 50%;
  background-repeat: repeat-x;
  clip-path: inset(0 100% 0 0);
  mask: repeating-linear-gradient(90deg, #000 0 10%, #0000 0 20%);
  -webkit-mask: repeating-linear-gradient(90deg, #000 0 10%, #0000 0 20%);
  animation: l14 1.5s infinite linear;
}
.loader14:after {
  scale: -1;
}
@keyframes l14 {
  40%,
  60% {
    clip-path: inset(0);
  }
  to {
    clip-path: inset(0 0 0 100%);
  }
}`,
    `
.loader15 {
  display: inline-grid;
  padding: 5px;
  background: #fff;
  filter: blur(4px) contrast(12);
}
.loader15:before,
.loader15:after {
  content: '';
  grid-area: 1/1;
  height: 40px;
  aspect-ratio: 3;
  --c: #0000 64%, #000 66% 98%, #0000 101%;
  background:
    radial-gradient(35% 146% at 50% 159%, var(--c)) 0 0,
    radial-gradient(35% 146% at 50% -59%, var(--c)) 100% 100%;
  background-size: calc(200% / 3) 50%;
  background-repeat: repeat-x;
  clip-path: inset(0 100% 0 0);
  animation: l15 1.5s infinite linear;
}
.loader15:after {
  scale: -1 1;
}
@keyframes l15 {
  50% {
    clip-path: inset(0);
  }
  to {
    clip-path: inset(0 0 0 100%);
  }
}`,
    `
.loader16 {
  display: inline-grid;
  padding: 5px;
  background: #fff;
  filter: blur(4px) contrast(12);
}
.loader16:before,
.loader16:after {
  content: '';
  grid-area: 1/1;
  height: 40px;
  aspect-ratio: 3;
  --c: #0000 64%, #000 66% 98%, #0000 101%;
  background:
    radial-gradient(35% 146% at 50% 159%, var(--c)) 0 0,
    radial-gradient(35% 146% at 50% -59%, var(--c)) 100% 100%;
  background-size: calc(200% / 3) 50%;
  background-repeat: repeat-x;
  clip-path: inset(0 100% 0 0);
  animation: l16 1.5s infinite linear;
}
.loader16:after {
  scale: -1 1;
  animation-delay: -0.75s;
}
@keyframes l16 {
  50% {
    clip-path: inset(0);
  }
  to {
    clip-path: inset(0 0 0 100%);
  }
}
`,
  ],
  mechanic: [
    `
    .loader1 {
  display: inline-grid;
  width: 80px;
  aspect-ratio: 1;
  border-image: conic-gradient(#474847 0 0) 1/7px/6px;
}
.loader1:before,
.loader1:after {
  content: '';
  grid-area: 1/1;
}
.loader1:before {
  clip-path: polygon(
    evenodd,
    0 0,
    100% 0,
    100% 100%,
    0 100%,
    0 0,
    100% 50%,
    83.81% 59.06%,
    93.3% 75%,
    74.75% 74.75%,
    75% 93.3%,
    59.06% 83.81%,
    50% 100%,
    40.94% 83.81%,
    25% 93.3%,
    25.25% 74.75%,
    6.7% 75%,
    16.19% 59.06%,
    0% 50%,
    16.19% 40.94%,
    6.7% 25%,
    25.25% 25.25%,
    25% 6.7%,
    40.94% 16.19%,
    50% 0%,
    59.06% 16.19%,
    75% 6.7%,
    74.75% 25.25%,
    93.3% 25%,
    83.81% 40.94%,
    100% 50%
  );
  background: #474847;
}
.loader1:after {
  margin: 12.5%;
  clip-path: polygon(
    100% 50%,
    78.19% 60.26%,
    88.3% 82.14%,
    65% 75.98%,
    58.68% 99.24%,
    44.79% 79.54%,
    25% 93.3%,
    27.02% 69.28%,
    3.02% 67.1%,
    20% 50%,
    3.02% 32.9%,
    27.02% 30.72%,
    25% 6.7%,
    44.79% 20.46%,
    58.68% 0.76%,
    65% 24.02%,
    88.3% 17.86%,
    78.19% 39.74%
  );
  background: #c0c0c0;
  transform: rotate(0turn) translate(15.625%) rotate(0turn);
  animation: l1 2s linear infinite;
}
@keyframes l1 {
  to {
    transform: rotate(1turn) translate(15.625%) rotate(-1.333turn);
  }
}`,
    `
.loader2 {
  display: inline-grid;
  width: 80px;
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
  outline: 7px solid #474847;
  outline-offset: -1px;
  animation: l2-0 6s linear infinite;
}
.loader2:before,
.loader2:after {
  content: '';
  grid-area: 1/1;
}
.loader2:before {
  clip-path: polygon(
    evenodd,
    0 0,
    100% 0,
    100% 100%,
    0 100%,
    0 0,
    100% 50%,
    83.81% 59.06%,
    93.3% 75%,
    74.75% 74.75%,
    75% 93.3%,
    59.06% 83.81%,
    50% 100%,
    40.94% 83.81%,
    25% 93.3%,
    25.25% 74.75%,
    6.7% 75%,
    16.19% 59.06%,
    0% 50%,
    16.19% 40.94%,
    6.7% 25%,
    25.25% 25.25%,
    25% 6.7%,
    40.94% 16.19%,
    50% 0%,
    59.06% 16.19%,
    75% 6.7%,
    74.75% 25.25%,
    93.3% 25%,
    83.81% 40.94%,
    100% 50%
  );
  background: #474847;
}
.loader2:after {
  margin: 12.5%;
  clip-path: polygon(
    100% 50%,
    78.19% 60.26%,
    88.3% 82.14%,
    65% 75.98%,
    58.68% 99.24%,
    44.79% 79.54%,
    25% 93.3%,
    27.02% 69.28%,
    3.02% 67.1%,
    20% 50%,
    3.02% 32.9%,
    27.02% 30.72%,
    25% 6.7%,
    44.79% 20.46%,
    58.68% 0.76%,
    65% 24.02%,
    88.3% 17.86%,
    78.19% 39.74%
  );
  background: #c0c0c0;
  transform: rotate(0turn) translate(15.625%) rotate(0turn);
  animation: l2-1 2s linear infinite;
}
@keyframes l2-0 {
  to {
    rotate: 1turn;
  }
}
@keyframes l2-1 {
  to {
    transform: rotate(1turn) translate(15.625%) rotate(-1.333turn);
  }
}`,
    `
.loader3 {
  display: inline-grid;
  width: 80px;
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
  outline: 7px solid #474847;
  outline-offset: -1px;
  animation: l3-0 4s linear infinite;
}
.loader3:before,
.loader3:after {
  content: '';
  grid-area: 1/1;
}
.loader3:before {
  clip-path: polygon(
    evenodd,
    0 0,
    100% 0,
    100% 100%,
    0 100%,
    0 0,
    100% 50%,
    83.81% 59.06%,
    93.3% 75%,
    74.75% 74.75%,
    75% 93.3%,
    59.06% 83.81%,
    50% 100%,
    40.94% 83.81%,
    25% 93.3%,
    25.25% 74.75%,
    6.7% 75%,
    16.19% 59.06%,
    0% 50%,
    16.19% 40.94%,
    6.7% 25%,
    25.25% 25.25%,
    25% 6.7%,
    40.94% 16.19%,
    50% 0%,
    59.06% 16.19%,
    75% 6.7%,
    74.75% 25.25%,
    93.3% 25%,
    83.81% 40.94%,
    100% 50%
  );
  background: #474847;
}
.loader3:after {
  margin: 12.5%;
  clip-path: polygon(
    100% 50%,
    78.19% 60.26%,
    88.3% 82.14%,
    65% 75.98%,
    58.68% 99.24%,
    44.79% 79.54%,
    25% 93.3%,
    27.02% 69.28%,
    3.02% 67.1%,
    20% 50%,
    3.02% 32.9%,
    27.02% 30.72%,
    25% 6.7%,
    44.79% 20.46%,
    58.68% 0.76%,
    65% 24.02%,
    88.3% 17.86%,
    78.19% 39.74%
  );
  background: #c0c0c0;
  transform: rotate(0turn) translate(15.625%) rotate(0turn);
  animation: l3-1 2s linear infinite;
}
@keyframes l3-0 {
  to {
    rotate: -1turn;
  }
}
@keyframes l3-1 {
  to {
    transform: rotate(1turn) translate(15.625%) rotate(-1.333turn);
  }
}`,
    `
.loader4 {
  display: inline-grid;
  width: 80px;
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
  outline: 7px solid #474847;
  outline-offset: -1px;
}
.loader4:before,
.loader4:after {
  content: '';
  grid-area: 1/1;
}
.loader4:before {
  clip-path: polygon(
    evenodd,
    0 0,
    100% 0,
    100% 100%,
    0 100%,
    0 0,
    100% 50%,
    83.81% 59.06%,
    93.3% 75%,
    74.75% 74.75%,
    75% 93.3%,
    59.06% 83.81%,
    50% 100%,
    40.94% 83.81%,
    25% 93.3%,
    25.25% 74.75%,
    6.7% 75%,
    16.19% 59.06%,
    0% 50%,
    16.19% 40.94%,
    6.7% 25%,
    25.25% 25.25%,
    25% 6.7%,
    40.94% 16.19%,
    50% 0%,
    59.06% 16.19%,
    75% 6.7%,
    74.75% 25.25%,
    93.3% 25%,
    83.81% 40.94%,
    100% 50%
  );
  background: #474847;
  animation: l4 6s linear infinite;
}
.loader4:after {
  margin: 12.5%;
  clip-path: polygon(
    100% 50%,
    78.19% 60.26%,
    88.3% 82.14%,
    65% 75.98%,
    58.68% 99.24%,
    44.79% 79.54%,
    25% 93.3%,
    27.02% 69.28%,
    3.02% 67.1%,
    20% 50%,
    3.02% 32.9%,
    27.02% 30.72%,
    25% 6.7%,
    44.79% 20.46%,
    58.68% 0.76%,
    65% 24.02%,
    88.3% 17.86%,
    78.19% 39.74%
  );
  background: #c0c0c0;
  translate: 15.625%;
  animation: l4 4.5s linear infinite;
}
@keyframes l4 {
  to {
    rotate: 1turn;
  }
}`,
    `
.loader5 {
  display: inline-grid;
  width: 80px;
  aspect-ratio: 1;
  background: conic-gradient(from 146deg at 50% 1%, #0000, #91492a 2deg 65deg, #0000 68deg) -5%
    100%/20% 27% repeat-x;
  animation: l5-0 0.5s linear infinite;
}
.loader5:before {
  content: '';
  grid-area: 1/1;
  margin: 12.5%;
  animation: inherit;
  animation-name: l5-1;
  clip-path: polygon(
    100% 50%,
    78.19% 60.26%,
    88.3% 82.14%,
    65% 75.98%,
    58.68% 99.24%,
    44.79% 79.54%,
    25% 93.3%,
    27.02% 69.28%,
    3.02% 67.1%,
    20% 50%,
    3.02% 32.9%,
    27.02% 30.72%,
    25% 6.7%,
    44.79% 20.46%,
    58.68% 0.76%,
    65% 24.02%,
    88.3% 17.86%,
    78.19% 39.74%
  );
  background: #cf6f46;
}
@keyframes l5-0 {
  to {
    background-position: 20% 100%;
  }
}
@keyframes l5-1 {
  to {
    rotate: -40deg;
  }
}`,
    `
.loader6 {
  display: inline-grid;
  width: 80px;
  aspect-ratio: 1;
  animation: l6-0 0.5s linear infinite;
  background:
    conic-gradient(from -34deg at 50% 99%, #0000, #91492a 2deg 65deg, #0000 68deg) -6% 0%/20% 27%
      repeat-x,
    conic-gradient(from 146deg at 50% 1%, #0000, #91492a 2deg 65deg, #0000 68deg) -5% 100%/20% 27%
      repeat-x;
}
.loader6:before {
  content: '';
  animation: inherit;
  animation-name: l6-1;
  margin: 12.5%;
  clip-path: polygon(
    100% 50%,
    78.19% 60.26%,
    88.3% 82.14%,
    65% 75.98%,
    58.68% 99.24%,
    44.79% 79.54%,
    25% 93.3%,
    27.02% 69.28%,
    3.02% 67.1%,
    20% 50%,
    3.02% 32.9%,
    27.02% 30.72%,
    25% 6.7%,
    44.79% 20.46%,
    58.68% 0.76%,
    65% 24.02%,
    88.3% 17.86%,
    78.19% 39.74%
  );
  background: #cf6f46;
}
@keyframes l6-0 {
  to {
    background-position:
      -31% 0%,
      20% 100%;
  }
}
@keyframes l6-1 {
  to {
    rotate: -40deg;
  }
}`,
    `
.loader7 {
  display: inline-grid;
  width: 80px;
  aspect-ratio: 1;
  overflow: hidden;
  background: conic-gradient(from 146deg at 50% 1%, #0000, #91492a 2deg 65deg, #0000 68deg) -5%
    100%/20% 27% repeat-x;
}
.loader7:before {
  content: '';
  margin: 12.5%;
  clip-path: polygon(
    100% 50%,
    78.19% 60.26%,
    88.3% 82.14%,
    65% 75.98%,
    58.68% 99.24%,
    44.79% 79.54%,
    25% 93.3%,
    27.02% 69.28%,
    3.02% 67.1%,
    20% 50%,
    3.02% 32.9%,
    27.02% 30.72%,
    25% 6.7%,
    44.79% 20.46%,
    58.68% 0.76%,
    65% 24.02%,
    88.3% 17.86%,
    78.19% 39.74%
  );
  background: #cf6f46;
  animation: l7 3s linear infinite;
  translate: -135% 0;
}
@keyframes l7 {
  to {
    rotate: 400deg;
    translate: 135% 0;
  }
}`,
    `
.loader8 {
  display: inline-grid;
  width: 80px;
  aspect-ratio: 1;
  overflow: hidden;
  background:
    conic-gradient(from -34deg at 50% 99%, #0000, #91492a 2deg 65deg, #0000 68deg) -5% 0%/20% 27%
      repeat-x,
    conic-gradient(from 146deg at 50% 1%, #0000, #91492a 2deg 65deg, #0000 68deg) -5% 100%/20% 27%
      repeat-x;
  animation: l8-0 2s linear infinite;
}
.loader8:before {
  content: '';
  margin: 12.5%;
  clip-path: polygon(
    100% 50%,
    78.19% 60.26%,
    88.3% 82.14%,
    65% 75.98%,
    58.68% 99.24%,
    44.79% 79.54%,
    25% 93.3%,
    27.02% 69.28%,
    3.02% 67.1%,
    20% 50%,
    3.02% 32.9%,
    27.02% 30.72%,
    25% 6.7%,
    44.79% 20.46%,
    58.68% 0.76%,
    65% 24.02%,
    88.3% 17.86%,
    78.19% 39.74%
  );
  background: #cf6f46;
  animation: inherit;
  animation: l8-1 4s linear infinite;
  translate: -135% 0;
}
@keyframes l8-0 {
  to {
    background-position:
      245% 0%,
      -5% 100%;
  }
}
@keyframes l8-1 {
  to {
    rotate: 400deg;
    translate: 135% 0;
  }
}`,
    `
.loader9 {
  display: inline-grid;
  width: 80px;
  aspect-ratio: 1;
}
.loader9:before,
.loader9:after {
  content: '';
  grid-area: 1/1;
}
.loader9:before {
  clip-path: polygon(
    100% 50%,
    83.81% 59.06%,
    93.3% 75%,
    74.75% 74.75%,
    75% 93.3%,
    59.06% 83.81%,
    50% 100%,
    40.94% 83.81%,
    25% 93.3%,
    25.25% 74.75%,
    6.7% 75%,
    16.19% 59.06%,
    0% 50%,
    16.19% 40.94%,
    6.7% 25%,
    25.25% 25.25%,
    25% 6.7%,
    40.94% 16.19%,
    50% 0%,
    59.06% 16.19%,
    75% 6.7%,
    74.75% 25.25%,
    93.3% 25%,
    83.81% 40.94%
  );
  background: #1b325f;
  transform: rotate(0turn) translate(-12.5%) rotate(0turn);
  animation: l9 3s linear infinite;
}
.loader9:after {
  margin: 12.5%;
  clip-path: polygon(
    100% 50%,
    78.19% 60.26%,
    88.3% 82.14%,
    65% 75.98%,
    58.68% 99.24%,
    44.79% 79.54%,
    25% 93.3%,
    27.02% 69.28%,
    3.02% 67.1%,
    20% 50%,
    3.02% 32.9%,
    27.02% 30.72%,
    25% 6.7%,
    44.79% 20.46%,
    58.68% 0.76%,
    65% 24.02%,
    88.3% 17.86%,
    78.19% 39.74%
  );
  background: #9cc4e4;
}
@keyframes l9 {
  to {
    transform: rotate(-1turn) translate(-12.5%) rotate(0.75turn);
  }
}`,
    `
.loader10 {
  display: inline-grid;
  width: 80px;
  aspect-ratio: 1;
  animation: l10-0 6s linear infinite;
}
.loader10:before,
.loader10:after {
  content: '';
  grid-area: 1/1;
}
.loader10:before {
  clip-path: polygon(
    100% 50%,
    83.81% 59.06%,
    93.3% 75%,
    74.75% 74.75%,
    75% 93.3%,
    59.06% 83.81%,
    50% 100%,
    40.94% 83.81%,
    25% 93.3%,
    25.25% 74.75%,
    6.7% 75%,
    16.19% 59.06%,
    0% 50%,
    16.19% 40.94%,
    6.7% 25%,
    25.25% 25.25%,
    25% 6.7%,
    40.94% 16.19%,
    50% 0%,
    59.06% 16.19%,
    75% 6.7%,
    74.75% 25.25%,
    93.3% 25%,
    83.81% 40.94%
  );
  background: #1b325f;
  transform: rotate(0turn) translate(-12.5%) rotate(0turn);
  animation: l10-1 2s linear infinite;
}
.loader10:after {
  margin: 12.5%;
  clip-path: polygon(
    100% 50%,
    78.19% 60.26%,
    88.3% 82.14%,
    65% 75.98%,
    58.68% 99.24%,
    44.79% 79.54%,
    25% 93.3%,
    27.02% 69.28%,
    3.02% 67.1%,
    20% 50%,
    3.02% 32.9%,
    27.02% 30.72%,
    25% 6.7%,
    44.79% 20.46%,
    58.68% 0.76%,
    65% 24.02%,
    88.3% 17.86%,
    78.19% 39.74%
  );
  background: #9cc4e4;
}
@keyframes l10-0 {
  to {
    rotate: 1turn;
  }
}
@keyframes l10-1 {
  to {
    transform: rotate(-1turn) translate(-12.5%) rotate(0.75turn);
  }
}`,
    `
.loader11 {
  display: inline-grid;
  width: 80px;
  aspect-ratio: 1;
  animation: l11-0 3s linear infinite;
}
.loader11:before,
.loader11:after {
  content: '';
  grid-area: 1/1;
}
.loader11:before {
  clip-path: polygon(
    100% 50%,
    83.81% 59.06%,
    93.3% 75%,
    74.75% 74.75%,
    75% 93.3%,
    59.06% 83.81%,
    50% 100%,
    40.94% 83.81%,
    25% 93.3%,
    25.25% 74.75%,
    6.7% 75%,
    16.19% 59.06%,
    0% 50%,
    16.19% 40.94%,
    6.7% 25%,
    25.25% 25.25%,
    25% 6.7%,
    40.94% 16.19%,
    50% 0%,
    59.06% 16.19%,
    75% 6.7%,
    74.75% 25.25%,
    93.3% 25%,
    83.81% 40.94%
  );
  background: #1b325f;
  transform: rotate(0turn) translate(-12.5%) rotate(0turn);
  animation: l11-1 2s linear infinite;
}
.loader11:after {
  margin: 12.5%;
  clip-path: polygon(
    100% 50%,
    78.19% 60.26%,
    88.3% 82.14%,
    65% 75.98%,
    58.68% 99.24%,
    44.79% 79.54%,
    25% 93.3%,
    27.02% 69.28%,
    3.02% 67.1%,
    20% 50%,
    3.02% 32.9%,
    27.02% 30.72%,
    25% 6.7%,
    44.79% 20.46%,
    58.68% 0.76%,
    65% 24.02%,
    88.3% 17.86%,
    78.19% 39.74%
  );
  background: #9cc4e4;
}
@keyframes l11-0 {
  to {
    rotate: 1turn;
  }
}
@keyframes l11-1 {
  to {
    transform: rotate(-1turn) translate(-12.5%) rotate(0.75turn);
  }
}`,
    `
.loader12 {
  display: inline-grid;
  width: 80px;
  aspect-ratio: 1;
  animation: l12-0 3s linear infinite;
}
.loader12:before,
.loader12:after {
  content: "";
  grid-area: 1/1;
}
.loader12:before {
  clip-path: polygon(100% 50%,83.81% 59.06%,93.3% 75%,74.75% 74.75%,75% 93.3%,59.06% 83.81%,50% 100%,40.94% 83.81%,25% 93.3%,25.25% 74.75%,6.7% 75%,16.19% 59.06%,0% 50%,16.19% 40.94%,6.7% 25%,25.25% 25.25%,25% 6.7%,40.94% 16.19%,50% 0%,59.06% 16.19%,75% 6.7%,74.75% 25.25%,93.3% 25%,83.81% 40.94%);
  background: #1B325F;
  transform: rotate(0turn) translate(-12.5%) rotate(0turn);
  animation:
    l12-1 2s linear infinite,
    l12-2 4s linear infinite alternate;
}
.loader12:after {
  margin: 12.5%;
  clip-path: polygon(100% 50%,78.19% 60.26%,88.3% 82.14%,65% 75.98%,58.68% 99.24%,44.79% 79.54%,25% 93.3%,27.02% 69.28%,3.02% 67.1%,20% 50%,3.02% 32.9%,27.02% 30.72%,25% 6.7%,44.79% 20.46%,58.68% 0.76%,65% 24.02%,88.3% 17.86%,78.19% 39.74%);
  background: #9CC4E4;
  animation: l12-3 4s linear infinite alternate;
}
@keyframes l12-0 {to{rotate: 1turn;}}
@keyframes l12-1 {to{transform: rotate(-1turn) translate(-12.5%) rotate(.75turn);}}
@keyframes l12-2 {90%,to{clip-path: polygon(100% 50%,98.3% 62.94%,93.3% 75%,85.36% 85.36%,75% 93.3%,62.94% 98.3%,50% 100%,37.06% 98.3%,25% 93.3%,14.64% 85.36%,6.7% 75%,1.7% 62.94%,0% 50%,1.7% 37.06%,6.7% 25%,14.64% 14.64%,25% 6.7%,37.06% 1.7%,50% 0%,62.94% 1.7%,75% 6.7%,85.36% 14.64%,93.3% 25%,98.3% 37.06%)}}
@keyframes l12-3 {90%,to{clip-path: polygon(100% 50%,96.98% 67.1%,88.3% 82.14%,75% 93.3%,58.68% 99.24%,41.32% 99.24%,25% 93.3%,11.7% 82.14%,3.02% 67.1%,0% 50%,3.02% 32.9%,11.7% 17.86%,25% 6.7%,41.32% 0.76%,58.68% 0.76%,75% 6.7%,88.3% 17.86%,96.98% 32.9%)}}
`,
  ],
  filling: [
    `
  .loader1 {
  width: fit-content;
  font-size: 40px;
  font-family: system-ui, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #0000;
  -webkit-text-stroke: 1px #000;
  background: conic-gradient(#000 0 0) 0/0% 100% no-repeat text;
  animation: l1 1s linear infinite;
}
.loader1:before {
  content: 'Loading';
}
@keyframes l1 {
  to {
    background-size: 120% 100%;
  }
}`,
    `
.loader2 {
  width: fit-content;
  font-size: 40px;
  font-family: system-ui, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #0000;
  -webkit-text-stroke: 1px #000;
  background: conic-gradient(#000 0 0) 0/0% 100% no-repeat text;
  animation: l1 1s linear infinite;
}
.loader2:before {
  content: 'Loading';
}
@keyframes l1 {
  to {
    background-size: 120% 100%;
  }
}`,
    `
.loader3 {
  width: fit-content;
  font-size: 40px;
  font-family: system-ui, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #0000;
  -webkit-text-stroke: 1px #000;
  background: linear-gradient(-60deg, #0000 45%, #000 0 55%, #0000 0) 0/300% 100% no-repeat text;
  animation: l3 2s linear infinite;
}
.loader3:before {
  content: 'Loading';
}
@keyframes l3 {
  0% {
    background-position: 100%;
  }
}`,
    `
.loader4 {
  width: fit-content;
  font-size: 40px;
  font-family: system-ui, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #0000;
  -webkit-text-stroke: 1px #000;
  background: conic-gradient(#000 0 0) 50%/0 100% no-repeat text;
  animation: l4 1.5s linear infinite;
}
.loader4:before {
  content: 'Loading';
}
@keyframes l4 {
  to {
    background-size: 120% 100%;
  }
}`,
    `
.loader5 {
  width: fit-content;
  font-size: 40px;
  font-family: system-ui, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #0000;
  -webkit-text-stroke: 1px #000;
  --g: conic-gradient(#000 0 0) no-repeat text;
  background:
    var(--g) 0,
    var(--g) 100%,
    var(--g) 0 0,
    var(--g) 0 100%;
  animation: l5 2s linear infinite;
}
.loader5:before {
  content: 'Loading';
}
@keyframes l5 {
  0%,
  100% {
    background-size:
      0 100%,
      0 100%,
      100% 0,
      100% 0;
  }
  50% {
    background-size:
      55% 100%,
      55% 100%,
      100% 0,
      100% 0;
  }
  50.01% {
    background-size:
      0 100%,
      0 100%,
      100% 55%,
      100% 55%;
  }
}`,
    `
.loader6 {
  width: fit-content;
  font-size: 40px;
  font-family: system-ui, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #0000;
  -webkit-text-stroke: 1px #000;
  background:
    conic-gradient(from -135deg at 100% 50%, #000 90deg, #0000 0) text no-repeat,
    conic-gradient(from -135deg at 1lh 50%, #0000 90deg, #000 0) text no-repeat;
  animation: l6 2s linear infinite;
}
.loader6:before {
  content: 'Loading';
}
@keyframes l6 {
  0% {
    background-size: 0 200%;
    background-position:
      0 0,
      100% 0;
  }
  50% {
    background-size: calc(60% + 0.5lh) 200%;
    background-position:
      0 0,
      100% 0;
  }
  50.01% {
    background-size: calc(60% + 0.5lh) 200%;
    background-position:
      0 100%,
      100% 100%;
  }
  100% {
    background-size: 0 200%;
    background-position:
      0 100%,
      100% 100%;
  }
}`,
    `
.loader7 {
  width: fit-content;
  font-size: 40px;
  font-family: system-ui, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #0000;
  -webkit-text-stroke: 1px #000;
  --l: #0000 45%, #000 0 55%, #0000 0;
  --g: 0/300% 100% no-repeat text;
  background:
    linear-gradient(-60deg, var(--l)) var(--g),
    linear-gradient(60deg, var(--l)) var(--g);
  animation: l7 4s linear infinite;
}
.loader7:before {
  content: 'Loading';
}
@keyframes l7 {
  0% {
    background-position: 100%, 0;
  }
  50% {
    background-position: 0, 0;
  }
  to {
    background-position: 0, 100%;
  }
}`,
    `
.loader8 {
  width: fit-content;
  font-size: 40px;
  font-family: system-ui, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #0000;
  -webkit-text-stroke: 1px #000;
  background: conic-gradient(#000 0 0) text;
  animation: l8 2s linear infinite;
}
.loader8:before {
  content: 'Loading';
}
@keyframes l8 {
  0%,
  2%,
  8%,
  11%,
  15%,
  21%,
  30%,
  32%,
  35%,
  40%,
  46%,
  47%,
  53%,
  61%,
  70%,
  72%,
  77%,
  80%,
  86% {
    background-size: 0 0;
  }
  1%,
  9%,
  10%,
  16%,
  20%,
  31%,
  34%,
  41%,
  45%,
  48%,
  52%,
  55%,
  60%,
  73%,
  76%,
  81%,
  85%,
  96%,
  100% {
    background-size: 100% 100%;
  }
}`,
    `
.loader9 {
  width: fit-content;
  font-size: 40px;
  line-height: 1.5;
  font-family: system-ui, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #0000;
  -webkit-text-stroke: 1px #000;
  background:
    radial-gradient(1.13em at 50% 1.6em, #000 99%, #0000 101%) calc(50% - 1.6em) 0/3.2em 100% text,
    radial-gradient(1.13em at 50% -0.8em, #0000 99%, #000 101%) 50% 0.8em/3.2em 100% repeat-x text;
  animation: l9 2s linear infinite;
}
.loader9:before {
  content: 'Loading';
}
@keyframes l9 {
  to {
    background-position:
      calc(50% + 1.6em) 0,
      calc(50% + 3.2em) 0.8em;
  }
}`,
    `.loader10 {
  width: fit-content;
  font-size: 40px;
  font-family: system-ui, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #0000;
  -webkit-text-stroke: 1px #000;
  background:
    radial-gradient(0.71em at 50% 1em, #000 99%, #0000 101%) calc(50% - 1em) 1em/2em 200% repeat-x
      text,
    radial-gradient(0.71em at 50% -0.5em, #0000 99%, #000 101%) 50% 1.5em/2em 200% repeat-x text;
  animation:
    l10-0 0.8s linear infinite alternate,
    l10-1 4s linear infinite;
}
.loader10:before {
  content: 'Loading';
}
@keyframes l10-0 {
  to {
    background-position-x: 50%, calc(50% + 1em);
  }
}
@keyframes l10-1 {
  to {
    background-position-y: -0.5em, 0;
  }
}`,
    `.loader11 {
  width: fit-content;
  font-size: 40px;
  font-family: monospace;
  font-weight: bold;
  text-transform: uppercase;
  color: #0000;
  -webkit-text-stroke: 1px #000;
  background: conic-gradient(#000 0 0) 0/0 100% no-repeat text;
  animation: l11 2s steps(8, jump-none) infinite;
}
.loader11:before {
  content: 'Loading';
}
@keyframes l11 {
  to {
    background-size: 100% 100%;
  }
}`,
    `
.loader12 {
  width: fit-content;
  font-size: 40px;
  font-family: monospace;
  font-weight: bold;
  text-transform: uppercase;
  color: #0000;
  -webkit-text-stroke: 1px #000;
  background: linear-gradient(90deg, #0000 33%, #000 0 67%, #0000 0) 100%/300% 100% no-repeat text;
  animation: l12 4s steps(14) infinite;
}
.loader12:before {
  content: 'Loading';
}
@keyframes l12 {
  to {
    background-position: 0;
  }
}`,
    `
.loader13 {
  width: fit-content;
  font-size: 40px;
  font-family: monospace;
  font-weight: bold;
  text-transform: uppercase;
  color: #0000;
  -webkit-text-stroke: 1px #000;
  background: conic-gradient(#000 0 0) -1ch/1ch 100% no-repeat text;
  animation: l13 2s steps(8, jump-none) infinite;
}
.loader13:before {
  content: 'Loading';
}
@keyframes l13 {
  to {
    background-position: 100%;
  }
}`,
    `
.loader14 {
  width: fit-content;
  font-size: 40px;
  font-family: monospace;
  font-weight: bold;
  text-transform: uppercase;
  color: #0000;
  -webkit-text-stroke: 1px #000;
  background: conic-gradient(#000 0 0) 0/1ch 100% no-repeat text;
  animation: l14 1.5s steps(7, jump-none) infinite alternate;
}
.loader14:before {
  content: 'Loading';
}
@keyframes l14 {
  to {
    background-position: 100%;
  }
}`,
    `
.loader15 {
  width: fit-content;
  font-size: 40px;
  font-family: monospace;
  font-weight: bold;
  text-transform: uppercase;
  color: #0000;
  -webkit-text-stroke: 1px #000;
  --g: conic-gradient(#000 0 0) no-repeat text;
  background:
    var(--g) 0,
    var(--g) 1ch,
    var(--g) 2ch,
    var(--g) 3ch,
    var(--g) 4ch,
    var(--g) 5ch,
    var(--g) 6ch;
  background-position-y: 100%;
  animation: l15 3s infinite;
}
.loader15:before {
  content: 'Loading';
}
@keyframes l15 {
  0% {
    background-size:
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 0;
  }
  14.28% {
    background-size:
      1ch 100%,
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 0;
  }
  28.57% {
    background-size:
      1ch 100%,
      1ch 100%,
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 0;
  }
  42.85% {
    background-size:
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 0;
  }
  57.14% {
    background-size:
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 0,
      1ch 0,
      1ch 0;
  }
  71.43% {
    background-size:
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 0,
      1ch 0;
  }
  85.71% {
    background-size:
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 0;
  }
  100% {
    background-size:
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%;
  }
}`,
    `
.loader16 {
  width: fit-content;
  font-size: 40px;
  font-family: monospace;
  font-weight: bold;
  text-transform: uppercase;
  color: #0000;
  -webkit-text-stroke: 1px #000;
  --g: conic-gradient(#000 0 0) no-repeat text;
  background:
    var(--g) 0,
    var(--g) 1ch,
    var(--g) 2ch,
    var(--g) 3ch,
    var(--g) 4ch,
    var(--g) 5ch,
    var(--g) 6ch;
  background-position-y: 100%, 0;
  animation: l16 2s linear infinite alternate;
}
.loader16:before {
  content: 'Loading';
}
@keyframes l16 {
  0% {
    background-size:
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 0;
  }
  14.28% {
    background-size:
      1ch 100%,
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 0;
  }
  28.57% {
    background-size:
      1ch 100%,
      1ch 100%,
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 0;
  }
  42.85% {
    background-size:
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 0;
  }
  57.14% {
    background-size:
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 0,
      1ch 0,
      1ch 0;
  }
  71.43% {
    background-size:
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 0,
      1ch 0;
  }
  85.71% {
    background-size:
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 0;
  }
  100% {
    background-size:
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%;
  }
}`,
    `
.loader17 {
  width: fit-content;
  font-size: 40px;
  font-family: monospace;
  font-weight: bold;
  text-transform: uppercase;
  color: #0000;
  -webkit-text-stroke: 1px #000;
  --g: conic-gradient(#000 0 0) no-repeat text;
  background:
    var(--g) 0,
    var(--g) 1ch,
    var(--g) 2ch,
    var(--g) 3ch,
    var(--g) 4ch,
    var(--g) 5ch,
    var(--g) 6ch;
  animation:
    l17-0 1s linear infinite alternate,
    l17-1 2s linear infinite;
}
.loader17:before {
  content: 'Loading';
}
@keyframes l17-0 {
  0% {
    background-size: 1ch 0;
  }
  100% {
    background-size: 1ch 100%;
  }
}
@keyframes l17-1 {
  0%,
  50% {
    background-position-y: 100%, 0;
  }
  50.01%,
  to {
    background-position-y: 0, 100%;
  }
}`,
    `
.loader18 {
  width: fit-content;
  font-size: 40px;
  font-family: monospace;
  font-weight: bold;
  text-transform: uppercase;
  color: #0000;
  -webkit-text-stroke: 1px #000;
  --g: conic-gradient(#000 0 0) no-repeat text;
  background:
    var(--g) 0,
    var(--g) 1ch,
    var(--g) 2ch,
    var(--g) 3ch,
    var(--g) 4ch,
    var(--g) 5ch,
    var(--g) 6ch;
  animation:
    l18-0 2s linear infinite alternate,
    l18-1 4s linear infinite;
}
.loader18:before {
  content: 'Loading';
}
@keyframes l18-0 {
  0% {
    background-size:
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 0;
  }
  14.28% {
    background-size:
      1ch 100%,
      1ch 50%,
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 0;
  }
  28.57% {
    background-size:
      1ch 100%,
      1ch 100%,
      1ch 50%,
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 0;
  }
  42.85% {
    background-size:
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 50%,
      1ch 0,
      1ch 0,
      1ch 0;
  }
  57.14% {
    background-size:
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 50%,
      1ch 0,
      1ch 0;
  }
  71.43% {
    background-size:
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 50%,
      1ch 0;
  }
  85.71% {
    background-size:
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 50%;
  }
  100% {
    background-size:
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%;
  }
}
@keyframes l18-1 {
  0%,
  50% {
    background-position-y: 100%;
  }
  50.01%,
  to {
    background-position-y: 0;
  }
}`,
    `
.loader19 {
  width: fit-content;
  font-size: 40px;
  font-family: monospace;
  font-weight: bold;
  text-transform: uppercase;
  color: #0000;
  -webkit-text-stroke: 1px #000;
  --g: conic-gradient(#000 0 0) no-repeat text;
  background:
    var(--g) 0,
    var(--g) 1ch,
    var(--g) 2ch,
    var(--g) 3ch,
    var(--g) 4ch,
    var(--g) 5ch,
    var(--g) 6ch;
  background-position-y: 100%;
  animation: l19 1.5s linear infinite alternate;
}
.loader19:before {
  content: 'Loading';
}
@keyframes l19 {
  0% {
    background-size:
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 0;
  }
  25% {
    background-size:
      1ch 100%,
      1ch 50%,
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 50%,
      1ch 100%;
  }
  50% {
    background-size:
      1ch 100%,
      1ch 100%,
      1ch 50%,
      1ch 0,
      1ch 50%,
      1ch 100%,
      1ch 100%;
  }
  75% {
    background-size:
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 50%,
      1ch 100%,
      1ch 100%,
      1ch 100%;
  }
  to {
    background-size:
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%;
  }
}`,
    `
.loader20 {
  width: fit-content;
  font-size: 40px;
  font-family: monospace;
  font-weight: bold;
  text-transform: uppercase;
  color: #0000;
  -webkit-text-stroke: 1px #000;
  --g: conic-gradient(#000 0 0) no-repeat text;
  background:
    var(--g) 0,
    var(--g) 1ch,
    var(--g) 2ch,
    var(--g) 3ch,
    var(--g) 4ch,
    var(--g) 5ch,
    var(--g) 6ch;
  animation:
    l20-0 1.5s linear infinite alternate,
    l20-1 3s linear infinite;
}
.loader20:before {
  content: 'Loading';
}
@keyframes l20-0 {
  0% {
    background-size:
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 0;
  }
  25% {
    background-size:
      1ch 100%,
      1ch 50%,
      1ch 0,
      1ch 0,
      1ch 0,
      1ch 50%,
      1ch 100%;
  }
  50% {
    background-size:
      1ch 100%,
      1ch 100%,
      1ch 50%,
      1ch 0,
      1ch 50%,
      1ch 100%,
      1ch 100%;
  }
  75% {
    background-size:
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 50%,
      1ch 100%,
      1ch 100%,
      1ch 100%;
  }
  to {
    background-size:
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%,
      1ch 100%;
  }
}
@keyframes l20-1 {
  0%,
  50% {
    background-position-y: 100%;
  }
  50.01%,
  to {
    background-position-y: 0;
  }
}
`,
  ],
  bouncing: [
    `
    .loader1 {
  height: 60px;
  aspect-ratio: 2;
  border-bottom: 3px solid #524656;
  position: relative;
  overflow: hidden;
}
.loader1:before {
  content: '';
  position: absolute;
  inset: auto 42.5% 0;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #cf4647;
  animation:
    l1-0 0.5s cubic-bezier(0, 900, 1, 900) infinite,
    l1-1 2s linear infinite;
}
@keyframes l1-0 {
  0%,
  2% {
    bottom: 0%;
  }
  98%,
  to {
    bottom: 0.1%;
  }
}
@keyframes l1-1 {
  0% {
    translate: -500%;
  }
  to {
    translate: 500%;
  }
}`,
    `
.loader2 {
  height: 60px;
  aspect-ratio: 2;
  border-bottom: 3px solid #524656;
  position: relative;
  overflow: hidden;
}
.loader2:before {
  content: '';
  position: absolute;
  inset: auto 42.5% 0;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #cf4647;
  animation:
    l2-0 0.5s cubic-bezier(0, 900, 1, 900) infinite,
    l2-1 2s linear infinite alternate;
}
@keyframes l2-0 {
  0%,
  2% {
    bottom: 0%;
  }
  98%,
  to {
    bottom: 0.1%;
  }
}
@keyframes l2-1 {
  0% {
    translate: -500%;
  }
  to {
    translate: 500%;
  }
}`,
    `
.loader3 {
  height: 60px;
  aspect-ratio: 2;
  border-bottom: 3px solid #0000;
  background: linear-gradient(90deg, #524656 50%, #0000 0) -25% 100%/50% 3px repeat-x border-box;
  position: relative;
  animation: l3-0 0.75s linear infinite;
}
.loader3:before {
  content: '';
  position: absolute;
  inset: auto 42.5% 0;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #cf4647;
  animation: l3-1 0.75s cubic-bezier(0, 900, 1, 900) infinite;
}
@keyframes l3-0 {
  to {
    background-position: -125% 100%;
  }
}
@keyframes l3-1 {
  0%,
  2% {
    bottom: 0%;
  }
  98%,
  to {
    bottom: 0.1%;
  }
}`,
    `
.loader4 {
  height: 60px;
  aspect-ratio: 2;
  position: relative;
}
.loader4:before {
  content: '';
  position: absolute;
  inset: 100% 75% -3px 0;
  background: #524656;
  animation: l4-0 1s linear infinite alternate;
}
.loader4:after {
  content: '';
  position: absolute;
  inset: auto 42.5% 0;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #cf4647;
  animation:
    l4-1 1s cubic-bezier(0, 700, 1, 700) infinite alternate,
    l4-2 1s linear infinite alternate;
}
@keyframes l4-0 {
  0%,
  30% {
    translate: 0% -2px;
    rotate: 20deg;
  }
  70%,
  to {
    translate: 300% -2px;
    rotate: -20deg;
  }
}
@keyframes l4-1 {
  0%,
  2% {
    bottom: 0%;
  }
  98%,
  to {
    bottom: 0.1%;
  }
}
@keyframes l4-2 {
  0% {
    translate: -220%;
  }
  to {
    translate: 220%;
  }
}`,
    `
.loader5 {
  height: 60px;
  aspect-ratio: 1;
  border: 3px solid #524656;
  border-top: none;
  position: relative;
}
.loader5:before {
  content: '';
  position: absolute;
  width: 30%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #cf4647;
  animation:
    l5-0 0.5s cubic-bezier(0, 800, 1, 800) infinite -0.25s,
    l5-1 0.5s linear infinite alternate;
}
@keyframes l5-0 {
  0%,
  2% {
    bottom: 0%;
  }
  98%,
  to {
    bottom: 0.1%;
  }
}
@keyframes l5-1 {
  0%,
  8% {
    left: 0%;
  }
  92%,
  to {
    left: 70%;
  }
}`,
    `
.loader6 {
  height: 60px;
  aspect-ratio: 1;
  position: relative;
  border: 3px solid #0000;
}
.loader6:before {
  content: '';
  position: absolute;
  inset: auto 35% 0;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #cf4647;
  animation: l6-0 0.5s cubic-bezier(0, 800, 1, 800) infinite;
}
.loader6:after {
  content: '';
  position: absolute;
  inset: 0;
  outline: 3px solid #524656;
  animation: l6-1 0.5s linear infinite;
}
@keyframes l6-0 {
  0%,
  2% {
    bottom: 0%;
  }
  98%,
  to {
    bottom: 0.1%;
  }
}
@keyframes l6-1 {
  0%,
  30% {
    rotate: 0deg;
  }
  70%,
  to {
    rotate: 90deg;
  }
}`,
    `
.loader7 {
  height: 60px;
  aspect-ratio: 1;
  border: 3px solid #524656;
  position: relative;
}
.loader7:before {
  content: '';
  position: absolute;
  width: 30%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #cf4647;
  animation:
    l7-0 0.49s infinite alternate linear -0.11s,
    l7-1 0.71s infinite alternate linear -0.23s;
}
@keyframes l7-0 {
  0%,
  5% {
    bottom: 0%;
  }
  95%,
  to {
    bottom: 70%;
  }
}
@keyframes l7-1 {
  0%,
  5% {
    left: 0%;
  }
  95%,
  to {
    left: 70%;
  }
}`,
    `
.loader8 {
  height: 60px;
  aspect-ratio: 1;
  border: 3px solid #524656;
  position: relative;
}
.loader8:before,
.loader8:after {
  content: '';
  position: absolute;
  width: 20%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #cf4647;
  animation:
    l8-0 0.57s infinite alternate linear -0.13s,
    l8-1 0.35s infinite alternate linear -0.23s;
}
.loader8:after {
  background: #45ada8;
  animation:
    l8-0 0.29s infinite alternate linear -0.11s,
    l8-1 0.51s infinite alternate linear -0.34s;
}
@keyframes l8-0 {
  0%,
  5% {
    bottom: 0%;
  }
  95%,
  to {
    bottom: 80%;
  }
}
@keyframes l8-1 {
  0%,
  5% {
    left: 0%;
  }
  95%,
  to {
    left: 80%;
  }
}`,
    `
.loader9 {
  width: 60px;
  aspect-ratio: 0.5;
  display: grid;
}
.loader9:before {
  content: '';
  width: 30%;
  aspect-ratio: 1;
  border-radius: 50%;
  margin: auto auto 0;
  background: #cf4647;
  animation: l9-0 0.5s cubic-bezier(0, 800, 1, 800) infinite;
}
.loader9:after {
  content: '';
  width: 100%;
  aspect-ratio: 1 / cos(30deg);
  margin: 0 auto auto;
  clip-path: polygon(50% -50%, 100% 50%, 50% 150%, 0 50%);
  background: #524656;
  animation: l9-1 0.5s linear infinite;
}
@keyframes l9-0 {
  0%,
  2% {
    translate: 0 0%;
  }
  98%,
  to {
    translate: 0 -0.2%;
  }
}
@keyframes l9-1 {
  0%,
  5% {
    rotate: 0deg;
  }
  95%,
  to {
    rotate: -60deg;
  }
}`,
    `
.loader10 {
  width: 60px;
  aspect-ratio: 0.5;
  display: grid;
  animation: l10-1 3s linear infinite;
  transform-origin: 50% calc(100% / sqrt(3));
}
.loader10:before {
  content: '';
  width: 30%;
  aspect-ratio: 1;
  border-radius: 50%;
  margin: auto auto 0;
  background: #cf4647;
  animation: l10-0 0.5s cubic-bezier(0, 800, 1, 800) infinite;
}
.loader10:after {
  content: '';
  width: 100%;
  aspect-ratio: 1 / cos(30deg);
  margin: 0 auto auto;
  clip-path: polygon(50% -50%, 100% 50%, 50% 150%, 0 50%);
  background: #524656;
  animation: inherit;
  animation-direction: reverse;
}
@keyframes l10-0 {
  0%,
  2% {
    translate: 0 0%;
  }
  98%,
  to {
    translate: 0 -0.2%;
  }
}
@keyframes l10-1 {
  to {
    rotate: 1turn;
  }
}`,
    `
.loader11 {
  height: 60px;
  aspect-ratio: 1;
  position: relative;
  border: 3px solid #0000;
  animation: l11-1 3s linear infinite;
}
.loader11:before {
  content: '';
  position: absolute;
  inset: auto 35% 0;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #cf4647;
  animation: l11-0 0.5s cubic-bezier(0, 500, 1, 500) infinite;
}
.loader11:after {
  content: '';
  position: absolute;
  --b: 4px;
  inset: calc(-1 * var(--b)) auto calc(-1 * var(--b)) 50%;
  aspect-ratio: 1 / cos(30deg);
  translate: -50% 0;
  clip-path: polygon(
    0 50%,
    50% -50%,
    100% 50%,
    50% 150%,
    0 50%,
    var(--b) 50%,
    calc(25% + var(--b) * cos(60deg)) calc(100% - var(--b) * sin(60deg)),
    calc(75% - var(--b) * cos(60deg)) calc(100% - var(--b) * sin(60deg)),
    calc(100% - var(--b)) 50%,
    calc(75% - var(--b) * cos(60deg)) calc(var(--b) * sin(60deg)),
    calc(25% + var(--b) * cos(60deg)) calc(var(--b) * sin(60deg)),
    var(--b) 50%
  );
  background: #524656;
  animation: inherit;
  animation-direction: reverse;
}
@keyframes l11-0 {
  0%,
  2% {
    bottom: 0%;
  }
  98%,
  to {
    bottom: 0.1%;
  }
}
@keyframes l11-1 {
  to {
    rotate: 1turn;
  }
}`,
    `
.loader12 {
  height: 60px;
  aspect-ratio: 1;
  position: relative;
  background:
    conic-gradient(at 20px 40px, #0000 25%, #524656 0),
    conic-gradient(from -90deg at 40px 20px, #0000 75%, #524656 0);
  clip-path: inset(-100% 0);
}
.loader12:before {
  content: '';
  position: absolute;
  inset: auto 75% 0 0;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #cf4647;
  animation:
    l12-0 0.5s cubic-bezier(0, 600, 1, 600) infinite,
    l12-1 2s linear infinite;
}
@keyframes l12-0 {
  0%,
  2% {
    bottom: 0%;
  }
  98%,
  to {
    bottom: 0.1%;
  }
}
@keyframes l12-1 {
  0% {
    translate: -18px -80px;
  }
  to {
    translate: 62px 0;
  }
}`,
  ],
  glowing: [
    `
  .loader1 {
  height: 80px;
  aspect-ratio: 1;
  padding: 10px;
  border-radius: 50%;
  box-sizing: border-box;
  position: relative;
  mask:
    conic-gradient(#000 0 0) content-box exclude,
    conic-gradient(#000 0 0);
  filter: blur(12px);
}
.loader1:before {
  content: '';
  position: absolute;
  inset: 0;
  background: conic-gradient(#0000 35%, #c02942, #0000 65%);
  animation: l1 1.5s linear infinite;
}
@keyframes l1 {
  to {
    rotate: 1turn;
  }
}`,
    `
.loader2 {
  height: 80px;
  aspect-ratio: 1;
  padding: 10px;
  border-radius: 50%;
  box-sizing: border-box;
  position: relative;
  mask:
    conic-gradient(#000 0 0) content-box exclude,
    conic-gradient(#000 0 0);
  filter: blur(12px);
}
.loader2:before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-conic-gradient(#0000 0 5%, #c02942, #0000 20% 50%);
  animation: l2 1.5s linear infinite;
}
@keyframes l2 {
  to {
    rotate: 1turn;
  }
}`,
    `
.loader3 {
  height: 80px;
  aspect-ratio: 1;
  padding: 10px;
  border-radius: 20px;
  box-sizing: border-box;
  position: relative;
  mask:
    conic-gradient(#000 0 0) content-box exclude,
    conic-gradient(#000 0 0);
  filter: blur(12px);
}
.loader3:before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-conic-gradient(#0000 0 5%, #c02942, #0000 20% 50%);
  animation: l3 1.5s linear infinite;
}
@keyframes l3 {
  to {
    rotate: 1turn;
  }
}`,
    `
.loader4 {
  height: 80px;
  aspect-ratio: 1;
  padding: 10px;
  border-radius: 20px;
  box-sizing: border-box;
  position: relative;
  mask:
    conic-gradient(#000 0 0) content-box exclude,
    conic-gradient(#000 0 0);
  filter: blur(12px);
  animation: l4-0 1.2s linear infinite alternate;
}
.loader4:before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-conic-gradient(#0000 0 5%, #c02942, #0000 20% 50%);
  animation: l4-1 1s linear infinite;
}
@keyframes l4-0 {
  to {
    border-radius: 50%;
  }
}
@keyframes l4-1 {
  to {
    rotate: 0.5turn;
  }
}`,
    `
.loader5 {
  --b: 25%;
  height: 80px;
  aspect-ratio: 1 / cos(30deg);
  position: relative;
  clip-path: polygon(
    50% 0,
    100% 100%,
    0 100%,
    50% 0,
    50% var(--b),
    calc(var(--b) * cos(30deg)) calc(100% - var(--b) / 2),
    calc(100% - var(--b) * cos(30deg)) calc(100% - var(--b) / 2),
    50% var(--b)
  );
  filter: blur(12px);
}
.loader5:before {
  content: '';
  position: absolute;
  inset: -8% 0;
  background: conic-gradient(#0000 35%, #0b486b, #0000 65%);
  animation: l5 2s linear infinite;
}
@keyframes l5 {
  to {
    rotate: 1turn;
  }
}`,
    `
.loader6 {
  height: 80px;
  aspect-ratio: 1;
  position: relative;
  clip-path: polygon(
    100% 50%,
    85.36% 85.36%,
    50% 100%,
    14.64% 85.36%,
    0% 50%,
    14.64% 14.64%,
    50% 0%,
    85.36% 14.64%,
    100% 50%,
    74.75% 25.25%,
    50% 15%,
    25.25% 25.25%,
    15% 50%,
    25.25% 74.75%,
    50% 85%,
    74.75% 74.75%,
    85% 50%,
    74.75% 25.25%
  );
  filter: blur(12px);
}
.loader6:before {
  content: '';
  position: absolute;
  inset: 0;
  background: conic-gradient(#0000 35%, #0b486b, #0000 65%);
  animation: l6 2s linear infinite;
}
@keyframes l6 {
  to {
    rotate: 1turn;
  }
}`,
    `
.loader7 {
  height: 100px;
  aspect-ratio: 1;
  position: relative;
  clip-path: polygon(
    100% 50%,
    82.89% 61.97%,
    88.3% 82.14%,
    67.5% 80.31%,
    58.68% 99.24%,
    43.92% 84.47%,
    25% 93.3%,
    23.19% 72.5%,
    3.02% 67.1%,
    15% 50%,
    3.02% 32.9%,
    23.19% 27.5%,
    25% 6.7%,
    43.92% 15.53%,
    58.68% 0.76%,
    67.5% 19.69%,
    88.3% 17.86%,
    82.89% 38.03%,
    100% 50%,
    82.89% 61.97%,
    73.02% 58.38%,
    85% 50%,
    73.02% 41.62%,
    76.81% 27.5%,
    62.25% 28.78%,
    56.08% 15.53%,
    45.75% 25.87%,
    32.5% 19.69%,
    31.23% 34.25%,
    17.11% 38.03%,
    25.5% 50%,
    17.11% 61.97%,
    31.23% 65.75%,
    32.5% 80.31%,
    45.75% 74.13%,
    56.08% 84.47%,
    62.25% 71.22%,
    76.81% 72.5%,
    73.02% 58.38%,
    85% 50%
  );
  filter: blur(12px);
}
.loader7:before {
  content: '';
  position: absolute;
  inset: 0;
  background: conic-gradient(#0000 35%, #0b486b, #0000 65%);
  animation: l7 2s linear infinite;
}
@keyframes l7 {
  to {
    rotate: 1turn;
  }
}`,
    `
.loader8 {
  height: 100px;
  aspect-ratio: 1;
  position: relative;
  clip-path: polygon(
    100% 50%,
    82.89% 61.97%,
    88.3% 82.14%,
    67.5% 80.31%,
    58.68% 99.24%,
    43.92% 84.47%,
    25% 93.3%,
    23.19% 72.5%,
    3.02% 67.1%,
    15% 50%,
    3.02% 32.9%,
    23.19% 27.5%,
    25% 6.7%,
    43.92% 15.53%,
    58.68% 0.76%,
    67.5% 19.69%,
    88.3% 17.86%,
    82.89% 38.03%,
    100% 50%,
    82.89% 61.97%,
    73.02% 58.38%,
    85% 50%,
    73.02% 41.62%,
    76.81% 27.5%,
    62.25% 28.78%,
    56.08% 15.53%,
    45.75% 25.87%,
    32.5% 19.69%,
    31.23% 34.25%,
    17.11% 38.03%,
    25.5% 50%,
    17.11% 61.97%,
    31.23% 65.75%,
    32.5% 80.31%,
    45.75% 74.13%,
    56.08% 84.47%,
    62.25% 71.22%,
    76.81% 72.5%,
    73.02% 58.38%,
    85% 50%
  );
  animation: l8-0 1.5s linear infinite alternate;
  filter: blur(12px);
}
.loader8:before {
  content: '';
  position: absolute;
  inset: 0;
  background: conic-gradient(#0000 35%, #0b486b, #0000 65%);
  animation: l8-1 2s linear infinite;
}
@keyframes l8-0 {
  to {
    clip-path: polygon(
      100% 50%,
      96.98% 67.1%,
      88.3% 82.14%,
      75% 93.3%,
      58.68% 99.24%,
      41.32% 99.24%,
      25% 93.3%,
      11.7% 82.14%,
      3.02% 67.1%,
      0% 50%,
      3.02% 32.9%,
      11.7% 17.86%,
      25% 6.7%,
      41.32% 0.76%,
      58.68% 0.76%,
      75% 6.7%,
      88.3% 17.86%,
      96.98% 32.9%,
      100% 50%,
      96.98% 67.1%,
      85.71% 63%,
      88% 50%,
      85.71% 37%,
      79.11% 25.57%,
      69% 17.09%,
      56.6% 12.58%,
      43.4% 12.58%,
      31% 17.09%,
      20.89% 25.57%,
      14.29% 37%,
      12% 50%,
      14.29% 63%,
      20.89% 74.43%,
      31% 82.91%,
      43.4% 87.42%,
      56.6% 87.42%,
      69% 82.91%,
      79.11% 74.43%,
      85.71% 63%,
      88% 50%
    );
  }
}
@keyframes l8-1 {
  to {
    rotate: 1turn;
  }
}`,
    `
.loader9 {
  height: 100px;
  aspect-ratio: 1;
  position: relative;
  --g: /calc(30.259% + 5.027px) calc(30.259% + 5.027px)
    radial-gradient(#0000 calc(70% - 8px), #000 calc(71% - 8px) 70%, #0000 71%) no-repeat;
  mask:
    radial-gradient(
        100% 100%,
        #0000 calc((30.259% + 5.027px) / 0.964 - 8.306px),
        #000 calc((30.259% + 5.027px) / 0.964 - 8.306px + 1px)
      )
      intersect,
    100% 50% var(--g),
    81.174% 89.092% var(--g),
    38.874% 98.746% var(--g),
    4.952% 71.694% var(--g),
    4.952% 28.306% var(--g),
    38.874% 1.254% var(--g),
    81.174% 10.908% var(--g);
  filter: blur(12px);
}
.loader9:before {
  content: '';
  position: absolute;
  inset: 0;
  background: conic-gradient(#0000 35%, #fa6900, #0000 65%);
  animation: l9 2s linear infinite;
}
@keyframes l9 {
  to {
    rotate: 1turn;
  }
}`,
    `
.loader10 {
  height: 140px;
  aspect-ratio: 1;
  position: relative;
  --g: /calc(30.259% + 5.027px) calc(30.259% + 5.027px)
    radial-gradient(#0000 calc(70% - 8px), #000 calc(71% - 8px) 70%, #0000 71%) no-repeat;
  mask:
    radial-gradient(
        100% 100%,
        #000 calc((30.259% + 5.027px) / 0.964 - 8.306px),
        #0000 calc((30.259% + 5.027px) / 0.964 - 8.306px + 1px)
      )
      intersect,
    100% 50% var(--g),
    81.174% 89.092% var(--g),
    38.874% 98.746% var(--g),
    4.952% 71.694% var(--g),
    4.952% 28.306% var(--g),
    38.874% 1.254% var(--g),
    81.174% 10.908% var(--g);
  filter: blur(12px);
}
.loader10:before {
  content: '';
  position: absolute;
  inset: 0;
  background: conic-gradient(#0000 35%, #fa6900, #0000 65%);
  animation: l10 2s linear infinite;
}
@keyframes l10 {
  to {
    rotate: 1turn;
  }
}`,
    `
.loader11 {
  height: 80px;
  aspect-ratio: 1;
  box-sizing: border-box;
  position: relative;
  mask:
    radial-gradient(#0000 47%, #000 48% 71%, #0000 72%) exclude,
    conic-gradient(#000 0 0) no-clip;
  animation: l11 1.5s linear infinite;
}
.loader11:before {
  content: '';
  position: absolute;
  inset: 0 35% 70%;
  border-radius: 50%;
  background: #000;
  filter: blur(15px);
}
@keyframes l11 {
  to {
    rotate: 1turn;
  }
}`,
    `
.loader12 {
  --s: -100px;
  height: 80px;
  aspect-ratio: 1;
  position: relative;
  clip-path: polygon(
    evenodd,
    var(--s) var(--s),
    calc(100% - var(--s)) var(--s),
    calc(100% - var(--s)) calc(100% - var(--s)),
    var(--s) calc(100% - var(--s)),
    var(--s) var(--s),
    100% 50%,
    85.36% 85.36%,
    50% 100%,
    14.64% 85.36%,
    0% 50%,
    14.64% 14.64%,
    50% 0%,
    85.36% 14.64%,
    100% 50%,
    74.75% 25.25%,
    50% 15%,
    25.25% 25.25%,
    15% 50%,
    25.25% 74.75%,
    50% 85%,
    74.75% 74.75%,
    85% 50%,
    74.75% 25.25%,
    100% 50%
  );
}
.loader12:before {
  content: '';
  position: absolute;
  inset: 0 35% 70%;
  border-radius: 50%;
  background: #000;
  filter: blur(15px);
  transform-origin: 50% 165%;
  animation: l12 1.5s linear infinite;
}
@keyframes l12 {
  to {
    rotate: 1turn;
  }
}
`,
  ],
  rolling: [
    `.loader1 {
  display: inline-grid;
  width: 80px;
  aspect-ratio: 1;
}
.loader1:before,
.loader1:after {
  content: '';
  grid-area: 1/1;
  border-radius: 50%;
}
.loader1:before {
  margin: 25%;
  background: repeating-conic-gradient(#c02942 0 60deg, #0b486b 0 120deg);
  transform: rotate(0turn) translate(50%) rotate(0turn);
  animation: l1 3s linear infinite;
}
.loader1:after {
  padding: 10%;
  margin: -10%;
  background: repeating-conic-gradient(from -15deg, #c02942 0 30deg, #0b486b 0 60deg);
  mask:
    conic-gradient(#000 0 0) content-box exclude,
    conic-gradient(#000 0 0);
}
@keyframes l1 {
  to {
    transform: rotate(1turn) translate(50%) rotate(-2turn);
  }
}`,
    `
.loader2 {
  display: inline-grid;
  width: 80px;
  aspect-ratio: 1;
}
.loader2:before,
.loader2:after {
  content: '';
  grid-area: 1/1;
  border-radius: 50%;
}
.loader2:before {
  margin: 25%;
  background: repeating-conic-gradient(#c02942 0 60deg, #0b486b 0 120deg);
  transform: rotate(0turn) translate(50%) rotate(0turn);
  animation: l2 2s alternate infinite ease-in-out;
}
.loader2:after {
  padding: 10%;
  margin: -10%;
  background: repeating-conic-gradient(from -15deg, #c02942 0 30deg, #0b486b 0 60deg);
  mask:
    conic-gradient(from 75deg, #000 210deg, #0000 0) content-box exclude,
    conic-gradient(from 75deg, #000 210deg, #0000 0);
}
@keyframes l2 {
  to {
    transform: rotate(0.5turn) translate(50%) rotate(-1turn);
  }
}`,
    `
.loader3 {
  display: inline-grid;
  width: 80px;
  aspect-ratio: 1;
}
.loader3:before,
.loader3:after {
  content: '';
  grid-area: 1/1;
  border-radius: 50%;
  animation: l3-0 2s alternate infinite ease-in-out;
}
.loader3:before {
  margin: 25%;
  background: repeating-conic-gradient(#c02942 0 60deg, #0b486b 0 120deg);
  translate: 0 50%;
  rotate: -150deg;
}
.loader3:after {
  padding: 10%;
  margin: -10%;
  background: repeating-conic-gradient(#0b486b 0 30deg, #c02942 0 60deg);
  mask:
    linear-gradient(#0000 50%, #000 0) content-box exclude,
    linear-gradient(#0000 50%, #000 0);
  rotate: -75deg;
  animation-name: l3-1;
}
@keyframes l3-0 {
  to {
    rotate: 150deg;
  }
}
@keyframes l3-1 {
  to {
    rotate: 75deg;
  }
}`,
    `
.loader4 {
  display: inline-grid;
  width: 80px;
  aspect-ratio: 2;
  overflow: hidden;
  border-image: 1 0/0 0 8px/0 0 8px repeating-linear-gradient(90deg, #0b486b 0 26%, #c02942 0 52%);
}
.loader4:before {
  content: '';
  margin: 0 25%;
  border-radius: 50%;
  background: repeating-conic-gradient(#c02942 0 60deg, #0b486b 0 120deg);
  transform: translate(-154%, 0) rotate(0turn);
  animation: l4 3s linear infinite;
}
@keyframes l4 {
  to {
    transform: translate(160%, 0) rotate(1turn);
  }
}`,
    `
.loader5 {
  display: inline-grid;
  width: 40px;
  aspect-ratio: 1;
}
.loader5:before,
.loader5:after {
  content: '';
  grid-area: 1/1;
  border-radius: 50%;
  background: repeating-conic-gradient(#c02942 0 60deg, #0b486b 0 120deg);
}
.loader5:before {
  transform: rotate(0turn) translate(100%) rotate(0turn);
  animation: l5 4s linear infinite;
}
.loader5:after {
  padding: 20%;
  mask:
    conic-gradient(#000 0 0) content-box exclude,
    conic-gradient(#000 0 0);
  scale: -1 1;
}
@keyframes l5 {
  to {
    transform: rotate(1turn) translate(100%) rotate(1turn);
  }
}`,
    `
.loader6 {
  display: inline-grid;
  width: 40px;
  aspect-ratio: 1;
}
.loader6:before,
.loader6:after {
  content: '';
  grid-area: 1/1;
  border-radius: 50%;
  background: repeating-conic-gradient(#c02942 0 60deg, #0b486b 0 120deg);
  animation: l6 4s linear infinite;
}
.loader6:before {
  translate: 0 -100%;
}
.loader6:after {
  padding: 20%;
  mask:
    conic-gradient(#000 0 0) content-box exclude,
    conic-gradient(#000 0 0);
  animation-direction: reverse;
}
@keyframes l6 {
  to {
    rotate: 1turn;
  }
}`,
    `
.loader7 {
  display: inline-grid;
  width: 40px;
  aspect-ratio: 1;
}
.loader7:before,
.loader7:after {
  content: '';
  grid-area: 1/1;
  border-radius: 50%;
  background: repeating-conic-gradient(#c02942 0 60deg, #0b486b 0 120deg);
  animation: l7 2s infinite alternate ease-in-out;
  rotate: 90deg;
}
.loader7:before {
  translate: 0 -100%;
}
.loader7:after {
  padding: 20%;
  mask:
    conic-gradient(from 120deg, #0000 120deg, #000 0) content-box exclude,
    conic-gradient(from 120deg, #0000 120deg, #000 0);
  animation-direction: alternate-reverse;
}
@keyframes l7 {
  to {
    rotate: -90deg;
  }
}`,
    `
.loader8 {
  display: inline-grid;
  width: 80px;
  aspect-ratio: 2;
  box-sizing: content-box;
  border-bottom: 8px solid #0000;
  background: linear-gradient(90deg, #0b486b 50%, #c02942 0) 50% 100%/52% 8px border-box repeat-x;
  animation: l8-0 1s linear infinite;
}
.loader8:before {
  content: '';
  margin: 0 25%;
  border-radius: 50%;
  background: repeating-conic-gradient(#c02942 0 60deg, #0b486b 0 120deg);
  animation: l8-1 1s linear infinite;
}
@keyframes l8-0 {
  to {
    background-position: -58% 100%;
  }
}
@keyframes l8-1 {
  to {
    rotate: 120deg;
  }
}`,
    `
.loader9 {
  display: inline-grid;
  width: 40px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: repeating-conic-gradient(from 30deg, #c02942 0 60deg, #0b486b 0 120deg);
  animation: l9-0 3s linear infinite;
}
.loader9:before,
.loader9:after {
  content: '';
  grid-area: 1/1;
  border-radius: 50%;
  background: inherit;
  transform: rotate(0turn) translate(100%, 0);
  animation: l9-1 3s linear infinite;
}
.loader9:after {
  animation-delay: -1.5s;
}
@keyframes l9-0 {
  to {
    rotate: -1turn;
  }
}
@keyframes l9-1 {
  to {
    transform: rotate(1turn) translate(100%, 0) rotate(1turn);
  }
}`,
    `
.loader10 {
  display: inline-grid;
  width: 40px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: repeating-conic-gradient(from 30deg,#C02942 0 60deg,#0B486B 0 120deg);
  animation: l10-0 2s linear infinite;
}
.loader10:before,
.loader10:after {
  content:"";
  grid-area: 1/1;
  border-radius: 50%;
  background: inherit;
  transform: rotate(0turn) translate(100%,0);
  animation: l10-1 3s infinite ease-in-out;
}
.loader10:after {
  animation-delay: -1.5s;
}
@keyframes l10-0 {to{rotate: -1turn}}
@keyframes l10-1 {to{transform: rotate(1turn) translate(100%,0) rotate(1turn)}}
`,
  ],
  flipping: [
    `
  .loader1 {
  width: 40px;
  aspect-ratio: 1;
  background: #000;
  animation: l1 1s infinite;
}
@keyframes l1 {
  0% {
    transform: perspective(150px) rotateX(0deg);
  }
  100% {
    transform: perspective(150px) rotateX(180deg);
  }
}`,
    `
.loader2 {
  width: 40px;
  aspect-ratio: 1;
  animation:
    l2-1 2s infinite linear,
    l2-2 1s infinite steps(1) alternate;
}
@keyframes l2-1 {
  0% {
    transform: perspective(150px) rotateX(0deg);
  }
  100% {
    transform: perspective(150px) rotateX(360deg);
  }
}
@keyframes l2-2 {
  0% {
    background: #ffa516;
  }
  50% {
    background: #f03355;
  }
}`,
    `
.loader3 {
  width: 40px;
  aspect-ratio: 1;
  animation:
    l3-1 2s infinite linear,
    l3-2 3s infinite steps(1) -0.5s;
}
@keyframes l3-1 {
  0% {
    transform: perspective(150px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(150px) rotateX(180deg) rotateY(0deg);
  }
  100% {
    transform: perspective(150px) rotateX(180deg) rotateY(180deg);
  }
}
@keyframes l3-2 {
  0% {
    background: #ffa516;
  }
  33% {
    background: #f03355;
  }
  66% {
    background: #25b09b;
  }
}`,
    `
.loader4 {
  width: 60px;
  aspect-ratio: 1;
  display: grid;
  grid: 50%/50%;
  animation: l4-0 2s infinite steps(1);
}
.loader4::before {
  content: '';
  transform-origin: bottom;
  animation:
    l4-1 0.5s infinite linear alternate,
    l4-2 0.5s infinite steps(1) alternate;
}
@keyframes l4-0 {
  0% {
    transform: scale(1, 1) rotate(0deg);
  }
  25% {
    transform: scale(1, -1) rotate(90deg);
  }
  50% {
    transform: scale(-1, -1) rotate(0deg);
  }
  75% {
    transform: scale(-1, 1) rotate(90deg);
  }
}
@keyframes l4-1 {
  0% {
    transform: perspective(150px) rotateX(0deg);
  }
  100% {
    transform: perspective(150px) rotateX(180deg);
  }
}
@keyframes l4-2 {
  0% {
    background: #ffa516;
  }
  50% {
    background: #f03355;
  }
}`,
    `
.loader5 {
  width: 60px;
  aspect-ratio: 1;
  animation: l5-0 1s infinite steps(1);
}
.loader5::before,
.loader5::after {
  content: '';
  position: absolute;
  inset: 0 50% 50% 0;
  transform-origin: bottom right;
  animation:
    l5-1 0.5s infinite linear alternate,
    l5-2 0.5s infinite steps(1) alternate;
}
.loader5::after {
  --s: -1, -1;
}
@keyframes l5-0 {
  0% {
    transform: scale(1, 1) rotate(0deg);
  }
  50% {
    transform: scale(1, -1) rotate(90deg);
  }
}

@keyframes l5-1 {
  0% {
    transform: scale(var(--s, 1)) perspective(150px) rotateX(0deg);
  }
  100% {
    transform: scale(var(--s, 1)) perspective(150px) rotateX(180deg);
  }
}
@keyframes l5-2 {
  0% {
    background: #25b09b;
  }
  50% {
    background: #514b82;
  }
}`,
    `
.loader6 {
  width: 60px;
  aspect-ratio: 1;
  display: grid;
  grid: 50%/50%;
  color: #25b09b;
  --_g: no-repeat linear-gradient(currentColor 0 0);
  background: var(--_g), var(--_g), var(--_g);
  background-size: 50.1% 50.1%;
  animation:
    l6-0 1.5s infinite steps(1) alternate,
    l6-0-0 3s infinite steps(1);
}
.loader6::before {
  content: '';
  background: currentColor;
  transform: perspective(150px) rotateY(0deg) rotateX(0deg);
  transform-origin: bottom right;
  animation: l6-1 1.5s infinite linear alternate;
}
@keyframes l6-0 {
  0% {
    background-position:
      0 100%,
      100% 100%,
      100% 0;
  }
  33% {
    background-position:
      100% 100%,
      100% 100%,
      100% 0;
  }
  66% {
    background-position:
      100% 0,
      100% 0,
      100% 0;
  }
}
@keyframes l6-0-0 {
  0% {
    transform: scaleX(1) rotate(0deg);
  }
  50% {
    transform: scaleX(-1) rotate(-90deg);
  }
}
@keyframes l6-1 {
  16.5% {
    transform: perspective(150px) rotateX(-90deg) rotateY(0deg) rotateX(0deg);
    filter: grayscale(0.8);
  }
  33% {
    transform: perspective(150px) rotateX(-180deg) rotateY(0deg) rotateX(0deg);
  }
  66% {
    transform: perspective(150px) rotateX(-180deg) rotateY(-180deg) rotateX(0deg);
  }
  100% {
    transform: perspective(150px) rotateX(-180deg) rotateY(-180deg) rotateX(-180deg);
    filter: grayscale(0.8);
  }
}`,
    `
.loader7 {
  width: 60px;
  aspect-ratio: 1;
  color: #ffa516;
  background:
    linear-gradient(currentColor 0 0) 100% 0,
    linear-gradient(currentColor 0 0) 0 100%;
  background-size: 50.1% 50.1%;
  background-repeat: no-repeat;
  animation: l7-0 1s infinite steps(1);
}
.loader7::before,
.loader7::after {
  content: '';
  position: absolute;
  inset: 0 50% 50% 0;
  background: currentColor;
  transform: scale(var(--s, 1)) perspective(150px) rotateY(0deg);
  transform-origin: bottom right;
  animation: l7-1 0.5s infinite linear alternate;
}
.loader7::after {
  --s: -1, -1;
}
@keyframes l7-0 {
  0% {
    transform: scaleX(1) rotate(0deg);
  }
  50% {
    transform: scaleX(-1) rotate(-90deg);
  }
}
@keyframes l7-1 {
  49.99% {
    transform: scale(var(--s, 1)) perspective(150px) rotateX(-90deg);
    filter: grayscale(0);
  }
  50% {
    transform: scale(var(--s, 1)) perspective(150px) rotateX(-90deg);
    filter: grayscale(0.8);
  }
  100% {
    transform: scale(var(--s, 1)) perspective(150px) rotateX(-180deg);
    filter: grayscale(0.8);
  }
}`,
    `
.loader8 {
  width: 60px;
  aspect-ratio: 1;
  display: flex;
  animation: l8-0 2s infinite sptes(1);
}
.loader8::before,
.loader8::after {
  content: '';
  flex: 1;
  animation:
    l8-1 1s infinite linear alternate,
    l8-2 2s infinite steps(1) -0.5s;
}
.loader8::after {
  --s: -1, -1;
}
@keyframes l8-0 {
  0% {
    transform: scaleX(1) rotate(0deg);
  }
  50% {
    transform: scaleX(-1) rotate(-90deg);
  }
}
@keyframes l8-1 {
  0%,
  5% {
    transform: scale(var(--s, 1)) translate(0px) perspective(150px) rotateY(0deg);
  }
  33% {
    transform: scale(var(--s, 1)) translate(-10px) perspective(150px) rotateX(0deg);
  }
  66% {
    transform: scale(var(--s, 1)) translate(-10px) perspective(150px) rotateX(-180deg);
  }
  95%,
  100% {
    transform: scale(var(--s, 1)) translate(0px) perspective(150px) rotateX(-180deg);
  }
}
@keyframes l8-2 {
  0% {
    background: #f03355;
  }
  50% {
    background: #ffa516;
  }
}`,
    `
.loader9 {
  width: 60px;
  aspect-ratio: 1;
  display: grid;
  grid: 50%/50%;
  color: #ffa516;
  border-radius: 50%;
  --_g: no-repeat linear-gradient(currentColor 0 0);
  background: var(--_g), var(--_g), var(--_g);
  background-size: 50.1% 50.1%;
  animation:
    l9-0 1.5s infinite steps(1) alternate,
    l9-0-0 3s infinite steps(1) alternate;
}
.loader9::before {
  content: '';
  background: currentColor;
  border-top-left-radius: 100px;
  transform: perspective(150px) rotateY(0deg) rotateX(0deg);
  transform-origin: bottom right;
  animation: l9-1 1.5s infinite linear alternate;
}
@keyframes l9-0 {
  0% {
    background-position:
      0 100%,
      100% 100%,
      100% 0;
  }
  33% {
    background-position:
      100% 100%,
      100% 100%,
      100% 0;
  }
  66% {
    background-position:
      100% 0,
      100% 0,
      100% 0;
  }
}
@keyframes l9-0-0 {
  0% {
    transform: scaleX(1) rotate(0deg);
  }
  50% {
    transform: scaleX(-1) rotate(-90deg);
  }
}
@keyframes l9-1 {
  16.5% {
    transform: perspective(150px) rotateX(-90deg) rotateY(0deg) rotateX(0deg);
    filter: grayscale(0.8);
  }
  33% {
    transform: perspective(150px) rotateX(-180deg) rotateY(0deg) rotateX(0deg);
  }
  66% {
    transform: perspective(150px) rotateX(-180deg) rotateY(-180deg) rotateX(0deg);
  }
  100% {
    transform: perspective(150px) rotateX(-180deg) rotateY(-180deg) rotateX(-180deg);
    filter: grayscale(0.8);
  }
}`,
    `
.loader10 {
  width: 60px;
  aspect-ratio: 1;
  display: flex;
  animation: l10-0 2s infinite steps(1);
}
.loader10::before,
.loader10::after {
  content: '';
  flex: 1;
  animation:
    l10-1 1s infinite linear alternate,
    l10-2 2s infinite steps(1) -0.5s;
}
.loader10::after {
  --s: -1, -1;
}
@keyframes l10-0 {
  0% {
    transform: scaleX(1) rotate(0deg);
  }
  50% {
    transform: scaleX(-1) rotate(-90deg);
  }
}
@keyframes l10-1 {
  0%,
  5% {
    transform: scale(var(--s, 1)) translate(0px) perspective(150px) rotateY(0deg);
  }
  33% {
    transform: scale(var(--s, 1)) translate(-10px) perspective(150px) rotateX(0deg);
  }
  66% {
    transform: scale(var(--s, 1)) translate(-10px) perspective(150px) rotateX(-180deg);
  }
  95%,
  100% {
    transform: scale(var(--s, 1)) translate(0px) perspective(150px) rotateX(-180deg);
  }
}
@keyframes l10-2 {
  0% {
    background: #514b82;
    border-radius: 0;
  }
  50% {
    background: #25b09b;
    border-radius: 100px 0 0 100px;
  }
}`,
    `
.loader11 {
  width: 60px;
  aspect-ratio: 1;
  display: flex;
  animation: l11-0 2s infinite linear;
}
.loader11::before,
.loader11::after {
  content: '';
  flex: 1;
  clip-path: polygon(100% 0, 100% 100%, 0 50%);
  animation:
    l11-1 1s infinite linear alternate,
    l11-2 2s infinite linear -0.5s;
}
.loader11::after {
  --s: -1, -1;
}
@keyframes l11-0 {
  0%,
  49.99% {
    transform: scaleX(1) rotate(0deg);
  }
  50%,
  100% {
    transform: scaleX(-1) rotate(-90deg);
  }
}
@keyframes l11-1 {
  0%,
  5% {
    transform: scale(var(--s, 1)) translate(0px) perspective(150px) rotateY(0deg);
  }
  33% {
    transform: scale(var(--s, 1)) translate(-10px) perspective(150px) rotateX(0deg);
  }
  66% {
    transform: scale(var(--s, 1)) translate(-10px) perspective(150px) rotateX(-180deg);
  }
  95%,
  100% {
    transform: scale(var(--s, 1)) translate(0px) perspective(150px) rotateX(-180deg);
  }
}
@keyframes l11-2 {
  0%,
  49.99% {
    background: #eb9f9f;
  }
  50%,
  100% {
    background: #a79c8e;
  }
}`,
    `
.loader12 {
  width: 60px;
  aspect-ratio: 1;
  display: flex;
  animation: l12-0 4s infinite linear 0.5s;
}
.loader12::before,
.loader12::after {
  content: '';
  flex: 1;
  background: #a79c8e;
  clip-path: polygon(100% 0, 100% 100%, 0 50%);
  animation: l12-1 1s infinite linear;
}
.loader12::after {
  transform: scale(-1);
  animation: none;
}
@keyframes l12-0 {
  0%,
  12.49% {
    transform: rotate(0deg);
  }
  12.5%,
  37.49% {
    transform: rotate(90deg);
  }
  37.5%,
  62.49% {
    transform: rotate(180deg);
  }
  62.5%,
  87.49% {
    transform: rotate(270deg);
  }
  87.5%,
  100% {
    transform: rotate(360deg);
  }
}
@keyframes l12-1 {
  0%,
  5% {
    transform: translate(0px) perspective(150px) rotateY(0deg);
  }
  33% {
    transform: translate(-10px) perspective(150px) rotateX(0deg);
  }
  66% {
    transform: translate(-10px) perspective(150px) rotateX(-180deg);
  }
  95%,
  100% {
    transform: translate(0px) perspective(150px) rotateX(-180deg);
  }
}`,
    `
.loader13 {
  width: 60px;
  aspect-ratio: 1;
  display: flex;
  animation: l13-0 4s infinite linear 0.5s;
}
.loader13::before,
.loader13::after {
  content: '';
  flex: 1;
  background: #fa6900;
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%, 0 75%, 0 25%);
  animation: l13-1 1s infinite linear;
}
.loader13::after {
  transform: scale(-1);
  animation: none;
}
@keyframes l13-0 {
  0%,
  12.49% {
    transform: rotate(0deg);
  }
  12.5%,
  37.49% {
    transform: rotate(90deg);
  }
  37.5%,
  62.49% {
    transform: rotate(180deg);
  }
  62.5%,
  87.49% {
    transform: rotate(270deg);
  }
  87.5%,
  100% {
    transform: rotate(360deg);
  }
}
@keyframes l13-1 {
  0%,
  5% {
    transform: translate(0px) perspective(150px) rotateY(0deg);
  }
  33% {
    transform: translate(-10px) perspective(150px) rotateX(0deg);
  }
  66% {
    transform: translate(-10px) perspective(150px) rotateX(-180deg);
  }
  95%,
  100% {
    transform: translate(0px) perspective(150px) rotateX(-180deg);
  }
}`,
    `
.loader14 {
  width: 60px;
  aspect-ratio: 1;
  display: flex;
}
.loader14::before,
.loader14::after {
  content: '';
  flex: 1;
  animation: l14 1.5s -0.25s infinite linear alternate both;
}
.loader14::after {
  --s: -1, -1;
  animation-delay: 0.5s;
}
@keyframes l14 {
  0%,
  30% {
    transform: scale(var(--s, 1)) translate(0px) perspective(150px) rotateY(0deg);
    clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%, 0 75%, 0 25%);
    background: #fa6900;
  }
  37.5% {
    transform: scale(var(--s, 1)) translate(-10px) perspective(150px) rotateX(0deg);
    clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%, 0 75%, 0 25%);
    background: #fa6900;
  }
  50% {
    transform: scale(var(--s, 1)) translate(-10px) perspective(150px) rotateX(-90deg);
    clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%, 0 75%, 0 25%);
    background: #fa6900;
    border-radius: 0;
  }
  50.01% {
    transform: scale(var(--s, 1)) translate(-10px) perspective(150px) rotateX(-90.1deg);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 100%, 0 100%, 0 25%);
    background: #2fb8ac;
    border-radius: 100px 0 0 100px;
  }
  62.5% {
    transform: scale(var(--s, 1)) translate(-10px) perspective(150px) rotateX(-180deg);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 100%, 0 100%, 0 25%);
    background: #2fb8ac;
    border-radius: 100px 0 0 100px;
  }
  70%,
  100% {
    transform: scale(var(--s, 1)) translate(0px) perspective(150px) rotateX(-180deg);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 100%, 0 100%, 0 25%);
    background: #2fb8ac;
    border-radius: 100px 0 0 100px;
  }
}`,
    `
.loader15 {
  width: 80px;
  height: 40px;
  display: flex;
}
.loader15::before,
.loader15::after {
  content: '';
  flex: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%);
  background: #fc3a51;
  animation:
    l15-1 1s infinite linear alternate,
    l15-2 2s infinite linear -0.5s;
}
.loader15::after {
  --s: -1, -1;
}
@keyframes l15-1 {
  0%,
  10% {
    transform: scale(var(--s, 1)) translate(0px) perspective(150px) rotateY(0deg);
  }
  33% {
    transform: scale(var(--s, 1)) translate(-10px) perspective(150px) rotateX(0deg);
  }
  66% {
    transform: scale(var(--s, 1)) translate(-10px) perspective(150px) rotateX(-180deg);
  }
  90%,
  100% {
    transform: scale(var(--s, 1)) translate(0px) perspective(150px) rotateX(-180deg);
  }
}
@keyframes l15-2 {
  0%,
  49.99% {
    background: #fc3a51;
  }
  50%,
  100% {
    background: #eb9f9f;
  }
}`,
    `
.loader16 {
  width: 50px;
  aspect-ratio: 1;
  display: flex;
  color: orange;
  background:
    linear-gradient(currentColor 0 0) right / 51% 100%,
    linear-gradient(currentColor 0 0) bottom / 100% 51%;
  background-repeat: no-repeat;
  animation: l16-0 2s infinite linear 0.25s;
}
.loader16::before {
  content: '';
  width: 50%;
  height: 50%;
  background: currentColor;
  animation: l16-1 0.5s infinite linear;
}
@keyframes l16-0 {
  0%,
  12.49% {
    transform: rotate(0deg);
  }
  12.5%,
  37.49% {
    transform: rotate(90deg);
  }
  37.5%,
  62.49% {
    transform: rotate(180deg);
  }
  62.5%,
  87.49% {
    transform: rotate(270deg);
  }
  87.5%,
  100% {
    transform: rotate(360deg);
  }
}
@keyframes l16-1 {
  0% {
    transform: perspective(80px) rotate3d(-1, -1, 0, 0);
  }
  80%,
  100% {
    transform: perspective(80px) rotate3d(-1, -1, 0, -180deg);
  }
}`,
    `
.loader17 {
  width: 50px;
  height: 50px;
  display: flex;
  color: #514b82;
  background:
    linear-gradient(currentColor 0 0) right / 51% 100%,
    linear-gradient(currentColor 0 0) bottom / 100% 51%;
  background-repeat: no-repeat;
  animation: l17-0 2s infinite linear 0.25s;
}
.loader17::before {
  content: '';
  width: 50%;
  height: 50%;
  background: currentColor;
  transform-origin: 10% 10%;
  animation: l17-1 0.5s infinite linear;
}
@keyframes l17-0 {
  0%,
  12.49% {
    transform: rotate(0deg);
  }
  12.5%,
  37.49% {
    transform: rotate(90deg);
  }
  37.5%,
  62.49% {
    transform: rotate(180deg);
  }
  62.5%,
  87.49% {
    transform: rotate(270deg);
  }
  87.5%,
  100% {
    transform: rotate(360deg);
  }
}
@keyframes l17-1 {
  0% {
    transform: perspective(80px) rotate3d(-1, 1, 0, 0);
  }
  80%,
  100% {
    transform: perspective(80px) rotate3d(-1, 1, 0, -360deg);
  }
}`,
    `
.loader18 {
  width: 60px;
  height: 60px;
  display: flex;
  color: #fc3a51;
  --c: #0000 calc(100% - 20px), currentColor calc(100% - 19px) 98%, #0000;
  background:
    radial-gradient(farthest-side at left, var(--c)) right / 50% 100%,
    radial-gradient(farthest-side at top, var(--c)) bottom/100% 50%;
  background-repeat: no-repeat;
  animation: l18-0 2s infinite linear 0.25s;
}
.loader18::before {
  content: '';
  width: 50%;
  height: 50%;
  background: radial-gradient(farthest-side at bottom right, var(--c));
  animation: l18-1 0.5s infinite linear;
}
@keyframes l18-0 {
  0%,
  12.49% {
    transform: rotate(0deg);
  }
  12.5%,
  37.49% {
    transform: rotate(90deg);
  }
  37.5%,
  62.49% {
    transform: rotate(180deg);
  }
  62.5%,
  87.49% {
    transform: rotate(270deg);
  }
  87.5%,
  100% {
    transform: rotate(360deg);
  }
}
@keyframes l18-1 {
  0% {
    transform: perspective(150px) rotateY(0) rotate(0);
  }
  50% {
    transform: perspective(150px) rotateY(180deg) rotate(0);
  }
  80%,
  100% {
    transform: perspective(150px) rotateY(180deg) rotate(90deg);
  }
}`,
    `
.loader19 {
  width: 60px;
  aspect-ratio: 1;
  display: grid;
}
.loader19:before,
.loader19:after {
  content: '';
  grid-area: 1/1;
  color: #25b09b;
  animation: l19 1.5s infinite linear;
}
.loader19:before {
  margin: 5px 20px;
  background: currentColor;
}
.loader19:after {
  border: solid;
  border-width: 5px 20px;
  --s: 0;
}
@keyframes l19 {
  0% {
    transform: perspective(100px) rotate3d(1, var(--s, 1), 0, 0);
  }
  25% {
    transform: perspective(100px) rotate3d(1, var(--s, 1), 0, 90deg);
  }
  25.01% {
    transform: perspective(100px) rotate3d(1, var(--s, 1), 0, 90deg);
  }
  40%,
  60% {
    transform: perspective(100px) rotate3d(1, var(--s, 1), 0, 180deg);
  }
  75% {
    transform: perspective(100px) rotate3d(1, var(--s, 1), 0, 270deg);
  }
  75.01% {
    transform: perspective(100px) rotate3d(1, var(--s, 1), 0, 270deg);
  }
  90%,
  100% {
    transform: perspective(100px) rotate3d(1, var(--s, 1), 0, 360deg);
  }
}`,
    `
.loader20 {
  width: 60px;
  height: 60px;
  display: grid;
}
.loader20:before,
.loader20:after {
  content: "";
  grid-area: 1/1;
  background: #514b82;
  clip-path: polygon(0 0,100% 0,100% 100%,75% 25%,0 0,0 100%,100% 100%,25% 75%,0 0);
  animation: l20 1.5s infinite linear;
}
.loader20:after {
  clip-path: polygon(0 0,76% 24%,100% 100%,24% 76%);
  --s:0;
}
@keyframes l20 {
  0%      {transform: perspective(100px) rotate3d(1,var(--s,1),0,0)      }
  25%     {transform: perspective(100px) rotate3d(1,var(--s,1),0,-90deg) }
  25.01%  {transform: perspective(100px) rotate3d(1,var(--s,1),0,-90deg) }
  40%,60% {transform: perspective(100px) rotate3d(1,var(--s,1),0,-180deg)}
  75%     {transform: perspective(100px) rotate3d(1,var(--s,1),0,-270deg)}
  75.01%  {transform: perspective(100px) rotate3d(1,var(--s,1),0,-270deg)}
  90%,100%{transform: perspective(100px) rotate3d(1,var(--s,1),0,-360deg)}
}
`,
  ],
  growing: [
    `
    .loader1 {
  width: 64px;
  aspect-ratio: 1;
  display: grid;
}
.loader1:before {
  content: '';
  border: 8px solid #bd1550;
  box-sizing: content-box;
  margin: auto;
  aspect-ratio: 1;
  animation: l1 infinite 1s steps(4, jump-none);
}
@keyframes l1 {
  0% {
    width: 0%;
  }
  to {
    width: 75%;
  }
}`,
    `
    .loader2 {
  width: 64px;
  aspect-ratio: 1;
  display: grid;
}
.loader2:before {
  content: '';
  border: 8px solid #bd1550;
  border-radius: 50%;
  box-sizing: content-box;
  margin: auto;
  aspect-ratio: 1;
  animation: l2 infinite 1s steps(4, jump-none);
}
@keyframes l2 {
  0% {
    width: 0%;
  }
  to {
    width: 75%;
  }
}`,
    `
    .loader3 {
  --b: 15px;
  width: calc(5 * var(--b));
  aspect-ratio: 1 / cos(30deg);
  display: grid;
}
.loader3:before {
  content: '';
  background: #bd1550;
  aspect-ratio: inherit;
  clip-path: polygon(
    50% 0,
    100% 100%,
    0 100%,
    50% 0,
    50% var(--b),
    calc(var(--b) * cos(30deg)) calc(100% - var(--b) / 2),
    calc(100% - var(--b) * cos(30deg)) calc(100% - var(--b) / 2),
    50% var(--b)
  );
  margin: auto;
  animation: l3 infinite 1s steps(4, jump-none);
}
@keyframes l3 {
  0% {
    width: 36%;
  }
  to {
    width: 100%;
  }
}`,
    `
    .loader4 {
  --b: 9px;
  width: calc(8 * var(--b));
  aspect-ratio: 1 / cos(30deg);
  display: grid;
}
.loader4:before {
  content: '';
  background: #bd1550;
  aspect-ratio: inherit;
  clip-path: polygon(
    0 50%,
    50% -50%,
    100% 50%,
    50% 150%,
    0 50%,
    var(--b) 50%,
    calc(25% + var(--b) * cos(60deg)) calc(100% - var(--b) * sin(60deg)),
    calc(75% - var(--b) * cos(60deg)) calc(100% - var(--b) * sin(60deg)),
    calc(100% - var(--b)) 50%,
    calc(75% - var(--b) * cos(60deg)) calc(var(--b) * sin(60deg)),
    calc(25% + var(--b) * cos(60deg)) calc(var(--b) * sin(60deg)),
    var(--b) 50%
  );
  margin: auto;
  animation: l4 infinite 1s steps(4, jump-none);
}
@keyframes l4 {
  0% {
    width: 25%;
  }
  to {
    width: 100%;
  }
}`,
    `
    .loader5 {
  width: 80px;
  aspect-ratio: 1;
  display: grid;
}
.loader5:before {
  content: '';
  background: #bd1550;
  aspect-ratio: inherit;
  aspect-ratio: 1;
  clip-path: polygon(
    79.39% 90.45%,
    50% 69%,
    20.61% 90.45%,
    31.93% 55.87%,
    2.45% 34.55%,
    38.83% 34.63%,
    50% 0%,
    61.17% 34.63%,
    97.55% 34.55%,
    68.07% 55.87%,
    79.39% 90.45%,
    50% 69%,
    calc(50% - 0px) calc(69% - 6.84px),
    calc(79.39% - 10.58px) calc(90.45% - 14.56px),
    calc(68.07% - 6.51px) calc(55.87% - 2.11px),
    calc(97.55% - 17.12px) calc(34.55% - -5.56px),
    calc(61.17% - 4.02px) calc(34.63% - -5.53px),
    calc(50% - 0px) calc(0% - -18px),
    calc(38.83% - -4.02px) calc(34.63% - -5.53px),
    calc(2.45% - -17.12px) calc(34.55% - -5.56px),
    calc(31.93% - -6.51px) calc(55.87% - 2.11px),
    calc(20.61% - -10.58px) calc(90.45% - 14.56px),
    calc(50% - 0px) calc(69% - 6.84px),
    calc(79.39% - 10.58px) calc(90.45% - 14.56px)
  );
  margin: auto;
  animation: l5 infinite 1s steps(4, jump-none);
}
@keyframes l5 {
  0% {
    width: 45%;
  }
  to {
    width: 100%;
  }
}`,
    `
    .loader6 {
  width: 80px;
  aspect-ratio: 1;
  display: grid;
}
.loader6:before {
  content: '';
  background: #bd1550;
  aspect-ratio: inherit;
  aspect-ratio: 1;
  clip-path: polygon(
    91.57% 77.78%,
    65.56% 73.28%,
    59.75% 99.04%,
    44.54% 77.46%,
    22.22% 91.57%,
    26.72% 65.56%,
    0.96% 59.75%,
    22.54% 44.54%,
    8.43% 22.22%,
    34.44% 26.72%,
    40.25% 0.96%,
    55.46% 22.54%,
    77.78% 8.43%,
    73.28% 34.44%,
    99.04% 40.25%,
    77.46% 55.46%,
    91.57% 77.78%,
    65.56% 73.28%,
    calc(65.56% - 5.6px) calc(73.28% - 8.38px),
    calc(91.57% - 14.97px) calc(77.78% - 10px),
    calc(77.46% - 9.89px) calc(55.46% - 1.97px),
    calc(99.04% - 17.65px) calc(40.25% - -3.51px),
    calc(73.28% - 8.38px) calc(34.44% - -5.6px),
    calc(77.78% - 10px) calc(8.43% - -14.97px),
    calc(55.46% - 1.97px) calc(22.54% - -9.89px),
    calc(40.25% - -3.51px) calc(0.96% - -17.65px),
    calc(34.44% - -5.6px) calc(26.72% - -8.38px),
    calc(8.43% - -14.97px) calc(22.22% - -10px),
    calc(22.54% - -9.89px) calc(44.54% - -1.97px),
    calc(0.96% - -17.65px) calc(59.75% - 3.51px),
    calc(26.72% - -8.38px) calc(65.56% - 5.6px),
    calc(22.22% - -10px) calc(91.57% - 14.97px),
    calc(44.54% - -1.97px) calc(77.46% - 9.89px),
    calc(59.75% - 3.51px) calc(99.04% - 17.65px),
    calc(65.56% - 5.6px) calc(73.28% - 8.38px),
    calc(91.57% - 14.97px) calc(77.78% - 10px)
  );
  margin: auto;
  animation: l6 infinite 1s steps(4, jump-none);
}
@keyframes l6 {
  0% {
    width: 45%;
  }
  to {
    width: 100%;
  }
}`,
    `
    .loader7 {
  width: 64px;
  aspect-ratio: 1;
  display: grid;
}
.loader7:before {
  content: '';
  border: 8px solid #bd1550;
  box-sizing: content-box;
  margin: auto;
  aspect-ratio: 1;
  animation: l7 infinite 1s steps(4, jump-none);
}
@keyframes l7 {
  0% {
    width: 0%;
    rotate: 0;
  }
  to {
    width: 75%;
    rotate: 90deg;
  }
}`,
    `
    .loader8 {
  width: 64px;
  aspect-ratio: 1;
  display: grid;
}
.loader8:before,
.loader8:after {
  content: '';
  grid-area: 1/1;
  border: 8px solid #bd1550;
  box-sizing: content-box;
  margin: auto;
  aspect-ratio: 1;
  animation: l8 infinite 1s steps(4, jump-none);
}
.loader8:after {
  animation-delay: -0.5s;
  border-radius: 50%;
}
@keyframes l8 {
  0% {
    width: 0%;
  }
  to {
    width: 75%;
  }
}`,
    `
    .loader9 {
  height: 64px;
  aspect-ratio: 1.5;
  display: flex;
  gap: 8px;
}
.loader9:before,
.loader9:after {
  content: '';
  border: 8px solid #bd1550;
  border-radius: 50%;
  box-sizing: content-box;
  margin: auto;
  aspect-ratio: 1;
  animation: l9 infinite 1s steps(4, jump-none);
}
.loader9:after {
  animation-direction: reverse;
}
@keyframes l9 {
  0% {
    width: 0%;
  }
  to {
    width: 75%;
  }
}`,
    `.loader10 {
  height: 64px;
  aspect-ratio: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.loader10:before,
.loader10:after {
  content: "";
  border: 8px solid #BD1550;
  box-sizing: content-box;
  margin: auto;
  aspect-ratio: 1;
  animation:
    l10-0 infinite .5s  steps(4,jump-none) alternate,
    l10-1 infinite  2s steps(2,jump-none);
}
.loader10:after {
  animation-delay: -.3s;
}
@keyframes l10-0 {
  0% {width: 0% }
  to {width: 75%}
}
@keyframes l10-1 {
  0% {border-radius: 0%  }
  to {border-radius: 100%}
}
`,
  ],
  continuous: [
    `
    .loader1 {
  width: 120px;
  height: 20px;
  background: linear-gradient(90deg, #0001 33%, #0005 50%, #0001 66%) #f2f2f2;
  background-size: 300% 100%;
  animation: l1 1s infinite linear;
}
@keyframes l1 {
  0% {
    background-position: right;
  }
}`,
    `
.loader2 {
  width: 120px;
  height: 20px;
  background: linear-gradient(90deg, #0000, orange) left -50px top 0/50px 20px no-repeat lightblue;
  animation: l2 1s infinite linear;
}
@keyframes l2 {
  100% {
    background-position: right -50px top 0;
  }
}`,
    `
.loader3 {
  width: 120px;
  height: 20px;
  transform: skewX(-45deg);
  background: linear-gradient(#f03355 0 0) left -30px top 0/30px 20px no-repeat #ccc;
  animation: l3 1s infinite linear;
}

@keyframes l3 {
  100% {
    background-position: right -30px top 0;
  }
}`,
    `
.loader4 {
  width: 120px;
  height: 22px;
  border-radius: 40px;
  color: #514b82;
  border: 2px solid;
  position: relative;
  overflow: hidden;
}
.loader4::before {
  content: '';
  position: absolute;
  margin: 2px;
  width: 14px;
  top: 0;
  bottom: 0;
  left: -20px;
  border-radius: inherit;
  background: currentColor;
  box-shadow: -10px 0 12px 3px currentColor;
  clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 95%, -30px 50%);
  animation: l14 1s infinite linear;
}
@keyframes l14 {
  100% {
    left: calc(100% + 20px);
  }
}`,
    `
.loader5 {
  width: 120px;
  height: 20px;
  background:
    linear-gradient(#25b09b 0 0) left -40px top 0/40px 20px,
    linear-gradient(#ddd 0 0) center/100% 50%;
  background-repeat: no-repeat;
  animation: l5 1s infinite linear;
}
@keyframes l5 {
  100% {
    background-position:
      right -40px top 0,
      center;
  }
}`,
    `
.loader6 {
  width: 120px;
  height: 20px;
  background:
    radial-gradient(circle 10px, #000 95%, #0000) right / calc(200% + 20px) 100%,
    linear-gradient(#000 0 0) center/100% 6px;
  background-repeat: no-repeat;
  mask: radial-gradient(circle 4px, #0000 93%, #000) right/calc(200% + 20px) 100%;
  -webkit-mask: radial-gradient(circle 4px, #0000 93%, #000) right/calc(200% + 20px) 100%;
  animation: l6 1s infinite linear;
}
@keyframes l6 {
  100% {
    background-position: left;
    -webkit-mask-position: left;
  }
}`,
    `
.loader7 {
  width: 120px;
  height: 20px;
  mask: linear-gradient(90deg, #000 70%, #0000 0) left/20% 100%;
  -webkit-mask: linear-gradient(90deg, #000 70%, #0000 0) left/20% 100%;
  background: linear-gradient(#000 0 0) left -25% top 0 /20% 100% no-repeat #ddd;
  animation: l7 1s infinite steps(6);
}
@keyframes l7 {
  100% {
    background-position: right -25% top 0;
  }
}`,
    `
.loader8 {
  width: 40px;
  aspect-ratio: 1;
  background: linear-gradient(
      to bottom right,
      #0000 calc(50% - 40px),
      #fff 50%,
      #0000 calc(50% + 40px)
    )
    bottom right/calc(200% + 80px) calc(200% + 80px) orange;
  animation: l8 1s infinite;
}
@keyframes l8 {
  100% {
    background-position: top left;
  }
}`,
    `
.loader9 {
  width: 120px;
  height: 20px;
  background: radial-gradient(circle closest-side, #f03355 94%, #0000) 50% 50% / calc(50% + 10px)
    70% repeat-x #ccc;
  animation: l9 1s infinite cubic-bezier(0.3, 1, 0, 1);
}
@keyframes l9 {
  100% {
    background-position: calc(200% - 5px);
  }
}`,
    `
.loader10 {
  width: 120px;
  height: 20px;
  background: linear-gradient(#514b82 0 0) left -40px top 0/40px 100% no-repeat #eee;
  mask: conic-gradient(from 90deg at 5px 5px, #0000 25%, #000 0) 0 0 / calc((100% - 5px) / 5)
    calc(100% - 5px);
  -webkit-mask: conic-gradient(from 90deg at 5px 5px, #0000 25%, #000 0) 0 0 /
    calc((100% - 5px) / 5) calc(100% - 5px);
  animation: l10 1s infinite linear;
}
@keyframes l10 {
  100% {
    background-position: right -40px top 0;
  }
}
`,
  ],
  pulsing: [
    `
    .loader1 {
  width: 20px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #000;
  box-shadow: 0 0 0 0 #0004;
  animation: l1 1s infinite;
}
@keyframes l1 {
  100% {
    box-shadow: 0 0 0 30px #0000;
  }
}`,
    `
.loader2 {
  width: 20px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #000;
  box-shadow: 0 0 0 0 #0004;
  animation: l2 1.5s infinite linear;
  position: relative;
}
.loader2:before,
.loader2:after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: 0 0 0 0 #0004;
  animation: inherit;
  animation-delay: -0.5s;
}
.loader2:after {
  animation-delay: -1s;
}
@keyframes l2 {
  100% {
    box-shadow: 0 0 0 40px #0000;
  }
}`,
    `
.loader3 {
  width: 50px;
  aspect-ratio: 1;
  color: #dc1818;
  background:
    radial-gradient(circle at 60% 65%, currentColor 62%, #0000 65%) top left,
    radial-gradient(circle at 40% 65%, currentColor 62%, #0000 65%) top right,
    linear-gradient(to bottom left, currentColor 42%, #0000 43%) bottom left,
    linear-gradient(to bottom right, currentColor 42%, #0000 43%) bottom right;
  background-size: 50% 50%;
  background-repeat: no-repeat;
  position: relative;
}
.loader3:after {
  content: '';
  position: absolute;
  inset: 0;
  background: inherit;
  opacity: 0.4;
  animation: l3 1s infinite;
}
@keyframes l3 {
  to {
    transform: scale(1.8);
    opacity: 0;
  }
}`,
    `
.loader4 {
  width: 60px;
  aspect-ratio: 1;
  position: relative;
}
.loader4:before,
.loader4:after {
  content: '';
  position: absolute;
  border-radius: 50%;
  inset: 0;
  background:
    radial-gradient(circle 10px, #f85c00 94%, #0000),
    repeating-conic-gradient(from -30deg, #0000 0 60deg, #f85c00 61deg 120deg);
  mask: radial-gradient(circle 15px, #000 calc(100% - 6px), #0000 calc(100% - 5px) 94%, #000);
  -webkit-mask: radial-gradient(
    circle 15px,
    #000 calc(100% - 6px),
    #0000 calc(100% - 5px) 94%,
    #000
  );
}
.loader4:after {
  animation: l4 1s infinite;
  transform: perspective(300px) translateZ(0px);
}
@keyframes l4 {
  to {
    transform: perspective(300px) translateZ(150px);
    opacity: 0;
  }
}`,
    `
.loader5 {
  width: 80px;
  aspect-ratio: 1;
  position: relative;
}
.loader5:before,
.loader5:after {
  content: '';
  position: absolute;
  inset: 0;
  background: #ffb940;
  box-shadow: 0 0 0 50px;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
}
.loader5:after {
  animation: l5 1s infinite;
  transform: perspective(300px) translateZ(0px);
}
@keyframes l5 {
  to {
    transform: perspective(300px) translateZ(150px);
    opacity: 0;
  }
}`,
    `
.loader6 {
  width: 40px;
  aspect-ratio: 1;
  position: relative;
  transform: rotate(45deg);
}
.loader6:before,
.loader6:after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50% 50% 0 50%;
  background: #514b82;
  mask: radial-gradient(circle 10px at 50% 50%, #0000 94%, #000);
  -webkit-mask: radial-gradient(circle 10px at 50% 50%, #0000 94%, #000);
}
.loader6:after {
  animation: l6 1s infinite;
  transform: perspective(300px) translateZ(0px);
}
@keyframes l6 {
  to {
    transform: perspective(300px) translateZ(150px);
    opacity: 0;
  }
}`,
    `
.loader7 {
  width: 108px;
  height: 60px;
  color: #269af2;
  --c: radial-gradient(farthest-side, currentColor 96%, #0000);
  background:
    var(--c) 100% 100% /30% 60%,
    var(--c) 70% 0 /50% 100%,
    var(--c) 0 100% /36% 68%,
    var(--c) 27% 18% /26% 40%,
    linear-gradient(currentColor 0 0) bottom/67% 58%;
  background-repeat: no-repeat;
  position: relative;
}
.loader7:after {
  content: '';
  position: absolute;
  inset: 0;
  background: inherit;
  opacity: 0.4;
  animation: l7 1s infinite;
}
@keyframes l7 {
  to {
    transform: scale(1.8);
    opacity: 0;
  }
}`,
    `
.loader8 {
  width: 65px;
  height: 117px;
  position: relative;
}
.loader8:before,
.loader8:after {
  content: '';
  position: absolute;
  inset: 0;
  background: #ff8001;
  box-shadow: 0 0 0 50px;
  clip-path: polygon(
    100% 0,
    23% 46%,
    46% 44%,
    15% 69%,
    38% 67%,
    0 100%,
    76% 57%,
    53% 58%,
    88% 33%,
    60% 37%
  );
}
.loader8:after {
  animation: l8 1s infinite;
  transform: perspective(300px) translateZ(0px);
}
@keyframes l8 {
  to {
    transform: perspective(300px) translateZ(180px);
    opacity: 0;
  }
}`,
    `
.loader9 {
  width: 100px;
  height: 45px;
  position: relative;
}
.loader9:before,
.loader9:after {
  content: '';
  position: absolute;
  inset: 0;
  background: #000;
  box-shadow: 0 0 0 50px;
  clip-path: polygon(
    -50px -20px,
    10% -12px,
    20% 0,
    calc(50% - 15px) 0,
    calc(50% - 10px) -20px,
    calc(50% - 8px) -15px,
    calc(50% + 8px) -15px,
    calc(50% + 10px) -20px,
    calc(50% + 15px) 0,
    80% 0,
    90% -12px,
    calc(100% + 50px) -20px,
    100% 80%,
    calc(100% + 10px) calc(100% + 10px),
    60% 100%,
    50% calc(100% + 15px),
    40% 100%,
    -10px calc(100% + 10px),
    0 80%
  );
}
.loader9:after {
  animation: l9 1s infinite;
  transform: perspective(300px) translateZ(0px);
}
@keyframes l9 {
  to {
    transform: perspective(300px) translateZ(100px);
    opacity: 0;
  }
}`,
    `
.loader10 {
  display: inline-grid;
  font-size: 50px;
}
.loader10:before,
.loader10:after {
  content: '💯';
  grid-area: 1/1;
}
.loader10:after {
  animation: l10 1s infinite;
}
@keyframes l10 {
  to {
    transform: scale(1.8);
    opacity: 0;
  }
}`,
  ],
  hypnotic: [
    `
  .loader1 {
  width: 50px;
  aspect-ratio: 1;
  color: #000;
  border: 2px solid;
  display: grid;
  box-sizing: border-box;
  animation: l1 4s infinite linear;
}
.loader1::before,
.loader1::after {
  content: '';
  grid-area: 1/1;
  margin: auto;
  width: 70.7%;
  aspect-ratio: 1;
  border: 2px solid;
  box-sizing: content-box;
  animation: inherit;
}
.loader1::after {
  width: 50%;
  aspect-ratio: 1;
  border: 2px solid;
  animation-duration: 2s;
}
@keyframes l1 {
  100% {
    transform: rotate(1turn);
  }
}`,
    `
.loader2 {
  width: 40px;
  aspect-ratio: 1;
  border-radius: 50%;
  color: #000;
  border: 2px solid;
  box-sizing: border-box;
  position: relative;
  transform-origin: left;
  animation: l2 1s infinite linear;
}
.loader2::before,
.loader2::after {
  content: '';
  position: absolute;
  inset: 0 0 auto;
  margin: auto;
  width: 50%;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 2px solid;
  box-sizing: content-box;
  transform-origin: 50% calc(100% - 4px);
  animation: inherit;
}
.loader2::after {
  inset: auto 0 calc(100% + 2px);
  animation-duration: 0.5s;
  animation-direction: reverse;
  transform-origin: 50% calc(200% - 2px);
}
@keyframes l2 {
  100% {
    transform: rotate(1turn);
  }
}`,
    `
.loader3 {
  width: 50px;
  aspect-ratio: 1;
  border: 2px solid;
  --c: conic-gradient(from -90deg at calc(100% - 2px) calc(100% - 2px), #0000 0 90deg, #000 0);
  background: var(--c), var(--c);
  background-size: 16px 16px;
  background-position: 0 0;
  animation: l3 1s infinite;
}
@keyframes l3 {
  100% {
    background-position:
      -16px -16px,
      16px 16px;
  }
}`,
    `
.loader4 {
  width: 50px;
  aspect-ratio: 1;
  color: #000;
  border: 2px solid;
  box-sizing: border-box;
  --c: radial-gradient(
    farthest-side,
    #0000 calc(100% - 3px),
    currentColor calc(100% - 2px) 98%,
    #0000
  );
  background: var(--c), var(--c);
  background-size: 23px 23px;
  background-position:
    0 0,
    12px 12px;
  animation: l4 1s infinite;
}
@keyframes l4 {
  100% {
    background-position:
      -23px 0px,
      12px 35px;
  }
}`,
    `
.loader5 {
  width: 50px;
  aspect-ratio: 1.154;
  display: grid;
  color: #000;
  background:
    linear-gradient(to bottom left, #0000 calc(50% - 1px), currentColor 0 calc(50% + 1px), #0000 0)
      right/50% 100%,
    linear-gradient(to bottom right, #0000 calc(50% - 1px), currentColor 0 calc(50% + 1px), #0000 0)
      left / 50% 100%,
    linear-gradient(currentColor 0 0) bottom/100% 2px;
  background-repeat: no-repeat;
  transform-origin: 50% 66%;
  animation: l5 4s infinite linear;
}
.loader5::before,
.loader5::after {
  content: '';
  grid-area: 1/1;
  background: inherit;
  transform-origin: inherit;
  animation: inherit;
}
.loader5::after {
  animation-duration: 2s;
}
@keyframes l5 {
  100% {
    transform: rotate(1turn);
  }
}`,
    `
.loader6 {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  color: #000;
  background:
    linear-gradient(90deg, currentColor 2px, #0000 0 calc(100% - 2px), currentColor 0) center/100%
      14px,
    linear-gradient(0deg, currentColor 2px, #0000 0 calc(100% - 2px), currentColor 0) center/14px
      100%,
    linear-gradient(currentColor 0 0) center/100% 2px,
    linear-gradient(currentColor 0 0) center/2px 100%;
  background-repeat: no-repeat;
  animation: l6 4s infinite linear;
}
.loader6::before,
.loader6::after {
  content: '';
  grid-area: 1/1;
  background: inherit;
  transform-origin: inherit;
  animation: inherit;
}
.loader6::after {
  animation-duration: 2s;
}
@keyframes l6 {
  100% {
    transform: rotate(1turn);
  }
}`,
    `
    .loader7 {
  width: 50px;
  aspect-ratio: 1;
  color: #000;
  border: 2px solid;
  box-sizing: border-box;
  background:
    repeating-conic-gradient(#0000 0 90deg, currentColor 0 180deg),
    repeating-conic-gradient(currentColor 0 90deg, #0000 0 180deg);
  background-size: 16px 16px;
  background-position: 0 0;
  animation: l7 2s infinite;
}
@keyframes l7 {
  100% {
    background-position:
      0px 32px,
      16px 0px;
  }
}`,
    `
    .loader8 {
  width: 50px;
  aspect-ratio: 1;
  color: #000;
  border: 2px solid;
  box-sizing: border-box;
  background:
    radial-gradient(farthest-side, currentColor 90%, #0000),
    radial-gradient(farthest-side, #0000 90%, currentColor);
  background-size: 16px 16px;
  background-position: 0 0;
  animation: l8 2s infinite;
}
@keyframes l8 {
  100% {
    background-position:
      0px 32px,
      -16px 0;
  }
}`,
    `
    .loader9 {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: repeating-conic-gradient(#0000, #000 1deg 18deg, #0000 20deg 36deg);
  animation: l9 4s infinite linear;
  position: relative;
}
.loader9::before {
  content: '';
  position: absolute;
  border-radius: 50%;
  inset: 0;
  background: inherit;
  animation: inherit;
}
@keyframes l9 {
  100% {
    transform: rotate(0.5turn);
  }
}`,
    `
    .loader10 {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
}
.loader10::before,
.loader10::after {
  content: '';
  grid-area: 1/1;
  border-radius: 50%;
  background: repeating-conic-gradient(#0000, #000 1deg 18deg, #0000 20deg 36deg);
  mask: repeating-radial-gradient(farthest-side, #000 0 10%, #0000 0 20%);
  -webkit-mask: repeating-radial-gradient(farthest-side, #000 0 10%, #0000 0 20%);
  animation: l10 4s infinite linear;
}
.loader10::after {
  mask: repeating-radial-gradient(farthest-side, #0000 0 10%, #000 0 20%);
  -webkit-mask: repeating-radial-gradient(farthest-side, #0000 0 10%, #000 0 20%);
  animation-direction: reverse;
}
@keyframes l10 {
  100% {
    transform: rotate(0.5turn);
  }
}`,
    `
    .loader11 {
  width: 50px;
  aspect-ratio: 1;
  border: 2px solid;
  box-sizing: border-box;
  border-radius: 50%;
  display: grid;
  animation: l11 1.5s infinite linear;
  transform-origin: 50% 80%;
}
.loader11:before,
.loader11:after {
  content: '';
  grid-area: 1/1;
  border: inherit;
  border-radius: 50%;
  animation: inherit;
  animation-duration: 1s;
  transform-origin: inherit;
}
.loader11:after {
  --s: -1;
}
@keyframes l11 {
  100% {
    transform: rotate(calc(var(--s, 1) * 1turn));
  }
}`,
    `
    .loader12 {
  width: 60px;
  height: 25px;
  border: 2px solid;
  box-sizing: border-box;
  border-radius: 50%;
  display: grid;
  animation: l2 2s infinite linear;
}
.loader12:before,
.loader12:after {
  content: '';
  grid-area: 1/1;
  border: inherit;
  border-radius: 50%;
  animation: inherit;
  animation-duration: 3s;
}
.loader12:after {
  --s: -1;
}
@keyframes l2 {
  100% {
    transform: rotate(calc(var(--s, 1) * 1turn));
  }
}`,
    `
    .loader13 {
  width: 60px;
  height: 30px;
  display: flex;
  --c: #0000 calc(100% - 5px), #000 calc(100% - 4px) 96%, #0000;
  background:
    radial-gradient(farthest-side at bottom, var(--c)) 0 0,
    radial-gradient(farthest-side at top, var(--c)) 100% 100%;
  background-size: calc(50% + 2px) 50%;
  background-repeat: no-repeat;
  animation: l13 2s infinite linear;
}
.loader13:before {
  content: '';
  flex: 1;
  background: inherit;
  transform: rotate(90deg);
}
@keyframes l13 {
  100% {
    transform: rotate(1turn);
  }
}`,
    `
    .loader14 {
  width: 60px;
  height: 30px;
  display: grid;
  --c: #0000 calc(100% - 5px), #000 calc(100% - 4px) 96%, #0000;
  background:
    radial-gradient(farthest-side at bottom, var(--c)) 0 0,
    radial-gradient(farthest-side at top, var(--c)) 100% 100%;
  background-size: calc(50% + 2px) 50%;
  background-repeat: no-repeat;
  animation: l14 1.5s infinite linear;
}
.loader14:before,
.loader14:after {
  content: '';
  grid-area: 1/1;
  background: inherit;
  animation: inherit;
  animation-duration: 2s;
}
.loader14:after {
  --s: -1;
}
@keyframes l14 {
  100% {
    transform: rotate(calc(var(--s, 1) * 1turn));
  }
}`,
    `
    .loader15 {
  width: 50px;
  aspect-ratio: 1;
  border: 2px solid;
  box-sizing: border-box;
  --c: conic-gradient(from 180deg at 50% calc(100% - 2px), #000 90deg, #0000 0);
  background: var(--c), var(--c);
  background-position:
    0 0,
    8px 0;
  background-size: 16px 9.6px;
  animation: l15 1s infinite;
}
@keyframes l15 {
  100% {
    background-position:
      0 -9.6px,
      8px 9.6px;
  }
}`,
    `
    .loader16 {
  width: 50px;
  aspect-ratio: 1;
  position: relative;
  overflow: hidden;
  border: 2px solid;
}
.loader16::before {
  content: '';
  position: absolute;
  inset: -48px;
  --c: conic-gradient(from 180deg at 50% calc(100% - 2px), #000 90deg, #0000 0);
  background: var(--c), var(--c);
  background-position:
    0 0,
    8px 0;
  background-size: 16px 9.6px;
  animation: l16 2s infinite;
}
@keyframes l16 {
  50% {
    background-position:
      0 -9.6px,
      8px 9.6px;
    transform: rotate(90deg);
  }
  100% {
    background-position:
      0 -19.2px,
      8px 19.2px;
    transform: rotate(180deg);
  }
}`,
    `
    .loader17 {
  width: 30px;
  aspect-ratio: 0.577;
  color: #000;
  display: grid;
  background:
    linear-gradient(currentColor 0 0) top / 100% 1px,
    linear-gradient(currentColor 0 0) bottom/100% 1px,
    linear-gradient(to bottom right, #0000 calc(50% - 2px), currentColor calc(50% - 1px), #0000 50%)
      top/100% calc(100% + 2px),
    linear-gradient(to bottom left, #0000 calc(50% - 2px), currentColor calc(50% - 1px), #0000 50%)
      top/100% calc(100% + 2px);
  background-repeat: no-repeat;
  animation: l17 4s infinite linear;
}
.loader17::before,
.loader17::after {
  content: '';
  grid-area: 1/1;
  background: inherit;
  border: inherit;
  animation: inherit;
}
.loader17::after {
  animation-duration: 2s;
}
@keyframes l17 {
  100% {
    transform: rotate(1turn);
  }
}`,
    `
    .loader18 {
  width: 25px;
  height: 50px;
  display: grid;
  color: #000;
  background:
    linear-gradient(currentColor 0 0) top/100% 2px,
    radial-gradient(
        farthest-side at top,
        #0000 calc(100% - 2px),
        currentColor calc(100% - 1px),
        #0000
      )
      top,
    linear-gradient(currentColor 0 0) bottom/100% 2px,
    radial-gradient(
        farthest-side at bottom,
        #0000 calc(100% - 2px),
        currentColor calc(100% - 1px),
        #0000
      )
      bottom;
  background-size:
    100% 1px,
    100% 50%;
  background-repeat: no-repeat;
  animation: l18 4s infinite linear;
}
.loader18::before,
.loader18::after {
  content: '';
  grid-area: 1/1;
  background: inherit;
  border: inherit;
  animation: inherit;
}
.loader18::after {
  animation-duration: 2s;
}
@keyframes l18 {
  100% {
    transform: rotate(1turn);
  }
}`,
    `
    .loader19 {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
}
.loader19::before,
.loader19::after {
  content: '';
  grid-area: 1/1;
  border-radius: 50%;
  background: repeating-radial-gradient(farthest-side, #0000 0%, #000 1% 10%, #0000 11% 30%);
  mask: repeating-conic-gradient(#000 0 36deg, #0000 0 72deg);
  -webkit-mask: repeating-conic-gradient(#000 0 36deg, #0000 0 72deg);
  animation: l19 4s infinite linear;
}
.loader19::after {
  mask: repeating-conic-gradient(#0000 0 36deg, #000 0 72deg);
  -webkit-mask: repeating-conic-gradient(#0000 0 36deg, #000 0 72deg);
  animation-direction: reverse;
}
@keyframes l19 {
  100% {
    transform: rotate(1turn);
  }
}`,
    `
    .loader20 {
  --b: 5px;
  width: calc(12 * var(--b));
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    repeating-radial-gradient(
        calc(2 * var(--b)) at top,
        #0000 -1px,
        #000 0 calc(50% - 1px),
        #0000 50% calc(100% - 1px)
      )
      calc(50% + var(--b)) 100%,
    repeating-radial-gradient(
        calc(2 * var(--b)) at bottom,
        #000 -1px,
        #0000 0 calc(50% - 1px),
        #000 50% calc(100% - 1px)
      )
      50% 0;
  background-size: 150% 50%;
  background-repeat: no-repeat;
  mask:
    radial-gradient(
        calc(1.5 * var(--b)) at calc(100% - var(--b) / 2) 0,
        #0000 calc(100% / 3),
        #000 calc(100% / 3 + 1px) 110%,
        #0000 0
      )
      calc(50% + var(--b) / 2) 100% / calc(3 * var(--b)) 50% exclude no-repeat,
    conic-gradient(#000 0 0);
  animation: l20 1s infinite linear;
}
@keyframes l20 {
  100% {
    transform: rotate(1turn);
  }
}`,
  ],
  square: [
    `
    .loader1 {
  display: inline-flex;
  gap: 5px;
  animation: l1-0 1s infinite;
}
.loader1:before,
.loader1:after {
  content: '';
  width: 25px;
  aspect-ratio: 1;
  box-shadow: 0 0 0 3px inset #fff;
  transform-origin: top right;
  animation: l1-1 1s infinite;
}
.loader1:after {
  transform-origin: top left;
  --s: -1;
}
@keyframes l1-0 {
  to {
    transform: translateY(100%);
  }
}
@keyframes l1-1 {
  to {
    transform: rotate(calc(var(--s, 1) * 90deg));
  }
}`,
    `
.loader2 {
  display: inline-flex;
  gap: 5px;
  animation: l2-0 1s infinite;
}
.loader2:before,
.loader2:after {
  content: '';
  width: 25px;
  aspect-ratio: 1;
  box-shadow: 0 0 0 3px inset #fff;
  animation: l2-1 1s infinite;
}
.loader2:after {
  --s: -1;
}
@keyframes l2-0 {
  0%,
  50% {
    transform: rotate(0deg);
  }
  80%,
  100% {
    transform: rotate(180deg);
  }
}
@keyframes l2-1 {
  0% {
    transform: translate(0);
  }
  50%,
  80% {
    transform: translate(calc(var(--s, 1) * 2.5px));
  }
  100% {
    transform: translate(0);
  }
}`,
    `
.loader3 {
  display: inline-flex;
  gap: 5px;
  animation: l3-0 1s infinite;
  transform-origin: 50% calc(100% + 2.5px);
}
.loader3:before,
.loader3:after {
  content: '';
  width: 25px;
  aspect-ratio: 1;
  box-shadow: 0 0 0 3px inset #fff;
}
.loader3:after {
  transform-origin: -2.5px calc(100% + 2.5px);
  animation: l3-1 1s infinite;
}
@keyframes l3-1 {
  50%,
  100% {
    transform: rotate(180deg);
  }
}
@keyframes l3-0 {
  0%,
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(90deg);
  }
}`,
    `
.loader4 {
  display: inline-flex;
  gap: 5px;
}
.loader4:before,
.loader4:after {
  content: '';
  width: 25px;
  aspect-ratio: 1;
  box-shadow: 0 0 0 3px inset #fff;
  animation: l4 1.5s infinite;
}
.loader4:after {
  --s: -1;
  animation-delay: 0.75s;
}
@keyframes l4 {
  0% {
    transform: scaleX(var(--s, 1)) translate(0) rotate(0);
  }
  16.67% {
    transform: scaleX(var(--s, 1)) translate(-50%) rotate(0);
  }
  33.33% {
    transform: scaleX(var(--s, 1)) translate(-50%) rotate(90deg);
  }
  50%,
  100% {
    transform: scaleX(var(--s, 1)) translate(0) rotate(90deg);
  }
}`,
    `
.loader5 {
  display: inline-flex;
  gap: 5px;
}
.loader5:before,
.loader5:after {
  content: '';
  width: 25px;
  aspect-ratio: 1;
  box-shadow: 0 0 0 3px inset #fff;
  animation: l5 1.5s infinite;
}
.loader5:after {
  --s: -1;
}
@keyframes l5 {
  0% {
    transform: scaleX(var(--s, 1)) translate(0) scale(1);
  }
  33% {
    transform: scaleX(var(--s, 1)) translate(calc(50% + 2.5px)) scale(1);
  }
  66% {
    transform: scaleX(var(--s, 1)) translate(calc(50% + 2.5px)) scale(2);
  }
  100% {
    transform: scaleX(var(--s, 1)) translate(0) scale(1);
  }
}`,
    `
.loader6 {
  width: 85px;
  height: 35px;
  --g1: conic-gradient(from 90deg at 3px 3px, #0000 90deg, #fff 0);
  --g2: conic-gradient(from -90deg at 22px 22px, #0000 90deg, #fff 0);
  background: var(--g1), var(--g1), var(--g1), var(--g2), var(--g2), var(--g2);
  background-size: 25px 25px;
  background-repeat: no-repeat;
  animation: l6 1s infinite alternate;
}
@keyframes l6 {
  0% {
    background-position:
      0 50%,
      50% 50%,
      100% 50%;
  }
  20% {
    background-position:
      0 0,
      50% 50%,
      100% 50%;
  }
  40% {
    background-position:
      0 100%,
      50% 0,
      100% 50%;
  }
  60% {
    background-position:
      0 50%,
      50% 100%,
      100% 0;
  }
  80% {
    background-position:
      0 50%,
      50% 50%,
      100% 100%;
  }
  100% {
    background-position:
      0 50%,
      50% 50%,
      100% 50%;
  }
}`,
    `
.loader7 {
  width: 55px;
  aspect-ratio: 1;
  --g1: conic-gradient(from 90deg at 3px 3px, #0000 90deg, #fff 0);
  --g2: conic-gradient(from -90deg at 22px 22px, #0000 90deg, #fff 0);
  background: var(--g1), var(--g1), var(--g1), var(--g2), var(--g2), var(--g2);
  background-size: 25px 25px;
  background-repeat: no-repeat;
  animation: l7 1.5s infinite;
}
@keyframes l7 {
  0% {
    background-position:
      0 0,
      0 100%,
      100% 100%;
  }
  25% {
    background-position:
      100% 0,
      0 100%,
      100% 100%;
  }
  50% {
    background-position:
      100% 0,
      0 0,
      100% 100%;
  }
  75% {
    background-position:
      100% 0,
      0 0,
      0 100%;
  }
  100% {
    background-position:
      100% 100%,
      0 0,
      0 100%;
  }
}`,
    `
.loader8 {
  width: 85px;
  height: 25px;
  --g1: conic-gradient(from 90deg at left 3px top 3px, #0000 90deg, #fff 0);
  --g2: conic-gradient(from -90deg at bottom 3px right 3px, #0000 90deg, #fff 0);
  background: var(--g1), var(--g1), var(--g1), var(--g2), var(--g2), var(--g2);
  background-position: left, center, right;
  background-repeat: no-repeat;
  animation: l8 1s infinite;
}
@keyframes l8 {
  0% {
    background-size:
      25px 100%,
      25px 100%,
      25px 100%;
  }
  20% {
    background-size:
      25px 50%,
      25px 100%,
      25px 100%;
  }
  40% {
    background-size:
      25px 50%,
      25px 50%,
      25px 100%;
  }
  60% {
    background-size:
      25px 100%,
      25px 50%,
      25px 50%;
  }
  80% {
    background-size:
      25px 100%,
      25px 100%,
      25px 50%;
  }
  100% {
    background-size:
      25px 100%,
      25px 100%,
      25px 100%;
  }
}`,
    `
.loader9 {
  width: 85px;
  height: 50px;
  --g1: conic-gradient(from 90deg at left 3px top 3px, #0000 90deg, #fff 0);
  --g2: conic-gradient(from -90deg at bottom 3px right 3px, #0000 90deg, #fff 0);
  background: var(--g1), var(--g1), var(--g1), var(--g2), var(--g2), var(--g2);
  background-position: left, center, right;
  background-repeat: no-repeat;
  animation: l9 1s infinite;
}
@keyframes l9 {
  0% {
    background-size:
      25px 50%,
      25px 50%,
      25px 50%;
  }
  25% {
    background-size:
      25px 100%,
      25px 50%,
      25px 50%;
  }
  50% {
    background-size:
      25px 50%,
      25px 100%,
      25px 50%;
  }
  75% {
    background-size:
      25px 50%,
      25px 50%,
      25px 100%;
  }
  100% {
    background-size:
      25px 50%,
      25px 50%,
      25px 50%;
  }
}`,
    `
.loader10 {
  width: 85px;
  height: 50px;
  --g1: conic-gradient(from 90deg at left 3px top 3px, #0000 90deg, #fff 0);
  --g2: conic-gradient(from -90deg at bottom 3px right 3px, #0000 90deg, #fff 0);
  background: var(--g1), var(--g1), var(--g1), var(--g2), var(--g2), var(--g2);
  background-position: left, center, right;
  background-repeat: no-repeat;
  animation: l10 1s infinite alternate;
}
@keyframes l10 {
  0%,
  2% {
    background-size:
      25px 50%,
      25px 50%,
      25px 50%;
  }
  20% {
    background-size:
      25px 25%,
      25px 50%,
      25px 50%;
  }
  40% {
    background-size:
      25px 100%,
      25px 25%,
      25px 50%;
  }
  60% {
    background-size:
      25px 50%,
      25px 100%,
      25px 25%;
  }
  80% {
    background-size:
      25px 50%,
      25px 50%,
      25px 100%;
  }
  98%,
  100% {
    background-size:
      25px 50%,
      25px 50%,
      25px 50%;
  }
}`,
    `
.loader11 {
  width: 55px;
  aspect-ratio: 1;
  --g1:conic-gradient(from  90deg at top    3px left  3px,#0000 90deg,#fff 0);
  --g2:conic-gradient(from -90deg at bottom 3px right 3px,#0000 90deg,#fff 0);
  background:
    var(--g1),var(--g1),var(--g1),var(--g1),
    var(--g2),var(--g2),var(--g2),var(--g2);
  background-position: 0 0,100% 0,100% 100%,0 100%;
  background-size: 25px 25px;
  background-repeat: no-repeat;
  animation: l11 1.5s infinite;
}
@keyframes l11 {
  0%   {background-size:35px 15px,15px 15px,15px 35px,35px 35px}
  25%  {background-size:35px 35px,15px 35px,15px 15px,35px 15px}
  50%  {background-size:15px 35px,35px 35px,35px 15px,15px 15px}
  75%  {background-size:15px 15px,35px 15px,35px 35px,15px 35px}
  100% {background-size:35px 15px,15px 15px,15px 35px,35px 35px}
}`,
  ],
  circle: [
    `
    .loader1 {
  width: 65px;
  display: grid;
  --mask:
    radial-gradient(12px at left 15px top 50%, #0000 95%, #000),
    radial-gradient(12px at right 15px top 50%, #0000 95%, #000);
  -webkit-mask: var(--mask);
  mask: var(--mask);
  -webkit-mask-composite: source-in;
  mask-composite: intersect;
  animation: l1 1s infinite alternate;
}
.loader1:before,
.loader1:after {
  content: '';
  grid-area: 1/1;
  height: 30px;
  aspect-ratio: 1;
  background: #fff;
  border-radius: 50%;
}
.loader1:after {
  margin-left: auto;
}
@keyframes l1 {
  to {
    width: 40px;
  }
}`,
    `
.loader2 {
  width: 100px;
  display: grid;
  background: radial-gradient(farthest-side, #fff 98%, #0000) center/30px 100% no-repeat;
  --mask:
    radial-gradient(12px at left 15px top 50%, #0000 95%, #000),
    radial-gradient(12px at center, #0000 95%, #000),
    radial-gradient(12px at right 15px top 50%, #0000 95%, #000);
  -webkit-mask: var(--mask);
  mask: var(--mask);
  -webkit-mask-composite: source-in;
  mask-composite: intersect;
  animation: l2 1s infinite alternate;
}
.loader2:before,
.loader2:after {
  content: '';
  grid-area: 1/1;
  height: 30px;
  aspect-ratio: 1;
  background: #fff;
  border-radius: 50%;
}
.loader2:after {
  margin-left: auto;
}
@keyframes l2 {
  to {
    width: 50px;
  }
}`,
    `
.loader3 {
  width: 65px;
  height: 30px;
  position: relative;
}
.loader3:before {
  content: '';
  position: absolute;
  border-radius: 50px;
  box-shadow: 0 0 0 3px inset #fff;
  animation: l3 0.75s infinite alternate;
}
@keyframes l3 {
  0% {
    inset: 0 35px 0 0;
  }
  50% {
    inset: 0 0 0 0;
  }
  100% {
    inset: 0 0 0 35px;
  }
}`,
    `
.loader4 {
  width: 65px;
  aspect-ratio: 1;
  position: relative;
}
.loader4:before,
.loader4:after {
  content: '';
  position: absolute;
  border-radius: 50px;
  box-shadow: 0 0 0 3px inset #fff;
  animation: l4 2.5s infinite;
}
.loader4:after {
  animation-delay: -1.25s;
}
@keyframes l4 {
  0% {
    inset: 0 35px 35px 0;
  }
  12.5% {
    inset: 0 35px 0 0;
  }
  25% {
    inset: 35px 35px 0 0;
  }
  37.5% {
    inset: 35px 0 0 0;
  }
  50% {
    inset: 35px 0 0 35px;
  }
  62.5% {
    inset: 0 0 0 35px;
  }
  75% {
    inset: 0 0 35px 35px;
  }
  87.5% {
    inset: 0 0 35px 0;
  }
  100% {
    inset: 0 35px 35px 0;
  }
}`,
    `
.loader5 {
  width: 65px;
  aspect-ratio: 1;
  position: relative;
}
.loader5:before,
.loader5:after {
  content: '';
  position: absolute;
  inset: 0 auto auto 0;
  aspect-ratio: 1;
  border-radius: 50px;
  box-shadow: 0 0 0 3px inset #fff;
  animation: l5 1s infinite linear alternate;
}
.loader5:after {
  inset: auto 0 0 auto;
  animation-delay: -1s;
}
@keyframes l5 {
  0% {
    width: 20px;
  }
  100% {
    width: 50px;
  }
}`,
    `
.loader6 {
  width: 50px;
  aspect-ratio: 1;
  box-shadow: 0 0 0 3px #fff inset;
  border-radius: 50%;
  position: relative;
  animation: l6 1.5s linear infinite;
}
.loader6:before {
  content: '';
  position: absolute;
  top: 100%;
  box-shadow: inherit;
  width: 25px;
  aspect-ratio: 1;
  border-radius: 50%;
}
@keyframes l6 {
  to {
    transform: rotate(360deg);
  }
}`,
    `
.loader7 {
  width: 50px;
  aspect-ratio: 1;
  box-shadow: 0 0 0 3px #fff inset;
  border-radius: 50%;
  position: relative;
}
.loader7:before,
.loader7:after {
  content: '';
  position: absolute;
  top: 5px;
  left: calc(50% - 12.5px);
  box-shadow: inherit;
  width: 25px;
  aspect-ratio: 1;
  border-radius: 50%;
  transform-origin: 50% calc(100% - 5px);
  animation: l7 1.5s linear infinite;
}
.loader7:after {
  top: calc(100% + 2px);
  transform-origin: 50% -27px;
  animation-delay: -0.75s;
}
@keyframes l7 {
  to {
    transform: rotate(360deg);
  }
}`,
    `
.loader8 {
  width: 50px;
  aspect-ratio: 1;
  box-shadow: 0 0 0 3px #fff inset;
  border-radius: 50%;
  position: relative;
  animation: l8-0 1.5s linear infinite;
}
.loader8:before {
  content: '';
  position: absolute;
  top: 50%;
  left: calc(100% + 2px);
  box-shadow: inherit;
  width: 25px;
  aspect-ratio: 1;
  border-radius: 50%;
  animation: l8-1 1.5s linear infinite;
}
@keyframes l8-1 {
  0% {
    transform-origin: -27px 50%;
    width: 20px;
    transform: translateY(-50%) rotate(0);
  }
  100% {
    transform-origin: -12px 50%;
    width: 50px;
    transform: translateY(-50%) rotate(180deg);
  }
}
@keyframes l8-0 {
  0% {
    width: 50px;
    transform: translate(0);
  }
  100% {
    width: 20px;
    transform: translate(37px);
  }
}`,
    `
.loader9 {
  width: 100px;
  height: 40px;
  --g: radial-gradient(farthest-side, #0000 calc(95% - 3px), #fff calc(100% - 3px) 98%, #0000 101%)
    no-repeat;
  background: var(--g), var(--g), var(--g);
  background-size: 30px 30px;
  animation: l9 1s infinite alternate;
}
@keyframes l9 {
  0% {
    background-position:
      0 50%,
      50% 50%,
      100% 50%;
  }
  20% {
    background-position:
      0 0,
      50% 50%,
      100% 50%;
  }
  40% {
    background-position:
      0 100%,
      50% 0,
      100% 50%;
  }
  60% {
    background-position:
      0 50%,
      50% 100%,
      100% 0;
  }
  80% {
    background-position:
      0 50%,
      50% 50%,
      100% 100%;
  }
  100% {
    background-position:
      0 50%,
      50% 50%,
      100% 50%;
  }
}`,
    `
.loader10 {
  width: 65px;
  aspect-ratio: 1;
  --g: radial-gradient(farthest-side, #0000 calc(95% - 3px), #fff calc(100% - 3px) 98%, #0000 101%)
    no-repeat;
  background: var(--g), var(--g), var(--g);
  background-size: 30px 30px;
  animation: l10 1.5s infinite;
}
@keyframes l10 {
  0% {
    background-position:
      0 0,
      0 100%,
      100% 100%;
  }
  25% {
    background-position:
      100% 0,
      0 100%,
      100% 100%;
  }
  50% {
    background-position:
      100% 0,
      0 0,
      100% 100%;
  }
  75% {
    background-position:
      100% 0,
      0 0,
      0 100%;
  }
  100% {
    background-position:
      100% 100%,
      0 0,
      0 100%;
  }
}`,
    `
.loader11 {
  width: 50px;
  aspect-ratio: 1;
  box-shadow: 0 0 0 3px #fff inset;
  border-radius: 50%;
  position: relative;
  animation: l11 7s infinite;
}
.loader11:before,
.loader11:after {
  content: '';
  position: absolute;
  top: calc(100% + 3px);
  left: calc(50% - 12.5px);
  box-shadow: inherit;
  width: 25px;
  aspect-ratio: 1;
  border-radius: 50%;
  transform-origin: 50% -28px;
  animation: l11 1.5s infinite;
}
.loader11:after {
  animation-delay: -0.75s;
}
@keyframes l11 {
  100% {
    transform: rotate(360deg);
  }
}`,
  ],
  'square-vs-circle': [
    `
    .loader1 {
  width: 35px;
  aspect-ratio: 1;
  border: 3px solid #fff;
  animation: l1 2s infinite;
}
@keyframes l1 {
  0% {
    border-radius: 50% 50% 0 0;
  }
  25% {
    border-radius: 0 50% 50% 0;
  }
  50% {
    border-radius: 0 0 50% 50%;
  }
  75% {
    border-radius: 50% 0 0 50%;
  }
  100% {
    border-radius: 50% 50% 0 0;
  }
}`,
    `
.loader2 {
  display: inline-flex;
  gap: 5px;
  animation: l2-0 1s infinite linear;
}
.loader2:before,
.loader2:after {
  content: '';
  width: 35px;
  aspect-ratio: 1;
  box-shadow: 0 0 0 3px inset #fff;
  animation: l2-1 1s infinite linear both;
}
.loader2:after {
  animation-direction: reverse;
}
@keyframes l2-0 {
  0% {
    transform: rotate(0deg);
  }
  80%,
  100% {
    transform: rotate(180deg);
  }
}
@keyframes l2-1 {
  0%,
  20% {
    border-radius: 0;
  }
  80%,
  100% {
    border-radius: 50%;
  }
}`,
    `
.loader3 {
  display: inline-flex;
  gap: 5px;
}
.loader3:before,
.loader3:after {
  content: '';
  width: 35px;
  aspect-ratio: 1;
  box-shadow: 0 0 0 3px inset #fff;
  animation: 2s infinite linear;
  animation-name: l3-1, l3-2;
  animation-delay: -1s, 0s;
}
.loader3:after {
  --s: -1;
}
@keyframes l3-1 {
  0% {
    border-radius: 50% 0 0 50%;
  }
  25% {
    border-radius: 50% 50% 0 0;
  }
  50% {
    border-radius: 0 50% 50% 0;
  }
  75% {
    border-radius: 0 0 50% 50%;
  }
  100% {
    border-radius: 50% 0 0 50%;
  }
}
@keyframes l3-2 {
  0% {
    transform: scaleX(var(--s, 1)) rotate(0deg);
  }
  100% {
    transform: scaleX(var(--s, 1)) rotate(-360deg);
  }
}`,
    `
.loader4 {
  height: 35px;
  aspect-ratio: 1;
  border: 3px solid #fff;
  animation: l4 2s infinite;
}
@keyframes l4 {
  0% {
    aspect-ratio: 1;
    border-radius: 50px;
  }
  25% {
    aspect-ratio: 2;
    border-radius: 50px;
  }
  50% {
    aspect-ratio: 2;
    border-radius: 0;
  }
  75% {
    aspect-ratio: 1;
    border-radius: 0;
  }
  100% {
    aspect-ratio: 1;
    border-radius: 50px;
  }
}`,
    `
.loader5 {
  width: 65px;
  aspect-ratio: 1;
  position: relative;
}
.loader5:before,
.loader5:after {
  content: '';
  position: absolute;
  border-radius: 50px;
  box-shadow: 0 0 0 3px inset #fff;
  animation: l5 2.5s infinite;
}
.loader5:after {
  animation-delay: -1.25s;
  border-radius: 0;
}
@keyframes l5 {
  0% {
    inset: 0 35px 35px 0;
  }
  12.5% {
    inset: 0 35px 0 0;
  }
  25% {
    inset: 35px 35px 0 0;
  }
  37.5% {
    inset: 35px 0 0 0;
  }
  50% {
    inset: 35px 0 0 35px;
  }
  62.5% {
    inset: 0 0 0 35px;
  }
  75% {
    inset: 0 0 35px 35px;
  }
  87.5% {
    inset: 0 0 35px 0;
  }
  100% {
    inset: 0 35px 35px 0;
  }
}`,
    `
.loader6,
.loader6:before,
.loader6:after {
  width: 35px;
  aspect-ratio: 1;
  box-shadow: 0 0 0 3px inset #fff;
  position: relative;
  animation: l6 1.5s infinite 0.5s;
}
.loader6:before,
.loader6:after {
  content: '';
  position: absolute;
  left: calc(100% + 5px);
  animation-delay: 1s;
}
.loader6:after {
  left: -40px;
  animation-delay: 0s;
}
@keyframes l6 {
  0%,
  55%,
  100% {
    border-radius: 0;
  }
  20%,
  30% {
    border-radius: 50%;
  }
}`,
    `
.loader7,
.loader7:before,
.loader7:after {
  width: 35px;
  aspect-ratio: 1;
  box-shadow: 0 0 0 3px inset #fff;
  position: relative;
  animation: 1.5s infinite 0.5s;
  animation-name: l7-1, l7-2;
}
.loader7:before,
.loader7:after {
  content: '';
  position: absolute;
  left: calc(100% + 5px);
  animation-delay: 1s, 0s;
}
.loader7:after {
  left: -40px;
  animation-delay: 0s, 1s;
}
@keyframes l7-1 {
  0%,
  55%,
  100% {
    border-top-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  20%,
  30% {
    border-top-left-radius: 50%;
    border-bottom-right-radius: 50%;
  }
}
@keyframes l7-2 {
  0%,
  55%,
  100% {
    border-bottom-left-radius: 0;
    border-top-right-radius: 0;
  }
  20%,
  30% {
    border-bottom-left-radius: 50%;
    border-top-right-radius: 50%;
  }
}`,
    `
.loader8 {
  width: 75px;
  aspect-ratio: 1;
  display: grid;
}
.loader8:before,
.loader8:after {
  content: '';
  grid-area: 1/1;
  width: 35px;
  aspect-ratio: 1;
  box-shadow: 0 0 0 3px #fff inset;
  filter: drop-shadow(40px 40px 0 #fff);
  animation: l8 2s infinite alternate;
}
.loader8:after {
  margin: 0 0 0 auto;
  filter: drop-shadow(-40px 40px 0 #fff);
  animation-delay: -1s;
}
@keyframes l8 {
  0%,
  10% {
    border-radius: 0;
  }
  30%,
  40% {
    border-radius: 50% 0;
  }
  60%,
  70% {
    border-radius: 50%;
  }
  90%,
  100% {
    border-radius: 0 50%;
  }
}`,
    `
.loader9 {
  width: 75px;
  aspect-ratio: 1;
  --g1: conic-gradient(from 90deg at 2px 2px, #0000 90deg, #fff 0);
  --g2: conic-gradient(from -90deg at 13px 13px, #0000 90deg, #fff 0);
  background:
    var(--g1), var(--g1), var(--g1), var(--g1), var(--g1), var(--g1), var(--g1), var(--g1),
    var(--g2), var(--g2), var(--g2), var(--g2), var(--g2), var(--g2), var(--g2), var(--g2);
  background-size: 15px 15px;
  background-repeat: no-repeat;
  animation: l9 1s infinite alternate linear;
}
@keyframes l9 {
  0%,
  30% {
    background-position:
      0 0,
      50% 0,
      100% 0,
      0 50%,
      100% 50%,
      0 100%,
      50% 100%,
      100% 100%;
  }
  70%,
  100% {
    background-position:
      15% 15%,
      50% 0,
      85% 15%,
      0 50%,
      100% 50%,
      15% 85%,
      50% 100%,
      85% 85%;
  }
}`,
    `
.loader10 {
  width: 75px;
  aspect-ratio: 1;
  --g: no-repeat
    radial-gradient(farthest-side, #0000 calc(95% - 2px), #fff calc(100% - 2px) 98%, #0000 101%);
  background: var(--g), var(--g), var(--g), var(--g), var(--g), var(--g), var(--g), var(--g);
  background-size: 15px 15px;
  animation: l10 1s infinite alternate linear;
}
@keyframes l10 {
  0%,
  30% {
    background-position:
      0 0,
      50% 0,
      100% 0,
      0 50%,
      100% 50%,
      0 100%,
      50% 100%,
      100% 100%;
  }
  70%,
  100% {
    background-position:
      15% 15%,
      50% 0,
      85% 15%,
      0 50%,
      100% 50%,
      15% 85%,
      50% 100%,
      85% 85%;
  }
}`,
  ],
  'three-d': [
    `
  .loader1 {
  --s: 25px;

  --_d: calc(0.353 * var(--s));
  width: calc(var(--s) + var(--_d));
  aspect-ratio: 1;
  clip-path: polygon(
    var(--_d) 0,
    100% 0,
    100% calc(100% - var(--_d)),
    calc(100% - var(--_d)) 100%,
    0 100%,
    0 var(--_d)
  );
  background: conic-gradient(from -90deg at var(--s) var(--_d), #fff 135deg, #666 0 270deg, #aaa 0);
  animation: l1 1s infinite cubic-bezier(0.5, 300, 0.5, -300);
}
@keyframes l1 {
  50%,
  100% {
    transform: translateY(0.1px);
  }
}`,
    `
.loader2 {
  --s: 25px;

  --_d: calc(0.353 * var(--s));
  width: calc(var(--s) + var(--_d));
  aspect-ratio: 1;
  display: grid;
  filter: drop-shadow(0 0 0 #fff);
  animation: l2 0.8s infinite;
}
.loader2:before {
  content: '';
  clip-path: polygon(
    var(--_d) 0,
    100% 0,
    100% calc(100% - var(--_d)),
    calc(100% - var(--_d)) 100%,
    0 100%,
    0 var(--_d)
  );
  background: conic-gradient(from -90deg at var(--s) var(--_d), #fff 135deg, #666 0 270deg, #aaa 0);
}
@keyframes l2 {
  50% {
    filter: drop-shadow(0 0 5px #fff);
  }
}`,
    `
.loader3 {
  --s: 25px;
  --_d: calc(0.353 * var(--s));

  height: calc(var(--s) + var(--_d));
  aspect-ratio: 1;
  display: grid;
}
.loader3:before {
  content: '';
  height: 100%;
  margin: auto 0;
  clip-path: polygon(
    var(--_d) 0,
    100% 0,
    100% calc(100% - var(--_d)),
    calc(100% - var(--_d)) 100%,
    0 100%,
    0 var(--_d)
  );
  background: conic-gradient(from -90deg at var(--s) var(--_d), #fff 135deg, #666 0 270deg, #aaa 0);
  animation: l3 0.8s infinite alternate;
}
@keyframes l3 {
  100% {
    height: 40%;
  }
}`,
    `
.loader4 {
  --s: 25px;

  --_d: calc(0.353 * var(--s));
  width: calc(var(--s) + var(--_d));
  aspect-ratio: 1;
  display: grid;
}
.loader4:before,
.loader4:after {
  content: '';
  clip-path: polygon(
    var(--_d) 0,
    100% 0,
    100% calc(100% - var(--_d)),
    calc(100% - var(--_d)) 100%,
    0 100%,
    0 var(--_d)
  );
  background: conic-gradient(from -90deg at var(--s) var(--_d), #fff 135deg, #666 0 270deg, #aaa 0);
  animation: l4 1.2s infinite;
}
.loader4:before {
  z-index: 1;
  margin-bottom: calc(var(--_d) / -2 - 1px);
}
.loader4:after {
  margin-top: calc(var(--_d) / -2 - 1px);
  animation-delay: 0.6s;
}
@keyframes l4 {
  0% {
    transform: translate(0);
  }
  16.67% {
    transform: translate(-10px);
  }
  33.33% {
    transform: translate(10px);
  }
  50%,
  100% {
    transform: translate(0);
  }
}`,
    `
.loader5 {
  --s: 25px;

  --_d: calc(0.353 * var(--s));
  width: calc(var(--s) + var(--_d));
  aspect-ratio: 1;
  display: flex;
}
.loader5:before,
.loader5:after {
  content: '';
  flex: 1;
  clip-path: polygon(
    var(--_d) 0,
    100% 0,
    100% calc(100% - var(--_d)),
    calc(100% - var(--_d)) 100%,
    0 100%,
    0 var(--_d)
  );
  background: conic-gradient(
    from -90deg at calc(100% - var(--_d)) var(--_d),
    #fff 135deg,
    #666 0 270deg,
    #aaa 0
  );
  animation: l5 1.2s infinite;
}
.loader5:before {
  margin-right: calc(var(--_d) / -2 - 1px);
}
.loader5:after {
  margin-left: calc(var(--_d) / -2 - 1px);
  animation-delay: 0.6s;
}
@keyframes l5 {
  0% {
    transform: translateY(0);
  }
  16.67% {
    transform: translateY(-10px);
  }
  33.33% {
    transform: translateY(10px);
  }
  50%,
  100% {
    transform: translateY(0);
  }
}`,
    `
.loader6 {
  --s: 20px;

  --_d: calc(0.353 * var(--s));
  width: calc(var(--s) + var(--_d));
  aspect-ratio: 1;
  display: grid;
}
.loader6:before,
.loader6:after {
  content: '';
  grid-area: 1/1;
  clip-path: polygon(
    var(--_d) 0,
    100% 0,
    100% calc(100% - var(--_d)),
    calc(100% - var(--_d)) 100%,
    0 100%,
    0 var(--_d)
  );
  background: conic-gradient(
    from -90deg at calc(100% - var(--_d)) var(--_d),
    #fff 135deg,
    #666 0 270deg,
    #aaa 0
  );
  animation: l6 2s infinite;
}
.loader6:after {
  animation-delay: -1s;
}
@keyframes l6 {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(30px, 0);
  }
  50% {
    transform: translate(30px, 30px);
  }
  75% {
    transform: translate(0, 30px);
  }
  100% {
    transform: translate(0, 0);
  }
}`,
    `
.loader7 {
  --s: 25px;
  --g: 5px;

  height: calc(1.353 * var(--s) + var(--g));
  aspect-ratio: 3;
  background:
    linear-gradient(#ff1818 0 0) left/33% 100% no-repeat,
    conic-gradient(
      from -90deg at var(--s) calc(0.353 * var(--s)),
      #fff 135deg,
      #666 0 270deg,
      #aaa 0
    );
  background-blend-mode: multiply;
  --_m:
    linear-gradient(
      to bottom right,
      #0000 calc(0.25 * var(--s)),
      #000 0 calc(100% - calc(0.25 * var(--s)) - 1.414 * var(--g)),
      #0000 0
    ),
    conic-gradient(from -90deg at right var(--g) bottom var(--g), #000 90deg, #0000 0);
  -webkit-mask: var(--_m);
  mask: var(--_m);
  background-size: calc(100% / 3) 100%;
  -webkit-mask-size: calc(100% / 3) 100%;
  mask-size: calc(100% / 3) 100%;
  -webkit-mask-composite: source-in;
  mask-composite: intersect;
  animation: l7 steps(3) 1.5s infinite;
}
@keyframes l7 {
  to {
    background-position: 150% 0%;
  }
}`,
    `
.loader8 {
  --s: 25px;
  --g: 5px;

  height: calc(1.353 * var(--s) + var(--g));
  aspect-ratio: 3;
  display: grid;
  justify-items: end;
  overflow: hidden;
  --_m: linear-gradient(90deg, #0000, #000 15px calc(100% - 15px), #0000);
  -webkit-mask: var(--_m);
  mask: var(--_m);
}
.loader8:before {
  content: '';
  width: calc(4 * 100% / 3);
  background: conic-gradient(
    from -90deg at var(--s) calc(0.353 * var(--s)),
    #fff 135deg,
    #666 0 270deg,
    #aaa 0
  );
  --_m:
    linear-gradient(
      to bottom right,
      #0000 calc(0.25 * var(--s)),
      #000 0 calc(100% - calc(0.25 * var(--s)) - 1.414 * var(--g)),
      #0000 0
    ),
    conic-gradient(from -90deg at right var(--g) bottom var(--g), #000 90deg, #0000 0);
  -webkit-mask: var(--_m);
  mask: var(--_m);
  background-size: calc(100% / 4) 100%;
  -webkit-mask-size: calc(100% / 4) 100%;
  mask-size: calc(100% / 4) 100%;
  -webkit-mask-composite: source-in;
  mask-composite: intersect;
  animation: l8 1s infinite linear;
}
@keyframes l8 {
  to {
    transform: translate(calc(100% / 4));
  }
}`,
    `
.loader9 {
  --s: 25px;
  --g: 5px;

  width: calc(2 * (1.353 * var(--s) + var(--g)));
  aspect-ratio: 1;
  background:
    linear-gradient(#ff1818 0 0) left/50% 100% no-repeat,
    conic-gradient(
      from -90deg at var(--s) calc(0.353 * var(--s)),
      #fff 135deg,
      #666 0 270deg,
      #aaa 0
    );
  background-blend-mode: multiply;
  --_m:
    linear-gradient(
      to bottom right,
      #0000 calc(0.25 * var(--s)),
      #000 0 calc(100% - calc(0.25 * var(--s)) - 1.414 * var(--g)),
      #0000 0
    ),
    conic-gradient(from -90deg at right var(--g) bottom var(--g), #000 90deg, #0000 0);
  -webkit-mask: var(--_m);
  mask: var(--_m);
  background-size: 50% 50%;
  -webkit-mask-size: 50% 50%;
  mask-size: 50% 50%;
  -webkit-mask-composite: source-in;
  mask-composite: intersect;
  animation: l9 1.5s infinite;
}
@keyframes l9 {
  0%,
  12.5% {
    background-position:
      0% 0%,
      0 0;
  }
  12.6%,
  37.5% {
    background-position:
      100% 0%,
      0 0;
  }
  37.6%,
  62.5% {
    background-position:
      100% 100%,
      0 0;
  }
  62.6%,
  87.5% {
    background-position:
      0% 100%,
      0 0;
  }
  87.6%,
  100% {
    background-position:
      0% 0%,
      0 0;
  }
}`,
    `
.loader10 {
  --s: 25px;
  --g: 5px;

  width: calc(3 * (1.353 * var(--s) + var(--g)));
  display: grid;
  justify-items: end;
  aspect-ratio: 3;
  overflow: hidden;
  --_m: linear-gradient(90deg, #0000, #000 15px calc(100% - 15px), #0000);
  -webkit-mask: var(--_m);
  mask: var(--_m);
}
.loader10:before {
  content: '';
  width: 200%;
  background:
    linear-gradient(90deg, #ff1818 50%, #0000 0),
    conic-gradient(
      from -90deg at var(--s) calc(0.353 * var(--s)),
      #fff 135deg,
      #666 0 270deg,
      #aaa 0
    );
  background-blend-mode: multiply;
  --_m:
    linear-gradient(
      to bottom right,
      #0000 calc(0.25 * var(--s)),
      #000 0 calc(100% - calc(0.25 * var(--s)) - 1.414 * var(--g)),
      #0000 0
    ),
    conic-gradient(from -90deg at right var(--g) bottom var(--g), #000 90deg, #0000 0);
  -webkit-mask: var(--_m);
  mask: var(--_m);
  background-size:
    calc(100% / 3) 100%,
    calc(100% / 6) 100%;
  -webkit-mask-size: calc(100% / 6) 100%;
  mask-size: calc(100% / 6) 100%;
  -webkit-mask-composite: source-in;
  mask-composite: intersect;
  animation: l10 1s infinite linear;
}
@keyframes l10 {
  to {
    transform: translate(calc(100% / 3));
  }
}`,
    `
.loader11 {
  --s: 40px;
  --g: 5px;

  height: calc(var(--s) + var(--g));
  aspect-ratio: 3;
  background:
    radial-gradient(
      calc(var(--s) / sqrt(2)) at calc(50% - 0.1 * var(--s)) calc(50% - 0.2 * var(--s)),
      #0000 5%,
      60%,
      #111 98%
    ),
    linear-gradient(#fe4365 0 0) no-repeat #fff;
  background-size: calc(100% / 3) 100%;
  mask: radial-gradient(calc(var(--s) / 2), #000 calc(100% - 1px), #0000) 0 / calc(100% / 3) 100%;
  animation: l11 steps(3) 1.5s infinite;
}
@keyframes l11 {
  to {
    background-position: 0, 150%;
  }
}`,
    `
.loader12 {
  --s: 40px;
  --g: 5px;

  height: calc(2*(var(--s) + var(--g)));
  aspect-ratio: 1;
  background:
    radial-gradient(calc(var(--s)/sqrt(2)) at calc(50% - .1*var(--s)) calc(50% - .2*var(--s)),#0000 5%,60%,#111 98%),
    linear-gradient(#FE4365 0 0) no-repeat #fff;
  background-size: 50% 50%;
  mask: radial-gradient(calc(var(--s)/2),#000 calc(100% - 1px),#0000) 0 0/50% 50%;
  animation: l12 steps(3) 1.5s infinite;
}
@keyframes l12 {
  0%,12.5%    {background-position:0 0}
  12.6%,37.5% {background-position:0 0,100% 0}
  37.6%,62.5% {background-position:0 0,100% 100%}
  62.6%,87.5% {background-position:0 0,0 100%}
  87.6%,100%  {background-position:0 0}
}
`,
  ],
};
