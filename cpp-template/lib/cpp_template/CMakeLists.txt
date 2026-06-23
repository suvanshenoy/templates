cmake_minimum_required(VERSION 3.20..4.3)
add_library(cpp_template)
file(GLOB_RECURSE SRCS
  "${CMAKE_SOURCE_DIR}/lib/cpp_template/**/*.cpp"
  "${CMAKE_SOURCE_DIR}/lib/cpp_template/*.cpp"
)
list(FILTER SRCS EXCLUDE REGEX ".*test\\.cpp$")
target_sources(cpp_template PUBLIC ${SRCS})
