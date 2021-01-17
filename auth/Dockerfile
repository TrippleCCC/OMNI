FROM rust:1.31

RUN rustup default nightly

RUN cargo install cargo-watch

EXPOSE 8000

WORKDIR /usr/src/auth

COPY . .

CMD [ "cargo", "watch", "-x", "run" ]

# RUN cargo install --path .

# CMD ["auth"]