plugins {
    id("org.gradle.toolchains.foojay-resolver-convention") version "1.0.0"
}

rootProject.name = "ghost-viewer"

include("java-template-cli")
include("java-template-cli-command")
