(ns cajax
  (:require [ajax.core :refer [GET POST] :as a]))

;; example with jsontest.com
;;http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&q=http://feeds.feedburner.com/mathrubhumi
(defn handler 
  "Handle the ajax response"
  [response]
    (.log js/console (str response)))

(a/ajax-request
  {:uri "http://ajax.googleapis.com/ajax/services/feed/load"
    :method :post
    :params {:v "1.0"
            :num "10"
            :q "http://feeds.feedburner.com/mathrubhumi"}
    :handler handler
    :format (a/json-request-format)
    :response-format (a/json-response-format {:keywords? true})})

(.write js/document "Hello from ClojureScript!")
