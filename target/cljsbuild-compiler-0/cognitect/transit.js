// Compiled by ClojureScript 0.0-2411
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__7473_7477 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__7474_7478 = null;
var count__7475_7479 = (0);
var i__7476_7480 = (0);
while(true){
if((i__7476_7480 < count__7475_7479)){
var k_7481 = cljs.core._nth.call(null,chunk__7474_7478,i__7476_7480);
var v_7482 = (b[k_7481]);
(a[k_7481] = v_7482);

var G__7483 = seq__7473_7477;
var G__7484 = chunk__7474_7478;
var G__7485 = count__7475_7479;
var G__7486 = (i__7476_7480 + (1));
seq__7473_7477 = G__7483;
chunk__7474_7478 = G__7484;
count__7475_7479 = G__7485;
i__7476_7480 = G__7486;
continue;
} else {
var temp__4126__auto___7487 = cljs.core.seq.call(null,seq__7473_7477);
if(temp__4126__auto___7487){
var seq__7473_7488__$1 = temp__4126__auto___7487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7473_7488__$1)){
var c__4456__auto___7489 = cljs.core.chunk_first.call(null,seq__7473_7488__$1);
var G__7490 = cljs.core.chunk_rest.call(null,seq__7473_7488__$1);
var G__7491 = c__4456__auto___7489;
var G__7492 = cljs.core.count.call(null,c__4456__auto___7489);
var G__7493 = (0);
seq__7473_7477 = G__7490;
chunk__7474_7478 = G__7491;
count__7475_7479 = G__7492;
i__7476_7480 = G__7493;
continue;
} else {
var k_7494 = cljs.core.first.call(null,seq__7473_7488__$1);
var v_7495 = (b[k_7494]);
(a[k_7494] = v_7495);

var G__7496 = cljs.core.next.call(null,seq__7473_7488__$1);
var G__7497 = null;
var G__7498 = (0);
var G__7499 = (0);
seq__7473_7477 = G__7496;
chunk__7474_7478 = G__7497;
count__7475_7479 = G__7498;
i__7476_7480 = G__7499;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4256__auto__,writer__4257__auto__,opt__4258__auto__){
return cljs.core._write.call(null,writer__4257__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4256__auto__,writer__4257__auto__,opt__4258__auto__){
return cljs.core._write.call(null,writer__4257__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){
return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__7500 = (i + (2));
var G__7501 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__7500;
ret = G__7501;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4256__auto__,writer__4257__auto__,opt__4258__auto__){
return cljs.core._write.call(null,writer__4257__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4256__auto__,writer__4257__auto__,opt__4258__auto__){
return cljs.core._write.call(null,writer__4257__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__7502_7506 = cljs.core.seq.call(null,v);
var chunk__7503_7507 = null;
var count__7504_7508 = (0);
var i__7505_7509 = (0);
while(true){
if((i__7505_7509 < count__7504_7508)){
var x_7510 = cljs.core._nth.call(null,chunk__7503_7507,i__7505_7509);
ret.push(x_7510);

var G__7511 = seq__7502_7506;
var G__7512 = chunk__7503_7507;
var G__7513 = count__7504_7508;
var G__7514 = (i__7505_7509 + (1));
seq__7502_7506 = G__7511;
chunk__7503_7507 = G__7512;
count__7504_7508 = G__7513;
i__7505_7509 = G__7514;
continue;
} else {
var temp__4126__auto___7515 = cljs.core.seq.call(null,seq__7502_7506);
if(temp__4126__auto___7515){
var seq__7502_7516__$1 = temp__4126__auto___7515;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7502_7516__$1)){
var c__4456__auto___7517 = cljs.core.chunk_first.call(null,seq__7502_7516__$1);
var G__7518 = cljs.core.chunk_rest.call(null,seq__7502_7516__$1);
var G__7519 = c__4456__auto___7517;
var G__7520 = cljs.core.count.call(null,c__4456__auto___7517);
var G__7521 = (0);
seq__7502_7506 = G__7518;
chunk__7503_7507 = G__7519;
count__7504_7508 = G__7520;
i__7505_7509 = G__7521;
continue;
} else {
var x_7522 = cljs.core.first.call(null,seq__7502_7516__$1);
ret.push(x_7522);

var G__7523 = cljs.core.next.call(null,seq__7502_7516__$1);
var G__7524 = null;
var G__7525 = (0);
var G__7526 = (0);
seq__7502_7506 = G__7523;
chunk__7503_7507 = G__7524;
count__7504_7508 = G__7525;
i__7505_7509 = G__7526;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4256__auto__,writer__4257__auto__,opt__4258__auto__){
return cljs.core._write.call(null,writer__4257__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4256__auto__,writer__4257__auto__,opt__4258__auto__){
return cljs.core._write.call(null,writer__4257__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__7527_7531 = cljs.core.seq.call(null,v);
var chunk__7528_7532 = null;
var count__7529_7533 = (0);
var i__7530_7534 = (0);
while(true){
if((i__7530_7534 < count__7529_7533)){
var x_7535 = cljs.core._nth.call(null,chunk__7528_7532,i__7530_7534);
ret.push(x_7535);

var G__7536 = seq__7527_7531;
var G__7537 = chunk__7528_7532;
var G__7538 = count__7529_7533;
var G__7539 = (i__7530_7534 + (1));
seq__7527_7531 = G__7536;
chunk__7528_7532 = G__7537;
count__7529_7533 = G__7538;
i__7530_7534 = G__7539;
continue;
} else {
var temp__4126__auto___7540 = cljs.core.seq.call(null,seq__7527_7531);
if(temp__4126__auto___7540){
var seq__7527_7541__$1 = temp__4126__auto___7540;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7527_7541__$1)){
var c__4456__auto___7542 = cljs.core.chunk_first.call(null,seq__7527_7541__$1);
var G__7543 = cljs.core.chunk_rest.call(null,seq__7527_7541__$1);
var G__7544 = c__4456__auto___7542;
var G__7545 = cljs.core.count.call(null,c__4456__auto___7542);
var G__7546 = (0);
seq__7527_7531 = G__7543;
chunk__7528_7532 = G__7544;
count__7529_7533 = G__7545;
i__7530_7534 = G__7546;
continue;
} else {
var x_7547 = cljs.core.first.call(null,seq__7527_7541__$1);
ret.push(x_7547);

var G__7548 = cljs.core.next.call(null,seq__7527_7541__$1);
var G__7549 = null;
var G__7550 = (0);
var G__7551 = (0);
seq__7527_7531 = G__7548;
chunk__7528_7532 = G__7549;
count__7529_7533 = G__7550;
i__7530_7534 = G__7551;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4256__auto__,writer__4257__auto__,opt__4258__auto__){
return cljs.core._write.call(null,writer__4257__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__7552_7556 = cljs.core.seq.call(null,v);
var chunk__7553_7557 = null;
var count__7554_7558 = (0);
var i__7555_7559 = (0);
while(true){
if((i__7555_7559 < count__7554_7558)){
var x_7560 = cljs.core._nth.call(null,chunk__7553_7557,i__7555_7559);
ret.push(x_7560);

var G__7561 = seq__7552_7556;
var G__7562 = chunk__7553_7557;
var G__7563 = count__7554_7558;
var G__7564 = (i__7555_7559 + (1));
seq__7552_7556 = G__7561;
chunk__7553_7557 = G__7562;
count__7554_7558 = G__7563;
i__7555_7559 = G__7564;
continue;
} else {
var temp__4126__auto___7565 = cljs.core.seq.call(null,seq__7552_7556);
if(temp__4126__auto___7565){
var seq__7552_7566__$1 = temp__4126__auto___7565;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7552_7566__$1)){
var c__4456__auto___7567 = cljs.core.chunk_first.call(null,seq__7552_7566__$1);
var G__7568 = cljs.core.chunk_rest.call(null,seq__7552_7566__$1);
var G__7569 = c__4456__auto___7567;
var G__7570 = cljs.core.count.call(null,c__4456__auto___7567);
var G__7571 = (0);
seq__7552_7556 = G__7568;
chunk__7553_7557 = G__7569;
count__7554_7558 = G__7570;
i__7555_7559 = G__7571;
continue;
} else {
var x_7572 = cljs.core.first.call(null,seq__7552_7566__$1);
ret.push(x_7572);

var G__7573 = cljs.core.next.call(null,seq__7552_7566__$1);
var G__7574 = null;
var G__7575 = (0);
var G__7576 = (0);
seq__7552_7556 = G__7573;
chunk__7553_7557 = G__7574;
count__7554_7558 = G__7575;
i__7555_7559 = G__7576;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4256__auto__,writer__4257__auto__,opt__4258__auto__){
return cljs.core._write.call(null,writer__4257__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4256__auto__,writer__4257__auto__,opt__4258__auto__){
return cljs.core._write.call(null,writer__4257__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function __GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a map of
* type constructors to handler instances.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){
return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x7586 = cljs.core.clone.call(null,handlers);
x7586.forEach = ((function (x7586,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__7587 = cljs.core.seq.call(null,coll);
var chunk__7588 = null;
var count__7589 = (0);
var i__7590 = (0);
while(true){
if((i__7590 < count__7589)){
var vec__7591 = cljs.core._nth.call(null,chunk__7588,i__7590);
var k = cljs.core.nth.call(null,vec__7591,(0),null);
var v = cljs.core.nth.call(null,vec__7591,(1),null);
f.call(null,v,k);

var G__7593 = seq__7587;
var G__7594 = chunk__7588;
var G__7595 = count__7589;
var G__7596 = (i__7590 + (1));
seq__7587 = G__7593;
chunk__7588 = G__7594;
count__7589 = G__7595;
i__7590 = G__7596;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__7587);
if(temp__4126__auto__){
var seq__7587__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7587__$1)){
var c__4456__auto__ = cljs.core.chunk_first.call(null,seq__7587__$1);
var G__7597 = cljs.core.chunk_rest.call(null,seq__7587__$1);
var G__7598 = c__4456__auto__;
var G__7599 = cljs.core.count.call(null,c__4456__auto__);
var G__7600 = (0);
seq__7587 = G__7597;
chunk__7588 = G__7598;
count__7589 = G__7599;
i__7590 = G__7600;
continue;
} else {
var vec__7592 = cljs.core.first.call(null,seq__7587__$1);
var k = cljs.core.nth.call(null,vec__7592,(0),null);
var v = cljs.core.nth.call(null,vec__7592,(1),null);
f.call(null,v,k);

var G__7601 = cljs.core.next.call(null,seq__7587__$1);
var G__7602 = null;
var G__7603 = (0);
var G__7604 = (0);
seq__7587 = G__7601;
chunk__7588 = G__7602;
count__7589 = G__7603;
i__7590 = G__7604;
continue;
}
} else {
return null;
}
}
break;
}
});})(x7586,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x7586;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__7585 = obj;
G__7585.push(kfn.call(null,k),vfn.call(null,v));

return G__7585;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){
return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){
return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){
return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){
return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t7608 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t7608 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta7609){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta7609 = meta7609;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t7608.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t7608.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t7608.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t7608.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t7608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7610){
var self__ = this;
var _7610__$1 = this;
return self__.meta7609;
});

cognitect.transit.t7608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7610,meta7609__$1){
var self__ = this;
var _7610__$1 = this;
return (new cognitect.transit.t7608(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta7609__$1));
});

cognitect.transit.t7608.cljs$lang$type = true;

cognitect.transit.t7608.cljs$lang$ctorStr = "cognitect.transit/t7608";

cognitect.transit.t7608.cljs$lang$ctorPrWriter = (function (this__4256__auto__,writer__4257__auto__,opt__4258__auto__){
return cljs.core._write.call(null,writer__4257__auto__,"cognitect.transit/t7608");
});

cognitect.transit.__GT_t7608 = (function __GT_t7608(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta7609){
return (new cognitect.transit.t7608(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta7609));
});

}

return (new cognitect.transit.t7608(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),79,new cljs.core.Keyword(null,"end-line","end-line",1837326455),278,new cljs.core.Keyword(null,"column","column",2078222095),6,new cljs.core.Keyword(null,"line","line",212345235),273,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/rca/OneDrive/Projects/cajx/target/cljsbuild-compiler-0/cognitect/transit.cljs"], null)));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big integer from a string.
*/
cognitect.transit.bigint = (function bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big integer value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});
