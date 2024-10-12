#!/usr/bin/env bash

currentSession="livtown"

tmux has-session -t "$currentSession" 2>/dev/null

if [ $? != 0 ]; then
  # Create session with window "editor"
  tmux new-session -d -s "$currentSession" -n "editor"

  # Open Neovim in first window
  tmux send-keys -t "$currentSession:editor" "nvim" C-m

  # Run the Astro development server
  tmux new-window -t "$currentSession" -n "server"
  tmux send-keys -t "$currentSession:server" "yarn astro dev" C-m

  # Run lazygit since I'm lazy and like to have the overview
  tmux new-window -t "$currentSession" -n "git"
  tmux send-keys -t "$currentSession:git" "lazygit" C-m

  # Select editor
  tmux select-window -t "$currentSession:editor"
fi

tmux attach-session -t "$currentSession"
