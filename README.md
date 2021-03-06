# Web Epub Reader

Web-based book reader supporting .epub files

⚠️ Warning: This project is in very early development.

## Installation

Clone the repository

```
git clone https://github.com/travishorn/web-epub-reader.git
```

Change into directory

```
cd web-epub-reader
```

Install dependencies

```
npm install
```

Configure a new Netlify site and enable the **Identity** feature. Then, update
`src/store/index.js` with the API URL.

## Development

Compile and serve in a hot-reloadable environment

```
npm run server
```

Lint and fix problems

```
npm run lint
```

## Deployment

Build files for deployment

```
npm run build
```

Serve the `dist/` directory.

## License

MIT License

Copyright (c) 2020 Travis Horn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
