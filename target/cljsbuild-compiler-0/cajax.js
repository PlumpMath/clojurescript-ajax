// Compiled by ClojureScript 0.0-2411
goog.provide('cajax');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('ajax.core');
/**
* Handle the ajax response
*/
cajax.handler = (function handler(response){
return console.log([cljs.core.str(response)].join(''));
});
ajax.core.ajax_request(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$58,"http://ajax.googleapis.com/ajax/services/feed/load",cljs.core.constant$keyword$57,cljs.core.constant$keyword$63,cljs.core.constant$keyword$56,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$64,"1.0",cljs.core.constant$keyword$65,"10",cljs.core.constant$keyword$66,"http://feeds.feedburner.com/mathrubhumi"], null),cljs.core.constant$keyword$59,cajax.handler,cljs.core.constant$keyword$44,ajax.core.json_request_format(),cljs.core.constant$keyword$29,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$42,true], null))], null));
document.write("Hello from ClojureScript!");
