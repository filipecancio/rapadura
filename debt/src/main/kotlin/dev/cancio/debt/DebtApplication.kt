package dev.cancio.debt

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class DebtApplication

fun main(args: Array<String>) {
    runApplication<DebtApplication>(*args)
}
