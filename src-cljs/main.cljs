(ns qrpc.clojurescript-ajax
  (:import [goog.net Jsonp]))

(def my-url "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&q=http://feeds.feedburner.com/bbc")

;; write the HTML
(.write js/document "Data goes here ---><p>")
(.write js/document "<div id=\"data\">My Data</div>")
(def data-element (.getElementById js/document "data"))


;; Do the ajax bits
(defn handler 
  "Handle the ajax response"
  [response]
    ;(set! data-element.innerHTML (str response))
    (set! data-element.innerHTML (str response.responseData.feed.description))
    (.log js/console (str "Success:" response)))

(defn err-handler 
  "Handle the ajax errors"
  [response]
    (.log js/console (str "ERROR: " response)))


(.send (goog.net.Jsonp. my-url nil)
  "" handler err-handler nil)


