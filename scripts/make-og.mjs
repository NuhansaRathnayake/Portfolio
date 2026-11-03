// Generates public/og.png (1200x630) for social previews. Run: node scripts/make-og.mjs
import sharp from 'sharp';

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0b0d0e"/>
  <g>
    <rect x="620" y="150" width="140" height="34" rx="8" fill="#2dd4bf"/>
    <rect x="680" y="210" width="360" height="34" rx="8" fill="#f3f5f5"/>
    <rect x="740" y="270" width="300" height="34" rx="8" fill="#2dd4bf"/>
    <rect x="700" y="330" width="420" height="14" rx="7" fill="#0f2f2c" stroke="#2dd4bf" stroke-width="3"/>
    <rect x="1000" y="380" width="120" height="34" rx="8" fill="#f3f5f5"/>
    <g fill="#2dd4bf"><rect x="640" y="455" width="26" height="26" rx="5" transform="rotate(45 653 468)"/><rect x="760" y="455" width="26" height="26" rx="5" transform="rotate(45 773 468)"/><rect x="900" y="455" width="26" height="26" rx="5" transform="rotate(45 913 468)"/><rect x="1020" y="455" width="26" height="26" rx="5" transform="rotate(45 1033 468)"/></g>
  </g>
  <text x="70" y="250" font-family="Helvetica, Arial, sans-serif" font-size="68" font-weight="700" fill="#f3f5f5" letter-spacing="-2">Nuhansa</text>
  <text x="70" y="326" font-family="Helvetica, Arial, sans-serif" font-size="68" font-weight="700" fill="#f3f5f5" letter-spacing="-2">Rathnayake</text>
  <text x="70" y="400" font-family="Helvetica, Arial, sans-serif" font-size="30" fill="#a3abad">IT project management</text>
  <text x="70" y="444" font-family="Helvetica, Arial, sans-serif" font-size="30" fill="#a3abad">with a focus on governance, risk and compliance</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/og.png');
console.log('Wrote public/og.png');
