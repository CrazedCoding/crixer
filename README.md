# Crixer - The CrazedCoding.com Music Mixer

This is a NodeJS/Electron/TensorFlow applcation.

## Building on Linux

You must have NodeJS and npm's windows-build-tools installed to build this project.

```
https://nodejs.org/en/
https://www.npmjs.com/package/windows-build-tools
```

Clone this repository:

```
git clone https://github.com/GeometricAlgorithm/MusicMixer.git
```

Navigate into the directory you cloned from GitHub in the PowerShell using the `cd <directory>` command and then run `npm install` and `npm run build`

Navigate into the app directory using `cd app` and then run `npm install`.

This will install all the dependencies of Crixer.

To run the project, navigate back go the root directory with `cd ..` and `npm run start`.

## Building on Windows

This was tested in previous versions, but is currently unsupported. If you try this, it is suggested that you change the "build" entry of `package.json` so that it targets Windows, and follow the Windows installation instructions for the NodeJS/npm/CUDA dependencies. Other than that, this section would be similar to the "Building on Linux" section.