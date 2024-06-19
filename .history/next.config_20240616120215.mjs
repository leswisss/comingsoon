/** @type {import('next').NextConfig} */
const nextConfig = {};
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
 
export default {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

