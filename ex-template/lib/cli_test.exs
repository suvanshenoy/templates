defmodule CliTest do
  use ExUnit.Case, async: true

  test "foo" do
    foo1 = Integer.to_string(42, 2)
    IO.puts("foo1: #{foo1}")
    foo2 = Integer.to_string(Bitwise.bxor(42, Bitwise.<<<(1, 1)), 2)
    IO.puts("foo2: #{foo2}")
  end
end
