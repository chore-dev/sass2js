export const isQuoted = (input: string) => {
  return (
    (input.startsWith(`'`) && input.endsWith(`'`)) || (input.startsWith(`"`) && input.endsWith(`"`))
  );
};

export const unquote = (input: string): string => {
  if (isQuoted(input)) {
    return unquote(input.slice(1, -1));
  } else {
    return input;
  }
};
