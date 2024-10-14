import {parseEntriesIntoStructuredData} from './parse-entries';

export const extractStructuredFormData = <T = any>(formElement: EventTarget) => {
  const rawFormData = new FormData(formElement as HTMLFormElement);
  const formEntries = Object.fromEntries(rawFormData) as Record<string, string | undefined>;
  return parseEntriesIntoStructuredData<T>(formEntries);
};
