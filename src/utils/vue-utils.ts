import { ucFirst } from "./general-utils";


/**
 * Check whether a property is a non-empty string
 *
 * @param props    List of props from a given component
 * @param propName Name of the prop to be tested
 *
 * @returns TRUE if property is a string and is non-empty.
 *          FALSE otherwise.
 */
export const propHasContent = (
  props : {[index : string] : any},
  propName : string,
) : boolean => (typeof props[propName] === 'string' && props[propName].trim() !== '');

/**
 * Check whether a slot has any content
 *
 * @param slots    List of slots from a given component
 * @param slotName Name of the slot to be tested
 *
 * @returns TRUE if slot exists and is non is non-empty.
 *          FALSE otherwise.
 */
export const slotHasContent = (
  slots : {[index : string] : any},
  slotName : string,
) : boolean => (typeof slots !== 'undefined' && slots !== null && !!slots[slotName]);

/**
 * Get the right slot for the region being rendered
 *
 * @param region Region the slot is to be used in
 * @param slots  List of slots available to the component
 * @param state  Current state of componenet
 *
 * @returns Name of best slot to use
 */
export const chooseRightSlot = (
  region : string,
  slots : {[index : string] : any},
  state : string,
) : string => {
  if (slotHasContent(slots, `${region}All`)) {
    return `${region}All`;
  }

  let suffix = ucFirst(state);

  switch (state) {
    case 'empty':
    case 'viewing':
      if (slotHasContent(slots, `${region}Main`)) {
        suffix = 'Main';
      }
      break;

    case 'confirm-cancel':
    case 'confirm-complete':
      if (slotHasContent(slots, `${region}Confirm`)) {
        suffix = 'Confirm';
      }
      break;
  }

  return region + suffix;
}
