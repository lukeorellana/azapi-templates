import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface TestbaseTestbaseaccountsPackagesProps extends IAzAPIBaseProps {

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
