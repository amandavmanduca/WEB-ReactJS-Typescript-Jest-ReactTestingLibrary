import IMask from "imask";

export function formatMacAddress(data: string) {
    var masked = IMask.createMask({
        mask: '**-**-**-**-**-**',
    });
    var maskedValue = masked.resolve(data);
    return maskedValue
}

export function macAddressMask(value: string) {
    return value && value
      .replace(/(\w{2})(\w)/, '$1-$2')
      .replace(/(\w{2})(\w)/, '$1-$2')
      .replace(/(\w{2})(\w)/, '$1-$2')
      .replace(/(\w{2})(\w)/, '$1-$2')
      .replace(/(\w{2})(\w)/, '$1-$2')
      .replace(/(\w{2})(\w)/, '$1-$2')
}

export const apiURL = process.env.REACT_APP_API_URL