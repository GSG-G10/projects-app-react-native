import React from "react";
//@ts-ignore
import OptionMenu from "react-native-option-menu";
import { Icon } from "../Icon";
const optionsIcon = <Icon iconName="setting" color="#000" raised={false} />;

type OptionsMenuProps = {
  options: any[];
  actions: (() => void)[];
  style?: any;
};

export function OptionsMenu({ options, actions, style }: OptionsMenuProps) {
  return (
    <OptionMenu
      customButton={optionsIcon}
      buttonStyle={style || { width: 32, height: 8, margin: 7.5 }}
      destructiveIndex={1}
      options={options}
      actions={actions}
    />
  );
}
