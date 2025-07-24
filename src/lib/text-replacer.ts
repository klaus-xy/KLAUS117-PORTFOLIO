type ReplacementFunction = (key: string) => string;

// Returns a function that takes in a string and returns a string.
export function createStringReplacer(
  replacements: Record<string, ReplacementFunction>
) {
  return (input: string): string => {
    let result = input;
    for (const [key, replacer] of Object.entries(replacements)) {
      //const regex = new RegExp(`\\[${key}\\]`, "g");
      const regex = new RegExp(key, "g"); // Use this if you want to inculde the brackets in the replacement
      result = result.replace(regex, replacer(key));
    }
    return result;
  };
}
