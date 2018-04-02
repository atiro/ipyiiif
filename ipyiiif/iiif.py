import ipywidgets as widgets
from traitlets import Unicode, default

@widgets.register
class Image(widgets.DOMWidget):
    """Image API widget."""
    _view_name = Unicode('HelloView').tag(sync=True)
    _model_name = Unicode('HelloModel').tag(sync=True)
    _view_module = Unicode('iiif').tag(sync=True)
    _model_module = Unicode('iiif').tag(sync=True)
    _view_module_version = Unicode('^0.1.0').tag(sync=True)
    _model_module_version = Unicode('^0.1.0').tag(sync=True)
    url = Unicode('https://framemark.vam.ac.uk/collections/2011FB2').tag(sync=True)

