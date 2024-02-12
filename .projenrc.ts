import { cdktf } from "projen";
import { NpmAccess, UpdateSnapshot } from "projen/lib/javascript";

const project = new cdktf.ConstructLibraryCdktf({
  author: "LukeOrellana",
  authorAddress: "https://microsoft.com",
  cdktfVersion: "0.17.3",
  jsiiVersion: "~5.2.0",
  constructsVersion: "^10.1.106",
  typescriptVersion: "~5.2.0", // should always be the same major/minor as JSII
  minNodeVersion: "20.10.0",
  defaultReleaseBranch: "main",
  name: "terraform-cdk-azapi-constructs",
  projenrcTs: true,
  prerelease: "pre",
  jest: true,
  testdir: "",
  prettier: true,
  repositoryUrl: "https://github.com/lukeorellana/azapi-templates",
  licensed: false,
  pullRequestTemplate: false,
  mergify: false,
  release: false,
  npmAccess: NpmAccess.PUBLIC,
  jestOptions: {
    updateSnapshot: UpdateSnapshot.NEVER,
  },
  deps: [
    "@cdktf/provider-azurerm@9.0.8",
    "nanoid@^4.0.2",
    "ts-md5@^1.3.1",
    "cdktf@0.17.3",
    //"constructs@^10.1.106",
    "marked@^12.0.0",
    "moment@^2.30.1",
  ],
  peerDeps: ["@cdktf/provider-azurerm@9.0.8"],
  bundledDeps: ["moment@^2.30.1", "ts-md5@^1.3.1", "nanoid@^4.0.2"],
  devDeps: [
    "@cdktf/provider-azurerm@9.0.8",
    "cdktf@0.17.3",
    "@types/jest@^29.5.8",
    "@types/node@^18.7.18",
    "jest@^29.6.1",
    "ts-jest@^29.1.1",
    "ts-node@^10.9.1",
    "typescript@^4.9.5",
    //"constructs@10.1.106",
    "@types/moment@^2.13.0",
  ],
  releaseToNpm: false,
});

// Required for jest to work with CDK tests
project.jest?.addSetupFileAfterEnv("<rootDir>/setup.js");

// Fix jest warnings
if (project.jest && project.jest.config) {
  project.jest.config.globals = {};
  project.jest.config.transform = {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.dev.json" }],
  };
}
project.tsconfigDev.include.push("**/*.spec.ts");


// Add .gitignore entries
project.gitignore.include("cdk.out");
project.gitignore.exclude("cdktf.out");
project.gitignore.exclude("test");
project.gitignore.exclude("*terraform.*.tfstate*");

project.prettier?.addIgnorePattern(".github");
project.eslint?.addIgnorePattern(".github");

project.synth();