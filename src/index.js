const utils = require('ogxt-utils');
const $ = require('jquery');

function html2ogxt() {
    const $section = $('.section.html2ogxt')
    const $in = $section.find('.demo__text--input');
    const $out = $section.find('.demo__text--output');

    const html = $in.val();
    const ogxt = utils.html2ogxt(html, false);

    $out.val(ogxt);
}

function annotate() {
    const $section = $('.section.annotate');
    const $inHtml = $section.find('.demo__text--input-html');
    const $inAnnotations = $section.find('.demo__text--input-annotations');
    const $out = $section.find('.demo__text--output');

    const html = $inHtml.val();
    const annotations = JSON.parse($inAnnotations.val());
    const annotatedHtml = utils.annotate(html, annotations);

    $out.val(annotatedHtml);
}

function cleanupAnnotations() {
    const $section = $('.section.cleanupAnnotations');
    const $in = $section.find('.demo__text--input');
    const $out = $section.find('.demo__text--output');

    const html = $in.val();
    const cleanHtml = utils.cleanupAnnotations(html);

    $out.val(cleanHtml);
}

function setup() {
    $('.html2ogxt .demo__text--input').on('input', function(){
        html2ogxt();
    });
    $('.annotate .demo__text--input-html').on('input', function(){
        annotate();
    });
    $('.annotate .demo__text--input-annotations').on('input', function(){
        annotate();
    });
    $('.cleanupAnnotations .demo__text--input').on('input', function(){
        cleanupAnnotations();
    });
}

setup();
html2ogxt();
annotate();
cleanupAnnotations();