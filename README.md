# projects
website was feeling empty so i made a projects section.

this thing is totally json powered! 

plug any json (of the format specified) into the `projects.json` file to generate a projects page.

## deploying

i personally recommend [surge](http://surge.sh) for hosting static sites, installing and deploying is as easy as

```
npm i -g surge
```
now in the project folder
```
npm i
npm run-script build
surge -p ./build -d <domain>
```

and you're all up and running!