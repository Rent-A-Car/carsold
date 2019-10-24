rm -fr `find | grep .bak` && echo "var jsonCarData = '`cat data.json`'; " > js/data.js && git add . && git commit -m "gg" && git push
