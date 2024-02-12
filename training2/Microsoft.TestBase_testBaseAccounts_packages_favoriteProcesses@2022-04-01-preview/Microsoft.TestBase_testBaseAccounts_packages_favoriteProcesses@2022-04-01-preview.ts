import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface TestbaseTestbaseaccountsPackagesFavoriteprocessesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:packages;

/**
   * The actual name of the favorite process. It will be equal to resource name except for the scenario that the process name contains characters that are not allowed in the resource name.
   */
readonly actualProcessName: string;
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
