# Note

Worked on it in following order:  
- pw-practice (+bondaracademysite) as a reminder.  
- uitestingplayground - testing useless POM implementation.  
- swag-labs (saucedemo) - starting proper projects.  

Multi-config playwright setup is used:  
- each application has its own config in `configs/`  
- configs are executes using `-c`  
- global `playwright.config.ts` is used only for VSC UI (test discovery/  run button)  

# Install & setup

```
npm install
```
- Copy .env.example to .env
- Fill required values in `.env`

## VS Code (GUI)

```
npm run pw-ui
```

## Run tests per project

```
npm run pwpractice-run
npm run uitpg-run
npm run swag-run
npm run bondar-run
```