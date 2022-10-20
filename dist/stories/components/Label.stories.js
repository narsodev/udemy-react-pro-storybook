var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import Label from '../../components/Label';
export default {
    title: 'UI/Label',
    component: Label,
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
        fontColor: { control: 'color' }
    }
};
var Template = function (args) { return _jsx(Label, __assign({}, args)); };
export var Default = Template.bind({});
export var AllCaps = Template.bind({});
AllCaps.args = { allCaps: true };
export var Secondary = Template.bind({});
Secondary.args = { color: 'secondary' };
export var Tertiary = Template.bind({});
Tertiary.args = { color: 'tertiary' };
export var CustomFontColor = Template.bind({});
CustomFontColor.args = {
    fontColor: '#09f'
};
