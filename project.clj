(defproject cljsbuild-example-simple "1.1.0"
  :description "A simple example of how to use lein-cljsbuild"
  :source-paths ["src-clj"]
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2411"]
                 [cljs-ajax "0.3.14"]
                 [hiccups "0.3.0"]]
  :plugins [[lein-cljsbuild "1.1.0"]]
  :cljsbuild {
    :builds [{:source-paths ["src-cljs"]
              :compiler {:output-to "resources/public/js/main.js"
                         :optimizations :advanced
                         :pretty-print true}}]}
)
