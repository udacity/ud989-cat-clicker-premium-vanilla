var catElem = document.getElementById('cat');
var catNameElem = document.getElementById('cat-name');
var catImageElem = document.getElementById('cat-img');
var countElem = document.getElementById('cat-count');

var catListElem = document.getElementById('cat-list');


/* ======= Model ======= */

var cats = [{
    clickCount : 0,
    name : 'Tabby',
    imgSrc : 'img/434164568_fea0ad4013_z.jpg',
    imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568'
},
{
    clickCount : 0,
    name : 'Tiger',
    imgSrc : 'img/4154543904_6e2428c421_z.jpg',
    imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904'
},
{
    clickCount : 0,
    name : 'Scaredy',
    imgSrc : 'img/22252709_010df3379e_z.jpg',
    imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709'
},
{
    clickCount : 0,
    name : 'Shadow',
    imgSrc : 'img/1413379559_412a540d29_z.jpg',
    imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559'
},
{
    clickCount : 0,
    name : 'Sleepy',
    imgSrc : 'img/9648464288_2516b35537_z.jpg',
    imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288'
}];

var currentCat = cats[0];


/* ======= View ======= */

var catView = {
    render: function() {
        // update the view
        countElem.textContent = currentCat.clickCount;
        catNameElem.textContent = currentCat.name
        catImageElem.src = currentCat.imgSrc;
    }
}

var catListView = {
    render: function() {
        // empty cat list
        catListElem.innerHTML = '';

        for (var i = 0; i < cats.length; i++) {
            // make a new cat list item, and append it
            var cat = cats[i];
            var elem = document.createElement('li');
            var text = cat.name;
            elem.textContent = text;
            elem.addEventListener('click', (function(cat) {
                return function() {
                    currentCat = cat;
                    catView.render();
                };
            })(cat));
            catListElem.appendChild(elem);
        };
    }
}


/* ======= Glue ======= */

function incrementCounter() {
    currentCat.clickCount++;
    catView.render();
}

// attach event listeners
catElem.addEventListener('click', function(e){
    incrementCounter();
});

// initial render
catListView.render();
catView.render();
