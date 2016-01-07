# XLeagueFront

Frontend of XLeague - http://xleague.info/

For feedback, ideas, bugs etc. use Issues

## What is where

### content folder

This is for markdown files that are then parsed and inserted into HTML. Markdown is easily edited and doesn't require any code knowledge

* If you don't know any code - have a look there
* There is some still html being used
    * `<span style="code"></span>` is being used for code highlighting - if we want to let the user know where the code or command starts and ends
    * `<a href>` is being used for linking because we want links to open in new tab/window. Therefore target=_blank
    
### css folder 

Self-explanatory folder for styling sheets

* If you wish to redesign the page completely, create a new .css file and we can give an option for multiple page 'skins'

### img folder

Images ar found there, most of them aren't on git (favicons and their variations)

* Best way to contribute images, logos and what not would be through chat

### includes folder

Php files that might be used elsewhere, like page header. Also good for easily accessing parts of the code you want.

## pages folder

Different pages than index.php

### scripts folder

Home of javascript

* There's always something to improve