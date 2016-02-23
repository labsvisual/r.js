/*jslint
    browser: true
    plusplus: true
*/

/*global
    console, getComputedStyle
*/

(function () {
    "use strict";

    var R, Library;

    Library = function (params) {
        if (typeof params === 'string') {
            var selector = document.querySelectorAll(params), i = 0;
            this.length = selector.length;

            for (i; i < this.length; i++) {
                this[i] = selector[i];
            }
        }

        return this;
    };

    R = function (params) {
        return new Library(params);
    };

    // Helpers
    R.fn = Library.protype = {

    };

    // Methods
    R.fn = Library.prototype = {
        // Class manipulation
        addClass: function (className) {
            Array.prototype.forEach.call(this, function (el) {
                if (className.indexOf(' ') !== 0) {
                    var arr = className.split(' '), i = 0;
                    for (i; i < arr.length; i++) {
                        el.classList.add(arr[i]);
                    }
                } else {
                    el.classList.add(className);
                }
            });

            return this;
        },

        removeClass: function (className) {
            Array.prototype.forEach.call(this, function (el) {
                if (className.indexOf(' ') !== 0) {
                    var arr = className.split(' '), i = 0;
                    for (i; i < arr.length; i++) {
                        el.classList.remove(arr[i]);
                    }
                } else {
                    el.classList.remove(className);
                }
            });

            return this;
        },

        toggleClass: function (className) {
            Array.prototype.forEach.call(this, function (el) {
                if (className.indexOf(' ') !== 0) {
                    var arr = className.split(' '), i = 0;
                    for (i; i < arr.length; i++) {
                        el.classList.toggle(arr[i]);
                    }
                } else {
                    el.classList.toggle(className);
                }
            });

            return this;
        },

        // DOM manipulation (adding, removing)
        before: function (str) {
            Array.prototype.forEach.call(this, function (el) {
                el.insertAdjacentHTML('beforebegin', str);
            });

            return this;
        },

        after: function (str) {
            Array.prototype.forEach.call(this, function (el) {
                el.insertAdjacentHTML('afterend', str);
            });

            return this;
        },

        prepend: function (str) {
            Array.prototype.forEach.call(this, function (el) {
                var firstChild = el.firstChild;
                while (firstChild !== null && firstChild.nodeType === 3) { // skip TextNodes
                    firstChild = firstChild.nextSibling;
                }

                firstChild.insertAdjacentHTML('beforebegin', str);
            });

            return this;
        },

        append: function (str) {
            Array.prototype.forEach.call(this, function (el) {
                var lastChild = el.lastChild;
                while (lastChild !== null && lastChild.nodeType === 3) {
                    lastChild = lastChild.previousSibling;
                }

                lastChild.insertAdjacentHTML('afterend', str);
            });

            return this;
        },

        remove: function () {
            Array.prototype.forEach.call(this, function (el) {
                el.parentNode.removeChild(el);
            });
        },

        // Styling .css()
        css: function (cssprops) {
            Array.prototype.forEach.call(this, function (el) {
                var key;
                for (key in cssprops) {
                    if (cssprops.hasOwnProperty(key)) {
                        el.style[key] = cssprops[key];
                    }
                }
            });
        },

        // Visibility of elements
        show: function () {
            Array.prototype.forEach.call(this, function (el) {
                el.style.display = 'block';
            });

            return this;
        },

        hide: function () {
            Array.prototype.forEach.call(this, function (el) {
                el.style.display = 'none';
            });

            return this;
        },

        toggle: function () {
            Array.prototype.forEach.call(this, function (el) {
                if (getComputedStyle(el, null).display === 'none') {
                    el.style.display = '';
                } else {
                    el.style.display = 'none';
                }
            });

            return this;
        },

        // Events
        on: function (event, fn) {
            Array.prototype.forEach.call(this, function (el) {
                el.addEventListener(event, fn, false);
            });

            return this;
        },

        off: function (event, fn) {
            Array.prototype.forEach.call(this, function (el) {
                el.removeEventListener(event, fn, false);
            });

            return this;
        },

        // Looping
        each: function (fn) {
            Array.prototype.forEach.call(this, fn);
        },

        // DOM states
        ready: function (fn) {
            if (document.readyState !== 'loading') {
                fn();
            } else {
                document.addEventListener('DOMContentLoaded', fn);
            }
        },

        load: function (fn) {
            document.addEventListener("load", fn);
        },

        // Finding/searching DOM tree
        find: function (str) {
            var key;
            for (key in this) {
                if (this.hasOwnProperty(key)) {
                    return this[key].querySelector(str);
                }
            }
        },

        parent: function () {
            var key;
            for (key in this) {
                if (this.hasOwnProperty(key)) {
                    return this[key].parentNode;
                }
            }
        },

        prev: function () {
            var key;
            for (key in this) {
                if (this.hasOwnProperty(key)) {
                    return this[key].previousElementSibling;
                }
            }
        },

        next: function () {
            var key;
            for (key in this) {
                if (this.hasOwnProperty(key)) {
                    return this[key].nextElementSibling;
                }
            }
        }
    };

    if (!window.R) {
        window.R = R;
    }
}());
