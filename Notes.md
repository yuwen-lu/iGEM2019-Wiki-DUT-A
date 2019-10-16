# Notes

I will note down some learning details and iGEM server deploy knowledge here in this README.

### Deployment knowledge

1. iGEM has the default navigation bar which should not be hided on your site. set a margin of around 14px on top of everything to make space for that.

### Web dev knowldege learned through developing

1.  em and rem as units for css

**1em** for an element is the size of the font size for its direct parent. It traces all the way up in the DOM tree to an element with a definition of the font size.

> cool usage of em from https://j.eremy.net/confused-about-rem-and-em/:

> 1.  set em for all size values on a page
> 2.  use media query to change the root em size of a large/small screen

> It's gonna be much more code if you write it with fixed pixel values.

**1rem** is only relative to the root html font size. It can be occassionally used for paddings and margins to achieve consistency throughout the whole website (compared to em), with responsive features compared to raw pixels.

2. The most common computer screen resolution is 1366 _ 768 px, followed by 1920 _ 1080 px (March 2019).

3. When it comes to images, use jpeg format for photographs and png for icons. Background images are better with a width of around 2000px.

4. Problems may occur if you use mediawiki templates reference provided by the iGEM organizer, it's better to put it in a template and use link tag to refer to them. Refer to the [official wiki editing help](https://2019.igem.org/Resources/Using_HTML_CSS_and_Javascript) **Using <link> and <script> tags to include CSS and Javascript** section for help.
