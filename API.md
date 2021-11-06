# API documentation

## `WT(config: Object)`

## `config` object properties
`element: HTMLElement` required, this is where the terminal will initialize.

`prefix: String` optional. Default value: `''`

`suffix: String` optional. Default value: `' $'`

`commands: Object` optional, this object contains your command functions. It is not required because one might add commands later using the returned `addCommand` or `addCommands` functions. Default value: `{}`

`help: Boolean` optional, if set to `true`, then a `help` command will be usable. It will display a list of available commands. Default value: `false`

`clear: Boolean` optional, if set to `true`, then a `clear` command will be usable. It will clear the terminal. Default value: `false`

`autofocus: Boolean` optional, if set to `true`, then the `input` element will have it's `autofocus` attribute set to `true`. This is useful if you want to focus on the terminal when the page loads. Default value: `false`

`banner: String` optional, this is useful if you for example want to display a welcome message.

Once called, it returns an object that allows you to control the terminal after initialization.

## returned object properties
`prefix: String` the prefix of the initialized terminal.

`suffix: String` the suffix of the initialized terminal.

`commands: Object` the commands of the initialized terminal.

`addCommand: Function` takes one argument. It should be a function with a name. Once called, the function will be added to the `commands` object.

`addCommands: Function` takes one argument. It should be an object with functions inside. The functions should have names. Once called, the functions will be added to the `commands` object.

`print: Function` takes one argument. It should be a string. Once called, it will display the given string in the terminal.

For usage examples, [click here](USAGE.md).
