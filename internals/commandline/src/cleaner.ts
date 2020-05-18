import del from "del";
import { Command } from "./models/Command";
import { Method } from "./models/Method";

type Option = { all: boolean };

const cli = new Command(process.cwd(), new Method<Option>());
cli.build(({ helper }) => {
  return async (opt?: Option): Promise<void> => {
    const logs = helper.parentPath("**/*.log");
    const lib = helper.parentPath("lib");

    const arr = [logs, lib];
    if (opt?.all ?? false) {
      const nodeModules = helper.parentPath("node_modules");
      const lock = helper.parentPath("yarn.lock");
      arr.push(nodeModules, lock);
    }

    const deletedPaths = await del(arr);
    console.log("Deleted files and directories:\n", deletedPaths.join("\n"));
  };
});

cli.start({ all: false });
