import { HelperLike } from '@glint/template';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    camelize: HelperLike<{
      Args: { Positional: [str: string] };
      Return: string;
    }>;
    capitalize: HelperLike<{
      Args: { Positional: [str: string] };
      Return: string;
    }>;
    classify: HelperLike<{
      Args: { Positional: [str: string] };
      Return: string;
    }>;
    dasherize: HelperLike<{
      Args: { Positional: [str: string] };
      Return: string;
    }>;
    'html-safe': HelperLike<{
      Args: { Positional: [str: string] };
      Return: string;
    }>;
    humanize: HelperLike<{
      Args: { Positional: [str: string] };
      Return: string;
    }>;
    lowercase: HelperLike<{
      Args: { Positional: [str: string] };
      Return: string;
    }>;
    titleize: HelperLike<{
      Args: { Positional: [str: string] };
      Return: string;
    }>;
    trim: HelperLike<{
      Args: { Positional: [str: string] };
      Return: string;
    }>;
    truncate: HelperLike<{
      Args: { Positional: [str: string | undefined, characterLimit?: number, useEllipsis?: boolean] };
      Return: string;
    }>;
    underscore: HelperLike<{
      Args: { Positional: [str: string] };
      Return: string;
    }>;
    uppercase: HelperLike<{
      Args: { Positional: [str: string] };
      Return: string;
    }>;
    w: HelperLike<{
      Args: { Positional: [str: string | string[]] };
      Return: string[];
    }>;
  }
}
