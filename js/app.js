const getId = a => {
  return document.getElementById(a);
}

fetch('/json/model.json')
  .then(res => res.json())
  .then(model => {
    const octopus = {
      init: _ => {
        model.currentCat = model.cats[0];
        catListView.init()
        catView.init()
      },
      getCurrentCat: _ => {
        return model.currentCat;
    },

    getCats: _ => {
        return model.cats;
    },

    // set the currently-selected cat to the object passed in
    setCurrentCat: cat => {
        model.currentCat = cat;
    },

    // increments the counter for the currently-selected cat
    incrementCounter: _ => {
        model.currentCat.clickCount++;
        catView.render();
    }
};

const catView = {

    init: _ => {
        this.catElem = getId('cat');
        this.catNameElem = getId('cat-name');
        this.catImageElem = getId('cat-img');
        this.countElem = getId('cat-count');
        this.catImageElem.addEventListener('click',_ => {
            octopus.incrementCounter();
        });
        this.render();
    },

    render: _ => {
        // update the DOM elements with values from the current cat
        var currentCat = octopus.getCurrentCat();
        this.countElem.textContent = currentCat.clickCount;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.imgSrc;
    }
};

const catListView = {

    init: _ => {
        this.catListElem = document.getElementById('cat-list');
        this.render();
    },

    render: _ => {
        var cat, elem, i;
        var cats = octopus.getCats();

        this.catListElem.innerHTML = '';

        for (i = 0; i < cats.length; i++) {
            cat = cats[i];
            elem = document.createElement('li');
            elem.textContent = cat.name;
            elem.addEventListener('click', ((catCopy) => {
                return function() {
                    octopus.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));

            this.catListElem.appendChild(elem);
        }
    }
};
  octopus.init();

});