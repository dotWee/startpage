// Get all category link elements
var categoryLinks = document.getElementsByClassName('category-link');
for (var index = 0; index < categoryLinks.length; index++) {
    hyperlinkElement = categoryLinks[index].getElementsByTagName('a')[0];

    hyperlinkHash = getHyperlinkHash(hyperlinkElement.href);
    setHyperlinkListener(hyperlinkElement, hyperlinkHash);

    hyperlinkCounter = getHyperlinkCounter(hyperlinkHash);
    setHyperlinkFontsize(hyperlinkElement, hyperlinkCounter);

    console.log('hyperlinkElement: ' + hyperlinkElement.href + ' hyperlinkHash: ' + hyperlinkHash + ' hyperlinkCounter: ' + hyperlinkCounter);
}

function setHyperlinkFontsize(hyperlinkElement, hyperlinkCounter) {
    console.log('hyperlinkFontsize: ' + hyperlinkElement.style);
    console.log(hyperlinkElement.style);
}

function setHyperlinkListener(hyperlinkElement, hyperlinkHash) {
    hyperlinkElement.addEventListener('click', function () {
        var hyperlinkCounter = getHyperlinkCounter(hyperlinkHash);
        localStorage[hyperlinkHash] = hyperlinkCounter + 1;

        alert('INCREMENT ' + hyperlinkElement.href + ' TO ' + getHyperlinkCounter(hyperlinkHash));
    });
}

function getHyperlinkCounter(hyperlinkHash) {
    if (localStorage[hyperlinkHash]) {
        return Number(localStorage[hyperlinkHash]);
    }
    else {
        return 0;
    }
}

function incrementHyperlinkCounter(hyperlinkHash) {
    if (localStorage[hyperlinkHash]) {
        localStorage[hyperlinkHash] = Number(localStorage[hyperlinkHash]) + 1;
    }
    else {
        localStorage[hyperlinkHash] = 1;
    }

}

function getHyperlinkHash(hyperlinkReference) {
    len = hyperlinkReference.length;

    hash = 0;
    for (i = 1; i <= len; i++) {
        char = hyperlinkReference.charCodeAt((i - 1));
        hash += char * Math.pow(31, (len - i));
        hash = hash & hash; //javascript limitation to force to 32 bits
    }

    return hash;
}