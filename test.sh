#!/bin/bash
[[ "$(node dist)" == "Hello World from typescript" ]] && echo "Все работает" || echo "Что-то пошло не так"