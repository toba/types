declare module '*.svg' {
   import React from 'react';
   /**
    * @see https://github.com/Microsoft/TypeScript/issues/2709
    */
   const svg: React.ReactSVGElement;
   export default svg;
}
