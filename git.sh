echo "var jsonCarData = '`cat data.json`'; " > js/data.js && echo "var LangObject= ' `cat lang.json ` ';">> js/data.js && git add . && git commit -m "` date `" && git push origin master
