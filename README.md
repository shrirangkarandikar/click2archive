llama -

I had to iterate a few times to figure out the right incantation (not llama's
fault, I'm still figuring out how to talk to it), but the solution that it generated....

* it used older version of manifest - I had to fix (easy, but still!)
	`service-worker`
* had to add a few more fields in manifest
	commands/description
	permissions

And it still didn't work! All in, I spent about half a day on this.

Claude -
here's the prompt that I used (typos included!)

`I'm trying to write a chrome extension. Emails and webpages have links that
I'd like to open in a new tab. However, I want to prepend the URL with the
string "archive.is:/" and remove all the text coming after the first '?'
(question mark character". Can you develp this?`

And the output worked directly, no edits required. The ctrl-click combination
doesn't work, but I'm not going to sit and debug this.

Total time spent - maybe 5 minutes? To be fair, I leveraged a lot of the
learnings from the llama experience, but if I'd gone directly with Claude, it
would have taken about 15 minutes!
