curl -d "paragraph=The following text<C><B>is centred and in boldface</B></C>" http://localhost:5000/api/v1/tag-checker ; echo
curl -d "paragraph=<B>This <\g>is <B>boldface</B> in <<*> a</B> <\6> <<d>sentence" http://localhost:5000/api/v1/tag-checker ; echo
curl -d "paragraph=<B><C>This should be centred and in boldface, but the tags are wrongly nested </B></C>" http://localhost:5000/api/v1/tag-checker ; echo
curl -d "paragraph=<B>This should be in boldface, but there is an extra closing tag</B></C>" http://localhost:5000/api/v1/tag-checker ; echo
curl -d "paragraph=<B><C>This should be centred and in boldface, but there is a missing closing tag</C>" http://localhost:5000/api/v1/tag-checker ; echo
