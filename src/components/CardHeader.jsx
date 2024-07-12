import { IconExpand } from "@consta/icons/IconExpand";
import { IconSettings } from "@consta/icons/IconSettings";
import { Button } from "@consta/uikit/Button";
import { Text } from "@consta/uikit/Text";
import React from "react";

const CardHeader = ({ label }) => (
  <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between w-full">
    <Text className="title-xs" as="h4" view="primary" size="x">
      {label}
    </Text>
    <div className="MixFlex MixFlex_gap_2xs">
      <Button view="clear" size="xs" iconLeft={IconExpand} />
      <Button view="clear" size="xs" iconLeft={IconSettings} />
    </div>
  </div>
);

export default CardHeader;
