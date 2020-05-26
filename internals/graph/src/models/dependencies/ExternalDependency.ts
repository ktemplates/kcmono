import { Dependency } from "./Dependency";
import { DependencyCategory } from "./DependencyCategory";
import { DependencyType } from "./DependencyType";
import { DependenciesClassify } from "../../constants/classify";
import { Dependencies } from "./Dependencies";

export class ExternalDependency extends Dependency {
  constructor(name: string, version: string, category: DependencyCategory) {
    super(name, version, DependencyType.EXTERNAL, category);
  }
}

export class ExternalDependencies {
  static from(classify: DependenciesClassify, p: Record<string, string>, internal: Dependencies): ExternalDependency[] {
    return Object.keys(p)
      .map(name => {
        const i = internal.get(name);
        if (i) return i;

        const version = p[name];
        return new ExternalDependency(name, version, classify.type(name, version));
      })
      .filter(v => {
        if (v.type === DependencyType.EXTERNAL) {
          return v.category !== DependencyCategory.UNKNOWN;
        }
        return true;
      });
  }
}
