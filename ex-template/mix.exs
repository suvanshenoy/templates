defmodule ExTemplate.MixProject do
  use Mix.Project

  def project do
    [
      app: :ex_template,
      version: "0.1.0",
      elixir: "~> 1.15",
      start_permanent: Mix.env() == :prod,
      test_paths: ["."],
      test_pattern: "*_test.exs",
      deps: deps()
    ]
  end

  def application do
    [
      extra_applications: [:logger],
      mod: {ExTemplate.Application, []}
    ]
  end

  defp deps do
    [
      {:mix_test_interactive, "~> 5.1", only: :dev, runtime: false}
    ]
  end
end
