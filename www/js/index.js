/* global pdf */
/* global $ */
/* global Backbone */
/* global cordova */

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var DEBUG = ((typeof cordova) === 'undefined');

var HomeView = Backbone.View.extend({

    initialize: function() {
        this.$button = this.$el.find('#generate');
        this.$url = this.$el.find('#url');
        this.$urlShare = this.$el.find('#url-share');
        this.$raw = this.$el.find('#rawhtml');
        this.$html = this.$el.find('#html');
        this.$display = this.$el.find('#display');
    },

    events: {
        'click #generate': 'makePDFBase64',
        'click #share': 'makePDFAndShare',
        'click #share-raw': 'makeRawPDFandShare',
    },

    success: function(msg) {
        $('#baseH').html('base64:' + msg);
        
          $.post( "http://localhost:3000/save", { pdfData: msg })
            .done(function( data ) {
                alert( "Data Loaded: " + data );
            });
    },

    failure: function(err) {
        alert('->', err);
    },

    makePDFBase64: function(e) {
        e.preventDefault();
        /* generate pdf using url. */
        pdf.htmlToPDF({
            url: this.$url.val(),
            documentSize: "A4",
            landscape: "portrait",
            type: "base64"
        }, this.success, this.failure);
    },

    makePDFAndShare: function(e) {
        e.preventDefault();
        /* generate pdf using url. */
        pdf.htmlToPDF({
            url: this.$urlShare.val(),
            documentSize: "A4",
            landscape: "portrait",
            type: "share"
        }, this.success, this.failure);
    },

    makeRawPDFandShare: function(e) {
        e.preventDefault();
        /* generate pdf using url. */
        pdf.htmlToPDF({
            data: this.$raw.val(),
            documentSize: "A4",
            landscape: "portrait",
            type: "share"
        }, function(pdf){  $('#rawH').html(pdf);  
            
            $.post( "http://localhost:3000/save", { pdfData: pdf })
            .done(function( data ) {
                alert( "Data Loaded: " + data );
            });

          }, this.failure);
    }
});

var DemoRouter = Backbone.Router.extend({
    routes: {
        '*path': 'index',
    },

    index: function() {
        new HomeView({
            el: $('.starter-template')
        });
    }
});


if (DEBUG) {
    console.log('start app..');

    new DemoRouter();
    Backbone.history.start();
} else {
    document.addEventListener('deviceready', function() {

        console.log('start app..');

        new DemoRouter();
        Backbone.history.start();
    }, false);

}
