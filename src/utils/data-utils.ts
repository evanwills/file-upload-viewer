

/**
 * Check whether the input is a plain JavaScript object.
 *
 * @param input A value that may be an object
 *
 * @returns TRUE if the input is an object (and not NULL and not an
 *          array). FALSE otherwise
 */
export const isObj = (input : unknown) : boolean => (
  Object.prototype.toString.call(input) === '[object Object]'
);

export const asNumber = (
  input : unknown,
  _default: number,
  float: boolean = false,
) : number => {
  if (typeof input === 'number') {
    return input;
  }

  if (typeof input === 'string') {
    const output = (float === true)
      ? parseFloat(input)
      : parseInt(input, 10);

    if (!isNaN(output)) {
      return output;
    } else {
      console.error('')
    }
  }

  return _default;
}

export const propAsNumber = (
  props : {[index:string] : any},
  key : string,
  _default: number,
  float: boolean = false,
) : number => {
  if (isObj(props)) {
    return asNumber(props[key], _default, float);
  }

  return _default;
};

export const fileSizeAsBytes = (
  input : unknown,
  _default: number,
) => {
  if (typeof input === 'number') {
    return input;
  }

  if (typeof input === 'string') {
    const regex = /^([0-9]+(?:\.[0-9]+))([kmgt]b)?$/i;
    const units = ['bytes', 'kb', 'mb', 'gb', 'tb'];
    let matches : string[]|null = null;

    while ((matches = regex.exec(input)) !== null) {
      if (typeof matches[2] === 'string') {
        const pow = units.indexOf(matches[2].toLowerCase());

        return Math.round(parseFloat(matches[1]) * (1024 ** pow));
      } else {
        return parseInt(matches[1]);
      }
    }
  }

  return _default;
}

export const propAsBytes = (
  props : {[index:string] : any},
  key : string,
  _default: number,
) : number => {
  if (isObj(props)) {
    return fileSizeAsBytes(props[key], _default);
  }

  return _default;
}
