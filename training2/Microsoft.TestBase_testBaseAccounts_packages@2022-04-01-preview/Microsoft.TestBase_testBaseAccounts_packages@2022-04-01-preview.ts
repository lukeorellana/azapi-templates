import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface TestbaseTestbaseaccountsPackagesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:testBaseAccounts;

/**
   * Application name
   */
readonly applicationName: string;

/**
   * The file path of the package.
   */
readonly blobPath: string;

/**
   * The flighting ring for feature update.
   */
readonly flightingRing: string;

/**
   * Specifies the target OSs of specific OS Update types.
   */
readonly targetOSList: TargetOSInfo[];

/**
   * The detailed test information.
   */
readonly tests: Test[];

/**
   * Application version
   */
readonly version: string;

/**
   * Specifies the baseline OSs to be tested.
   */
readonly baselineOSs?: string[];

/**
   * Specifies the OS update type to test against, e.g., 'Security updates' or 'Feature updates'.
   */
readonly osUpdateType: string;

/**
   * Specifies the target OSs to be tested.
   */
readonly targetOSs: string[];

/**
   * The commands used in the test.
   */
readonly commands: Command[];

/**
   * Indicates if this test is active.It doesn't schedule test for not active Test.
   */
readonly isActive?: bool;

/**
   * The type of the test.
   */
readonly testType: 'FunctionalTest''OutOfBoxTest';

/**
   * The action of the command.
   */
readonly action: 'Close''Custom''Install''Launch''Uninstall';

/**
   * Specifies whether to run the command even if a previous command is failed.
   */
readonly alwaysRun?: bool;

/**
   * Specifies whether to apply update before the command.
   */
readonly applyUpdateBefore?: bool;

/**
   * The content of the command. The content depends on source type.
   */
readonly content: string;

/**
   * The type of command content.
   */
readonly contentType: 'File''Inline''Path';

/**
   * Specifies the max run time of the command.
   */
readonly maxRunTime?: number;

/**
   * Specifies whether to restart the VM after the command executed.
   */
readonly restartAfter?: bool;

/**
   * Specifies whether to run the command in interactive mode.
   */
readonly runAsInteractive?: bool;

/**
   * Specifies whether to run the command as administrator.
   */
readonly runElevated?: bool;
}

/**
 * TestbaseTestbaseaccountsPackages resource
 */
export class TestbaseTestbaseaccountsPackages extends AzAPIBase {
  constructor(scope: Construct, id: string, props: TestbaseTestbaseaccountsPackagesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.TestBase/testBaseAccounts/packages@2022-04-01-preview";
  }

  protected getResourceBody(props: TestbaseTestbaseaccountsPackagesProps): string {
    return JSON.stringify(
        {properties: {applicationName: "string", blobPath: "string", flightingRing: "string", targetOSList: [{baselineOSs: ["string"], osUpdateType: "string", targetOSs: ["string"]}], tests: [{commands: [{action: "string", alwaysRun: "${bool}", applyUpdateBefore: "${bool}", content: "string", contentType: "string", maxRunTime: "${int}", name: "string", restartAfter: "${bool}", runAsInteractive: "${bool}", runElevated: "${bool}"}], isActive: "${bool}", testType: "string"}], version: "string"}}
    );
  }
}
