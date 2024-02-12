import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface TestbaseTestbaseaccountsProps extends IAzAPIBaseProps {

}

/**
 * TestbaseTestbaseaccounts resource
 */
export class TestbaseTestbaseaccounts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: TestbaseTestbaseaccountsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.TestBase/testBaseAccounts@2022-04-01-preview";
  }

  protected getResourceBody(props: TestbaseTestbaseaccountsProps): string {
    return JSON.stringify(
        {properties: {sku: {locations: ["string"], name: "string", resourceType: "string", tier: "Standard"}}}
    );
  }
}
