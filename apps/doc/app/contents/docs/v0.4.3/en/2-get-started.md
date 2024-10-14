# Getting Started

This guide will walk you through the process of setting up and using @twise/i18n in your project. We'll cover installation, basic configuration, and a simple usage example.

## Installation

First, you need to install @twise/i18n in your project. You can do this using npm, yarn, or pnpm.

Using npm:

```bash
npm install @twise/i18n
```

Using yarn:

```bash
yarn add @twise/i18n
```

Using pnpm:

```bash
pnpm add @twise/i18n
```

## Basic Setup

Once you've installed @twise/i18n, you can start using it in your project. Here's a step-by-step guide to set up a basic translation system:

### 1. Create a Translation Object

First, create a file to define your translations. For example, `translations.ts`:

```typescript
import {plural} from '@twise/i18n';

export const en = {
  hello: 'Hello',
  helloName: 'Hello, {{name}}',
  youHaveMessages: plural({
    none: 'You have no messages',
    one: 'You have 1 message',
    other: 'You have {{count}} messages',
  }),
} as const;
```

### 2. Create a Translator

Next, create a translator using your translation object:

```typescript
import {createTranslator} from '@twise/i18n';
import {en} from './translations';

const translator = createTranslator(en);
```

### 3. Use the Translator

Now you can use the translator in your application:

```typescript
// Simple translation
const greeting = translator(t => t.hello);
console.log(greeting); // Output: 'Hello'

// Translation with variables
const nameGreeting = translator(t => t.helloName({name: 'World'}));
console.log(nameGreeting); // Output: 'Hello, World'

// Pluralization
const noMessages = translator(t => t.youHaveMessages({count: 0}));
console.log(noMessages); // Output: 'You have no messages'

const oneMessage = translator(t => t.youHaveMessages({count: 1}));
console.log(oneMessage); // Output: 'You have 1 message'

const manyMessages = translator(t => t.youHaveMessages({count: 5}));
console.log(manyMessages); // Output: 'You have 5 messages'
```

## Type Safety

One of the key features of @twise/i18n is its type safety. TypeScript will catch errors if you try to use non-existent keys or provide incorrect variables:

```typescript
// This will cause a TypeScript error because 'nonexistent' is not a valid key
translator(t => t.nonexistent);

// This will cause a TypeScript error because 'age' is not a valid variable for helloName
translator(t => t.helloName({age: 30}));
```

## Next Steps

This basic setup demonstrates the core functionality of @twise/i18n. In the following sections, we'll explore more advanced features such as:

- Working with multiple languages
- Using dictionaries for language switching
- Implementing lazy loading for large translation sets
- Advanced pluralization and variable usage

By mastering these concepts, you'll be able to create robust, type-safe internationalization systems for your TypeScript projects.
