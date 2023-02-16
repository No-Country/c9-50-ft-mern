// vite.config.js
import { defineConfig } from "file:///C:/Users/jos02/OneDrive/Documentos/no-country/c9-50-ft-mern/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/jos02/OneDrive/Documentos/no-country/c9-50-ft-mern/node_modules/@vitejs/plugin-react/dist/index.mjs";
import * as path from "path";
var __vite_injected_original_dirname = "C:\\Users\\jos02\\OneDrive\\Documentos\\no-country\\c9-50-ft-mern\\app";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__vite_injected_original_dirname, "src") }]
  },
  server: {
    port: 3e3,
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
        secure: true
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxqb3MwMlxcXFxPbmVEcml2ZVxcXFxEb2N1bWVudG9zXFxcXG5vLWNvdW50cnlcXFxcYzktNTAtZnQtbWVyblxcXFxhcHBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGpvczAyXFxcXE9uZURyaXZlXFxcXERvY3VtZW50b3NcXFxcbm8tY291bnRyeVxcXFxjOS01MC1mdC1tZXJuXFxcXGFwcFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvam9zMDIvT25lRHJpdmUvRG9jdW1lbnRvcy9uby1jb3VudHJ5L2M5LTUwLWZ0LW1lcm4vYXBwL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczogW3sgZmluZDogJ0AnLCByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpIH1dXHJcbiAgfSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIHBvcnQ6IDMwMDAsXHJcbiAgICBwcm94eToge1xyXG4gICAgICAnL2FwaSc6IHtcclxuICAgICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0OjMwMDEnLFxyXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgICBzZWN1cmU6IHRydWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErWCxTQUFTLG9CQUFvQjtBQUM1WixPQUFPLFdBQVc7QUFDbEIsWUFBWSxVQUFVO0FBRnRCLElBQU0sbUNBQW1DO0FBSXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixTQUFTO0FBQUEsSUFDUCxPQUFPLENBQUMsRUFBRSxNQUFNLEtBQUssYUFBa0IsYUFBUSxrQ0FBVyxLQUFLLEVBQUUsQ0FBQztBQUFBLEVBQ3BFO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxRQUFRO0FBQUEsTUFDVjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
