# AGENTS.md – ekvilibrium

Testprojekt for ai-factory. Det bruges til at køre fabrikkens samlebånd mod et rigtigt repo.

## Stack

- Node 22, ren JavaScript (ESM), ingen afhængigheder.
- Kode i `src/`, tests i `test/` med `node:test` og `node:assert/strict`.
- Kør tests med `npm test`.

## Regler

- Hver ny funktion får JSDoc og mindst én test i `test/`.
- Tilføj ingen afhængigheder.
- Rør ikke `.github/`.
