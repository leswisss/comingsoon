/** @type {import('next').NextConfig} */
const nextConfig = {};
import path from 'path';
 
exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

