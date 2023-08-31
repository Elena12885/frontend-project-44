install: # установка зависимостей из package-lock.json
	npm ci

brain-games: # запуск игры
	node bin/brain-games.js

publish: # отладка публикации пакета
	npm publish --dry-run


