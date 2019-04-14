import * as shell from "shelljs";

shell.mkdir("-p", "dist");
shell.cp("-R", "src/*.html", "dist/");
