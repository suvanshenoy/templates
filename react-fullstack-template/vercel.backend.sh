#!/bin/bash

curl https://mise.run | sh

eval $(/vercel/.local/bin/mise activate bash)

/vercel/.local/bin/mise use -g aqua:go-task/task

/vercel/.local/share/mise/shims/task --dir ../../tasks/setup setup

/vercel/.local/share/mise/shims/task --dir ../../tasks/nest orm:init

/vercel/.local/share/mise/shims/task --dir ../../tasks/nest build
