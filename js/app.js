var catElem = document.getElementById('cat');
var catNameElem = document.getElementById('cat-name');
var catImageElem = document.getElementById('cat-img');
var countElem = document.getElementById('cat-count');
var cat = {
    clickCount : 0,
    name : 'Tabby',
    imgSrc : 'img/434164568_fea0ad4013_z.jpg',
    imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568',
};

function incrementCounter() {
    cat.clickCount++;
    view.render();
}

var view = {
    render: function() {
        // update the view
        countElem.textContent = cat.clickCount;
        catNameElem.textContent = cat.name
        catImageElem.src = cat.imgSrc;
    }
}

// attach event listeners
catElem.addEventListener('click', function(e){
    incrementCounter();
});

// initial render
view.render();