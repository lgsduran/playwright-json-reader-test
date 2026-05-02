.PHONY: test open-report clean

# Executa os testes localmente usando o script do package.json
test:
	@echo "Running Playwright tests locally..."
	npm run test

# Gera e abre o relatório do Playwright
open-report:
	@echo "Opening Playwright report..."
	npx playwright show-report

# Limpa os resultados dos testes
clean:
	@echo "Cleaning Playwright test results..."
	rm -rf test-results playwright-report