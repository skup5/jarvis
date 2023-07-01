# Jarvis backend RPi API

## Structure

```
├── modules
│   ├── <api_module_name>
├── main.js
├── package.json
├── README.MD
└── .gitignore
```

## Runtime environment - Deno

### Installation

Official manual https://deno.com/manual@v1.33.3/getting_started/installation

or

download `zip` from https://github.com/denoland/deno/releases/tag/v1.33.3


Try this command to check
```
deno --version
```
you should get something like
```
deno 1.33.3 (release, x86_64-pc-windows-msvc)
v8 11.4.183.2
typescript 5.0.4
```

### Run

```
deno run main.js

# Watch mode
deno run --watch main.js
```
Official manual https://deno.com/manual@v1.33.3/getting_started/command_line_interface#watch-mode

### Testing

```
# Run all tests in the current directory and all sub-directories
deno test

# Run all tests in the util directory
deno test util/

# Run just my_test.ts
deno test my_test.ts

# Run test modules in parallel
deno test --parallel
```

Official manual https://deno.com/manual@v1.33.3/basics/testing#testing