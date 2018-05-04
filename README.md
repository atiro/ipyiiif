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

Roadmap
-------

  * Load Open Seadragon UI correctly
  * Allow for options to be passed to Seadragon (zoom level, location, etc)
  * Enable Drag'n'Drop of image into notebook if possible
  * Support Presentation API manifests using CanvasPanel

Much longer term is to consider how to building on top of notebooks, so users
do not have to enter python commands to enable functionality.
