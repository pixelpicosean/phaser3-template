# Phaser 3 template (ES5)

Very basic template project for game development with Phaser 3.

## Feature

- dev server with live-reload
- build
- webpack
- `SHOW_ALL` and `RESIZE` scale mode
- simple preloader scene

## How to run

### Using yarn

- Prepare: `yarn install`
- Development: `yarn start`
- Build: `yarn build`

### Using NPM

- Prepare: `npm install`
- Development: `npm run start`
- Build: `npm run build`

## Folders

- assets: raw assets, you can put images and texture packer files here, export atlas to `media` folder
    + tex: textures should be placed here, which will be included
           in the `tex.tps` atlas
- media: image, atlas, sound and whatever you need to ship with the final game
- src: source code locates here, `main.js` is the entry
