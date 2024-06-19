/** @type {import('next').NextConfig} */
const nextConfig = {};
import path from 'path';
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

