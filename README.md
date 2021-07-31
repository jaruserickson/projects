# projects

**note:** 

This branch is in a weird state since I've migrated off of the old hosting, and am now hosting everything statically.

I'm going to be rehauling my personal website, and this will serve as a staging page.

---

my personal website is totally json powered!

this means you can plug any json (following [Example JSON](https://files.jaruserickson.com/jaruserickson.json)'s format) into the `JSON_URL` in `src/App.js` file to generate a projects page of your own - just like [mine](https://jaruserickson.com). (i'd also edit `public/index.html` to your liking)

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

(you could also just use s3 :P)

and you're all up and running!