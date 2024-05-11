# How it works

Kener has two parts. One is a svelte app which you can find in the src folder and there are code for monitors which you would find in scripts folder. If you want to update the frontend application then you should modify the src folder.


## Folder structure

```shell
├── src (svelte frontend files)
├── static (things put here can be referenced directly example static/logo.png -> /logo.png)
├── scripts (nodejs server files)
├── prod.js(starts an express server, runs the scripts and serves the svelte site)
├── dev.js (starts the dev server)
```