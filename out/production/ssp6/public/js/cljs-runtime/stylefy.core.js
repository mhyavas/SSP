goog.provide('stylefy.core');
/**
 * Converts the given style to CSS class.
 * Returns a map with :class keyword, pointing to the generated CSS class.
 * 
 * To keep the rendering process fast, use-style works asynchronously, meaning that it
 * does not add the generated CSS class into the DOM immediately, but very soon instead.
 * If the style has not been added into the DOM yet, it returns the given props as inline style,
 * so that the component looks good even if CSS class has not been generated yet.
 * However, if the style contains specific modes or media query definitions,
 * which cannot be used as inline style, {:style {:visibility "hidden"}} is returned.
 * Thus, the component is going to be hidden for a few milliseconds.
 * In most cases, this is not a problem, but if you want to avoid it, see prepare-styles function.
 * 
 * The given 'style' parameter is a map which contains CSS style properties
 * (as supported by Garden library). There can also be special namespaced keywords
 * along with the style definitions. These are:
 * 
 * Core features:
 * 
 * ::sub-styles        Makes it possible to define a named style map inside of the main style map.
 *                     The contents of ::sub-styles should be a map, in which keys define the name of
 *                     the sub-style and values contain the style properties.
 *                     Sub-styles are nothing special, they are supposed to contain the same contents
 *                     as the main style map. ::sub-styles helps you to define styles that are closely
 *                     related to the main style map but do not deserve their own 'def'.
 * ::mode              A map in which keys are mode names and values are style properties.
 *                     Internally all modes are converted to CSS pseudoclasses or pseudoelements.
 *                     You can use any mode name that is a valid CSS speudoclass.
 * ::media             A map in which keys are maps presenting CSS media query definitions, and values
 *                     are style maps which are used when the media query is active.
 *                     Vendor prefixes and modes can be used inside the media query style map.
 * ::supports          A map in which keys are strings presenting CSS feature query definitions, and values
 *                     are style maps which are used when the supports query is active.
 *                     Vendor prefixes, media queries and modes can be used inside the support query style map.
 * ::vendors           A vector of vendor prefixes that are used with ::auto-prefix.
 * ::auto-prefix       A set of style properties that should be prefixed with ::vendors.
 * ::with-classes      A collection of additional class names that should always be used with
 *                     this style definition.
 * ::manual            Manual mode can be used to style child elements with manually written CSS selectors
 *                     using Garden syntax. It should be used only for styling 3rd party components and
 *                     resolving corner cases in which complex CSS selectors are needed.
 * ::scope             Can be used to define styles that are applied only when the current element is in some specific scope.
 * 
 * Additional features:
 * 
 * ::class-prefix      Custom prefix for generated class names. If not given, the default prefix will be used.
 *                     Custom prefix can be used for debugging and automatic software testing purposes.
 *                     Note that you need to turn custom class prefixes on in the init function.
 * 
 * Options is an optional map, which contains HTML attributes (:class, :href, :src etc.).
 */
