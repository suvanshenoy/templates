cmake_minimum_required(VERSION 3.20..4.3)
add_library(test)
file(GLOB SRCS
  "${CMAKE_SOURCE_DIR}/lib/**/*_test.cpp"
  "${CMAKE_SOURCE_DIR}/lib/*_test.cpp"
)
target_sources(test PUBLIC ${SRCS})
