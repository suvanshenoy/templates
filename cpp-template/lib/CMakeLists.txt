cmake_minimum_required(VERSION 3.20..4.3)
add_library(lib)
file(GLOB_RECURSE SRCS
  "${CMAKE_SOURCE_DIR}/lib/cpp_template_cli.cpp"
)
target_sources(lib PUBLIC ${SRCS})
