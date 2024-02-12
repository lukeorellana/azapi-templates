import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface TestbaseTestbaseaccountsPackagesFavoriteprocessesProps extends IAzAPIBaseProps {

}

/**
 * TestbaseTestbaseaccountsPackagesFavoriteprocesses resource
 */
export class TestbaseTestbaseaccountsPackagesFavoriteprocesses extends AzAPIBase {
  constructor(scope: Construct, id: string, props: TestbaseTestbaseaccountsPackagesFavoriteprocessesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.TestBase/testBaseAccounts/packages/favoriteProcesses@2022-04-01-preview";
  }

  protected getResourceBody(props: TestbaseTestbaseaccountsPackagesFavoriteprocessesProps): string {
    return JSON.stringify(
        {properties: {actualProcessName: "string"}}
    );
  }
}
