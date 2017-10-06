# projects
my personal website is totally json powered!

this means you can plug any json into the `src/projects.json` file to generate a projects page of your own - just like [mine](https://jaruserickson.com). (i'd also edit `public/index.html` to your liking and `package.json`'s homepage)

## deploying

i personally recommend [surge](http://surge.sh) for hosting static sites, installing and deploying is as easy as

```bash
npm i -g surge
# in the projects folder 
npm i
npm run-script build
surge ./build <domain>
# surge will ask you to create an account. 
# to use a custom domain simply point your A record to 45.55.110.124
```

and you're all up and running!