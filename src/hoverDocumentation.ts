export const Documentation = {
	mypy_path: {
		variable: `mypy_path`,
		type: `string`,
		default_value: ``,
		description: `Specifies the paths to use, after trying the paths from MYPYPATH environment variable. Useful if you'd like to keep stubs in your repo, along with the config file. Multiple paths are always separated with a \`:\` or \`,\` regardless of the platform. User home directory and environment variables will be expanded.\n\n`
	  + `Relative paths are treated relative to the working directory of the mypy command, not the config file. Use the \`MYPY_CONFIG_FILE_DIR\` environment variable to refer to paths relative to the config file (e.g. *\`mypy_path = $MYPY_CONFIG_FILE_DIR/src\`*).\n\n`
	  + `*This option may only be set in the global section (\`[mypy]\`).*\n\n`
	  + `***Note:** On Windows, use UNC paths to avoid using : (e.g. \`\\127.0.0.1\\X$\\MyDir\` where **\`X\`** is the drive letter).*`
	},
	files: {
		variable: `files`,
		type: `comma-separated list of strings`,
		default_value: ``,
		description: `A comma-separated list of paths which should be checked by mypy if none are given on the command line. Supports recursive file globbing using glob, where \`*\` (*e.g. \`*.py\`*) matches files in the current directory and \`**/\` (*e.g. \`**/*.py\`*) matches files in any directories below the current one. User home directory and environment variables will be expanded.\n\n`
	  + `*This option may only be set in the global section (\`[mypy]\`).*`
	},
	modules: {
		variable: `modules`,
		type: `comma-separated list of strings`,
		default_value: ``,
		description: `A comma-separated list of packages which should be checked by mypy if none are given on the command line. Mypy will not recursively type check any submodules of the provided module.\n\n`
	  + `*This option may only be set in the global section (\`[mypy]\`).*`
	},
	packages: {
		variable: `packages`,
		type: `comma-separated list of strings`,
		default_value: ``,
		description: `A comma-separated list of packages which should be checked by mypy if none are given on the command line. Mypy will recursively type check any submodules of the provided package. This flag is identical to modules apart from this behavior.\n\n`
	  + `*This option may only be set in the global section (\`[mypy]\`).*`
	},
	exclude: {
		variable: `exclude`,
		type: `regular expression`,
		default_value: ``,
		description: `A regular expression that matches file names, directory names and paths which mypy should ignore while recursively discovering files to check. Use forward slashes (\`/\`) as directory separators on all platforms.\n\n`
	  + `Crafting a single regular expression that excludes multiple files while remaining human-readable can be a challenge. The above example demonstrates one approach. \`(?x)\` enables the VERBOSE flag for the subsequent regular expression, which ignores most whitespace and supports comments. The above is equivalent to: \`(^one\.py$|two\.pyi$|^three\.)\`.\n\n`
	  + `For more details, see \`--exclude\`.\n\n`
	  + `*This option may only be set in the global section (\`[mypy]\`).*`
	},
	namespace_packages: {
		variable: `namespace_packages`,
		type: `boolean`,
		default_value: true,
		description: `Enables PEP 420 style namespace packages. See the corresponding flag \`--no-namespace-packages\` for more information.\n\n`
	  + `*This option may only be set in the global section (\`[mypy]\`).*`
	},
	explicit_package_bases: {
		variable: `explicit_package_bases`,
		type: `boolean`,
		default_value: false,
		description: `This flag tells mypy that top-level packages will be based in either the current directory, or a member of the \`MYPYPATH\` environment variable or \`mypy_path\` config option. This option is only useful in the absence of \`__init__.py\`. See Mapping file paths to modules for details.\n\n`
	  + `*This option may only be set in the global section (\`[mypy]\`).*`
	},
	ignore_missing_imports: {
		variable: `ignore_missing_imports`,
		type: `boolean`,
		default_value: false,
		description: `Suppresses error messages about imports that cannot be resolved.\n\n`
	  + `If this option is used in a per-module section, the module name should match the name of the imported module, not the module containing the import statement.`
	},
	follow_untyped_imports: {
		variable: `follow_untyped_imports`,
		type: `boolean`,
		default_value: false,
		description: `Makes mypy analyze imports from installed packages even if missing a \`py.typed\` marker or stubs.\n\n`
	  + `If this option is used in a per-module section, the module name should match the name of the imported module, not the module containing the import statement.`
	},
	follow_imports: {
		variable: `follow_imports`,
		type: `"normal"|"silent"|"skip"|"error"`,
		default_value: `"normal"`,
		description: `Directs what to do with imports when the imported module is found as a \`.py\` file and not part of the files, modules and packages provided on the command line.\n\n`
	  + `The four possible values are normal, silent, skip and error. For explanations see the discussion for the \`--follow-imports\` command line flag.\n\n`
	  + `Using this option in a per-module section (potentially with a wildcard, as described at the top of this page) is a good way to prevent mypy from checking portions of your code.\n\n`
	  + `If this option is used in a per-module section, the module name should match the name of the imported module, not the module containing the import statement.`
	},
	follow_imports_for_stubs: {
		variable: `follow_imports_for_stubs`,
		type: `boolean`,
		default_value: false,
		description: `Determines whether to respect the \`follow_imports\` setting even for stub (\`.pyi\`) files.\n\n`
	  + `* Used in conjunction with \`follow_imports=skip\`, this can be used to suppress the import of a module from typeshed, replacing it with \`Any\`.\n\n`
	  + `* Used in conjunction with \`follow_imports=error\`, this can be used to make any use of a particular typeshed module an error.`
	},
	python_executable: {
		variable: `python_executable`,
		type: `string`,
		default_value: ``,
		description: `Specifies the path to the Python executable to inspect to collect a list of available PEP 561 packages. User home directory and environment variables will be expanded. Defaults to the executable used to run mypy.\n\n`
	  + `*This option may only be set in the global section (\`[mypy]\`).*`
	},
	no_site_packages: {
		variable: `no_site_packages`,
		type: `boolean`,
		default_value: false,
		description: `Disables using type information in installed packages (see PEP 561). This will also disable searching for a usable Python executable. This acts the same as \`--no-site-packages\` command line flag.`
	},
	no_silence_site_packages: {
		variable: `no_silence_site_packages`,
		type: `boolean`,
		default_value: false,
		description: `Enables reporting error messages generated within installed packages (see PEP 561 for more details on distributing type information). Those error messages are suppressed by default, since you are usually not able to control errors in 3rd party code.\n\n`
	  + `*This option may only be set in the global section (\`[mypy]\`).*`
	},
	python_version: {
		variable: `python_version`,
		type: `string`,
		default_value: ``,
		description: `Specifies the Python version used to parse and check the target program. The string should be in the format \`**MAJOR**.**MINOR**\`: for example \`2.7\`. The default is the version of the Python interpreter used to run mypy.\n\n`
	  + `*This option may only be set in the global section (\`[mypy]\`).*`
	},
	platform: {
		variable: `platform`,
		type: `string`,
		default_value: ``,
		description: `Specifies the OS platform for the target program, for example darwin or win32 (meaning OS X or Windows, respectively). The default is the current platform as revealed by Python's \`sys.platform\` variable.\n\n`
	  + `*This option may only be set in the global section (\`[mypy]\`).*`
	},
	always_true: {
		variable: `always_true`,
		type: `comma-separated list of strings`,
		default_value: ``,
		description: `Specifies a list of variables that mypy will treat as compile-time constants that are always true.`
	},
	always_false: {
		variable: `always_false`,
		type: `comma-separated list of strings`,
		default_value: ``,
		description: `Specifies a list of variables that mypy will treat as compile-time constants that are always false.`
	},
	disallow_any_unimported: {
		variable: `disallow_any_unimported`,
		type: `boolean`,
		default_value: false,
		description: `Disallows usage of types that come from unfollowed imports (anything imported from an unfollowed import is automatically given a type of \`Any\`).`
	},
	disallow_any_expr: {
		variable: `disallow_any_expr`,
		type: `boolean`,
		default_value: false,
		description: `Disallows all expressions in the module that have type \`Any\`.`
	},
	disallow_any_decorated: {
		variable: `disallow_any_decorated`,
		type: `boolean`,
		default_value: false,
		description: `Disallows functions that have \`Any\` in their signature after decorator transformation.`
	},
	disallow_any_explicit: {
		variable: `disallow_any_explicit`,
		type: `boolean`,
		default_value: false,
		description: `Disallows explicit \`Any\` in type positions such as type annotations and generic type parameters.`
	},
	disallow_any_generics: {
		variable: `disallow_any_generics`,
		type: `boolean`,
		default_value: false,
		description: `Disallows usage of generic types that do not specify explicit type parameters.`
	},
	disallow_subclassing_any: {
		variable: `disallow_subclassing_any`,
		type: `boolean`,
		default_value: false,
		description: `Disallows subclassing a value of type \`Any\`.`
	},
	disallow_untyped_calls: {
		variable: `disallow_untyped_calls`,
		type: `boolean`,
		default_value: false,
		description: `Disallows calling functions without type annotations from functions with type annotations. Note that when used in per-module options, it enables/disables this check inside the module(s) specified, not for functions that come from that module(s), which will disable this check inside \`some.library\`, not for your code that imports \`some.library\`. If you want to selectively disable this check for all your code that imports \`some.library\` you should instead use \`untyped_calls_exclude\`.`
	},
	untyped_calls_exclude: {
		variable: `untyped_calls_exclude`,
		type: `comma-separated list of strings`,
		default_value: ``,
		description: `Selectively excludes functions and methods defined in specific packages, modules, and classes from action of \`disallow_untyped_calls\`. This also applies to all submodules of packages (i.e. everything inside a given prefix). Note, this option does not support per-file configuration, the exclusions list is defined globally for all your code.`
	},
	disallow_untyped_defs: {
		variable: `disallow_untyped_defs`,
		type: `boolean`,
		default_value: false,
		description: `Disallows defining functions without type annotations or with incomplete type annotations (a superset of \`disallow_incomplete_defs\`).\n\n`
	  + `For example, it would report an error for\n`
      + `    def f(a, b): ...\n`
      + `*and* for\n`
      + `    def f(a: int, b): ...\n`
	},
	disallow_incomplete_defs: {
		variable: `disallow_incomplete_defs`,
		type: `boolean`,
		default_value: false,
		description: `Disallows defining functions with incomplete type annotations, while still allowing entirely unannotated definitions.\n\n`
      + `For example, it would report an error for\n`
      + `    def f(a: int, b): ...\n`
      + `But *not*\n`
      + `    def f(a: int, b): ...\n`
	},
	check_untyped_defs: {
		variable: `check_untyped_defs`,
		type: `boolean`,
		default_value: false,
		description: `Type-checks the interior of functions without type annotations.`
	},
	disallow_untyped_decorators: {
		variable: `disallow_untyped_decorators`,
		type: `boolean`,
		default_value: false,
		description: `Reports an error whenever a function with type annotations is decorated with a decorator without annotations.`
	},
	implicit_optional: {
		variable: `implicit_optional`,
		type: `boolean`,
		default_value: false,
		description: `Causes mypy to treat parameters with a \`None\` default value as having an implicit optional type (\`T | None\`).\n\n`
	  + `***Note:** This was True by default in mypy versions \`0.980\` and earlier.*`
	},
	strict_optional: {
		variable: `strict_optional`,
		type: `boolean`,
		default_value: true,
		description: `Effectively disables checking of optional types and \`None\` values. With this option, mypy doesn't generally check the use of \`None\` values – it is treated as compatible with every type.`
	},
	warn_redundant_casts: {
		variable: `warn_redundant_casts`,
		type: `boolean`,
		default_value: false,
		description: `Warns about casting an expression to its inferred type.\n\n`
	  + `*This option may only be set in the global section (\`[mypy]\`).*`
	},
	warn_unused_ignores: {
		variable: `warn_unused_ignores`,
		type: `boolean`,
		default_value: false,
		description: `Warns about unneeded \`# type: ignore\` comments.`
	},
	warn_no_return: {
		variable: `warn_no_return`,
		type: `boolean`,
		default_value: true,
		description: `Shows errors for missing return statements on some execution paths.`
	},
	warn_return_any: {
		variable: `warn_return_any`,
		type: `boolean`,
		default_value: false,
		description: `Shows a warning when returning a value with type \`Any\` from a function declared with a non- \`Any\` return type.`
	},
	warn_unreachable: {
		variable: `warn_unreachable`,
		type: `boolean`,
		default_value: false,
		description: `Shows a warning when encountering any code inferred to be unreachable or redundant after performing type analysis.`
	},
	ignore_errors: {
		variable: `ignore_errors`,
		type: `boolean`,
		default_value: false,
		description: `Ignores all non-fatal errors.`
	},
	allow_untyped_globals: {
		variable: `allow_untyped_globals`,
		type: `boolean`,
		default_value: false,
		description: `Causes mypy to suppress errors caused by not being able to fully infer the types of global and class variables.`
	},
	allow_redefinition: {
		variable: `allow_redefinition`,
		type: `boolean`,
		default_value: false,
		description: `Allows variables to be redefined with an arbitrary type, as long as the redefinition is in the same block and nesting level as the original definition.`
	},
	local_partial_types: {
		variable: `local_partial_types`,
		type: `boolean`,
		default_value: false,
		description: `Disallows inferring variable type for \`None\` from two assignments in different scopes. This is always implicitly enabled when using the mypy daemon.`
	},
	disable_error_code: {
		variable: `disable_error_code`,
		type: `comma-separated list of strings`,
		default_value: ``,
		description: `Allows disabling one or multiple error codes globally.`
	},
	enable_error_code: {
		variable: `enable_error_code`,
		type: `comma-separated list of strings`,
		default_value: ``,
		description: `Allows enabling one or multiple error codes globally.\n\n`
	  + `***Note:** This option will override disabled error codes from the \`disable_error_code\` option.*`
	},
	extra_checks: {
		variable: `extra_checks`,
		type: `boolean`,
		default_value: false,
		description: `This flag enables additional checks that are technically correct but may be impractical in real code. See mypy \`--extra-checks\` for more info.`
	},
	implicit_reexport: {
		variable: `implicit_reexport`,
		type: `boolean`,
		default_value: true,
		description: `By default, imported values to a module are treated as exported and mypy allows other modules to import them. When **false**, mypy will not re-export unless the item is imported using from-as or is included in \`__all__\`. Note that mypy treats stub files as if this is always disabled.`
	},
	strict_concatenate: {
		variable: `strict_concatenate`,
		type: `boolean`,
		default_value: false,
		description: `Make arguments prepended via Concatenate be truly positional-only.`
	},
	strict_equality: {
		variable: `strict_equality`,
		type: `boolean`,
		default_value: false,
		description: `Prohibit equality checks, identity checks, and container checks between non-overlapping types.`
	},
	strict: {
		variable: `strict`,
		type: `boolean`,
		default_value: false,
		description: `Enable all optional error checking flags. You can see the list of flags enabled by strict mode in the full mypy \`--help\` output.\n\n`
	  + `***Note:** the exact list of flags enabled by strict may change over time.*`
	},
	show_error_context: {
		variable: `show_error_context`,
		type: `boolean`,
		default_value: false,
		description: `Prefixes each error with the relevant context.`
	},
	show_column_numbers: {
		variable: `show_column_numbers`,
		type: `boolean`,
		default_value: false,
		description: `Shows column numbers in error messages.`
	},
	show_error_code_links: {
		variable: `show_error_code_links`,
		type: `boolean`,
		default_value: false,
		description: `Shows documentation link to corresponding error code.`
	},
	hide_error_codes: {
		variable: `hide_error_codes`,
		type: `boolean`,
		default_value: false,
		description: `Hides error codes in error messages. See Error codes for more information.`
	},
	pretty: {
		variable: `pretty`,
		type: `boolean`,
		default_value: false,
		description: `Use visually nicer output in error messages: use soft word wrap, show source code snippets, and show error location markers.`
	},
	color_output: {
		variable: `color_output`,
		type: `boolean`,
		default_value: true,
		description: `Shows error messages with color enabled.`
	},
	error_summary: {
		variable: `error_summary`,
		type: `boolean`,
		default_value: true,
		description: `Shows a short summary line after error messages.`
	},
	show_absolute_path: {
		variable: `show_absolute_path`,
		type: `boolean`,
		default_value: false,
		description: `Show absolute paths to files.`
	},
	force_uppercase_builtins: {
		variable: `force_uppercase_builtins`,
		type: `boolean`,
		default_value: false,
		description: `Always use List instead of list in error messages, even on *Python 3.9+*.`
	},
	force_union_syntax: {
		variable: `force_union_syntax`,
		type: `boolean`,
		default_value: false,
		description: `Always use \`Union[]\` and \`Optional[]\` for union types in error messages (instead of the \`|\` operator), even on *Python 3.10+*.`
	},
	incremental: {
		variable: `incremental`,
		type: `boolean`,
		default_value: true,
		description: `Enables incremental mode.`
	},
	cache_dir: {
		variable: `cache_dir`,
		type: `string`,
		default_value: `".mypy_cache"`,
		description: `Specifies the location where mypy stores incremental cache info. User home directory and environment variables will be expanded. This setting will be overridden by the \`MYPY_CACHE_DIR\` environment variable.\n\n`
	  + `Note that the cache is only read when incremental mode is enabled but is always written to, unless the value is set to \`/dev/null\` (UNIX) or \`nul\` (Windows).`
	},
	sqlite_cache: {
		variable: `sqlite_cache`,
		type: `boolean`,
		default_value: false,
		description: `Use an SQLite database to store the cache.`
	},
	cache_fine_grained: {
		variable: `cache_fine_grained`,
		type: `boolean`,
		default_value: false,
		description: `Include fine-grained dependency information in the cache for the mypy daemon.`
	},
	skip_version_check: {
		variable: `skip_version_check`,
		type: `boolean`,
		default_value: false,
		description: `Makes mypy use incremental cache data even if it was generated by a different version of mypy. (By default, mypy will perform a version check and regenerate the cache if it was written by older versions of mypy.)`
	},
	skip_cache_mtime_checks: {
		variable: `skip_cache_mtime_checks`,
		type: `boolean`,
		default_value: false,
		description: `Skip cache internal consistency checks based on mtime.`
	},
	plugins: {
		variable: `plugins`,
		type: `comma-separated list of strings`,
		default_value: ``,
		description: `A comma-separated list of mypy plugins. See Extending mypy using plugins.`
	},
	pdb: {
		variable: `pdb`,
		type: `boolean`,
		default_value: false,
		description: `Invokes pdb on fatal error.`
	},
	show_traceback: {
		variable: `show_traceback`,
		type: `boolean`,
		default_value: false,
		description: `Shows traceback on fatal error.`
	},
	raise_exceptions: {
		variable: `raise_exceptions`,
		type: `boolean`,
		default_value: false,
		description: `Raise exception on fatal error.`
	},
	custom_typing_module: {
		variable: `custom_typing_module`,
		type: `string`,
		default_value: ``,
		description: `Specifies a custom module to use as a substitute for the typing module.`
	},
	custom_typeshed_dir: {
		variable: `custom_typeshed_dir`,
		type: `string`,
		default_value: ``,
		description: `This specifies the directory where mypy looks for standard library typeshed stubs, instead of the typeshed that ships with mypy. This is primarily intended to make it easier to test typeshed changes before submitting them upstream, but also allows you to use a forked version of typeshed.\n\n`
	  + `User home directory and environment variables will be expanded.\n\n`
	  + `Note that this doesn't affect third-party library stubs. To test third-party stubs, for example try \`MYPYPATH=stubs/six mypy ....\`.`
	},
	warn_incomplete_stub: {
		variable: `warn_incomplete_stub`,
		type: `boolean`,
		default_value: false,
		description: `Warns about missing type annotations in typeshed. This is only relevant in combination with \`disallow_untyped_defs\` or \`disallow_incomplete_defs\`.`
	},
	any_exprs_report: {
		variable: `any_exprs_report`,
		type: `string`,
		default_value: ``,
		description: `Causes mypy to generate a text file report documenting how many expressions of type \`Any\` are present within your codebase.`
	},
	cobertura_xml_report: {
		variable: `cobertura_xml_report`,
		type: `string`,
		default_value: ``,
		description: `Causes mypy to generate a Cobertura XML type checking coverage report.\n\n`
	  + `To generate this report, you must either manually install the \`lxml\` library or specify mypy installation with the setuptools extra \`mypy[reports]\`.`
	},
	html_report: {
		variable: `html_report`,
		type: `string`,
		default_value: ``,
		description: `Causes mypy to generate an HTML type checking coverage report.\n\n`
	  + `To generate this report, you must either manually install the \`lxml\` library or specify mypy installation with the setuptools extra \`mypy[reports]\`.`
	},
	xslt_html_report: {
		variable: `xslt_html_report`,
		type: `string`,
		default_value: ``,
		description: `Causes mypy to generate an HTML type checking coverage report.\n\n`
	  + `To generate this report, you must either manually install the \`lxml\` library or specify mypy installation with the setuptools extra \`mypy[reports]\`.`
	},
	linecount_report: {
		variable: `linecount_report`,
		type: `string`,
		default_value: ``,
		description: `Causes mypy to generate a text file report documenting the functions and lines that are typed and untyped within your codebase.`
	},
	linecoverage_report: {
		variable: `linecoverage_report`,
		type: `string`,
		default_value: ``,
		description: `Causes mypy to generate a JSON file that maps each source file's absolute filename to a list of line numbers that belong to typed functions in that file.`
	},
	lineprecision_report: {
		variable: `lineprecision_report`,
		type: `string`,
		default_value: ``,
		description: `Causes mypy to generate a flat text file report with per-module statistics of how many lines are typechecked etc.`
	},
	txt_report: {
		variable: `txt_report`,
		type: `string`,
		default_value: ``,
		description: `Causes mypy to generate a text file type checking coverage report.\n\n`
	  + `To generate this report, you must either manually install the \`lxml\` library or specify mypy installation with the setuptools extra \`mypy[reports]\`.`
	},
	xslt_txt_report: {
		variable: `xslt_txt_report`,
		type: `string`,
		default_value: ``,
		description: `Causes mypy to generate a text file type checking coverage report.\n\n`
	  + `To generate this report, you must either manually install the \`lxml\` library or specify mypy installation with the setuptools extra \`mypy[reports]\`.`
	},
	xml_report: {
		variable: `xml_report`,
		type: `string`,
		default_value: ``,
		description: `Causes mypy to generate an XML type checking coverage report.\n\n`
	  + `To generate this report, you must either manually install the \`lxml\` library or specify mypy installation with the setuptools extra \`mypy[reports]\`.`
	},
	junit_xml: {
		variable: `junit_xml`,
		type: `string`,
		default_value: ``,
		description: `Causes mypy to generate a JUnit XML test result document with type checking results. This can make it easier to integrate mypy with continuous integration (CI) tools.`
	},
	scripts_are_modules: {
		variable: `scripts_are_modules`,
		type: `boolean`,
		default_value: false,
		description: `Makes script \`x\` become module \`x\` instead of \`__main__\`. This is useful when checking multiple scripts in a single run.`
	},
	warn_unused_configs: {
		variable: `warn_unused_configs`,
		type: `boolean`,
		default_value: false,
		description: `Warns about per-module sections in the config file that do not match any files processed when invoking mypy. (This requires turning off incremental mode using incremental = \`False\`.)`
	},
	verbosity: {
		variable: `verbosity`,
		type: `integer`,
		default_value: 0,
		description: `Controls how much debug output will be generated. Higher numbers are more verbose.`
	}
};