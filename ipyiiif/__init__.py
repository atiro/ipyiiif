from ._version import version_info, __version__

from .iiif import *

def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'static',
        'dest': 'jupyter-iiif',
        'require': 'jupyter-iiif/extension'
    }]
