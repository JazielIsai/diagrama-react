

import ColorNode from './NodeTypes/ColorNode';
import RangeNode from './NodeTypes/RangeNode';
import TextNode from './NodeTypes/TextNode';
import CheckBoxNode from './NodeTypes/CheckboxNode';
import SelectNode from './NodeTypes/SelectorNode';
import ButtomNode from './NodeTypes/ButtomNode';
import FileNode from './NodeTypes/FIleNode';
import RadioNode from './NodeTypes/RadioNode';

const TypesNode = () => {


    return {
        color: ColorNode,
        range: RangeNode,
        text: TextNode,
        checkbox: CheckBoxNode,
        select: SelectNode,
        buttom: ButtomNode,
        file: FileNode,
        radio: RadioNode
    }
}


export default TypesNode;