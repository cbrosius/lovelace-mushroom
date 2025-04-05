import {
  array,
  assign,
  boolean,
  object,
  optional,
  string,
  union,
} from "superstruct";
import { LovelaceCardConfig } from "../../ha";
import {
  ActionsSharedConfig,
  actionsSharedConfigStruct,
} from "../../shared/config/actions-config";
import {
  AppearanceSharedConfig,
  appearanceSharedConfigStruct,
} from "../../shared/config/appearance-config";
import { lovelaceCardConfigStruct } from "../../shared/config/lovelace-card-config";

export type BadgeConfig = {
  icon: string;
  color?: string;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
};

export type TemplateCardConfig = LovelaceCardConfig &
  AppearanceSharedConfig &
  ActionsSharedConfig & {
    entity?: string;
    icon?: string;
    icon_color?: string;
    primary?: string;
    secondary?: string;
    badges?: BadgeConfig[];
    picture?: string;
    multiline_secondary?: boolean;
    entity_id?: string | string[];
  };

export const badgeConfigStruct = object({
  icon: string(),
  color: optional(string()),
  position: optional(string()),
});

export const templateCardConfigStruct = assign(
  lovelaceCardConfigStruct,
  assign(appearanceSharedConfigStruct, actionsSharedConfigStruct),
  object({
    entity: optional(string()),
    icon: optional(string()),
    icon_color: optional(string()),
    primary: optional(string()),
    secondary: optional(string()),
    badges: optional(array(badgeConfigStruct)),
    picture: optional(string()),
    multiline_secondary: optional(boolean()),
    entity_id: optional(union([string(), array(string())])),
  })
);
