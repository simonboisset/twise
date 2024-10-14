# Twise form

## Installation

```bash
yarn add @twise/form
```

## Use name propertie of inputs

To have access to form values without input control you must use the name propertie of each input.
If you have any value wich is not a real input value you must add an hidden input with the name you want.

## Name convention

Your form value will be an object with keys as each input names in your form.
You can define nested object and array with '-' in your name like this :

```ts
// List of your inputs names
'name.lastname';
'name.firstname';
'age';
'contacts.0.userId';
'contacts.0.text';
'contacts.1.userId';
'contacts.1.text';

// Your data will be like this

type Data = {
  name: { lastname: string; firstname: string };
  age: string;
  contacts: [{ userId: string; text: string }, { userId: string; text: string }];
};
```

## Use form data or search params

```ts
import { getRequestSearchData, getRequestFormData } from '@twise/form';

const data = getRequestSearchData(formData);
// or
const data = getRequestFormData(searchParams);
```
