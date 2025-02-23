import * as React from 'react';

/**
 * @internal
 * The context provided by TooltipProvider
 */
export type TooltipVisibilityContextValue = {
  /**
   * When a tooltip is shown, it sets itself as the visibleTooltip.
   * The next tooltip to become visible can use it to hide the previous tooltip immediately.
   */
  visibleTooltip?: {
    hide: () => void;
  };
};

/**
 * @internal
 * Context shared by all of the tooltips in the app
 */
// eslint-disable-next-line @fluentui/no-context-default-value
const TooltipVisibilityContext = React.createContext<TooltipVisibilityContextValue>({});

/**
 * @internal
 */
export const TooltipVisibilityProvider = TooltipVisibilityContext.Provider;

/**
 * @internal
 */
export function useTooltipVisibility(): TooltipVisibilityContextValue {
  return React.useContext(TooltipVisibilityContext);
}
