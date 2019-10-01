# Notes

I will note down some learning details and iGEM server deploy knowledge here in this README.

### Deployment knowledge

1. iGEM has the default navigation bar which should not be hided on your site. set a margin of around 14px on top of everything to make space for that.

### Web dev knowldege learned through developing

##### em as a unit for css

**1em** for an element is the size of the same property for its direct parent. It traces all the way up in the DOM tree to an element with a definition of the property size.

cool usage of em from https://j.eremy.net/confused-about-rem-and-em/:

1. set em for all size values on a page
2. use media query to change the root em size of a large/small screen
