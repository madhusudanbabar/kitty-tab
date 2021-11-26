# Userful Links

- Random search with size
  https://source.unsplash.com/1600x900/?nature,water

- Documentation
  https://source.unsplash.com/

- page of results
  https://api.unsplash.com/search/photos?page=1&query=cat&client_id=8e31e45f4a0e8959d456ba2914723451b8262337f75bcea2e04ae535491df16d

# Future Scope

- favourite Kats
- dislike Kats
- bookmarks
- daily todo
- shuffle Kat / new Kat
- download button
- favourite pet ( User Input )
- filter new Kat

# TODO

- show offline cats if no network connectivity available ( Especially the user's favourite cats )

# In Progress

- favourite Kats

# Scratchpad

- url doesn't actually expands in the src attribute,
  so I need to figure out the URL after redirection, so for that purpose, I'll need to use fetch API instead of directly using the URL, so that I can use later keep track of favourites and un-favourites.
- define schema for favourite cats
  - "favKats" : [ {
    "data_uri": "",
    "url": "",
    }
    ]

# WIP

- [ x ] favourite Kat
- [ x ] remove duplicates
- [] save favourites to local storage
