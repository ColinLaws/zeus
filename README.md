# Zeus 🌩️

Zeus is an open source React weather app that I am building to showcase my love
for both weather and the web.

# Dependencies

| Dependency | Version    |
| :--------- | :--------- |
| `node`     | `^20.11.0` |
| `bun`      | `^1.1.20`  |

# Getting Started

## Clone

First, clone this repo to your desired source folder (I like `~/src/<PROJECT_NAME>` for my repos):

_Optional: Make a `~/src/` folder to store your repositories._

```bash
mkdir ~/src/
```

Clone zeus to your desired location.

```bash
git clone https://github.com/ColinLaws/zeus.git ~/src/zeus
```

## Install `node_modules`

Navigate to the project

```bash
cd ~/src/zeus
```

Use `bun` to install the project's dependencies.

```bash
bun install
```

## Run

To host the app locally with Hot module refresh (HMR) using Vite:

```bash
bun run dev
```

🎉 Congratulations! That was everything you needed to start up this simple little app! Now, when any change is made to a source file, you will see the change automatically be reflected in your browser. This is thanks to Vite's built in HMR/Filewatcher that it sets up for us.