stylefy.core.use_style = (function stylefy$core$use_style(var_args){
var G__48328 = arguments.length;
switch (G__48328) {
case 1:
return stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1 = (function (style){
return stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(style,cljs.core.PersistentArrayMap.EMPTY);
}));

(stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2 = (function (style,options){
if(((cljs.core.map_QMARK_(style)) || ((style == null)))){
} else {
throw (new Error(["Assert failed: ",["Style should be a map or nil, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0))].join(''),"\n","(or (map? style) (nil? style))"].join('')));
}

if(((cljs.core.map_QMARK_(options)) || ((options == null)))){
} else {
throw (new Error(["Assert failed: ",["Options should be a map or nil, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options], 0))].join(''),"\n","(or (map? options) (nil? options))"].join('')));
}

return stylefy.impl.styles.use_style_BANG_(style,options,(function (style__$1){
return stylefy.impl.dom.add_style(cljs.core.deref(stylefy.impl.dom.dom),style__$1);
}));
}));

(stylefy.core.use_style.cljs$lang$maxFixedArity = 2);

/**
 * Defines style for a component using sub-style.
 * 
 * The style and options are the same as you would use with use-style.
 * sub-style is the name of the sub-stale in the given style map.
 * 
 * If you have a deeper sub-style nesting, ie. you want to get a sub-style from sub-style,
 * take a look at sub-style function.
 */
stylefy.core.use_sub_style = (function stylefy$core$use_sub_style(var_args){
var G__48337 = arguments.length;
switch (G__48337) {
case 2:
return stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2 = (function (style,sub_style){
return stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$3(style,sub_style,cljs.core.PersistentArrayMap.EMPTY);
}));

(stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$3 = (function (style,sub_style,options){
if(((cljs.core.map_QMARK_(style)) || ((style == null)))){
} else {
throw (new Error(["Assert failed: ",["Style should be a map or nil, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0))].join(''),"\n","(or (map? style) (nil? style))"].join('')));
}

if(((cljs.core.map_QMARK_(options)) || ((options == null)))){
} else {
throw (new Error(["Assert failed: ",["Options should be a map or nil, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options], 0))].join(''),"\n","(or (map? options) (nil? options))"].join('')));
}

return stylefy.impl.styles.use_sub_style_BANG_(style,sub_style,options,(function (style__$1){
return stylefy.impl.dom.add_style(cljs.core.deref(stylefy.impl.dom.dom),style__$1);
}));
}));

(stylefy.core.use_sub_style.cljs$lang$maxFixedArity = 3);

/**
 * Returns sub-style for a given style.
 */
stylefy.core.sub_style = (function stylefy$core$sub_style(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48466 = arguments.length;
var i__5770__auto___48467 = (0);
while(true){
if((i__5770__auto___48467 < len__5769__auto___48466)){
args__5775__auto__.push((arguments[i__5770__auto___48467]));

var G__48468 = (i__5770__auto___48467 + (1));
i__5770__auto___48467 = G__48468;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return stylefy.core.sub_style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(stylefy.core.sub_style.cljs$core$IFn$_invoke$arity$variadic = (function (style,sub_styles){
if(cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,sub_styles)){
} else {
throw (new Error(["Assert failed: ",["Sub style should be referenced by keyword, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sub_styles], 0))].join(''),"\n","(every? keyword? sub-styles)"].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(stylefy.impl.styles.sub_style,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [style], null),sub_styles));
}));

(stylefy.core.sub_style.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(stylefy.core.sub_style.cljs$lang$applyTo = (function (seq48352){
var G__48353 = cljs.core.first(seq48352);
var seq48352__$1 = cljs.core.next(seq48352);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48353,seq48352__$1);
}));

/**
 * Initialises stylefy.
 * 
 *   The following options are supported:
 * 
 *   :global-vendor-prefixes     A map containing a set of ::stylefy/vendors and ::stylefy/auto-prefix properties.
 *                            These properties are globally prefixed in all stylefy style maps.
 *   :use-custom-class-prefix?   If set to true, custom class prefix is used if the style map contains it.
 *                            By default, this is set to false.
 * 
 *   FRONTEND ONLY:
 * 
 *  :use-caching?             If true, caches the generated CSS code using localstorage
 *                            so that future page loads work faster. Defaults to true since version 1.7.0.
 *                            Also check :cache-options.
 *  :cache-options            A map which can contain the following keywords:
 *    :expires                Number of seconds after the cache is cleared automatically.
 *                            For example, value 604800 clears the cache after one week.
 *                            By default, the cache is never cleared automatically.
 *                            You can also clear the cache manually by calling stylefy.cache/clear.
 * 
 *  :multi-instance           Provides support for multiple stylefy instances.
 *                            This can be used if you need to run multiple SPA applications
 *                            on the same page and at least two of them are using stylefy.
 *    :base-node              Base node where this instance's <style> tags are queried. Not required.
 *    :instance-id            Unique string (for example app name). This is used as suffix for stylefy's <style> tags
 *                            so make sure you name each instance's <style> tags correctly. For example:
 *                            <style id="_stylefy-styles_myapp">
 *                            <style id="_stylefy-constant-styles_myapp">
 *                            This value is also used as suffix in caching.
 */
stylefy.core.init = (function stylefy$core$init(var_args){
var G__48436 = arguments.length;
switch (G__48436) {
case 0:
return stylefy.core.init.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return stylefy.core.init.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stylefy.core.init.cljs$core$IFn$_invoke$arity$0 = (function (){
return stylefy.core.init.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(stylefy.core.init.cljs$core$IFn$_invoke$arity$1 = (function (options){
if(cljs.core.truth_(cljs.core.deref(stylefy.impl.state.stylefy_initialised_QMARK_))){
stylefy.impl.log.warn("Attempted to initialise stylefy more than once.");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(options))){
} else {
throw (new Error(["Assert failed: ","Unable to initialise stylefy: DOM module is missing!","\n","(:dom options)"].join('')));
}

cljs.core.reset_BANG_(stylefy.impl.dom.dom,new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(options));

stylefy.impl.dom.load_uninitialised_styles(cljs.core.deref(stylefy.impl.dom.dom),cljs.core.deref(stylefy.impl.dom.uninitialised_styles));

cljs.core.reset_BANG_(stylefy.impl.dom.uninitialised_styles,null);

stylefy.impl.hashing.init_custom_class_prefix(options);

stylefy.impl.dom.init_multi_instance(options);

stylefy.impl.cache.init(cljs.core.deref(stylefy.impl.dom.stylefy_instance_id),options);

stylefy.impl.dom.load_cache(cljs.core.deref(stylefy.impl.dom.dom));

stylefy.impl.styles.init_global_vendor_prefixes(options);

cljs.core.reset_BANG_(stylefy.impl.state.stylefy_initialised_QMARK_,true);

stylefy.impl.dom.update_dom(cljs.core.deref(stylefy.impl.dom.dom));

return null;
}));

(stylefy.core.init.cljs$lang$maxFixedArity = 1);

/**
 * Frontend: Adds the given keyframe definition into the DOM asynchronously.
 * Backend: Adds the given keyframe definition into the current context.
 * 
 * Identifier is the name of the keyframes.
 * Frames are given in the same form as Garden accepts them.
 * 
 * Example:
 * (stylefy/keyframes "simple-animation"
 *                     [:from
 *                      {:opacity 0}]
 *                     [:to
 *                      {:opacity 1}])
 */
stylefy.core.keyframes = (function stylefy$core$keyframes(var_args){
var args__5775__auto__ = [];
var len__5769__auto___48470 = arguments.length;
var i__5770__auto___48471 = (0);
while(true){
if((i__5770__auto___48471 < len__5769__auto___48470)){
args__5775__auto__.push((arguments[i__5770__auto___48471]));

var G__48472 = (i__5770__auto___48471 + (1));
i__5770__auto___48471 = G__48472;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return stylefy.core.keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(stylefy.core.keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
if(typeof identifier === 'string'){
} else {
throw (new Error(["Assert failed: ",["Identifier should be string, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([identifier], 0))].join(''),"\n","(string? identifier)"].join('')));
}

var keyframes_as_css = garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$3(garden.stylesheet.at_keyframes,identifier,frames)], 0));
stylefy.impl.dom.add_keyframes(cljs.core.deref(stylefy.impl.dom.dom),identifier,keyframes_as_css);

return null;
}));

(stylefy.core.keyframes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(stylefy.core.keyframes.cljs$lang$applyTo = (function (seq48462){
var G__48463 = cljs.core.first(seq48462);
var seq48462__$1 = cljs.core.next(seq48462);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48463,seq48462__$1);
}));

/**
 * Frontend: Adds the given font-face definition into the DOM asynchronously.
 * Backend: Adds the given font-face definition into the current context.
 * 
 * Properties are given in the same form as Garden accepts them.
 * 
 * Example:
 * (stylefy/font-face {:font-family "open_sans"
 *                     :src "url('../fonts/OpenSans-Regular-webfont.woff') format('woff')"
 *                     :font-weight "normal"
 *                     :font-style "normal"})
 */
stylefy.core.font_face = (function stylefy$core$font_face(properties){
if(cljs.core.map_QMARK_(properties)){
} else {
throw (new Error(["Assert failed: ",["Properties should be a map, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([properties], 0))].join(''),"\n","(map? properties)"].join('')));
}

var font_faces_as_css = garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([properties], 0))], 0));
stylefy.impl.dom.add_font_face(cljs.core.deref(stylefy.impl.dom.dom),font_faces_as_css);

return null;
});
/**
 * Frontend: Creates a CSS selector for the given tag and properties and adds it into the DOM asynchronously.
 * Backend: Creates a CSS selector for the given tag and properties and adds it into the current context.
 * 
 * Normally you should let stylefy convert your style maps to unique CSS classes by calling
 * use-style, instead of creating tag selectors. However, custom tag styles
 * can be useful for setting styles on base elements, like html or body.
 * 
 * Example:
 * (stylefy/tag "code"
 *               {:background-color "lightyellow"})
 */
stylefy.core.tag = (function stylefy$core$tag(name,properties){
if(typeof name === 'string'){
} else {
throw (new Error(["Assert failed: ",["Tag name should be a string, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))].join(''),"\n","(string? name)"].join('')));
}

if(cljs.core.map_QMARK_(properties)){
} else {
throw (new Error(["Assert failed: ",["Properties should be a map, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([properties], 0))].join(''),"\n","(map? properties)"].join('')));
}

var tag_as_css = stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),properties,new cljs.core.Keyword(null,"custom-selector","custom-selector",-474556277),name], null));
stylefy.impl.dom.add_tag(cljs.core.deref(stylefy.impl.dom.dom),tag_as_css);

return null;
});
/**
 * Frontend: Creates a CSS class with the given name and properties and adds it into the DOM asynchronously.
 * Backend: Creates a CSS class with the given name and properties and adds it into the the current context.
 * 
 * Normally you should let stylefy convert your style maps to unique CSS classes by calling
 * use-style. Thus, there is usually no need to create customly named classes when using stylefy,
 * unless you work with some 3rd party framework.
 * 
 * Example:
 * (stylefy/class "enter-transition"
 *                 {:transition "background-color 2s"})
 */
stylefy.core.class$ = (function stylefy$core$class(name,properties){
if(typeof name === 'string'){
} else {
throw (new Error(["Assert failed: ",["Name should be a string, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))].join(''),"\n","(string? name)"].join('')));
}

if(cljs.core.map_QMARK_(properties)){
} else {
throw (new Error(["Assert failed: ",["Properties should be a map, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([properties], 0))].join(''),"\n","(map? properties)"].join('')));
}

var class_as_css = stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),properties,new cljs.core.Keyword(null,"custom-selector","custom-selector",-474556277),stylefy.impl.conversion.class_selector(name)], null));
stylefy.impl.dom.add_class(cljs.core.deref(stylefy.impl.dom.dom),class_as_css);

return null;
});
/**
 * Converts the given styles and their sub-styles to CSS and adds them into the DOM
 *    synchronously (immediately).
 */
stylefy.core.prepare_styles = (function stylefy$core$prepare_styles(styles){
if(cljs.core.seqable_QMARK_(styles)){
} else {
throw (new Error(["Assert failed: ",["Styles should be seqable, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([styles], 0))].join(''),"\n","(seqable? styles)"].join('')));
}

if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,styles))){
} else {
throw (new Error(["Assert failed: ",["Every style should be a map or nil, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([styles], 0))].join(''),"\n","(every? map? (remove nil? styles))"].join('')));
}

stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$1(styles);

return null;
});
/**
 * Same as prepare-styles, but takes only one style map as a parameter, prepares it
 *    and returns it. Can be used easily along with use-style: (use-style (prepare-style style)).
 */
stylefy.core.prepare_style = (function stylefy$core$prepare_style(style){
if(((cljs.core.map_QMARK_(style)) || ((style == null)))){
} else {
throw (new Error(["Assert failed: ",["Style should be a map or nil, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0))].join(''),"\n","(or (map? style) (nil? style))"].join('')));
}

if(cljs.core.truth_(style)){
stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [style], null));
} else {
}

return style;
});

//# sourceMappingURL=stylefy.core.js.map
