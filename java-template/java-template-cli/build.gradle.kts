plugins {
    application

    alias(libs.plugins.graalvm)
}

repositories {
    mavenCentral()

    gradlePluginPortal()
}

dependencies {
    testImplementation(libs.junit.jupiter)

    testRuntimeOnly("org.junit.platform:junit-platform-launcher")

    implementation(libs.guava)

    implementation(libs.picocli)

    annotationProcessor(libs.codegen)

    implementation(project(":java-template-cli-command"))
}

java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(25)
    }
}

application {
    mainClass = "com.github.javatemplate.cli.AppCli"
}

graalvmNative {
    binaries {
        named("main") {
            imageName.set("ghost-viewer")
            mainClass.set("com.github.javatemplate.cli.AppCli")
            quickBuild.set(true)

            resources.autodetect()
            if(System.getenv("GRAALVM_HOME") == null) {
                toolchainDetection.set(true)
                javaLauncher.set(javaToolchains.launcherFor {
                    languageVersion.set(JavaLanguageVersion.of(25))
                })
            } else {
                    toolchainDetection.set(false)
            }
        }
    }

    metadataRepository {
        enabled.set(true)
    }

    agent {
        enabled.set(true)
        metadataCopy {
            outputDirectories.add("src/main/resources/META-INF/native-image")
            mergeWithExisting.set(true)
        }
    }
}


tasks.named<Test>("test") {
    useJUnitPlatform()
}

tasks.withType<JavaCompile>().configureEach {
    options.compilerArgs.add("--enable-preview")
}

tasks.withType<JavaExec>().configureEach {
    jvmArgs("--enable-preview")
}

tasks.jar {
    manifest {
        attributes (
            "Main-Class" to "com.github.javatemplate.cli.AppCli"
        )
    }
}
