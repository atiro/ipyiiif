jupyter-widget-iiif
===============================

A IIIF Image API viewer widget for Jupyter

Usage
-----

    from ipyiiif import Image

	image = Image(url='https://images.britishart.yale.edu/iiif/f49cd573-275a-4d00-9cd8-7c150c88c259/info.json')

	image
   
Installation
------------

To install use pip:

    $ pip install iiif
    $ jupyter nbextension enable --py --sys-prefix iiif


For a development installation (requires npm),

    $ git clone https://github.com/vanda/jupyter-widget-iiif.git
    $ cd jupyter-widget-iiif
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --sys-prefix iiif
    $ jupyter nbextension enable --py --sys-prefix iiif
