# CustomKeys-Bricks
CustomKeys-Bricks is a Custom Keys V2 application built with JavaScript, React-Vite, SCSS, Rust, and Tauri.
This tech stack allows you to create an application for nearly every OS—leveraging the simplicity of JS, React, and SCSS for the UI,
while Rust and Tauri handle connectivity and system logic. The main app (host) manages all connectivity,
so users only need to drop script files into the modules folder.

## Key Features

The new version is much faster and properly architected with:
- Separate threads per module (script) built on Rust, a compiled language for better performance
- A more user-friendly UI with manual script switching
- Key Binding functionality
- A planned **GO-GAME** feature that creates a transparent overlay for games to display switches above the game window

## Status

Project under development.

## How to Run Locally

In VS Code, navigate to the project directory and run the following command in the terminal:

```bash
npm run tauri dev

to build it as an app, use:

````bash
npm run tauri build
