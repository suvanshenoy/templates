package com.github.javatemplate.cli.command;

import picocli.CommandLine.Command;

@Command(name = "java-template-cli", mixinStandardHelpOptions = true, version = "0.0.0", subcommands = {
    SearchCommand.class })
public class AppCliCommand {
}
