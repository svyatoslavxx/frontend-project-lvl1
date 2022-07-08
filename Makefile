install:
	npm ci
node:
	bin/games/brain-games.js
	bin/games/brain-calc.js
	bin/games/brain-even.js
	bin/games/brain-gcd.js
	bin/games/brain-prime.js
	bin/games/brain-progression.js
publish:
	npm publish --dry-run
lint:
	npx eslint .