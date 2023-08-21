import localFont from 'next/font/local';

export const mySansSerif = localFont({
  src: '../../public/fonts/HaasGrotDisp-55Roman.woff2',
  display: 'swap',
  variable: '--mySansSerif-haas',
});

/*
___1. import mySanSerif & mySerif in layout.tsx + add to className in <html> + add className in <body> with "font-sans" to set global default font style
___2. add variables in tailwind.config.js

*/
