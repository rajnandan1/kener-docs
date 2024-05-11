# Quick Start

Kener has been tested from Node18. It should work with Node 16 and above. It uses [SvelteKit](https://kit.svelte.dev/) and [shadcn-svelte](https://www.shadcn-svelte.com/)

## Clone the repository

```shell
git clone https://github.com/rajnandan1/kener.git
cd kener
```

## Install Dependencies

```shell
npm install
```

## Configs

-   Rename `config/site.example.yaml` -> `config/site.yaml`
-   Rename `config/monitors.example.yaml` -> `config/monitors.yaml`

```shell
mv config/site.example.yaml config/site.yaml
mv config/monitors.example.yaml config/monitors.yaml
mkdir -p ./static/kener
```

## Start Kener Dev

```bash
npm run kener:dev
```

Kener Development Server would be running at PORT 5173. Go to [http://localhost:5173](http://localhost:5173)

![alt text](/images/ss.png "SS")