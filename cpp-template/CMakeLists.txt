cmake_minimum_required(VERSION 3.20..4.3)
project(cpp-template CXX)

include("${CMAKE_SOURCE_DIR}/cmake/options.cmake")


set(CMAKE_CXX_STANDARD 26)
set(CMAKE_CXX_STANDARD_REQUIRED TRUE)
set(CMAKE_CXX_EXTENSIONS OFF)
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY "${CMAKE_SOURCE_DIR}/bin")

add_executable(${PROJECT_NAME}
  "${CMAKE_SOURCE_DIR}/lib/cpp_template.cpp"
)

target_link_libraries(${PROJECT_NAME}
  cpp_template
  lib
)


add_subdirectory(lib)
add_subdirectory(lib/cpp_template)
add_subdirectory(test)

target_compile_options(${PROJECT_NAME}
  PRIVATE
   -Wall
   -Wextra
   -Wpedantic
   -Werror
)

target_link_options(${PROJECT_NAME}
   PRIVATE
    -fsanitize=address
    -fsanitize=leak
    -fsanitize=undefined
)

if(BUILD_FTXUI)
  message("building ftxui")
  include("${CMAKE_SOURCE_DIR}/cmake/deps/ftxui.cmake")
  target_link_libraries(${PROJECT_NAME} PRIVATE
    ftxui::screen
    ftxui::dom
    ftxui::component
    lib
    cpp_template
  )
endif()

if(BUILD_IMGUI)
  message("building imgui")
  include("${CMAKE_SOURCE_DIR}/cmake/deps/imgui.cmake")
  target_link_libraries(${PROJECT_NAME} PRIVATE
    imgui
    lib
    cpp_template
  )
endif()

if(BUILD_SDL)
  message("building sdl")
  include("${CMAKE_SOURCE_DIR}/cmake/deps/sdl.cmake")
  target_link_libraries(${PROJECT_NAME} PRIVATE
    SDL3::SDL3
    lib
    cpp_template
  )
endif()

if(BUILD_GTEST)
  add_executable(cpp-template-test
    "${CMAKE_SOURCE_DIR}/test/main_test.cpp"
  )
  message("building gtest")
  include("${CMAKE_SOURCE_DIR}/cmake/deps/gtest.cmake")
  target_link_libraries(cpp-template-test PRIVATE
    GTest::gtest
    GTest::gtest_main
    test
    lib
    cpp_template
  )

  include(GoogleTest)
  gtest_discover_tests(cpp-template-test)
endif()
