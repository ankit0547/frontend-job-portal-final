// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

// export default defineConfig({
//   plugins: [react()],
// });

// import { defineConfig, loadEnv } from "vite";

// export default defineConfig(({ command, mode }) => {
//   const env = loadEnv(mode, process.cwd(), "");
//   return {
//     define: {
//       "process.env.YOUR_STRING_VARIABLE": JSON.stringify(
//         env.YOUR_STRING_VARIABLE
//       ),
//       "process.env.YOUR_BOOLEAN_VARIABLE": env.YOUR_BOOLEAN_VARIABLE,
//       // If you want to exposes all env variables, which is not recommended
//       // 'process.env': env
//     },
//   };
// });

import { defineConfig } from "vite";
// ...
export default defineConfig({
  // ...
  define: {
    "process.env": {},
  },
});
