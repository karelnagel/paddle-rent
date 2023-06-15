FROM rust:1.70

# Add NodeSource repo for Node.js
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -

# Install Node.js and Yarn
RUN apt-get install -y nodejs gcc g++ make
RUN npm install -g yarn

# Install Tauri CLI
RUN yarn global add @tauri-apps/cli

WORKDIR /usr/src/app

COPY . .

RUN rustup target add armv7-unknown-linux-gnueabihf
ENV RUST_BACKTRACE=1
RUN cd packages/tauri-app && yarn && yarn tauri build --bundles deb,appimage --target armv7-unknown-linux-gnueabihf
