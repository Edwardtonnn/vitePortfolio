const fs = require("fs-extra"); const path = require("path");  const redirects = ` /* /index.html 200 `;  fs.writeFileSync(path.resolve(__dirname, "..", "public", "_redirects"), redirects);
