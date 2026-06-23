cmake_minimum_required(VERSION 3.20..4.2.3)
include(FetchContent)
message("Fetching sdl3 source from git")
FetchContent_Declare(
  SDL3
  GIT_REPOSITORY https://github.com/libsdl-org/SDL.git
  GIT_TAG release-3.4.10
)
FetchContent_MakeAvailable(SDL3)
