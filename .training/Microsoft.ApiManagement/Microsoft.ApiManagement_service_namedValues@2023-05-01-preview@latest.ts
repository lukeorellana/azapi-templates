import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceNamedvaluesProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceNamedvalues resource
 */
export class ApimanagementServiceNamedvalues extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceNamedvaluesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/namedValues@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceNamedvaluesProps): string {
    return JSON.stringify(
        {properties: {displayName: "string", keyVault: {identityClientId: "string", secretIdentifier: "string"}, secret: "${bool}", tags: ["string"], value: "string"}}
    );
  }
}
