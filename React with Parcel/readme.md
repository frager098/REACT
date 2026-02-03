# What is a Bundler for React?
A bundler or build tool to use React efficiently.
A bundler is a web development tool that combines multiple source files (JavaScript, CSS, images) into fewer, optimized files to improve browser loading performance. It manages module dependencies and automates tasks like minification and code splitting, ensuring consistent, efficient deployment

Parcel, Vite and Webpack are some common bundlers.

For projects it's not recommended to use react CDNs so we initialize an npm project and download react and react-dom locally in node modules.
Also, node modules are for servers as browser doesn't understand it.So, to use react on browser we need Parcel we can't just start our live server and start using react. 

# What is Hot Module Replacement(HMR)?
HMR is a front-end-development feature that enables faster development. It updates modules instantly without reloading the whole page.

# Why Bundlers are Important? 
It bundles all the files together and produce optimized, production ready files. It automatically generates source maps, transpile modern languages to older versions and makes the development efficient.