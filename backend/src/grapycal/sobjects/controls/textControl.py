from typing import Any, Dict
from grapycal.sobjects.controls.control import Control
from objectsync import SObject, StringTopic, IntTopic, ListTopic, ObjListTopic, GenericTopic, FloatTopic


class TextControl(Control):
    '''
    To add a text control to a node, use the following code in the node:
    ```python
    self.add_control(TextControl, text='', label='', editable=True)
    ```
    '''
    frontend_type = 'TextControl'
    def pre_build(self, attribute_values: Dict[str, Any] | None, text='', label='', editable=True, **_):
        super().pre_build(attribute_values, **_)
        self.text = self.add_attribute('text', StringTopic, text)
        self.label = self.add_attribute('label', StringTopic, label)
        self.editable = self.add_attribute('editable', IntTopic, 1 if editable else 0)
        