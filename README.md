Iframe
======
The Iframe module creates a custom field, which lets you add a complete iframe to your content types; including Src-URL, setting width and height, optionally a title above, and optionally a target attribute.

* This is a port of the Drupal 7 module:
https://www.drupal.org/project/iframe

Configuration
-------------

1. Navigate to Administration > Structure > Content types > [Content to edit] > Manage fields.
2. Add a new field and select "Iframe" as the Field type.
3. There are three choices for Widget types: URL only, URL with height, and URL with width and height.

Field Settings
1. Navigate to Administration > Structure > Content types > [Content type to edit] > Manage fields > Field to edit > Field Settings.
2. The width and height of an Iframe can be added. They require fixed width and only numbers are allowed.
3. Additional CSS Classes can be defined. Multiple classes should be separated by spaces. Check the "Expose Additional CSS Class" box to allow authors to specify an additional class attribute.
4. A frameborder can be set. The default is set to 0 = no border.
5. Scrolling can be set to Automatic, Disabled, or Enabled. Scrollbars help the user to reach all iframe content despite the real height of the iframe content.
6. Transparency can be set to on or off to allow transparency per CSS in the outer iframe tag.
7. Token support can be set to "no tokens allowed", "tokens only in title field", or "tokens for title and url field". Token module must be enabled for some of this functionality.

License
-------

This project is GPL v2 software. See the LICENSE.txt file in this directory for
complete text.


Maintainers
-----------

- Juan Olalla (https://github.com/juanolalla)

Originally written for Drupal by
- neffets - https://www.drupal.org/u/neffets
