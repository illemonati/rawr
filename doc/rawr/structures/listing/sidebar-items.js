initSidebarItems({"struct":[["Listing","A paginated listing of posts that can be iterated through. Posts are fetched lazily until the listing is exhausted (similar to an infinite scroll of posts). # Examples ```rust,no_run use rawr::client::RedditClient; use rawr::options::ListingOptions; use rawr::auth::AnonymousAuthenticator; let client = RedditClient::new(\"rawr\", AnonymousAuthenticator::new()); let sub = client.subreddit(\"redditdev\"); let mut hot = sub.hot(ListingOptions::default()).expect(\"Could not get hot posts\"); for post in hot.take(500) {     // Do something with each post here } ``` # Gotchas Be careful when looping directly over a listing - if you're iterating through a very long listing, like /r/all/new, your code never stop!"],["PostStream","An infinite stream of posts which updates as posts are received. Stores a list of seen posts so that each post is only seen once."]]});