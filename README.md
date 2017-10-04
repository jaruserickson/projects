# projects
website was feeling empty so i made a projects section

and this thing is totally json powered! 

plug json into the `src/projects.json` file to generate a projects page.

## deploying

i personally recommend [surge](http://surge.sh) for hosting static sites, installing and deploying is as easy as

```
npm i -g surge
```
now in the project folder (after logging into surge via `surge login`)
```
npm i
npm run-script build
surge ./build <domain>
```

and you're all up and running!