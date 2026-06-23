package com.github.javatemplate.cli.command;

import picocli.CommandLine.Command;
import picocli.CommandLine.Parameters;

@Command(name = "search")
public class SearchCommand implements Runnable {
  @Parameters(index = "0", description = "Url to search")
  private String url;

  @Override
  public void run() {
    System.out.println(this.url);
  }
}
