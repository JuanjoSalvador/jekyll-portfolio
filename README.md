# jekyll-portfolio
Portfolio Jekyll module written in Angular

## Usage

1. Copy `portfolio.html` into `/_includes` folder, and `porfolio.js` into `/public/js` folder.
2. Add the following lines into `/_includes/head.html` (or where you have the `<head>` element):

    `<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular.min.js"></script>`<br>
    `<script src="{{ site.baseurl }}/public/js/portfolio.js"></script>`

2. Go to your portfolio page and add `{% include portfolio.html %}` where you want to show it.
3. Edit `projectList` into portfolio.html to show your projects.

## Demo

Coming soon.
